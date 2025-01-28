import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

const NavBar = () => {
  // Estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Obtener la ubicación actual
  const location = useLocation();

  // Lista de elementos del menú
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "VIDEOS", path: "/videos" },
    { name: "MUSIC", path: "/music" },
    { name: "PRESS-PACK", path: "/press-pack" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-customViolet p-2 flex items-center justify-between">
      {/* Logo alineado a la derecha */}
      <div className="flex-none">
        <img src="/logo-bits.png" 
        alt="Logo" 
        className="h-12 lg:h-20" />
      </div>

      {/* Menu para dispositivos pequeños */}
      <div className="lg:hidden">
        {/* Icono de menú hamburguesa */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="">
          <HiMenu size={40} />
        </button>
      </div>

      {/* Menú en dispositivos grandes */}
      <div className="hidden lg:flex-1 lg:flex justify-center">
        <ul className="flex space-x-6 ">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className={`text-customBlack font-extrabold hover:text-yellow-50 lg:text-3xl ${
                  location.pathname === link.path
                  //style underline
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
        <div className="lg:hidden absolute top-16 left-0 w-full bg-customViolet/80 p-8">
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="text-customBlack  font-extrabold text-xl hover:text-yellow-100"
                  onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic
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
