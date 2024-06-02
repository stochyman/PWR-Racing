"use client";

import NavItem from "./NavItem";

const NavigationMenu = () => {
  return (
    <nav className="nav-responsive ml-16">
      <ul className="flex space-x-4 h-full">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/bolid/RT14e">Bolid</NavItem>
        <NavItem to="/team/RT14e">Zespół</NavItem>
        <NavItem to="/about">O nas</NavItem>
        <NavItem to="/partners">Partnerzy</NavItem>
        <NavItem to="/news">Aktualności</NavItem>
        <NavItem to="/contact">Kontakt</NavItem>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
