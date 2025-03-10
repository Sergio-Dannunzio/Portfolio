import ProjectDetail from "../components/ProjectDetail";
import page1 from "../assets/page1.png";
import page3 from "../assets/page3.png";
import page4 from "../assets/page4.png";
import page5 from "../assets/page5.png";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaSass } from "react-icons/fa";

const stacks33 = [
  { text: "Angular", bgcolor: "bg-[#ff3a3a]/10", color: "text-[#ff3a3a]", icon: <FaNodeJs  /> },
  { text: "Typescript", bgcolor: "bg-[#5B6FB6]/10", color: "text-[#5B6FB6]", icon: <SiTypescript  /> },
  { text: "Sass", bgcolor: "bg-[#ff6ad5]/10", color: "text-[#ff6ad5]", icon: <FaSass  />  },
];

const stacksBarilo = [
  { text: "React", bgcolor: "bg-[#0091FF]/10", color: "text-[#0091FF]", icon: <FaReact  />   },
  { text: "Tailwind CSS", bgcolor: "bg-[#38BDF8]/10", color: "text-[#38BDF8]", icon: <RiTailwindCssFill  />  },
  { text: "Node.js", bgcolor: "bg-[#339933]/10", color: "text-[#339933]", icon: <FaNodeJs  />   },
  { text: "Java", bgcolor: "bg-[#999933]/10", color: "text-[#999933]", icon: <FaJava  />   },
];

const stacksCrypto = [
  { text: "React", bgcolor: "bg-[#0091FF]/10", color: "text-[#0091FF]", icon: <FaReact  />   },
  { text: "TypeScript", bgcolor: "bg-[#5B6FB6]/10", color: "text-[#5B6FB6]", icon: <SiTypescript  />   },
];

const stacksTranquiliza = [
  { text: "React", bgcolor: "bg-[#0091FF]/10", color: "text-[#0091FF]", icon: <FaReact  />   },
  { text: "JavaScript", bgcolor: "bg-[#F7DF1E]/10", color: "text-[#F7DF1E]", icon: <SiJavascript  />  },
  { text: "Tailwind CSS", bgcolor: "bg-[#38BDF8]/10", color: "text-[#38BDF8]", icon: <RiTailwindCssFill  />  },
  { text: "Node.js", bgcolor: "bg-[#339933]/10", color: "text-[#339933]", icon: <FaNodeJs  />   },
  { text: "Mongodb", bgcolor: "bg-[#789933]/10", color: "text-[#789933]", icon: <SiMongodb  />   },
];


const ProjectsDetail = () => {
    return (
      <>
          <div className="flex flex-col px-24 xl:px-72">
            <div className="w-full flex items-center flex-col my-12">
              <h1 className="text-3xl text-center md:text-4xl lg:text-5xl">Some of my projects</h1>
              <p className="text-sm md:text-base mt-4 text-center text-[#b5b5b5]">Here you can find a collection of my public/open-source projects.</p>
              <p className="text-sm md:text-base text-center text-[#b5b5b5]">Feel free to explore and check them out!</p>
            </div>
            <div className="flex w-full">
              <ProjectDetail title={"33 Inmortals"} 
                img={page1} 
                text={"loremaaaaa aaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaa"}
                featured={""}
                stacks={stacks33}
                href={"https://sergio-dannunzio.github.io/game-app/"}
                hrefCode={"https://github.com/Sergio-Dannunzio/game-app"}></ProjectDetail>
              <ProjectDetail title={"Bariló"}
               img={page3}
                text={"loremaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaa"}
                featured={""}
                stacks={stacksBarilo}
                isfeatured={true}
                href={"https://barilo.vercel.app/"}
                hrefCode={"https://github.com/IgrowkerTraining/i003-barilo-front"}></ProjectDetail>
            </div>
            <div className="flex">
              <ProjectDetail title={"Crypto market"} img={page4}
               text={"loremaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaa"}
               featured={""}
               stacks={stacksCrypto}
               href={"https://sergio-dannunzio.github.io/crypto-tracker.github.io/"}
               hrefCode={"https://github.com/Sergio-Dannunzio/crypto-tracker.github.io"}></ProjectDetail>
              <ProjectDetail title={"Tranquiliza 360°"} img={page5}
               text={"loremaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaa"}
               featured={""}
               stacks={stacksTranquiliza}
               isfeatured={true}
               href={"https://tranquiliza360-pps.vercel.app/"}
               hrefCode={"https://github.com/Sergio-Dannunzio/Tranquiliza360-PPS"}></ProjectDetail>
            </div>
          </div>
  
      </>
    );
  };
  
  export default ProjectsDetail;
  