'use client';

import Image from "next/image";
import Container from '../../Container';
import Text from "../../Text";
import Title from "../../Title";

const FSSection = () => {
  return (
    <div className="">
      <Container>
        <div className="grid grid-cols-2 gap-20 py-20 px-32">
          <div className="">
            <Title size="big" color="black">ZAWODY FORMULA STUDENT</Title>
            <div className=" my-6">
              <Text color="gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere, velit vitae lacinia tincidunt, tellus enim faucibus dolor, non sodales ante dolor nec est. In pretium semper justo nec dignissim. Curabitur aliquam nec sapien vel elementum. Morbi at risus non purus faucibus blandit. Quisque venenatis eleifend molestie. Morbi porttitor vitae metus sed tristique. Ut ultrices tellus massa, at lacinia orci ullamcorper eget. Nunc eu nibh porttitor, dapibus quam et, aliquet felis. Quisque venenatis eleifend molestie. Morbi porttitor vitae metus sed tristique. Ut ultrices tellus massa, at lacinia orci ullamcorper eget. Nunc eu nibh porttitor, dapibus quam et, aliquet felis.</Text>
            </div>
            <button className="
              items-center
              relative
              flex
              pr-12
              p-3
              pl-0
              rounded
              transition-all
              duration-300
              group">
              <span className="transition-colors duration-300 relative z-10">
                Dowiedz się więcej
                <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-customRed group-hover:w-full transition-all duration-300 ease-in-out"></div>
              </span>
              <svg
                className="absolute right-0 bottom-1 transition-all duration-300 ease-in-out rotate-0 group-hover:rotate-90"
                width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17.2056" cy="17.2056" r="16.7056" stroke="#353535" className="group-hover:stroke-customRed group-hover:stroke-[2px]"/>
                <path d="M15.7715 14.3379L19.356 17.9224L15.7715 21.5069" stroke="#353535" className="group-hover:stroke-customRed group-hover:stroke-[2px]"/>
              </svg>
            </button>
          </div>
          <div className=" relative ">
              <Image
                className=""
                src="/images/bolidFS.jpeg"
                alt="bolid"
                layout="fill"
                objectFit="cover"
                objectPosition="70% center"
              />
            </div>
        </div>
      </Container>
    </div>
  );
};

export default FSSection;