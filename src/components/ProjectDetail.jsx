import React from "react";



const ProjectDetail = ({title, text, featured, img, stacks }) => {
  return (
    <>
      <div className="flex flex-col bg-[#2020203e] p-1 rounded-lg my-2 justify-center mx-2">
            <img src={img} alt="" className="w-full" />
            <div>
                <div className="flex">
                    <h1>{title}</h1>
                    <p>{featured}</p>
                </div>
                <div className="w-full">
                  <p className="w-full">{text}</p>
                </div>
                <div className="flex">
                  {stacks.map((stack, index) => (
                    <div key={index} className={`px-1 py-0.5 ${stack.bgcolor} rounded-2xl mx-1 flex`}>
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