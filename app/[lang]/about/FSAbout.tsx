import Container from "@/app/components/Container";
import Title from "@/app/components/Title";
import Image from "next/image";
import Text from "@/app/components/Text";
import Heading from "@/app/components/Heading";

const FSAbout: React.FC = () => {
  return (
    <div className=" relative bg-white">
      <Container>
        <div className="w-full">
          <div className="">
            <Title wrap size="medium" color="black">
              CZTERY KONKURENCJE DYNAMICZNE
            </Title>
            <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-6 my-6">
              <FlipCard
                height={"h-60"}
                src="/images/FS/acceleration.png"
                title="Acceleration"
                text="Konkurencja, która polega na jak najszybszym
                pokonaniu 75 metrów, dzięki czemu możliwe jest ocenienie
                przyspieszenia bolidu. Zespoły mają do dyspozycji dwie próby i
                lepsza z nich jest oceniana."
              />
              <FlipCard
                height={"h-60"}
                src="/images/FS/skipad.png"
                title="Skid Pad"
                text="Konkurencja polegająca na jeździe po “ósemce”.
                Każdy Zespół ma do dyspozycji dwie próby, z których przy
                punktowaniu brana jest pod uwagę lepsza z nich."
              />
              <FlipCard
                height={"h-60"}
                src="/images/FS/autocross.png"
                title="Autocross"
                text="Konkurencja, podczas której uczestnicy mają za
                zadanie pokonać jedno okrążenie na torze w jak najkrótszym
                czasie. W konkurencji może wziąć udział dwóch kierowców z danego
                Zespołu, a każdy z nich ma do dyspozycji dwa przejazdy. Pod
                uwagę brany jest najlepszy czas z czterech."
              />
              <FlipCard
                height={"h-60"}
                src="/images/FS/endurance.png"
                title="Endurance"
                text="Konkurencja polegająca na wyścigu na około 22
                kilometry. Po przejechaniu 11 kilometrów następuje zmiana
                kierowcy, na którą Zespół ma 3 minuty. Jest to najwyżej
                punktowana konkurencja, ale punkty otrzymują tylko Zespoły,
                które ukończyły przejazd."
              />
            </div>
          </div>
          <div className=" my-8 md:my-12">
            <Title wrap size="medium" color="black">
              TRZY KONKURENCJE STATYCZNE
            </Title>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6">
              <FlipCard
                height={"h-56 md:h-80"}
                src="/images/FS/cost.png"
                title="Cost and Manufacturing"
                text="Konkurencja oceniają skrupulatność, z jaką przygotowano kosztorys projektu oraz wiedzę Członków Zespołu na temat kosztów materiałów oraz wytworzenia bolidu."
              />
              <FlipCard
                height={"h-56 md:h-80"}
                src="/images/FS/engineering.png"
                title="Engineering Design"
                text="Konkurencja polegająca na prezentacji projektu bolidu. Sędziowie oceniają umiejętności inżynierskie oraz pomysłowość Członków Zespołów przy projektowaniu zarówno całokształtu, jak i poszczególnych systemów pojazdu. Jest to najwyżej punktowana konkurencja statyczna, którą oceniają eksperci z branży motoryzacyjnej."
              />
              <FlipCard
                height={"h-56 md:h-80"}
                src="/images/FS/business.png"
                title="Business Plan Presentation"
                text="Konkurencja, podczas której Członkowie Zespołu wcielają się w rolę zarządu start-upu, przykładowo tworzonych na zamówienie hamulców. Za pomocą dziesięciominutowej prezentacji mają za zadanie przekonać sędziów odgrywających inwestorów do wsparcia ich modelu biznesowego."
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FSAbout;

interface FlipCardProps {
  text: string;
  src: string;
  title: string;
  height: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ text, src, title, height }) => {
  return (
    <div className={`flip-card ${height} relative rounded-md`}>
      <div className="flip-card-inner">
        <div className="flip-card-front relative w-full h-full">
          <Image src={src} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="flip-card-back absolute inset-0 z-20 flex flex-col justify-center items-center gap-4 rounded-md p-8 bg-neutral-200">
          <Title color="black" size="small">
            {title}
          </Title>
          <Text extrasmall>{text}</Text>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className=" group relative h-80 rounded-md overflow-hidden">
  <Image src="/images/FS/cost.png" alt="skidpad" fill />

  <div className="absolute inset-0 bg-neutral-700 opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out"></div>
  <div className="absolute scale-x-0 group-hover:scale-x-100 opacity-0 group-hover:opacity-100 flex inset-0 gap-8 flex-col justify-center items-center text-white transition-all duration-300 ease-in-out">
    {/* <Title size="medium">Business Plan Presentation</Title>
    <div className="relative py-4">
      <span className=" h-[1px] bg-customRed scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left block absolute top-0 left-0 right-0"></span>
      <Text>
        Konkurencja, podczas której Członkowie Zespołu wcielają się w rolę
        zarządu start-upu, przykładowo tworzonych na zamówienie hamulców. Za
        pomocą dziesięciominutowej prezentacji mają za zadanie przekonać sędziów
        odgrywających inwestorów do wsparcia ich modelu biznesowego.
      </Text>
      <span className=" h-[1px] bg-customRed scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left block absolute bottom-0 left-0 right-0"></span>
    </div>
  </div>
</div>; */
}
