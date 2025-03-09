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


const stacksFront = [
  { text: "Javascript", icon: <FaAngular  /> },
  { text: "Typescript", icon: <FaReact  /> },
  { text: "Tailwind CSS", icon: <RiTailwindCssFill  /> },
  { text: "Sass", icon: <FaSass  /> },
];

const stacksBack = [
  { text: "Java", icon: <FaJava  /> },
  { text: "SpringBoot", icon: <BiLogoSpringBoot  /> },
  { text: "My Sql", icon: <DiMysql  /> },
  { text: "Php", icon: <FaPhp   /> },
];
const stacksDeveloper = [
  { text: "Github", icon: <FaGithub  /> },
  { text: "Visual Studio Code", icon: <BiLogoVisualStudio   /> },
  { text: "Postman", icon: <SiPostman   /> },
  { text: "Figma", icon: <SiFigma   /> },
];

const Home = () => {
  return (
    <>
        <div className="flex flex-col 2xl:flex-row xl:justify-between lg:items-center 2xl:items-start">
          <div className="flex flex-col lg:flex-row 2xl:w-2/3 2xl:justify-around lg:justify-center">
            <div className="flex flex-col px-2 lg:max-w-1/2 ">
              <div className="my-2 w-full flex justify-center">
                <ProfileCard></ProfileCard>
              </div>
              <div className="my-2 w-full flex justify-center">
                <StackCard text={"Backend Stack"} stacks={stacksBack} />
              </div>
              <div className="my-2 hidden 2xl:flex 2xl:justify-center">
                  <FraseCard></FraseCard>
                </div>
            </div>
            <div className="flex flex-col px-2 lg:max-w-1/2">
              <div className="hidden my-2 lg:flex lg:justify-center">
                <ProjectsCard />
              </div>
              <div className="items-center hidden w-full my-2 lg:block">
                <StatsGithub></StatsGithub>
              </div>
            </div>
          </div>
          <div className="flex w-full 2xl:w-1/3">
            <div className="flex flex-col w-full">
              <div className="flex flex-col justify-center items-center w-full 2xl:flex-col lg:flex-row lg:items-start">
                <div className="w-full px-2 my-2 lg:w-[540px] 2xl:w-full flex justify-center lg:justify-end 2xl:justify-center">
                  <StackCard text={"Frontend Stack"} stacks={stacksFront} />
                </div>
                <div className="w-full px-2 my-2 lg:w-[540px] 2xl:w-full flex justify-center lg:justify-start 2xl:justify-center">
                  <StackCard text={"Development Tools"} stacks={stacksDeveloper} />
                </div>
                <div className="w-full px-2 my-2 lg:hidden flex justify-center">
                  <StatsGithub></StatsGithub>
                </div>
              </div>
              <div className="flex flex-col w-full px-2 lg:max-w-1/2 ">
                <div className="my-2 lg:hidden flex justify-center">
                  <ProjectsCard />
                </div>
              </div>
              <div className="w-full px-2">
              <div className="my-2 2xl:hidden flex justify-center">
                  <FraseCard></FraseCard>
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  );
};

export default Home;
