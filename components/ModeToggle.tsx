"use client";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div className=" text-bg-gradient-1  dark:text-[hsl(120,50%,50%)]">
      <p onClick={() => setTheme("dark")}>Switch to <strong>Dark</strong> Mode</p>
      <p onClick={() => setTheme("light")}>Switch to  <strong>Light</strong> Mode</p>
    </div>
  );
}
