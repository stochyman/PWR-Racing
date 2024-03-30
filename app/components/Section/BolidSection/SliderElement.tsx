'use client';

import Title from "../../Title";

export interface SliderElementProps {
  date: number;
  bolid: string;
  onClick: (bolidName: string) => void;
  currentBolid: string;
}

const SliderElement: React.FC<SliderElementProps> = ({ date, bolid, onClick, currentBolid }) => {
  const isActive = currentBolid === bolid;
  const handleClick = () => onClick(bolid);

  return (
    <div className="relative flex flex-col items-center group cursor-pointer" onClick={handleClick}>
      <div className={`${isActive ? 'bg-customRed' : 'bg-neutral-300'} h-6 w-6 rounded-full z-10 group-hover:bg-customRed duration-300 ease-in-out`}></div>
      <div className=" mt-2 flex flex-col text-center select-none">
        <Title size="small" color="red">{date}</Title>
        <Title size="medium" color="black">{bolid}</Title>
      </div>
    </div>
  );
};

export default SliderElement;