import {
  pgTable,
  varchar,
  timestamp,
  text,
  boolean,
  integer,
} from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";
import { users } from "./users";

export const searches = pgTable("searches", {
  id: varchar("id", { length: 128 })
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: varchar("user_id", { length: 128 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  province: varchar("province", { length: 255 }).notNull(),
  office: varchar("office", { length: 255 }).notNull(),
  procedureType: varchar("procedure_type", { length: 255 }).notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  checkInterval: integer("check_interval").default(60).notNull(), // seconds
  lastCheckedAt: timestamp("last_checked_at", { mode: "date" }),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
});

export const alerts = pgTable("alerts", {
  id: varchar("id", { length: 128 })
    .primaryKey()
    .$defaultFn(() => createId()),
  searchId: varchar("search_id", { length: 128 })
    .notNull()
    .references(() => searches.id, { onDelete: "cascade" }),
  type: varchar("type", { length: 50 }).notNull(), // 'availability', 'verification'
  message: text("message").notNull(),
  metadata: text("metadata"), // JSON string
  sentAt: timestamp("sent_at", { mode: "date" }),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});

export const checkLogs = pgTable("check_logs", {
  id: varchar("id", { length: 128 })
    .primaryKey()
    .$defaultFn(() => createId()),
  searchId: varchar("search_id", { length: 128 })
    .notNull()
    .references(() => searches.id, { onDelete: "cascade" }),
  status: varchar("status", { length: 50 }).notNull(), // 'success', 'error', 'no_slots'
  slotsFound: integer("slots_found").default(0),
  errorMessage: text("error_message"),
  metadata: text("metadata"), // JSON string
  checkedAt: timestamp("checked_at", { mode: "date" }).defaultNow().notNull(),
});
