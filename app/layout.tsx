import type { Metadata } from "next";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from "@/components/Navbar";
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
        <div id="root">
        <Navbar/>
        {children}
        </div>
      </body>
    </html>
  );
}
