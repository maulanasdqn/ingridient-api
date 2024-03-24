import { createSelectSchema } from "drizzle-zod";
import { roles } from "@/drizzle";
import { z } from "zod";
import { TBaseResponse } from "@/modules/base";

export const roleResponse = createSelectSchema(roles)
  .omit({
    permissions: true,
  })
  .extend({
    permissions: z.array(z.string()).optional().nullable(),
  });

export type TRoleResponse = TBaseResponse<Array<z.infer<typeof roleResponse>>>;
export type TRoleSingleResponse = TBaseResponse<z.infer<typeof roleResponse> | null | undefined>;
