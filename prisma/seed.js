const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bolidData = [
  { name: "RT14e", acceleration: "???", power: "???", mass: "???" },
];

async function main() {
  for (const bolid of bolidData) {
    await prisma.bolid.update({
      where: { name: bolid.name },
      data: {
        acceleration: bolid.acceleration,
        power: bolid.power,
        mass: bolid.mass,
      },
    });
  }

  console.log(`Updated bolid data.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
