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
                <Text color="white" main>
                  PWR Racing Team to Strategiczne Koło Naukowe Politechniki
                  Wrocławskiej, a zarazem najstarszy i najbardziej utytułowany
                  Zespół wyścigowy Formuły Student w Polsce. Od 2009 roku grupa
                  ok. 80 studentów i studentek wrocławskich uczelni co roku
                  konstruuje bolidy i startuje nimi w prestiżowych zawodach
                  inżynierskich odbywających się na całym świecie.
                </Text>
              </div>
              <Title color="red" size="small">
                WE TAKE IT TO THE NEXT LEVEL
              </Title>
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
