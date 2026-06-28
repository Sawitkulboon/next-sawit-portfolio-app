// src/app/me/gallery/page.tsx
import Image from "next/image";

export default function GalleryPage() {
  // สมมติลิงก์รูปภาพเกี่ยวกับการทำงาน/เขียนโปรแกรม 6 รูป (เปลี่ยนเป็นรูปจริงของคุณได้เลย)
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg",
      alt: "หน้าจอโค้ดและโต๊ะทำงาน",
    },
    {
      src: "https://images.pexels.com/photos/12902874/pexels-photo-12902874.jpeg",
      alt: "กำลังพิมพ์โค้ดบนคีย์บอร์ด",
    },
    {
      src: "https://images.pexels.com/photos/12899191/pexels-photo-12899191.jpeg",
      alt: "เขียนโปรแกรมบน Mac",
    },
    {
      src: "https://images.pexels.com/photos/12899156/pexels-photo-12899156.jpeg",
      alt: "ออกแบบ UI บนหน้าจอ",
    },
    {
      src: "https://images.pexels.com/photos/8636605/pexels-photo-8636605.jpeg",
      alt: "ประชุมคุยงานโปรเจกต์",
    },
    {
      src: "https://images.pexels.com/photos/6804594/pexels-photo-6804594.jpeg",
      alt: "ทดสอบระบบบนหน้าจอ",
    },
  ];

  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      {/* ใช้ฟอนต์หลักตัวที่ 2 จากเงื่อนไข (Prompt) เพื่อให้หัวข้อเด่น */}
      <h1 className="font-prompt text-3xl font-bold text-center mb-4">
        My Gallery
      </h1>
      <p className="text-center text-slate-400 mb-12 font-sarabun">
        ภาพบรรยากาศการเรียนรู้ การทำงาน และการพัฒนาโปรเจกต์ของผม
      </p>

      {/* จัดเรียงรูปภาพเป็น Grid (1 คอลัมน์ในมือถือ, 2 ในแท็บเล็ต, 3 ในคอม) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className="relative h-64 overflow-hidden rounded-xl border border-slate-700 shadow-lg group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay เก๋ๆ เวลาเอาเมาส์ไปชี้ (Hover) */}
            <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              <p className="font-sarabun text-sm text-slate-200 text-center">
                {img.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
