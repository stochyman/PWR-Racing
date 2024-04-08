'use client';

import React, { useMemo } from 'react';

export interface TitleProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'big' | 'bigger' | 'subtitle' | 'normal';
  color?: 'white' | 'black' | 'red' | 'gray';
  hoverColor?: 'white' | 'black' | 'red' | 'gray';
  cardHover?: boolean;
}

const Title: React.FC<TitleProps> = ({ children, size = 'normal', color = 'white', hoverColor, cardHover = false }) => {
  const colorClass = useMemo(() => {
    switch (color) {
      case 'black':
        return 'text-black';
      case 'red':
        return 'text-customRed';
      case 'gray':
        return 'text-gray-500';
      default:
        return 'text-white';
    }
  }, [color]);

  const hoverColorClass = useMemo(() => {
    if (!hoverColor) return ''; // Jeśli hoverColor nie jest podany, nie dodajemy klasy
    switch (hoverColor) {
      case 'black':
        return 'group-hover:text-black';
      case 'red':
        return 'group-hover:text-customRed';
      case 'gray':
        return 'group-hover:text-gray-500';
      default:
        return 'group-hover:text-white';
    }
  }, [hoverColor]);

  const sizeClass = useMemo(() => {
    switch (size) {
      case 'small':
        return 'text-xl';
      case 'medium':
        return 'text-2xl';
      case 'big':
        return 'text-3xl';
      case 'bigger':
        return 'text-6xl';
      case 'subtitle':
        return 'text-sm tracking-wider';
      case 'normal':
        return 'text-5xl';
    }
  }, [size]);

  const hoverSizeClass = useMemo(() => {
    if (!cardHover) return ''; // Jeśli cardHover nie jest aktywny, nie dodajemy żadnej klasy
    switch (size) {
      case 'subtitle':
        return 'group-hover:text-lg';
      case 'small':
        return 'group-hover:text-2xl';
      default:
        return '';
    }
  }, [size, cardHover]);

  return (
    <h1 className={` whitespace-nowrap font-akiraExpanded font-extrabold ${colorClass} ${sizeClass} ${hoverSizeClass} leading-tight transition-colors duration-300 ${hoverColorClass}`}>
      {children}
    </h1>
  );
};

export default Title;