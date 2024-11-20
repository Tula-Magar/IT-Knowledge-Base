import React, { useState, useEffect } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <button onClick={toggleTheme}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
