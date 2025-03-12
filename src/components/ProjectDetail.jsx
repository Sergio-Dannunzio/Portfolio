import React from "react";
import { FaStar } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { FaCode } from "react-icons/fa";

const ProjectDetail = ({title, text, isfeatured, img, stacks, href, hrefCode }) => {

  const navigate = useNavigate();

  const handleShowProject = () => {
    window.open(href, "_blank");
  };

  const handleShowCode = () => {
    window.open(hrefCode, "_blank");
  };

  return (
    <>
      <div className="group flex flex-col bg-[#2020203e] rounded-xl my-4 justify-between mx-2 overflow-hidden">
        <div className="relative w-full overflow-hidden">
          <img src={img} alt="" className=" w-full object-cover transition-transform duration-400 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-opacity duration-400 ease-in-out"></div>
        </div>
            <div className="px-4 py-2">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-bold group-hover:text-[#cfaaff]/70">{title}</h1>
                    {isfeatured && <p className="bg-[#cfaaff]/40 text-xs text-[#cfaaff] items-center flex h-5 rounded-3xl px-2"><FaStar className="mr-1"/>Featured</p>}
                </div>
                <div className="w-full mt-2">
                  <p className="w-full text-sm">{text}</p>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {stacks.map((stack, index) => (
                    <div key={index} className={`px-1 py-0.5 ${stack.bgcolor} rounded-2xl flex`}>
                      <p className={` ${stack.color}`}>{stack.icon}</p>
                      <p className={`px-1 ${stack.color} text-xs`}>{stack.text} </p>
                    </div>
                  ))}
                </div>
            </div>
            <div className="flex items-center justify-center bg-[#414141]/30 py-4 mt-2 rounded-b-xl w-full">
                <button className="bg-[#8b99f8] flex justify-center items-center w-full p-2.5 mx-1.5 sm:w-1/3 rounded-xl hover:bg-[#8b99f8]/80 transition text-sm"
                onClick={() => handleShowProject()}><TbWorld className="mr-1" /> Live Demo</button>
                <button className="bg-[#414141] rounded-xl p-2.5 w-full mx-1.5 sm:w-1/3 items-center flex justify-center hover:bg-[#414141]/70 transition text-sm"
                onClick={() => handleShowCode()}><FaCode className="mr-1"/>Source</button>
            </div>
        
      </div>
    </>
  );
};

export default ProjectDetail;