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
import 'swiper/css';
import 'swiper/css/autoplay';

const images = [page1, page2, page3, page4, page5];

const ProjectsCard = () => {
  return (
    <>
      <div className="flex flex-col bg-[#17171790] p-7 rounded-2xl border border-[#262626] w-full h-fit">
        <div className="flex mb-2">
          <BsSuitcaseLgFill className="text-[#8b99f8] text-3xl mr-2"/>
          <h1 className="text-2xl">Projects</h1>
        </div>
        <p className="text-sm mb-2 text-[#5d5d5d]">Here are some of the projects i have worked on</p>
        <div className="opacity-50">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={1.5}
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
                <SwiperSlide><img src={page1} alt="" className="mx-auto rounded-xl"/></SwiperSlide>
                <SwiperSlide><img src={page3} alt="" className="mx-auto rounded-xl"/></SwiperSlide>
                <SwiperSlide><img src={page4} alt="" className="mx-auto rounded-xl"/></SwiperSlide>
                <SwiperSlide><img src={page2} alt="" className="mx-auto rounded-xl"/></SwiperSlide>
                <SwiperSlide><img src={page5} alt="" className="mx-auto rounded-xl"/></SwiperSlide>
                <SwiperSlide><img src={page1} alt="" className="mx-auto rounded-xl"/></SwiperSlide>
                <SwiperSlide><img src={page3} alt="" className="mx-auto rounded-xl"/></SwiperSlide>
                <SwiperSlide><img src={page4} alt="" className="mx-auto rounded-xl"/></SwiperSlide>
                <SwiperSlide><img src={page2} alt="" className="mx-auto rounded-xl"/></SwiperSlide>
                <SwiperSlide><img src={page5} alt="" className="mx-auto rounded-xl"/></SwiperSlide>
            </Swiper>
        </div>
        <div className="flex w-full mt-4 justify-center ">
          <button className="bg-[#8b99f8] rounded-xl p-2.5 mr-2 items-center flex justify-center text-[#000000] text-[14px]"><p className="pr-2 text-[18px]"><FaCode   /></p> View All Projects</button>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;