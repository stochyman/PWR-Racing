'use client';

import React, { useState, useEffect } from 'react';
import Logo from "./Logo";
import UserMenu from "./UserMenu/UserMenu";
import NavigationMenu from "./NavigationMenu";

const Navbar = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    // Funkcja do sprawdzenia, czy użytkownik jest na samej górze strony
    const handleScroll = () => {
      const position = window.pageYOffset;
      setAtTop(position === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full duration-500 transition-all z-20 ${!atTop ? 'bg-black' : ''}`}>
      <div className="mx-auto
        xl:px-20
        md:px-10
        sm:px-2
        px-4 ">
        <div className="
          flex
          flex-row
          items-center
          justify-between
          gap-3
          md:gap-0
          ">
          <div className="flex">
            <Logo width={atTop ? 230 : 200} height={180}/>
            <NavigationMenu/>
          </div>
          <UserMenu/>
        </div>
      </div>
    </header>
  );
}

export default Navbar;