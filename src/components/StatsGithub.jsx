import React from "react";

const StatsGithub = () => {
  return (
    <>
      <div className="flex flex-col bg-[#17171790] p-7 rounded-2xl border border-[#262626] max-w-[580px] w-full">
        <h1 className="text-2xl">GitHub Stats</h1>
        <div className="flex flex-col items-center mt-6">
          <img src="https://github-readme-stats.vercel.app/api?username=Sergio-Dannunzio&theme=material-palenight&show_icons=true&hide_border=true&count_private=true" alt=""
          className="max-w-[383px] w-full" />
          <img src="https://github-readme-streak-stats.herokuapp.com/?user=Sergio-Dannunzio&theme=material-palenight&hide_border=true" alt=""
          className="max-w-[383px] w-full" />
        </div>
      </div>
    </>
  );
};

export default StatsGithub;