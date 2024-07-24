import Container from "@/app/components/Container";
import Title from "@/app/components/Title";
import DepartmentElement from "./DepartmentElement";
import Button from "@/app/components/Button";
import { IoSettings } from "react-icons/io5";
import { FaCube } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { IoStatsChartOutline } from "react-icons/io5";
import { FaWrench } from "react-icons/fa";

type DepartmentsAboutProps = {
  lightMode?: boolean;
};

const DepartmentsAbout: React.FC<DepartmentsAboutProps> = ({ lightMode }) => {
  const departments = [
    {
      name: "mechanical",
      description:
        "Dział zajmuje się projektowaniem i budową układu zawieszenia. Odpowiada również za elementy autonomicznego układu kierowniczego, hamulcowego, części mocowania czy struktury metalowe w monocoque.",
      responsibilities: [
        {
          text: "projektowaniem i budową układu zawieszenia",
          icon: "plik.svg",
        },
        {
          text: "projektowaniem i budową elementów autonomicznego układu kierowniczego",
          icon: "kolo.svg",
        },
        {
          text: "projektowaniem i budową układu hamulcowego",
          icon: "klucz.svg",
        },
        {
          text: "projektowaniem części mocowania i struktury metalowej w monocoque",
          icon: "box.svg",
        },
      ],
    },
    {
      name: "composites",
      description:
        "Dział odpowiada za własnoręczne wykonanie wszystkich elementów kompozytowych obecnych na bolidzie. Poczynając od największego elementu, czyli struktury nośnej, poprzez pakiet aerodynamiczny kończąc na ergonomii kierowcy oraz struktury ochronnej na baterię wysokiego napięcia.",
      responsibilities: [
        {
          text: "modelowaniem elementów kompozytowych w programach CAD",
          icon: "plik.svg",
        },
        {
          text: "symulacjami wytrzymałościowymi oraz optymalizacją struktur kompozytowych",
          icon: "kolo.svg",
        },
        { text: "symulacjami CFD pakietu aerodynamicznego", icon: "klucz.svg" },
        {
          text: "wykonaniem oraz badaniami wytrzymałościowymi elementów kompozytowych",
          icon: "box.svg",
        },
      ],
    },
    {
      name: "marketing",
      description:
        "Dział zajmujący się wizerunkiem, promocją Zespołu, a także logistyką i organizacją wydarzeń. Ponadto odpowiada za przygotowanie konkurencji statycznych na zawody Formuły Student, takich jak prezentacja biznesowa.",
      responsibilities: [
        { text: "tworzeniem materiałów promocyjnych", icon: "plik.svg" },
        { text: "przygotowaniem prezentacji biznesowych", icon: "kolo.svg" },
        {
          text: "koordynacją zamówień, analizą danych, optymalizacją pracy Zespołu",
          icon: "klucz.svg",
        },
        { text: "organizacją wydarzeń", icon: "box.svg" },
      ],
    },
    {
      name: "software",
      description:
        "Dział zajmujący się rozwojem systemu autonomicznego oraz programowaniem mikroprocesorów sterujących interfejsem kierowcy, hamowaniem lub skręcaniem pojazdu. Odpowiada za działanie systemów planowania trasy, kontroli pojazdu czy percepcji, gdy w bolidzie nie znajduje się kierowca. Oprogramowanie pisane jest w takich językach programowania, jak C, C++, czy Python.",
      responsibilities: [
        {
          text: "opracowywaniem algorytmów usprawniających jazdę autonomiczną",
          icon: "plik.svg",
        },
        { text: "rozwojem systemów embedded", icon: "kolo.svg" },
      ],
    },
    {
      name: "electrical",
      description:
        "Dział zajmujący się projektowaniem płytek PCB, tworzeniem wiązek wysokiego i niskiego napięcia oraz budową autorskiej baterii wysokiego napięcia.",
      responsibilities: [
        { text: "projektowaniem i wykonawstwem płytek PCB", icon: "plik.svg" },
        {
          text: "projektowaniem w programach CAD oraz wykonawstwem wiązki niskiego oraz wysokiego napięcia zgodnych ze standardami motor sportowymi",
          icon: "kolo.svg",
        },
        {
          text: "modelowaniem obudów na elektronikę w programach CAD",
          icon: "klucz.svg",
        },
        {
          text: "projektowaniem oraz wykonawstwem baterii wysokiego napięcia",
          icon: "box.svg",
        },
        {
          text: "symulacjami termicznymi elektroniki oraz baterii",
          icon: "plik.svg",
        },
        { text: "projektowaniem magistrali CAN", icon: "kolo.svg" },
      ],
    },
    {
      name: "vehicle performance",
      description:
        "Dział zajmujący się maksymalizacją osiągów pojazdu, kinematyką i dynamiką pojazdu, akwizycją danych, układem napędowym oraz organizacją testów.",
      responsibilities: [
        { text: "Symulacjami dynamiki pojazdu", icon: "plik.svg" },
        {
          text: "Projektowaniem oraz rozwojem układu napędowego",
          icon: "kolo.svg",
        },
        { text: "Analizą danych z przejazdów", icon: "klucz.svg" },
      ],
    },
  ];

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="department-section" className="relative bg-white">
      {!lightMode ? (
        <div className="ml-8 md:ml-[calc((100vw-var(--container-width))/2)] mb-4 md:mb-6">
          <Title color="black">NASZE DZIAŁY</Title>
        </div>
      ) : (
        <div className="mt-12 mb-6 text-center flex flex-col gap-6 ">
          <Title color="black">JAKI DZIAŁ CIĘ INTERESUJE?</Title>
          <div className="w-full">
            <Container>
              <div className="flex flex-row gap-4 w-full flex-wrap justify-center flex-1">
                <div>
                  <Button
                    black
                    icon={IoSettings}
                    label="MECHANICAL"
                    onClick={() => handleScrollToSection("mechanical")}
                  />
                </div>
                <div>
                  <Button
                    black
                    icon={FaCube}
                    label="COMPOSITES"
                    onClick={() => handleScrollToSection("composites")}
                  />
                </div>
                <div>
                  <Button
                    black
                    icon={FaBullhorn}
                    label="MARKETING"
                    onClick={() => handleScrollToSection("marketing")}
                  />
                </div>
                <div>
                  <Button
                    black
                    icon={FaLaptopCode}
                    label="SOFTWARE"
                    onClick={() => handleScrollToSection("software")}
                  />
                </div>
                <div>
                  <Button
                    black
                    icon={FaBolt}
                    label="ELECTRICAL"
                    onClick={() => handleScrollToSection("electrical")}
                  />
                </div>
              </div>
            </Container>
          </div>
        </div>
      )}
      <div className="w-full">
        <div className="flex flex-col">
          {departments.map((department, index) => (
            <DepartmentElement
              key={department.name}
              department={department.name}
              responsibilities={department.responsibilities}
              text={department.description}
              index={index}
              lightMode={lightMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentsAbout;
