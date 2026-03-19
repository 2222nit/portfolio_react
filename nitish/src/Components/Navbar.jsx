import React, { useState } from "react";
import { CiMobile1, CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Resume", to: "resume" },
    { name: "Contact", to : "contact"}
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
                    bg-black/30 backdrop-blur-md 
                    text-white">

      <div className="flex justify-between items-center px-6 md:px-16 py-4">

        {/* LEFT MENU */}
        <ul className="hidden md:flex gap-8 text-sm tracking-wide">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="text-blue-400"
                className="relative group cursor-pointer transition duration-300"
              >
                {item.name}

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-2 text-sm">
          <CiMobile1 className="text-lg" />
          <span className="hover:text-blue-400 transition">
            776-565-3021
          </span>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden text-2xl cursor-pointer">
          {open ? (
            <IoMdClose onClick={() => setOpen(false)} />
          ) : (
            <CiMenuBurger onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-lg transition-all duration-500 ease-in-out
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-lg">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setOpen(false)}
                className="cursor-pointer hover:text-blue-400 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center pb-6 text-sm">
          <CiMobile1 className="mr-2" />
          776-565-3021
        </div>
      </div>
    </nav>
  );
}