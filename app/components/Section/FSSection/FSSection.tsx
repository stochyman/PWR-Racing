"use client";

import Image from "next/image";
import Container from "../../Container";
import Text from "../../Text";
import Title from "../../Title";
import SecondaryButton from "../../SecondaryButton";
import { AiOutlineAccountBook } from "react-icons/ai";

interface FSSectionProps {
  aboutUs?: boolean;
}

const FSSection: React.FC<FSSectionProps> = ({ aboutUs }) => {
  return (
    <div className="py-20">
      <Container>
        <div className="">
          {aboutUs && (
            <div className="my-6">
              <Title wrap color="black">
                FORMULA STUDENT
              </Title>
            </div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
            <div className="">
              {!aboutUs && (
                <Title size="big" color="black">
                  ZAWODY FORMULA STUDENT
                </Title>
              )}
              <div className={`${aboutUs ? "" : "my-6"}`}>
                <Text color="gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur posuere, velit vitae lacinia tincidunt, tellus enim
                  faucibus dolor, non sodales ante dolor nec est. In pretium
                  semper justo nec dignissim. Curabitur aliquam nec sapien vel
                  elementum. Morbi at risus non purus faucibus blandit. Quisque
                  venenatis eleifend molestie. Morbi porttitor vitae metus sed
                  tristique. Ut ultrices tellus massa, at lacinia orci
                  ullamcorper eget. Nunc eu nibh porttitor, dapibus quam et,
                  aliquet felis. Quisque venenatis eleifend molestie. Morbi
                  porttitor vitae metus sed tristique. Ut ultrices tellus massa,
                  at lacinia orci ullamcorper eget. Nunc eu nibh porttitor,
                  dapibus quam et, aliquet felis. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Curabitur posuere, velit vitae
                  lacinia tincidunt, tellus enim faucibus dolor, non sodales
                  ante dolor nec est. In pretium semper justo nec dignissim.
                  Curabitur aliquam nec sapien vel elementum. Morbi at risus non
                  purus faucibus blandit. Quisque venenatis eleifend molestie.
                </Text>
              </div>
              {!aboutUs && <SecondaryButton buttonText="Dowiedz się więcej" />}
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
        </div>
      </Container>
    </div>
  );
};

export default FSSection;
