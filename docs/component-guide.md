# Component Guide

## Goal

Keep the portfolio component system small, reusable, and easy to extend without introducing unnecessary abstraction.

## Current Core Components

### Layout

- `Header`
- `Nav`
- `Footer`

### UI

- `Button`
- `ImagePanel`
- `ProjectCard`
- `SectionHeader`
- `FeaturedProject`
- `MetadataTable`

### Sections

- `HeroSection`
- `ProjectsSection`
- `FeaturedCaseStudySection`
- `AiMlSection`
- `DesignSection`
- `SkillsSection`
- `AboutSection`
- `FaqSection`
- `ContactSection`

## Reuse Rules

- `ImagePanel` is the reusable grayscale placeholder surface for hero, cards, and supporting visuals.
- `SectionHeader` standardizes the section label, title, caption, and optional description.
- `ProjectCard` handles compact project summaries for grid sections.
- `FeaturedProject` is reserved for one primary case study at a time.
- `MetadataTable` is for structured project details only.

## Do Not

- Put content arrays inside UI components
- Add business logic to presentational components
- Add global state for static sections
- Create separate variants unless there is a second real use case

## Good Future Additions

- `CaseStudyCard` for deeper project previews
- `QuoteBlock` for testimonials or philosophy notes
- `MediaGallery` for real screenshots later
- `TagPill` if project labels become more complex
