"use client";

import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
      if (typeof window !== "undefined") {
        return localStorage.getItem("theme") || "light";
      }

      return "light";
    });

    useEffect(() => {
      document.body.classList.toggle(
        "dark",
        theme === "dark"
      );

      localStorage.setItem("theme", theme);
    }, [theme]);

    const handleToggle = () => {
      setTheme((prevTheme) =>
        prevTheme === "dark" ? "light" : "dark"
      );
  };

  return (
    <button
      id="themeToggle"
      onClick={handleToggle}
      aria-label="Toggle dark mode"
      suppressHydrationWarning
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle