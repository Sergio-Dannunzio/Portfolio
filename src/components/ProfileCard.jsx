import Atropos from 'atropos/react';
import 'atropos/css';
import profile from "../assets/profile.jpg";
import CaractProfile from "./CaractProfile";
import { FaCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdTranslate } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { VscCoffee } from "react-icons/vsc";
import { GiWeightLiftingUp } from "react-icons/gi";

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center bg-[#17171790] p-7 rounded-2xl border border-[#262626] max-w-[580px] w-full h-fit">
      <div className="flex justify-start w-full">
        
        {/* Atropos SOLO envuelve la imagen */}
        <Atropos className="w-24"
         highlight={false}
         rotateXMax={40}  // Aumenta el ángulo máximo en X
         rotateYMax={40}  // Aumenta el ángulo máximo en Y
         duration={300}>
          <img src={profile} alt="Profile" className="object-cover w-24 rounded-2xl" />
        </Atropos>

        <div className="mx-4">
          <p className="bg-[rgba(21,126,0,0.4)] bg-opacity-50 rounded-full text-[#00e800aa] text-xs w-fit px-2 py-0.5">Open to work</p>
          <h1 className="text-[#8b99f8] font-bold text-2xl">Sergio</h1>
          <h3>I´m a</h3>
          <h2 className="text-[#8b99f8] font-bold">Full Stack Developer</h2>
        </div>
      </div>
      
      <div className="flex flex-wrap bg-[#000000] rounded-2xl mt-4 gap-2 py-2 px-2 w-full">
        <CaractProfile text={"Spanish & English"} icon={<MdTranslate />} />
        <CaractProfile text={"Argentina"} icon={<FaLocationDot />} />
        <CaractProfile text={"23 y/o"} icon={<FaCalendar />} />
        <CaractProfile text={"Coffee Addict"} icon={<VscCoffee />} />
        <CaractProfile text={"Gym Goer"} icon={<GiWeightLiftingUp />} />
      </div>

      <div className="flex w-full mt-4">
        <button className="bg-[#8b99f8] hover:bg-[#8b99f8]/80 rounded-2xl p-3 w-1/2 mr-2 items-center flex justify-center text-[#000000] cursor-pointer">
          <p className="pr-2 text-2xl" onClick={() => window.location.href = 'mailto:sergiodannunzio@hotmail.com'}>
            <IoIosMail />
          </p> Hire Me
        </button>
        <button className="bg-[#414141] hover:bg-[#414141]/80 rounded-2xl p-3 w-1/2 ml-2 items-center flex justify-center cursor-pointer"
          onClick={() => window.open('https://github.com/Sergio-Dannunzio', '_blank')}>
          <p className="pr-2 text-2xl"><FaGithub /></p> GitHub
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;