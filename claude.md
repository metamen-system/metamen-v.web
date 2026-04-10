<!-- BEGIN:project-agent-rules -->

## 0. DEVELOPMENT COMMANDS

```bash
# Development
pnpm dev          # Next.js dev server with Turbopack (port 3000)
pnpm build        # Production build
pnpm start        # Start production server

# Quality checks
pnpm lint         # ESLint (next lint)
pnpm typecheck    # tsc --noEmit
pnpm format       # Prettier --write src/**
pnpm format:check # Prettier --check src/**

# Testing
pnpm test              # Run all tests once (vitest run)
pnpm test:watch        # Watch mode
pnpm test:coverage     # Coverage report (v8, output: ./coverage/)

# Run a single test file
pnpm vitest run src/lib/core/vectors/vectors.test.ts

# Run tests matching a name pattern
pnpm vitest run --reporter=verbose -t "calculateScore"

# Full pre-flight (lint + typecheck + test)
pnpm verify

# Environment validation
pnpm env:check    # Validates env vars via scripts/validate-env.ts
```

**Package manager**: `pnpm` only (v9.0.0+, Node 20+). Never use `npm` or `yarn`.

**Path aliases** (tsconfig + vitest):

- `@/*` → `src/*`
- `@/core/*` → `src/lib/core/*`
- `@/actions/*` → `src/actions/*`
- `@/components/*` → `src/components/*`
- `@/stores/*` → `src/stores/*`
- `@/types/*` → `src/types/*`

---

## 1. IDENTIDAD DEL PROYECTO

| Campo         | Valor                                                           |
| ------------- | --------------------------------------------------------------- |
| Nombre        | MetaMen100                                                      |
| Tipo          | Sistema Operativo de Conducta con IA generativa (gamificación)  |
| Fase          | MVP v2.1.0-WEB                                                  |
| Documentación | SSOT v2.1.0-WEB (Architecture, Data Model, GDD, Content, UI/UX) |

---

## 2. TECH STACK

