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


# Week 8: Database & Backend

## Feature 1: PostgreSQL Database Integration

### What it does

Stores contact form submissions permanently in a PostgreSQL database hosted on Neon.

Instead of losing data after a page refresh or server restart, submitted messages are persisted in the database and can be retrieved later.

### Why it matters

Database persistence is a core requirement of modern web applications.

This feature allows user-generated content to be stored reliably and accessed across sessions, devices, and deployments.

### Provider Chosen

The project uses PostgreSQL as its database provider.

### Why PostgreSQL Was Chosen

PostgreSQL was selected because it is:

* Reliable and production-ready
* Widely used in industry environments
* Fully supported by Prisma ORM
* Compatible with Neon cloud database hosting
* Well suited for structured relational data

The application stores contact form submissions using a consistent structure, making a relational database an appropriate choice.

### Technologies Used

* PostgreSQL
* Neon Serverless Database Hosting
* Prisma ORM
* Prisma PostgreSQL Driver Adapter

### Prisma Configuration

The Prisma datasource is configured as:

```prisma
datasource db {
  provider = "postgresql"
}
```

### Architectural Reasoning

Prisma was selected because it provides a type-safe interface for database operations while reducing the amount of SQL required within the application.

Using Prisma improves maintainability, developer productivity, and data consistency throughout the project.

---

## Feature 2: Schema Definition & Database Design

### Schema Definition

The application uses the following Prisma schema:

```prisma
model Message {
  id        Int      @id @default(autoincrement())
  name      String
  phone     String
  email     String
  message   String
  createdAt DateTime @default(now())
}
```

### Schema Rationale

The schema was designed around the information collected from the contact form.

Field purposes include:

* `id` uniquely identifies each message
* `name` stores the sender's full name
* `phone` stores the sender's phone number
* `email` stores the sender's email address
* `message` stores the submitted enquiry
* `createdAt` records when the message was submitted

### Why this Design Was Chosen

An auto-incrementing primary key was selected because it provides a simple and efficient way to uniquely identify database records.

The timestamp field allows messages to be sorted chronologically so the newest submissions can be displayed first.

The schema remains intentionally simple because the application currently focuses on collecting and displaying contact messages rather than managing complex relationships between multiple database tables.

### Architectural Reasoning

The schema closely mirrors the structure of the contact form.

This approach minimizes unnecessary complexity while ensuring all user-submitted information can be stored and retrieved efficiently.

---

## Feature 3: Server Actions for Form Submission

### What it does

Processes contact form submissions entirely on the server using Next.js Server Actions.

When a user submits the contact form, the form data is sent directly to a server function where validation and database operations occur.

### Why it matters

Server Actions simplify form handling by removing the need for custom API routes while keeping sensitive database operations securely on the server.

This reduces application complexity and improves security.

### Events

* Form submit event triggers the Server Action
* Server Action validates incoming form data
* Database record is created
* Cache is revalidated
* User is redirected after successful submission

### Server Action Flow

```txt
Contact Form
      ↓
Server Action
      ↓
Validation
      ↓
Prisma Create
      ↓
Database Storage
      ↓
Revalidate Cache
      ↓
Redirect User
```

### Architectural Reasoning

Server Actions were chosen instead of traditional REST API endpoints because they provide a more direct integration between React components and server-side functionality.

This approach reduces boilerplate code and keeps data processing logic close to the components that use it.

---

## Feature 4: Server-Side Form Validation

### What it does

Validates contact form data before storing it in the database.

Validation checks include:

* Required field validation
* Email format validation
* Phone number validation

### Why it matters

Server-side validation ensures data integrity and prevents invalid records from being stored in the database.

Unlike client-side validation alone, server-side validation cannot be bypassed by users.

### Validation Rules

* Name cannot be empty
* Phone number cannot be empty
* Email cannot be empty
* Message cannot be empty
* Email must contain "@"
* Phone number must contain at least 10 digits

### Architectural Reasoning

Validation logic was implemented inside the Server Action because all incoming requests must be validated regardless of how they are submitted.

This guarantees consistent enforcement of business rules and improves application security.

---

## Feature 5: Dynamic Message Retrieval

### What it does

Retrieves contact form submissions directly from the PostgreSQL database and displays them on the Messages page.

Messages are sorted by submission date with the newest messages displayed first.

### Why it matters

Dynamic database-driven content demonstrates full-stack functionality by connecting stored data to user-facing pages.

The page automatically reflects newly submitted content without requiring manual updates.

### Database Query

Messages are retrieved using Prisma:

```ts
const messages = await prisma.message.findMany({
  orderBy: {
    createdAt: "desc",
  },
  take: 20,
});
```

### Features

* Displays latest submissions
* Sorts by newest first
* Shows submission date and time
* Displays contact information
* Provides empty-state messaging

