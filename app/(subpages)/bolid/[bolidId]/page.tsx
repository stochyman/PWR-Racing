import { getBolidByBolidId } from "@/app/actions/getBolidByBolidId";
import Container from "@/app/components/Container";
import BolidSection from "@/app/components/Section/BolidSection/BolidSection";
import Text from "@/app/components/Text";
import Title from "@/app/components/Title";
import Image from "next/image";

interface Iparams {
  bolidId?: string;
}

const BolidPage = async ({ params }: { params: Iparams }) => {
  const bolidId = params.bolidId ?? "RT13e";
  const bolid = await getBolidByBolidId(bolidId);

  if (!bolid) {
    return <p>Bolid not found</p>;
  }

  return (
    <div className="flex flex-col pt-32">
      <BolidSection presetBolid={bolidId} />
      <div className="flex overflow-x-auto">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="flex-shrink-0 w-[400px]">
            <Image
              src={`/images/bolid/${bolidId}/images/slider/${num}.jpg`}
              alt={`Bolid ${num}`}
              width={383}
              height={200}
              layout="responsive"
            />
          </div>
        ))}
      </div>
      <div className=" w-full" id="achievements">
        <Container>
          <div className="flex flex-col w-full  py-16">
            <Title size="big" color="black">
              OSIĄGNIECIA ZA SEZON 2022
            </Title>

            <div className="flex">
              <div className="w-full grid grid-cols-3 gap-8 pt-6 h-60">
                <div className="relative rounded overflow-hidden">
                  <Image
                    src="/images/bolid/RT12e/images/zawody/1.jpg"
                    alt="Zdjęcie 2"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className=" absolute inset-0 bg-black opacity-50"></div>
                  <div className=" absolute inset-0 p-4 flex flex-col justify-between">
                    <Title size="small">FORMULA STUDENT ALPE ADRIA</Title>
                    <div className=" flex justify-between items-end">
                      <div className="">
                        <div className=" text-xs">
                          <Text>6th Overall</Text>
                        </div>
                        <div className=" text-xs">
                          <Text>8th Skidpad</Text>
                        </div>
                        <div className=" text-xs">
                          <Text>11th Acceleration</Text>
                        </div>
                        <div className=" text-xs">
                          <Text>2nd Engineering Design</Text>
                        </div>
                        <div className=" text-xs">
                          <Text>4th Business Plan Presentation</Text>
                        </div>
                        <div className=" text-xs">
                          <Text>7th Endurance </Text>
                        </div>
                      </div>
                      <div className="">
                        <Image
                          src="/images/bolid/RT12e/images/zawody/logo1.png"
                          alt="Zdjęcie 1"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded overflow-hidden">
                  <Image
                    src="/images/bolid/RT12e/images/zawody/2.jpg"
                    alt="Zdjęcie 2"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className=" absolute inset-0 bg-black opacity-50"></div>
                  <div className=" absolute inset-0 p-4 flex flex-col justify-between">
                    <Title size="small">FORMULA STUDENT ALPE ADRIA</Title>
                    <div className=" flex justify-between items-end">
                      <div className="">
                        <div className=" text-xs">
                          <Text>6th Overall</Text>
                        </div>
                        <div className=" text-xs">
                          <Text>8th Skidpad</Text>
                        </div>
                        <div className=" text-xs">
                          <Text>11th Acceleration</Text>
                        </div>
                        <div className=" text-xs">
                          <Text>2nd Engineering Design</Text>
                        </div>
                        <div className=" text-xs">
                          <Text>4th Business Plan Presentation</Text>
                        </div>
                        <div className=" text-xs">
                          <Text>7th Endurance </Text>
                        </div>
                      </div>
                      <div className="">
                        <Image
                          src="/images/bolid/RT12e/images/zawody/logo2.png"
                          alt="Zdjęcie 1"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded overflow-hidden">
                  <Image
                    src="/images/bolid/RT12e/images/zawody/3.jpg"
                    alt="Zdjęcie 2"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className=" absolute inset-0 bg-black opacity-50"></div>
                  <div className=" absolute inset-0 p-4 flex flex-col justify-between">
                    <Title size="small">FORMULA STUDENT ALPE ADRIA</Title>
                    <div className=" flex justify-between items-end">
                      <div className="">
                        <div className=" text-xs">
                          <Text>6th Overall</Text>
                        </div>
                        <div className=" text-xs">
                          <Text>8th Skidpad</Text>
                        </div>
                        <div className=" text-xs">
                          <Text>11th Acceleration</Text>
                        </div>
                        <div className=" text-xs">
                          <Text>2nd Engineering Design</Text>
                        </div>
                        <div className=" text-xs">
                          <Text>4th Business Plan Presentation</Text>
                        </div>
                        <div className=" text-xs">
                          <Text>7th Endurance </Text>
                        </div>
                      </div>
                      <div className="">
                        <Image
                          src="/images/bolid/RT12e/images/zawody/logo3.png"
                          alt="Zdjęcie 1"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="w-full">
        {bolid.parts.map((part, depIndex) => (
          <div
            key={part.id}
            className={`${depIndex % 2 === 0 ? "bg-neutral-200" : "bg-white"}`}
          >
            <Container>
              <div
                className={`${
                  depIndex % 2 === 0 ? "" : "flex-row-reverse"
                } flex gap-16 my-20`}
              >
                <div className=" my-auto w-2/3">
                  <div className=" uppercase">
                    <Title size="big" color="black">
                      {part.partName}
                    </Title>
                  </div>
                  <div className="my-6">
                    <Text color="black">{part.description}</Text>
                  </div>
                </div>
                <div className=" my-auto w-1/3">
                  <Image
                    src={`/images/bolid/RT12e/parts/${part.partName}.png`}
                    alt={`Zdjęcie ${part.partName}`}
                    layout="responsive"
                    width={300} // Używaj rzeczywistych proporcji obrazu
                    height={400} // Używaj rzeczywistych proporcji obrazu
                    objectFit="cover"
                  />
                </div>
              </div>
            </Container>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BolidPage;
