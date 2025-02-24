import React from "react";
import profile from "../assets/profile.jpg";
import CaractProfile from "./CaractProfile";
import { FaCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdTranslate } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";


const ProfileCard = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-[#2C2C2C] p-7 rounded-2xl border border-[#464646]">
        <div className="flex justify-start w-full">
            <img src={profile} alt="" className="object-cover w-24 rounded-2xl"/>
            <div className="mx-4">
                <p className="bg-[rgba(21,126,0,0.4)] bg-opacity-50 rounded-full text-[#00E800] text-xs w-fit px-2 py-0.5">Open to work</p>
                <h1 className="text-[#8b99f8] font-bold">Sergio</h1>
                <h3>I´m a</h3>
                <h2 className="text-[#8b99f8] font-bold">Full Stack Developer</h2>
            </div>
        </div>
        <div className="flex flex-wrap bg-[#000000] rounded-2xl mt-4 gap-2 py-2 px-2 w-full">
            <CaractProfile text={"Spanish & English"} icon={<MdTranslate />}></CaractProfile>
            <CaractProfile text={"Argentina"} icon={<FaLocationDot />}></CaractProfile>
            <CaractProfile text={"23 y/o"} icon={<FaCalendar />}></CaractProfile>
        </div>
        <div className="flex w-full mt-4">
          <button className="bg-[#8b99f8] rounded-2xl p-3 w-1/2 mr-2 items-center flex justify-center text-[#000000]"><p className="pr-2 text-2xl"><IoIosMail  /></p> Hire Me</button>
          <button className="bg-[#414141] rounded-2xl p-3 w-1/2 ml-2 items-center flex justify-center"><p className="pr-2 text-2xl"><FaGithub  /></p>GitHub</button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
