import Container from "@/app/components/Container";
import Title from "@/app/components/Title";
import DepartmentElement from "./DepartmentElement";

const DepartmentsAbout: React.FC = () => {
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

  return (
    <div id="department-section" className="relative bg-white">
      <div className="ml-[calc((100vw-var(--container-width))/2)] mb-6">
        <Title color="black">NASZE DZIAŁY</Title>
      </div>
      <div className="w-full">
        <div className="flex flex-col">
          {departments.map((department, index) => (
            <DepartmentElement
              key={department}
              department={department}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentsAbout;
