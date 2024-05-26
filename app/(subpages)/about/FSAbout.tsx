import Container from "@/app/components/Container";
import Title from "@/app/components/Title";
import Image from "next/image";

const FSAbout: React.FC = () => {
  return (
    <Container>
      <div className="w-full">
        <div className="">
          <Title wrap size="medium" color="black">
            CZTERY KATEGORIE DYNAMICZNE
          </Title>
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-6 my-6">
            <div className=" relative h-60 rounded-md overflow-hidden">
              <Image
                src="/images/FS/acceleration.png"
                alt="acceleration"
                fill
              />
            </div>
            <div className=" relative h-60 rounded-md overflow-hidden">
              <Image src="/images/FS/skipad.png" alt="skidpad" fill />
            </div>
            <div className=" relative h-60 rounded-md overflow-hidden">
              <Image src="/images/FS/autocross.png" alt="autocross" fill />
            </div>
            <div className=" relative h-60 rounded-md overflow-hidden">
              <Image src="/images/FS/endurance.png" alt="endurance" fill />
            </div>
          </div>
        </div>
        <div className=" my-8 md:my-12">
          <Title wrap size="medium" color="black">
            TRZY KATEGORIE STATYCZNE
          </Title>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            <div className=" relative h-80 rounded-md overflow-hidden">
              <Image src="/images/FS/cost.png" alt="skidpad" fill />
            </div>
            <div className=" relative h-80 rounded-md overflow-hidden">
              <Image src="/images/FS/engineering.png" alt="autocross" fill />
            </div>
            <div className=" relative h-80 rounded-md overflow-hidden">
              <Image src="/images/FS/business.png" alt="endurance" fill />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FSAbout;
