import {
  pgTable,
  varchar,
  timestamp,
  text,
  boolean,
  jsonb,
} from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";
import { users } from "./users";

export const notifications = pgTable("notifications", {
  id: varchar("id", { length: 128 })
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: varchar("user_id", { length: 128 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  channel: varchar("channel", { length: 50 }).notNull(), // email, whatsapp, sms, telegram, push
  type: varchar("type", { length: 50 }).notNull(), // appointment_found, reminder, status_update, system
  subject: varchar("subject", { length: 255 }),
  message: text("message").notNull(),
  status: varchar("status", { length: 50 }).default("pending").notNull(), // pending, sent, failed, read
  sentAt: timestamp("sent_at", { mode: "date" }),
  readAt: timestamp("read_at", { mode: "date" }),
  failureReason: text("failure_reason"),
  // Store additional data like tracking IDs, external IDs, etc.
  metadata: jsonb("metadata").$type<{
    externalId?: string;
    trackingId?: string;
    templateId?: string;
    attachments?: string[];
  }>(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});

// User notification preferences
export const notificationPreferences = pgTable("notification_preferences", {
  id: varchar("id", { length: 128 })
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: varchar("user_id", { length: 128 })
    .notNull()
    .unique()
    .references(() => users.id, { onDelete: "cascade" }),
  emailEnabled: boolean("email_enabled").default(true).notNull(),
  whatsappEnabled: boolean("whatsapp_enabled").default(false).notNull(),
  smsEnabled: boolean("sms_enabled").default(false).notNull(),
  telegramEnabled: boolean("telegram_enabled").default(false).notNull(),
  pushEnabled: boolean("push_enabled").default(true).notNull(),
  // Notification frequency settings
  appointmentAlerts: boolean("appointment_alerts").default(true).notNull(),
  reminderAlerts: boolean("reminder_alerts").default(true).notNull(),
  systemAlerts: boolean("system_alerts").default(true).notNull(),
  marketingAlerts: boolean("marketing_alerts").default(false).notNull(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
});
