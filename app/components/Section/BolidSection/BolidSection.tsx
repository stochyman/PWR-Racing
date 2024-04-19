"use client";

import { useEffect, useState } from "react";
import BolidContent from "./BolidContent";
import Slider from "./Slider";

type BolidData = {
  name: string;
  year: string;
  short_description: string;
  acceleration: string;
  mass: string;
  power: string;
};
const BolidSection = ({ presetBolid = "RT13e" }) => {
  const [currentBolidData, setCurrentBolidData] = useState<BolidData>({
    name: presetBolid,
    year: "2023",
    short_description:
      "Najnowszy projekt jest odpowiedzią zespołu na wyzwania i trendy branży automotive. Chcemy projektować rozwiązania i być częścią odbywającej się zmiany. Elektryfikacja i stworzenie systemów autonomicznych w bolidzie jest krokiem milowym w rozwoju zespołu. Pojazd wyposażony został w innowacyjne rozwiązania ze świata motorsportu. Wyróżniają go pełny monocoque, ważący zaledwie 24 kilogramy, autorskie silniki oraz wiązki elektryczne wysokiego i niskiego napięcia. System jazdy autonomicznej pozwala nam na startowanie nie tylko w kategorii elektrycznej, lecz także w kategorii driverless.",
    acceleration: "3s",
    mass: "230 KG",
    power: "2 x 48 KW",
  });
  const [previousBolidData, setPreviousBolidData] =
    useState<BolidData>(currentBolidData);

  const [isAnimating, setIsAnimating] = useState("");
  const [displayRight, setDisplayRight] = useState(false);
  // Sprawdzenie czy dwa razy nie w tą samą stronę
  const [sameDirection, setsameDirection] = useState("");
  const [sameDirectionShift, setsameDirectionShift] = useState("duration-500");

  const fetchBolidData = async (bolidName: string) => {
    // if (currentBolidData.name === bolidName) {
    //   // Jeśli to ten sam bolid, nie aktualizuj
    //   return;
    // }
    const response = await fetch(`/api/bolid/${bolidName}`);
    if (!response.ok) {
      console.error("Failed to fetch bolid data:", response.statusText);
      return;
    }

    const data = await response.json();
    if (currentBolidData.year < data.year) {
      if (sameDirection == "left") {
        setsameDirectionShift("0");

        setIsAnimating("translate-x-[-50%]");
        setTimeout(() => {
          setIsAnimating("translate-x-[0]");
          setsameDirectionShift("duration-500");
        }, 10);
      } else {
        setsameDirection("left");
        setDisplayRight(false);
        setIsAnimating("translate-x-[0]"); // Rozpoczęcie animacji
      }
    } else {
      if (sameDirection == "right") {
        setsameDirectionShift("");

        setIsAnimating("translate-x-[0]");
        setTimeout(() => {
          setIsAnimating("translate-x-[-50%]");
          setsameDirectionShift("duration-500");
        }, 10);
      } else {
        setsameDirection("right");
        setDisplayRight(true);
        setIsAnimating("translate-x-[-50%]"); // Rozpoczęcie animacji
      }
    }

    setPreviousBolidData(currentBolidData);
    setCurrentBolidData(data);
  };

  useEffect(() => {
    fetchBolidData(currentBolidData.name);
  }, []);

  const handleChangeBolid = (bolidName: string) => {
    fetchBolidData(bolidName);
  };

  return (
    <div className=" overflow-hidden">
      <div className="relative flex flex-col w-[200vw]">
        <Slider
          currentBolid={currentBolidData.name}
          onChangeBolid={handleChangeBolid}
        />
        <div
          className={` flex ${sameDirectionShift} ${isAnimating} ${
            displayRight ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <BolidContent {...currentBolidData} />
          {previousBolidData && <BolidContent {...previousBolidData} />}
        </div>
      </div>
    </div>
  );
};

export default BolidSection;
