# Background Theme Backup

This directory contains a backup of the portfolio's background theme components as of September 4, 2026.

## Backed Up Files
- `Background.tsx.bak` (Main wrapper component importing `LightPillar`)
- `LightPillar.tsx.bak` (Three.js light pillar shader background component)
- `SplashCursor.tsx.bak` (Interactive fluid/splash cursor effect component)
- `Iridescence.tsx.bak` (OGL iridescence shader component)

## Layout Configuration Snapshot (`src/app/layout.tsx`)
```tsx
<Background />
<SplashCursor
  DENSITY_DISSIPATION={3.5}
  VELOCITY_DISSIPATION={2}
  PRESSURE={0.1}
  CURL={3}
  SPLAT_RADIUS={0.1}
  SPLAT_FORCE={4000}
  DYE_RESOLUTION={256}
  SIM_RESOLUTION={32}
  COLOR_UPDATE_SPEED={10}
  SHADING={false}
  RAINBOW_MODE={false}
  COLOR="#b84177"
/>
```

## Background Props Snapshot (`src/components/common/Background.tsx`)
```tsx
<LightPillar
  topColor="#712097"
  bottomColor="#b91b54"
  intensity={1.1}
  rotationSpeed={0.7}
  glowAmount={0.005}
  pillarWidth={5.6}
  pillarHeight={0.2}
  noiseIntensity={0}
  pillarRotation={69}
  interactive={false}
  mixBlendMode="normal"
  quality="medium"
/>
```
