import React from 'react'
import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Social from '@/components/Social'
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'

const Home = () => {
  return (
    <section className="h-full">
     <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

        {/* text */}
        <div className="text-center xl:text-left order-2 xl:order-none">
         <span className="text-xl">Web Developer & Designer</span>
         <h1 className="h1 mb-6">
          Hello I'm <br/> <span className="text-[#2391FF]">Saba Yousuf</span>
         </h1>
         <p className="max-w-[500px] mb-9 text-white/88">
         I’m a passionate web developer skilled in creating engaging, dynamic, and user-friendly websites. With a focus on modern design and functionality. 
         </p>

         {/* btn & sociol media iocns */}
           <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button
            variant="outline"
            size="lg"
            className="uppercase flex items-center gap-2"
            >
              <span>Download CV</span>
               <FiDownload className="text-xl"/>
            </Button>
            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6"
               iconStyles="w-9 h-9 border border-[#2391FF] rounded-full flex justify-center items-center text-[#2391FF] text-base hover:bg-[#2391FF] hover:text-primary hover:transition-all duration-500" />
            </div>
           </div>
        </div>
        {/* photo */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo/>
        </div>
      </div>
     </div>
     <Stats/>
    </section>
  )
}

export default Home


