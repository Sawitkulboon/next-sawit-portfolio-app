// src/app/me/projects/page.tsx
import Image from "next/image";
import port from "@/assets/images/port.png";
import cal from "@/assets/images/cal.png";
import coffee from "@/assets/images/coffee.png";
import run from "@/assets/images/run.png";
import moneycal from "@/assets/images/moneycal.png";
import { FaGithub, FaCode } from "react-icons/fa";

export default function ProjectsPage() {
  // ข้อมูลโปรเจกต์ทั้ง 5 อัน
  const projects = [
    {
      title: "Personal Portfolio v1",
      category: "Next.js 15 (Web)",
      desc: "เว็บไซต์พอร์ตโฟลิโอส่วนตัวที่รันด้วย Next.js เวอร์ชันล่าสุด เน้นความเร็ว และดีไซน์ที่ทันสมัยแบบ Dark Theme",
      img: port,
      tags: ["Next.js", "Tailwind v4", "TypeScript"],
      link: "#",
      github: "https://github.com/Sawitkulboon",
    },
    {
      title: "AI Image Generator Tool",
      category: "Next.js + AI API",
      desc: "เครื่องมือช่วยคำนวณเงินแชร์เมื่อต้องหารเงินกับเพื่อนๆ",
      img: cal,
      tags: ["Next.js", "AI API", "Supabase"],
      link: "#",
      github: "https://github.com/Sawitkulboon/next-third-app",
    },
    {
      title: "Fitness Tracker Mobile",
      category: "Expo Go (Mobile App)",
      desc: "แอปพลิเคชันมือถือสำหรับติดตามการออกกำลังกาย พัฒนาด้วย React Native และ Expo รองรับทั้ง iOS และ Android",
      img: run,
      tags: ["Expo Go", "React Native", "NativeWind"],
      link: "#",
      github: "https://github.com/Sawitkulboon/rn-run-tracker-app",
    },
    {
      title: "BKK-Coffe Shop Locator",
      category: "Expo Go (Mobile App)",
      desc: "แอปพลิเคชันมือถือสำหรับค้นหาร้านกาแฟต่าง ในกรุงเทพ",
      img: coffee,
      tags: ["Expo Go", "React Native", "NativeWind"],
      link: "#",
      github: "https://github.com/Sawitkulboon/rn-top-bkk-coffee-app",
    },
    {
      title: "Money Tracking App",
      category: "Expo Go (Mobile App)",
      desc: "แอปพลิเคชันมือถือสำหรับ บันทึกรายรับ รายจ่ายของคุณในแต่ละวัน",
      img: moneycal,
      tags: ["Expo Go", "React Native", "NativeWind"],
      link: "#",
      github: "https://github.com/Sawitkulboon/rn-money-tracking-app",
    },
  ];

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto space-y-12 font-sarabun">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h1 className="font-prompt text-4xl font-bold text-white">
          My <span className="text-blue-500">Projects</span>
        </h1>
        <div className="h-1 w-16 bg-blue-500 mx-auto rounded-full"></div>
        <p className="text-slate-400 max-w-md mx-auto">
          รวมรวบผลงานการพัฒนาซอฟต์แวร์ที่น่าสนใจ
          ทั้งในรูปแบบเว็บแอปพลิเคชันและแอปพลิเคชันมือถือ
        </p>
      </section>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <a
            key={idx}
            href={proj.github} // 🌟 เปลี่ยนมาครอบด้วยแท็ก <a> เพื่อลิงก์ไป GitHub
            target="_blank" // 🌟 เปิดในแท็บใหม่
            rel="noreferrer"
            className="group bg-slate-800/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:bg-slate-800/70 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={proj.img}
                alt={proj.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 to-transparent opacity-60"></div>
              <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                {proj.category}
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 space-y-4 grow flex flex-col">
              <h2 className="font-prompt text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {proj.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed grow">
                {proj.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] bg-slate-900 text-slate-300 border border-slate-700 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action / Guide Bottom */}
              <div className="flex justify-between items-center pt-4 mt-auto border-t border-slate-700/50 text-xs">
                <span className="text-slate-400 group-hover:text-white flex items-center gap-1.5 transition-colors">
                  <FaGithub /> GitHub
                </span>
                <span className="text-blue-400 group-hover:text-blue-300 group-hover:underline inline-flex items-center gap-1 transition-all">
                  คลิกเพื่อดูซอร์สโค้ด →
                </span>
              </div>
            </div>
          </a>
        ))}

        {/* Card สำหรับโปรเจกต์ในอนาคต (Coming Soon) */}
        <div className="bg-slate-900/50 border-2 border-dashed border-slate-800 rounded-2xl flex flex-col items-center justify-center p-8 text-center min-h-400px">
          <div className="p-4 bg-slate-800 rounded-full mb-4">
            <FaCode className="text-3xl text-slate-600" />
          </div>
          <h3 className="font-prompt text-lg font-bold text-slate-500">
            More Projects Coming Soon
          </h3>
          <p className="text-slate-600 text-sm mt-2">
            กำลังพัฒนาโปรเจกต์ใหม่ๆ ที่น่าสนใจอยู่ครับ รอติดตามได้เลย!
          </p>
        </div>
      </div>
    </div>
  );
}
