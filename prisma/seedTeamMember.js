const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const teamMembersData = [
    {
      name: "dr",
      surname: "hab. inż. Damian Derlukiewicz",
      roles: [
        {
          department: "opiekun naukowy",
          role: "Opiekun Naukowy",
          bolidName: "RT14e",
        },
        {
          department: "opiekun naukowy",
          role: "Opiekun Naukowy",
          bolidName: "RT13e",
        },
        {
          department: "opiekun naukowy",
          role: "Opiekun Naukowy",
          bolidName: "RT11b",
        },
      ],
    },
  ];

  for (const memberData of Object.values(teamMembersData)) {
    await prisma.teamMember.create({
      data: memberData,
    });
  }

  console.log("Dodano członków zespołu z rolami");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally;
