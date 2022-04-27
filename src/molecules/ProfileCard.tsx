import * as React from "react";
import { FC } from "react";
import Heading from "../atoms/Heading";

type ProfileCardProps = {
  src?: string;
  fullName: string;
  email: string;
};

const ProfileCard: FC<ProfileCardProps> = ({ src, fullName, email }) => {
  return (
    <div className="max-w-sm text-center">
      <img
        src={src}
        width={200}
        height={200}
        className="bg-gray-500 rounded-full mx-auto"
      />
      <Heading color="#2c5825">{fullName}</Heading>
      <Heading color="#2c5825">[ {email} ]</Heading>
    </div>
  );
};

export default ProfileCard;
