# 📋 Business Configuration Summary

## ✅ Completed Configurations

### 1. WhatsApp Business Integration

**Contact Numbers:**
- **Meta Verified Business**: +923221430630 (Primary - Cita Previa)
- **Spain Website Contact**: +34663939048 (Secondary)

**Features Implemented:**
- ✅ WhatsApp Business API service (`packages/utils/src/whatsapp.ts`)
- ✅ Send text messages
- ✅ Send template messages (requires Meta approval)
- ✅ Send appointment alerts
- ✅ Send welcome messages to new users
- ✅ Automatic phone number formatting

**Configuration Required:**
```env
WHATSAPP_BUSINESS_ACCOUNT_ID="your_account_id"
WHATSAPP_PHONE_NUMBER_ID="your_phone_number_id"
WHATSAPP_ACCESS_TOKEN="your_access_token"
WHATSAPP_VERIFY_TOKEN="your_verify_token"
```

**Usage Example:**
```typescript
import { createWhatsAppService } from "@repo/utils/whatsapp";

const whatsapp = createWhatsAppService();

// Send appointment alert
await whatsapp.sendAppointmentAlert("+34663939048", {
  office: "Madrid - Aluche",
  procedureType: "TIE - Renovación",
  date: "15 Enero 2025",
});
```

### 2. Database Schema

**New Tables Added:**

#### Users & Authentication (Enhanced)
- ✅ `users` - Added phone, whatsapp, language, plan fields
- ✅ `sessions` - Better-Auth session management
- ✅ `accounts` - OAuth provider connections
- ✅ `verifications` - Email verification tokens

#### Appointments System
- ✅ `offices` - Immigration offices database
  - Name, province, address, city
  - Available procedures (JSON)
  - Operating hours and metadata

- ✅ `appointments` - User appointments
  - User reference
  - Office reference
  - Procedure type
  - Target/confirmed dates
  - Status tracking
  - Confirmation codes

#### Notifications
- ✅ `notifications` - Multi-channel notifications
  - Email, WhatsApp, SMS, Telegram, Push
  - Status tracking (pending, sent, failed, read)
  - Metadata for tracking IDs

- ✅ `notification_preferences` - User preferences
  - Per-channel enable/disable
  - Alert type preferences

#### Subscriptions & Payments
- ✅ `subscriptions` - Plan management
  - Free, Pro, Premium plans
  - Stripe integration fields
  - Usage limits and tracking
  - Trial period support

- ✅ `payments` - Payment history
  - Stripe payment intent tracking
  - Amount, currency, status
  - Receipt URLs

#### Search System (Existing - Enhanced)
- ✅ `searches` - Appointment searches
- ✅ `alerts` - Search alerts
- ✅ `check_logs` - Check history

**Total Tables:** 14

### 3. Authentication (Better-Auth)

**Features Configured:**
- ✅ Email/Password authentication
- ✅ Google OAuth integration
- ✅ Email verification required
- ✅ Session management (7-day expiry)
- ✅ Cross-subdomain cookies
- ✅ Custom user fields (phone, whatsapp, language, plan)

**API Endpoints:**
- `POST /api/auth/sign-in` - Sign in
- `POST /api/auth/sign-up` - Register
- `POST /api/auth/sign-out` - Sign out
- `GET /api/auth/session` - Get session
- `POST /api/auth/verify-email` - Verify email

**Client Usage:**
```typescript
import { signIn, signUp, signOut, useSession } from "@/lib/auth/client";

// Sign up
await signUp.email({
  email: "user@example.com",
  password: "SecurePass123",
  name: "Juan García",
});

// Sign in
await signIn.social({ provider: "google" });

// Get session
const { data: session } = useSession();
```

### 4. Environment Configuration

**New Variables Added:**

```env
# WhatsApp Business
WHATSAPP_BUSINESS_ACCOUNT_ID
WHATSAPP_PHONE_NUMBER_ID
WHATSAPP_ACCESS_TOKEN
WHATSAPP_VERIFY_TOKEN
WHATSAPP_VERIFIED_NUMBER="+923221430630"
WHATSAPP_SPAIN_CONTACT="+34663939048"

# Business Info
BUSINESS_EMAIL="soporte@micitaextranjeria.com"
BUSINESS_NAME="Cita Extranjería"
BUSINESS_SUPPORT_EMAIL="soporte@micitaextranjeria.com"

# Rate Limiting
RATE_LIMIT_MAX_REQUESTS="100"
RATE_LIMIT_WINDOW_MS="900000"

# Appointment Checker
CHECK_INTERVAL_SECONDS="60"
MAX_CONCURRENT_CHECKS="10"
APPOINTMENT_API_TIMEOUT="30000"
```

### 5. Database Tools

**New Commands Available:**

