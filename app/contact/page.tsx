// src/app/contact/page.tsx
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto space-y-12 font-sarabun">
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h1 className="font-prompt text-4xl font-bold text-white">
          Contact <span className="text-blue-500">Me</span>
        </h1>
        <div className="h-1 w-16 bg-blue-500 mx-auto rounded-full"></div>
        <p className="text-slate-400 max-w-md mx-auto">
          หากสนใจร่วมงาน แลกเปลี่ยนความรู้ หรือมีข้อสงสัยใดๆ
          สามารถติดต่อผมได้ผ่านช่องทางด้านล่างนี้เลยครับ
        </p>
      </section>

      {/* Main Grid Layout */}
      <div className="grid md:grid-cols-5 gap-8 items-start">
        {/* ฝั่งซ้าย: ข้อมูลการติดต่อของต้อม (2 Columns) */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="font-prompt text-xl font-bold text-white mb-2">
            ช่องทางการติดต่อ
          </h2>

          {/* Email */}
          <div className="flex items-center gap-4 p-4 bg-slate-800/40 border border-slate-800 rounded-xl">
            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg">
              <FaEnvelope className="text-lg" />
            </div>
            <div>
              <p className="text-slate-500 text-xs uppercase tracking-wider">
                Email
              </p>
              <a
                href="mailto:s6852D10035@liive.sau.ac.th"
                className="text-slate-200 text-sm hover:text-blue-400 transition-colors break-all"
              >
                s6852D10035@liive.sau.ac.th
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 p-4 bg-slate-800/40 border border-slate-800 rounded-xl">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
              <FaPhoneAlt className="text-lg" />
            </div>
            <div>
              <p className="text-slate-500 text-xs uppercase tracking-wider">
                Phone
              </p>
              <a
                href="tel:098-319-9445"
                className="text-slate-200 text-sm hover:text-emerald-400 transition-colors"
              >
                098-319-9445
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 p-4 bg-slate-800/40 border border-slate-800 rounded-xl">
            <div className="p-3 bg-slate-700/30 text-slate-400 rounded-lg">
              <FaMapMarkerAlt className="text-lg" />
            </div>
            <div>
              <p className="text-slate-500 text-xs uppercase tracking-wider">
                Location
              </p>
              <p className="text-slate-200 text-sm">
                ต.อ้อมน้อย อ.กระทุ่มแบน จ.สมุทรสาคร
              </p>
            </div>
          </div>

          {/* GitHub Link */}
          <div className="pt-4 space-y-2">
            <p className="text-slate-400 text-sm">ช่องทางการพัฒนาโค้ด</p>
            <div className="flex gap-3">
              <a
                href="https://github.com/Sawitkulboon"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 transition-all text-sm w-full"
              >
                <FaGithub className="text-xl shrink-0" />
                <span className="truncate">Sawitkulboon</span>
              </a>
            </div>
          </div>
        </div>

        {/* ฝั่งขวา: ฟอร์มส่งข้อความสำหรับผู้เข้าชมเว็บ (3 Columns) */}
        <div className="md:col-span-3 bg-linear-to-br from-slate-800 to-slate-900 p-6 md:p-8 rounded-2xl border border-slate-700 shadow-xl">
          <h2 className="font-prompt text-xl font-bold text-white mb-6">
            ส่งข้อความหาผม
          </h2>

          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 text-sm mb-1">
                  ชื่อของคุณ
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-950/60 border border-slate-700 rounded-lg p-2.5 text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="สมชาย ใจดี"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1">
                  อีเมลผู้ติดต่อ
                </label>
                <input
                  type="email"
                  className="w-full bg-slate-950/60 border border-slate-700 rounded-lg p-2.5 text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="somchai@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-1">
                หัวข้อข้อความ
              </label>
              <input
                type="text"
                className="w-full bg-slate-950/60 border border-slate-700 rounded-lg p-2.5 text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="ติดต่อเรื่องงาน / สอบถามข้อมูล"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-1">
                รายละเอียดข้อความ
              </label>
              <textarea
                rows={4}
                className="w-full bg-slate-950/60 border border-slate-700 rounded-lg p-2.5 text-slate-200 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="พิมพ์ข้อความของคุณตรงนี้..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg text-sm shadow transition-colors font-prompt"
            >
              ส่งข้อความ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
