'use client';

import React, { useState, useEffect, ReactNode } from "react";

interface NavItemProps {
  href: string;
  children: ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
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
      <a href={href} className={`text-white text-lg transition duration-300 hover:text-customRed h-full flex items-center px-3 group ${isScrolled ? '' : 'hover:no-underline'}`}>
        <p className="whitespace-nowrap">{children}</p>
        {isScrolled && (
          <span className=" h-[3px] bg-customRed scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left block absolute bottom-0 left-0 right-0"></span>
        )}
      </a>
    </li>
  );
};

export default NavItem;
