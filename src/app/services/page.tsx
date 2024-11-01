"use client";
import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import { title } from "process";
import { Description } from "@radix-ui/react-dialog";

const services = [
  {
    num: '01',
    title: 'Web Development',
    Description: 'We create responsive and dynamic websites using the latest technologies, tailored to meet your business needs and ensure a seamless user experience across all devices.',
    href: ""
  },
  {
    num: '02',
    title: 'UI/UX Design',
    Description: 'Our UI/UX design services focus on creating visually appealing and intuitive interfaces, enhancing user engagement and ensuring a smooth journey through your digital platform.',
    href: ""
  },
  {
    num: '03',
    title: 'E-Commerce Development',
    Description: 'From setting up online stores to implementing secure payment gateways, we provide end-to-end e-commerce solutions to help you establish and grow your online business.',
    href: ""
  },
  {
    num: '04',
    title: 'Logo Design',
    Description: 'We design unique and memorable logos that capture the essence of your brand, helping you stand out and make a lasting impression on your target audience.',
    href: ""
  },
];

import {motion} from "framer-motion";

const Services  = () => {
  return (
   <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <motion.div 
      initial={{opacity: 0}}
       animate={{
        opacity: 1,
        transition: { delay: 2.4 , duration: 0.4 , ease: "easeIn"}
       }}
       className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
        {services.map((service, index) => {
            return (
              <div key={index}
              className="flex-1 flex  flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}</div>
                  <Link href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-[#2391FF] transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight  className="text-primary text-3xl"/>
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#2391FF] transition-all duration-500">
                  {service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.Description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Services 
