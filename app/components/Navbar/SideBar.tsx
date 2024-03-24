'use client';

import React, { useState, useEffect } from 'react';
import Button from "../Button";
import { FaCamera } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';

const SideBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ustaw stan na true/false w zależności od tego, czy strona została przescrollowana
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Usuń nasłuchiwanie, aby uniknąć wycieków pamięci
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
};

  return (
    <div className={`${isScrolled ? 'gap-4 bottom-1/2' : 'gap-48 bottom-1/3'} fixed flex flex-col right-0 z-20 transform duration-700`}>
      <div className={`${isScrolled ? '' : '-rotate-90 translate-x-1/2'} duration-300`}>
        <div className={`w-56 transition-transform duration-1000 ease-in-out ${isScrolled ? 'translate-x-3/4 hover:translate-x-1/4' : '-translate-y-1/3'}`}>
          <Button icon={FaCamera} label="Media" onClick={() => scrollToSection('section-contact')}  />
        </div>
      </div>
      <div className={`${isScrolled ? '' : '-rotate-90 translate-x-1/2'} duration-300`}>
        <div className={`w-56 transition-transform duration-1000 ease-in-out ${isScrolled ? 'translate-x-3/4 hover:translate-x-1/4' : '-translate-y-1/3'}`}>
          <Button icon={MdPerson} outline label="Rekrutacja" onClick={() => scrollToSection('joinus')}  />
        </div>
      </div>
    </div>
  );

}

export default SideBar;
{/* <div className="fixed bottom-1/2 flex flex-col gap-4 right-0 z-20 transform">
      <div className={`w-56 transition-transform duration-300 ease-in-out ${isScrolled ? 'translate-x-3/4' : 'translate-x-1/4'} hover:translate-x-1/4`}>
        <Button icon={FaCamera} label="Media" onClick={() => {}} />
      </div>
      <div className={`w-56 transition-transform duration-300 ease-in-out ${isScrolled ? 'translate-x-3/4' : 'translate-x-1/4'} hover:translate-x-1/4`}>
        <Button icon={MdPerson} outline label="Rekrutacja" onClick={() => {}} />
      </div>
    </div> */}