'use client'

import NavItem from './NavItem';


const NavigationMenu = () => {
  return (
    <nav className='nav-responsive ml-16'>
      <ul className="flex space-x-4 h-full">
        <NavItem to="/">Home</NavItem>
        <NavItem to="team/RT13e">Bolid</NavItem>
        <NavItem to="section-team">Zespół</NavItem>
        <NavItem to="section-history">O nas</NavItem>
        <NavItem to="section-partners">Partnerzy</NavItem>
        <NavItem to="section-news">Aktualności</NavItem>
        <NavItem to="section-contact">Kontakt</NavItem>
      </ul>
    </nav>
  );
}

export default NavigationMenu;