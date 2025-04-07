// src/components/Nav.jsx
import { NavLink } from "react-router-dom";

const tabs = [
  { name: "Home", path: "/" },
  { name: "Recipes", path: "/recipes" },
  { name: "Favorites", path: "/favorites" },
  { name: "Cooked", path: "/cooked" },
  { name: "Cart", path: "/cart" },
  { name: "Pantry", path: "/pantry" }
];

const Nav = () => {
  return (
    <div className="w-48 bg-white shadow-md h-screen p-4 flex flex-col gap-4 border-r">
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.path}
          className={({ isActive }) =>
            `relative px-4 py-2 text-lg font-medium transition-all duration-300 rounded-r-full overflow-hidden 
            before:absolute before:left-0 before:top-0 before:h-full before:w-full 
            before:transition-transform before:duration-300 before:bg-blue-100
            before:z-[-1] hover:before:translate-x-0 
            ${isActive ? "text-blue-700 before:translate-x-0" : "text-gray-700 before:translate-x-[-100%]"}`
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Nav;
