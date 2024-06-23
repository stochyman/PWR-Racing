"use client";

import Container from "@/app/components/Container";
import Title from "@/app/components/Title";
import Button from "@/app/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Tablica sponsorów strategicznych
const strategicSponsors = [
  { name: "innowacje.png", url: "https://www.gov.pl/web/edukacja" },
  { name: "pwr.png", url: "https://pwr.edu.pl" },
  { name: "manus.png", url: "https://manus.pl" },
  { name: "wydzial_mechaniczny.png", url: "https://wm.pwr.edu.pl/" },
];

const platinumSponsors = [
  { name: "3d expert.jpg", url: "https://3d-expert.pl/" },
  { name: "3designlab.png", url: "https://3designlab.pl/" },
  { name: "3m.png", url: "https://www.3mpolska.pl/3M/pl_PL/firma-pl/" },
  { name: "apex one.png", url: "https://apexone.pl/" },
  { name: "atlas ward.png", url: "https://atlasward.pl/" },
  { name: "astromal.png", url: "https://astromal.pl/" },
  { name: "betis.png", url: "" },
  { name: "content.jpg", url: "https://www.lapp.com/pl/pl/PLN/" },
  { name: "ellagro.png", url: "http://el-agro.pl/" },
  { name: "endego.jpg", url: "https://endego.com/pl/" },
  {
    name: "fanuc.jpg",
    url: "https://www.fanuc.eu/pl/pl?gad_source=1&gclid=Cj0KCQjwj9-zBhDyARIsAERjds0vZ-AdUK6tbuY9tFhBFlKjg323nGPseM-z6mF96YXZ8RJVH6Hp9TEaAnANEALw_wcB",
  },
  { name: "hexlogo_black_png.png", url: "https://www.hexcel.com/" },
  { name: "investa.png", url: "https://www.investa.pl/" },
  { name: "kisssoft.jpg", url: "https://www.kisssoft.com/en" },
  { name: "komag.png", url: "https://komag.eu/" },
  { name: "Logo_MAN.png", url: "https://www.man.eu/pl/pl/strona-glowna.html" },
  {
    name: "konrad composite technology.png",
    url: "https://aleo.com/pl/firma/piotr-konrad-hajduki-nyskie",
  },
  { name: "logo tor krzywa.png", url: "https://torkrzywa.com/" },
  { name: "logo_amkmotion rgb.png", url: "https://www.amk-motion.com/en/" },
  {
    name: "MovellaTM Logo 1C PMS 171 Orange.png",
    url: "https://www.movella.com/applications/automation-mobility",
  },
  { name: "mahle.png", url: "https://www.pl.mahle.com/pl/" },
  { name: "mibm.png", url: "https://mibm.pl/" },
  { name: "premium solutions.png", url: "https://premiumsolutions.pl/" },
  {
    name: "pts waś_logo2023.jpg",
    url: "https://www.was.eu/?gad_source=1&gclid=Cj0KCQjwj9-zBhDyARIsAERjds0lhK-KCC0bZtcfvXqOMsCyknlfES8eysmWfn2BKaNBDikBmDPLXRQaAm_QEALw_wcB",
  },
  { name: "radiotechnika marketing.png", url: "http://radiotechnika.com.pl/" },
  { name: "siemens.png", url: "https://www.siemens.com/pl/pl.html" },
  {
    name: "speedgoat.png",
    url: "https://www.speedgoat.com/?utm_adgroup=%20&utm_term=%20&utm_content=%20&utm_source=google&utm_medium=cpc&device=c&utm_campaign=17749558443&gad_source=1&gclid=Cj0KCQjwj9-zBhDyARIsAERjds2YbyCYm5dSunlvZT-QypZjXGldVeD6FLP9pXgj4JSJGPKgqtIwhuMaAmZEEALw_wcB",
  },
  {
    name: "staubli.png",
    url: "https://www.speedgoat.com/?utm_adgroup=%20&utm_term=%20&utm_content=%20&utm_source=google&utm_medium=cpc&device=c&utm_campaign=17749558443&gad_source=1&gclid=Cj0KCQjwj9-zBhDyARIsAERjds2YbyCYm5dSunlvZT-QypZjXGldVeD6FLP9pXgj4JSJGPKgqtIwhuMaAmZEEALw_wcB",
  },
  { name: "top1karting_logo_rgb.svg", url: "https://top1karting.pl/" },
  {
    name: "wolften.jpg",
    url: "https://wolften.pl/pl/?gad_source=1&gclid=Cj0KCQjwj9-zBhDyARIsAERjds1OzvDOFGnD4jQcjVa_iI1GWNkXZgQqFz5XU0IFdlc3ORePnVQGjRMaAmUEEALw_wcB",
  },
  {
    name: "zkz gears.png",
    url: "https://wolften.pl/pl/?gad_source=1&gclid=Cj0KCQjwj9-zBhDyARIsAERjds1OzvDOFGnD4jQcjVa_iI1GWNkXZgQqFz5XU0IFdlc3ORePnVQGjRMaAmUEEALw_wcB",
  },
];

