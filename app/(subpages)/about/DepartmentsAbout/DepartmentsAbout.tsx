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
    "mechanical",
    "composites",
    "marketing",
    "software",
    "electrical",
    "vehicle performance",
    "infrastructure",
    "drivers",
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
                <div>
                  <Button
                    black
                    icon={IoStatsChartOutline}
                    label="VEHICLE PERFORMANCE"
                    onClick={() => handleScrollToSection("vehicle performance")}
                  />
                </div>
                <div>
                  <Button
                    black
                    icon={FaWrench}
                    label="INFRASTRUCTURE"
                    onClick={() => handleScrollToSection("infrastructure")}
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
              key={department}
              department={department}
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
