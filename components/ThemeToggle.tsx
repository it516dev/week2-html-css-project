"use client";

export default function ThemeToggle() {

  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }
  }

  const handleToggle = () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    localStorage.setItem(
      "theme",
      isDark ? "dark" : "light"
    );

    const btn = document.getElementById("themeToggle");
    if (btn) {
      btn.innerText = isDark ? "🌙 Dark" : "☀️ Light";
    }
  };

  return (
    <button
      id="themeToggle"
      onClick={handleToggle}
      aria-label="Toggle dark mode"
    >
      ☀️ Light
    </button>
  );
}