import React from "react";
import { FaStar } from "react-icons/fa";


const ProjectDetail = ({title, text, isfeatured, img, stacks }) => {
  return (
    <>
      <div className="flex flex-col bg-[#2020203e] p-1 rounded-lg my-2 justify-center mx-2">
            <img src={img} alt="" className="w-full" />
            <div className="px-4 py-2">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-bold">{title}</h1>
                    {isfeatured && <p className="bg-[#cfaaff]/40 text-xs text-[#cfaaff] items-center flex h-5 rounded-3xl px-2"><FaStar className="mr-1"/>Featured</p>}
                </div>
                <div className="w-full mt-2">
                  <p className="w-full">{text}</p>
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
            <div className="flex">
                <button>Live Demo</button>
                <button>Source</button>
            </div>
        
      </div>
    </>
  );
};

export default ProjectDetail;