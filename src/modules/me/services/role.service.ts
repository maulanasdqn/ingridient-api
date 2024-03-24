import { TMetaRequest } from "@/modules/base";
import { db, roles } from "@/drizzle";
import { TRoleResponse, TRoleSingleResponse } from "../applications";
import { asc, eq, ilike, or } from "drizzle-orm";
import { calculateTotalPages, metaResponsePrefix } from "@/utils";

export const roleService = {
  findMany: async (input: TMetaRequest): Promise<TRoleResponse> => {
    try {
      const page = input?.page || 1;
      const perPage = input?.perPage || 10;
      const offset = (page - 1) * perPage;

      const data = await db
        .select()
        .from(roles)
        .where(or(ilike(roles.name, `%${input?.search || ""}%`)))
        .limit(perPage)
        .offset(input?.search ? 0 : offset)
        .orderBy(roles.createdAt, asc(roles.createdAt));

      const count = await db
        .select({ id: roles.id })
        .from(roles)
        .then((res) => res.length);

      const totalPage = calculateTotalPages(count, perPage);
      const nextPage = page < totalPage ? page + 1 : null;
      const prevPage = page > 1 ? page - 1 : null;

      const metaPrefix: TRoleResponse = {
        data,
        meta: {
          message: "Berhasil menampilkan roles",
          page,
          perPage,
          totalPage,
          nextPage,
          prevPage,
        },
      };
      return metaResponsePrefix(metaPrefix);
    } catch (err) {
      throw new Error(err as string);
    }
  },

  findUnique: async (id: string): Promise<TRoleSingleResponse> => {
    try {
      const data = await db
        .select()
        .from(roles)
        .where(eq(roles.id, id))
        .then((res) => (res.length ? res.at(0) : null));

      const metaPrefix: TRoleSingleResponse = {
        data,
        meta: {
          message: "Berhasil menemukan roles",
        },
      };

      return metaResponsePrefix(metaPrefix);
    } catch (err) {
      throw new Error(err as string);
    }
  },
};
