// src/components/Footer.tsx
export default function Footer() {
  // ดึงปีปัจจุบันแบบไดนามิก (เช่น © 2026)
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* ส่วนลิขสิทธิ์ (ใช้ font-sarabun ตามข้อกำหนด) */}
        <p className="font-sarabun text-sm text-slate-400 text-center sm:text-left">
          &copy; {currentYear}{" "}
          <span className="text-blue-400 font-semibold">Sawit</span>. All rights
          reserved.
        </p>

        {/* ลิงก์ย่อหน้าหลักเพื่อความสะดวกของผู้ใช้ */}
        <div className="flex flex-wrap justify-center gap-6 font-sarabun text-sm text-slate-400">
          <a href="/about" className="hover:text-blue-400 transition-colors">
            About
          </a>
          <a
            href="/me/projects"
            className="hover:text-blue-400 transition-colors"
          >
            Projects
          </a>
          <a href="/contact" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
