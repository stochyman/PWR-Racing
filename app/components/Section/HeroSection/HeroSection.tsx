"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Container from "../../Container";
import Text from "../../Text";
import BackgroundVideo from "./BackgroundVideo";
import Title from "../../Title";
import ClientOnly from "../../ClientOnly";
import { motion } from "framer-motion";

const FirstSection = () => {
  const handleScroll = () => {
    const element = document.getElementById("bolid");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const imageVariants = {
    hidden: {
      scale: 0,
      y: -100,
      opacity: 1,
    },
    visible: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <ClientOnly>
      <div className="relative md:h-screen">
        <BackgroundVideo />
        <Container>
          <div className="pt-[100px] lg:pt-0 relative z-10 grid items-center lg:grid-cols-2 gap-8 lg:gap-24">
            <div className="">
              <Title size="subtitle" color="red">
                POLITECHNIKA WROCŁAWSKA
              </Title>
              <Title>PWR RACING TEAM</Title>
              <div className="my-2 md:my-6">
                <Text color="white">
                  W każdym sezonie tworzymy nowy bolid wyścigowy. Na swoim
                  koncie mamy aż dwanaście niepowtarzalnych modeli bolidów
                  spalinowych, z czego każdy kolejny jest w stanie z łatwością
                  pokonać poprzedni. W zeszłym sezonie powstał pierwszy w
                  historii Zespołu bolid elektryczny z systemami jazdy
                  autonomicznej – RT12e. Aktualnie zajmujemy się budową naszej
                  czternastej konstrukcji.
                </Text>
              </div>
              <Text color="red" opacity1 wide bold small>
                WE TAKE IT TO THE NEXT LEVEL
              </Text>
              <button
                onClick={handleScroll}
                className="flex items-center py-2 text-white rounded hover:pl-8 transition-all duration-300 group"
              >
                <span>Dowiedz się więcej</span>
                <FaArrowRight className="ml-2 transition-all duration-300 group-hover:text-customRed" />
              </button>
            </div>
            <motion.div
              className="flex justify-center mb-8 sm:mb-0 items-center"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
            >
              <Image
                src="/images/bolid_main.png"
                alt="bolid"
                layout="intrinsic" // Obraz zachowa oryginalny aspekt przy ustalonej szerokości
                width={700}
                height={551}
              />
            </motion.div>
          </div>
        </Container>
      </div>
    </ClientOnly>
  );
};

export default FirstSection;
