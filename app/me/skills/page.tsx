// src/app/me/skills/page.tsx
import {
  FaCode,
  FaServer,
  FaTools,
  FaRobot,
  FaCheckCircle,
} from "react-icons/fa";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode className="text-xl text-blue-400" />,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Next.js", level: 70 },
      ],
    },
    {
      title: "Backend",
      icon: <FaServer className="text-xl text-emerald-400" />,
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "PHP", level: 65 },
        { name: "MySQL", level: 75 },
        { name: "PostgreSQL", level: 60 },
        { name: "Supabase", level: 65 },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <FaTools className="text-xl text-orange-400" />,
      skills: [
        { name: "Git", level: 80 },
        { name: "GitHub", level: 80 },
        { name: "VS Code", level: 85 },
        { name: "Docker", level: 50 },
      ],
    },
    {
      title: "AI & Future Tech", // 🌟 เพิ่มส่วนนี้ให้ตรงกับความสนใจในหน้า About
      icon: <FaRobot className="text-xl text-purple-400" />,
      skills: [
        { name: "AI Agentic Concepts", level: 40 },
        { name: "Prompt Engineering", level: 65 },
      ],
    },
  ];

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto space-y-12 font-sarabun">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="font-prompt text-4xl font-bold text-white">
          My <span className="text-blue-500">Skills</span>
        </h1>
        <div className="h-1 w-16 bg-blue-500 mx-auto rounded-full"></div>
        <p className="text-slate-400 max-w-md mx-auto">
          ทักษะและความสามารถทางด้านเทคโนโลยีที่ผมได้เรียนรู้และนำมาใช้ในการสร้างสรรค์โปรเจกต์
        </p>
      </section>

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="bg-linear-to-br from-slate-800/60 to-slate-900/60 p-6 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-xs flex flex-col"
          >
            {/* Card Header */}
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-700/50">
              {category.icon}
              <h2 className="font-prompt text-xl font-bold text-white">
                {category.title}
              </h2>
            </div>

            {/* Skills List with Progress Bar */}
            <div className="space-y-4 grow">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1.5">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-200 font-medium flex items-center gap-2">
                      <FaCheckCircle className="text-xs text-slate-500" />
                      {skill.name}
                    </span>
                    <span className="text-slate-400 text-xs">
                      {skill.level}%
                    </span>
                  </div>
                  {/* Progress Bar Container */}
                  <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-blue-500 h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
