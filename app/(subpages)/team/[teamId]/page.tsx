import { getTeamByBolid } from "@/app/actions/getTeamByBolid";
import Container from "@/app/components/Container";
import SecondaryButton from "@/app/components/SecondaryButton";
import Title from "@/app/components/Title";
import Image from "next/image";
import ClientSlider from "./ClientSlider";
import TileHeading from "./TileHeading";

interface Iparams {
  teamId?: string;
}

const TeamPage = async ({ params }: { params: Iparams }) => {
  const teamId = params.teamId ?? "RT13e";
  const team = await getTeamByBolid(teamId);
  interface Member {
    name: string;
    surname: string;
    currentRole: string;
  }

  interface RoleHistoryItem {
    role: string;
    bolidName: string;
    department: string;
  }

  interface MembersByDepartment {
    [key: string]: Member[];
  }

  interface RoleHistory {
    [key: string]: RoleHistoryItem[];
  }

  const membersByDepartment: MembersByDepartment = {};
  const roleHistory: RoleHistory = {};

  team.forEach((member) => {
    const memberFullName = `${member.name} ${member.surname}`; // Połącz imię i nazwisko

    member.roles.forEach((role) => {
      // Budujemy historię ról dla każdego członka
      if (!roleHistory[memberFullName]) {
        roleHistory[memberFullName] = [];
      }
      roleHistory[memberFullName].push({
        role: role.role,
        bolidName: role.bolidName,
        department: role.department,
      });

      // Dodajemy członka do działu tylko jeśli jego rola jest związana z bieżącym bolidem
      if (role.bolidName === teamId) {
        if (!membersByDepartment[role.department]) {
          membersByDepartment[role.department] = [];
        }
        let departmentMember = membersByDepartment[role.department].find(
          (m) => `${m.name} ${m.surname}` === memberFullName
        );
        if (!departmentMember) {
          departmentMember = {
            name: member.name,
            surname: member.surname,
            currentRole: role.role,
          };
          membersByDepartment[role.department].push(departmentMember);
        }
      }
    });
  });

  // Sort departments such that 'management' comes first
  const sortedDepartments = Object.keys(membersByDepartment).sort((a, b) => {
    if (a === "management") return -1;
    if (b === "management") return 1;
    return 0;
  });

  return (
    <div className="relative bg-neutral-950 pt-32 pb-12">
      <div className="relative">
        <ClientSlider teamId={teamId} />

        {/* Renderowanie sekcji dla każdego działu aktualnego bolidu */}
        <div className="pt-10">
          {sortedDepartments.map((department, depIndex) => (
            <div key={department} className="">
              <div
                className={`absolute opacity-5 ${
                  depIndex % 2 === 0 ? "left-0" : "right-0"
                }`}
              >
                <h1 className="text-[15rem] font-extrabold text-white uppercase leading-none">
                  {department === "management" ? "Team" : department}
                </h1>
              </div>
              <Container>
                <div
                  className={`${
                    department === "management" ? "grid-cols-2" : "grid-cols-1"
                  } grid my-8 align-middle justify-center gap-16 w-full`}
                >
                  <div className="">
                    <div className="flex flex-col items-center">
                      <div className="uppercase text-center my-6 p-2 px-20 border-white border-b-2">
                        <Title color="white">
                          {department === "management" ? teamId : department}
                        </Title>
                      </div>
                    </div>
                    <div
                      key={department}
                      className={`${
                        department === "management"
                          ? "grid-cols-2"
                          : "grid-cols-4"
                      } grid my-4 gap-6`}
                    >
                      {membersByDepartment[department].map((member, index) => (
                        <div className="relative group" key={index}>
                          <div className="absolute inset-0 z-0 w-full h-full rounded-full blur-3xl bg-white opacity-10"></div>

                          <div className="relative rounded-xl overflow-hidden bg-black pb-14">
                            <div className="relative h-[350px]">
                              <Image
                                src={`https://storage.googleapis.com/pwr-rt/${teamId}/${encodeURIComponent(
                                  member.name[0].toUpperCase() +
                                    member.name.slice(1)
                                )}%20${encodeURIComponent(
                                  member.surname[0].toUpperCase() +
                                    member.surname.slice(1)
                                )}.jpg`}
                                alt={`Zdjęcie ${member.name} ${member.surname}`}
                                layout="fill" // Ustawia obraz na wypełnienie kontenera
                                objectFit="cover"
                                objectPosition="center"
                              />
                            </div>
                            <TileHeading
                              member={member}
                              roleHistory={roleHistory}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {department === "management" && (
                    <div className="flex flex-col justify-center">
                      <div className="relative">
                        <div className=" absolute">
                          <SecondaryButton
                            darkMode
                            to={`/bolid/${params.teamId}`}
                            buttonText={`Do bolidu ${params.teamId}`}
                          />
                        </div>

                        <Image
                          src={`/images/bolid/${params.teamId}/${params.teamId}.png`}
                          alt="bolid"
                          width={700}
                          height={551}
                          objectFit="cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </Container>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
