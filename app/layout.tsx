import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Navbar/SideBar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import ToasterProvider from "./providers/ToasterProvider";
import HeroSection from "./components/Section/HeroSection/HeroSection";
import DepartmentsSubsection from "./components/Section/DepartmentsSubsection/DepartmentsSubsection";
import BolidSection from "./components/Section/BolidSection/BolidSection";
import FSSection from "./components/Section/FSSection/FSSection";
import TeamSection from "./components/Section/TeamSection/TeamSection";
import JoinusSection from "./components/Section/JoinusSection/JoinusSection";
import HistorySection from "./components/Section/HistorySection/HistorySection";
import SponsorsSection from "./components/Section/SponsorsSection/SponsorsSection";
import NewsSection from "./components/Section/NewsSection/NewsSection";
import FooterSection from "./components/Section/FooterSection/FooterSection";

const font = Nunito({ subsets: ['latin']})
export const metadata: Metadata = {
  title: "PWR Racing",
  description: "Koło naukowe Politechniki Wrocławskiej zajmujące się budową bolidów",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
  <html lang="en">
    <body className={font.className}>
      {children}
      <ClientOnly>
        <ToasterProvider/>
        <LoginModal/>
        <RegisterModal/>
        <Navbar/>
        <SideBar/>
        <HeroSection/>
        <DepartmentsSubsection/>
        <BolidSection/>
        <FSSection/>
        <TeamSection/>
        <JoinusSection/>
        <HistorySection/>
        <SponsorsSection/>
        <NewsSection/>
        <FooterSection/>
      </ClientOnly>
    </body>
  </html>
);
}
