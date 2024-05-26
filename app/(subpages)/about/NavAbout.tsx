"use client";

import Container from "@/app/components/Container";
import Text from "@/app/components/Text";
import Image from "next/image";

const NavAbout = () => {
  return (
    <div className="pt-[40rem] bg-black">
      <div className=" relative bg-white">
        <Container>
          <div className="w-full">
            <ul className="flex justify-center md:justify-start my-4 mb-8">
              <NavAboutItem scrollToId="garage-section">Garaż</NavAboutItem>
              <NavAboutItem scrollToId="history-section">
                Historia Zespołu
              </NavAboutItem>
              <NavAboutItem scrollToId="department-section">
                Nasze działy
              </NavAboutItem>
              <NavAboutItem scrollToId="formulastudent-section">
                Formula Student
              </NavAboutItem>
            </ul>
            <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-20 mt-0 md:mt-12">
              <div className=" relative md:w-2/5 h-[20rem] md:h-auto">
                <Image
                  className=""
                  src="/images/joinus/photo1.png"
                  alt="bolid"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center 20%"
                />
              </div>
              <div className="md:w-3/5 flex flex-col gap-8">
                <Text color="black" bold>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  gravida placerat purus eu congue. Donec a nulla id augue
                  condimentum gravida. Nunc sollicitudin vulputate mi vitae
                  blandit. Integer iaculis laoreet pulvinar.
                </Text>
                <Text color="black">
                  Nunc id porttitor velit. Aenean lectus elit, porta ut feugiat
                  id, venenatis et dolor. Etiam aliquam at felis et consectetur.
                  Cras venenatis sapien nunc, et malesuada orci pellentesque
                  non. Vivamus congue metus eu lacus mollis, ut mollis ligula
                  volutpat.
                </Text>
                <Text color="black">
                  Pellentesque sollicitudin at justo vel consectetur.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Cras finibus nibh dui, eu
                  pellentesque odio dictum a. Quisque scelerisque, lorem quis
                  venenatis ultrices, tortor lectus aliquam lectus, sed aliquam
                  lorem sem sit amet metus. In efficitur metus eget justo
                  imperdiet pretium. Cras bibendum sit amet diam quis venenatis.
                  Quisque vulputate arcu velit, et hendrerit est dignissim
                  luctus. Cras a luctus leo.
                </Text>
                <Text color="black">
                  Nullam tempus, orci sed ornare vulputate, nibh orci hendrerit
                  mauris, id laoreet lorem mi in dui. Sed feugiat elit ac luctus
                  imperdiet. Vestibulum nisi dolor, molestie et molestie non,
                  fringilla in tellus. Duis sit amet malesuada arcu. Suspendisse
                  id finibus turpis. Sed placerat feugiat nibh, fringilla
                  suscipit sem rutrum vel. Proin felis nisl, porttitor eget
                  sapien ac, accumsan sodales nisi.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavAbout;

interface NavAboutItemProps {
  children: React.ReactNode;
  scrollToId: string;
}

const NavAboutItem: React.FC<NavAboutItemProps> = ({
  children,
  scrollToId,
}) => {
  const handleScroll = () => {
    const element = document.getElementById(scrollToId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li
      className="first:pl-0 p-2 md:p-8 min-w-fit hover:text-customRed cursor-pointer duration-300 ease-in-out"
      onClick={handleScroll}
    >
      <Text bold>{children}</Text>
    </li>
  );
};
