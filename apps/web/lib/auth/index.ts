import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@repo/db/client";
import * as schema from "@repo/db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day (refresh session every day)
  },
  user: {
    additionalFields: {
      phone: {
        type: "string",
        required: false,
      },
      whatsapp: {
        type: "string",
        required: false,
      },
      language: {
        type: "string",
        defaultValue: "es",
      },
      plan: {
        type: "string",
        defaultValue: "free",
      },
    },
  },
  advanced: {
    generateId: false, // We use cuid2 from schema
    crossSubDomainCookies: {
      enabled: true,
      domain: process.env.NODE_ENV === "production"
        ? ".micitaextranjeria.com"
        : undefined,
    },
  },
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.User;