```bash
# View database in browser
pnpm db:studio

# Generate migrations
pnpm db:generate

# Push schema to database
pnpm db:push

# Seed sample data
pnpm db:seed

# Check schema consistency
pnpm db:check

# Drop all tables (destructive)
pnpm db:drop
```

**Seed Data Includes:**
- 4 sample immigration offices (Madrid, Barcelona, Valencia, Sevilla)
- Common procedure types
- Operating hours and contact information

## 📊 Database Schema Diagram

```
users (id, email, phone, whatsapp, name, language, plan)
  ├── sessions (userId, expiresAt, ipAddress)
  ├── accounts (userId, providerId, OAuth tokens)
  ├── searches (userId, officeId, procedureType, isActive)
  │   ├── alerts (searchId, type, message, sentAt)
  │   └── check_logs (searchId, status, slotsFound)
  ├── appointments (userId, officeId, procedureType, status)
  ├── notifications (userId, channel, type, message, status)
  ├── notification_preferences (userId, channel settings)
  ├── subscriptions (userId, plan, stripe data, limits)
  └── payments (userId, subscriptionId, amount, status)

offices (id, name, province, available_procedures)
```

## 🎯 Plan Limits

### Free Plan
- **Searches**: 1 active
- **Check Interval**: 5 minutes
- **Alerts**: Email only

### Pro Plan (€9.99/month)
- **Searches**: 5 active
- **Check Interval**: 1 minute
- **Alerts**: Email + Telegram

### Premium Plan (€19.99/month)
- **Searches**: Unlimited
- **Check Interval**: 30 seconds (real-time)
- **Alerts**: Email + WhatsApp + SMS + Telegram

## 🌍 Supported Languages

- 🇪🇸 Spanish (es) - Default
- 🇬🇧 English (en)
- 🇸🇦 Arabic (ar)
- 🇨🇳 Chinese (zh)
- 🇷🇺 Russian (ru)

## 📱 Notification Channels

1. **Email** (Resend)
   - All plans
   - Instant delivery
   - HTML templates

2. **WhatsApp** (Meta Business API)
   - Premium plan
   - Verified business number: +923221430630
   - Template messages (pre-approved)
   - Rich media support

3. **SMS** (Twilio)
   - Premium plan
   - Backup for WhatsApp
   - Spain number: +34XXX

4. **Telegram** (Bot API)
   - Pro & Premium
   - Free for users
   - Instant notifications

5. **Push Notifications** (Web Push)
   - All plans
   - Browser-based
   - Works offline

## 🔐 Security Features

- ✅ Email verification required
- ✅ Password hashing (Better-Auth)
- ✅ Session management with expiry
- ✅ Rate limiting configured
- ✅ CSRF protection
- ✅ Cross-subdomain cookie security
- ✅ SSL/TLS required (Neon)

## 📈 Monitoring & Limits

**Rate Limits:**
- API: 100 requests per 15 minutes per IP
- Authentication: 5 failed attempts per hour
- WhatsApp: 1000 messages per day (Meta limit)

**Database Limits (Neon Free Tier):**
- Storage: 10 GB
- Compute: 100 hours/month
- Branches: 10

**Recommended Upgrades:**
- Production: Neon Pro ($19/month)
- High traffic: Neon Scale ($69/month)

## 🚀 Next Implementation Steps

### Phase 1: Core Features
1. [ ] Implement appointment checker background job
2. [ ] Set up notification queue with Upstash
3. [ ] Create admin dashboard for office management
4. [ ] Build user subscription flow with Stripe

### Phase 2: WhatsApp Integration
1. [ ] Create and submit WhatsApp message templates to Meta
2. [ ] Implement webhook for incoming WhatsApp messages
3. [ ] Build WhatsApp chatbot for common queries
4. [ ] Set up WhatsApp message logging

### Phase 3: AI Features
1. [ ] Integrate Gemini AI for quick responses
2. [ ] Integrate Claude for complex analysis
3. [ ] Build document checker (validates required docs)
4. [ ] Create multilingual support with AI translation

### Phase 4: Analytics
1. [ ] Set up Plausible analytics
2. [ ] Create user behavior tracking
3. [ ] Build admin analytics dashboard
4. [ ] Implement conversion tracking

## 📞 Contact Information

**Website**: https://micitaextranjeria.com
**Support Email**: soporte@micitaextranjeria.com
**WhatsApp Business**: +923221430630
**Spain Contact**: +34663939048

## 📚 Documentation

- [DATABASE_SETUP.md](./DATABASE_SETUP.md) - Complete database guide
- [PROJECT_SETUP.md](./PROJECT_SETUP.md) - Initial setup guide
- [README.md](./README.md) - Project overview
- `.env.example` - Environment configuration template

---

**Last Updated**: December 29, 2024
**Version**: 1.0.0
**Status**: Ready for Development 🚀
