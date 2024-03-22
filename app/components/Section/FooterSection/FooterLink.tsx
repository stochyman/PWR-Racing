'use client';

type TooterLinkProps = {
  children: string;
};

const FooterLink: React.FC<TooterLinkProps> = ({
  children
}) => {
  return (
    <li className="text-opacity-70 cursor-pointer py-1 whitespace-nowrap duration-300 hover:text-customRed">
      {children}
    </li>
  );
};

export default FooterLink;