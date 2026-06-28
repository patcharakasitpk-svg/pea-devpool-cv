# Winner — Personal Portfolio / CV

เว็บไซต์พอร์ตโฟลิโอส่วนตัว (Personal Portfolio Website) สร้างด้วย HTML, CSS และ JavaScript ล้วน (Vanilla, ไม่ใช้เฟรมเวิร์ก) เพื่อแนะนำตัวเอง ประสบการณ์ ผลงาน และหนังสือที่มีอิทธิพลต่อแนวคิดการทำงาน

## 🔗 Live Demo

👉 **[https://winner-cv-devpool69.vercel.app](https://winner-cv-devpool69.vercel.app)**

## ✨ Features

- **Hero Section** — แนะนำตัวพร้อมรูปโปรไฟล์และคำอธิบายสั้น ๆ
- **About Me** — เล่าความสนใจด้าน Digital Transformation, Agile และ Product Development พร้อมประสบการณ์ที่ผ่านมา
- **Portfolio** — แสดงผลงาน (carbonMICE Admin Console) แบบ accordion เปิด-ปิดได้
- **Books That Shaped My Perspective** — ดึงข้อมูลและปกหนังสือแบบเรียลไทม์จาก [Open Library API](https://openlibrary.org/) ตามรายการ ISBN


## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- [Open Library API](https://openlibrary.org/dev/docs/api/books) — สำหรับข้อมูลและปกหนังสือ
- [Google Fonts — Inter](https://fonts.google.com/specimen/Inter)
- Deploy ด้วย [Vercel](https://vercel.com/)

## 📁 Project Structure

```
.
├── index.html              # โครงสร้างหน้าเว็บหลัก
├── style.css               # สไตล์และ layout
├── script.js               # Toggle portfolio + ดึงข้อมูลหนังสือจาก API
├── winnerpic3.jpg          # รูปโปรไฟล์
└── carbonmice-admin.png    # ภาพผลงาน carbonMICE
```

## 🚀 Getting Started

โปรเจกต์นี้เป็น static website ไม่ต้องติดตั้ง dependencies สามารถรันได้ทันที

```bash
# Clone repository
git clone <repository-url>

# เปิดไฟล์ index.html ในเบราว์เซอร์ได้เลย
# หรือรันด้วย local server เช่น
npx serve
```

> หมายเหตุ: ส่วน "Books" ต้องเชื่อมต่ออินเทอร์เน็ตเพื่อดึงข้อมูลจาก Open Library API

## 👤 Author

**Winner** — Product Builder
Passionate about building digital platforms that solve real business problems through Agile methodologies, technology, and AI-driven innovation.
