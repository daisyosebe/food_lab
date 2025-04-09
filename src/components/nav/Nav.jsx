// src/components/nav/Nav.jsx
import { useState } from "react";

const tabs = [
  { label: "Recipes", href: "/recipes" },
  { label: "Favorites", href: "/favorites" },
  { label: "Pantry", href: "/pantry" },
  { label: "Cooked", href: "/cooked" },
  { label: "Cart", href: "/cart" },
];

const Nav = () => {
  return (
    <div className="absolute right-0 top-1/2  -translate-y-1/2 z-10 flex flex-col items-end space-y-2 ">
      {tabs.map((tab, index) => (
        <a
          key={index}
          href={tab.href}
          className="group relative w-12 h-10 bg-orange-400 rounded-l-full shadow-md flex items-center justify-center transition-all duration-300 hover:w-32"
        >
          <span className="text-white font-semibold z-10 group-hover:translate-x-2 transition-transform duration-300">

            🍽️
          </span>
          <span className="absolute left-12 opacity-0 group-hover:opacity-100 text-sm font-medium text-gray-700 whitespace-nowrap transition-opacity duration-300">
            {tab.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Nav;
