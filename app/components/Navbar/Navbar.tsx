'use client';

import React, { useState, useEffect } from 'react';
import Logo from "./Logo";
import UserMenu from "./UserMenu/UserMenu";
import NavigationMenu from "./NavigationMenu";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [atTop, setAtTop] = useState(true);
  const [isHome, setIsHome] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideNavbar, setHideNavbar] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsHome(pathname === '/');
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setAtTop(position === 0);
      setHideNavbar(position > lastScrollY && position > 100);
      setLastScrollY(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed w-full duration-500 transition-all z-50 ${!isHome || !atTop ? 'bg-black' : 'bg-transparent'} ${hideNavbar ? 'translate-y-[-100%]' : 'translate-y-0'}`}>
      <div className="mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
          <div className="flex transition duration-1000">
            <div className={`${atTop ? 'w-[230px]' : 'w-[200px]'} duration-300`}>
              <Logo width={230} height={180}/>
            </div>
            <NavigationMenu/>
          </div>
          <UserMenu/>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
