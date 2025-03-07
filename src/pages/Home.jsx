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
        <div className="flex flex-col 2xl:flex-row">
          <div className="flex flex-col items-center w-full lg:flex-row 2xl:max-w-2/3 lg:items-start">
            <div className="flex flex-col w-full px-2 lg:max-w-1/2">
              <div className="my-2">
                <ProfileCard></ProfileCard>
              </div>
              <div className="my-2">
                <StackCard text={"Backend Stack"} stacks={stacksBack} />
              </div>
            </div>
            <div className="flex flex-col w-full px-2 lg:max-w-1/2">
              <div className="my-2">
                <ProjectsCard />
              </div>
              <div className="items-center w-full my-2">
                <StatsGithub></StatsGithub>
              </div>
            </div>
          </div>
          <div className="flex w-full ">
            <div className="flex flex-col w-full">
              <div className="flex flex-col items-center w-full 2xl:flex-col lg:flex-row lg:items-start">
                <div className="w-full px-2 my-2 lg:w-1/2 2xl:w-full">
                  <StackCard text={"Frontend Stack"} stacks={stacksFront} />
                </div>
                <div className="w-full px-2 my-2 lg:w-1/2 2xl:w-full">
                  <StackCard text={"Development Tools"} stacks={stacksDeveloper} />
                </div>
                <div className="w-full px-2 my-2 lg:hidden">
                  <StatsGithub></StatsGithub>
                </div>
              </div>
              <div className="w-full px-2">
                <div className="my-2">
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