const goldSponsors = [
  {
    name: "adbl.png",
    url: "https://mrcleaner.pl/adbl?gad_source=1&gclid=Cj0KCQjwj9-zBhDyARIsAERjds2B2ymMf1jIOp64dd0Serpc8uAtsPXk7RSW8EZWZDiGyOqSGvhyMlAaAqHFEALw_wcB",
  },
  { name: "airtech.png", url: "https://airtech.info.pl/" },
  { name: "filipowicz pawel.png", url: "https://www.pfpcnc.pl/" },
  { name: "avl.svg", url: "https://www.pfpcnc.pl/" },
  { name: "ams świdnica.png", url: "https://ams-at.eu/" },
  { name: "anodal.png", url: "anodal" },
  { name: "astar.png", url: "https://astar.pl/" },
  { name: "bosch.png", url: "https://www.bosch.pl/" },
  { name: "ctc-logo-mit-airbus-line.png", url: "https://ctcoperators.eu/" },
  {
    name: "computer controls.jpg",
    url: "https://www.ccontrols.pl/pl_pl/?utm_term=computer%20controls&utm_campaign=4P+-+Wyszukiwarka+-+Brand+-+PL&utm_source=adwords&utm_medium=ppc&hsa_acc=5776325502&hsa_cam=1748560941&hsa_grp=75287601584&hsa_ad=539317009618&hsa_src=g&hsa_tgt=kwd-311144365331&hsa_kw=computer%20controls&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjwj9-zBhDyARIsAERjds0xUeQm0g1a8hBpirS6YIs2AOKA3sZHQDU7LeztdhwZMP-YO0y7vI8aAkPSEALw_wcB",
  },
  { name: "czekała.png", url: "https://wagi-czekala.pl/" },
  { name: "eurocircuits.jpg", url: "https://www.eurocircuits.com/" },
  { name: "ELMAR_logo_www_duze_red.png", url: "https://www.elmar-bhp.pl/" },
  { name: "indasa.jpg", url: "https://indasa.sklep.pl/" },
  { name: "inkarbo.jpg", url: "https://www.inkarbo.com/" },
  { name: "inter-metal.png", url: "https://inter-metal.pl/pl/witamy/" },
  { name: "kaufland.png", url: "https://www.kaufland.pl/" },
  { name: "lange .png", url: "https://langelukaszuk.pl/" },
  { name: "quay.png", url: "https://www.quay.pl/" },
  { name: "mitutoyo.png", url: "https://mitutoyo.pl/pl_pl" },
  { name: "ntn-snr.png", url: "https://www.ntn-snr.com/pl" },
  { name: "polak modele i prototypy.png", url: "https://modeleiprototypy.pl/" },
  { name: "protoplastic.png", url: "https://protoplastic.pl/" },
  { name: "rs.png", url: "https://pl.rs-online.com/web/" },
  { name: "schaeffler.png", url: "https://www.schaeffler.pl/pl/" },
  { name: "tenneco logo finalrgb.png", url: "https://www.tenneco.com/" },
  { name: "vector.png", url: "https://www.vector.katowice.pl/pl/Home" },
  { name: "Wolfratech_Logo.png", url: "http://www.wolfratech.pl/" },
  { name: "WAMTECHNIK_Logo_NeutralBlack-1.png", url: "https://wamtechnik.pl/" },
];

