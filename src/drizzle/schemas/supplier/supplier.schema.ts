import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { baseSchema } from "../base";
import { relations } from "drizzle-orm";
import { purchases } from "../purchase/purchase.schema";

export const suppliers = pgTable("suppliers", {
  id: uuid("id").defaultRandom().primaryKey(),
  fullname: text("fullname").notNull(),
  address: text("address").notNull(),
  phoneNumber: text("phone_number").notNull(),
  ...baseSchema,
});

export const supplierRelations = relations(suppliers, ({ many }) => ({
  purchase: many(purchases),
}));
