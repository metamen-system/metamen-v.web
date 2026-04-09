// =============================================================================
// GLOBAL TYPE DECLARATIONS — METAMEN100
// =============================================================================
// Asset module declarations for non-standard imports NOT covered by Next.js.
//
// IMPORTANT: Image formats (.webp, .png, .svg, .jpg, etc.) are already typed
// by Next.js via next-env.d.ts → next/image-types/global as StaticImageData.
// DO NOT redeclare image modules here — it will cause TS2322 conflicts.
//
// For Canvas 2D sprite compositing (avatar pipeline), sprites are loaded
// via runtime URL strings (e.g., `/sprites/archetypes/1/state_01.webp`),
// NOT via ES module imports. No type declaration needed for that pattern.
//
// DO NOT declare business/domain types here. Those belong in /lib/core/types/.
// =============================================================================

// ---------------------------------------------------------------------------
// Shader assets (WebGL — Avatar Aura Layer 5)
// ---------------------------------------------------------------------------

/** GLSL fragment shaders (.frag) */
declare module '*.frag' {
  const src: string;
  export default src;
}

/** GLSL shaders (.glsl) */
declare module '*.glsl' {
  const src: string;
  export default src;
}

// ---------------------------------------------------------------------------
// Audio assets (meditation, focus, SFX)
// ---------------------------------------------------------------------------

/** MP3 audio files */
declare module '*.mp3' {
  const src: string;
  export default src;
}

/** WAV audio files */
declare module '*.wav' {
  const src: string;
  export default src;
}

/** OGG audio files */
declare module '*.ogg' {
  const src: string;
  export default src;
}

// ---------------------------------------------------------------------------
// Animation assets (Lottie — Teatro de la Consecuencia, hitos)
// ---------------------------------------------------------------------------

/** Lottie JSON animation files */
declare module '*.lottie' {
  const src: string;
  export default src;
}

// ---------------------------------------------------------------------------
// Global utility types
// ---------------------------------------------------------------------------

/**
 * Flattens an intersection type into a single object type for better
 * IDE hover previews. Does NOT change the actual type shape.
 *
 * @example
 * type Merged = Prettify<{ a: string } & { b: number }>;
 * // { a: string; b: number }
 */
type Prettify<T> = { [K in keyof T]: T[K] } & {};
