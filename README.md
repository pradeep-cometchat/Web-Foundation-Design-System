# Foundation Design System

A comprehensive design system built with React, TypeScript, and Storybook — providing reusable UI components, design tokens, and documentation for consistent product development.

## Live Demo

🔗 [View Storybook on GitHub Pages](https://pradeep-cometchat.github.io/Web-Foundation-Design-System/)

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
npm install
```

### Development

Run Storybook locally:

```bash
npm run storybook
```

This starts the Storybook dev server at [http://localhost:6006](http://localhost:6006).

### Build

Build Storybook for production:

```bash
npm run build-storybook
```

### Type Checking

```bash
npm run typecheck
```

## Project Structure

```
src/
├── foundation/          # Design tokens (colors, typography, spacing, radius, etc.)
├── base-components/     # Primitive UI components (Button, Checkbox, Dialog, etc.)
└── core-components/     # Composite components (ConversationList, ChatList, etc.)
```

## Tech Stack

- **React 18** — UI library
- **TypeScript** — Type safety
- **Storybook 8** — Component documentation and playground
- **Vite** — Build tooling

## Deployment

GitHub Pages is deployed from the `gh-pages` branch. To deploy manually:

```bash
STORYBOOK_BASE=/Web-Foundation-Design-System/ npm run build-storybook
```

Then push the `storybook-static` output to the `gh-pages` branch.
