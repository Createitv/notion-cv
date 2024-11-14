import type { Metadata } from "next";
import "@/app/globals.css";


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
    <main
      className="antialiased w-full mx-auto px-4 py-8 bg-black min-w-96"
    >
      {children}
    </main>
  );
}
