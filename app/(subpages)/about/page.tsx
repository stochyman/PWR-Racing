import HistorySection from "@/app/components/Section/HistorySection/HistorySection";
import GarageAbout from "./GarabeAbout";
import HeroAbout from "./HeroAbout";
import NavAbout from "./NavAbout";

const AboutUs = () => {
  return (
    <div className="">
      <HeroAbout />
      <NavAbout />
      <GarageAbout />
      <HistorySection aboutUs />
    </div>
  );
};

export default AboutUs;
