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
];

const Home = () => {
  return (
    <>
        <div className="flex">
          <div className="flex flex-col lg:max-w-1/3 w-full px-2">
            <div className="my-2">
              <ProfileCard></ProfileCard>
            </div>
            <div className="my-2">
              <StackCard text={"Backend Stack"} stacks={stacksBack} />
            </div>
          </div>
          <div className="flex flex-col lg:max-w-1/3 w-full px-2">
            <div className="my-2">
              <ProjectsCard />
            </div>
            <div className="my-2 w-full items-center">
              <StatsGithub></StatsGithub>
            </div>
          </div>
          <div className="flex flex-col lg:max-w-1/3 w-full px-2">
            <div className="my-2">
              <StackCard text={"Frontend Stack"} stacks={stacksFront} />
            </div>
            <div className="my-2">
              <StackCard text={"Develop Stack"} stacks={stacksDeveloper} />
            </div>
            <div className="my-2">
              <FraseCard></FraseCard>
            </div>
          </div>
        </div>

    </>
  );
};

export default Home;
