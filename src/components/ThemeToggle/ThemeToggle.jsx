import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="theme-toggle__placeholder" />;

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Cambiar tema"
    >
      {theme === "dark" ? (
        <Sun size={18} color="var(--text-primary)" />
      ) : (
        <Moon size={18} color="var(--text-primary)" />
      )}
    </button>
  );
};

export default ThemeToggle;
