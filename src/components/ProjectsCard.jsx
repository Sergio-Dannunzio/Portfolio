import React from "react";
import profile from "../assets/profile.jpg";
import page1 from "../assets/page1.png";
import page2 from "../assets/page2.png";
import page3 from "../assets/page3.png";
import page4 from "../assets/page4.png";
import page5 from "../assets/page5.png";
import { FaCode } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { BsSuitcaseLgFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/autoplay';

const images = [page1, page2, page3, page4, page5];

const ProjectsCard = () => {
  
  const navigate = useNavigate();

  const handleShowProjects = () => {
    navigate(`/projects`);
  };
  
  return (
    <>
      <div className="flex flex-col bg-[#17171790] p-7 rounded-2xl border border-[#262626] max-w-[580px] w-full h-fit">
        <div className="flex mb-2">
          <BsSuitcaseLgFill className="text-[#8b99f8] text-3xl mr-2"/>
          <h1 className="text-2xl">Projects</h1>
        </div>
        <p className="text-sm mb-2 text-[#5d5d5d]">Here are some of the projects i have worked on</p>
        <div className="opacity-50">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={2.5}
                autoplay={{ 
                    delay: 0, // Sin pausas entre las imágenes
                    disableOnInteraction: true, // Sigue funcionando al interactuar
                    pauseOnMouseEnter: false // No pausar al poner el mouse encima
                }}
                speed={6000} // Desplazamiento suave y continuo
                loop={true} // Habilitar loop continuo
                loopAdditionalSlides={images.length}
                allowTouchMove={false}
                >
                <SwiperSlide><img src={page1} alt="" className="rounded-xl h-[96px]"/></SwiperSlide>
                <SwiperSlide><img src={page3} alt="" className=" rounded-xl h-[96px]"/></SwiperSlide>
                <SwiperSlide><img src={page4} alt="" className=" rounded-xl h-[96px]"/></SwiperSlide>
                <SwiperSlide><img src={page2} alt="" className="rounded-xl h-[96px]"/></SwiperSlide>
                <SwiperSlide><img src={page5} alt="" className="rounded-xl h-[96px]"/></SwiperSlide>
                <SwiperSlide><img src={page1} alt="" className="rounded-xl h-[96px]"/></SwiperSlide>
                <SwiperSlide><img src={page3} alt="" className=" rounded-xl h-[96px]"/></SwiperSlide>
                <SwiperSlide><img src={page4} alt="" className=" rounded-xl h-[96px]"/></SwiperSlide>
                <SwiperSlide><img src={page2} alt="" className=" rounded-xl h-[96px]"/></SwiperSlide>
                <SwiperSlide><img src={page5} alt="" className=" rounded-xl h-[96px]"/></SwiperSlide>
            </Swiper>
        </div>
        <div className="flex justify-center w-full mt-4">
          <button className="bg-[#8b99f8] hover:bg-[#8b99f8]/80 transition rounded-xl p-3 mt-3 items-center flex justify-center text-[#000000] text-[14px]" 
          onClick={() => handleShowProjects()}><p className="pr-2 text-[18px]"><FaCode   /></p> View All Projects</button>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;