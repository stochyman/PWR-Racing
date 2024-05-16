"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const sponsors = [
  "/images/sponsors/krzywa.png",
  "/images/sponsors/mahle.png",
  "/images/sponsors/manus.png",
  "/images/sponsors/pwr.png",
  "/images/sponsors/siemens.png",
  "/images/sponsors/wydzial_mechaniczny.png",
];

const SponsorsSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  let animationFrameId: number | undefined;

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollSpeed = 1; // Możesz dostosować prędkość przewijania

  const [isAnimating, setIsAnimating] = useState(false);

  const animateScroll = () => {
    if (containerRef.current && !isAnimating) {
      setIsAnimating(true);
      const step = () => {
        if (containerRef.current) {
          containerRef.current.scrollLeft += scrollSpeed;
          if (
            containerRef.current.scrollLeft >=
            containerRef.current.scrollWidth / 2
          ) {
            containerRef.current.scrollLeft = 0;
          }
          animationFrameId = requestAnimationFrame(step);
        }
      };
      step();
    }
  };

  useEffect(() => {
    // Rozpoczęcie animacji przewijania
    animateScroll();

    // Czyszczenie: zatrzymanie animacji i aktualizacja stanu
    return () => {
      setIsAnimating(false);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const onMouseLeave = () => {
    setIsDragging(false);
    animateScroll();
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX; // Mnożnik prędkości przewijania
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      id="section-partners"
      ref={containerRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      className=" animation-container relative bg-neutral-200 overflow-hidden flex items-center w-full h-[200px] animation-container"
      style={{ overflowX: "auto", cursor: isDragging ? "grabbing" : "grab" }}
    >
      <div className="relative">
        <div className="flex gap-8 select-none">
          {sponsors.map((src, index) => (
            <div
              key={index}
              className="min-w-max flex-shrink-0 flex items-center"
            >
              <Image
                src={src}
                alt={`Sponsor ${index + 1}`}
                width={300}
                height={100}
                layout="intrinsic"
              />
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-20"></div>
      </div>
      {/* Kopia w celu stworzenia iluzji braku przeskoku międzye końcem animacji */}
      <div className="relative">
        <div className="flex gap-8 select-none">
          {sponsors.map((src, index) => (
            <div
              key={index}
              className="min-w-max flex-shrink-0 flex items-center"
            >
              <Image
                src={src}
                alt={`Sponsor ${index + 1}`}
                width={300}
                height={100}
                layout="intrinsic"
              />
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-20"></div>
      </div>
    </div>
  );
};

export default SponsorsSection;
