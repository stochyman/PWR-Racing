"use client";

import { useRouter } from "next/navigation";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  black?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  black,
  icon: Icon,
}) => {
  const router = useRouter();
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition duration-300 ease-in-out
        w-full min-w-fit
        ${black ? "bg-black" : outline ? "bg-white" : "bg-customRed"}
        ${black ? "px-16" : "px-2"}
        ${
          black ? "border-black" : outline ? "border-black" : "border-customRed"
        }
        ${outline ? "text-black" : "text-white"}
        ${small ? "py-1" : "py-2 md:py-3"}
        ${small ? "text-sm" : "text-sm md:text-md"}
        ${small ? " font-light" : "font-semibold"}
        ${small ? " border-[1px]" : " border-2"}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="absolute left-2 top-[6px] md:left-4 md:top-3"
        />
      )}
      {label}
    </button>
  );
};

export default Button;
