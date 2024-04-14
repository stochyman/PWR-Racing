'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Container from '../../Container';
import Button from "../../Button";
import BolidSpecs from "./BolidSpecs";
import Title from "../../Title";
import Text from "../../Text";
import Slider from './Slider';
import { useRouter } from 'next/navigation';

const BolidSection = () => {
  // Stan dla danych bolidu
  const [currentBolid, setCurrentBolid] = useState("RT13e");
  const [bolidData, setBolidData] = useState({
    name: "RT13e",
    year: "2023",
    short_description: "Najnowszy projekt jest odpowiedzią zespołu na wyzwania i trendy branży automotive. Chcemy projektować rozwiązania i być częścią odbywającej się zmiany. Elektryfikacja i stworzenie systemów autonomicznych w bolidzie jest krokiem milowym w rozwoju zespołu. Pojazd wyposażony został w innowacyjne rozwiązania ze świata motorsportu. Wyróżniają go pełny monocoque, ważący zaledwie 24 kilogramy, autorskie silniki oraz wiązki elektryczne wysokiego i niskiego napięcia. System jazdy autonomicznej pozwala nam na startowanie nie tylko w kategorii elektrycznej, lecz także w kategorii driverless.",
  });

  // Pobieranie danych bolidu z bazy danych
  useEffect(() => {
    const fetchBolidData = async () => {
      const response = await fetch(`/api/bolid/${currentBolid}`);
      const data = await response.json();

      if (response.ok) {
        setBolidData(data);
      } else {
        console.error("Failed to fetch bolid data:", data.message);
      }
    };

    fetchBolidData();
  }, [currentBolid]);

  const handleChangeBolid = (bolidName: string) => {
    setCurrentBolid(bolidName);
  };

  const router = useRouter();
  const teamRedirect = (bolid: string) => {
    router.push(`/team/${bolid}`);
  };

  return (
    <div className='relative flex flex-col'>
      <Slider currentBolid={currentBolid} onChangeBolid={handleChangeBolid} />
      <Container>
        <div className="grid grid-cols-2 gap-12 py-12">
          <div className="flex justify-center items-center">
            <div className="">
              <Title size="subtitle" color="gray">{bolidData.year}</Title>
              <Title color="red">{bolidData.name}</Title>
              <div className=" my-6">
              <Text color="gray">{bolidData.short_description}</Text>
                  </div>
              <div className="flex gap-4 mt-8">
                <Button
                  label='Więcej o bolidzie'
                  onClick={() => {}}
                />
                <Button
                  outline
                  label={`Poznaj zespół ${bolidData.name}`}
                  onClick={() => teamRedirect(bolidData.name)}
                />
              </div>
            </div>
          </div>
          <div className="flex items-baseline">
            <Image
              className="mt-8"
              src="/images/bolid/RT13e.png"
              alt="bolid"
              layout="intrinsic"
              width={700}
              height={551}
            />
          </div>
        </div>
      </Container>
      <BolidSpecs/>
    </div>
  );
};

export default BolidSection;
