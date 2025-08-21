"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-20 sm:mb-32 md:mb-40 px-4">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "rgba(6, 182, 212, 0.6)" : "rgba(255, 255, 255, 0.35)"}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light"
                    ? "rgba(255, 255, 255, 0.8)"
                    : "rgba(17, 24, 39, 0.6)",
                color: theme === "light" ? "#0f172a" : "rgba(255,255,255,0.95)",
                boxShadow:
                  "0 10px 30px rgba(2, 6, 23, 0.15), inset 0 0 0 1px rgba(255,255,255,0.06)",
                border:
                  theme === "light"
                    ? "1px solid rgba(15, 23, 42, 0.08)"
                    : "1px solid rgba(255, 255, 255, 0.15)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                borderRadius: "0.75rem",
                backdropFilter: "blur(10px) saturate(140%)",
                WebkitBackdropFilter: "blur(10px) saturate(140%)",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid rgba(255, 255, 255, 0.8)"
                    : "0.4rem solid rgba(17, 24, 39, 0.6)",
              }}
              dateClassName={theme === "light" ? "text-gray-700 font-medium" : "text-gray-300 font-medium"}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                color: "#fff",
                boxShadow:
                  "0 6px 18px rgba(139, 92, 246, 0.35), 0 0 0 4px rgba(255,255,255,0.1)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize text-gray-900 dark:text-white">{item.title}</h3>
              <p className="font-normal !mt-0 text-gray-700 dark:text-gray-300">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-800 dark:text-gray-200">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
