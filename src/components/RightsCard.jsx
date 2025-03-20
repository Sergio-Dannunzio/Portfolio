import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RightsCard = () => {

  const navigate = useNavigate();

  const handleShowProfile = () => {
    window.open("https://github.com/Sergio-Dannunzio", "_blank");
  };

  return (
    <>
      <div className="flex flex-col justify-center my-6 group"
      >
        <div className="flex items-center justify-center w-full my-4 text-sm">
            <p>Made By</p> <span className="relative text-[#8b99f8] font-bold ml-1 cursor-pointer"
            onClick={handleShowProfile}>
            Sergio
            <span className="absolute inset-0 -z-10 bg-[#8b99f8] rounded-full blur-lg opacity-75 scale-150"></span>
            </span>
        </div>
        <div className="flex items-center justify-center w-full text-sm">
            <p>© 2025 All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default RightsCard;