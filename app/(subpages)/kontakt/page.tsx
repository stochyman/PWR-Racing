import { getTeamByFullName } from "@/app/actions/getTeamByName";
import Container from "@/app/components/Container";
import Title from "@/app/components/Title";
import UserCard from "../team/[teamId]/UserCard";
import GoogleMapComponent from "./map";
import Text from "@/app/components/Text";

interface Role {
  department: string;
  role: string;
  bolidName: string;
}
interface TeamMember {
  name: string;
  surname: string;
  roles: Role[];
  currentRole: string;
}
const getMembersData = async (names: string[]): Promise<TeamMember[]> => {
  const teamMembers = [];

  for (const member of names) {
    const [name, surname] = member.split(" ");
    const memberData = await getTeamByFullName(name, surname);
    if (memberData.length > 0) {
      teamMembers.push(memberData[0]);
    }
  }

  return teamMembers.map((member) => {
    const currentRole = member.roles.find(
      (role) => role.bolidName === "RT14e"
    )?.role;
    return {
      ...member,
      currentRole: currentRole || "No current role",
    };
  });
};

const ContactUs = async () => {
  const mainMembers = await getMembersData([
    "paweł wójcik",
    "michał wieczorek",
    "karolina wasiukiewicz",
  ]);

  const projectSupervisors = await getMembersData([
    "paweł wójcik",
    "paweł wójcik",
  ]);

  const siteAdministration = await getMembersData([
    "dawid chmal",
    "maria kanczewska",
  ]);

  return (
    <div className="pt-[120px]">
      <div className="absolute opacity-5 right-0">
        <h1 className="text-[15rem] font-extrabold text-black uppercase leading-none">
          KONTAKT
        </h1>
      </div>
      <Container>
        <div className="w-full mb-12 flex flex-col items-center mt-16">
          <div className="mb-24 py-4 my-4 border-b-2 w-3/5 border-black text-center">
            <Title color="black">NAPISZ DO NAS</Title>
          </div>
          <div className=" mb-8">
            <Text bold medium>
              Oni odpowiedzą na Twoje pytania:
            </Text>
          </div>
          <div className="grid grid-cols-3 w-3/4 gap-6 ">
            {mainMembers.map((member, index) => (
              <UserCard
                key={index}
                member={member}
                teamId="RT14e"
                roleHistory={{
                  [`${member.name} ${member.surname}`]: member.roles.map(
                    (role) => ({
                      role: role.role,
                      bolidName: role.bolidName,
                      department: role.department,
                    })
                  ),
                }}
              />
            ))}
          </div>
        </div>
      </Container>
      <div className=" text-center mt-12 mb-6">
        <Title color="black" size="medium">
          GDZIE NAS ZNAJDZIESZ?
        </Title>
      </div>
      <GoogleMapComponent />
      <Container>
        <div className="grid grid-cols-2 w-full my-12 gap-20">
          <div className=" flex flex-col items-center gap-6">
            <Text bold small>
              Opiekunowie projektu:
            </Text>
            <div className="grid grid-cols-2 w-full gap-6">
              {projectSupervisors.map((member, index) => (
                <UserCard
                  key={index}
                  member={member}
                  teamId="RT14e"
                  roleHistory={{
                    [`${member.name} ${member.surname}`]: member.roles.map(
                      (role) => ({
                        role: role.role,
                        bolidName: role.bolidName,
                        department: role.department,
                      })
                    ),
                  }}
                />
              ))}
            </div>
          </div>
          <div className=" flex flex-col items-center gap-6">
            <Text bold small>
              Administracja strony:
            </Text>
            <div className="grid grid-cols-2 w-full gap-6">
              {siteAdministration.map((member, index) => (
                <UserCard
                  key={index}
                  member={member}
                  teamId="RT14e"
                  roleHistory={{
                    [`${member.name} ${member.surname}`]: member.roles.map(
                      (role) => ({
                        role: role.role,
                        bolidName: role.bolidName,
                        department: role.department,
                      })
                    ),
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
