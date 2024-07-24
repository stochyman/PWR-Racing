"use client";

import Container from "@/app/components/Container";
import DepartmentsAbout from "../about/DepartmentsAbout/DepartmentsAbout";
import Title from "@/app/components/Title";
import Button from "@/app/components/Button";
import Text from "@/app/components/Text";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  // Define the props for your component here
}

const JoinUs: React.FC<Props> = () => {
  const router = useRouter();

  return (
    <div className="pt-[120px]">
      <div className="absolute opacity-5 right-0">
        <h1 className="text-[15rem] font-extrabold text-black uppercase leading-none">
          REKRUTACJA
        </h1>
      </div>
      <Container>
        <div className="w-full flex flex-col items-center mt-16">
          <div className="mb-24 py-4 my-4 border-b-2 w-3/5 border-black text-center">
            <Title color="black">ZOSTAŃ CZŁONKIEM</Title>
          </div>
          <Timer targetDate="2024-10-30T00:00:00" />
          <div className="my-16 flex gap-4 w-1/3">
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
        </div>
      </Container>
      <DepartmentsAbout lightMode />
    </div>
  );
};

export default JoinUs;

interface TimerProps {
  targetDate: string;
}

const Timer: React.FC<TimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center gap-4">
      <Text wide small>
        NASTĘPNA REKRUTACJA ROZPOCZNIE SIĘ ZA:
      </Text>
      <div className="flex gap-4">
        <div className="flex flex-col text-center">
          <Title lower size="bigger" color="red">
            {timeLeft.days}
          </Title>
          <Title lower size="subtitle" color="red">
            DNI
          </Title>
        </div>
        <Title lower size="bigger" color="red">
          :
        </Title>
        <div className="flex flex-col text-center">
          <Title lower size="bigger" color="red">
            {timeLeft.hours}
          </Title>
          <Title lower size="subtitle" color="red">
            GODZIN
          </Title>
        </div>
        <Title lower size="bigger" color="red">
          :
        </Title>
        <div className="flex flex-col text-center">
          <Title lower size="bigger" color="red">
            {timeLeft.minutes}
          </Title>
          <Title lower size="subtitle" color="red">
            MINUT
          </Title>
        </div>
        <Title lower size="bigger" color="red">
          :
        </Title>
        <div className="flex flex-col text-center">
          <Title lower size="bigger" color="red">
            {timeLeft.seconds}
          </Title>
          <Title lower size="subtitle" color="red">
            SEKUND
          </Title>
        </div>
      </div>
    </div>
  );
};
