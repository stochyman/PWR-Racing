const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const fs = require("fs");

const members = [
  {
    name: "paweł",
    surname: "wójcik",
    email: "pawel.wojcik.pwrrt@gmail.com",
    roles: [
      {
        role: "team leader",
        department: "management",
        bolidName: "RT14e",
      },
      {
        role: "",
        department: "drivers",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "michał",
    surname: "wieczorek",
    email: "michal.wieczorek.pwrrt@gmail.com",
    roles: [
      {
        role: "technical leader",
        department: "",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "karolina",
    surname: "wasiukiewicz",
    email: "karolina.wasiukiewicz.pwrrt@gmail.com",
    roles: [
      {
        role: "marketing leader",
        department: "marketing",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "iga",
    surname: "friedrich",
    email: "iga.friedrich.pwrrt@gmail.com",
    roles: [
      {
        role: "social media associate",
        department: "marketing",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "jakub",
    surname: "kucharski",
    email: "jakub.kucharski.pwrrt@gmail.com",
    roles: [
      {
        role: "business associate",
        department: "marketing",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "zuzanna",
    surname: "ignaszak",
    email: "zuzanna.ignaszak.pwrrt@gmail.com",
    roles: [
      {
        role: "business and statics project manager",
        department: "marketing",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "zuzanna",
    surname: "kochanowska",
    email: "zuzanna.kochanowska.pwrrt@gmail.com",
    roles: [
      {
        role: "copywriter",
        department: "marketing",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "iga",
    surname: "małkus",
    email: "iga.malkus.pwrrt@gmail.com",
    roles: [
      {
        role: "social media associate",
        department: "marketing",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "stanisław",
    surname: "mazurkiewicz",
    email: "stanislaw.mazurkiewicz.pwrrt@gmail.com",
    roles: [
      {
        role: "photographer",
        department: "marketing",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "łukasz",
    surname: "chodyna",
    email: "lukasz.chodyna.pwrrt@gmail.com",
    roles: [
      {
        role: "business associate",
        department: "marketing",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "joanna",
    surname: "popielewska",
    email: "joanna.popielewska.pwrrt@gmail.com",
    roles: [
      {
        role: "business associate",
        department: "marketing",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "alicja",
    surname: "jeżak",
    email: "alicja.jezak.pwrrt@gmail.com",
    roles: [
      {
        role: "social media associate",
        department: "marketing",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "jakub",
    surname: "ruchała",
    email: "jakub.ruchala.pwrrt@gmail.com",
    roles: [
      {
        role: "composites leader",
        department: "composites",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "patryk",
    surname: "kołtun",
    email: "patryk.koltun.pwrrt@gmail.com",
    roles: [
      {
        role: "monocoque project manager",
        department: "composites",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "adam",
    surname: "strojny",
    email: "adam.strojny.pwrrt@gmail.com",
    roles: [
      {
        role: "underbody engineer",
        department: "composites",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "miłosz",
    surname: "swół",
    email: "milosz.swoj.pwrrt@gmail.com",
    roles: [
      {
        role: "monocoque engineer",
        department: "composites",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "aleksander",
    surname: "maciątek",
    email: "aleksander.maciatek.pwrrt@gmail.com",
    roles: [
      {
        role: "cfd engineer",
        department: "composites",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "jakub",
    surname: "koman",
    email: "jakub.koman.pwrrt@gmail.com",
    roles: [
      {
        role: "rear wing engineer",
        department: "composites",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "maria",
    surname: "kanczewska",
    email: "maria.kanczewska.pwrrt@gmail.com",
    roles: [
      {
        role: "ergonomics engineer",
        department: "composites",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "przemysław",
    surname: "szczepański",
    email: "przemyslaw.szczepanski.pwrrt@gmail.com",
    roles: [
      {
        role: "aerodynamics project manager",
        department: "composites",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "ewa",
    surname: "glenc",
    email: "ewa.glenc.pwrrt@gmail.com",
    roles: [
      {
        role: "ergonomics engineer",
        department: "composites",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "wojciech",
    surname: "żuberek",
    email: "wojciech.zuberek.pwrrt@gmail.com",
    roles: [
      {
        role: "monocoque engineer",
        department: "composites",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "wiktor",
    surname: "kuźmicki",
    email: "wiktor.kuzmicki.pwrrt@gmail.com",
    roles: [
      {
        role: "diffuser engineer",
        department: "composites",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "jakub",
    surname: "grochowski",
    email: "jakub.grochowski.pwrrt@gmail.com",
    roles: [
      {
        role: "composites member",
        department: "composites",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "dominik",
    surname: "pachecki",
    email: "dominik.pachecki.pwrrt@gmail.com",
    roles: [
      {
        role: "rims engineer",
        department: "composites",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "nazarii",
    surname: "honczarenko",
    email: "nazarii.honczarenko.pwrrt@gmail.com",
    roles: [
      {
        role: "rear wing engineer",
        department: "composites",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "nina",
    surname: "janik",
    email: "nina.janik.pwrrt@gmail.com",
    roles: [
      {
        role: "front wing engineer",
        department: "composites",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "maciej",
    surname: "sikora",
    email: "maciej.sikora.pwrrt@gmail.com",
    roles: [
      {
        role: "monocoque engineer",
        department: "composites",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "mikołaj",
    surname: "stojowski",
    email: "mikolaj.stojowski.pwrrt@gmail.com",
    roles: [
      {
        role: "ergonomics engineer",
        department: "composites",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "dawid",
    surname: "jamer",
    email: "dawid.jamer.pwrrt@gmail.com",
    roles: [
      {
        role: "tsac constructor",
        department: "composites",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "jakub",
    surname: "drzewiecki",
    email: "jakub.drzewiecki.pwrrt@gmail.com",
    roles: [
      {
        role: "software leader",
        department: "software",
        bolidName: "RT14e",
      },
      {
        role: "",
        department: "drivers",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "łukasz",
    surname: "michalski",
    email: "lukasz.michalski.pwrrt@gmail.com",
    roles: [
      {
        role: "autonomous system engineer",
        department: "software",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "bartłomiej",
    surname: "sitnik",
    email: "bartlomiej.sitnik.pwrrt@gmail.com",
    roles: [
      {
        role: "software developer",
        department: "software",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "franciszek",
    surname: "plisz",
    email: "franciszek.plisz.pwrrt@gmail.com",
    roles: [
      {
        role: "perception developer",
        department: "software",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "maciej",
    surname: "sadowski",
    email: "maciej.sadowski.pwrrt@gmail.com",
    roles: [
      {
        role: "sensor solutions and telemetry system engineer",
        department: "software",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "joel",
    surname: "kojma",
    email: "joel.kojma.pwrrt@gmail.com",
    roles: [
      {
        role: "data validation developer",
        department: "software",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "dawid",
    surname: "chmal",
    email: "dawid.chmal.pwrrt@gmail.com",
    roles: [
      {
        role: "website developer",
        department: "software",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "kacper",
    surname: "synator",
    email: "kacper.synator.pwrrt@gmail.com",
    roles: [
      {
        role: "perception fusion developer",
        department: "software",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "wiktoria",
    surname: "sawicka",
    email: "wiktoria.sawicka.pwrrt@gmail.com",
    roles: [
      {
        role: "asb software developer",
        department: "software",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "kacper",
    surname: "sowiński",
    email: "kacper.sowinski.pwrrt@gmail.com",
    roles: [
      {
        role: "electrical leader",
        department: "electrical",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "kacper",
    surname: "śliwa",
    email: "kacper.sliwa.pwrrt@gmail.com",
    roles: [
      {
        role: "powertrain engineer",
        department: "electrical",
        bolidName: "RT14e",
      },
      {
        role: "",
        department: "drivers",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "antoni",
    surname: "radzimowski",
    email: "antoni.radzimowski.pwrrt@gmail.com",
    roles: [
      {
        role: "electronics designer",
        department: "electrical",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "rafał",
    surname: "dziki",
    email: "rafal.dziki.pwrrt@gmail.com",
    roles: [
      {
        role: "electronics designer",
        department: "electrical",
        bolidName: "RT14e",
      },
      {
        role: "",
        department: "drivers",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "maciej",
    surname: "bobak",
    email: "maciej.bobak.pwrrt@gmail.com",
    roles: [
      {
        role: "tsal engineer",
        department: "electrical",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "michał",
    surname: "twardochleb",
    email: "michal.twardochleb.pwrrt@gmail.com",
    roles: [
      {
        role: "department support",
        department: "electrical",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "maciej",
    surname: "bębenek",
    email: "maciej.bebenek.pwrrt@gmail.com",
    roles: [
      {
        role: "electronics designer",
        department: "electrical",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "krzysztof",
    surname: "dolecki",
    email: "krzysztof.dolecki.pwrrt@gmail.com",
    roles: [
      {
        role: "electrical member",
        department: "electrical",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "aleksander",
    surname: "dziągwa",
    email: "aleksander.dziągwa.pwrrt@gmail.com",
    roles: [
      {
        role: "electronics designer",
        department: "electrical",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "igor",
    surname: "wawrzyniak",
    email: "igor.wawrzyniak.pwrrt@gmail.com",
    roles: [
      {
        role: "mechanical leader, wheel assembly constructor",
        department: "mechanical",
        bolidName: "RT14e",
      },
      {
        role: "",
        department: "drivers",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "jakub",
    surname: "piętowski",
    email: "jakub.pietowski.pwrrt@gmail.com",
    roles: [
      {
        role: "planetary gearbox constructor",
        department: "mechanical",
        bolidName: "RT14e",
      },
      {
        role: "",
        department: "drivers",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "bartosz",
    surname: "sobczak",
    email: "bartosz.sobczak.pwrrt@gmail.com",
    roles: [
      {
        role: "motor case constructor",
        department: "mechanical",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "piotr",
    surname: "warło",
    email: "piotr.warlo.pwrrt@gmail.com",
    roles: [
      {
        role: "cooling system constructor",
        department: "mechanical",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "katarzyna",
    surname: "pilip",
    email: "katarzyna.pilip.pwrrt@gmail.com",
    roles: [
      {
        role: "pedalbox constructor",
        department: "mechanical",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "jan",
    surname: "konior",
    email: "jan.konior.pwrrt@gmail.com",
    roles: [
      {
        role: "department support",
        department: "mechanical",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "dominik",
    surname: "kołakowski",
    email: "dominik.kolakowski.pwrrt@gmail.com",
    roles: [
      {
        role: "brake system constructor",
        department: "mechanical",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "igor",
    surname: "wlaźlik",
    email: "igor.wlazlik.pwrrt@gmail.com",
    roles: [
      {
        role: "autonomous steering system constructor",
        department: "mechanical",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "kacper",
    surname: "zych",
    email: "kacper.zych.pwrrt@gmail.com",
    roles: [
      {
        role: "asb responsible",
        department: "mechanical",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "kamil",
    surname: "terlecki",
    email: "kamil.terlecki.pwrrt@gmail.com",
    roles: [
      {
        role: "steering column constructor",
        department: "mechanical",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "kamil",
    surname: "wadas",
    email: "kamil.wadas.pwrrt@gmail.com",
    roles: [
      {
        role: "damper mount constructor",
        department: "mechanical",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "maciej",
    surname: "cepa",
    email: "maciej.cepa.pwrrt@gmail.com",
    roles: [
      {
        role: "pushrods responsible",
        department: "mechanical",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "szymon",
    surname: "szaniawski",
    email: "szymon.szaniewski.pwrrt@gmail.com",
    roles: [
      {
        role: "tierods and arb responsible",
        department: "mechanical",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "bartłomiej",
    surname: "płoszyński",
    email: "bartlomiej.ploszynski.pwrrt@gmail.com",
    roles: [
      {
        role: "vehicle performance leader",
        department: "vehicle performance",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "paweł",
    surname: "mordwa",
    email: "pawel.mordwa.pwrrt@gmail.com",
    roles: [
      {
        role: "tractive system engineer",
        department: "vehicle performance",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "jakub",
    surname: "myszka",
    email: "jakub.myszka.pwrrt@gmail.com",
    roles: [
      {
        role: "vehicle dynamics engineer",
        department: "vehicle performance",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "aleksandra",
    surname: "birut",
    email: "aleksandra.birut.pwrrt@gmail.com",
    roles: [
      {
        role: "tractive system engineer",
        department: "vehicle performance",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "maksymilian",
    surname: "musiał",
    email: "maksymilian.musial.pwrrt@gmail.com",
    roles: [
      {
        role: "drivers development",
        department: "vehicle performance",
        bolidName: "RT14e",
      },
      {
        role: "",
        department: "drivers",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "piotr",
    surname: "bieniaszkiewicz",
    email: "piotr.bieniaszkiewicz.pwrrt@gmail.com",
    roles: [
      {
        role: "vehicle dynamics engineer",
        department: "vehicle performance",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "maksymilian",
    surname: "kamiński",
    email: "maksymilian.kaminski.pwrrt@gmail.com",
    roles: [
      {
        role: "vehicle performance member",
        department: "vehicle performance",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "filip",
    surname: "ciechański",
    email: "filip.ciechanski.pwrrt@gmail.com",
    roles: [
      {
        role: "vdcu developer",
        department: "vehicle performance",
        bolidName: "RT14e",
      },
    ],
  },
  {
    name: "jakub",
    surname: "stankowski",
    email: "jakub.stankowski.pwrrt@gmail.com",
    roles: [
      {
        role: "coordinator for workshop infrastructure",
        department: "workshop",
        bolidName: "RT14e",
      },
    ],
  },
];

async function main() {
  for (const member of members) {
    // Check for existing member by name and surname
    const existingMember = await prisma.teamMember.findFirst({
      where: {
        name: member.name,
        surname: member.surname,
      },
    });

    if (existingMember) {
      // Merge existing roles with new roles, ensuring no duplicates
      const updatedRoles = [
        ...existingMember.roles,
        ...member.roles.filter(
          (newRole) =>
            !existingMember.roles.some(
              (existingRole) =>
                existingRole.role === newRole.role &&
                existingRole.department === newRole.department &&
                existingRole.bolidName === newRole.bolidName
            )
        ),
      ];

      // Update the existing member with the new roles array
      await prisma.teamMember.update({
        where: { id: existingMember.id },
        data: {
          roles: updatedRoles,
        },
      });
    } else {
      // Create a new team member
      await prisma.teamMember.create({
        data: {
          name: member.name,
          surname: member.surname,
          email: member.email,
          roles: member.roles,
        },
      });
    }
  }

  console.log(`Inserted or updated team members successfully.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
