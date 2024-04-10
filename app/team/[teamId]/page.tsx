import { getTeamByBolid } from "@/app/actions/getTeamByBolid";
import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import Image from 'next/image';
import Title from "@/app/components/Title";
import Text from "@/app/components/Text";
import ClientSideInteractionComponent from "./serverButton";
import Slider from "@/app/components/Section/BolidSection/Slider";
// import { useNavigation } from 'next/navigation';

interface Iparams {
  teamId?: string;
}

const TeamPage = async ({ params }: { params: Iparams }) => {
  const teamId = params.teamId ?? 'RT13e';
  const team = await getTeamByBolid(teamId);
  const membersByDepartment = {};
  const roleHistory = {};

  team.forEach(member => {
    const memberFullName = `${member.name} ${member.surname}`; // Połącz imię i nazwisko

    member.roles.forEach(role => {
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
        // Szukamy czy już dodaliśmy tego członka
        let departmentMember = membersByDepartment[role.department].find(m => `${m.name} ${m.surname}` === memberFullName);
        if (!departmentMember) {
          departmentMember = {
            name: member.name,
            surname: member.surname,
            currentRole: role.role
          };
          membersByDepartment[role.department].push(departmentMember);
        }
      }
    });
  });

  // const navigation = useNavigation();

  // const handleBolidChange = (newBolid) => {
  //   navigation.navigate(`/team/${newBolid}`);
  // };

  return (
    <div className=" bg-neutral-800">
      <ClientOnly>
        <Container>
          <div className=" mt-32 mb-12">
            {/* <Slider currentBolid={teamId} onChangeBolid={handleBolidChange}></Slider> */}
            <Title color="white">{teamId}</Title>

            {/* Renderowanie sekcji dla każdego działu aktualnego bolidu */}
            {Object.entries(membersByDepartment).map(([department, members]) => (
              <div key={department} className="">
                <div className=" flex flex-col items-center my-8">
                  <div className=" uppercase text-center my-8 p-2 px-20 border-white border-b-2">
                    <Title color="white">{department}</Title>
                  </div>

                  <div className="grid grid-cols-4 gap-8">
                    {members.map((member, index) => (
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

                          <div className="p-2 absolute inset-0 h-full capitalize flex flex-col justify-between bg-black translate-y-[83%]
                          group-hover:opacity-[98%] group-hover:translate-y-0 group-hover:p-6
                          transition duration-300 ease-in-out">
                            <div className="absolute inset-0 z-0 w-full h-full rounded-full blur-3xl bg-white opacity-15"></div>
                            <div className="flex flex-col group-hover:my-1 transition-all duration-300 ease-in-out z-30">
                              <div className="group-hover:m-auto w-min duration-300 ease-in-out">
                                <Title cardHover size="small">{member.name} {member.surname}</Title>
                              </div>
                              <div className="group-hover:m-auto w-min transition-all duration-300 ease-in-out">
                                <Title cardHover size="subtitle" color="red">{member.currentRole}</Title>
                              </div>
                            </div>

                            <div className="flex relative py-4 items-center">
                              <div className="absolute ml-[3px] h-full w-[2px] bg-neutral-400 rounded-lg"></div>
                              <div className="flex flex-col gap-2 z-30 text-white">
                                {roleHistory[`${member.name} ${member.surname}`]?.map((role, roleIndex) => (
                                  <div key={roleIndex} className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-white mr-5"></div>
                                    <Text>{role.bolidName} - {role.role}</Text>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="w-full">
                              <ClientSideInteractionComponent/>
                            </div>
                          </div>

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </ClientOnly>
    </div>
  );
};

export default TeamPage;
