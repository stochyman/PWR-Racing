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
        <div className=" pt-12">
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
            <News department='1'></News>
            <News department='2'></News>
            <News department='3'></News>
            <News department='4'></News>
            <News department='5'></News>
            <News department='6'></News>
          </div>
        </div>
      </Container>
      <NewsSeubsection/>
    </div>
  );
};

export default NewsSection;