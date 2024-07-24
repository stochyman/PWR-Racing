"use client";

import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

interface ButtonsSectionProps {
  dict: any;
}

const ButtonsSection: React.FC<ButtonsSectionProps> = ({ dict }) => {
  const router = useRouter();

  return (
    <div className="my-16 flex gap-4 w-1/3">
      <Button
        label={dict.becomePartner}
        onClick={() => router.push(`/partners/joinus`)}
      />
      <Button
        outline
        label={dict.contact}
        onClick={() => router.push(`/contact`)}
      />
    </div>
  );
};

export default ButtonsSection;
