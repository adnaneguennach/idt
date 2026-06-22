"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 shrink-0" />; // Placeholder to avoid layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-[8px] hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center justify-center w-9 h-9 shrink-0 cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-[18px] h-[18px] text-text-main" />
      ) : (
        <Moon className="w-[18px] h-[18px] text-text-main" />
      )}
    </button>
  );
}
