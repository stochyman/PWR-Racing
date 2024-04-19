//? node prisma/seedTeamMember.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Mockowe dane dla 13 bolidów
  const bolidsData = new Array(14).fill(null).map((_, index) => ({
    name: `RT${14 - index}e`, // Numeracja od RT14e do RT1e
    year: (2024 - index).toString(), // Rok malejący o 1 dla każdego kolejnego bolidu
    short_description: `RT${index}e: Najnowszy projekt jest odpowiedzią zespołu na wyzwania i trendy branży automotive. Chcemy projektować rozwiązania i być częścią odbywającej się zmiany. Elektryfikacja i stworzenie systemów autonomicznych w bolidzie jest krokiem milowym w rozwoju zespołu. Pojazd wyposażony został w innowacyjne rozwiązania ze świata motorsportu. Wyróżniają go pełny monocoque, ważący zaledwie 24 kilogramy, autorskie silniki oraz wiązki elektryczne wysokiego i niskiego napięcia. System jazdy autonomicznej pozwala nam na startowanie nie tylko w kategorii elektrycznej, lecz także w kategorii driverless.`, // Skrócony opis
    acceleration: "4s",
    mass: "240 KG",
    power: "2 x 47 KW",
    parts: [], // Pusta tablica części, w rzeczywistych danych mogą być tutaj obiekty
  }));

  // Pętla dodająca bolidy do bazy danych
  for (const bolidData of bolidsData) {
    await prisma.bolid.create({
      data: bolidData,
    });
  }

  console.log(`Added ${bolidsData.length} bolids.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
