import { pgTable, varchar, timestamp, text, jsonb } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const offices = pgTable("offices", {
  id: varchar("id", { length: 128 })
    .primaryKey()
    .$defaultFn(() => createId()),
  name: varchar("name", { length: 255 }).notNull(),
  province: varchar("province", { length: 255 }).notNull(),
  address: text("address"),
  city: varchar("city", { length: 255 }),
  postalCode: varchar("postal_code", { length: 10 }),
  phone: varchar("phone", { length: 20 }),
  email: varchar("email", { length: 255 }),
  // JSON array of available procedure types
  availableProcedures: jsonb("available_procedures").$type<string[]>(),
  // Operating hours, schedules, etc.
  metadata: jsonb("metadata").$type<{
    hours?: string;
    notes?: string;
    website?: string;
  }>(),
  isActive: varchar("is_active", { length: 10 }).default("true").notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
});
