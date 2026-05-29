# DESIGN-NOTES.md

# Project Overview

This project is a responsive travel blog website built using React, Next.js, and Tailwind CSS. The application is designed to showcase travel destinations through reusable components, responsive layouts, and interactive frontend functionality.

The target audience includes users interested in exploring travel destinations and accessing travel-related content across desktop, tablet, and mobile devices.

The project combines semantic HTML structure, responsive CSS design systems, JavaScript interactivity, and React component architecture into a deployed frontend web application.

The application is publicly deployed using Vercel, allowing users to access the website through a live production environment rather than only running it locally during development.



---

# Semantic HTML Decisions

Semantic HTML elements were used throughout the application to improve accessibility, maintainability, document structure, and readability for both users and developers.

Examples of semantic elements used include:

- `<header>` for the top navigation area
- `<nav>` for navigation links
- `<main>` for primary page content
- `<section>` for grouped content areas
- `<article>` for reusable destination cards
- `<footer>` for footer content
- Proper `<form>` labels for accessibility and usability

Semantic HTML was chosen instead of relying entirely on generic `<div>` containers because semantic elements provide clearer meaning to browsers, search engines, developers, and assistive technologies such as screen readers.

This improves accessibility, maintainability, and overall organization of the application structure.



---

# Design System & Responsive Strategy

The project uses a consistent design system to maintain visual consistency across all pages and reusable components.

Key design system decisions include:

- Consistent spacing and padding throughout layouts
- Reusable button and card styling
- Typography hierarchy for headings and body text
- Shared color palette across light and dark themes
- Responsive breakpoints for mobile, tablet, and desktop devices

Responsive CSS techniques were used instead of building separate layouts for each device type. This approach improves scalability and maintainability while allowing the interface to adapt automatically across multiple screen sizes.

The application was tested across:

- Mobile (375px)
- Tablet (768px)
- Desktop (1280px)

Responsive behavior includes:

- Flexible layouts
- Responsive typography
- Adaptive spacing
- Mobile-friendly navigation
- Stacked card layouts on smaller screens



---

# Week 3: Interactive Features

## Feature 1: Theme Toggle

### What it does

Allows users to switch between light and dark mode themes. The selected theme is stored using `localStorage` so the preference remains saved even after refreshing the page.

### Why it matters

This improves user experience by allowing users to choose a viewing mode that matches their environment or personal preference. It also improves accessibility and personalization.

### Events

- `onClick` event triggers theme switching
- `handleToggle()` controls the toggle behavior
- `useEffect()` restores saved theme preference from `localStorage`

### State Management

The final implementation uses:

- `useState` to manage the active theme
- `useEffect` for synchronization with `localStorage`
- Conditional class rendering for dynamic UI updates

### Architectural Reasoning

An earlier approach relied more heavily on direct DOM manipulation using methods such as `classList.toggle`.

As the application became more component-driven, React state management provided a cleaner, more scalable, and more maintainable architecture for handling shared UI updates.



---

## Feature 2: Contact Form Validation

### What it does

Validates user input before submission by checking:

- Required fields
- Email format
- Phone number length

The form provides real-time feedback messages without requiring a page reload.

### Why it matters

This improves data quality, prevents invalid submissions, and enhances user experience through immediate feedback.

### Events

- `onSubmit` event handles form submission
- `preventDefault()` prevents unwanted page reloads
- `onChange` events update controlled form inputs

### State Management

The final implementation uses:

- `useState` for form field values
- `useState` for validation feedback messages
- Controlled React inputs using `value` and `onChange`

### Architectural Reasoning

Earlier implementations relied more heavily on direct DOM access and manual validation logic.

The final React-based implementation improved scalability, maintainability, and predictable UI updates through state-driven rendering.



---

# Week 4: Component Architecture

## Component Tree

```txt
RootLayout
├── Header
│   └── Nav
│       └── ThemeToggle (Client Component)
├── Main Content
│   ├── DestinationCard
│   ├── DestinationCard
│   ├── DestinationCard
│   └── ContactForm (Client Component)
└── Footer

```
---

# Week 7: Async & Loading States

## Feature 1: Async Weather Fetching

### What it does

Fetches real-time weather data asynchronously from the Open-Meteo API based on the selected city.

The component dynamically updates weather information without requiring a full page reload.

### Why it matters

This introduces Rich Internet Application behavior by allowing the interface to react to network requests in real time.

The implementation demonstrates how asynchronous JavaScript affects user experience through loading states, success rendering, and error handling.

### Events

- `useEffect()` triggers the initial weather fetch
- `onClick` events change selected cities
- `onClick` refreshes weather data manually
- Async fetch requests update UI state dynamically

### State Management

The final implementation uses:

- `useState` for selected city management
- `useState` for weather API data
- `useState` for loading state handling
- `useState` for refresh state handling
- `useState` for error handling

### Architectural Reasoning

The component was designed using a three-state asynchronous UI pattern:

- Loading state
- Success state
- Error state

This structure improves maintainability because rendering logic remains predictable during different stages of the network request lifecycle.

The implementation uses `async/await` together with `try/catch/finally` to ensure loading states always resolve correctly even during failed requests.


---

## Feature 2: Skeleton Loading Screen

### What it does

Displays animated placeholder content while weather data is loading from the API.

The skeleton screen visually matches the layout of the final rendered weather content.

### Why it matters

Skeleton screens improve perceived performance because users immediately see responsive visual feedback instead of empty layouts or blocking spinners.

The animation also communicates that content is actively loading.

### Events

- Conditional rendering displays the skeleton during loading states
- CSS pulse animations create loading feedback

### State Management

The final implementation uses:

- `loading` state to control skeleton visibility
- Conditional rendering for loading transitions

### Architectural Reasoning

A skeleton screen was chosen instead of a traditional spinner because it better represents the structure of incoming content.

The animation was intentionally kept subtle to ensure motion remained functional rather than decorative.


---

## Feature 3: Refresh Controls & Error Handling

### What it does

Allows users to manually refresh weather data while gracefully handling failed requests.

The component displays accessible error messages when requests fail and allows retrying without reloading the page.

### Why it matters

This improves reliability and usability by ensuring users receive clear feedback during failed network requests.

It also demonstrates how asynchronous interfaces must account for unstable network conditions.

### Events

- `onClick` refreshes API data
- `aria-busy` communicates loading state accessibility
- Disabled button states prevent repeated requests

### State Management

The final implementation uses:

- `refreshing` state for refresh button control
- `error` state for failed request handling
- Conditional rendering for retry interfaces

### Architectural Reasoning

The refresh button was disabled during active requests to prevent race conditions caused by repeated user interactions.

Error handling uses `try/catch/finally` patterns to guarantee that loading states always complete correctly.

`AbortController` was also implemented to prevent outdated requests from updating state after newer requests finish.


---

## Feature 4: Reduced Motion Accessibility

### What it does

Supports the `prefers-reduced-motion` media query to minimize animations and transitions for users who prefer reduced visual motion.

### Why it matters

This improves accessibility for users with vestibular disorders, motion sensitivity, or attention-related accessibility needs.

The implementation ensures animations remain optional rather than required for usability.

### Events

- CSS media queries automatically detect system accessibility preferences

### State Management

The implementation relies primarily on CSS media queries rather than JavaScript state management.

### Architectural Reasoning

Animations and transitions were reduced globally using the `prefers-reduced-motion` media query.

This approach improves accessibility while preserving overall interface responsiveness and usability.
