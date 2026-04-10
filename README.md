# METAMEN100 — PWA Gamificada de Auto-Mejora

![CI status](https://github.com/metamen-system/metamen-v.web/actions/workflows/ci.yml/badge.svg)

## Descripción breve

Sistema operativo de conducta y espejo bio-digital que traduce la disciplina diaria en evolución visual inmediata de un avatar, a lo largo de un protocolo cerrado de 100 días con 6 vectores: Aura, Jawline, Wealth, Physique, Social y Entorno. Distribuido como Progressive Web App.

## Stack

| Categoría      | Tecnología                                          |
| -------------- | --------------------------------------------------- |
| Framework      | Next.js 15 (App Router)                             |
| UI             | React 19                                            |
| Lenguaje       | TypeScript 5.7+ (strict mode)                       |
| Estilos        | Tailwind CSS v4                                     |
| Base de datos  | PostgreSQL via Supabase                             |
| Auth           | Supabase Auth (Email + Google + Apple + Twilio SMS) |
| Pagos          | Stripe                                              |
| IA Generativa  | Gemini 2.5 Flash + Stability AI (fallback)          |
| Colas          | Inngest                                             |
| Hosting        | Vercel                                              |
| Testing        | Vitest + Playwright + fast-check                    |
| Observabilidad | Sentry + PostHog                                    |

## Requisitos

```bash
Node.js >= 20.0.0
pnpm >= 9.0.0
```

## Setup

```bash
# 1. Clonar el repositorio
git clone <URL_REPO>
cd metamen100

# 2. Instalar dependencias
pnpm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus credenciales

# 4. Iniciar servidor de desarrollo
pnpm dev
```

El servidor estará disponible en http://localhost:3000

## Scripts

| Script          | Comando              | Descripción                     |
| --------------- | -------------------- | ------------------------------- |
| `dev`           | `pnpm dev`           | Servidor de desarrollo          |
| `build`         | `pnpm build`         | Build de producción             |
| `start`         | `pnpm start`         | Servidor de producción          |
| `lint`          | `pnpm lint`          | Ejecutar ESLint                 |
| `lint:fix`      | `pnpm lint:fix`      | Ejecutar ESLint con auto-fix    |
| `format`        | `pnpm format`        | Formatear código con Prettier   |
| `format:check`  | `pnpm format:check`  | Verificar formato sin modificar |
| `typecheck`     | `pnpm typecheck`     | Verificar tipos TypeScript      |
| `test`          | `pnpm test`          | Ejecutar tests en modo watch    |
| `test:run`      | `pnpm test:run`      | Ejecutar tests una vez          |
| `test:coverage` | `pnpm test:coverage` | Tests con reporte de cobertura  |
| `test:e2e`      | `pnpm test:e2e`      | Tests end-to-end (Playwright)   |
| `test:e2e:ui`   | `pnpm test:e2e:ui`   | Tests E2E con interfaz visual   |
| `clean`         | `pnpm clean`         | Limpiar .next y node_modules    |

## Estructura del Proyecto

```text
metamen100/
├── .github/              # CI/CD workflows
├── public/               # Assets estáticos (sprites, audio, fonts, animations)
├── src/
│   ├── app/              # App Router (pages, layouts, routes)
│   ├── actions/          # Server Actions
│   ├── components/       # Componentes React (UI + feature)
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utilidades, core engine, configs
│   ├── providers/        # Context providers
│   └── stores/           # Zustand stores (UI state)
├── tests/                # Tests (unit, integration, e2e, property-based)
├── .env.example          # Template de variables de entorno
├── next.config.ts        # Configuración Next.js + security headers
├── tailwind.config.ts    # Design tokens y tema
├── tsconfig.json         # TypeScript strict config
└── package.json          # Dependencias y scripts
```
