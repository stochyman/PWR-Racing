'use client';

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

interface NavItemProps {
  to: string; // Zmieniamy `href` na `to` aby pasowało do API `react-scroll`
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Funkcja do sprawdzania, czy strona została przewinięta
  const checkScroll = () => {
    // Ustawia stan na true, jeśli strona jest przewinięta (scrollTop > 0)
    setIsScrolled(window.pageYOffset > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    // Czyszczenie nasłuchiwacza
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <li className="flex items-center h-full relative">
      {/* Używamy `Link` zamiast `<a>` i dodajemy odpowiednie propsy */}
      <Link
        to={to}
        smooth={true}
        duration={500}
        className={`text-white text-lg transition duration-300 hover:text-customRed h-full flex items-center px-3 group ${isScrolled ? '' : 'hover:no-underline'}`}
        activeClass="active"
      >
        <p className="whitespace-nowrap">
          {children}
        </p>
        {isScrolled && (
          <span className=" h-[3px] bg-customRed scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left block absolute bottom-0 left-0 right-0"></span>
        )}
      </Link>
    </li>
  );
};

export default NavItem;
