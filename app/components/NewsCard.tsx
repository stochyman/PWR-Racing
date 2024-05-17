import Image from "next/image";
import Title from "./Title";
import Text from "./Text";

type NewsCardProps = {
  title: string;
  short_description: string;
  length_time?: number;
  logo: string;
  main_image: string;
};
const NewsCard: React.FC<NewsCardProps> = ({
  title,
  short_description,
  length_time,
  logo,
  main_image,
}) => {
  return (
    <div className=" group h-[34rem] rounded-md flex flex-col overflow-hidden cursor-pointer">
      <div className="bg-red-500 h-full relative overflow-hidden">
        <Image
          src={main_image}
          alt={"test"}
          fill
          style={{ objectFit: "cover" }}
          className="group-hover:scale-105 duration-500 ease-in-out"
        />
      </div>
      <div className=" bg-white w-full px-5 py-4 flex flex-col">
        <Title color="black" size="medium">
          {title}
        </Title>
        <div className="mb-4 mt-2">
          <Text color="black">{short_description}</Text>
        </div>
        <div className="flex justify-between">
          <Image alt="Logo" height={40} width={80} src={logo} />
          <Text color="gray">{length_time} min czytania</Text>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
