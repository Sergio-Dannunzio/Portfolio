import React from "react";
import Stack from "./Stack";

const StackCard = ({ text, stacks }) => {
  return (
    <>
      <div className="flex flex-col bg-[#17171790] px-7 pt-7 pb-4 rounded-2xl border border-[#262626] max-w-[580px] w-full">
        <h1 className="text-2xl">{text}</h1>
        <div className="mt-4">
            {stacks.map((stack, index) => (
                //<Stack key={index} text={stack.text} icon={stack.icon} />
                <Stack key={index} text={stack.text} icon={stack.icon}></Stack>
            ))}
        </div>

      </div>
    </>
  );
};

export default StackCard;