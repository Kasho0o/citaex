import {
  pgTable,
  varchar,
  timestamp,
  text,
  date,
  jsonb,
} from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";
import { users } from "./users";
import { offices } from "./offices";

export const appointments = pgTable("appointments", {
  id: varchar("id", { length: 128 })
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: varchar("user_id", { length: 128 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  officeId: varchar("office_id", { length: 128 })
    .notNull()
    .references(() => offices.id, { onDelete: "cascade" }),
  procedureType: varchar("procedure_type", { length: 255 }).notNull(),
  targetDate: date("target_date", { mode: "date" }), // Preferred appointment date
  status: varchar("status", { length: 50 }).default("pending").notNull(), // pending, confirmed, cancelled, completed
  confirmationCode: varchar("confirmation_code", { length: 100 }),
  appointmentDate: timestamp("appointment_date", { mode: "date" }),
  notes: text("notes"),
  // Store additional appointment details
  metadata: jsonb("metadata").$type<{
    nie?: string;
    passport?: string;
    documents?: string[];
    reminderSent?: boolean;
  }>(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
});
