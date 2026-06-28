// src/app/about/page.tsx
import {
  FaUser,
  FaGraduationCap,
  FaBullseye,
  FaLightbulb,
  FaHeart,
  FaGamepad,
  FaDumbbell,
  FaBookOpen,
  FaMapMarkerAlt,
} from "react-icons/fa"; // อย่าลืมลง npm install react-icons นะครับ หรือใช้ SVG แทนได้

export default function AboutPage() {
  return (
    <div className="py-16 px-4 max-w-5xl mx-auto space-y-16">
      {/* 1. Header Section */}
      <section className="text-center space-y-4">
        <h1 className="font-prompt text-4xl md:text-5xl font-bold text-white">
          About <span className="text-blue-500">Me</span>
        </h1>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
        <p className="font-sarabun text-slate-400 max-w-2xl mx-auto">
          ทำความรู้จักกับตัวตน ประวัติการศึกษา และเป้าหมายในสายงาน IT
          ของผมให้มากขึ้น
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        {/* 2. Personal Info Card (ฝั่งซ้าย) */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 shadow-xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6 text-blue-400">
              <FaUser className="text-xl" />
              <h2 className="font-prompt text-xl font-bold">ข้อมูลส่วนตัว</h2>
            </div>
            <div className="space-y-4 font-sarabun">
              <div>
                <p className="text-slate-500 text-sm">ชื่อ-นามสกุล</p>
                <p className="text-slate-200">นาย สวิตต์ กุลบุญ (ต้อม)</p>
              </div>
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-blue-500 mt-1 shrink-0" />
                <div>
                  <p className="text-slate-500 text-sm">ที่อยู่</p>
                  <p className="text-slate-200 text-sm">
                    73/9 ต.อ้อมน้อย อ.กระทุ่มแบน จ.สมุทรสาคร
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ความสนใจ & งานอดิเรก */}
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 shadow-xl">
            <div className="flex items-center gap-3 mb-4 text-emerald-400">
              <FaHeart className="text-xl" />
              <h2 className="font-prompt text-xl font-bold">
                ความสนใจ & งานอดิเรก
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs border border-emerald-500/20">
                Modern Web
              </span>
              <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs border border-emerald-500/20">
                AI Agentic Builder
              </span>
            </div>
            <ul className="space-y-3 font-sarabun text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <FaDumbbell className="text-slate-500" /> ออกกำลังกาย
              </li>
              <li className="flex items-center gap-3">
                <FaGamepad className="text-slate-500" /> เล่นเกม
              </li>
              <li className="flex items-center gap-3">
                <FaBookOpen className="text-slate-500" /> อ่านบทความเทคโนโลยี
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Objective & Education (ฝั่งขวา) */}
        <div className="md:col-span-2 space-y-8">
          {/* Career Objective */}
          <div className="bg-linear-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <FaBullseye className="text-8xl" />
            </div>
            <div className="flex items-center gap-3 mb-4 text-blue-400">
              <FaBullseye className="text-2xl" />
              <h2 className="font-prompt text-2xl font-bold">
                Career Objective
              </h2>
            </div>
            <p className="font-sarabun text-slate-300 leading-relaxed relative z-10">
              เป้าหมายการทำงานของผมคือ{" "}
              <span className="text-blue-400 font-semibold">
                อยากเริ่มต้นก้าวแรกในสายงาน IT
              </span>{" "}
              และพัฒนาตัวเองให้เก่งขึ้น
              พร้อมเรียนรู้เทคโนโลยีและการทำงานจริงในองค์กร
              เพื่อนำประสบการณ์ไปต่อยอดในอนาคต นำความรู้และทักษะการแก้ปัญหา
              มาร่วมสร้างสรรค์ผลิตภัณฑ์ที่มีประสิทธิภาพให้กับบริษัท
              พร้อมเปิดรับการเรียนรู้เทคโนโลยีใหม่ๆ เพื่อเติบโตไปพร้อมกับทีม
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-blue-400">
              <FaGraduationCap className="text-2xl" />
              <h2 className="font-prompt text-2xl font-bold">
                ประวัติการศึกษา
              </h2>
            </div>

            <div className="space-y-6 font-sarabun relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-700 before:to-transparent">
              {/* จุดแต่ละขั้นของการศึกษา */}
              {[
                {
                  level: "ปริญญาตรี",
                  school: "มหาวิทยาลัยเอเชียอาคเนย์",
                  color: "bg-blue-500",
                },
                {
                  level: "ปวส.",
                  school: "วิทยาลัยอาชีวศึกษาเทศบาลอ้อมน้อย",
                  color: "bg-emerald-500",
                },
                {
                  level: "ปวช.",
                  school: "วิทยาลัยอาชีวศึกษาเทศบาลอ้อมน้อย",
                  color: "bg-slate-500",
                },
                {
                  level: "มัธยมต้น",
                  school: "โรงเรียนอ้อมน้อยโสภณชนูปถัมป์",
                  color: "bg-slate-500",
                },
              ].map((edu, idx) => (
                <div
                  key={idx}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 ${edu.color} text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}
                  >
                    <FaGraduationCap />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-slate-800/30 border border-slate-800 hover:border-slate-600 transition-colors">
                    <h4 className="font-bold text-white">{edu.level}</h4>
                    <p className="text-sm text-slate-400">{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Strengths Section (แถวล่างสุด) */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 text-emerald-400 justify-center">
          <FaLightbulb className="text-2xl" />
          <h2 className="font-prompt text-2xl font-bold">จุดแข็งของผม</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Fast Learner",
              desc: "เรียนรู้ไว พร้อมปรับตัวตามโจทย์ของโปรเจกต์",
            },
            {
              title: "Problem Solver",
              desc: "คิดวิเคราะห์เป็นระบบ และชอบการ Debugging",
            },
            {
              title: "Team Player",
              desc: "สื่อสารดี รับฟังความคิดเห็น และชอบแชร์ความรู้",
            },
            {
              title: "Self-Improvement",
              desc: "มีความต้องการพัฒนาตัวเองอยู่ตลอดเวลา",
            },
          ].map((strength, idx) => (
            <div
              key={idx}
              className="p-5 bg-slate-800/40 rounded-xl border border-slate-700 hover:scale-105 transition-transform"
            >
              <h3 className="font-prompt font-bold text-emerald-400 mb-2">
                {strength.title}
              </h3>
              <p className="font-sarabun text-sm text-slate-400 leading-relaxed">
                {strength.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
