import { pgTable, text, uuid } from "drizzle-orm/pg-core";
import { baseSchema } from "../base";
import { relations } from "drizzle-orm";
import { orders } from "../order/order.schema";

export const places = pgTable("places", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  ...baseSchema,
});

export const placeRelations = relations(places, ({ many }) => ({
  order: many(orders),
}));
