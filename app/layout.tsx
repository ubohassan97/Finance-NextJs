import "./globals.css";
import {Inter, IBM_Plex_Serif } from "next/font/google";
import { Metadata } from "next";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable :'--font-inter'
});


export const metadata: Metadata ={
  title :"Bankawy",
  description:"Bankawy is a modern banking platform",
  icons:{
    icon:"/icon/logo.svg"
  }
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} , ${ibmPlexSerif}`}>
        {children}
      </body>
    </html>
  );
}
