import React from "react";



const ProjectDetail = ({ text, icon, img, color }) => {
  return (
    <>
      <div className="flex flex-col bg-[#000000] p-1 rounded-lg my-2 h-15 justify-center mx-2">
            <img src={img} alt="" className="h-[354px]" />
            <div>
                <div className="flex">
                    <h1>title</h1>
                    <p>featured</p>
                </div>
                <p>text</p>
                <div className="flex">
                    <p className="">stack</p>
                    <p>stack</p>
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