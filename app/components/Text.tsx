'use client';

interface TextProps {
  children: React.ReactNode;
  small?: boolean;
  medium?: boolean;
  wide?: boolean;
  bold?: boolean;
  center?: boolean;
  noblock?: boolean;
  color?: 'white' | 'black' | 'red' | 'gray';
}

const Text: React.FC<TextProps> = ({ children, small, medium, wide, bold, center, noblock, color = 'white' }) => {
  const colorClass = () => {
    switch (color) {
      case 'black':
        return 'text-black';
      case 'red':
        return 'text-customRed';
      case 'gray':
        return 'text-gray-700';
      default:
        return 'text-white';
    }
  };

  // Określanie klasy rozmiaru tekstu
  const sizeClass = () => {
    if (small) return 'text-xl';
    if (medium) return 'text-3xl';
    return '';
  };

  return (
    <h1 className={`
      text-opacity-70
      font-openSans tracking-tighter
      ${colorClass()}
      ${sizeClass()}
      ${center ? 'justify-center' : 'text-justify'}
      ${wide ? '' : ''}
      ${bold ? 'font-bold' : 'font-normal'}
    `}>
      {children}
    </h1>
  );
};
// ??? leading-4 wide
export default Text;