import { createInsertSchema } from "drizzle-zod";
import { users } from "@/drizzle";
import { z } from "zod";

export const userCreateRequest = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const userUpdateRequest = createInsertSchema(users).omit({
  createdAt: true,
  updatedAt: true,
});

export type TUserCreateRequest = z.infer<typeof userCreateRequest>;
export type TUserUpdateRequest = z.infer<typeof userUpdateRequest>;