| Tecnología     | Versión                | Uso                                                                     |
| -------------- | ---------------------- | ----------------------------------------------------------------------- |
| Next.js        | 15.x                   | Framework (App Router, Server Actions, Server Components)               |
| React          | 19.x                   | UI                                                                      |
| TypeScript     | 5.7+                   | Ultra-strict (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`) |
| Tailwind CSS   | v4                     | Styling (dark mode por defecto, mobile-first)                           |
| Supabase       | 2.47+                  | Auth + PostgreSQL 15 + Storage + Realtime (RLS estricto)                |
| Stripe         | 17.x                   | Pagos (Checkout hosted, Customer Portal, webhooks)                      |
| IA Generativa  | Gemini 2.5 / Stability | Generación de fondos de avatar (`Layer 0` ENV background)               |
| TanStack Query | v5                     | Server state management + Offline Cache (IndexedDB)                     |
| Inngest        | v3.x                   | Background jobs (Judgement Night cron, image worker, webhooks)          |
| Vercel         | N/A                    | Hosting + CI/CD auto-deploy                                             |
| Vitest         | v2.x                   | Unit & Integration testing (fast-check para property-based)             |
| Zod            | 3.23+                  | Validación estricta de schemas en boundaries                            |
| Zustand        | v5.x                   | Client state (modals, toasts, UI state). SIN Immer.                     |
| Web Push API   | N/A                    | Notificaciones nativas (Service Worker)                                 |
| Sentry         | latest                 | Error tracking (PII sanitizado)                                         |
| PostHog        | latest                 | Analytics + funnel tracking                                             |

---

## 3. REGLAS ABSOLUTAS DE CÓDIGO

### TypeScript

- **CERO `any`** en todo el proyecto. Usar `unknown` + type narrowing.
- `noUncheckedIndexedAccess: true` — todo acceso a array/record puede ser undefined.
- `exactOptionalPropertyTypes: true` — `undefined` y optional son diferentes.
- `noImplicitReturns: true`, `noFallthroughCasesInSwitch: true`.

### Arquitectura y Next.js

- **Server Components por defecto**. Solo `'use client'` cuando hay interactividad, hooks o browser APIs.
- **Server Actions para TODA mutación** (escritura DB). Ubicación: `src/actions/`. NUNCA usar API routes para CRUD.
- **API routes** reservadas estrictamente para: Webhooks externos (Stripe, Inngest) y health checks.
- **Middleware** (`src/middleware.ts`) para protección de rutas auth y redirecciones lógicas (Ej. Dead, Limbo).
- **Protección CSRF y Rate Limit** en todos los Server Actions.

### Motor del Juego (`src/lib/core/`)

- **100% funciones puras**: `f(input) → output`. Sin I/O, sin llamadas a DB, sin fetch, sin side effects.
- **Result<T,E> monad**: Nunca hacer `throw` en funciones puras. Usar `ok(data)` / `err(error)`.
- **Tipos Marcados (Branded Types)**: Obligatorio usar `VectorValue`, `BtcAmount`, `LevelNumber`, etc.
- **Inmutabilidad**: Todo estado es `readonly`. Cada operación retorna un nuevo estado.
- **Regla de capas**: Layer N solo importa de Layer ≤ N-1. NUNCA dependencias circulares.

### Base de Datos y Seguridad (PL/pgSQL)

- **RLS Obligatorio** en todas las tablas.
- **Mutaciones Críticas**: Deben ejecutarse a través de funciones `SECURITY DEFINER` en PL/pgSQL (Ej. `fn_complete_task_transaction`, `fn_process_judgement_night`) usando bloqueos transaccionales (`pg_advisory_xact_lock`).
- **Bloqueo Optimista**: Validar la columna `version INT` en actualizaciones de `avatar_states` y `wallets`.

### UI / Design (Design Tokens)

- **Mobile-first** obligatorio. Diseñado para min 320px de ancho.
- **Dark mode** por defecto (No hay light mode).
- **Paleta Oficial (SSOT Tokens)**:
  - Fondo: `bg.base` `#0A0A0A`, `bg.card` `#1A1A1A`, `bg.elevated` `#2D2D2D`.
  - Acentos: `accent.gold` `#D4AF37`, `accent.cta` `#FF073A`, `accent.active` `#00E5FF`.
  - Estados: `success` `#00FF88`, `error` `#FF0000`, `warning` `#FFB800`.
  - Vectores: AURA `#9B59B6`, JAWLINE `#E74C3C`, WEALTH `#27AE60`, PHYSIQUE `#E67E22`, SOCIAL `#3498DB`, ENV `#1ABC9C`.

### Testing y Commits

- **Conventional Commits obligatorio**: `tipo(ID_TAREA): descripción breve` (Ej. `feat(02.1): init avatar compositor`).
- **Un commit por tarea ejecutada**.
- Las pruebas en `src/lib/core/` deben cubrir el 100% (líneas, funciones, branches, statements).

---

## 4. ESTRUCTURA DE DIRECTORIOS

```
metamen100/
├── AGENTS.md                     ← ESTE ARCHIVO (rules)
├── bitacora.md                   ← Estado actual del proyecto
├── docs/
│   └── cajas/                    ← Cajas MVP con tareas
│       ├── CAJA-MVP-02.md
│       ├── CAJA-MVP-03.md
│       └── ...
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── (auth)/               # Grupo: rutas públicas
│   │   │   ├── login/page.tsx
│   │   │   ├── register/page.tsx
│   │   │   └── auth/callback/route.ts
│   │   ├── (app)/                # Grupo: rutas protegidas
│   │   │   └── dashboard/
│   │   │       ├── page.tsx
│   │   │       ├── layout.tsx
│   │   │       ├── tasks/page.tsx
│   │   │       ├── tools/page.tsx
│   │   │       └── profile/page.tsx
│   │   ├── api/
│   │   │   ├── webhooks/stripe/route.ts
│   │   │   ├── inngest/route.ts
│   │   │   └── health/route.ts
│   │   ├── layout.tsx            # Root layout
│   │   ├── not-found.tsx
│   │   └── error.tsx
│   ├── actions/                  # Server Actions (mutaciones)
│   │   ├── auth/index.ts
│   │   ├── tasks/index.ts
│   │   ├── avatar/index.ts
│   │   ├── subscription/index.ts
│   │   └── onboarding/index.ts
│   ├── components/
│   │   ├── ui/                   # Atoms: Button, Card, Input, Badge
│   │   ├── layout/               # Shell, BottomNav, Header
│   │   ├── dashboard/            # AvatarDisplay, VectorHUD, TaskList
│   │   ├── onboarding/           # QuizStep, CharacterSelect, Oath
│   │   └── providers/            # PostHogProvider, ThemeProvider
│   ├── lib/
│   │   ├── core/                 # MOTOR DEL JUEGO (PURO)
│   │   │   ├── vectors/          # Cálculos de vectores
│   │   │   ├── levels/           # Sistema de niveles
│   │   │   ├── health/           # Corazones, muerte, resurrección
│   │   │   ├── judgement/        # Judgement Night pipeline
│   │   │   ├── economy/          # BTC, wallet, store
│   │   │   ├── scheduler/        # Generación de tareas diarias
│   │   │   ├── state-machines/   # Estados del avatar
│   │   │   ├── validation/       # Cross-cutting validations
│   │   │   ├── types/            # Result<T,E>, branded types
│   │   │   └── utils/            # roundToDecimals, invariants
│   │   ├── supabase/             # client.ts, server.ts, admin.ts, middleware.ts
│   │   ├── stripe/               # client.ts, config.ts
│   │   ├── gemini/               # client.ts, prompt-builder.ts, image-pipeline.ts
│   │   ├── email/                # client.ts (4 funciones de email)
│   │   ├── redis/                # client.ts, rate-limit.ts (3 limiters)
│   │   ├── inngest/              # client.ts, functions/ (3 funciones)
│   │   ├── analytics/            # posthog.ts, events.ts
│   │   ├── constants/            # game.ts (TODAS las constantes del motor)
│   │   ├── validators/           # Zod schemas compartidos
│   │   ├── utils/                # cn(), formatDate(), etc.
│   │   └── env.ts                # Validación Zod de env vars
│   └── types/
│       ├── database.types.ts     # GENERADO por Supabase CLI
│       └── custom.types.ts       # Tipos manuales del proyecto
├── supabase/
│   ├── migrations/               # SQL migrations (ordenadas por timestamp)
│   ├── seed.sql                  # Datos iniciales (store_items)
│   └── config.toml
├── public/
│   ├── avatars/                  # 6 imágenes base de personajes
│   └── logo_MetaMen100.png
└── tests/                        # Tests de integración (si necesario)
```

---

## 5. CONSTANTES CRÍTICAS DEL MOTOR (SSOT)

| Entidad               | Valor / Regla                                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **VECTORES**          | 6 (AURA, JAWLINE, WEALTH, PHYSIQUE, SOCIAL, ENV).                                                                                                      |
| **ESCALA VECTORES**   | 0.00 - 50.00 (ENV es entero de 1 a 10).                                                                                                                |
| **TAREAS**            | 17 categorías → Afectan 5 vectores con incrementos asimétricos o simétricos (+UP / -DOWN).                                                             |
| **ARQUETIPOS**        | 6 (EL_RASTAS, EL_GUARRO, EL_PECAS, EL_GRENAS, EL_GUERO, EL_LIC).                                                                                       |
| **NIVELES**           | 12 en total.                                                                                                                                           |
| **HEALTH (HP)**       | 5 Inicial. 10 Base Máximo. 14 Máximo Absoluto (bonus en niveles 3, 6, 9, 12).                                                                          |
| **BTC DAILY CAP**     | **2,000 BTC**.                                                                                                                                         |
| **TRIAL**             | 5 días.                                                                                                                                                |
| **SUCCESS THRESHOLD** | **80% (0.80)** mínimo de completación para considerar un día exitoso (+1 HP, +1 Racha).                                                                |
| **MULTIPLICADOR BTC** | `1.0 + (nivel * 0.05) + streak_bonus`. _(El sub_bonus fue eliminado)._                                                                                 |
| **DIMINISHING**       | Escalado estricto por repetición el mismo día: `1.0, 0.8, 0.6, 0.4, 0.25`.                                                                             |
| **DEATH BTC LOSS**    | 30% (1ra muerte), 40% (2da), 50% (3ra+).                                                                                                               |
| **DEATH PENALTY**     | HP a 0 = Cuenta Congelada. Reset: physique=0, jawline=0, wealth=0, social=0, aura\*=0.30, env=1. Inventario bloqueado. `death_count` NUNCA se resetea. |

---

## 6. WORKFLOW POR TAREA

Todo agente que ejecute una tarea DEBE seguir este proceso:

1. **LEER**: Analizar los documentos SSOT pertinentes.
2. **IMPLEMENTAR**: Escribir código siguiendo detalle, rutas, firmas, tipos exactos y variables de diseño.
3. **VALIDAR**: Ejecutar la lógica local y asegurar la regla de inmutabilidad/ausencia de `any`.
4. **TEST**: Si es lógica Core o Server Action, escribir/actualizar pruebas en Vitest.
5. **LINT**: Ejecutar `pnpm lint && pnpm typecheck`.
6. **COMMIT**: `git add -A && git commit -m "tipo(ID): descripción"`.
7. **BITÁCORA**: Agregar entrada en `BITACORA.md` (formato abajo).
8. **PUSH**: `git push origin [RAMA_M01_ASIGNADA]`.

### Ramas de trabajo M01 (commit/push de tareas)

- `setup/M01-base-infrastructure`
- `feat/M01-routing-pages`
- `setup/M01-architecture-folders`
- `config/M01-security-pwa`
- `tooling/M01-quality-ci`

**Formato de entrada en BITACORA.md:**

```markdown
### [ID_TAREA] — Título

- **Estado**: ✅ COMPLETADA
- **Fecha**: YYYY-MM-DD HH:MM
- **Archivos**: ruta/archivo1.ts, ruta/archivo2.ts
- **Test**: ruta/archivo.test.ts (X passed, 0 failed)
- **Commit**: abc1234
```

---

## 7. ERRORES COMUNES — ESTRICTAMENTE PROHIBIDOS

| Error                                     | Corrección Exigida                                                |
| ----------------------------------------- | ----------------------------------------------------------------- |
| Usar `any`                                | Utilizar `unknown` + type guard o esquemas Zod.                   |
| `useEffect` para fetch de datos           | Utilizar TanStack Query o Server Components.                      |
| Llamadas API para CRUD directo            | Usar **Server Actions** (`src/actions/`).                         |
| Import circular en `lib/core`             | Respetar jerarquía de capas puras.                                |
| Guardar estado sensible en `localStorage` | Usar IndexedDB cifrado o Cookies HttpOnly.                        |
| Strings hardcodeados                      | Usar Enums SQL importados o literales constantes del SSOT.        |
| `throw` en función pura                   | Retornar `err('RAZON_DEL_ERROR')` con Result Monad.               |
| Confiar en validación del cliente         | Validar SIEMPRE con `zod` en los Server Actions + PL/pgSQL en BD. |

---

## 8. BASE DE DATOS — TABLAS (14) Y ENFOQUE

El sistema cuenta con 14 tablas. **RLS está activado en TODAS.** Las operaciones complejas utilizan procedimientos almacenados.

1. `profiles`: Datos de usuario, configuración, penalty_declaration (Inmutable post-onboarding).
2. `avatar_states`: Estado del juego, niveles de los 6 vectores, vida, racha, puntuación.
3. `wallets`: Economía, balance BTC, cap diario. (StaleTime = 0 en cliente).
4. `subscriptions`: Estado de Stripe, trial, limbo.
5. `daily_tasks`: Tareas generadas diariamente, rastreo de recompensa base y modificaciones.
6. `daily_logs`: Snapshots inmutables del Judgement Night de cada día.
7. `store_items`: Catálogo de la tienda.
8. `inventory`: Objetos poseídos, equipados y bloqueados por muerte.
9. `tool_progress`: Progreso en las 9 herramientas (timer, gym tracker, etc.).
10. `image_generation_queue`: Cola para Inngest (Gemini/Stability).
11. `notifications`: Notificaciones in-app y Push.
12. `activity_logs`: Registro de auditoría (Append-only).
13. `idempotency_keys`: Prevención de doble ejecución en transacciones (Expira 24h).
14. `push_subscriptions`: Tokens de notificaciones Web Push.

## RESUMEN DE COBERTURA

### Funcionalidades del SSOT cubiertas por módulo:

| Área SSOT                                                                         | Módulo(s) Responsable(s) |
| --------------------------------------------------------------------------------- | ------------------------ |
| Next.js 15, Vercel, TypeScript, Tailwind, CI/CD, PWA manifest                     | 01                       |
| Design tokens, CVA variants, Framer Motion, Lottie, Layout, A11y                  | 02                       |
| PostgreSQL schema, 14 tablas, ENUMs, RLS, triggers, indexes                       | 03                       |
| Supabase Auth, OAuth, Twilio SMS, Secure Storage, Session                         | 04                       |
| Branded types, Result monad, cálculos puros (BTC, HP, levels, vectors)            | 05                       |
| SECURITY DEFINER functions, advisory locks, Server Actions                        | 06                       |
| Sprite compositing 6 capas, Canvas 2D, WebGL aura shader                          | 07                       |
| Onboarding 6 pasos, penalty declaration, oath ceremony                            | 08                       |
| Avatar display, health bar, BTC, level, streak, time matrix, countdown            | 09                       |
| 17 task categories, completion flow, progress tracking                            | 10                       |
| 9 tools (meditation, focus, gym, journal, library, kegel, facial, posture, voice) | 11                       |
| BTC wallet, store catalog 49+ items, inventory, equip/unequip, power-ups          | 12                       |
| Lazy evaluation, binary assessment, Teatro Consecuencia, death, resurrection      | 13                       |
| Stripe Checkout, 3 planes, webhooks, trial, limbo, billing                        | 14                       |
| Profile, timezone, achievements, gallery, notification settings, history          | 15                       |
| Web Push API, VAPID, Service Worker push, 10 notification types                   | 16                       |
| Gemini → Stability AI → fallback, Inngest queue, Supabase Storage                 | 17                       |
| Service Worker cache, IndexedDB, offline queue, Visibility API                    | 18                       |
| 7 capas seguridad, CSRF, rate limiting, anti-cheat, OWASP, compliance             | 19                       |
| Sentry, PostHog, activity_logs, Vitest, Playwright, fast-check, Lighthouse        | 20                       |
| Inngest cron/event functions, Edge Functions, batch processing                    | 21                       |
| TanStack Query, Zustand, React Context, Realtime, query invalidation              | 22                       |

<!-- END:project-agent-rules -->

<!-- BEGIN:project-skill-whitelist -->

## -1. ACTIVACIÓN DE SKILLS Y PLUGINS (PROYECTO CODEX)

### Skills activadas para este proyecto

Usar unicamente las siguientes skills:

- `pnpm`
- `remembering-conversations`
- `supabase-postgres-best-practices`
- `systematic-debugging`
- `test-driven-development`
- `typescript-advanced-types`
- `using-superpowers`
- `vercel-react-best-practices`
- `verification-before-completion`
- `plugin-creator`
- `skill-creator`
- `skill-installer`
<!-- END:project-skill-whitelist -->

### Plugins activados para este proyecto

<!-- BEGIN:project-plugin-whitelist -->

Usar unicamente los siguientes plugins:

- `build-web-apps@openai-curated`
- `github@openai-curated`
<!-- END:project-plugin-whitelist -->
