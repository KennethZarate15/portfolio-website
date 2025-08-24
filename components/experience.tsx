"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-20 sm:mb-32 md:mb-40 px-4">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="rgba(16, 185, 129, 0.5)">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <div className="will-change-transform" style={{ animation: "fadeUp 500ms ease both", animationDelay: `${index * 80}ms` }}>
            <VerticalTimelineElement
              contentStyle={{
                background: "rgba(0, 0, 0, 0.7)", // Updated background color
                color: "#e2e8f0", // Themed text color
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)", // Updated box shadow
                border: "1px solid rgba(15, 23, 42, 0.08)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                borderRadius: "0.75rem",
                backdropFilter: "blur(10px) saturate(140%)",
                WebkitBackdropFilter: "blur(10px) saturate(140%)",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid rgba(0, 0, 0, 0.7)", // Updated arrow color
              }}
              dateClassName="text-gray-300 font-medium"
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "linear-gradient(135deg, var(--gradient-start), var(--gradient-middle))",
                color: "#fff",
                boxShadow: "0 6px 18px rgba(16, 185, 129, 0.35), 0 0 0 4px rgba(255,255,255,0.08)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize gradient-text">{item.title}</h3>
              <p className="font-normal !mt-0 text-gray-300">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-200">
                {item.description}
              </p>
            </VerticalTimelineElement>
            </div>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
