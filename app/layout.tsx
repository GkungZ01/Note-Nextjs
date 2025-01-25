import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Prompt } from "next/font/google";

const prompt = Prompt({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
})

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="root" className={`${prompt.className} min-h-screen transition-colors duration-300 dark:bg-stone-900`}>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
