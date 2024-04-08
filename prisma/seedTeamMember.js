const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// node prisma/seedTeamMember.js

async function main() {
  await prisma.teamMember.create({
    data: {
      name: 'Jan',
      surname: 'Kowalskii',
      roles: [
        {
          department: 'software',
          role: 'mechaniczny ziomek',
          bolidName: 'RT13e',
        },
        {
          department: 'software',
          role: 'młody test',
          bolidName: 'RT12e',
        },
        {
          department: 'marketing',
          role: 'mechanik',
          bolidName: 'RT11b',
        },
      ],
    },
  });

  console.log('Dodano członka zespołu z rolami');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
