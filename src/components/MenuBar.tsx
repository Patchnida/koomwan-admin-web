import Link from "next/link";

export default function MenuBar() {
    return (
      <div className="flex flex-col w-full h-full bg-slate-400">
          <Link href="/medicalManagement">จัดการแพทย์</Link>
          <Link href="/articleManagement">จัดการบทความ</Link>
          <Link href="/forumManagement">จัดการฟอรั่ม</Link>
          <Link href="/supportSystem">ระบบให้ความช่วยเหลือ</Link>
      </div>
    );
  }
  