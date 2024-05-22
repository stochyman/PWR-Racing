import React from "react";
import Image from "next/image";
import TileHeading from "./TileHeading";

interface UserCardProps {
  member: {
    name: string;
    surname: string;
    currentRole: string;
  };
  teamId: string;
  roleHistory: {
    [key: string]: {
      role: string;
      bolidName: string;
      department: string;
    }[];
  };
}

const UserCard: React.FC<UserCardProps> = ({ member, teamId, roleHistory }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 z-0 w-full h-full rounded-full blur-3xl bg-white opacity-10"></div>
      <div className="relative rounded-md overflow-hidden bg-black pb-14">
        <div className="relative h-[350px]">
          <Image
            src={`https://storage.googleapis.com/pwr-rt/${
              teamId === "RT11b" ? "RT11" : teamId
            }/${encodeURIComponent(
              member.name[0].toUpperCase() + member.name.slice(1)
            )}%20${encodeURIComponent(
              member.surname[0].toUpperCase() + member.surname.slice(1)
            )}.jpg`}
            alt={`Zdjęcie ${member.name} ${member.surname}`}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <TileHeading member={member} roleHistory={roleHistory} />
      </div>
    </div>
  );
};

export default UserCard;
