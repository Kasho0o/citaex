import {
  pgTable,
  varchar,
  timestamp,
  integer,
  boolean,
  jsonb,
} from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";
import { users } from "./users";

export const subscriptions = pgTable("subscriptions", {
  id: varchar("id", { length: 128 })
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: varchar("user_id", { length: 128 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  plan: varchar("plan", { length: 50 }).notNull(), // free, pro, premium
  status: varchar("status", { length: 50 }).default("active").notNull(), // active, cancelled, expired, past_due
  stripeCustomerId: varchar("stripe_customer_id", { length: 255 }),
  stripeSubscriptionId: varchar("stripe_subscription_id", { length: 255 }),
  stripePriceId: varchar("stripe_price_id", { length: 255 }),
  // Billing
  currentPeriodStart: timestamp("current_period_start", { mode: "date" }),
  currentPeriodEnd: timestamp("current_period_end", { mode: "date" }),
  cancelAtPeriodEnd: boolean("cancel_at_period_end").default(false).notNull(),
  canceledAt: timestamp("canceled_at", { mode: "date" }),
  // Trial
  trialStart: timestamp("trial_start", { mode: "date" }),
  trialEnd: timestamp("trial_end", { mode: "date" }),
  // Limits
  searchesLimit: integer("searches_limit").default(1).notNull(),
  searchesUsed: integer("searches_used").default(0).notNull(),
  // Store additional subscription data
  metadata: jsonb("metadata").$type<{
    paymentMethod?: string;
    couponId?: string;
    referralSource?: string;
  }>(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
});

// Payment history
export const payments = pgTable("payments", {
  id: varchar("id", { length: 128 })
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: varchar("user_id", { length: 128 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  subscriptionId: varchar("subscription_id", { length: 128 }).references(
    () => subscriptions.id,
    { onDelete: "set null" }
  ),
  stripePaymentIntentId: varchar("stripe_payment_intent_id", { length: 255 }),
  amount: integer("amount").notNull(), // Amount in cents
  currency: varchar("currency", { length: 3 }).default("eur").notNull(),
  status: varchar("status", { length: 50 }).notNull(), // succeeded, failed, pending, refunded
  description: varchar("description", { length: 500 }),
  receiptUrl: varchar("receipt_url", { length: 500 }),
  metadata: jsonb("metadata").$type<{
    invoiceId?: string;
    refundId?: string;
  }>(),
  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});
