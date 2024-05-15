// pages/about-us.jsx
import Container from "@/app/components/Container";
import NewsCard from "@/app/components/NewsCard";
import { fetchNews } from "@/app/actions/getNews";

const AboutUs = async () => {
  const news = await fetchNews();
  console.log(news);
  return (
    <div className="pt-[120px] bg-neutral-900">
      <Container>
        <div className="my-6 grid grid-cols-3 gap-6 w-full">
          {news.map((item, index) => (
            <NewsCard
              key={index}
              title={item.title}
              short_description={item.short_description}
              length_time={item.length_time}
              logo={item.logo || "/images/logo.png"}
              main_image={item.main_image}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
