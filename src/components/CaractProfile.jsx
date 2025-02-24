import React from "react";

const CaractProfile = ({ text, icon }) => {
  return (
    <>
      <div className="flex items-center bg-[#2e2e2e] rounded-xl">
        <p className="pl-4 text-[#8b99f8]">{icon}</p>
        <p className="py-1 pl-2 pr-4 text-[#b3b3b3]">{text}</p>
      </div>
    </>
  );
};

export default CaractProfile;
