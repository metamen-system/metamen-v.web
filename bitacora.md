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
| Última tarea completada | `M01-012` — Crear root layout con metadatos base y estructura HTML |
| Próxima tarea           | `M01-013` — (pendiente de definición)                           |
| Bloqueadores            | Ninguno                                                  |
| Fecha inicio proyecto   | 2026-02-21                                               |
| Branch                  | tooling/M01-quality-ci                                   |

## DEUDA TÉCNICA PENDIENTE

| ID Deuda | Descripción | Archivo afectado | Asignada a | Severidad |
| -------- | ----------- | ---------------- | ---------- | --------- |
| DT-001 | `eslint.config.mjs` importa `eslint-config-next/core-web-vitals` sin extensión `.js`. ESLint 9 con módulos ESM estrictos falla al resolver el módulo. Fix: cambiar a `eslint-config-next/core-web-vitals.js` | `eslint.config.mjs` | **M01-085** | 🟡 IMPORTANTE — bloquea `pnpm lint` |

---

## MAPA DE PROGRESO (MODULOS CORE)

```text
M01: Infraestructura             [█░░░░░░░░░] 10/110  ← EN CURSO
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

* **Total actual**: 12 tareas completadas.

### BLOQUE M01-001 a M01-010 (RESUMEN CONSOLIDADO)
* **Rango**: `M01-001` → `M01-010`
* **Estado global**: ✅ COMPLETADO / APROBADO
* **Corte**: 2026-04-05
* **Resumen**:
  - `M01-001` Repositorio GitHub creado
  - `M01-002` Inicialización Next.js 15 App Router
  - `M01-003` Configuración `.npmrc` para pnpm estricto
  - `M01-004` `engines` + `packageManager` en `package.json`
  - `M01-005` `pnpm-workspace.yaml` mínimo funcional
  - `M01-006` Dependencias de producción (estado/validación/fechas)
  - `M01-007` Dependencias de producción (servicios e integraciones)
  - `M01-008` Dependencias de producción (UI y utilidades)
  - `M01-009` Dependencias de desarrollo (testing)
  - `M01-010` Dependencias de desarrollo (linting y formateo)
* **Notas**:
  - Se aceptó excepción técnica de `pnpm-workspace.yaml` por integridad de workspace pnpm.
  - Se mantiene `recharts` fuera por conflicto SSOT/documentación y política vigente.
  - Auditorías de cierre de los ciclos recientes: 100%.

### M01-011 — Configurar tsconfig.json con modo estricto completo
- **Fecha:** 2026-04-05
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** CONFIG
- **Archivos:**
  - Creados: ninguno
  - Modificados: `tsconfig.json`
- **Score auditoría:** 100%
- **Ciclos de auditoría:** 1 (aprobó a la primera)
- **Commit:** `config(M01-011): configure tsconfig.json with full strict mode`
- **Rama:** `setup/M01-base-infrastructure`
- **Notas:** target ES2022, strict completo explícito (10 flags), noUncheckedIndexedAccess, exactOptionalPropertyTypes, path alias @/* → ./src/* con baseUrl ".". pnpm tsc --noEmit → EXIT:0 sin errores. Bug pre-existente en eslint.config.mjs (import sin .js) detectado y reportado — corresponde a tarea M01-010 o anterior, fuera del scope de esta tarea.

### M01-012 — Crear root layout con metadatos base y estructura HTML
- **Fecha:** 2026-04-05
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** CODE
- **Archivos:**
  - Creados: ninguno
  - Modificados: `src/app/layout.tsx`
- **Score auditoría:** 100%
- **Ciclos de auditoría:** 1 (aprobó a la primera)
- **Commit:** `feat(M01-012): create root layout with base metadata and HTML structure`
- **Rama:** `feat/M01-routing-pages`
- **Notas:** Se creó el Server Component `RootLayout` como default export. Se incluyeron fuentes `Inter` y `Space_Grotesk` con las variables y subsets indicados. Se configuró metadatos con el título y description correctas, el viewport themeColor en rojo oscuro, y body con las configuraciones CSS globales sin imports locales adicionales.

### M01-014 — Crear global error boundary
- **Fecha:** 2026-04-05
- **Módulo:** 01 — Infraestructura & Fundación del Proyecto
- **Tipo:** CODE
- **Archivos:**
  - Creados: `src/app/error.tsx`
  - Modificados: ninguno
- **Score auditoría:** 100%
- **Ciclos de auditoría:** 1 (aprobó a la primera)
- **Commit:** `feat(M01-014): add global error boundary with reset functionality`
- **Rama:** `feat/M01-routing-pages`
- **Notas:** Implementado error boundary global como Client Component con `useEffect` para `console.error(error)`, visual con tokens SSOT y botón `Reintentar` que ejecuta `reset()`.

