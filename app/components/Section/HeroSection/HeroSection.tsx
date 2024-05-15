"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Container from "../../Container";
import Text from "../../Text";
import BackgroundVideo from "./BackgroundVideo";
import Title from "../../Title";
import ClientOnly from "../../ClientOnly";

const FirstSection = () => {
  return (
    <ClientOnly>
      <div className="relative h-screen">
        <BackgroundVideo />
        <Container>
          <div className="relative z-10 grid lg:grid-cols-2 lg:gap-24">
            <div className=" pt-[100px]">
              <Title size="subtitle" color="red">
                POLITECHNIKA WROCŁAWSKA
              </Title>
              <Title>PWR RACING TEAM</Title>
              <div className=" my-6">
                <Text>
                  W każdym sezonie tworzymy nowy bolid wyścigowy. Na swoim
                  koncie mamy aż dwanaście niepowtarzalnych modeli bolidów
                  spalinowych, z czego każdy kolejny jest w stanie z łatwością
                  pokonać poprzedni. W zeszłym sezonie powstał pierwszy w
                  historii Zespołu bolid elektryczny z systemami jazdy
                  autonomicznej – RT12e. Aktualnie zajmujemy się budową naszej
                  czternastej konstrukcji.
                </Text>
              </div>
              <p className="text-xl mb-4 font-bold text-customRed">
                WE TAKE IT TO THE NEXT LEVEL
              </p>
              <button className="flex items-center py-2 text-white rounded hover:pl-8 transition-all duration-300 group">
                <span>Dowiedz się więcej</span>
                <FaArrowRight className="ml-2 transition-all duration-300 group-hover:text-customRed" />
              </button>
            </div>
            <div className="flex justify-center my-2 sm:my-0 items-center">
              <Image
                src="/images/bolid_main.png"
                alt="bolid"
                layout="intrinsic" // Obraz zachowa oryginalny aspekt przy ustalonej szerokości
                width={700}
                height={551}
              />
            </div>
          </div>
        </Container>
      </div>
    </ClientOnly>
  );
};

export default FirstSection;
