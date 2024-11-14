import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideNavigation from "@/components/side-navigation";
import SocialLinks from "@/components/social-links";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "林逍遥 Notion模版定制｜咨询",
  description: "林逍遥 Notion模版定制｜咨询",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SideNavigation></SideNavigation>
        <SocialLinks />
        {children}
      </body>
    </html>
  );
}
