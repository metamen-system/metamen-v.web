# METAMEN100 — BITACORA DE PROYECTO

# ══════════════════════════════════════════════════════════════

# Este documento es el ESTADO VIVO del proyecto.

# Todo agente DEBE leerlo al inicio de cada sesión.

# Todo agente DEBE actualizarlo después de cada tarea completada.

# ══════════════════════════════════════════════════════════════

## ESTADO GENERAL

| Campo                   | Valor                                           |
| ----------------------- | ----------------------------------------------- |
| Fase actual             | Cierre M01 + Hotfix CI/CD completado            |
| Módulo en curso         | **M02: Design System & Componentes UI**         |
| Última tarea completada | `M01-110` — Cierre de Módulo 01 (con hotfix CI) |
| Próxima tarea           | Inicio de backlog M02 (pendiente de asignación) |
| Bloqueadores            | Ninguno                                         |
| Fecha inicio proyecto   | 2026-02-21                                      |
| Branch                  | main                                            |

## DEUDA TÉCNICA PENDIENTE

| ID Deuda | Descripción                                                                                                                                                                                                  | Archivo afectado    | Asignada a  | Severidad                           |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- | ----------- | ----------------------------------- |
| DT-001   | `eslint.config.mjs` importa `eslint-config-next/core-web-vitals` sin extensión `.js`. ESLint 9 con módulos ESM estrictos falla al resolver el módulo. Fix: cambiar a `eslint-config-next/core-web-vitals.js` | `eslint.config.mjs` | **M01-085** | 🟡 IMPORTANTE — bloquea `pnpm lint` |

---

## MAPA DE PROGRESO (MODULOS CORE)

```text
M01: Infraestructura             [██████████] 110/110  ← COMPLETADO ✅
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

- **Total actual**: 110 tareas completadas.

### BLOQUE CONSOLIDADO M01-001 a M01-110 (MODULO 01)

- **Rango**: `M01-001` → `M01-110`
- **Estado global**: ✅ COMPLETADO / APROBADO
- **Fecha de cierre**: 2026-04-10
- **Módulo**: 01 — Infraestructura & Fundación del Proyecto
- **Aprobación auditoría**: 100% consolidado (incluye reauditorías)
- **Resumen ejecutivo de entregables**:
  - Bootstrap de repositorio y base técnica: Next.js 15, React 19, TypeScript estricto, pnpm y configuración inicial de calidad.
  - Arquitectura App Router con rutas auth/app/onboarding y handlers API base.
  - Estructura canónica de carpetas (`src/lib`, `src/components`, `src/actions`, `src/hooks`, `src/providers`, `public`, `tests`).
  - Seguridad y PWA base: middleware, headers, manifest, robots/sitemap y service worker placeholder.
  - Tooling y CI/CD: ESLint, Prettier, Husky, lint-staged, workflows CI/Preview/Production y validaciones de build/typecheck/lint.
  - Verificaciones finales del módulo: compilación TypeScript, lint y build de producción en verde.
- **Ramas utilizadas y mergeadas**:
  - `setup/M01-base-infrastructure`
  - `feat/M01-routing-pages`
  - `setup/M01-architecture-folders`
  - `config/M01-security-pwa`
  - `tooling/M01-quality-ci`
- **Hotfix post-cierre incluido (2026-04-10)**:
  - `env.ts` ajustado para validar variables server-only en runtime y evitar falla de build en CI.
  - Workflows de GitHub Actions actualizados para runtime Node 24 (`actions/checkout@v6`, `actions/setup-node@v6`, `pnpm/action-setup@v5`).
  - Estabilización de workflow de producción (E2E/build/deploy) con `NEXT_PUBLIC_*` placeholders en CI.
- **Notas**:
  - Este bloque reemplaza el detalle individual de tareas M01 para mantener `bitacora.md` ligero.
  - Se conserva trazabilidad general del módulo sin perder estado de cierre ni hotfix de CI/CD.

### M02-001 — Instalar dependencias UI — cva, clsx, tailwind-merge

- **Tarea**: M02-001
- **Título**: Instalar dependencias UI — cva, clsx, tailwind-merge
- **Fecha completación**: 2026-04-10
- **Score auditoría**: 100%
- **Tipo de aprobación**: REAUDITORÍA CICLO 1
- **Archivos**: package.json, pnpm-lock.yaml
- **Rama**: config/M02-tailwind-tokens

### M02-002 — Crear helper cn() en src/lib/utils.ts

- **Tarea**: M02-002
- **Título**: Crear helper cn() en src/lib/utils.ts
- **Fecha completación**: 2026-04-10
- **Score auditoría**: 100%
- **Tipo de aprobación**: REAUDITORÍA CICLO 1
- **Archivos**: src/lib/utils.ts
- **Rama**: config/M02-tailwind-tokens

### M02-003 | M02-004 | M02-005 — Tokens de color (fondos + texto + accent-gold) en tailwind.config.ts

- **Tarea**: M02-003 | M02-004 | M02-005
- **Título**: Tokens de color (fondos + texto + accent-gold) en tailwind.config.ts
- **Fecha completación**: 2026-04-10
- **Score auditoría**: 100%
- **Tipo de aprobación**: PRIMERA AUDITORÍA
- **Archivos**: tailwind.config.ts
- **Rama**: config/M02-tailwind-tokens

### M02-006 | M02-007 | M02-008 — Tokens accent-cta + accent-active + estados semánticos en tailwind.config.ts

- **Tareas**: M02-006, M02-007, M02-008
- **Título**: Agregar tokens accent-cta + accent-active + estados semánticos a tailwind.config.ts
- **Fecha completación**: 2026-04-10
- **Score auditoría**: 100%
- **Tipo de aprobación**: REAUDITORÍA CICLO 1
- **Archivos**: tailwind.config.ts
- **Rama**: config/M02-tailwind-tokens
