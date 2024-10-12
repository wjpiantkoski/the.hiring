"use client";

import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const useTheme = () => {
  const [cookies, setCookie] = useCookies(["theme"]);
  const [theme, setTheme] = useState<string>("light");

  const setAndSaveTheme = (theme: string) => {
    setTheme(theme);
    setCookie("theme", theme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  };

  const toggleTheme = () => {
    setAndSaveTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setAndSaveTheme(cookies.theme);
  }, []);

  return { theme, toggleTheme };
};

export default useTheme;
