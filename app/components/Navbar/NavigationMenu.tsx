'use client'

import NavItem from './NavItem';

const NavigationMenu = () => {
  return (
    <nav className='nav-responsive ml-16'>
      <ul className="flex space-x-4 h-full">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/bolid">Bolid</NavItem>
        <NavItem href="/team">Zespół</NavItem>
        <NavItem href="/about">O nas</NavItem>
        <NavItem href="/partners">Partnerzy</NavItem>
        <NavItem href="/news">Aktualności</NavItem>
        <NavItem href="/contact">Kontakt</NavItem>
      </ul>
    </nav>
  );
}

export default NavigationMenu;