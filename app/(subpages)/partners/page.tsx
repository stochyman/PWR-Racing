"use client";

import Container from "@/app/components/Container";
import Title from "@/app/components/Title";
import Button from "@/app/components/Button";
import Image from "next/image";

// Tablica sponsorów strategicznych
const strategicSponsors = [
  { name: "innowacje.png", url: "https://www.gov.pl/web/edukacja" },
  { name: "pwr.png", url: "https://pwr.edu.pl" },
  { name: "manus.png", url: "https://manus.pl" },
  { name: "wydzial_mechaniczny.png", url: "https://wm.pwr.edu.pl/" },
];

const platinumSponsors = [
  { name: "3d expert.jpg", url: "https://spline.design.pl" },
  { name: "3designlab.png", url: "https://3designlab.pl" },
  { name: "3m.png", url: "https://3m.pl" },
  { name: "apex one.png", url: "https://apexone.pl" },
  { name: "astromal.png", url: "https://astromal.pl" },
  { name: "betis.png", url: "https://betis.pl" },
  { name: "content.jpg", url: "https://content.pl" },
  { name: "ellagro.png", url: "https://ellagro.pl" },
  { name: "endego.jpg", url: "https://endego.pl" },
  { name: "fanuc.jpg", url: "https://fanuc.pl" },
  { name: "hexlogo_black_png.png", url: "https://hexlogo_black_png.pl" },
  { name: "kisssoft.jpg", url: "https://kisssoft.pl" },
  { name: "logo tor krzywa.png", url: "https://logo tor krzywa.pl" },
  { name: "logo_amkmotion rgb.png", url: "https://logo_amkmotion rgb.pl" },
  { name: "mahle.png", url: "https://mahle.pl" },
  { name: "mibm.png", url: "https://mibm.pl" },
  { name: "ntn-snr.png", url: "https://ntn-snr.pl" },
  { name: "premium solutions.png", url: "https://premium solutions.pl" },
  { name: "pts waś_logo2023.jpg", url: "https://pts waś_logo2023.pl" },
  {
    name: "radiotechnika marketing.png",
    url: "https://radiotechnika marketing.pl",
  },
  { name: "schaeffler.png", url: "https://schaeffler.pl" },
  { name: "siemens.png", url: "https://siemens.pl" },
  { name: "staubli.png", url: "https://staubli.pl" },
  { name: "top1karting_logo_rgb.svg", url: "https://top1karting_logo_rgb.pl" },
  { name: "wolften.jpg", url: "https://wolften.pl" },
  { name: "zkz gears.png", url: "https://zkz gears.pl" },
];

const goldSponsors = [
  { name: "airtech.png", url: "https://airtech.pl" },
  { name: "ams świdnica.png", url: "https://ams świdnica.pl" },
  { name: "anodal.png", url: "https://anodal.pl" },
  { name: "astar.png", url: "https://astar.pl" },
  { name: "bosch.png", url: "https://bosch.pl" },
  {
    name: "ctc-logo-mit-airbus-line.png",
    url: "https://ctc-logo-mit-airbus-line.pl",
  },
  { name: "czekała.png", url: "https://czekała.pl" },
  { name: "indasa.jpg", url: "https://indasa.pl" },
  { name: "inkarbo.jpg", url: "https://inkarbo.pl" },
  { name: "inter-metal.png", url: "https://inter-metal.pl" },
  { name: "jusky.png", url: "https://jusky.pl" },
  { name: "kaufland.png", url: "https://kaufland.pl" },
  { name: "logo_cnc71.png", url: "https://logo_cnc71.pl" },
  { name: "mitutoyo.png", url: "https://mitutoyo.pl" },
  {
    name: "polak modele i prototypy.png",
    url: "https://polak modele i prototypy.pl",
  },
  { name: "protoplastic.png", url: "https://protoplastic.pl" },
  { name: "rs.png", url: "https://rs.pl" },
  { name: "speedgoat.png", url: "https://speedgoat.pl" },
  {
    name: "tenneco logo finalrgb.png",
    url: "https://tenneco logo finalrgb.pl",
  },
  { name: "vector.png", url: "https://vector.pl" },
];

const silverSponsors = [
  { name: "ataszek.png", url: "https://ataszek.pl" },
  { name: "auto zatoka.jpg", url: "https://auto zatoka.pl" },
  { name: "boellhoff-logo.svg", url: "https://boellhoff-logo.pl" },
  { name: "chem trend.png", url: "https://chem trend.pl" },
  { name: "cnc jurczak.png", url: "https://cnc jurczak.pl" },
  { name: "computer controls.jpg", url: "https://computer controls.pl" },
  { name: "dewrap.png", url: "https://dewrap.pl" },
  { name: "hellermanntyton.jpg", url: "https://hellermanntyton.pl" },
  { name: "logo_branson.png", url: "https://logo_branson.pl" },
  { name: "logo_wichuworkshop.jpg", url: "https://logo_wichuworkshop.pl" },
  { name: "smart one.png", url: "https://smart one.pl" },
  { name: "stelweld.png", url: "https://stelweld.pl" },
  { name: "tadex_logo_black.svg", url: "https://tadex_logo_black.pl" },
  { name: "wo bit.png", url: "https://wo bit.pl" },
];

