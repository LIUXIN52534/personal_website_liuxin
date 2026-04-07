# Design Tokens

## Purpose

This file defines the minimum token system for V1 so implementation can stay visually consistent without inventing local styles component by component.

## 1. Color System

### Core Surfaces

- `--bg-primary`: `#0a0a0d`
- `--bg-elevated`: `#121218`
- `--bg-panel`: `rgba(16, 16, 22, 0.76)`
- `--bg-soft`: `#1a1b22`

### Text

- `--text-primary`: `#f4f1ea`
- `--text-secondary`: `rgba(244, 241, 234, 0.72)`
- `--text-muted`: `rgba(244, 241, 234, 0.48)`

### Lines And Structure

- `--line-strong`: `rgba(244, 241, 234, 0.22)`
- `--line-soft`: `rgba(244, 241, 234, 0.10)`

### Accents

- `--accent-cyan`: `#77f7ff`
- `--accent-pink`: `#ff5ab3`
- `--accent-lime`: `#c8ff7a`

### Semantic Use

- Homepage should lean on `cyan + pink`
- Metadata and system labels can use `lime` sparingly
- Inner content pages should use fewer accents than the homepage

## 2. Typography

### English / Latin

- Display / UI primary:
  - `"Space Grotesk", "Sora", "Arial", sans-serif`
- Mono / metadata:
  - `"IBM Plex Mono", "JetBrains Mono", "Consolas", monospace`

### Chinese

- Primary text:
  - `"Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`

### Usage Rules

- Use at most two families in the same viewport:
  - one sans family
  - one mono family
- Mono is for metadata, labels, coordinates, and technical annotation
- Long Chinese paragraphs should stay on the sans family for readability

## 3. Type Scale

- `--text-xs`: `12px`
- `--text-sm`: `14px`
- `--text-md`: `16px`
- `--text-lg`: `20px`
- `--text-xl`: `28px`
- `--text-2xl`: `40px`
- `--text-3xl`: `56px`
- `--text-4xl`: `72px`

### Line Height

- label / mono:
  - `1.2`
- body:
  - `1.6`
- display:
  - `0.95` to `1.05`

## 4. Spacing System

- `--space-1`: `4px`
- `--space-2`: `8px`
- `--space-3`: `12px`
- `--space-4`: `16px`
- `--space-5`: `24px`
- `--space-6`: `32px`
- `--space-7`: `48px`
- `--space-8`: `64px`
- `--space-9`: `96px`

## 5. Radius And Borders

- `--radius-sm`: `8px`
- `--radius-md`: `14px`
- `--radius-lg`: `20px`

Rules:

- Homepage visual panels may use soft radius
- Hairlines should usually feel more important than thick borders

## 6. Breakpoints

- `sm`: `640px`
- `md`: `768px`
- `lg`: `1024px`
- `xl`: `1280px`
- `2xl`: `1536px`

## 7. Motion

- `--duration-fast`: `160ms`
- `--duration-base`: `280ms`
- `--duration-slow`: `520ms`
- `--ease-standard`: `cubic-bezier(0.22, 1, 0.36, 1)`

Rules:

- Motion should feel smooth and deliberate, not bouncy
- Glitch effects should be short pulses, not persistent chaos
- Honor `prefers-reduced-motion`

## 8. Texture Rules

- Noise should stay subtle and layered
- Scanline should not reduce text readability
- Grid overlays should support hierarchy, not compete with the copy

---

Document version: 1.0  
Updated: 2026-04-08
