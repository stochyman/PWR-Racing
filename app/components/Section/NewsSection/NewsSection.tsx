"use client";

import News from "./News";
import NewsSeubsection from "./NewsSubsection";
import Container from "../../Container";
import Title from "../../Title";
import Button from "../../Button";
import { useRouter } from "next/navigation";

const NewsSection = () => {
  const router = useRouter();
  return (
    <div id="section-news" className=" flex flex-col">
      <Container>
        <div className="w-[75rem] pt-12">
          <div className=" flex flex-col md:flex-row items-center gap-4 justify-between">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 relative border-none"></div>
        </div>
      </Container>
      <NewsSeubsection />
    </div>
  );
};

export default NewsSection;
