"use client";

import React from "react";
import Title from "@/app/components/Title";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

const NewsControls = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
      <Title color="black">AKTUALNOŚCI</Title>
      <div className="flex gap-4 w-full md:w-2/5">
        <Button
          label="Zostań partnerem"
          onClick={() => router.push(`/partners/joinus`)}
        />
        <Button
          outline
          label="Kontakt"
          onClick={() => router.push(`/kontakt`)}
        />
      </div>
    </div>
  );
};

export default NewsControls;
