import React from "react";



const Stack = ({ text, icon }) => {
  return (
    <>
      <div className="flex flex-col bg-[#000000] p-1 rounded-lg my-2 h-15 justify-center">
        <div className="flex h-full items-center">
            <div className="bg-[#1b1b1bc6] w-12 h-full mr-2 rounded-lg flex justify-center items-center text-[#8b99f8]">
                <p className="text-3xl">{icon}</p>
            </div>
            <h1 className="text-md">{text}</h1>
        </div>
      </div>
    </>
  );
};

export default Stack;