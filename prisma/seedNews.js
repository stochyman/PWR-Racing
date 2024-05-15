// node prisma/seedNews.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const newsArray = [
    {
      title: "TestWspółpraca z firmą XYZ",
      short_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis a ut dolor delectus id debitis...",
      length_time: 10,
      logo: "/images/logo.png",
      main_image: "/images/news/news1.png",
      content: [
        {
          text: "Pierwszy akapit treści dla współpracy z firmą XYZ. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          text: "Drugi akapit treści dla współpracy z firmą XYZ. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
        },
      ],
    },
  ];

  for (let newsData of newsArray) {
    await prisma.news.create({
      data: newsData,
    });
    console.log(`News added: ${newsData.title}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
