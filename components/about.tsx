"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-16 sm:mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 px-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
    <p className="mb-3 text-base sm:text-lg">
  I am a <span className="font-medium">4th year Computer Security student</span> 
  with a passion for protecting digital systems. I enjoy solving problems and 
  learning about topics like <span className="font-medium">network security, 
  ethical hacking,</span> and <span className="font-medium">secure software</span>. 
  I am always eager to improve my skills and explore new technologies in 
  <span className="font-medium">cybersecurity</span>.
</p>


      <p className="text-base sm:text-lg">
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
     
      </p>
    </motion.section>
  );
}
