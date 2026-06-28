// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import mypro from "@/assets/images/mypro.jpg";
import { FaUser, FaCode, FaFolderOpen, FaEnvelope } from "react-icons/fa";
// 💡 ถ้ารูปโปรไฟล์อยู่ใน public/profile.png แนะนำอิมพอร์ตตรงแบบนี้เพื่อตัดปัญหาเรื่อง hostname ครับ

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-70px)] flex items-center justify-center px-6 overflow-hidden font-sarabun">
      {/* 🌟 1. Background Glow Effects (แสงเรืองรองเพิ่มมิติ) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* Main Container */}
      <div className="max-w-5xl w-full grid md:grid-cols-12 gap-8 items-center py-12">
        {/* ฝั่งซ้าย: รูปภาพโปรไฟล์ (4 Columns บนจอใหญ่) */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-1">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-500/30 p-2 bg-slate-900/50 backdrop-blur-xs shadow-2xl shadow-blue-500/10 group">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src={mypro}
                alt="Sawit Kulboon Profile"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* ฝั่งขวา: ข้อความและปุ่มกด (7 Columns บนจอใหญ่) */}
        <div className="md:col-span-7 space-y-6 text-center md:text-left order-2 md:order-2">
          <div className="space-y-2">
            <h1 className="font-prompt text-4xl sm:text-5xl font-bold text-white tracking-wide">
              สวัสดีครับผมชื่อ
            </h1>

            {/* ชื่อตัวเองเอาเด่นๆ */}
            <h1 className="font-prompt text-4xl sm:text-5xl font-bold text-green-400 tracking-wide">
              Sawit Kulboon
            </h1>
            <h2 className="font-prompt text-lg sm:text-xl font-semibold text-blue-400">
              Frontend Developer / Full-stack Developer / AI Agentic Builder
            </h2>
          </div>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            ผมเป็นนักพัฒนาเว็บรุ่นใหม่ที่มุ่งมั่นสร้างสรรค์ User Experience
            ที่ดีเยี่ยมผ่านเทคโนโลยีสมัยใหม่ มีความสนใจใน Next.js, React
            และการทำ Clean Code
            พร้อมที่จะเรียนรู้และร่วมงานกับทีมเพื่อสร้างโปรเจกต์ที่มีประโยชน์
            ออกสู่ผู้ใช้งานจริงครับ
          </p>

          <div className="pt-2">
            <p className="text-slate-500 text-xs uppercase tracking-wider mb-3">
              สำรวจพอร์ตโฟลิโอของผม
            </p>

            {/* 🌟 3. ปุ่มกดดีไซน์ใหม่ มี Icon และ Hover Effect */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Link
                href="/about"
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-medium font-prompt shadow-md hover:scale-105 transition-all"
              >
                <FaUser className="text-xs" /> เกี่ยวกับฉัน
              </Link>

              <Link
                href="/me/skills"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-sm font-medium font-prompt hover:scale-105 transition-all"
              >
                <FaCode className="text-xs text-blue-400" /> ทักษะความสามารถ
              </Link>

              <Link
                href="/me/projects"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-sm font-medium font-prompt hover:scale-105 transition-all"
              >
                <FaFolderOpen className="text-xs text-emerald-400" /> ดูผลงาน
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-medium font-prompt shadow-md hover:scale-105 transition-all"
              >
                <FaEnvelope className="text-xs" /> ติดต่อฉัน
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
