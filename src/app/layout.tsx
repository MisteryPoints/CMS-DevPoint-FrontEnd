import type { Metadata } from "next";
import { Libre_Franklin as FontAbr } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "CMS | DevPoint",
  description: "CMS with Version Control",
};

export const fontAbr = FontAbr({
  subsets: ["latin"],
  variable: "--font-abr",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          fontAbr.variable,
          " min-h-screen bg-background antialiased "
        )}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
