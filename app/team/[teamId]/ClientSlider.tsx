'use client';

import { useRouter } from "next/navigation";
import Slider from "@/app/components/Section/BolidSection/Slider";

interface ParamsParamsClientSlider {
  teamId: string;
}
const ClientSlider: React.FC<ParamsParamsClientSlider> = ({teamId}) => {
  const router = useRouter();

  const handleRedirect = (bolid: string) => {
    router.push(`/team/${bolid}`);
  };

  return (
    <Slider currentBolid={teamId} darkMode onChangeBolid={handleRedirect}></Slider>
  );
};

export default ClientSlider;