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
    <div className=" pt-32">
      <BolidSection presetBolid={params.bolidId} />
      <div className="flex overflow-x-auto">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="flex-shrink-0 w-[400px]">
            <Image
              src={`/images/bolid/${params.bolidId}/images/${num}.jpg`}
              alt={`Bolid ${num}`}
              width={383}
              height={200}
              layout="responsive"
            />
          </div>
        ))}
      </div>
      <div className="w-full">
        {bolid.parts.map((part, depIndex) => (
          <div
            key={part.id}
            className={`${depIndex % 2 === 0 ? "bg-white" : "bg-neutral-200"}`}
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
