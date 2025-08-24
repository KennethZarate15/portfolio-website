"use client";

import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <motion.header
      className="fixed top-0 left-1/2 -translate-x-1/2 z-[999] py-3 px-4 sm:py-4 sm:px-8 glassmorphism mt-8"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex items-center justify-between max-w-[95vw] sm:max-w-none">
        <ul className="flex items-center gap-4 sm:gap-8 overflow-x-auto whitespace-nowrap pr-2">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a
                className={`text-xs sm:text-sm font-medium transition-colors hover:text-cyan-400 ${
                  activeSection === link.name
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white"
                }`}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
              </a>
              {activeSection === link.name && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
