"use client";

import { useState } from "react";

import Text from "@/app/components/Text";
import Title from "@/app/components/Title";
import ClientSideInteractionButton from "./ClientSideInteractionButton";

interface Member {
  name: string;
  surname: string;
  currentRole: string;
}

interface Role {
  role: string;
  bolidName: string;
  department: string;
}

interface ParamsTileHeading {
  member: Member;
  roleHistory: { [key: string]: Role[] };
}
const TileHeading: React.FC<ParamsTileHeading> = ({ member, roleHistory }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className=""
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-2 absolute inset-0 h-full capitalize flex flex-col justify-between bg-black translate-y-[83%] group-hover:opacity-[98%] group-hover:translate-y-0 group-hover:p-6 transition duration-300 ease-in-out">
        <div className="absolute inset-0 z-0 w-full h-full rounded-full blur-3xl bg-white opacity-15"></div>
        <div className="flex flex-col group-hover:my-1 transition-all duration-300 ease-in-out z-30">
          <div className="group-hover:text-center w-full duration-300 ease-in-out">
            <Title cardHover wrap size="small">
              {member.name} {member.surname}
            </Title>
          </div>
          <div className="group-hover:text-center w-full transition-all duration-300 ease-in-out capitalize">
            <Title cardHover wrap size="subtitle" color="red">
              {isHovered
                ? member.currentRole
                : member.currentRole.length > 28
                ? `${member.currentRole.slice(0, 28)}...`
                : member.currentRole}
            </Title>
          </div>
        </div>

        <div className=" relative flex py-4 my-4 items-center">
          <div className="absolute ml-[3px] h-full w-[2px] bg-neutral-400 rounded-lg"></div>
          <div className="flex flex-col gap-2 z-30 text-white max-h-28 w-full overflow-scroll">
            {roleHistory[`${member.name} ${member.surname}`]?.map(
              (role, roleIndex) => (
                <div key={roleIndex} className="relative">
                  <div className=" absolute w-2 h-2 rounded-full bg-white mt-2"></div>
                  <div className=" ml-5">
                    <Text center>
                      {role.bolidName} - {role.role}
                    </Text>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="w-full">
          <ClientSideInteractionButton />
        </div>
      </div>
    </div>
  );
};

export default TileHeading;
