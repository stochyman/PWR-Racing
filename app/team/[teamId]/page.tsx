import { getTeamByBolid } from "@/app/actions/getTeamByBolid";
import Container from "@/app/components/Container";
import SecondaryButton from "@/app/components/SecondaryButton";
import Text from "@/app/components/Text";
import Title from "@/app/components/Title";
import Image from "next/image";
import ClientSideInteractionButton from "./ClientSideInteractionButton";
import ClientSlider from "./ClientSlider";

interface Iparams {
  teamId?: string;
}

const TeamPage = async ({ params }: { params: Iparams }) => {
  const teamId = params.teamId ?? "RT13e";
  const team = await getTeamByBolid(teamId);
  const membersByDepartment = {};
  const roleHistory = {};

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
                  } grid my-8 align-middle justify-center gap-16`}
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
                            <div className="relative">
                              <Image
                                src="https://storage.googleapis.com/pwr-rt/Pawe%C5%82%20W%C3%B3jcik.jpg"
                                alt={`Zdjęcie ${member.name} ${member.surname}`}
                                layout="responsive"
                                width={300} // Używaj rzeczywistych proporcji obrazu
                                height={400} // Używaj rzeczywistych proporcji obrazu
                                objectFit="cover"
                              />
                            </div>
                            <div
                              className="p-2 absolute inset-0 h-full capitalize flex flex-col justify-between bg-black translate-y-[83%]
                              group-hover:opacity-[98%] group-hover:translate-y-0 group-hover:p-6
                              transition duration-300 ease-in-out"
                            >
                              <div className="absolute inset-0 z-0 w-full h-full rounded-full blur-3xl bg-white opacity-15"></div>
                              <div className="flex flex-col group-hover:my-1 transition-all duration-300 ease-in-out z-30">
                                <div className="group-hover:m-auto w-min duration-300 ease-in-out">
                                  <Title cardHover size="small">
                                    {member.name} {member.surname}
                                  </Title>
                                </div>
                                <div className="group-hover:m-auto w-min transition-all duration-300 ease-in-out">
                                  <Title cardHover size="subtitle" color="red">
                                    {member.currentRole}
                                  </Title>
                                </div>
                              </div>

                              <div className="flex relative py-4 items-center">
                                <div className="absolute ml-[3px] h-full w-[2px] bg-neutral-400 rounded-lg"></div>
                                <div className="flex flex-col gap-2 z-30 text-white">
                                  {roleHistory[
                                    `${member.name} ${member.surname}`
                                  ]?.map((role, roleIndex) => (
                                    <div
                                      key={roleIndex}
                                      className="flex items-center"
                                    >
                                      <div className="w-2 h-2 rounded-full bg-white mr-5"></div>
                                      <Text>
                                        {role.bolidName} - {role.role}
                                      </Text>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="w-full">
                                <ClientSideInteractionButton />
                              </div>
                            </div>
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
                          src="/images/bolid/RT13e.png"
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
