import React from "react";
import profile from "../assets/profile.jpg";
import page1 from "../assets/page1.png";
import page2 from "../assets/page2.png";
import page3 from "../assets/page3.png";
import page4 from "../assets/page4.png";
import page5 from "../assets/page5.png";
import { IoIosMail } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const images = [page1, page2, page3, page4, page5];

const ProjectsCard = () => {
  return (
    <>
      <div className="flex flex-col bg-[#171717] p-7 rounded-2xl border border-[#262626] max-w-[480px]">
        <h1 className="text-2xl">Projects</h1>
        <p className="text-sm">Here are some of the projects i have worked on</p>
        <div className="">
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
          <button className="bg-[#8b99f8] rounded-2xl p-3 w-1/2 mr-2 items-center flex justify-center text-[#000000]"><p className="pr-2 text-2xl"><IoIosMail  /></p> Hire Me</button>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;