import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "VIDEOS", path: "/videos" },
    { name: "PHOTOS", path: "/photos" },
    { name: "MUSIC", path: "/music" },
    { name: "CONTACT", path: "/contact" },
    { name: "PRESS-PACK/RIDER", path: "/press-pack" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-customViolet p-2 md:p-8 flex items-center justify-between">
    {/* Logo */}
    <div className="flex-none">
      <img src="/logo-bits.png" alt="Logo" className="h-12 lg:h-12 xl:h-20" />
    </div>
  
    {/* Menú para dispositivos pequeños */}
    <div className="lg:hidden">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <HiMenu size={40} />
      </button>
    </div>
  
    {/* Menú en dispositivos grandes */}
    <div className="hidden lg:flex ml-auto"> {/* Aquí se mueve a la derecha */}
      <ul className="flex space-x-14">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className={` font-extrabold hover:text-yellow-50 lg:text-2xl ${
                location.pathname === link.path
                  ? "underline underline-offset-8 decoration-customBlack"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  
    {/* Menú desplegable para dispositivos pequeños */}
    {isMenuOpen && (
      <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-customViolet/90 p-8 flex flex-col items-center">
        {/* Botón de cierre */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 "
        >
          <HiX size={40} />
        </button>
  
        <ul className="flex flex-col items-center space-y-6 mt-12">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className=" font-extrabold text-xl hover:text-yellow-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  </nav>
  
  );
};

export default NavBar;
