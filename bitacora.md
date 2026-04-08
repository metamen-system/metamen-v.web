# METAMEN100 — BITACORA DE PROYECTO

# ══════════════════════════════════════════════════════════════
# Este documento es el ESTADO VIVO del proyecto.
# Todo agente DEBE leerlo al inicio de cada sesión.
# Todo agente DEBE actualizarlo después de cada tarea completada.
# ══════════════════════════════════════════════════════════════


## ESTADO GENERAL

| Campo                   | Valor                                                    |
| ----------------------- | -------------------------------------------------------- |
| Fase actual             | Infraestructura inicial                                  |
| Módulo en curso         | **M01: Infraestructura & Fundación del Proyecto**        |
| Última tarea completada | `M01-076` — Agregar security headers a next.config.ts   |
| Próxima tarea           | `M01-077` — Agregar Content-Security-Policy header      |
| Bloqueadores            | Ninguno                                                  |
| Fecha inicio proyecto   | 2026-02-21                                               |
| Branch                  | config/M01-security-pwa                                  |

## DEUDA TÉCNICA PENDIENTE

| ID Deuda | Descripción | Archivo afectado | Asignada a | Severidad |
| -------- | ----------- | ---------------- | ---------- | --------- |
| DT-001 | `eslint.config.mjs` importa `eslint-config-next/core-web-vitals` sin extensión `.js`. ESLint 9 con módulos ESM estrictos falla al resolver el módulo. Fix: cambiar a `eslint-config-next/core-web-vitals.js` | `eslint.config.mjs` | **M01-085** | 🟡 IMPORTANTE — bloquea `pnpm lint` |

---

## MAPA DE PROGRESO (MODULOS CORE)

```text
M01: Infraestructura             [██████░░░░] 68/110  ← EN CURSO
M02: Design System               [░░░░░░░░░░] 0/??
M03: Base de Datos               [░░░░░░░░░░] 0/??
M04: Autenticación               [░░░░░░░░░░] 0/??
M05: Motor Core TS               [░░░░░░░░░░] 0/??
M06: Motor Transaccional         [░░░░░░░░░░] 0/??
M07: Renderizado Avatar          [░░░░░░░░░░] 0/??
M08: Flujo Onboarding            [░░░░░░░░░░] 0/??
M09: Dashboard & Pantalla        [░░░░░░░░░░] 0/??
M10: Sistema de Tareas           [░░░░░░░░░░] 0/??
M11: Sistema de Herramientas     [░░░░░░░░░░] 0/??
M12: Economia & Tienda           [░░░░░░░░░░] 0/??
M13: Judgement/Muerte/Resurrec.  [░░░░░░░░░░] 0/??
M14: Suscripción & Pagos         [░░░░░░░░░░] 0/??
M15: Perfil & Configuración      [░░░░░░░░░░] 0/??
M16: Notificaciones & Web Push   [░░░░░░░░░░] 0/??
M17: Pipeline IA (Capa 0)        [░░░░░░░░░░] 0/??
M18: Offline, PWA & SW           [░░░░░░░░░░] 0/??
M19: Seguridad & Compliance      [░░░░░░░░░░] 0/??
M20: Observabilidad & Testing    [░░░░░░░░░░] 0/??
M21: Background Jobs (Inngest)   [░░░░░░░░░░] 0/??
M22: Estado & Data Fetching      [░░░░░░░░░░] 0/??
```

## REGISTRO DE TAREAS COMPLETADAS

* **Total actual**: 68 tareas completadas.

