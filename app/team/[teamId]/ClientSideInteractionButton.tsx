'use client'
import { useRouter } from "next/navigation";
import Button from "../../components/Button";
import { FaEnvelope } from "react-icons/fa";

const ClientSideInteractionButton = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/team/RT12e');
  };

  return (
    <div>
      <Button label="Napisz do mnie!" onClick={handleRedirect} icon={FaEnvelope} />
    </div>
  );
};

export default ClientSideInteractionButton;