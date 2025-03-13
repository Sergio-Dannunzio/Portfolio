import ProfileCard from "../components/ProfileCard";
import ProjectsCard from "../components/ProjectsCard";
import StackCard from "../components/StackCard";

import { RiTailwindCssFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import FraseCard from "../components/FraseCard";
import StatsGithub from "../components/StatsGithub";
import RightsCard from "../components/RightsCard";


const stacksFront = [
  { text: "Javascript", icon: <FaAngular  />, href: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
  { text: "Typescript", icon: <FaReact  />, href: "https://www.typescriptlang.org/" },
  { text: "Tailwind CSS", icon: <RiTailwindCssFill  />, href: "https://tailwindcss.com/" },
  { text: "Sass", icon: <FaSass  />, href: "https://sass-lang.com/" },
];

const stacksBack = [
  { text: "Java", icon: <FaJava  />, href: "https://www.java.com/en/" },
  { text: "SpringBoot", icon: <BiLogoSpringBoot  />, href: "https://spring.io/" },
  { text: "MySql", icon: <DiMysql  />, href: "https://www.mysql.com/" },
  { text: "Php", icon: <FaPhp   />, href: "https://www.php.net/" },
];
const stacksDeveloper = [
  { text: "Github", icon: <FaGithub  />, href: "https://github.com/" },
  { text: "Visual Studio Code", icon: <BiLogoVisualStudio   />, href: "https://code.visualstudio.com/" },
  { text: "Postman", icon: <SiPostman   />, href: "https://www.postman.com/" },
  { text: "Figma", icon: <SiFigma   />, href: "https://www.figma.com/" },
];

const Home = () => {
  return (
    <>
        <div className="flex flex-col 2xl:flex-row xl:justify-between lg:items-center 2xl:items-start">
          <div className="flex flex-col lg:flex-row 2xl:w-2/3 2xl:justify-around lg:justify-center">
            <div className="flex flex-col px-2 lg:max-w-1/2 ">
              <div className="my-2 w-full flex justify-center slide-in-l"
              style={{ "--animation-duration": "0.75s" }}>
                <ProfileCard></ProfileCard>
              </div>
              <div className="my-2 w-full flex justify-center slide-in-l"
              style={{ "--animation-duration": "0.8s" }}>
                <StackCard text={"Backend Stack"} stacks={stacksBack} />
              </div>
              {/*<div className="my-2 hidden 2xl:flex 2xl:justify-center slide-in-l"
              style={{ "--animation-duration": "0.85s" }}>
                  <FraseCard></FraseCard>
                </div>*/}
            </div>
            <div className="flex flex-col px-2 lg:max-w-1/2">
              <div className="hidden my-2 lg:flex lg:justify-center slide-in-l"
              style={{ "--animation-duration": "0.55s" }}>
                <ProjectsCard />
              </div>
              <div className="items-center hidden w-full my-2 lg:block slide-in-l"
              style={{ "--animation-duration": "0.6s" }}>
                <StatsGithub></StatsGithub>
              </div>
              <div className="items-center hidden w-full my-2 lg:block slide-in-l"
              style={{ "--animation-duration": "0.6s" }}>
                <RightsCard></RightsCard>
              </div>
            </div>
          </div>
          <div className="flex w-full 2xl:w-1/3">
            <div className="flex flex-col w-full">
              <div className="flex flex-col justify-center items-center w-full 2xl:flex-col lg:flex-row lg:items-start">
                <div className="w-full px-2 my-2 lg:w-[540px] 2xl:w-full flex justify-center lg:justify-end 2xl:justify-center slide-in-l"
                style={{ "--animation-duration": "0.45s" }}>
                  <StackCard text={"Frontend Stack"} stacks={stacksFront} />
                </div>
                <div className="w-full px-2 my-2 lg:w-[540px] 2xl:w-full flex justify-center lg:justify-start 2xl:justify-center slide-in-l"
                style={{ "--animation-duration": "0.5s" }}>
                  <StackCard text={"Development Tools"} stacks={stacksDeveloper} />
                </div>
                <div className="w-full px-2 my-2 lg:hidden flex justify-center slide-in-l"
                style={{ "--animation-duration": "0.55s" }}>
                  <StatsGithub></StatsGithub>
                </div>
              </div>
              <div className="flex flex-col w-full px-2 lg:max-w-1/2 ">
                <div className="my-2 lg:hidden flex justify-center slide-in-l">
                  <ProjectsCard />
                </div>
              </div>
              <div className="w-full px-2">
              {/*<div className="my-2 2xl:hidden flex justify-center slide-in-l">
                  <FraseCard></FraseCard>
                </div>*/}
              </div>
            </div>
          </div>
        </div>

    </>
  );
};

export default Home;