### BLOQUE M01-001 a M01-035 (RESUMEN CONSOLIDADO)
* **Rango**: `M01-001` → `M01-035`
* **Estado global**: ✅ COMPLETADO / APROBADO
* **Corte**: 2026-04-06
* **Módulo**: 01 — Infraestructura & Fundación del Proyecto
* **Aprobación auditoría**: 100% en todas las tareas del bloque (incluye reauditoría en `M01-029` y `M01-030`)
* **Resumen de entregables**:
  - Base del repositorio, setup de Next.js 15 + pnpm estricto y configuración de calidad inicial (`M01-001` a `M01-011`).
  - Estructura App Router base (root layout, not-found, error, loading) y flujo auth placeholder (`M01-012` a `M01-021`).
  - Scaffolding de rutas dashboard con placeholders (`M01-022` a `M01-027`):
    - `src/app/dashboard/layout.tsx`
    - `src/app/dashboard/page.tsx`
    - `src/app/dashboard/tasks/page.tsx`
    - `src/app/dashboard/tools/page.tsx`
    - `src/app/dashboard/store/page.tsx`
    - `src/app/dashboard/profile/page.tsx`
  - Scaffolding de onboarding pasos 1-6 con layout fullscreen (`M01-028` a `M01-034`):
    - `src/app/onboarding/layout.tsx`
    - `src/app/onboarding/character/page.tsx`
    - `src/app/onboarding/timezone/page.tsx`
    - `src/app/onboarding/vectors/page.tsx`
    - `src/app/onboarding/penalty/page.tsx`
    - `src/app/onboarding/oath/page.tsx`
    - `src/app/onboarding/start/page.tsx`
  - Primer API Route Handler del proyecto (`M01-035`):
    - `src/app/api/health/route.ts`
* **Rama principal usada**: `feat/M01-routing-pages`
* **Notas**:
  - Se consolida el historial `M01-001` a `M01-035` en un solo bloque para mantener `bitacora.md` ligero.
  - Se mantiene deuda técnica abierta `DT-001` para `eslint.config.mjs` (asignada a `M01-085`).

## [M01-036, M01-037, M01-038] — API Route Handlers Placeholder
- **Fecha:** 2026-04-06
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** SETUP
- **Tareas:** M01-036, M01-037, M01-038
- **Títulos:** Crear directorio API webhooks/stripe con placeholder | Crear directorio API inngest con placeholder | Crear directorio API push con placeholder
- **Score auditoría:** 100% (post-corrección ciclo 1)
- **Tipo de aprobación:** REAUDITORÍA CICLO 1
- **Archivos:**
  - Creados: src/app/api/webhooks/stripe/route.ts, src/app/api/inngest/route.ts, src/app/api/push/register/route.ts
  - Modificados: Ninguno
- **Rama:** feat/M01-routing-pages

## [M01-041, M01-042] — Crear árbol de directorios src/lib/core + barrel export
- **Fecha:** 2026-04-06
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** SETUP | CODE
- **Score auditoría:** 100% (reauditoría ciclo 1)
- **Tipo de aprobación:** REAUDITORÍA CICLO 1
- **Archivos:**
  - Creados: src/lib/core/index.ts, src/lib/core/types/index.ts, src/lib/core/vectors/index.ts, src/lib/core/economy/index.ts, src/lib/core/health/index.ts, src/lib/core/levels/index.ts, src/lib/core/avatar/index.ts, src/lib/core/judgement/index.ts, src/lib/core/tasks/index.ts, src/lib/core/validation/index.ts
  - Modificados: Ninguno
- **Rama:** setup/M01-architecture-folders

## [M01-043, M01-044, M01-045] — Crear directorios placeholder src/lib/supabase, src/lib/auth, src/lib/storage
- **Fecha:** 2026-04-07
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** SETUP
- **Score auditoría:** 100%
- **Tipo de aprobación:** PRIMERA AUDITORÍA
- **Archivos:**
  - Creados: src/lib/supabase/client.ts, src/lib/supabase/server.ts, src/lib/supabase/middleware.ts, src/lib/auth/index.ts, src/lib/storage/index.ts
  - Modificados: Ninguno
- **Rama:** setup/M01-architecture-folders

## [M01-046, M01-047, M01-048, M01-049, M01-050] — Crear directorios placeholder avatar, stripe, inngest, security, analytics
- **Fecha:** 2026-04-07
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** SETUP
- **Score auditoría:** 100%
- **Tipo de aprobación:** PRIMERA AUDITORÍA
- **Archivos:**
  - Creados: src/lib/avatar/index.ts, src/lib/stripe/client.ts, src/lib/stripe/server.ts, src/lib/inngest/client.ts, src/lib/inngest/functions/.gitkeep, src/lib/security/index.ts, src/lib/analytics/index.ts, src/lib/analytics/events.ts
  - Modificados: Ninguno
- **Rama:** setup/M01-architecture-folders

