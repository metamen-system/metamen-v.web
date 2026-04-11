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
| Última tarea completada | `M02-015` — Keyframes shimmer y breathe + animations funcionales Tailwind v4 |
| Próxima tarea           | `M02-016` — Gradients y utilidades visuales (pendiente de ejecución) |
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
M02: Design System               [██░░░░░░░░] 15/??
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

- **Total actual**: 125 tareas completadas.

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

### BLOQUE CONSOLIDADO M02-001 a M02-015 (MODULO 02 — PARCIAL)

- **Rango**: `M02-001` → `M02-015`
- **Estado global**: ✅ COMPLETADO / APROBADO (bloque parcial)
- **Fecha de cierre del bloque**: 2026-04-10
- **Módulo**: 02 — Design System & Componentes UI
- **Aprobación auditoría**: 100% consolidado (incluye reauditorías)
- **Resumen ejecutivo de entregables**:
  - Instalación de utilidades UI base y creación de helper `cn()` para composición de clases.
  - Configuración de tokens de color del sistema (fondos, texto, acentos, estados, vectores y rareza).
  - Definición de escala tipográfica responsiva con `clamp()` para 11 tokens.
  - Implementación de tokens de `borderRadius` y `boxShadow` (incluyendo variantes de color).
  - Integración de animaciones `shimmer` y `breathe` para Tailwind v4 con soporte CSS-first en `globals.css`.
- **Archivos principales impactados**:
  - `package.json`
  - `pnpm-lock.yaml`
  - `src/lib/utils.ts`
  - `tailwind.config.ts`
  - `src/app/globals.css`
- **Rama de trabajo**:
  - `config/M02-tailwind-tokens`
- **Notas**:
  - Este bloque reemplaza el detalle individual de M02-001 a M02-015 para mantener `bitacora.md` ligero.

### M02-016 | M02-017 — Agregar clases de gradiente y shadow CSS a globals.css

- **Tarea**: `M02-016 | M02-017`
- **Título**: Agregar clases de gradiente y shadow CSS a `globals.css`
- **Fecha completación**: 2026-04-10
- **Score auditoría**: 100%
- **Tipo de aprobación**: PRIMERA AUDITORÍA
- **Archivos**: `src/app/globals.css`
- **Rama**: `config/M02-tailwind-tokens`

### M02-018 | M02-019 — Agregar clases rarity-border y avatar-aura CSS a globals.css

- **Tarea**: `M02-018 | M02-019`
- **Título**: Agregar clases rarity-border y avatar-aura CSS a `globals.css`
- **Fecha completación**: 2026-04-11
- **Score auditoría**: 100%
- **Tipo de aprobación**: REAUDITORÍA CICLO 1
- **Archivos**: `src/app/globals.css`, `.gitignore`, `docs/modulos/` (eliminados)
- **Rama**: `config/M02-tailwind-tokens`

### M02-020 | M02-021a | M02-021b — Agregar keyframe shimmer CSS | Agregar estilos de scrollbar personalizado | Agregar clases de safe area insets

- **Tareas**: `M02-020`, `M02-021a`, `M02-021b`
- **Títulos**: Agregar keyframe shimmer CSS | Agregar estilos de scrollbar personalizado | Agregar clases de safe area insets
- **Fecha completación**: 2026-04-11
- **Score auditoría**: 100%
- **Tipo de aprobación**: REAUDITORÍA CICLO 1
- **Archivos**: `src/app/globals.css`
- **Rama**: `config/M02-tailwind-tokens`
- **Nota**: ✅ ÚLTIMA TAREA DE LA RAMA — rama cerrada y mergeada
- **Corrección aplicada**: Revertido cambio fuera de scope en `layout.tsx`
