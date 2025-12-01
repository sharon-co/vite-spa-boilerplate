# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Single Page Application (SPA) for **NeuroLink AI**, a brain-wave detection device that uses AI/LLMs to interpret neural patterns. The landing page showcases the product with an Apple-inspired design aesthetic.

## Development Commands

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Common Commands
```bash
# Install dependencies
npm install

# Start development server (with HMR)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs on `http://localhost:5173/` by default.

## Architecture

### Entry Point
The application uses Vite's standard entry pattern:
- `index.html` - Root HTML file (Vite entry point, not in src/)
- `src/main.js` - JavaScript entry that renders the entire SPA into `#app`

### Single-Page Structure
Unlike traditional multi-component SPAs, this application uses a **monolithic approach**:
- The entire page structure is defined as a template string in `src/main.js`
- All HTML markup is injected via `innerHTML` on initial load
- No component framework (React/Vue/etc.) - vanilla JavaScript only

### Styling Approach
`src/style.css` uses an **Apple-inspired design system**:
- CSS custom properties defined in `:root` for theming
- Alternating dark/light sections for visual rhythm
- Glassmorphism effects (navigation bar with backdrop-filter)
- CSS animations for brain-wave visuals, ripple effects, and floating icons
- Mobile-first responsive design with breakpoints at 768px and 1024px

### Design Patterns
- **Sections**: Full-screen sections (`.section`) alternate between dark (`.section-dark`) and light (`.section-light`)
- **Hero section**: Full viewport height with animated brain-wave visualization
- **Feature visuals**: Placeholder divs with emoji-based content and CSS animations
- **Navigation**: Fixed glassmorphic navbar with smooth scroll anchors

### Key Files
- `src/main.js` - Single-file application logic and HTML structure
- `src/style.css` - Complete design system and all styles
- `src/counter.js` - Unused legacy file from Vite template (can be removed)
- `public/` - Static assets (SVG logos)

## Making Changes

When modifying this application:
- Edit `src/main.js` for content, structure, or interactive features
- Edit `src/style.css` for visual changes, animations, or responsive behavior
- Vite's HMR will automatically reload changes in the browser
- To add images/assets for the brain-wave device, place them in `public/` and reference with absolute paths (e.g., `/device-image.png`)
