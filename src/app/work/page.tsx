"use client"

import {motion} from "framer-motion";
import React,  { useState } from "react";

import {Swiper , SwiperSlide} from "swiper/react"
import "swiper/css";

import {BsArrowUpRight , BsGithub} from "react-icons/bs";
import { Tooltip , TooltipContent , TooltipProvider , TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Age Calculator",
    description: "A tool that calculates age based on user input. Enter birthdate to get accurate age calculation in years, months, and days.",
    stack: [{name:"Html5"}, {name: "Css3"}, {name: "Javascript"}],
    image: "/project1.jpg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "ToDo App",
    description: "A user-friendly ToDo application for task management. Features include adding, editing, and deleting tasks with a simple interface.",
    stack: [{name:"Html5"}, {name: "Css3"}, {name: "Javascript"}],
    image: "/project2.jpg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "Book Library",
    description: "A digital book library to organize and search for books. Users can add book details, sort, and view their collection.",
    stack: [{name:"Html5"}, {name: "Css3"}, {name: "Javascript"}],
    image: "/project3.jpg",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "Static Resume",
    description: "A professional static resume template created with HTML, CSS, and JavaScript, designed for showcasing skills and experience.",
    stack: [{name:"Html5"}, {name: "Css3"}, {name: "Javascript"} , {name: "Typescript"}],
    image: "/project4.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "frontend",
    title: "Furniture Website",
    description: "A responsive furniture website with a user-friendly interface, showcasing various furniture items with detailed",
    stack: [{name:"Next.js"}, {name: "Tailwindcss"}, {name: "Figma Template"}] ,
    image: "/project5.jpg",
    live: "",
    
  }
];



const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    console.log("Current Index", currentIndex);
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#2391FF] transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-[#2391FF]">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-[#2391FF]" />
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-[#2391FF]" />
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </TooltipTrigger>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => setSwiperInstance(swiper)} // Initialize swiper instance here
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/60">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns 
                ContainerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-[#2391FF]  hover:bg-[#2391FF]-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles="text-2xl"
                swiper={swiperInstance} // Pass the swiper instance here
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;