'use client';

import Image from "next/image";
import Container from "../../Container";
import Button from "../../Button";
import Title from "../../Title";

const JoinusSection = () => {
  return (
    <div id="joinus" className="relative h-[633px]">
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16)), radial-gradient(75% 75% at 50% 50%, #000000 0%, rgba(0, 0, 0, 0) 100%)`
        }}
      ></div>
      <div className="grid h-full grid-cols-[25%_40%_35%] relative">
        {/* Pierwsza kolumna */}
        <div className="relative h-full">
          <Image
            src="/images/joinus/photo1.png"
            alt="Photo 1"
            layout="fill"
            objectFit="cover"
            objectPosition="left center" // Pozostawia całość zdjęcia w osi X i przycina w osi Y
          />
        </div>

        {/* Druga kolumna, podzielona na dwa wiersze */}
        <div className="relative h-full flex flex-col">
          {/* Pierwszy wiersz w drugiej kolumnie */}
          <div className="relative flex-1">
            <Image
              src="/images/joinus/photo2.jpeg"
              alt="Photo 2"
              layout="fill"
              objectFit="cover"
              objectPosition="left 80%" // Pozostawia całość zdjęcia w osi X i przycina w osi Y
            />
          </div>

          {/* Drugi wiersz w drugiej kolumnie, podzielony na dwie kolumny */}
          <div className="relative flex-1 grid grid-cols-[2fr_1fr]">
            {/* Pierwsza kolumna w drugim wierszu */}
            <div className="relative">
              <Image
                src="/images/joinus/photo3.jpeg"
                alt="Photo 3"
                layout="fill"
                objectFit="cover"
                objectPosition="center center" // Pozostawia całość zdjęcia w osi X i przycina w osi Y
              />
            </div>
            {/* Druga kolumna w drugim wierszu */}
            <div className="relative">
              <Image
                src="/images/joinus/photo4.jpeg"
                alt="Photo 4"
                layout="fill"
                objectFit="cover"
                objectPosition="left center" // Pozostawia całość zdjęcia w osi X i przycina w osi Y
              />
            </div>
          </div>
        </div>

        {/* Trzecia kolumna */}
        <div className="relative h-full">
          <Image
            src="/images/joinus/photo5.jpeg"
            alt="Photo 5"
            layout="fill"
            objectFit="cover"
            objectPosition="center center" // Pozostawia całość zdjęcia w osi X i przycina w osi Y
          />
        </div>
      </div>
      <div className="absolute inset-0 z-10">
        <Container>
          <div className="">
            <div className=" uppercase text-center">
              <Title>Chcesz zostać częścią <br/> pwr racing team?</Title>
            </div>
            <div className="flex gap-4 mt-8">
              <Button
                label='Rekrutacja'
                onClick={() => {}}
              />
              <Button
                outline
                label='Zostań Partnerem'
                onClick={() => {}}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default JoinusSection;