const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const teamMembersData = [
    {
      name: "michał",
      surname: "sroka",
      roles: [
        {
          department: "marketing",
          role: "Fotograf",
          bolidName: "RT14e",
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
