# Content Architecture

## Content Model

All portfolio content should stay static and easy to edit.

Primary source:

- `src/data/projects.ts`

## Content Buckets

### Selected Projects

Use for broad software and product work that should appear near the top of the homepage.

### Featured Case Study

Use for one flagship project that deserves expanded context and metadata.

### AI / ML

Use for applied AI, ML, retrieval, automation, and workflow projects.

### Design / Brand

Use for branding, visual identity, design systems, and art direction work.

### Stack Groups

Use for concise capability summaries instead of long resume-style lists.

### FAQ

Use for short answers that frame approach, focus, and process.

## Writing Rules

- Keep summaries to one or two lines
- Avoid generic resume phrasing
- Lead with what the system does and why it matters
- Keep category labels short and uppercase-friendly
- Use metadata rows for stack, role, year, and focus

## Suggested Real Project Inputs

- Cyber Risk Quantification Platform
- Tochtli Vendor Dashboard
- Aztec Calendar API
- Grovoo Music Review App
- AI Content Workflow Studio
- Brand / Graphic Design Work

## Future Expansion

If the portfolio grows, the next clean step is:

1. Add project detail routes under `src/app/projects/[slug]`
2. Move project content to structured objects with slugs and long descriptions
3. Keep homepage cards short and let case study pages hold the deeper narrative
