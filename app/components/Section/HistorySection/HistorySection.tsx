"use client";

import Image from "next/image";
import Container from "../../Container";
import Text from "../../Text";
import Title from "../../Title";
import Counter from "./Counter";
import SecondaryButton from "../../SecondaryButton";

type HistorySectionProps = {
  aboutUs?: boolean;
};
const HistorySection: React.FC<HistorySectionProps> = ({ aboutUs }) => {
  return (
    <div className="relative bg-white">
      <Container>
        <div className="my-28">
          <div className="mb-8">
            {aboutUs && <Title color="black">HISTORIA ZESPOŁU</Title>}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
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
            <div
              className={`${aboutUs ? "flex-col-reverse" : "flex-col"} flex`}
            >
              <div
                className={`${
                  aboutUs ? "" : "mb-12"
                } flex justify-between text-center w-auto`}
              >
                <div className="flex flex-col">
                  <Counter targetNumber={75} size="bigger" color="red">
                    0
                  </Counter>
                  <div className=" text-lg">
                    <Text noblock center bold color="red" wide>
                      CZŁONKÓW
                    </Text>
                  </div>
                  <Text color="gray" noblock>
                    Których łączy jedna pasja
                  </Text>
                </div>
                <div className="flex flex-col">
                  <Counter targetNumber={14} size="bigger" color="red">
                    0
                  </Counter>
                  <div className=" text-lg">
                    <Text noblock center bold color="red" wide>
                      PROJEKTÓW
                    </Text>
                  </div>
                  <Text color="gray" noblock>
                    Ukończonych bolidów{" "}
                  </Text>
                </div>
                <div className="flex flex-col">
                  <Counter targetNumber={21} size="bigger" color="red">
                    0
                  </Counter>
                  <div className=" text-lg">
                    <Text noblock center bold color="red" wide>
                      OSIĄGNIĘĆ
                    </Text>
                  </div>
                  <Text color="gray" noblock>
                    W międzynarodowych zawodach
                  </Text>
                </div>
              </div>
              <div className="">
                <Title size="big" color="black">
                  HISTORIA NASZEGO ZESPOŁU
                </Title>
                <div className=" my-6">
                  <Text color="gray">
                    Studenci Politechniki Wrocławskiej od zawsze byli jednymi z
                    najzdolniejszych w całej Polsce, a co za tym idzie ich chęć
                    zdobywania wiedzy i doświadczenia jest ponadprzeciętna. W
                    celu zaspokojenia potrzeb młodych konstruktorów i menadżerów
                    w 2009 roku powstał Zespół PWR Racing Team. W każdym
                    sezonie tworzymy nowy bolid wyścigowy. Na swoim koncie mamy
                    aż dwanaście niepowtarzalnych modeli bolidów spalinowych, z
                    czego każdy kolejny jest w stanie z łatwością pokonać
                    poprzedni. W zeszłym sezonie powstał pierwszy w historii
                    Zespołu bolid elektryczny z systemami jazdy autonomicznej –
                    RT12e. Aktualnie zajmujemy się budową naszej czternastej
                    konstrukcji. Już w sezonie 2016/2017, pokazaliśmy co
                    potrafią Polacy. Jako pierwszy polski zespół zwyciężyliśmy
                    całą edycję zawodów Formula Student Italy. Od tego czasu
                    utrzymujemy się wśród najlepszych zespołów w światowym
                    rankingu i zajmujemy pierwsze miejsce w Polsce i 11 miejsce
                    na świecie w sezonie 2021.
                  </Text>
                </div>
                {!aboutUs && (
                  <SecondaryButton buttonText="Dowiedz się więcej" />
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HistorySection;
