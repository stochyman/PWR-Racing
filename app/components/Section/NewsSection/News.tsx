'use client';

import Image from "next/image";
import Title from "../../Title";
import Text from "../../Text";

type NewsProps = {
  department: string;
};

const News: React.FC<NewsProps> = ({ department }) => {
  const imagePath = `/images/news/news${department}.png`;

  return (
    <div className="relative rounded-3xl border-0 m-0 cursor-pointer group overflow-hidden">
        <Image
        src={imagePath}
        alt={department}
        layout="intrinsic"
        height={358}
        width={640}
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out"></div>
      <div className="absolute hidden opacity-0 hover:opacity-100 group-hover:flex inset-0 gap-8 flex-col justify-center items-center text-white transition-all duration-700 ease-in-out">
        <Title size="medium">PREMIERA RT13E</Title>
        <div className="border-t border-b border-customRed py-4">
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
        </div>
        <Title size="small">WYDZARZENIA</Title>
      </div>
    </div>
  );
};

export default News;
