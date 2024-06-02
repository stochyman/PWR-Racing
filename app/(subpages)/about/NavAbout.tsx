"use client";

import Container from "@/app/components/Container";
import Text from "@/app/components/Text";
import Image from "next/image";

const NavAbout = () => {
  return (
    <div className="pt-[40rem] bg-black">
      <div className="relative bg-white">
        <Container>
          <div className="w-full">
            <ul className="flex justify-center md:justify-start my-4 mb-8">
              <NavAboutItem scrollToId="garage-section">Garaż</NavAboutItem>
              <NavAboutItem scrollToId="history-section">
                Historia Zespołu
              </NavAboutItem>
              <NavAboutItem scrollToId="department-section">
                Nasze działy
              </NavAboutItem>
              <NavAboutItem scrollToId="formulastudent-section">
                Formula Student
              </NavAboutItem>
            </ul>
            <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-20 mt-0 md:mt-12">
              <div className="relative md:w-2/5 h-[20rem] md:h-auto">
                <Image
                  className=""
                  src="/images/joinus/photo1.png"
                  alt="bolid"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center 20%"
                />
              </div>
              <div className="md:w-3/5 flex flex-col gap-8">
                <Text color="black" bold>
                  PWR Racing Team to Strategiczne Koło Naukowe Politechniki
                  Wrocławskiej, a zarazem najstarszy i najbardziej utytułowany
                  Zespół wyścigowy Formuły Student w Polsce. Od 2009 roku grupa
                  ok. 80 studentów i studentek wrocławskich uczelni co roku
                  konstruuje bolidy i startuje nimi w prestiżowych zawodach
                  inżynierskich odbywających się na całym świecie. Największym
                  sukcesem PWR Racing Teamu jest wygranie całej edycji zawodów,
                  co miało miejsce Formula SAE Italy w 2017 roku. Było to
                  pierwsze zwycięstwo polskiego Zespołu Formuły Student w
                  historii.
                </Text>
                <Text color="black">
                  Na przestrzeni swojej działalności Zespół skonstruował 12
                  bolidów spalinowych, które zdobywały czołowe miejsca w
                  zawodach Formuły Student w całej Europie i na świecie.
                  Podążając za zmianami w branży motoryzacyjnej, PWR Racing Team
                  podjął nowe wyzwanie i rozpoczął budowę konstrukcji
                  napędzanych elektrycznych. Członkowie Zespołu dokonali zmiany
                  napędu w zaledwie jeden rok. Ponadto w tym samym czasie
                  stworzono zestaw rozwiązań pozwalający na jazdę autonomiczną.
                  Rozpoczynając nową erę, w 2022 roku powstał pierwszy bolid
                  elektryczny z systemami jazdy autonomicznej — RT12e. Obecnie
                  Zespół pracuje nad 3 konstrukcją tego typu — RT14e.
                </Text>
                <Text color="black">
                  Zaprojektowanie i konstrukcja bolidu klasy Formuła Student to
                  zaawansowany, interdyscyplinarny projekt inżynierski,
                  pozwalający rozwinąć się młodym inżynierom i menedżerom.
                  Wymaga ogromu zaangażowania ze strony Zespołu, co przekłada
                  się na tysiące godzin, które Członkowie spędzają w warsztacie,
                  rozwijając projekt oraz wykonując swoje części. Konstrukcja
                  pojazdu jest możliwa dzięki wsparciu Politechniki
                  Wrocławskiej, Miasta Wrocław, Fundacji Manus, a także ponad
                  120 partnerów — firm i instytucji z całej Europy.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavAbout;

interface NavAboutItemProps {
  children: React.ReactNode;
  scrollToId: string;
}

const NavAboutItem: React.FC<NavAboutItemProps> = ({
  children,
  scrollToId,
}) => {
  const handleScroll = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const element = document.getElementById(scrollToId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li className="first:pl-0 p-2 md:p-8 min-w-fit">
      <button
        type="button"
        className="w-full text-left hover:text-customRed cursor-pointer duration-300 ease-in-out"
        onClick={handleScroll}
      >
        <Text bold>{children}</Text>
      </button>
    </li>
  );
};
