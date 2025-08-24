import Header from "@/components/header";
import "./globals.css";
import "react-vertical-timeline-component/style.min.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import VideoBackground from "@/components/video-background"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kenneth | Personal Portfolio",
  description: "Kenneth is a Network Security student without experience yet.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} nice-scrollbar text-white relative pt-28 sm:pt-36`}
      >
   
        <VideoBackground />
    
        <div className="noise-overlay" />

      
        <div className="bg-indigo-400/20 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-blue-400/20 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}