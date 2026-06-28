import type { Metadata } from "next";
import { Inter, Prompt, Sarabun } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const prompt = Prompt({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const sarabun = Sarabun({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio by Sawit",
  description: "เว็บไซต์ Portfolio ของ Sawit",
  keywords: ["Sawit", "Portfolio", "Sawit Portfolio"],
  authors: [{ name: "Sawit", url: "https://sawit.dev" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${inter.className} ${prompt.className} ${sarabun.className}`}
    >
      {/* ใช้ font-sarabun เป็นฟอนต์หลักของเนื้อหาเว็บ */}
      <body className="font-sarabun bg-slate-900 text-slate-100 min-h-screen flex flex-col">
        <NavBar />
        {/* flex-grow ช่วยดัน Footer ให้ตกอยู่ขอบล่างสุดเสมอ */}
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
