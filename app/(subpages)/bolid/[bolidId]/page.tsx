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
    <div className="flex flex-col pt-[100px]">
      <BolidSection presetBolid={bolidId} />
      {/* <div className="flex overflow-x-auto">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="flex-shrink-0 w-[300px] md:w-[400px]">
            <Image
              src={`/images/bolid/${bolidId}/images/slider/${num}.jpg`}
              alt={`Bolid ${num}`}
              width={383}
              height={200}
              layout="responsive"
            />
          </div>
        ))}
      </div> */}
      <div className=" w-full" id="achievements">
        <Container>
          <div className="flex flex-col w-full py-8 md:py-16">
            <Title size="big" color="black">
              OSIĄGNIECIA ZA SEZON {bolid.year}
            </Title>

            <div className="flex">
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 text-white">
                <div className="relative rounded overflow-hidden h-52 md:h-60">
                  <Image
                    src="/images/bolid/RT12e/images/zawody/1.jpg"
                    alt="Zdjęcie 2"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className=" absolute inset-0 bg-black opacity-50"></div>
                  <div className=" absolute inset-0 p-4 flex flex-col justify-between ">
                    <Title size="small">FORMULA STUDENT GERMANY</Title>
                    <div className=" flex justify-between items-end ">
                      <div className=" ">
                        <Text extrasmall>6th Overall</Text>
                        <Text extrasmall>8th Skidpad</Text>
                        <Text extrasmall>11th Acceleration</Text>
                        <Text extrasmall>2nd Engineering Design</Text>
                        <Text extrasmall>4th Business Plan Presentation</Text>
                        <Text extrasmall>7th Endurance </Text>
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
                <div className="relative rounded overflow-hidden h-52 md:h-60">
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
                        <Text extrasmall>6th Overall</Text>
                        <Text extrasmall>8th Skidpad</Text>
                        <Text extrasmall>11th Acceleration</Text>
                        <Text extrasmall>2nd Engineering Design</Text>
                        <Text extrasmall>4th Business Plan Presentation</Text>
                        <Text extrasmall>7th Endurance </Text>
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
                <div className="relative rounded overflow-hidden h-52 md:h-60">
                  <Image
                    src="/images/bolid/RT12e/images/zawody/3.jpg"
                    alt="Zdjęcie 2"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className=" absolute inset-0 bg-black opacity-50"></div>
                  <div className=" absolute inset-0 p-4 flex flex-col justify-between">
                    <Title size="small">FORMULA STUDENT ITALY</Title>
                    <div className=" flex justify-between items-end">
                      <div className="">
                        <Text extrasmall>6th Overall</Text>
                        <Text extrasmall>8th Skidpad</Text>
                        <Text extrasmall>11th Acceleration</Text>
                        <Text extrasmall>2nd Engineering Design</Text>
                        <Text extrasmall>4th Business Plan Presentation</Text>
                        <Text extrasmall>7th Endurance </Text>
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
            key={part.partName}
            className={`${depIndex % 2 === 0 ? "bg-neutral-200" : "bg-white"}`}
          >
            <Container>
              <div
                className={`${
                  depIndex % 2 === 0 ? "" : " md:flex-row-reverse"
                } flex md:flex-row flex-col gap-0 md:gap-16 my-8 `}
              >
                <div className=" my-0 md:my-20 md:w-2/3">
                  <div className=" uppercase">
                    <Title size="big" color="black">
                      {part.partName}
                    </Title>
                  </div>
                  <div className=" my-4 md:my-6">
                    <Text color="black">{part.description}</Text>
                  </div>
                </div>
                <div className=" my-auto md:w-1/3">
                  <Image
                    src={`/images/bolid/RT12e/parts/${part.partName}.png`}
                    alt={`Zdjęcie ${part.partName}`}
                    width={300} // Używaj rzeczywistych proporcji obrazu
                    height={400} // Używaj rzeczywistych proporcji obrazu
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    sizes="(max-width: 768px) 100vw, 25vw"
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
