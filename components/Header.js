import React from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex items-center justify-between bg-transparent text-white px-6 py-4 h-16 max-w-5xl mx-auto mt-12 ">
      <span></span>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="px-6 py-2 bg-pink-600 text-white rounded-md font-semibold uppercase"
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </header>
  );
};

export default Header;