## [M01-051, M01-052, M01-053, M01-054, M01-055] — Crear directorios placeholder notifications, validation, queries, animations + components base
- **Fecha:** 2026-04-07
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** SETUP
- **Score auditoría:** 100%
- **Tipo de aprobación:** PRIMERA AUDITORÍA
- **Archivos:**
  - Creados: src/lib/notifications/index.ts, src/lib/validation/index.ts, src/lib/queries/index.ts, src/lib/queries/keys.ts, src/lib/animations/index.ts, src/components/ui/.gitkeep, src/components/layout/.gitkeep
  - Modificados: Ninguno
- **Rama:** setup/M01-architecture-folders

## [M01-056, M01-057, M01-058] — Crear directorios de componentes — core gameplay, features, user lifecycle
- **Fecha:** 2026-04-07
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** SETUP
- **Score auditoría:** 100%
- **Tipo de aprobación:** PRIMERA AUDITORÍA
- **Archivos:**
  - Creados: src/components/avatar/.gitkeep, src/components/dashboard/.gitkeep, src/components/judgement/.gitkeep, src/components/tasks/.gitkeep, src/components/tools/.gitkeep, src/components/store/.gitkeep, src/components/inventory/.gitkeep, src/components/onboarding/.gitkeep, src/components/subscription/.gitkeep, src/components/profile/.gitkeep, src/components/notifications/.gitkeep
  - Modificados: Ninguno
- **Rama:** setup/M01-architecture-folders

## [M01-059, M01-060, M01-061, M01-062] — Crear directorios hooks, stores, actions, providers
- **Fecha:** 2026-04-06
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** SETUP
- **Score auditoría:** 100%
- **Tipo de aprobación:** PRIMERA AUDITORÍA
- **Archivos:**
  - Creados: src/hooks/index.ts, src/hooks/queries/index.ts, src/stores/.gitkeep, src/actions/tasks/.gitkeep, src/actions/judgement/.gitkeep, src/actions/store/.gitkeep, src/actions/avatar/.gitkeep, src/actions/profile/.gitkeep, src/actions/inventory/.gitkeep, src/actions/tools/.gitkeep, src/actions/onboarding/.gitkeep, src/providers/index.ts
  - Modificados: Ninguno
- **Rama:** setup/M01-architecture-folders

## [M01-063, M01-064, M01-065, M01-066, M01-067] — Crear estructura de directorios public/ para assets estaticos
- **Fecha:** 2026-04-06
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** SETUP
- **Score auditoría:** 100%
- **Tipo de aprobación:** PRIMERA AUDITORÍA
- **Archivos:**
  - Creados: public/sprites/archetypes/{1,2,3,4,5,6}/.gitkeep, public/backgrounds/fallback/.gitkeep, public/backgrounds/fallback/README.md, public/animations/.gitkeep, public/animations/README.md, public/audio/{meditations,binaurals,soundscapes,sfx}/.gitkeep, public/fonts/.gitkeep, public/images/exercises/.gitkeep, public/shaders/.gitkeep
  - Modificados: Ninguno
- **Rama:** setup/M01-architecture-folders

## [M01-068] — Crear robots.txt
- **Fecha:** 2026-04-07
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** CONFIG
- **Score auditoría:** 100%
- **Tipo de aprobación:** PRIMERA AUDITORÍA
- **Archivos:**
  - Creados: public/robots.txt
  - Modificados: bitacora.md
- **Rama:** config/M01-security-pwa

## [M01-069] — Crear sitemap.xml
- **Fecha:** 2026-04-06
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** CONFIG
- **Score auditoría:** 100%
- **Tipo de aprobación:** REAUDITORÍA CICLO 1
- **Archivos:**
  - Creados: public/sitemap.xml
  - Modificados: Ninguno
- **Rama:** config/M01-security-pwa

## [M01-070] — Normalizar configuración PostCSS a CommonJS
- **Fecha:** 2026-04-06
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** CONFIG
- **Score auditoría:** 100%
- **Tipo de aprobación:** REAUDITORÍA CICLO 1
- **Archivos:**
  - Creados: postcss.config.js
  - Modificados: .gitignore, src/app/layout.tsx
  - Eliminados: postcss.config.mjs
- **Rama:** config/M01-security-pwa

## [M01-071] — Crear tailwind.config.ts con estructura base
- **Fecha:** 2026-04-07
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** CONFIG
- **Score auditoría:** 100%
- **Tipo de aprobación:** PRIMERA AUDITORÍA
- **Archivos:**
  - Creados: tailwind.config.ts
  - Modificados: Ninguno