### Architectural Reasoning

Server-side database queries were used because data retrieval occurs before page rendering.

This improves performance, reduces client-side complexity, and ensures users always receive the latest database content.

---

## Feature 6: Cache Revalidation & Redirects

### What it does

Automatically refreshes database-driven pages after new messages are submitted.

After storing a message:

* Cache is revalidated
* Messages page updates automatically
* User receives confirmation through a success notification

### Why it matters

Without cache revalidation, users could see outdated content after submitting new data.

Revalidation ensures database updates are reflected immediately.

### Events

* Successful database insertion
* `revalidatePath()` refreshes cached content
* `redirect()` navigates the user to the messages page

### Architectural Reasoning

Next.js caching improves application performance, but database updates require cache invalidation.

Using `revalidatePath()` provides a controlled way to refresh affected pages while preserving overall application performance.

---

# Week 8 Architecture Overview

## Data Flow

```txt
User
  ↓
Contact Form
  ↓
Server Action
  ↓
Validation
  ↓
Prisma ORM
  ↓
PostgreSQL Database
  ↓
Messages Page Query
  ↓
Rendered UI
```

## Technologies Added in Week 8

* PostgreSQL
* Neon
* Prisma ORM
* Prisma Client
* Prisma PostgreSQL Adapter
* Next.js Server Actions
* Cache Revalidation
* Server-Side Validation
* Dynamic Database Queries

---

# Week 9: Authentication, Security & Performance

## Feature 1: User Authentication with Auth.js

### What it does

The application uses **Auth.js** with GitHub as the authentication provider to allow users to securely sign in before accessing protected resources.

Authentication is session-based, allowing users to remain signed in while navigating the application and securely sign out when finished.

### Why it matters

Authentication ensures that sensitive information is only accessible to authorized users. Instead of allowing anonymous visitors to access protected content, the application verifies the user's identity before granting access.

This improves security while providing a personalized user experience.

### Authentication Flow

```txt
User
   ↓
Sign In Button
   ↓
GitHub Authentication
   ↓
Session Created
   ↓
Protected Resources Accessible
```

### Architectural Reasoning

Auth.js was selected because it integrates seamlessly with Next.js App Router and Server Components. It provides secure session management while reducing the amount of authentication logic that must be implemented manually.

---

## Feature 2: Protected Messages Page

### What it does

The `/messages` page is protected using server-side authentication checks.

Before rendering the page, the application verifies whether a valid authenticated session exists. If no session is found, the user is redirected to the sign-in page.

### Why it matters

The Messages page contains user-submitted contact information that should not be publicly accessible.

Restricting access prevents unauthorized users from viewing stored data and demonstrates role-based access control principles.

### Access Flow

```txt
User Requests /messages
          ↓
Authentication Check
          ↓
Authenticated?
      ┌───────────┐
      │           │
     Yes         No
      │           │
Display Page   Redirect to Sign In
```

### Architectural Reasoning

Authentication checks are performed on the server before rendering the page. This approach is more secure than relying solely on client-side protection because unauthorized users never receive the protected content.

---

## Feature 3: OWASP Security Mitigations

### Mitigation 1: Broken Access Control Prevention

The application prevents unauthorized access to protected resources by requiring authentication before displaying stored contact messages.

Server-side session validation ensures that only authenticated users can access the `/messages` page.

### Mitigation 2: Injection Prevention

Database operations are performed using Prisma ORM rather than manually constructing SQL queries.

Prisma automatically parameterizes database queries, significantly reducing the risk of SQL injection attacks. User input is also validated before being stored.

### Why these mitigations matter

Applying these OWASP security practices improves both the confidentiality and integrity of the application by protecting sensitive information and preventing malicious database manipulation.

---

## Feature 4: Performance and Optimization

### What it does

The application was analyzed using Lighthouse to evaluate performance, accessibility, best practices, and SEO.

Based on the audit, performance optimizations were applied to improve the overall user experience.

### Improvements Implemented

* Optimized Next.js rendering
* Server-side data fetching where appropriate
* Efficient database queries using Prisma
* Cache revalidation with `revalidatePath()`
* Reusable component architecture to reduce duplication

### Why it matters

Performance optimization reduces loading times, improves responsiveness, and provides a better experience across desktop and mobile devices while following modern web development best practices.

---

# Week 9 Architecture Overview

```txt
User
   ↓
Authentication (Auth.js)
   ↓
Session Validation
   ↓
Protected Route (/messages)
   ↓
Prisma ORM
   ↓
PostgreSQL Database
   ↓
Server Component Rendering
   ↓
User Interface
```

## Technologies Added in Week 9

* Auth.js
* GitHub OAuth Authentication
* Protected Server Routes
* Session Management
* OWASP Security Mitigations
* Lighthouse Performance Auditing
* Server-Side Authorization
