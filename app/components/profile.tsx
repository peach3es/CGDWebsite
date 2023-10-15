import React from "react";
import "app/css/profile.css";

interface ProfileProps {
  name: string;
  position: string;
  image: string;
}

const Profile: React.FC<ProfileProps> = ({ name, position, image }) => {
  return (
    <div className="profile-card flex flex-col">
      <img src={image} alt={name} />
      <h3 className="name xl:text-4xl lg:text-3xl text-2xl mt-4">{name}</h3>
      <p className="position xl:text-2xl lg:text-xl text-lg">{position}</p>
    </div>
  );
};

export default Profile;
