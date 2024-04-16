"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "../../Button";
import Container from "../../Container";
import Text from "../../Text";
import Title from "../../Title";
import BolidSpecs from "./BolidSpecs";
import Slider from "./Slider";

const BolidSection = ({ presetBolid = "RT13e" }) => {
  const [isHome, setIsHome] = useState(false);
  const [currentBolid, setCurrentBolid] = useState(presetBolid);
  const [nextBolid, setNextBolid] = useState(presetBolid);
  const [bolidData, setBolidData] = useState({
    name: "RT13e",
    year: "2023",
    short_description:
      "Najnowszy projekt jest odpowiedzią zespołu na wyzwania i trendy branży automotive. Chcemy projektować rozwiązania i być częścią odbywającej się zmiany. Elektryfikacja i stworzenie systemów autonomicznych w bolidzie jest krokiem milowym w rozwoju zespołu. Pojazd wyposażony został w innowacyjne rozwiązania ze świata motorsportu. Wyróżniają go pełny monocoque, ważący zaledwie 24 kilogramy, autorskie silniki oraz wiązki elektryczne wysokiego i niskiego napięcia. System jazdy autonomicznej pozwala nam na startowanie nie tylko w kategorii elektrycznej, lecz także w kategorii driverless.",
    acceleration: "4s",
    mass: "240 KG",
    power: "2 x 47 KW",
  });
  const [nextBolidData, setNextBolidData] = useState({ ...bolidData });
  const [animateOut, setAnimateOut] = useState("");
  const [animateIn, setAnimateIn] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (currentBolid !== nextBolid) {
        const response = await fetch(`/api/bolid/${nextBolid}`);
        const data = await response.json();

        if (response.ok) {
          setAnimateOut("translate-x-[-100%]"); // current bolid exits to the left
          setAnimateIn("translate-x-[100%]"); // new bolid enters from the right

          setTimeout(() => {
            setBolidData(nextBolidData);
            setNextBolidData(data);
            setAnimateOut("translate-x-0"); // reset current bolid animation
            setAnimateIn("translate-x-0"); // reset new bolid animation
            setCurrentBolid(nextBolid); // update current bolid to new bolid
          }, 500); // duration of the exit animation
        } else {
          console.error("Failed to fetch bolid data:", data.message);
        }
      }
    };

    fetchData();
  }, [nextBolid]);

  const handleChangeBolid = (bolidName) => {
    setNextBolid(bolidName);
  };

  const router = useRouter();
  const teamRedirect = (bolid) => {
    router.push(`/team/${bolid}`);
  };
  const bolidRedirect = (bolid) => {
    router.push(`/bolid/${bolid}`);
  };

  const pathname = usePathname();
  useEffect(() => {
    setIsHome(pathname === "/");
  }, [pathname]);

  return (
    <div className="relative flex flex-col">
      <Slider
        currentBolid={currentBolid}
        onChangeBolid={isHome ? handleChangeBolid : bolidRedirect}
      />
      <Container>
        <div
          className={`grid grid-cols-2 gap-12 py-12 transition-all ease-out duration-500`}
        >
          <div
            className={`flex justify-center items-center transition-all ease-out duration-500 ${animateOut}`}
          >
            <div>
              <Title size="subtitle" color="gray">
                {bolidData.year}
              </Title>
              <Title color="red">{bolidData.name}</Title>
              <div className="my-6">
                <Text color="gray">{bolidData.short_description}</Text>
              </div>
              <div className="flex gap-4 mt-8">
                <Button
                  label="Więcej o bolidzie"
                  onClick={() => bolidRedirect(bolidData.name)}
                />
                <Button
                  outline
                  label={`Poznaj zespół ${bolidData.name}`}
                  onClick={() => teamRedirect(bolidData.name)}
                />
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col justify-end items-center h-full w-full transition-all ease-out duration-500 ${animateIn}`}
          >
            <Image
              src={`/images/bolid/${nextBolidData.name}/${nextBolidData.name}.png`}
              alt="bolid"
              layout="intrinsic"
              width={700}
              height={551}
            />
          </div>
        </div>
      </Container>
      <BolidSpecs
        animate={animateIn}
        acceleration={nextBolidData.acceleration}
        mass={nextBolidData.mass}
        power={nextBolidData.power}
      />
    </div>
  );
};

export default BolidSection;
