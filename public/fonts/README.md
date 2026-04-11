# Fuentes del Sistema METAMEN100

## Implementación

Las fuentes se cargan via next/font/google (ver src/app/layout.tsx):

- **Inter** → variable CSS --font-inter (body text)
- **Space Grotesk** → variable CSS --font-display (headings)
- **JetBrains Mono** → variable CSS --font-mono (code)

## Decisión de Arquitectura

next/font/google optimiza, auto-aloja y sirve las fuentes desde el servidor de Next.js/Vercel sin exponerlas a Google en el cliente. Los archivos woff2 son descargados y cacheados en .next/ durante el build.

## Fuentes locales (alternativa)

Si se requiere independencia total de red durante el build, descargar manualmente las variantes variable woff2 a este directorio y actualizar src/app/layout.tsx para usar next/font/local.
