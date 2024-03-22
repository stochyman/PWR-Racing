'use client';

import Image from "next/image";
import Container from '../../Container';
import Text from "../../Text";
import Title from "../../Title";
import Counter from "./Counter";

const HistorySection = () => {
  return (
    <div className="">
      <Container>
        <div className="grid grid-cols-2 gap-10 my-20 mb-8">
          <div className=" relative flex justify-center items-center">
            <Image
              className=""
              src="/images/history.jpg"
              alt="bolid"
              layout="fill"
              objectFit="cover"
              objectPosition="left center"
            />
          </div>
          <div className="">
            <div className="flex justify-between text-center w-auto my-12 mt-16">
              <div className="flex flex-col">
                <Counter targetNumber={75} size="bigger" color="red">0</Counter>
                <div className=" text-lg">
                  <Text noblock center bold color="red" wide>CZŁONKÓW</Text>
                </div>
                <Text color="gray" noblock>Których łączy jedna pasja</Text>
              </div>
              <div className="flex flex-col">
                <Counter targetNumber={14} size="bigger" color="red">0</Counter>
                <div className=" text-lg">
                  <Text noblock center bold color="red" wide>PROJEKTÓW</Text>
                </div>
                <Text color="gray" noblock>Ukończonych bolidów </Text>
              </div>
              <div className="flex flex-col">
                <Counter targetNumber={21} size="bigger" color="red">0</Counter>
                <div className=" text-lg">
                  <Text noblock center bold color="red" wide>OSIĄGNIĘĆ</Text>
                </div>
                <Text color="gray" noblock>W międzynarodowych zawodach</Text>
              </div>
            </div>
            <Title size="big" color="black">HISTORIA NASZEGO ZESPOŁU</Title>
            <div className=" my-6">
              <Text color="gray">Studenci Politechniki Wrocławskiej od zawsze byli jednymi z najzdolniejszych w całej Polsce, a co za tym idzie ich chęć zdobywania wiedzy i doświadczenia jest ponadprzeciętna. W celu zaspokojenia potrzeb młodych konstruktorów i menadżerów w 2009 roku powstał Zespół PWR Racing Team. W każdym sezonie tworzymy nowy bolid wyścigowy. Na swoim koncie mamy aż dwanaście niepowtarzalnych modeli bolidów spalinowych, z czego każdy kolejny jest w stanie z łatwością pokonać poprzedni. W zeszłym sezonie powstał pierwszy w historii Zespołu bolid elektryczny z systemami jazdy autonomicznej – RT12e. Aktualnie zajmujemy się budową naszej czternastej konstrukcji. Już w sezonie 2016/2017, pokazaliśmy co potrafią Polacy. Jako pierwszy polski zespół zwyciężyliśmy całą edycję zawodów Formula Student Italy. Od tego czasu utrzymujemy się wśród najlepszych zespołów w światowym rankingu i zajmujemy pierwsze miejsce w Polsce i 11 miejsce na świecie w sezonie 2021.</Text>
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
        </div>
      </Container>
    </div>
  );
};

export default HistorySection;