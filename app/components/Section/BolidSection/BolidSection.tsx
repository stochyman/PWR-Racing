'use client';

import Image from "next/image";
import Container from '../../Container';
import Button from "../../Button";
import BolidSpecs from "./BolidSpecs";
import Title from "../../Title";
import Text from "../../Text";

const BolidSection = () => {
  return (
    <div>
      <div className="w-full inset-0">
        <Image
          src="/images/slider.png"
          alt="bolid"
          layout="intrinsic" // Obraz zachowa oryginalny aspekt przy ustalonej szerokości
          width={1920}
          height={10}
        />
      </div>
      <Container>
        <div id="section-bolid" className="grid grid-cols-2 gap-2">
          <div className="flex justify-center items-center">
            <div className="">
              <Title size="subtitle" color="gray">2022</Title>
              <Title color="red">RT13E</Title>
              <div className=" my-6">
              <Text color="gray">Najnowszy projekt jest odpowiedzią zespołu na wyzwania i trendy branży automotive. Chcemy projektować  rozwiązania i być częścią odbywającej się zmiany. Elektryfikacja i stworzenie systemów autonomicznych w bolidzie jest krokiem milowym w rozwoju zespołu. Pojazd wyposażony został w innowacyjne rozwiązania ze świata motorsportu. Wyróżniają go pełny monocoque, ważący zaledwie 24 kilogramy, autorskie silniki oraz wiązki elektryczne wysokiego i niskiego napięcia. System jazdy autonomicznej pozwala nam na startowanie nie tylko w kategorii elektrycznej, lecz także w kategorii driverless.</Text>
                  </div>
              <div className="flex gap-4 mt-8">
                <Button
                  label='Więcej o bolidzie'
                  onClick={() => {}}
                />
                <Button
                  outline
                  label='Poznaj zespół RT13E'
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
          <div className="flex items-baseline">
            <Image
              className="mt-8"
              src="/images/bolid_bolid.png"
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