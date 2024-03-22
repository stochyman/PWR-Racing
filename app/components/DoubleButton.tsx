'use client';

interface IconLinkProps {
  firstButtonText: string;
  secondButtonText: string;
}

const DoubleButton: React.FC<IconLinkProps> = ({ firstButtonText, secondButtonText }) => {
  return (
    <div onClick={() => {}}
    className="
      flex-row flex
      items-center
      justify-between
      overflow-hidden
      text-sm
      font-semibold
      rounded-full
      transition
      cursor-pointer
    bg-neutral-100
      ">
      {/* bg-neutral-100 */}
      <div className="
        w-full
        transition
        duration-300
        hover:border-customRed
        hover:bg-customRed
        hover:text-white">
        {/* hover:border-customRed
        hover:bg-customRed
        hover:text-white */}
        <div className="
          text-sm w-full h-full my-2
          font-semibold
          px-6">
          <p className="whitespace-nowrap">{firstButtonText}</p>
        </div>
      </div>
      <div className="
        w-full
        transition
        duration-300
        hover:border-customRed
        hover:bg-customRed
        hover:text-white">
        {/* hover:border-customRed
        hover:bg-customRed
        hover:text-white */}
        {/* border-black */}
        <div className="
          border-l-[1px] border-black
          text-sm w-full h-full my-2
          font-semibold
          px-5">
          <p className="whitespace-nowrap">{secondButtonText}</p>
        </div>
      </div>
  </div>
  );
};

export default DoubleButton;
