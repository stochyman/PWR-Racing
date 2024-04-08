'use client';

import Button from "@/app/components/Button";
import { FaEnvelope } from "react-icons/fa";


const ClientSideInteractionComponent = () => {
  const handleClick = () => {
    // Logika obsługi kliknięcia
  };

  return (
    <Button label="Napisz do mnie!" onClick={handleClick} icon={FaEnvelope} />
  );
};

export default ClientSideInteractionComponent;