const silverSponsors = [
  { name: "ataszek.png", url: "https://ataszek.pl/" },
  { name: "logo-AMA-PROFIL-COREL-_2_.png", url: "https://www.amaprofil.pl/" },
  { name: "auto zatoka.jpg", url: "https://www.auto-zatoka.pl/" },
  { name: "boellhoff-logo.svg", url: "https://www.boellhoff.com/pl-pl/" },
  { name: "chem trend.png", url: "https://www.boellhoff.com/pl-pl/" },
  { name: "czupryna car.png", url: "http://czupryna.eu/" },
  { name: "cnc jurczak.png", url: "https://cncjurczak.pl/" },
  { name: "LOGO-nowe 2019.png", url: "https://www.perrot.de/pl/" },
  {
    name: "dewrap.png",
    url: "https://www.facebook.com/p/DeWrap-100063967515424/",
  },
  { name: "hellermanntyton.jpg", url: "https://www.hellermanntyton.pl/" },
  { name: "jusky.png", url: "https://jusky.pl/" },
  { name: "logo_branson.png", url: "" },
  { name: "logo_wichuworkshop.jpg", url: "https://www.wichuworkshop.pl/" },
  { name: "Logo_NewTechnology (1).png", url: "https://www.new-tec.pl/" },
  { name: "IEWC-Logo.png", url: "https://www.iewc.com/" },
  { name: "smart one.png", url: "https://smart-one.com.pl/" },
  {
    name: "sonel.png",
    url: "https://www.tim.pl/podglad/promocje/cenowe/Bestsellery-TIM.pl-30-lecie-Sonel----Czerwiec-2024?gad_source=1&gclid=Cj0KCQjwj9-zBhDyARIsAERjds07NIfmlAwkQdOgoI3P570JTndJvO3wDXRazrj1VXSTmqeJsuP8K20aAoNEEALw_wcB",
  },
  { name: "stelweld.png", url: "https://www.stelweld.com.pl/" },
  { name: "tadex_logo_black.svg", url: "https://tadex.com.pl/" },
  { name: "wo bit.png", url: "https://wobit.com.pl/" },
  { name: "wimarol.jpg", url: "https://wimarol.com.pl/" },
];

const bronzeSponsors = [
  { name: "3dconnexion.png", url: "https://3dconnexion.com/pl/" },
  {
    name: "adi-logo-cmyk-solid.jpg",
    url: "https://www.analog.com/en/index.html",
  },
  { name: "bl elektronik.png", url: "https://www.blelektronik.com.pl/" },
  { name: "centrum przyczep.png", url: "" },
  { name: "Easy Composites.png", url: "https://www.easycomposites.co.uk/" },
  { name: "elgerta.png", url: "https://elgerta.com/pl/" },
  { name: "logo_cnc71.png", url: "https://cnc71.com/pl/index" },
  { name: "daga.png", url: "https://daga.pl/" },
  { name: "dremat.png", url: "https://dermet.pl/" },
  {
    name: "hexagon.png",
    url: "https://hexagon.com/pl/company/divisions/manufacturing-intelligence",
  },
  { name: "elesa+ganter.jpg", url: "https://www.elesa-ganter.pl/pl/pol" },
  { name: "hamaton.png", url: "https://www.hamaton-tpms.com/" },
  { name: "logo_konmet-eu.jpg", url: "https://www.konmet.eu/pl/" },
  { name: "gthr.png", url: "https://gthr.pl/" },
  { name: "infineon.png", url: "https://www.infineon.com/" },
  {
    name: "lincoln electric.png",
    url: "https://www.lincolnelectric.com/pl-pl",
  },
  {
    name: "logo_igus.png",
    url: "https://www.igus.pl/?gad_source=1&gclid=Cj0KCQjwj9-zBhDyARIsAERjds1DukXj1aZ6EKEc6W2IDWFlbU5CQH6nICAaE7w-_jqRtA3idxXtMA8aArlnEALw_wcB",
  },
  { name: "milar.png", url: "https://www.milar.pl/" },
  { name: "miwa.png", url: "https://www.miwa.net.pl/" },
  { name: "nc-tech.png", url: "https://www.miwa.net.pl/" },
  { name: "N-POL cutting tools.png", url: "https://www.npol.com.pl/" },
  { name: "metalpol.png", url: "https://metalpol.com/" },
  { name: "oberon.png", url: "http://www.oberon.pl/" },
  { name: "pagero.png", url: "https://pagero.pl/" },
  { name: "power rubber.webp", url: "https://powerrubber.com/" },
  {
    name: "petrobaza.png",
    url: "https://www.petrostar.pl/?gad_source=1&gclid=Cj0KCQjwj9-zBhDyARIsAERjds391hGjkg9Xx2ldtLU181oYFl0sVdo1lvhE2dMtq32yTAlSvOGPSpsaAk3jEALw_wcB",
  },
  { name: "opony express.png", url: "https://oponyexpress.pl/?cl=pl" },
  { name: "logo renex pl RED.svg", url: "https://www.renex.pl/" },
  { name: "solvec.png", url: "https://solvec.pl/" },
  {
    name: "st-microelectronic.png",
    url: "https://www.st.com/content/st_com/en.html",
  },
  { name: "texas instruments.png", url: "https://www.ti.com/" },
  { name: "ubierz ekipe.png", url: "https://ubierzekipe.pl/" },
  {
    name: "unisystem-slogan-logo_unisystem-slogan-logo.svg",
    url: "https://www.iis.u-tokyo.ac.jp/en/about/slogan/",
  },
];

