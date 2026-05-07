## Week 3: Interactive Features

### Feature 1: Theme Toggle

- **What it does:**  
  Allows users to switch between light and dark mode by toggling a CSS class on the `document.body`. The selected theme is saved in `localStorage` so it persists even after refreshing the page.

- **Why it matters:**  
  Improves user experience by letting users choose a comfortable viewing mode depending on their environment. It also adds personalization and accessibility to the app.

- **Events:**  
  - `onClick` event triggers the theme switch  
  - `handleToggle()` function handles toggling logic  
  - Reads from `localStorage` on load to restore saved theme  

- **State:**  
  - Uses `document.body.classList` to track UI theme state  
  - Uses `localStorage` to persist theme selection  
  - No React state (`useState`) is used  



### Feature 2: Contact Form Validation

- **What it does:**  
  Validates user input before form submission. Ensures all fields are filled, email is valid, and phone number has at least 10 digits. Displays real-time feedback messages without page reload.

- **Why it matters:**  
  Prevents invalid data submission and improves data quality. It also enhances user experience by giving immediate feedback on errors or successful submission.

- **Events:**  
  - `onSubmit` event on the form  
  - `handleSubmit()` function prevents default submission behavior  
  - DOM-based validation using `querySelector`

- **State:**  
  - No React state is used  
  - Input values are accessed directly from the DOM  
  - Feedback message is controlled via a `<p>` element (`msg`)  
  - Form is reset using `form.reset()` after successful submission  


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

## Component 1: ThemeToggle

- **Purpose:**  
  Allows users to switch between light and dark mode using React state.

- **State Management:**  
  - Uses `useState` to manage the current theme  
  - Uses `useEffect` with `localStorage` to persist theme selection  

- **Component Type:**  
  - Client Component (`"use client"`) because it uses hooks and browser APIs  

---

## Component 2: ContactForm

- **Purpose:**  
  Handles user input, validation, and feedback messages using controlled form inputs.

- **State Management:**  
  - Uses `useState` for form fields and validation feedback  
  - Uses controlled inputs with `value` and `onChange`  

- **Component Type:**  
  - Client Component (`"use client"`) because it uses React state and events  

---

## Component 3: DestinationCard

- **Purpose:**  
  Displays destination information in a reusable card layout.

- **Props:**  
  - Receives `city` and `description` as props  
  - Rendered multiple times using array mapping  

- **Component Type:**  
  - Server Component by default because it does not use state or browser APIs  

---

## Component 4: Header, Footer, and Nav

- **Purpose:**  
  Provide reusable layout and navigation across the application.

- **State Management:**  
  - No local state  
  - Receive or render content only  

- **Component Type:**  
  - Server Components by default