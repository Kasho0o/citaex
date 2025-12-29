# 🗄️ Database Setup Guide

This guide will help you set up and manage the PostgreSQL database for the Cita Extranjería platform.

## 📋 Database Schema Overview

### Core Tables

#### 1. Users & Authentication
- **users** - User accounts with contact details and plan information
- **sessions** - Active user sessions (managed by Better-Auth)
- **accounts** - OAuth provider connections
- **verifications** - Email verification tokens

#### 2. Appointments & Searches
- **searches** - User-configured appointment searches
- **alerts** - Search alerts sent to users
- **check_logs** - History of appointment availability checks
- **appointments** - Actual appointments booked by users
- **offices** - Immigration offices across Spain

#### 3. Notifications
- **notifications** - All notifications sent to users
- **notification_preferences** - User notification channel preferences

#### 4. Subscriptions & Payments
- **subscriptions** - User subscription plans and status
- **payments** - Payment transaction history

## 🚀 Quick Start

### 1. Create a Neon Database

1. Go to [neon.tech](https://neon.tech)
2. Create a free account
3. Create a new project: "citaex-production"
4. Copy the connection string

### 2. Configure Environment Variables

```bash
# In your .env.local file
DATABASE_URL="postgresql://user:password@ep-xxx.neon.tech/citaex?sslmode=require"
```

### 3. Push Schema to Database

```bash
cd packages/db
pnpm db:push
```

This will create all tables based on your Drizzle schema.

### 4. Seed Initial Data

```bash
cd packages/db
pnpm db:seed
```

This will populate:
- Sample immigration offices in Madrid, Barcelona, Valencia, Sevilla
- Default notification preferences
- Example procedure types

## 📊 Database Commands

### View Database in Browser
```bash
cd packages/db
pnpm db:studio
```
Opens Drizzle Studio at http://localhost:4983

### Generate Migrations
```bash
cd packages/db
pnpm db:generate
```
Creates migration files based on schema changes.

### Apply Migrations
```bash
cd packages/db
pnpm db:migrate
```
Applies pending migrations to the database.

### Check Schema
```bash
cd packages/db
pnpm db:check
```
Validates schema consistency.

### Drop All Tables (⚠️ Destructive)
```bash
cd packages/db
pnpm db:drop
```

## 🔐 Security Best Practices

1. **Never commit .env files**
   - Use .env.example as template
   - Keep .env.local in .gitignore

2. **Use connection pooling in production**
   - Neon automatically handles this
   - Configure `pool_timeout` if needed

3. **Enable SSL mode**
   - Always use `?sslmode=require` in production
   - Required by Neon

4. **Rotate credentials regularly**
   - Update DATABASE_URL monthly
   - Use Neon's password reset feature

## 📝 Schema Changes Workflow

1. **Modify schema files**
   ```bash
   # Edit files in packages/db/src/schema/
   vim packages/db/src/schema/users.ts
   ```

2. **Generate migration**
   ```bash
   cd packages/db
   pnpm db:generate
   ```

3. **Review migration**
   ```bash
   # Check generated SQL in drizzle/migrations/
   cat drizzle/migrations/0001_migration.sql
   ```

4. **Apply migration**
   ```bash
   pnpm db:push
   ```

## 🌱 Seeding Data

### Add More Offices

Edit `packages/db/src/seed.ts` to add more immigration offices:

```typescript
const newOffice = {
  name: "Oficina de Extranjería de Málaga",
  province: "Málaga",
  address: "Calle Example, 123",
  city: "Málaga",
  postalCode: "29001",
  availableProcedures: [
    "TOMA DE HUELLAS (EXPEDICIÓN DE TARJETA)",
    "ASIGNACIÓN DE NIE",
  ],
  metadata: {
    hours: "Lunes a Viernes: 9:00 - 14:00",
  },
};
```

Then run:
```bash
pnpm db:seed
```

## 🔍 Querying the Database

### Using Drizzle ORM

```typescript
import { db } from "@repo/db/client";
import { users, searches } from "@repo/db/schema";
import { eq } from "drizzle-orm";

// Get user by email
const user = await db.query.users.findFirst({
  where: eq(users.email, "user@example.com"),
});

// Get user's active searches
const userSearches = await db.query.searches.findMany({
  where: eq(searches.userId, user.id),
  with: {
    alerts: true,
  },
});
```

### Direct SQL (for complex queries)

```typescript
import { sql } from "drizzle-orm";

const result = await db.execute(sql`
  SELECT
    o.name,
    COUNT(s.id) as search_count
  FROM offices o
  LEFT JOIN searches s ON s.office_id = o.id
  GROUP BY o.id
  ORDER BY search_count DESC
`);
```

## 📈 Performance Tips

1. **Add indexes for frequently queried fields**
   ```typescript
   export const users = pgTable("users", {
     // ... fields
   }, (table) => ({
     emailIdx: index("email_idx").on(table.email),
   }));
   ```

2. **Use pagination for large datasets**
   ```typescript
   const searches = await db.query.searches.findMany({
     limit: 20,
     offset: page * 20,
   });
   ```

3. **Optimize joins**
   ```typescript
   // Use `with` for related data
   const user = await db.query.users.findFirst({
     with: {
       searches: {
         limit: 5,
         orderBy: (searches, { desc }) => [desc(searches.createdAt)],
       },
     },
   });
   ```

## 🔧 Troubleshooting

### Connection Issues

**Error: "connect ECONNREFUSED"**
```bash
# Check DATABASE_URL is set correctly
echo $DATABASE_URL

# Test connection
psql $DATABASE_URL
```

**Error: "SSL required"**
```bash
# Add sslmode to connection string
DATABASE_URL="postgresql://...?sslmode=require"
```

### Migration Issues

**Error: "Table already exists"**
```bash
# Drop all tables and recreate
pnpm db:drop
pnpm db:push
```

**Error: "Column does not exist"**
```bash
# Regenerate migrations
pnpm db:generate
pnpm db:push
```

## 📚 Additional Resources

- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [Neon Documentation](https://neon.tech/docs)
- [PostgreSQL Best Practices](https://wiki.postgresql.org/wiki/Don't_Do_This)
- [Database Design Patterns](https://www.postgresql.org/docs/current/ddl.html)

## 🎯 Next Steps

1. ✅ Set up Neon database
2. ✅ Push schema
3. ✅ Seed initial data
4. ✅ Verify in Drizzle Studio
5. 🔄 Start building your application!

---

Need help? Contact: soporte@micitaextranjeria.com
