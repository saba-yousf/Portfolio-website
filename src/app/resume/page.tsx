"use client";
import { Description } from '@radix-ui/react-dialog';
import { LocaleRouteNormalizer } from 'next/dist/server/normalizers/locale-route-normalizer';
import { title } from 'process';
import {FaHtml5 , FaCss3 , FaJs , FaReact , FaFigma , FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss , SiNextdotjs} from 'react-icons/si'

const about = {
  title: "About Me",
  Description: 'Passionate web developer with expertise in creating dynamic and user-friendly websites. Driven by innovation, I strive to deliver exceptional digital experiences that meet client needs.',
  info: [
    { 
      fieldName: "Name", 
      fieldValue: "Saba Yousuf"
    },
    { 
      fieldName: "Phone", 
      fieldValue: "(+92) 312 345 6789" 
    },
    { 
      fieldName: "Experience",
      fieldValue: "3 Years"
    },
    {
       fieldName: "Nationality", 
      fieldValue: "Pakistani"
    },
    {
      
      fieldName: "Email",
      fieldValue: "saba.345@gmail.com"
    },
    {
       fieldName: "Languages",
      fieldValue: "English, Urdu"
    },
  ]
};

const experience = {
  icons: './icon.svg',
  title: "My Experience",
  description: "Showcasing my journey and the roles that have helped me grow as a professional in the web development field.",
  items: [
    {
      company: "CodeAlpha",
      position: "Internship",
      Duration: "3 Months",
    },
    {
      company: "Trigon",
      position: "Freelancer",
      Duration: "2023 - Present",
    },
  ]
};

const education = {
  icon: "./icon1.svg",
  title: "My Education",
  description: "A look into my academic background and certifications that have strengthened my technical and analytical skills.",
  items: [
    {
      institution: "Karachi University",
      degree: "BS in Islamic Studies",
      Duration: "2021 - Present",
    },
    {
      institution: "Governor Sindh I.T Initiative Program",
      degree: "Certified Cloud Applied Generative AI Engineer (GenEng)",
      Duration: "Present",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      Duration: "2023 - 2024",
    }
  ]
};

const skills = {
  title: "My Skills",
  description: "A toolkit of technical skills I've mastered to deliver high-quality web solutions and meet industry standards.",
  skillList: [
    {
     icon: <FaHtml5 />,
     name: "HTML 5"
     },
    {
       icon: <FaCss3 />,
      name: "CSS 3" 
    },
    { 
      icon: <FaJs />,
     name: "JavaScript" 
    },
    { 
      icon: <FaReact />,
     name: "React.js"
   },
    {
       icon: <SiNextdotjs />,
      name: "Next.js"
   },
    {
       icon: <SiTailwindcss />,
      name: "Tailwind CSS"
   },
    {
       icon: <FaNodeJs />, 
     name: "Node.js" 
    },
    { 
      icon: <FaFigma />, 
      name: "Figma" 
    },
  ]
};


import {Tabs , TabsContent , TabsList , TabsTrigger} from "@/components/ui/tabs";
import { Tooltip , TooltipContent , TooltipProvider , TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea} from '@/components/ui/scroll-area';
import {motion} from "framer-motion";

const Resume = () => {
  return (
   <motion.div 
   initial={{opacity:0}}
   animate={{
     opacity: 1 ,
     transition: {delay: 2.4 , duration: 0.4 , ease: "easeIn"},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
   >
    <div className="container mx-auto">
      <Tabs
      defaultValue="experience"
      className="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
        
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
         </TabsList>

         <div className="min-h-[70vh] w-full">
           <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold ">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item , index) => {
                    return(
                      <li key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl  flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-[#2391FF]">{item.Duration}</span>
                        <h3>{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-[#2391FF]"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
           </TabsContent> 

           <TabsContent value="education" className="w-full">
           <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold ">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item , index) => {
                    return(
                      <li key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl  flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-[#2391FF]">{item.Duration}</span>
                        <h3>{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-[#2391FF]"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

           <TabsContent value="skills" className="w-full h-full">
             <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm-grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                {skills.skillList.map((skill ,index) => {
                  return(
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl hover:text-[#2391FF] transition-all duration-300">
                            {skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )
                })}
              </ul>
             </div>
           </TabsContent>
           <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.Description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item , index) => {
                  return(
                    <li key={index}
                    className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
             </TabsContent>
         </div>
      </Tabs>
    </div>
    
   </motion.div>
  )
}

export default Resume
