import { z } from "zod";
import { createSelectSchema } from "drizzle-zod";
import { users } from "@/drizzle";
import { TBaseResponse } from "@/modules/base";
import { roleResponse } from "./role.response";

export const userResponse = createSelectSchema(users)
  .omit({
    password: true,
    roleId: true,
  })
  .extend({
    role: roleResponse.omit({
      createdAt: true,
      updatedAt: true,
    }),
  });

export type TUserResponse = TBaseResponse<Array<z.infer<typeof userResponse>>>;
export type TUserSingleResponse = TBaseResponse<z.infer<typeof userResponse>>;
