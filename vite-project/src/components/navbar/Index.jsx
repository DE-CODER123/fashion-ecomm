import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { RiCloseLine, RiMenuLine, RiSearch2Line, RiShoppingCart2Line } from "@remixicon/react";

const navLinks = [
  {
    to: "/",
    label: "Home",
    activeClass: "border border-red-500 text-white rounded-lg p-2",
    inactiveClass: "text-gray-500",
    mobileActiveClass: "border border-red-500 text-white rounded-lg p-2 mx-auto max-w-full",
    mobileInactiveClass: "mx-auto max-w-full text-gray-500",
  },
  {
    to: "/shop",
    label: "Shop",
    activeClass: "border border-amber-500 text-white rounded-lg p-2",
    inactiveClass: "text-gray-500",
    mobileActiveClass: "border border-amber-500 text-white rounded-lg p-2 mx-auto max-w-full",
    mobileInactiveClass: "mx-auto max-w-full text-gray-500",
  },
  {
    to: "/contact",
    label: "Contact",
    activeClass: "border border-blue-500 text-white rounded-lg p-2",
    inactiveClass: "text-gray-500",
    mobileActiveClass: "border border-blue-500 text-white rounded-lg p-2 mx-auto max-w-full",
    mobileInactiveClass: "mx-auto max-w-full text-gray-500",
  },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="text-2xl justify-between sticky top-0 flex items-center gap-4 pb-4 px-4 bg-gray-700 z-40">
      <h1 className="text-4xl font-bold text-white">Logo</h1>
      <div className="flex items-center gap-4">
        <ul className="hidden md:flex gap-4 justify-center items-center md:px-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? link.activeClass : link.inactiveClass
              }
            >
              {link.label}
            </NavLink>
          ))}
        </ul>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {!open ? (
            <RiMenuLine className="text-3xl text-white md:hidden" />
          ) : (
            <RiCloseLine className="text-3xl text-white md:hidden" />
          )}
        </button>
        <Link to="/cart"><RiShoppingCart2Line className="text-3xl text-white" /></Link>
        <RiSearch2Line className="text-3xl text-white" />
        {open && (
          <ul className="flex flex-col gap-4 absolute top-full left-0 w-full bg-gray-800 p-4 md:hidden">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive ? link.mobileActiveClass : link.mobileInactiveClass
                }
              >
                {link.label}
              </NavLink>
            ))} 
          </ul>
        )}
      </div>
    </nav>
  );
}