const bronzeSponsors = [
  { name: "3dconnexion.png", url: "https://3dconnexion.pl" },
  { name: "adi-logo-cmyk-solid.jpg", url: "https://adi-logo-cmyk-solid.pl" },
  { name: "bl elektronik.png", url: "https://bl elektronik.pl" },
  { name: "centrum przyczep.png", url: "https://centrum przyczep.pl" },
  { name: "daga.webp", url: "https://daga.pl" },
  { name: "ec engineering.png", url: "https://ec engineering.pl" },
  { name: "elesa+ganter.jpg", url: "https://elesa+ganter.pl" },
  { name: "hamaton.png", url: "https://hamaton.pl" },
  { name: "infineon.png", url: "https://infineon.pl" },
  { name: "lincoln electric.png", url: "https://lincoln electric.pl" },
  { name: "logo_igus.png", url: "https://logo_igus.pl" },
  { name: "milar.png", url: "https://milar.pl" },
  { name: "miwa.png", url: "https://miwa.pl" },
  { name: "oberon.png", url: "https://oberon.pl" },
  { name: "pagero.png", url: "https://pagero.pl" },
  { name: "power rubber.webp", url: "https://power rubber.pl" },
  { name: "solvec.png", url: "https://solvec.pl" },
  { name: "st-microelectronic.png", url: "https://st-microelectronic.pl" },
  { name: "texas instruments.png", url: "https://texas instruments.pl" },
  { name: "ubierz ekipe.png", url: "https://ubierz ekipe.pl" },
  {
    name: "unisystem-slogan-logo_unisystem-slogan-logo.svg",
    url: "https://unisystem-slogan-logo_unisystem-slogan-logo.pl",
  },
];

interface SponsorGridProps {
  sponsorRank: string;
  gridCols: string;
  height: string;
  gap: string;
  sponsors: Array<{ name: string; url: string }>;
}

const SponsorList: React.FC<SponsorGridProps> = ({
  sponsorRank,
  height,
  sponsors,
  gridCols,
}) => (
  <div className={`grid ${gridCols} h-min w-1/2`}>
    {sponsors.map((sponsor) => (
      <a
        key={sponsor.name}
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${height} relative mx-6 rounded-md overflow-hidden duration-300 ease-in-out hover:scale-110`}
      >
        <Image
          src={`/images/sponsors/${sponsorRank}/${sponsor.name}`}
          alt={sponsor.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          style={{ objectFit: "contain" }}
        />
      </a>
    ))}
  </div>
);

const SponsorGrid: React.FC<SponsorGridProps> = ({
  sponsorRank,
  gridCols,
  height,
  gap,
  sponsors,
}) => {
  // Dynamically split the sponsors array into two halves inside the component
  const halfIndex = Math.ceil(sponsors.length / 2);
  const firstHalfSponsors = sponsors.slice(0, halfIndex);
  const secondHalfSponsors = sponsors.slice(halfIndex);

  return (
    <div className="w-full flex flex-col items-center text-center">
      <div className="py-4 my-12 mt-14 border-y-2 w-3/5 border-customRed uppercase">
        <Title color="black">PARTNERZY {sponsorRank}</Title>
      </div>
      <div className={`flex ${gap} w-full`}>
        <SponsorList
          sponsors={firstHalfSponsors}
          height={height}
          sponsorRank={sponsorRank}
          gridCols={gridCols}
        />
        <SponsorList
          sponsors={secondHalfSponsors}
          height={height}
          sponsorRank={sponsorRank}
          gridCols={gridCols}
        />
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="pt-[120px] mb-12">
      <div className="absolute opacity-5 right-0">
        <h1 className="text-[15rem] font-extrabold text-black uppercase leading-none">
          PARTNERZY
        </h1>
      </div>
      <Container>
        <div className="flex flex-col items-center text-center w-full">
          <div className="py-4 my-4 border-b-2 w-3/5 border-black">
            <Title color="black">PARTNERZY</Title>
          </div>
          <div className="my-8 flex gap-4 w-1/3">
            <Button label="Zostań Partnerem" onClick={() => {}} />
            <Button outline label="Kontakt" onClick={() => {}} />
          </div>

          <SponsorGrid
            sponsorRank="strategiczni"
            sponsors={strategicSponsors}
            height="h-40"
            gap=""
            gridCols="grid-cols-2"
          />

          <SponsorGrid
            sponsorRank="platynowi"
            sponsors={platinumSponsors}
            height="h-40"
            gap="gap-20"
            gridCols="grid-cols-2"
          />

          <SponsorGrid
            sponsorRank="złoci"
            sponsors={goldSponsors}
            height="h-36"
            gap="gap-20"
            gridCols="grid-cols-3"
          />

          <SponsorGrid
            sponsorRank="srebrni"
            sponsors={silverSponsors}
            height="h-32"
            gap="gap-16"
            gridCols="grid-cols-4"
          />

          <SponsorGrid
            sponsorRank="brązowi"
            sponsors={bronzeSponsors}
            height="h-32"
            gap="gap-16"
            gridCols="grid-cols-4"
          />
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
