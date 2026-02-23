

# Smooth Scroll Animations Plan

## Fix
Remove the unused `overview` property from the `ProjectCard` component destructuring to resolve the TypeScript build error.

## Animations

### 1. Scroll-triggered fade-in for sections
Each section (About, Projects, Footer) will animate into view as the user scrolls down. Using the Intersection Observer API via a custom `useScrollAnimation` hook:
- Sections start invisible and slightly translated down
- When they enter the viewport, they fade in and slide up
- Staggered delay on project cards so they animate in one by one

### 2. Smooth scroll on down-arrow click
The existing anchor link (`href="#about"`) already scrolls, but we'll add `scroll-behavior: smooth` to the HTML element in CSS for a polished transition.

## Technical Details

### New file: `src/hooks/useScrollAnimation.ts`
A custom hook using Intersection Observer that returns a ref and a boolean `isVisible`. Components attach the ref to their container and conditionally apply animation classes.

### Changes to `src/index.css`
- Add `html { scroll-behavior: smooth; }` for smooth anchor scrolling

### Changes to `src/components/AboutSection.tsx`
- Wrap section content with the scroll animation hook, applying fade-in classes

### Changes to `src/components/ProjectsSection.tsx`
- Apply scroll animation to the section heading
- Apply staggered fade-in to each project card (using inline `transition-delay`)

### Changes to `src/components/Footer.tsx`
- Apply scroll animation for fade-in on scroll

### Changes to `src/components/ProjectCard.tsx`
- Remove `overview` from destructuring (fixes build error)
- Accept an optional `style` prop for staggered animation delay

### Changes to `tailwind.config.ts`
- Add `fade-in` keyframe and animation (translate Y + opacity) if not already present

