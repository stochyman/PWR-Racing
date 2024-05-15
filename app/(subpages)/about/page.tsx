import HistorySection from "@/app/components/Section/HistorySection/HistorySection";
import GarageAbout from "./GarabeAbout";
import HeroAbout from "./HeroAbout";
import NavAbout from "./NavAbout";
import JoinusSection from "@/app/components/Section/JoinusSection/JoinusSection";
import SponsorsSection from "@/app/components/Section/SponsorsSection/SponsorsSection";
import DepartmentsAbout from "./DepartmentsAbout/DepartmentsAbout";
import FSSection from "@/app/components/Section/FSSection/FSSection";
import FSAbout from "./FSAbout";

const AboutUs = () => {
  return (
    <div className="">
      <HeroAbout />
      <NavAbout />
      <GarageAbout />
      <HistorySection aboutUs />
      <DepartmentsAbout />
      <FSSection aboutUs />
      <FSAbout />
      <SponsorsSection />
      <JoinusSection />
    </div>
  );
};

export default AboutUs;
