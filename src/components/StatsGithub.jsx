import React from "react";

const StatsGithub = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-[#17171790] p-7 rounded-2xl border border-[#262626]">
        <img src="https://github-readme-stats.vercel.app/api?username=Sergio-Dannunzio&theme=material-palenight&show_icons=true&hide_border=true&count_private=true" alt="" />
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=Sergio-Dannunzio&theme=material-palenight&hide_border=true" alt="" />
      </div>
    </>
  );
};

export default StatsGithub;