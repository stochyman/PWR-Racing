import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import ClientOnly from "@/components/ClientOnly";

const font = Nunito({ subsets: ['latin']})
export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
  <html lang="en">
    <body className={font.className}>
      <ClientOnly>
        <Navbar/>
        {children}
      </ClientOnly>
    </body>
  </html>
);
}
