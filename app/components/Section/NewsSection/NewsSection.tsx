'use client';

import News from "./News";
import NewsSeubsection from "./NewsSubsection";
import Container from "../../Container";
import Title from "../../Title";
import Button from "../../Button";

const NewsSection = () => {
  return (
    <div id="section-news" className="">
      <Container>
        <div className=" w-full pt-12">
          <div className="w-full flex justify-between">
            <Title color="black" >AKTUALNOŚCI</Title>
            <div className="flex gap-4 w-2/5">
              <Button
                label='Zostań partnerem'
                onClick={() => {}}
              />
              <Button
                outline
                label='Kontakt'
                onClick={() => {}}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 my-10 relative border-none">
            <News article='1' category="Współpraca" title="Premiera RT13E"></News>
            <News article='2' category="WSPÓŁPRACA" title="Współpraca z Kafuland"></News>
            <News article='3' category="Współpraca" title="Współpraca z Mitutoyo"></News>
            <News article='4' category="Materiały" title="Laminowanie RT12E"></News>
            <News article='5' category="Kategoria 5" title="Tytuł 5"></News>
            <News article='6' category="WYDZARZENIA" title="PWR RACING TEAM - 11. ZESPOŁEM NA ŚWIECIE"></News>
          </div>
        </div>
      </Container>
      <NewsSeubsection/>
    </div>
  );
};

export default NewsSection;