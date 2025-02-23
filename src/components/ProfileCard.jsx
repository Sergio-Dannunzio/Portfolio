import React from "react";
import profile from "../assets/profile.jpg";

const ProfileCard = () => {
  return (
    <>
      <div className="flex items-center bg-[#2C2C2C] p-7 rounded-2xl border-2 border-[#464646]">
        <div>
            <img src={profile} alt="" className=""/>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore harum consequuntur minima eius a hic qui autem, suscipit, tenetur magnam doloribus nihil earum exercitationem! Molestiae minus magni beatae quasi doloribus.</h1>
      </div>
    </>
  );
};

export default ProfileCard;
