"use client";
import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

const links = [
    { name: "Home",
      path: "/" ,
    },
    { name: "services",
      path: "/services" ,
    },
    { name: "resume", 
      path: "/resume" ,
    },
    { name: "work", 
     path: "/work",
    },
    { name: "contact",
      path: "/contact" ,
    },
];

const Nav = () => {
  const pathname = usePathname();

  return ( 
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isActive = pathname === link.path; 
        return (
          <Link
           href={link.path} 
           key={index} className={`${
            link.path === pathname && "text-[#2391FF] border-b-2 border-[#2391FF]"
           } capitalize font-medium hover:text-[#2391FF] transition-all`}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
