"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-slate-300 -mt-6">
        Please contact me directly at{" "}
        <a className="underline decoration-emerald-500/40 underline-offset-2 text-emerald-400 hover:text-emerald-300 transition-colors" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 glassmorphism soft-shadow rounded-2xl p-4 sm:p-6 flex flex-col gap-3"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-slate-200 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500/40 focus:outline-none transition-all hover:neon-border"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-4 text-slate-200 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500/40 focus:outline-none transition-all hover:neon-border"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