- **Rama:** config/M01-security-pwa

## [M01-072] — Crear globals.css con directivas Tailwind
- **Fecha:** 2026-04-07
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** CONFIG
- **Score auditoría:** 100%
- **Tipo de aprobación:** PRIMERA AUDITORÍA
- **Archivos:**
  - Creados: Ninguno
  - Modificados: src/app/globals.css
- **Rama:** config/M01-security-pwa

## [M01-073] — Crear env.mjs con validación Zod de variables de entorno
- **Fecha:** 2026-04-07
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** CODE
- **Score auditoría:** 100%
- **Tipo de aprobación:** REAUDITORÍA CICLO 1
- **Archivos:**
  - Creados: src/lib/env.mjs, .env.example
  - Modificados: .gitignore
- **Rama:** config/M01-security-pwa

## [M01-074] — Crear .env.local con valores de desarrollo
- **Fecha:** 2026-04-07
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** CONFIG
- **Score auditoría:** 100%
- **Tipo de aprobación:** REAUDITORÍA CICLO 1
- **Archivos:**
  - Creados: .env.local (no trackeado)
  - Modificados: .gitignore
- **Rama:** config/M01-security-pwa

## [M01-075] — Crear next.config.ts con configuración base
- **Fecha:** 2026-04-07
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** CONFIG
- **Score auditoría:** 100%
- **Tipo de aprobación:** PRIMERA AUDITORÍA
- **Archivos:**
  - Creados: Ninguno
  - Modificados: next.config.ts, package.json, pnpm-lock.yaml
- **Rama:** config/M01-security-pwa

## [M01-076] — Agregar security headers a next.config.ts
- **Fecha:** 2026-04-07
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** CONFIG
- **Score auditoría:** 100%
- **Tipo de aprobación:** PRIMERA AUDITORÍA
- **Archivos:**
  - Creados: Ninguno
  - Modificados: next.config.ts
- **Rama:** config/M01-security-pwa
- **Notas:** 6 security headers (HSTS, X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy) aplicados a source '/(.*)', verificados via curl. Sin CSP (reservado para M01-077). Archivo real es next.config.ts (no .js como nombra el prompt).

## [M01-081, M01-082] — Service Worker placeholder y registro en root layout
- **Fecha:** 2026-04-07
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** CODE
- **Tareas:** M01-081, M01-082
- **Títulos:** Crear Service Worker placeholder | Registrar Service Worker en root layout
- **Score auditoría:** 100%
- **Tipo de aprobación:** REAUDITORÍA CICLO 1
- **Archivos:**
  - Creados: public/sw.js, src/components/ServiceWorkerRegistration.tsx
  - Modificados: src/app/layout.tsx
- **Rama:** config/M01-security-pwa

## [M01-083] — Crear middleware.ts con constantes de rutas
- **Fecha:** 2026-04-07
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** CODE
- **Score auditoría:** 100%
- **Tipo de aprobación:** REAUDITORÍA CICLO 1
- **Archivos:**
  - Creados: src/middleware.ts
  - Modificados: Ninguno
- **Rama:** config/M01-security-pwa

## [M01-084] — Agregar esqueleto de guards al middleware
- **Fecha:** 2026-04-07
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** CODE
- **Score auditoría:** 100%
- **Tipo de aprobación:** REAUDITORÍA CICLO 1
- **Archivos:**
  - Creados: Ninguno
  - Modificados: src/middleware.ts
- **Rama:** config/M01-security-pwa

## [M01-086] — Crear configuración de Prettier
- **Fecha:** 2026-04-07
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** CONFIG
- **Archivos:**
  - Creados: .prettierrc, .prettierignore
  - Modificados: Ninguno
- **Rama:** tooling/M01-quality-ci

## M01-087 | M01-088
- Título: Crear .editorconfig | Inicializar Husky y crear pre-commit hook
- Fecha completación: 2026-04-08
- Score auditoría: 100% (git index 100755 verificado)
- Tipo de aprobación: REAUDITORÍA CICLO 3 — falso negativo test -x en entorno Windows/NTFS
- Archivos: .editorconfig, .husky/pre-commit, package.json
- Rama: tooling/M01-quality-ci
- Nota: .husky/_/husky.sh gitignored por diseño Husky 9 (no es error)

