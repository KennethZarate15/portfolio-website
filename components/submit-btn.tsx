import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] rounded-full text-white outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 disabled:scale-100 disabled:opacity-70 bg-gradient-to-r from-emerald-500 to-lime-500 animate-glow focus:ring-2 focus:ring-emerald-400/40"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-80" />{" "}
        </>
      )}
    </button>
  );
}
