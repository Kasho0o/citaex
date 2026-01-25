# 🚀 Cita Extranjería Platform

Plataforma inteligente para conseguir citas de extranjería en España. Monitoreo 24/7, alertas automáticas y asistente con IA.

## 🌐 Dominios
- **micitaextranjeria.com** - Sitio web principal
- **citaex.com** - Servicios Premium/API

## 🛠️ Stack Tecnológico

- **Monorepo**: Turborepo
- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS v4
- **Backend**: Hono.js (Cloudflare Workers)
- **Base de Datos**: PostgreSQL (Neon.tech) + Drizzle ORM
- **Cache**: Upstash Redis
- **IA**: Google Gemini 2.0 + Claude API
- **Hosting**: Cloudflare Pages + Workers
- **Auth**: Better-Auth
- **Email**: Resend
- **Pagos**: Stripe

## 📁 Estructura del Proyecto

```
citaex/
├── apps/
│   ├── web/           # Next.js app - micitaextranjeria.com
│   │   └── app/
│   │       ├── (marketing)/    # Páginas públicas
│   │       ├── (app)/          # Dashboard protegido
│   │       └── (auth)/         # Autenticación
│   ├── api/           # Hono.js API - Cloudflare Workers
│   └── docs/          # Documentación
├── packages/
│   ├── ui/            # Componentes compartidos
│   ├── db/            # Drizzle ORM + schemas
│   ├── utils/         # Utilidades compartidas
│   ├── ai/            # Integración Gemini + Claude
│   ├── eslint-config/ # Configuración ESLint
│   ├── tailwind-config/ # Configuración Tailwind
│   └── typescript-config/ # Configuración TypeScript
└── package.json
```

## 🚀 Desarrollo

### Prerrequisitos

- Node.js 18+
- pnpm 10+

### Instalación

```bash
# Instalar dependencias
pnpm install

# Configurar variables de entorno
cp .env.example .env.local

# Ejecutar en modo desarrollo
pnpm dev
```

### Scripts Disponibles

```bash
# Desarrollo
pnpm dev              # Ejecutar todos los apps en desarrollo
pnpm dev --filter web # Solo el frontend
pnpm dev --filter api # Solo el API

# Build
pnpm build            # Build de todo el monorepo

# Linting y Type Checking
pnpm lint             # Ejecutar ESLint
pnpm check-types      # Verificar tipos TypeScript

# Database
cd packages/db
pnpm db:generate      # Generar migraciones
pnpm db:push          # Push schema a la DB
pnpm db:studio        # Abrir Drizzle Studio
```

## 🗄️ Base de Datos

El proyecto usa Drizzle ORM con PostgreSQL (Neon.tech).

### Schemas principales:

- **users** - Usuarios y autenticación
- **searches** - Búsquedas de citas configuradas
- **alerts** - Alertas enviadas a usuarios
- **check_logs** - Registro de verificaciones

## 🤖 IA Integration

El proyecto integra dos modelos de IA:

### Google Gemini 2.0
- Respuestas rápidas en el chat
- Análisis de documentación
- Modelo: `gemini-2.0-flash-exp`

### Claude (Anthropic)
- Análisis complejos de situaciones
- Consultas detalladas
- Modelo: `claude-sonnet-4-5-20250929`

## 🔐 Variables de Entorno

Revisa `.env.example` para la lista completa de variables necesarias.

## 🚢 Deployment

### Frontend (Cloudflare Pages)
```bash
cd apps/web
pnpm build
```

### API (Cloudflare Workers)
```bash
cd apps/api
pnpm deploy
```

## 📝 Licencia

Privado - Todos los derechos reservados
# Force redeploy
