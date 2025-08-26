"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check system preference and localStorage
    const userPref = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const savedTheme = localStorage.getItem("theme") ?? userPref;
    setTheme(savedTheme);
    document.documentElement.setAttribute("saved-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("saved-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-gray-800/20 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400 hover:text-white"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="m12 1 0 2" />
          <path d="m12 21 0 2" />
          <path d="m4.22 4.22 1.42 1.42" />
          <path d="m18.36 18.36 1.42 1.42" />
          <path d="m1 12 2 0" />
          <path d="m21 12 2 0" />
          <path d="m4.22 19.78 1.42-1.42" />
          <path d="m18.36 5.64 1.42-1.42" />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-600 hover:text-gray-800"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
}