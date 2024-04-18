"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../../Button";
import Container from "../../Container";
import Text from "../../Text";
import Title from "../../Title";
import BolidSpecs from "./BolidSpecs";

interface BolidData {
  name: string;
  year: string;
  short_description: string;
  acceleration: string;
  mass: string;
  power: string;
}
const BolidContent: React.FC<BolidData> = ({
  name,
  year,
  short_description,
  acceleration,
  mass,
  power,
}) => {
  const router = useRouter();
  const teamRedirect = (bolid: string) => {
    router.push(`/team/${bolid}`);
  };
  const bolidRedirect = (bolid: string) => {
    router.push(`/bolid/${bolid}`);
  };

  return (
    <div className="relative flex flex-col">
      <Container>
        <div className="grid grid-cols-2 gap-12 py-12 transition-all ease-out duration-500">
          <div
            className={`flex justify-center items-center transition-all ease-out duration-500`}
          >
            <div>
              <Title size="subtitle" color="gray">
                {year}
              </Title>
              <Title color="red">{name}</Title>
              <div className="my-6">
                <Text color="gray">{short_description}</Text>
              </div>
              <div className="flex gap-4 mt-8">
                <Button
                  label="Więcej o bolidzie"
                  onClick={() => bolidRedirect(name)}
                />
                <Button
                  outline
                  label={`Poznaj zespół ${name}`}
                  onClick={() => teamRedirect(name)}
                />
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col justify-end items-center h-full w-full transition-all ease-out duration-500`}
          >
            <Image
              src={`/images/bolid/${name}/${name}.png`}
              alt="bolid"
              layout="intrinsic"
              width={700}
              height={300}
            />
          </div>
        </div>
      </Container>
      <BolidSpecs
        animate={"opacity"}
        acceleration={acceleration}
        mass={mass}
        power={power}
      />
    </div>
  );
};

export default BolidContent;
