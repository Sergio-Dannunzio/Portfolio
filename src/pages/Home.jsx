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
        <div>
          <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 gap-4 grid-rows-2 md:grid-cols-2 md:grid-rows-3">
            <div className="order-1 md:order-none">
              <ProfileCard></ProfileCard>
            </div>
            <div className="order-3 md:order-none">
              <ProjectsCard></ProjectsCard>
            </div>
            <div className="order-5 md:order-none">
              <StackCard text={"Frontend Stack"} stacks={stacksFront}></StackCard>
            </div>
            <div className="order-2 md:order-none">
              <StackCard StackCard text={"Develop Stacksssss"} stacks={stacksDeveloper}></StackCard>
            </div>
            <div className="order-4 md:order-none">
              <StackCard text={"Backend Stack"} stacks={stacksBack}></StackCard>
            </div>
            <div className="order-6 md:order-none">
              <StackCard StackCard text={"Develop Stack"} stacks={stacksDeveloper}></StackCard>
            </div>
          </div>

        </div>

    </>
  );
};

export default Home;
