"use client";

import { useState } from "react";
import BolidContent from "./BolidContent";
import BolidSpecs from "./BolidSpecs";
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
    acceleration: "4s",
    mass: "240 KG",
    power: "2 x 47 KW",
  });
  const [previousBolidData, setPreviousBolidData] = useState<BolidData>();

  const [isAnimating, setIsAnimating] = useState(false);
  const [displayRight, setDisplayRight] = useState(false);

  const fetchBolidData = async (bolidName: string) => {
    if (currentBolidData.name === bolidName) {
      // Jeśli to ten sam bolid, nie aktualizuj
      return;
    }
    setIsAnimating(true); // Rozpoczęcie animacji

    const response = await fetch(`/api/bolid/${bolidName}`);
    if (!response.ok) {
      console.error("Failed to fetch bolid data:", response.statusText);
      setIsAnimating(false); // Zakończenie animacji w przypadku błędu
      return;
    }

    const data = await response.json();
    if (currentBolidData.year < data.year) {
      console.log("większy");
      setDisplayRight(false);
    } else {
      console.log("mniejszy");
      setDisplayRight(true);
    }

    setPreviousBolidData(currentBolidData);
    setCurrentBolidData(data);
    setTimeout(() => {
      // setIsAnimating(false); // Zakończenie animacji po aktualizacji danych
    }, 500);
  };

  const handleChangeBolid = (bolidName: string) => {
    fetchBolidData(bolidName);
  };

  return (
    <div className="relative flex flex-col overflow">
      <Slider
        currentBolid={currentBolidData.name}
        onChangeBolid={handleChangeBolid}
      />
      <div
        className={`relative flex flex-col duration-500 ease-in-out ${
          isAnimating ? "translate-x-[100%]" : "translate-x-0"
        }`}
      >
        <BolidContent {...currentBolidData} />
        <div
          className={`${
            displayRight ? " translate-x-[100%]" : " translate-x-[-100%]"
          } absolute inset-0`}
        >
          {previousBolidData && <BolidContent {...previousBolidData} />}
        </div>
      </div>
      <BolidSpecs
        animate={"opacity"}
        acceleration={currentBolidData.acceleration}
        mass={currentBolidData.mass}
        power={currentBolidData.power}
      />
    </div>
  );
};

export default BolidSection;
