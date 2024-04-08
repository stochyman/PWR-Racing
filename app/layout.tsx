import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Navbar/SideBar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import ToasterProvider from "./providers/ToasterProvider";
import FooterSection from "./components/Section/FooterSection/FooterSection";
import ClosestSectionProvider from "./components/Navbar/ClosestSectionContext";

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
  <html lang="pl">
    <body className={font.className}>
      <ClosestSectionProvider>
        <ClientOnly>
          <ToasterProvider/>
          <LoginModal/>
          <RegisterModal/>
          <Navbar/>
          <SideBar/>
          {children}
          <FooterSection/>
        </ClientOnly>
      </ClosestSectionProvider>
    </body>
  </html>
);
}


//? page.tsx
// import Image from 'next/image';

// export default function Home() {
//   return (
//     <div className="absolute flex h-full w-full justify-center items-center bg-black">
//       <div className="flex flex-col items-center">
//         <Image
//           src='/images/logo.png'
//           alt='PWR Racing Logo'
//           width={300}
//           height={50}
//           className="mb-4"
//         />
//       </div>
//     </div>
//   );
// }
