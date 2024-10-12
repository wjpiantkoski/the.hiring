"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
import useTheme from "@/app/_hooks/use-theme";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Icon className="w-6 h-6" />
    </Button>
  );
}
