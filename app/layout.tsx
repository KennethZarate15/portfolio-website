import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import VideoBackground from "@/components/video-background"; // 👈 updated import statement

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
        className={`${inter.className} nice-scrollbar text-gray-950 relative pt-28 sm:pt-36 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* 👇 video background goes here */}
        <VideoBackground />
        {/* subtle noise overlay for texture */}
        <div className="noise-overlay" />

        {/* background blobs tuned for binary theme */}
        <div className="bg-emerald-400/20 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-emerald-500/15"></div>
        <div className="bg-lime-300/20 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-lime-400/15"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}