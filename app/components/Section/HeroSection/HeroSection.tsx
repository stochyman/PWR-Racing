"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Container from "../../Container";
import Text from "../../Text";
import BackgroundVideo from "./BackgroundVideo";
import Title from "../../Title";
import ClientOnly from "../../ClientOnly";
import { motion } from "framer-motion";

type Locale = "pl" | "en";

interface HeroSectionProps {
  dict: {
    title1: string;
    title2: string;
    description: string;
    subtitle: string;
    button: string;
  };
}
const HeroSection: React.FC<HeroSectionProps> = ({ dict }) => {
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

  if (!dict) return <div>Loading...</div>;

  return (
    <ClientOnly>
      <div className="relative md:h-screen">
        <BackgroundVideo />
        <Container>
          <div className="pt-[100px] lg:pt-0 relative z-10 grid items-center lg:grid-cols-2 gap-8 lg:gap-24">
            <div className="">
              <Title wrap size="subtitle" color="red">
                {dict.title1}
              </Title>
              <Title>{dict.title2}</Title>
              <div className="my-2 md:my-6">
                <Text color="white" main>
                  {dict.description}
                </Text>
              </div>
              <Title wrap color="red" size="small">
                {dict.subtitle}
              </Title>
              <button
                onClick={handleScroll}
                className="hidden md:flex items-center py-2 text-white rounded hover:pl-8 transition-all duration-300 group"
              >
                <span>{dict.button}</span>
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
                layout="intrinsic"
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

export default HeroSection;
