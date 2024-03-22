'use client';

import News from "./News";
import NewsSeubsection from "./NewsSubsection";
import Container from "../../Container";

const NewsSection = () => {
  return (
    <div>
        <div className="grid grid-cols-3 relative border-none">
          <News department='1'></News>
          <News department='2'></News>
          <News department='3'></News>
          <News department='4'></News>
          <News department='5'></News>
          <News department='6'></News>
        </div>
      <NewsSeubsection/>
    </div>
  );
};

export default NewsSection;