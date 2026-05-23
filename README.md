# WEB-INFOVEST: Event Management System

Sistem manajemen event berbasis web yang dirancang untuk mengelola data event, kategori, dan pembicara secara efisien. Proyek ini dikembangkan menggunakan arsitektur monorepo yang memisahkan sisi *Frontend* dan *Backend*.

## Fitur Utama
- **Dashboard:** Ringkasan statistik jumlah event, pembicara, dan kategori.
- **Event Management:** CRUD (Create, Read, Update, Delete) data event dengan integrasi kategori dan pembicara.
- **Category Management:** Mengelola kategori event.
- **Speaker Management:** Mengelola data pembicara/narasumber dengan dukungan profil.
- **Responsive UI:** Tampilan antarmuka yang modern dan responsif.

## Tech Stack

### Frontend
- **Framework:** React.js + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Form Handling:** React Hook Form + Zod (Validation)
- **Deployment:** Vercel

### Backend
- **Framework:** Express.js
- **Language:** TypeScript
- **ORM:** Prisma
- **Database:** MySQL/MariaDB
- **Deployment:** Railway

## Cara Menjalankan Secara Lokal

### Instalasi Backend
1. Masuk ke folder backend: `cd backend`
2. Install dependencies: `npm install`
3. Konfigurasi file `.env` (pastikan DB_URL terhubung ke database lokalmu).
4. Jalankan migrasi database: `npx prisma migrate dev`
5. Jalankan server: `npm run dev`

### Instalasi Frontend
1. Masuk ke folder frontend: `cd frontend`
2. Install dependencies: `npm install`
3. Konfigurasi file `.env` (sesuaikan `VITE_API_URL` ke URL backend lokalmu).
4. Jalankan aplikasi: `npm run dev`

### WEB login
- **Email   : 2409106 (nim)**
- **Pasword : 2409106 (nim)**

## 🌐 Deployment
- **Frontend:** [https://web-infofest-mnk3.vercel.app](https://web-infofest-mnk3.vercel.app)
- **Backend:** [https://web-infofest-production.up.railway.app](https://web-infofest-production.up.railway.app)

## 👤 Author
**Ade Anang Kurniawan**
*24090106*
---
