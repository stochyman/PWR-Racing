'use client';

import Image from "next/image";
import { FaArrowRight } from 'react-icons/fa';
import Container from '../../Container';
import Text from "../../Text";
import BackgroundVideo from './BackgroundVideo';
import Title from "../../Title";

const FirstSection = () => {
  return (
    <div id="home" className="flex flex-col md:flex-row items-center justify-between h-screen">
      <div className="relative w-full h-full flex items-center">
        <BackgroundVideo/>
        <div className="relative z-10">
          <Container>
            <div className="grid grid-cols-2 gap-40">
              <div className="flex justify-center items-center">
                <div className="">
                  <Title size="subtitle" color="red">POLITECHNIKA WROCŁAWSKA</Title>
                  <Title >PWR RACING TEAM</Title>
                  <div className=" my-6">
                    <Text>W każdym sezonie tworzymy nowy bolid wyścigowy. Na swoim koncie mamy aż dwanaście niepowtarzalnych modeli bolidów spalinowych, z czego każdy kolejny jest w stanie z łatwością pokonać poprzedni. W zeszłym sezonie powstał pierwszy w historii Zespołu bolid elektryczny z systemami jazdy autonomicznej – RT12e. Aktualnie zajmujemy się budową naszej czternastej konstrukcji.</Text>
                  </div>
                  <p className="text-xl mb-4 font-bold text-customRed">WE TAKE IT TO THE NEXT LEVEL</p>
                  <button className="flex items-center py-2 text-white rounded hover:pl-8 transition-all duration-300 group">
                    <span>Dowiedz się więcej</span>
                    <FaArrowRight className="ml-2 transition-all duration-300 group-hover:text-customRed" />
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center">
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
      </div>
    </div>
  );
};

export default FirstSection;
