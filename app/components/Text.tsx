"use client";
import { useMemo } from "react";

interface TextProps {
  children: React.ReactNode;
  small?: boolean;
  medium?: boolean;
  extrasmall?: boolean;
  wide?: boolean;
  bold?: boolean;
  center?: boolean;
  opacity1?: boolean;
  color?: "white" | "black" | "red" | "gray";
  hoverColor?: "white" | "black" | "red" | "gray";
}

const Text: React.FC<TextProps> = ({
  children,
  small,
  medium,
  extrasmall,
  wide,
  bold,
  center,
  opacity1,
  color,
  hoverColor,
}) => {
  const colorClass = () => {
    switch (color) {
      case "black":
        return "text-black";
      case "red":
        return "text-customRed";
      case "gray":
        return "text-gray-700";
      case "white":
        return "text-white";
      default:
        return "";
    }
  };

  // Określanie klasy rozmiaru tekstu
  const sizeClass = () => {
    if (small) return "text-md md:text-xl";
    if (medium) return "text-xl md:text-3xl";
    if (extrasmall) return "text-xs";
    return "text-xs sm:text-base";
  };

  const hoverColorClass = useMemo(() => {
    if (!hoverColor) return ""; // Jeśli hoverColor nie jest podany, nie dodajemy klasy
    switch (hoverColor) {
      case "black":
        return "group-hover:text-black";
      case "red":
        return "group-hover:text-customRed";
      case "gray":
        return "group-hover:text-gray-500";
      default:
        return "group-hover:text-white";
    }
  }, [hoverColor]);

  return (
    <h1
      className={`
      font-openSans
      duration-300 ease-in-out
      ${hoverColorClass}
      ${colorClass()}
      ${sizeClass()}
      ${opacity1 ? "text-opacity-100" : "text-opacity-70"}
      ${center ? "justify-center" : "text-justify"}
      ${wide ? "" : "tracking-tighter"}
      ${bold ? "font-bold" : "font-normal"}
    `}
    >
      {children}
    </h1>
  );
};
// ??? leading-4 wide
export default Text;
