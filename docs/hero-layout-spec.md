# Hero Layout Spec

## Purpose

This file defines the homepage hero composition precisely enough that implementation does not drift into a generic landing page.

## 1. Core Intent

The hero should feel like an unstable digital poster that has been annotated by a system operator.  
It must preserve the vibe of `vibe.jpg`, but visible glitch, scanline, and distortion behavior should be implemented in code rather than baked into static imagery.

## 2. Content

Required hero content:

- Name: `Liu Xin / 刘鑫`
- Title: `正在编制游戏梦`
- Subtitle: `Liu Xin｜玩法 / 技术策划，持续探索 AI 驱动的内容生成、互动结构与游戏体验`
- Primary CTA: enter work
- Secondary CTA: open about
- Small contact summary: email only

## 3. Layout Direction

- Experimental, not fully symmetrical
- The composition should not be a centered SaaS hero
- Text and visual mass should feel intentionally offset
- The hero should still remain readable on mobile

## 4. Suggested Desktop Wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ small system labels / locale / index                        │
│                                                              │
│         [visual field / code-rendered fault texture]         │
│                                                              │
│   LIU XIN                                                    │
│   正在编制游戏梦                                              │
│   Liu Xin｜玩法 / 技术策划，持续探索 AI 驱动的内容生成、        │
│   互动结构与游戏体验                                         │
│                                                              │
│   [ Enter Work ]   [ About ]                                │
│                                                              │
│   liuxin52534@gmail.com                                     │
│                         metadata / coordinates / issue tags  │
└──────────────────────────────────────────────────────────────┘
```

This is directional, not pixel-locked.

## 5. Visual Layering

The hero should combine:

- base atmosphere derived from `vibe.jpg`
- code-driven glitch streaks or fault slices
- scanline / grid / metadata annotations
- restrained color split or chromatic offsets

## 6. Behavior

- Idle state should feel calm but alive
- Hover or focus may briefly intensify distortion on selected elements
- The hero should not autoplay large media
- Reduce all decorative motion when reduced-motion is enabled

## 7. Anti-Goals

- No dashboard card cluster
- No giant centered rounded rectangle hero
- No overexposed neon-on-black cliché
- No image treatment that makes the title hard to read

---

Document version: 1.0  
Updated: 2026-04-08
