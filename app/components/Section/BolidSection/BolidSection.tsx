'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Container from '../../Container';
import Button from "../../Button";
import BolidSpecs from "./BolidSpecs";
import Title from "../../Title";
import Text from "../../Text";
import SliderElement from "./SliderElement";

const BolidSection = () => {
  // Stan dla danych bolidu
  const [currentBolid, setCurrentBolid] = useState("RT13e");
  const [bolidData, setBolidData] = useState({
    name: "",
    year: "",
    short_description: "",
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

  const handleChangeBolid = (bolidName) => {
    setCurrentBolid(bolidName);
  };



  // Stan dla przeciągania
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Ref do kontenera, który będzie przewijany
  const scrollContainerRef = React.useRef(null);

  // Rozpoczęcie przeciągania
  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  // Przeciąganie
  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX); // Prędkość przewijania, może wymagać dostosowania
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Zakończenie przeciągania
  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    <div className='relative'>
      <div className=" absolute inset-0 mt-9 w-full h-3 bg-neutral-300 opacity-50"></div>
      <div className={`w-full relative pt-8 overflow-x-scroll animation-container ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          ref={scrollContainerRef}
          onMouseDown={startDragging}
          onMouseMove={onDrag}
          onMouseLeave={stopDragging}
          onMouseUp={stopDragging}>
        <div className=" relative ml-80 flex gap-24">
          <SliderElement date={2023} bolid="RT13e" onClick={handleChangeBolid} currentBolid={currentBolid}/>
          <SliderElement date={2022} bolid="RT12e" onClick={handleChangeBolid}  currentBolid={currentBolid}/>
          <SliderElement date={2021} bolid="RT11" onClick={handleChangeBolid} currentBolid={currentBolid}/>
          <SliderElement date={2020} bolid="RTX" onClick={handleChangeBolid} currentBolid={currentBolid}/>
          <SliderElement date={2018} bolid="RT09" onClick={handleChangeBolid} currentBolid={currentBolid}/>
          <SliderElement date={2019} bolid="RT08" onClick={handleChangeBolid} currentBolid={currentBolid}/>
          <SliderElement date={2017} bolid="RT07" onClick={handleChangeBolid} currentBolid={currentBolid}/>
          <SliderElement date={2016} bolid="RT06" onClick={handleChangeBolid} currentBolid={currentBolid}/>
          <SliderElement date={2015} bolid="RT05" onClick={handleChangeBolid} currentBolid={currentBolid}/>
          <SliderElement date={2014} bolid="RT04" onClick={handleChangeBolid} currentBolid={currentBolid}/>
          <SliderElement date={2013} bolid="RT03" onClick={handleChangeBolid} currentBolid={currentBolid}/>
          <SliderElement date={2012} bolid="RT02" onClick={handleChangeBolid} currentBolid={currentBolid}/>
          <SliderElement date={2011} bolid="RT01" onClick={handleChangeBolid} currentBolid={currentBolid}/>
          <div className="flex-shrink-0 w-40"></div>
        </div>
      </div>
      <Container>
        <div id="section-bolid" className="grid grid-cols-2 gap-2">
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
                  onClick={() => {}}
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
