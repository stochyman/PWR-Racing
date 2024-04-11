'use client';

import React, { useState, useEffect, useRef } from 'react';
import SliderElement from './SliderElement';


export interface SliderProps {
  currentBolid: string;
  onChangeBolid: (newBolid: string) => void;
  darkMode?: boolean;
}

const Slider: React.FC<SliderProps> = ({ currentBolid = 'RT13e', onChangeBolid, darkMode = false }) => {
  // Stan dla przeciągania
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Ref do kontenera, który będzie przewijany
  const scrollContainerRef = useRef(null);

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
    <div className="">
      <div className={`${darkMode ? 'bg-neutral-300' : 'bg-neutral-500'} absolute inset-0 mt-9 w-full h-3 opacity-50`}></div>
      <div className={` w-[99vw] h-full relative pt-8 overflow-x-scroll animation-container ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          ref={scrollContainerRef}
          onMouseDown={startDragging}
          onMouseMove={onDrag}
          onMouseLeave={stopDragging}
          onMouseUp={stopDragging}>
          <div className="flex relative ml-80 gap-24">
            <SliderElement darkMode date={2023} bolid="RT13e" onClick={onChangeBolid} currentBolid={currentBolid}/>
            <SliderElement darkMode date={2022} bolid="RT12e" onClick={onChangeBolid}  currentBolid={currentBolid}/>
            <SliderElement darkMode date={2021} bolid="RT11b" onClick={onChangeBolid} currentBolid={currentBolid}/>
            <SliderElement darkMode date={2020} bolid="RTX" onClick={onChangeBolid} currentBolid={currentBolid}/>
            <SliderElement darkMode date={2018} bolid="RT09" onClick={onChangeBolid} currentBolid={currentBolid}/>
            <SliderElement darkMode date={2019} bolid="RT08" onClick={onChangeBolid} currentBolid={currentBolid}/>
            <SliderElement darkMode date={2017} bolid="RT07" onClick={onChangeBolid} currentBolid={currentBolid}/>
            <SliderElement darkMode date={2016} bolid="RT06" onClick={onChangeBolid} currentBolid={currentBolid}/>
            <SliderElement darkMode date={2015} bolid="RT05" onClick={onChangeBolid} currentBolid={currentBolid}/>
            <SliderElement darkMode date={2014} bolid="RT04" onClick={onChangeBolid} currentBolid={currentBolid}/>
            <SliderElement darkMode date={2013} bolid="RT03" onClick={onChangeBolid} currentBolid={currentBolid}/>
            <SliderElement darkMode date={2012} bolid="RT02" onClick={onChangeBolid} currentBolid={currentBolid}/>
            <SliderElement darkMode date={2011} bolid="RT01" onClick={onChangeBolid} currentBolid={currentBolid}/>
            <div className="flex-shrink-0 w-40"></div>
          </div>
      </div>
    </div>
  );
};

export default Slider;
