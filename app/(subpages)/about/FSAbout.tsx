import Container from "@/app/components/Container";
import Title from "@/app/components/Title";
import Image from "next/image";
import Text from "@/app/components/Text";

const FSAbout: React.FC = () => {
  return (
    <Container>
      <div className="w-full">
        <div className="">
          <Title wrap size="medium" color="black">
            CZTERY KATEGORIE DYNAMICZNE
          </Title>
          <div className="flex flex-col gap-2 mt-2">
            <div>
              <Text>
                • Skid Pad — konkurencja polegająca na jeździe po “ósemce”.
                Każdy Zespół ma do dyspozycji dwie próby, z których przy
                punktowaniu brana jest pod uwagę lepsza z nich.
              </Text>
            </div>
            <div>
              <Text>
                • Acceleration — konkurencja, która polega na jak najszybszym
                pokonaniu 75 metrów, dzięki czemu możliwe jest ocenienie
                przyspieszenia bolidu. Zespoły mają do dyspozycji dwie próby i
                lepsza z nich jest oceniana.
              </Text>
            </div>
            <div>
              <Text>
                • Autocross — konkurencja, podczas której uczestnicy mają za
                zadanie pokonać jedno okrążenie na torze w jak najkrótszym
                czasie. W konkurencji może wziąć udział dwóch kierowców z danego
                Zespołu, a każdy z nich ma do dyspozycji dwa przejazdy. Pod
                uwagę brany jest najlepszy czas z czterech.
              </Text>
            </div>
            <div>
              <Text>
                • Endurance — konkurencja polegająca na wyścigu na około 22
                kilometry. Po przejechaniu 11 kilometrów następuje zmiana
                kierowcy, na którą Zespół ma 3 minuty. Jest to najwyżej
                punktowana konkurencja, ale punkty otrzymują tylko Zespoły,
                które ukończyły przejazd.
              </Text>
            </div>
            <div>
              <Text>
                • Efficiency — efektywność — to konkurencja, która ocenia
                zużycie paliwa lub energii. Jedynie Zespoły, które ukończyły
                Endurance są brane pod uwagę przy przyznawaniu punktów za tę
                konkurencję.
              </Text>
            </div>
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-6 my-6">
            <div className=" relative h-60 rounded-md overflow-hidden">
              <Image
                src="/images/FS/acceleration.png"
                alt="acceleration"
                fill
              />
            </div>
            <div className=" relative h-60 rounded-md overflow-hidden">
              <Image src="/images/FS/skipad.png" alt="skidpad" fill />
            </div>
            <div className=" relative h-60 rounded-md overflow-hidden">
              <Image src="/images/FS/autocross.png" alt="autocross" fill />
            </div>
            <div className=" relative h-60 rounded-md overflow-hidden">
              <Image src="/images/FS/endurance.png" alt="endurance" fill />
            </div>
          </div>
        </div>
        <div className=" my-8 md:my-12">
          <Title wrap size="medium" color="black">
            TRZY KATEGORIE STATYCZNE
          </Title>
          <div className="flex flex-col gap-2 mt-2">
            <div className="">
              <Text>
                • Business Plan Presentation — konkurencja, podczas której
                Członkowie Zespołu wcielają się w rolę zarządu start-upu,
                przykładowo tworzonych na zamówienie hamulców. Za pomocą
                dziesięciominutowej prezentacji mają za zadanie przekonać
                sędziów odgrywających inwestorów do wsparcia ich modelu
                biznesowego.
              </Text>
            </div>
            <div className="">
              <Text>
                • Cost and Manufacturing — konkurencja oceniają skrupulatność, z
                jaką przygotowano kosztorys projektu oraz wiedzę Członków
                Zespołu na temat kosztów materiałów oraz wytworzenia bolidu.
              </Text>
            </div>
            <div className="">
              <Text>
                • Engineering Design — konkurencja polegająca na prezentacji
                projektu bolidu. Sędziowie oceniają umiejętności inżynierskie
                oraz pomysłowość Członków Zespołów przy projektowaniu zarówno
                całokształtu, jak i poszczególnych systemów pojazdu. Jest to
                najwyżej punktowana konkurencja statyczna, którą oceniają
                eksperci z branży motoryzacyjnej.
              </Text>
            </div>
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6">
            <div className=" group relative h-80 rounded-md overflow-hidden">
              <div className=" bg-white absolute w-0 group-hover:w-full hidden group-hover:block h-full z-20">
                Test
              </div>
              <Image src="/images/FS/cost.png" alt="skidpad" fill />
            </div>
            <div className=" relative h-80 rounded-md overflow-hidden">
              <Image src="/images/FS/engineering.png" alt="autocross" fill />
            </div>
            <div className=" relative h-80 rounded-md overflow-hidden">
              <Image src="/images/FS/business.png" alt="endurance" fill />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FSAbout;
