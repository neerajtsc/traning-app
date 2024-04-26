import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Traning App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Traning Apps</title>
        <link rel="shortcut icon" href="/images/favicon.png" />
      </head>
      <body className={inter.className}>
         <Navbar/>
        {children}
      </body>
    </html>
  );
}
