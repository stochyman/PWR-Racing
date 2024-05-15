import ClientOnly from "./components/ClientOnly";
import HeroSection from "./components/Section/HeroSection/HeroSection";
import DepartmentsSubsection from "./components/Section/DepartmentsSubsection/DepartmentsSubsection";
import BolidSection from "./components/Section/BolidSection/BolidSection";
import FSSection from "./components/Section/FSSection/FSSection";
import TeamSection from "./components/Section/TeamSection/TeamSection";
import HistorySection from "./components/Section/HistorySection/HistorySection";
import JoinusSection from "./components/Section/JoinusSection/JoinusSection";
import SponsorsSection from "./components/Section/SponsorsSection/SponsorsSection";
import NewsSection from "./components/Section/NewsSection/NewsSection";

export default function Home() {
  return (
    <ClientOnly>
      <div className="">
        <HeroSection />
        <DepartmentsSubsection />
        <BolidSection />
        <FSSection />
        <TeamSection />
        <HistorySection />
        <JoinusSection />
        <SponsorsSection />
        <NewsSection />
      </div>
    </ClientOnly>
  );
}

{
  /* <div className="absolute flex h-full w-full justify-center items-center bg-black">
      <div className="flex flex-col items-center">
        <Image
          src='/images/logo.png'
          alt='PWR Racing Logo'
          width={300}
          height={50}
          className="mb-4"
        />
      </div>
    </div> */
}
