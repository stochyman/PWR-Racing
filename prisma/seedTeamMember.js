// node prisma/seedTeamMember.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const teamMembersData = {
    "Wojciech Moranowicz": {
      name: "Wojciech",
      surname: "Moranowicz",
      roles: [{ department: "MNG", role: "Lider Zespołu", bolidName: "RT13e" }],
    },
    "Przemysław Wójcik": {
      name: "Przemysław",
      surname: "Wójcik",
      roles: [
        { department: "MNG", role: "Lider Techniczny", bolidName: "RT13e" },
      ],
    },
    "Zuzanna Ignaszak": {
      name: "Zuzanna",
      surname: "Ignaszak",
      roles: [
        { department: "MKT", role: "Liderka Marketingu", bolidName: "RT13e" },
      ],
    },
    "Karolina Wasiukiewicz": {
      name: "Karolina",
      surname: "Wasiukiewicz",
      roles: [
        { department: "MKT", role: "Social Media Manager", bolidName: "RT13e" },
      ],
    },
    "Iga Friedrich": {
      name: "Iga",
      surname: "Friedrich",
      roles: [
        {
          department: "MKT",
          role: "Social Media Manager, Cost & Manufacturing Leader",
          bolidName: "RT13e",
        },
      ],
    },
    "Mikołaj Wrzeszcz": {
      name: "Mikołaj",
      surname: "Wrzeszcz",
      roles: [{ department: "MKT", role: "Grafik", bolidName: "RT13e" }],
    },
    "Łukasz Mika": {
      name: "Łukasz",
      surname: "Mika",
      roles: [{ department: "MKT", role: "Videographer", bolidName: "RT13e" }],
    },
    "Karol Cieślawski": {
      name: "Karol",
      surname: "Cieślawski",
      roles: [{ department: "MKT", role: "Fotograf", bolidName: "RT13e" }],
    },
    "Patryk Palenga": {
      name: "Patryk",
      surname: "Palenga",
      roles: [
        {
          department: "MKT",
          role: "Prezentacja Biznesowa",
          bolidName: "RT13e",
        },
      ],
    },
    "Jakub Kucharski": {
      name: "Jakub",
      surname: "Kucharski",
      roles: [
        {
          department: "MKT",
          role: "Prezentacja Biznesowa",
          bolidName: "RT13e",
        },
      ],
    },
    "Hanna Szebesczyk": {
      name: "Hanna",
      surname: "Szebesczyk",
      roles: [
        {
          department: "COMP",
          role: "LIDER DZIAŁU COMPOSITES",
          bolidName: "RT13e",
        },
      ],
    },
    "Marcin Bawołek": {
      name: "Marcin",
      surname: "Bawołek",
      roles: [
        {
          department: "COMP",
          role: "KONSTRUKTOR TYLNEGO SKRZYDŁA",
          bolidName: "RT13e",
        },
      ],
    },
    "Ewa Glenc": {
      name: "Ewa",
      surname: "Glenc",
      roles: [
        {
          department: "COMP",
          role: "KONSTRUKTOR ERGONOMII KIEROWCY",
          bolidName: "RT13e",
        },
      ],
    },
    "Aleksander Maciątek": {
      name: "Aleksander",
      surname: "Maciątek",
      roles: [
        {
          department: "COMP",
          role: "KONSTRUKTOR UKŁADU CHŁODZENIA BATERII",
          bolidName: "RT13e",
        },
      ],
    },
    "Gabriela Morel": {
      name: "Gabriela",
      surname: "Morel",
      roles: [
        {
          department: "COMP",
          role: "KONSTRUKTOR INSERTÓW I RDZENI",
          bolidName: "RT13e",
        },
      ],
    },
    "Dawid Pępkowski": {
      name: "Dawid",
      surname: "Pępkowski",
      roles: [
        {
          department: "COMP",
          role: "PROJEKTANT POZYTYWÓW I FORM",
          bolidName: "RT13e",
        },
      ],
    },
    "Michał Romanowski": {
      name: "Michał",
      surname: "Romanowski",
      roles: [
        {
          department: "COMP",
          role: "KONSTRUKTOR MONOCOQUE",
          bolidName: "RT13e",
        },
        { department: "DRIVERS", role: "undefined", bolidName: "RT13e" },
      ],
    },
    "Jakub Ruchała": {
      name: "Jakub",
      surname: "Ruchała",
      roles: [
        {
          department: "COMP",
          role: "KONSTRUKTOR TYLNEGO SKRZYDŁA",
          bolidName: "RT13e",
        },
      ],
    },
    "Mateusz Sikorski": {
      name: "Mateusz",
      surname: "Sikorski",
      roles: [
        {
          department: "COMP",
          role: "KONSTRUKTOR SEKCJI BOCZNYCH",
          bolidName: "RT13e",
        },
        { department: "DRIVERS", role: "undefined", bolidName: "RT13e" },
      ],
    },
    "Adam Strojny": {
      name: "Adam",
      surname: "Strojny",
      roles: [
        {
          department: "COMP",
          role: "KONSTRUKTOR SEKCJI BOCZNYCH",
          bolidName: "RT13e",
        },
      ],
    },
    "Miłosz Swół": {
      name: "Miłosz",
      surname: "Swół",
      roles: [
        {
          department: "COMP",
          role: "KONSTRUKTOR MONOCOQUE",
          bolidName: "RT13e",
        },
      ],
    },
    "Przemysław Szczepański": {
      name: "Przemysław",
      surname: "Szczepański",
      roles: [
        {
          department: "COMP",
          role: "KONSTRUKTOR PRZEDNIEGO SKRZYDŁA",
          bolidName: "RT13e",
        },
      ],
    },
    "Wojciech Żuberek": {
      name: "Wojciech",
      surname: "Żuberek",
      roles: [
        {
          department: "COMP",
          role: "KONSTRUKTOR PRZEDNIEGO SKRZYDŁA",
          bolidName: "RT13e",
        },
      ],
    },
    "Szymon Kosakowski": {
      name: "Szymon",
      surname: "Kosakowski",
      roles: [
        {
          department: "SOFT",
          role: "LIDER DZIAŁU SOFTWARE",
          bolidName: "RT13e",
        },
      ],
    },
    "Aleksandra Birut": {
      name: "Aleksandra",
      surname: "Birut",
      roles: [
        { department: "SOFT", role: "ESTYMACJA RUCHU", bolidName: "RT13e" },
      ],
    },
    "Jakub Drzewiecki": {
      name: "Jakub",
      surname: "Drzewiecki",
      roles: [
        {
          department: "SOFT",
          role: "PROGRAMISTA SYSTEMU AUTONOMICZNEGO",
          bolidName: "RT13e",
        },
      ],
    },
    "Arkadiusz Gaweł": {
      name: "Arkadiusz",
      surname: "Gaweł",
      roles: [
        {
          department: "SOFT",
          role: "PROGRAMISTA TELEMETRII",
          bolidName: "RT13e",
        },
      ],
    },
    "Łukasz Michalski": {
      name: "Łukasz",
      surname: "Michalski",
      roles: [
        { department: "SOFT", role: "PLANOWANIE TRASY", bolidName: "RT13e" },
      ],
    },
    "Franciszek Plisz": {
      name: "Franciszek",
      surname: "Plisz",
      roles: [
        {
          department: "SOFT",
          role: "CZŁONEK DZIAŁU SOFTWARE",
          bolidName: "RT13e",
        },
      ],
    },
    "Wojciech Rymer": {
      name: "Wojciech",
      surname: "Rymer",
      roles: [
        {
          department: "SOFT",
          role: "PROGRAMISTA PERCEPCJI LIDARU",
          bolidName: "RT13e",
        },
      ],
    },
    "Maciej Stachurski": {
      name: "Maciej",
      surname: "Stachurski",
      roles: [
        { department: "SOFT", role: "WALIDACJA DANYCH", bolidName: "RT13e" },
      ],
    },
    "Maciej Bobak": {
      name: "Maciej",
      surname: "Bobak",
      roles: [
        {
          department: "ELE",
          role: "LIDER DZIAŁU ELECTRICAL",
          bolidName: "RT13e",
        },
      ],
    },
    "Michał Dynak": {
      name: "Michał",
      surname: "Dynak",
      roles: [
        {
          department: "ELE",
          role: "PROJEKTANT ELEKTRONIKI",
          bolidName: "RT13e",
        },
      ],
    },
    "Karol Radosz": {
      name: "Karol",
      surname: "Radosz",
      roles: [
        {
          department: "ELE",
          role: "KONSTRUKTOR WIĄZKI WYSOKIEGO NAPIĘCIA",
          bolidName: "RT13e",
        },
      ],
    },
    "Antoni Radzimowski": {
      name: "Antoni",
      surname: "Radzimowski",
      roles: [
        {
          department: "ELE",
          role: "PROJEKTANT ELEKTRONIKI",
          bolidName: "RT13e",
        },
      ],
    },
    "Damian Sazon": {
      name: "Damian",
      surname: "Sazon",
      roles: [
        {
          department: "ELE",
          role: "KONSTRUKTOR WIĄZKI NISKIEGO NAPIĘCIA",
          bolidName: "RT13e",
        },
      ],
    },
    "Piotr Siembab": {
      name: "Piotr",
      surname: "Siembab",
      roles: [
        {
          department: "ELE",
          role: "PROJEKTANT ELEKTRONIKI",
          bolidName: "RT13e",
        },
      ],
    },
    "Kacper Śliwa": {
      name: "Kacper",
      surname: "Śliwa",
      roles: [
        {
          department: "ELE",
          role: "KONSTRUKTOR BATERII WYSOKIEGO NAPIĘCIA",
          bolidName: "RT13e",
        },
      ],
    },
    "Kacper Sowiński": {
      name: "Kacper",
      surname: "Sowiński",
      roles: [
        {
          department: "ELE",
          role: "KONSTRUKTOR WIĄZKI NISKIEGO NAPIĘCIA",
          bolidName: "RT13e",
        },
      ],
    },
    "Michał Twardochleb": {
      name: "Michał",
      surname: "Twardochleb",
      roles: [
        {
          department: "ELE",
          role: "MENADŻER PROJEKTU BATERII WYSOKIEGO NAPIĘCIA",
          bolidName: "RT13e",
        },
      ],
    },
    "Igor Wawrzyniak": {
      name: "Igor",
      surname: "Wawrzyniak",
      roles: [
        {
          department: "MECH",
          role: "LIDER DZIAŁU MECHANICAL",
          bolidName: "RT13e",
        },
        { department: "DRIVERS", role: "undefined", bolidName: "RT13e" },
      ],
    },
    "Aleksander Wieczorek": {
      name: "Aleksander",
      surname: "Wieczorek",
      roles: [
        {
          department: "MECH",
          role: "KONSTRUKTOR PRZEKŁADNI KIEROWNICZEJ",
          bolidName: "RT13e",
        },
      ],
    },
    "Bartosz Sobczak": {
      name: "Bartosz",
      surname: "Sobczak",
      roles: [
        {
          department: "MECH",
          role: "KONSTRUKTOR AUTONOMICZNEGO UKŁADU HAMULCOWEGO",
          bolidName: "RT13e",
        },
      ],
    },
    "Jakub Piętowski": {
      name: "Jakub",
      surname: "Piętowski",
      roles: [
        {
          department: "MECH",
          role: "KONSTRUKTOR AUTONOMICZNEGO UKŁADU KIEROWNICZEGO",
          bolidName: "RT13e",
        },
      ],
    },
    "Jan Konior": {
      name: "Jan",
      surname: "Konior",
      roles: [
        {
          department: "MECH",
          role: "KONTRUKTOR PEDALIERY",
          bolidName: "RT13e",
        },
      ],
    },
    "Julian Wach": {
      name: "Julian",
      surname: "Wach",
      roles: [
        { department: "MECH", role: "KONSTRUKTOR ARB", bolidName: "RT13e" },
      ],
    },
    "Marcin Posmyk": {
      name: "Marcin",
      surname: "Posmyk",
      roles: [
        {
          department: "MECH",
          role: "KONSTRUKTOR KLATKI W MONOCOQUE",
          bolidName: "RT13e",
        },
      ],
    },
    "Michał Wieczorek": {
      name: "Michał",
      surname: "Wieczorek",
      roles: [
        {
          department: "MECH",
          role: "KONSTRUKTOR UKŁADU HAMULCOWEGO",
          bolidName: "RT13e",
        },
      ],
    },
    "Patryk Kołtun": {
      name: "Patryk",
      surname: "Kołtun",
      roles: [
        {
          department: "MECH",
          role: "KONSTRUKTOR MONOCOQUE",
          bolidName: "RT13e",
        },
      ],
    },
    "Piotr Warło": {
      name: "Piotr",
      surname: "Warło",
      roles: [
        {
          department: "MECH",
          role: "KONSTRUKTOR MONOCOQUE",
          bolidName: "RT13e",
        },
      ],
    },
    "Maksymilian Musiał": {
      name: "Maksymilian",
      surname: "Musiał",
      roles: [
        { department: "MECH", role: "KONSTRUKTOR WAHACZY", bolidName: "RT13e" },
        {
          department: "WORKSHOP",
          role: "KOORDYNATOR DS. INFRASTUKTURY WARSZTATOWEJ",
          bolidName: "RT13e",
        },
        { department: "DRIVERS", role: "undefined", bolidName: "RT13e" },
      ],
    },
    "Paweł Wójcik": {
      name: "Paweł",
      surname: "Wójcik",
      roles: [
        {
          department: "VP",
          role: "LIDER DZIAŁU VEHICLE PERFORMANCE",
          bolidName: "RT13e",
        },
        { department: "DRIVERS", role: "undefined", bolidName: "RT13e" },
      ],
    },
    "Rafał Dziki": {
      name: "Rafał",
      surname: "Dziki",
      roles: [
        {
          department: "VP",
          role: "SYSTEM STERUJĄCY POJAZDEM",
          bolidName: "RT13e",
        },
      ],
    },
    "Bartosz Gburczyk": {
      name: "Bartosz",
      surname: "Gburczyk",
      roles: [{ department: "VP", role: "ANALIZA DANYCH", bolidName: "RT13e" }],
    },
    "Paweł Mordwa": {
      name: "Paweł",
      surname: "Mordwa",
      roles: [
        {
          department: "VP",
          role: "SYSTEM WEKTOROWANIA MOMENTU OBROTOWEGO",
          bolidName: "RT13e",
        },
      ],
    },
    "Jakub Myszka": {
      name: "Jakub",
      surname: "Myszka",
      roles: [
        { department: "VP", role: "DYNAMIKA POJAZDU", bolidName: "RT13e" },
      ],
    },
    "Dominik Pachecki": {
      name: "Dominik",
      surname: "Pachecki",
      roles: [
        { department: "VP", role: "SYMULOWANIE OPON", bolidName: "RT13e" },
      ],
    },
    "Bartłomiej Płoszyński": {
      name: "Bartłomiej",
      surname: "Płoszyński",
      roles: [
        { department: "VP", role: "KINEMATYKA POJAZDU", bolidName: "RT13e" },
      ],
    },
    "Jakub Stankowski": {
      name: "Jakub",
      surname: "Stankowski",
      roles: [
        { department: "VP", role: "PRZYRZĄDY POMIAROWE", bolidName: "RT13e" },
      ],
    },
    "Krzysztof Gajewski": {
      name: "Krzysztof",
      surname: "Gajewski",
      roles: [
        {
          department: "WORKSHOP",
          role: "KOORDYNATOR DS. INFRASTUKTURY WARSZTATOWEJ",
          bolidName: "RT13e",
        },
      ],
    },
  };

  for (const memberData of Object.values(teamMembersData)) {
    await prisma.teamMember.create({
      data: memberData,
    });
  }

  console.log("Dodano członków zespołu z rolami");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
