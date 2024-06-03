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
    <div
      id="formulastudent-section"
      className=" relative py-8 md:py-20 bg-white"
    >
      <Container>
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-20">
            <div className="">
              {aboutUs && (
                <div className="my-6">
                  <Title size="big" color="black">
                    ZAWODY FORMULA STUDENT
                  </Title>
                </div>
              )}
              {!aboutUs && (
                <Title size="big" color="black">
                  ZAWODY FORMULA STUDENT
                </Title>
              )}
              <div className={`${aboutUs ? "" : "my-2 md:my-6"}`}>
                <Text color="gray">
                  Zawody Formuły Student sprawdzają nie tylko osiągi bolidu, ale
                  również wiedzę inżynierską oraz umiejętności zarządzania.
                  Uczestnicy podzieleni są na klasy w zależności od rodzaju
                  bolidu — elektryczną (EV) lub spalinową (CV). Na niektórych
                  edycjach istnieje też możliwość startowania w opcjonalnej
                  kategorii autonomicznej (DV). Rywalizacja odbywa się na
                  przestrzeni kilku punktowanych konkurencji, które dzielą się
                  na statyczne i dynamiczne. Zespół z największą ilością punktów
                  na tysiąc możliwych, zostaje ogłoszony zwycięzcą swojej klasy.
                  Sposób ich przyznawania różni się w niewielkim stopniu
                  pomiędzy edycjami.
                </Text>
              </div>
              {!aboutUs && (
                <SecondaryButton
                  to="/about#formulastudent-section"
                  buttonText="Dowiedz się więcej"
                />
              )}
            </div>
            <div className=" relative h-[22rem] lg:h-auto">
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
