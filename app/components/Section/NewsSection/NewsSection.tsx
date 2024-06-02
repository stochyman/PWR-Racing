import Container from "../../Container";
import NewsCard from "@/app/components/NewsCard";
import { fetchFiveNews } from "@/app/actions/getFiveNews";
import dynamic from "next/dynamic";
import NewsControls from "./NewsControls";

// Dynamiczne importowanie komponentu NewsControls, ponieważ jest to komponent kliencki
// const NewsControls = dynamic(() => import("./NewsControls"), {
//   ssr: false,
// });

const NewsSection = async () => {
  const news = await fetchFiveNews();

  return (
    <div id="section-news" className="flex flex-col">
      <Container>
        <div className="w-[75rem] pt-12">
          <NewsControls />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10 relative border-none">
            {news.map((item, index) => (
              <NewsCard
                whiteMode
                key={index}
                title={item.title}
                short_description={item.short_description}
                length_time={item.length_time}
                logo={item.logo || "/images/logo-czarne.svg"}
                main_image={item.main_image}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsSection;
