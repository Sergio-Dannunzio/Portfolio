import ProjectDetail from "../components/ProjectDetail";
import page1 from "../assets/page1.png";
import page3 from "../assets/page3.png";
import page4 from "../assets/page4.png";
import page5 from "../assets/page5.png";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";

const stacks33 = [
  { text: "Angular", bgcolor: "bg-red-500", color: "text-green-100", icon: <FaNodeJs  /> },
  { text: "Typescript", bgcolor: "bg-blue-500", color: "text-green-100", icon: <FaNodeJs  /> },
  { text: "Sass", bgcolor: "bg-green-500", color: "text-green-100", icon: <FaNodeJs  />  },
];

const stacksTranquiliza = [
  { text: "React", bgcolor: "bg-[#0091FF]/10", color: "text-[#0091FF]", icon: <FaReact  />   },
  { text: "JavaScript", bgcolor: "bg-[#F7DF1E]/10", color: "text-[#F7DF1E]", icon: <SiJavascript  />  },
  { text: "Tailwind CSS", bgcolor: "bg-[#38BDF8]/10", color: "text-[#38BDF8]", icon: <RiTailwindCssFill  />  },
  { text: "Node.js", bgcolor: "bg-[#339933]/10", color: "text-[#339933]", icon: <FaNodeJs  />   },
];


const stacksBack = [

];
const stacksDeveloper = [

];

const ProjectsDetail = () => {
    return (
      <>
          <div className="flex flex-col px-4">
            <div className="flex w-full">
              <ProjectDetail title={"33 Inmortals"} 
                img={page1} 
                text={"loremaaaaa aaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaa"}
                featured={""}
                stacks={stacks33}></ProjectDetail>
              <ProjectDetail title={"Bariló"}
               img={page3}
                text={"loremaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaa"}
                featured={""}
                stacks={stacks33}></ProjectDetail>
            </div>
            <div className="flex">
              <ProjectDetail title={"Crypto market"} img={page4}
               text={"loremaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaa"}
               featured={""}
               stacks={stacks33}></ProjectDetail>
              <ProjectDetail title={"Tranquiliza 360°"} img={page5}
               text={"loremaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaa"}
               featured={""}
               stacks={stacksTranquiliza}></ProjectDetail>
            </div>
          </div>
  
      </>
    );
  };
  
  export default ProjectsDetail;
  