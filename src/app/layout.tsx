import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

const mainFont = Nunito_Sans({
  variable: "--font-main",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="en" className="h-full">
      <body
        className={`${mainFont.variable} ${geistMono.variable} antialiased h-full flex flex-col`}
      >
        <Header />
        <div className="grid grid-cols-12 gap-4  flex-grow">
          <div className="col-span-3">
            <Sidebar />
          </div>
          <div className="col-span-9">{children}</div>
        </div>
      </body>
    </html>
  );
}