interface SponsorGridProps {
  sponsorRank: string;
  gridCols: string;
  height: string;
  gap?: string;
  sponsors: Array<{ name: string; url: string }>;
}

const SponsorList: React.FC<SponsorGridProps> = ({
  sponsorRank,
  gridCols,
  height,
  sponsors,
}) => (
  <div className={`grid ${gridCols} gap-2 h-min md:w-1/2`}>
    {sponsors.map((sponsor) => (
      <a
        key={sponsor.name}
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${height} relative mx-6 rounded-md overflow-hidden duration-300 ease-in-out hover:scale-110`}
      >
        <Image
          src={`/images/sponsors/${sponsor.name}`}
          alt={sponsor.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-scale-down"
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
      <div className="py-4 my-4 md:my-12 md:mt-14 border-y-2 md:w-fit px-8 border-customRed uppercase">
        <Title color="black">PARTNERZY {sponsorRank}</Title>
      </div>
      <div className={`flex ${gap} flex-col md:flex-row w-full`}>
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

const Partners = () => {
  const router = useRouter();
  return (
    <div className=" pt-[100px] md:pt-[120px] mb-6 md:mb-12">
      <div className="absolute opacity-5 right-0">
        <h1 className="text-[15rem] font-extrabold text-black uppercase leading-none">
          PARTNERZY
        </h1>
      </div>
      <Container>
        <div className="flex flex-col items-center text-center w-full">
          <div className="py-4 my-4 border-b-2 md:w-3/5 border-black">
            <Title color="black">PARTNERZY</Title>
          </div>
          <div className="my-8 flex gap-4 md:w-1/3">
            <Button
              label="Zostań Partnerem"
              onClick={() => router.push(`/partners/joinus`)}
            />
            <Button
              outline
              label="Kontakt"
              onClick={() => router.push(`/contact`)}
            />
          </div>

          <SponsorGrid
            sponsorRank="strategiczni"
            sponsors={strategicSponsors}
            height="h-20 md:h-40"
            gap="gap-0"
            gridCols="grid-cols-2"
          />

          <SponsorGrid
            sponsorRank="platynowi"
            sponsors={platinumSponsors}
            height="h-20 md:h-40"
            gap="md:gap-20"
            gridCols="grid-cols-2"
          />

          <SponsorGrid
            sponsorRank="złoci"
            sponsors={goldSponsors}
            height="h-16 md:h-36"
            gap="md:gap-20"
            gridCols="grid-cols-3"
          />

          <SponsorGrid
            sponsorRank="srebrni"
            sponsors={silverSponsors}
            height="h-16 md:h-32"
            gap="md:gap-16"
            gridCols="grid-cols-3 md:grid-cols-4"
          />

          <SponsorGrid
            sponsorRank="brązowi"
            sponsors={bronzeSponsors}
            height="h-16 md:h-32"
            gap="md:gap-16"
            gridCols="grid-cols-3 md:grid-cols-4"
          />
        </div>
      </Container>
    </div>
  );
};

export default Partners;
