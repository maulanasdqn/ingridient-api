import { createInsertSchema } from 'drizzle-zod'
import { roles } from '@/drizzle'
import { z } from 'zod'

export const roleCreateRequest = createInsertSchema(roles).omit({
  id: true,
  permissions: true,
  createdAt: true,
  updatedAt: true
}).extend({
  permissions: z.array(z.string()).optional()
})

export const roleUpdateRequest = createInsertSchema(roles).omit({
  permissions: true,
  createdAt: true,
  updatedAt: true
}).extend({
  permissions: z.array(z.string()).optional()
})

export type TRoleCreateRequest = z.infer<typeof roleCreateRequest>
export type TRoleUpdateRequest = z.infer<typeof roleUpdateRequest>
