// src/components/SkillCard.tsx
interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 shadow-md">
      {/* ใช้ฟอนต์ที่ 2 (Prompt) สำหรับหัวข้อเพื่อความโดดเด่น */}
      <h3 className="font-prompt text-xl font-bold text-blue-400 mb-4">
        {category}
      </h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center text-slate-300">
            <span className="text-emerald-400 mr-2">✔</span> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
