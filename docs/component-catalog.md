# Component Catalog

## Purpose

This document names the expected V1 components so implementation boundaries stay clear.

## 1. App Shell Components

- `SiteHeader`
  - primary navigation
  - locale switch
  - compact system metadata
- `SiteFooter`
  - copyright
  - minimal navigation repeat
  - contact summary
- `LocaleSwitch`
  - route-preserving locale switch behavior

## 2. Homepage Components

- `HeroPoster`
  - hero layout and copy
- `HeroVisualField`
  - base visual atmosphere derived from `vibe.jpg`
- `ScanlineOverlay`
  - subtle scanline layer
- `NoiseLayer`
  - light noise texture
- `SignalDistortion`
  - short glitch / fault effect wrapper
- `MetadataRail`
  - technical labels, coordinates, small status strings
- `FeaturedPreviewRail`
  - homepage featured preview list
- `ResumeStrip`
  - compact public-resume summary

## 3. Work Components

- `WorkGrid`
  - all projects list
- `FeaturedWorkCard`
  - richer featured preview card
- `ProjectCard`
  - standard project card
- `WorkFilterBar`
  - optional medium / featured grouping
- `ProjectMediaFrame`
  - shared media wrapper
- `ProjectDetailHero`
  - title, summary, metadata
- `ProjectDetailBody`
  - description area

## 4. Media Components

- `InlineVideoPlayer`
  - mp4 playback for site-hosted videos
- `PosterFrame`
  - poster / thumbnail presentation
- `XMindViewer`
  - wrapper around official `xmind-embed-viewer`
- `XMindViewerToolbar`
  - zoom / reset / open controls if needed

## 5. Resume Components

- `AboutIntro`
- `ExperienceList`
- `EducationList`
- `SkillGroupList`
- `ResumeDownloadCard`

## 6. Contact Components

- `ContactList`
- `ContactItem`
- `ContactCopyAction`

## 7. Journal Components

- `JournalPlaceholder`

## 8. Implementation Notes

- Shared styling should come from tokens, not one-off values
- Detail-page components should be composable so Featured and secondary works can share most structure
- Secondary work detail pages should use the same primitives with less copy density

---

Document version: 1.0  
Updated: 2026-04-08
