'use client';

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import { ClosestSectionContext } from "./ClosestSectionContext";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const closestSectionId = useContext(ClosestSectionContext); // Używamy Contextu do przechowywania i udostępniania ID najbliższej sekcji

  const checkScroll = () => {
    setIsScrolled(window.pageYOffset > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  // Klasy CSS dla Link, zmieniają się w zależności od tego, czy 'to' jest równy 'closestSectionId'
  const linkClassName = `text-lg transition duration-300 h-full flex items-center px-3 group-hover:text-customRed ${to === closestSectionId ? 'text-customRed' : 'text-white'}`;
  console.log(to)

  return (
    <li className="cursor-pointer flex items-center h-full relative group">
      <Link
        to={to}
        smooth={true}
        duration={500}
        className={linkClassName}
        activeClass="active"
      >
        <p className="whitespace-nowrap">
          {children}
        </p>
        {isScrolled && (
          <span className={` ${to === closestSectionId ? 'scale-x-100' : ''} h-[3px] bg-customRed scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left block absolute bottom-0 left-0 right-0`}></span>
        )}
      </Link>
    </li>
  );
};

export default NavItem;
