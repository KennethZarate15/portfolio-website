"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useState, useEffect } from "react";
import { links } from "@/lib/data";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [text, setText] = useState("");
  const fullText = "4th Year Computer Security Student";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 sm:mb-28 max-w-[50rem] text-center scroll-mt-[100rem] pt-24 sm:pt-28 px-4"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            className="animate-float"
          >
            <Image
              src="/me.jpg"
              alt="Profile"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-8 sm:mb-10 mt-4 px-2 sm:px-4 text-xl sm:text-4xl font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold gradient-text">Hello, I'm Kenneth Str4y</span>
        <br />
        <span className="text-2xl sm:text-3xl">
          <span className="gradient-text">{text}</span>
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
        </span>
      </motion.h1>

      <motion.p
        className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-300 px-2 sm:px-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Passionate about computer security and exploring emerging technologies. Currently focusing on building knowledge in cybersecurity, ethical hacking, and secure systems development.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2 sm:px-4 text-base sm:text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer glassmorphism animate-glow"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Let's Connect{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer glassmorphism"
          href="/CV.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex gap-4">
          <a
            className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer glassmorphism"
            href="https://www.linkedin.com/in/kenneth-valledor-zarate-64a11b274/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 text-white flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer glassmorphism"
            href="https://github.com/KennethZarate15"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
