const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const membersToUpdate = [
    { name: "Paweł", surname: "Wójcik" },
    { name: "Igor", surname: "Wawrzyniak" },
    { name: "Jakub", surname: "Drzewiecki" },
    { name: "Jakub", surname: "Piętowski" },
    { name: "Kacper", surname: "Śliwa" },
    { name: "Maksymilian", surname: "Kamiński" },
    { name: "Rafał", surname: "Dziki" },
    { name: "Maksymilian", surname: "Musiał" },
  ];

  for (const member of membersToUpdate) {
    const existingMember = await prisma.teamMember.findFirst({
      where: {
        name: { equals: member.name, mode: "insensitive" },
        surname: { equals: member.surname, mode: "insensitive" },
      },
    });

    if (existingMember) {
      await prisma.teamMember.update({
        where: { id: existingMember.id },
        data: {
          roles: {
            push: {
              department: "drivers",
              role: "kierowca",
              bolidName: "RT14e",
            },
          },
        },
      });
      console.log(`Updated roles for ${member.name} ${member.surname}`);
    } else {
      console.log(`Member ${member.name} ${member.surname} not found`);
    }
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
