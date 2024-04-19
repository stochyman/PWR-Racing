const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const teamMembersData = [
    {
      name: "wojciech",
      surname: "moranowicz",
      roles: [
        { department: "management", role: "lider zespołu", bolidName: "RT13e" },
        {
          department: "management",
          role: "konstruktor wiązki przewodów wysokiego napięcia",
          bolidName: "RT12e",
        },
      ],
    },
    {
      name: "przemysław",
      surname: "wójcik",
      roles: [
        {
          department: "management",
          role: "lider techniczny",
          bolidName: "RT13e",
        },
        {
          department: "management",
          role: "konstruktor autonomicznego układu hamulcowego",
          bolidName: "RT12e",
        },
        {
          department: "management",
          role: "konstruktor automatycznego układu hamulcowego",
          bolidName: "RT11b",
        },
        {
          department: "management",
          role: "konstruktor autonomicznego układu kierowniczego",
          bolidName: "RTX",
        },
      ],
    },
    {
      name: "zuzanna",
      surname: "ignaszak",
      roles: [
        {
          department: "marketing",
          role: "liderka marketingu",
          bolidName: "RT13e",
        },
        {
          department: "marketing",
          role: "marketing associate",
          bolidName: "RT12e",
        },
      ],
    },
    {
      name: "karolina",
      surname: "wasiukiewicz",
      roles: [
        {
          department: "marketing",
          role: "social media manager",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "iga",
      surname: "friedrich",
      roles: [
        {
          department: "marketing",
          role: "social media manager, cost & manufacturing leader",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "mikołaj",
      surname: "wrzeszcz",
      roles: [{ department: "marketing", role: "grafik", bolidName: "RT13e" }],
    },
    {
      name: "łukasz",
      surname: "mika",
      roles: [
        { department: "marketing", role: "videographer", bolidName: "RT13e" },
      ],
    },
    {
      name: "karol",
      surname: "cieślawski",
      roles: [
        { department: "marketing", role: "fotograf", bolidName: "RT13e" },
      ],
    },
    {
      name: "patryk",
      surname: "palenga",
      roles: [
        {
          department: "marketing",
          role: "prezentacja biznesowa",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "jakub",
      surname: "kucharski",
      roles: [
        {
          department: "marketing",
          role: "prezentacja biznesowa",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "hanna",
      surname: "szebesczyk",
      roles: [
        {
          department: "composites",
          role: "lider działu composites",
          bolidName: "RT13e",
        },
        {
          department: "composites",
          role: "ergonomics constructor",
          bolidName: "RT12e",
        },
      ],
    },
    {
      name: "marcin",
      surname: "bawołek",
      roles: [
        {
          department: "composites",
          role: "konstruktor tylnego skrzydła",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "ewa",
      surname: "glenc",
      roles: [
        {
          department: "composites",
          role: "konstruktor ergonomii kierowcy",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "aleksander",
      surname: "maciątek",
      roles: [
        {
          department: "composites",
          role: "konstruktor układu chłodzenia baterii",
          bolidName: "RT13e",
        },
        {
          department: "composites",
          role: "brake ducts constructor",
          bolidName: "RT12e",
        },
      ],
    },
    {
      name: "gabriela",
      surname: "morel",
      roles: [
        {
          department: "composites",
          role: "konstruktor insertów i rdzeni",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "dawid",
      surname: "pępkowski",
      roles: [
        {
          department: "composites",
          role: "projektant pozytywów i form",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "michał",
      surname: "romanowski",
      roles: [
        {
          department: "composites",
          role: "konstruktor monocoque",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "jakub",
      surname: "ruchała",
      roles: [
        {
          department: "composites",
          role: "konstruktor tylnego skrzydła",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "mateusz",
      surname: "sikorski",
      roles: [
        {
          department: "composites",
          role: "konstruktor sekcji bocznych",
          bolidName: "RT13e",
        },
        {
          department: "composites",
          role: "aero cost leader; mono flap designer",
          bolidName: "RT12e",
        },
      ],
    },
    {
      name: "adam",
      surname: "strojny",
      roles: [
        {
          department: "composites",
          role: "konstruktor sekcji bocznych",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "miłosz",
      surname: "swół",
      roles: [
        {
          department: "composites",
          role: "konstruktor monocoque",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "przemysław",
      surname: "szczepański",
      roles: [
        {
          department: "composites",
          role: "konstruktor przedniego skrzydła",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "wojciech",
      surname: "żuberek",
      roles: [
        {
          department: "composites",
          role: "konstruktor przedniego skrzydła",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "szymon",
      surname: "kosakowski",
      roles: [
        {
          department: "software",
          role: "lider działu software",
          bolidName: "RT13e",
        },
        { department: "software", role: "percepcja", bolidName: "RT12e" },
      ],
    },
    {
      name: "aleksandra",
      surname: "birut",
      roles: [
        { department: "software", role: "estymacja ruchu", bolidName: "RT13e" },
        { department: "software", role: "motors designer", bolidName: "RT12e" },
        {
          department: "software",
          role: "powertrain member",
          bolidName: "RT11b",
        },
      ],
    },
    {
      name: "jakub",
      surname: "drzewiecki",
      roles: [
        {
          department: "software",
          role: "programista systemu autonomicznego",
          bolidName: "RT13e",
        },
        { department: "software", role: "kontrola ruchu", bolidName: "RT12e" },
      ],
    },
    {
      name: "arkadiusz",
      surname: "gaweł",
      roles: [
        {
          department: "software",
          role: "programista telemetrii",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "łukasz",
      surname: "michalski",
      roles: [
        {
          department: "software",
          role: "planowanie trasy",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "franciszek",
      surname: "plisz",
      roles: [
        {
          department: "software",
          role: "członek działu software",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "wojciech",
      surname: "rymer",
      roles: [
        {
          department: "software",
          role: "programista percepcji lidaru",
          bolidName: "RT13e",
        },
        {
          department: "software",
          role: "motion estimation",
          bolidName: "RT12e",
        },
      ],
    },
    {
      name: "maciej",
      surname: "stachurski",
      roles: [
        {
          department: "software",
          role: "walidacja danych",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "maciej",
      surname: "bobak",
      roles: [
        {
          department: "electrical",
          role: "lider działu electrical",
          bolidName: "RT13e",
        },
        {
          department: "electrical",
          role: "konstruktor autonomicznego układu sterowania",
          bolidName: "RT12e",
        },
        {
          department: "electrical",
          role: "tsal, assi, r2ds",
          bolidName: "RT11b",
        },
        { department: "electrical", role: "analiza danych", bolidName: "RTX" },
      ],
    },
    {
      name: "michał",
      surname: "dynak",
      roles: [
        {
          department: "electrical",
          role: "projektant elektroniki",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "karol",
      surname: "radosz",
      roles: [
        {
          department: "electrical",
          role: "konstruktor wiązki wysokiego napięcia",
          bolidName: "RT13e",
        },
        { department: "electrical", role: "high voltage", bolidName: "RT12e" },
      ],
    },
    {
      name: "antoni",
      surname: "radzimowski",
      roles: [
        {
          department: "electrical",
          role: "projektant elektroniki",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "damian",
      surname: "sazon",
      roles: [
        {
          department: "electrical",
          role: "konstruktor wiązki niskiego napięcia",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "piotr",
      surname: "siembab",
      roles: [
        {
          department: "electrical",
          role: "projektant elektroniki",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "kacper",
      surname: "śliwa",
      roles: [
        {
          department: "electrical",
          role: "konstruktor baterii wysokiego napięcia",
          bolidName: "RT13e",
        },
        { department: "electrical", role: "bateria", bolidName: "RT12e" },
      ],
    },
    {
      name: "kacper",
      surname: "sowiński",
      roles: [
        {
          department: "electrical",
          role: "konstruktor wiązki niskiego napięcia",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "michał",
      surname: "twardochleb",
      roles: [
        {
          department: "electrical",
          role: "menadżer projektu baterii wysokiego napięcia",
          bolidName: "RT13e",
        },
        {
          department: "electrical",
          role: "ts accumulator",
          bolidName: "RT12e",
        },
        { department: "electrical", role: "etc", bolidName: "RT11b" },
      ],
    },
    {
      name: "igor",
      surname: "wawrzyniak",
      roles: [
        {
          department: "mechanical",
          role: "lider działu mechanical",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "aleksander",
      surname: "wieczorek",
      roles: [
        {
          department: "mechanical",
          role: "konstruktor przekładni kierowniczej",
          bolidName: "RT13e",
        },
        {
          department: "mechanical",
          role: "przekładnia planerna",
          bolidName: "RT12e",
        },
        {
          department: "mechanical",
          role: "powertrain rookie",
          bolidName: "RT11b",
        },
      ],
    },
    {
      name: "bartosz",
      surname: "sobczak",
      roles: [
        {
          department: "mechanical",
          role: "konstruktor autonomicznego układu hamulcowego",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "jakub",
      surname: "piętowski",
      roles: [
        {
          department: "mechanical",
          role: "konstruktor autonomicznego układu kierowniczego",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "jan",
      surname: "konior",
      roles: [
        {
          department: "mechanical",
          role: "kontruktor pedaliery",
          bolidName: "RT13e",
        },
        { department: "mechanical", role: "pedalbox", bolidName: "RT12e" },
        {
          department: "mechanical",
          role: "pachoł (tak ma wpisane na slacku)",
          bolidName: "RT11b",
        },
      ],
    },
    {
      name: "julian",
      surname: "wach",
      roles: [
        {
          department: "mechanical",
          role: "konstruktor arb",
          bolidName: "RT13e",
        },
        {
          department: "mechanical",
          role: "arb constructor",
          bolidName: "RT12e",
        },
        {
          department: "mechanical",
          role: "vehicle dynamics",
          bolidName: "RT11b",
        },
      ],
    },
    {
      name: "marcin",
      surname: "posmyk",
      roles: [
        {
          department: "mechanical",
          role: "konstruktor klatki w monocoque",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "michał",
      surname: "wieczorek",
      roles: [
        {
          department: "mechanical",
          role: "konstruktor układu hamulcowego",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "patryk",
      surname: "kołtun",
      roles: [
        {
          department: "mechanical",
          role: "konstruktor monocoque",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "piotr",
      surname: "warło",
      roles: [
        {
          department: "mechanical",
          role: "konstruktor monocoque",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "maksymilian",
      surname: "musiał",
      roles: [
        {
          department: "mechanical",
          role: "konstruktor wahaczy",
          bolidName: "RT13e",
        },
        {
          department: "mechanical",
          role: "wahacze i układ kierowniczy",
          bolidName: "RT12e",
        },
        { department: "mechanical", role: "wahacze", bolidName: "RT11b" },
      ],
    },
    {
      name: "paweł",
      surname: "wójcik",
      roles: [
        {
          department: "vehicle performance",
          role: "lider działu vehicle performance",
          bolidName: "RT13e",
        },
        {
          department: "vehicle performance",
          role: "torque vectoring developer",
          bolidName: "RT12e",
        },
      ],
    },
    {
      name: "rafał",
      surname: "dziki",
      roles: [
        {
          department: "vehicle performance",
          role: "system sterujący pojazdem",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "bartosz",
      surname: "gburczyk",
      roles: [
        {
          department: "vehicle performance",
          role: "analiza danych",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "paweł",
      surname: "mordwa",
      roles: [
        {
          department: "vehicle performance",
          role: "system wektorowania momentu obrotowego",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "jakub",
      surname: "myszka",
      roles: [
        {
          department: "vehicle performance",
          role: "dynamika pojazdu",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "dominik",
      surname: "pachecki",
      roles: [
        {
          department: "vehicle performance",
          role: "symulowanie opon",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "bartłomiej",
      surname: "płoszyński",
      roles: [
        {
          department: "vehicle performance",
          role: "kinematyka pojazdu",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "jakub",
      surname: "stankowski",
      roles: [
        {
          department: "vehicle performance",
          role: "przyrządy pomiarowe",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "maksymilian",
      surname: "musiał",
      roles: [
        {
          department: "workshop",
          role: "koordynator ds. infrastuktury warsztatowej",
          bolidName: "RT13e",
        },
      ],
    },
    {
      name: "krzysztof",
      surname: "gajewski",
      roles: [
        {
          department: "workshop",
          role: "koordynator ds. infrastuktury warsztatowej",
          bolidName: "RT13e",
        },
        {
          department: "workshop",
          role: "inverter designer",
          bolidName: "RT12e",
        },
        {
          department: "workshop",
          role: "cooling system designer",
          bolidName: "RT11b",
        },
      ],
    },
    {
      name: "paweł",
      surname: "wójcik",
      roles: [{ department: "drivers", role: "undefined", bolidName: "RT13e" }],
    },
    {
      name: "michał",
      surname: "romanowski",
      roles: [{ department: "drivers", role: "undefined", bolidName: "RT13e" }],
    },
    {
      name: "igor",
      surname: "wawrzyniak",
      roles: [{ department: "drivers", role: "undefined", bolidName: "RT13e" }],
    },
    {
      name: "maksymilian",
      surname: "musiał",
      roles: [{ department: "drivers", role: "undefined", bolidName: "RT13e" }],
    },
    {
      name: "mateusz",
      surname: "sikorski",
      roles: [{ department: "drivers", role: "undefined", bolidName: "RT13e" }],
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
