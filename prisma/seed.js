//? npx prisma db seed
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const updateMany = await prisma.bolid.updateMany({
    data: {
      acceleration: "4s",
      mass: "240 KG",
      power: "2 x 47 KW",
    },
  });

  console.log(`Updated ${updateMany.count} bolids.`);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
