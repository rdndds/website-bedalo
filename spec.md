````md
# Spesifikasi Halaman `/tentang-kkn-[kode]`

Dokumen ini mendefinisikan spesifikasi teknis halaman KKN (contoh: `/tentang-kkn-117`) pada website Dusun Bedalo berbasis Astro 5, Tailwind CSS, dan Astro Content Collections. Halaman ini harus reusable untuk berbagai angkatan KKN (mis. 117, 119, 121, dst.) tanpa perubahan kode, cukup dengan penambahan konten.

---

## 1. Tujuan Halaman

- Menjadi dokumentasi resmi dan publik untuk satu periode KKN di Dusun Bedalo.
- Menampilkan:
  - Profil singkat tim KKN (angkatan, kampus, periode, tema).
  - Seluruh program kerja (dengan kategori & status).
  - Struktur tim & daftar anggota (card, klik → ke profil Instagram).
  - Media sosial & konten online KKN.
  - Galeri foto kegiatan KKN.
  - Ringkasan dampak/hasiI & catatan untuk KKN berikutnya.
  - (Opsional) timeline kegiatan dan dokumen yang bisa diunduh.

Halaman ditujukan untuk:

- Warga dusun dan perangkat.
- Pihak kampus.
- Tim KKN berikutnya.
- Publik umum yang ingin melihat kegiatan di Dusun Bedalo.

---

## 2. URL & Routing

### 2.1 Pola URL

- Pola utama (dynamic route):
  - `/tentang-kkn/[kode]`
    - Contoh: `/tentang-kkn/117`, `/tentang-kkn/119`
- Alias opsional (redirect 301/302 via config route):
  - `/tentang-kkn-117` → `/tentang-kkn/117`
  - `/tentang-kkn-119` → `/tentang-kkn/119`

### 2.2 File Route

- `src/pages/tentang-kkn/[kode].astro`

`[kode]` adalah parameter string yang diharapkan berisi angka angkatan KKN (mis. `"117"`), namun tidak dibatasi secara teknis.

---

## 3. Sumber Data & Content Collections

Halaman ini sepenuhnya digerakkan oleh Astro Content Collections.

Tambahkan 3 collection baru di `src/content/config.ts`:

### 3.1 Collection `kkn`

Mewakili satu periode KKN (mis. KKN 117).

- Lokasi file: `src/content/kkn/*.md`
- Skema:

```ts
const kkn = defineCollection({
  type: 'content',
  schema: z.object({
    kode: z.string(), // "117"
    slug: z.string(), // "117" (disarankan sama dengan kode)
    kampus: z.string(), // "UIN Sunan Kalijaga Yogyakarta"
    kelompok: z.string(), // "Kelompok 129"
    tahun: z.number(), // 2025
    periodeMulai: z.string(), // ISO date "2025-01-10"
    periodeSelesai: z.string(), // ISO date "2025-02-20"
    tema: z.string(), // "Digitalisasi Dusun Bedalo dan Pemberdayaan Masyarakat"
    heroImage: z.string().optional(), // "/images/kkn/117/hero.jpg"

    // highlight ringkas untuk stat card
    highlight: z
      .array(
        z.object({
          label: z.string(), // "Jumlah Anggota"
          value: z.string(), // "10 orang"
        })
      )
      .default([]),

    // akun media sosial utama tim KKN
    socials: z
      .object({
        instagram: z.string().optional(), // "https://instagram.com/kkn117_bedalo"
        tiktok: z.string().optional(),
        youtube: z.string().optional(),
        other: z.string().optional(), // link lain (blog dsb.)
      })
      .optional(),

    // ringkasan dampak utama
    impactSummary: z.string().optional(), // paragraf singkat

    // daftar poin dampak
    impacts: z
      .array(
        z.object({
          title: z.string(), // "Website dusun online"
          description: z.string(), // "Website profil Dusun Bedalo terpublikasi..."
        })
      )
      .default([]),

    // catatan untuk KKN berikutnya
    notesForNext: z
      .array(
        z.object({
          type: z.enum(['lanjutan', 'saran', 'peringatan']),
          text: z.string(),
        })
      )
      .default([]),

    // galeri KKN khusus (opsional)
    gallery: z
      .array(
        z.object({
          src: z.string(), // "/images/kkn/117/galeri-1.jpg"
          alt: z.string(),
          category: z
            .enum([
              'pendidikan',
              'kesehatan',
              'ekonomi',
              'pariwisata',
              'kebersamaan',
              'lainnya',
            ])
            .default('lainnya'),
        })
      )
      .default([]),
  }),
});
```
````

#### Contoh file: `src/content/kkn/117.md`

```md
---
kode: '117'
slug: '117'
kampus: 'UIN Sunan Kalijaga Yogyakarta'
kelompok: 'Kelompok 129'
tahun: 2025
periodeMulai: '2025-01-10'
periodeSelesai: '2025-02-20'
tema: 'Digitalisasi Dusun Bedalo dan Pemberdayaan Masyarakat'
heroImage: '/images/kkn/117/hero.jpg'
highlight:
  - { label: 'Jumlah Anggota', value: '10 orang' }
  - { label: 'Program Kerja', value: '14 program' }
  - { label: 'Durasi', value: '42 hari' }
  - { label: 'Bidang', value: 'Pendidikan, Kesehatan, Ekonomi, Pariwisata' }
socials:
  instagram: 'https://instagram.com/kkn117_bedalo'
  youtube: 'https://youtube.com/playlist?list=...'
impactSummary: 'KKN 117 berfokus pada digitalisasi Dusun Bedalo, penguatan UMKM, dan peningkatan literasi pendidikan anak serta kesehatan keluarga.'
impacts:
  - title: 'Website Dusun Bedalo Online'
    description: 'Website profil dusun beserta potensi wisata dan UMKM terpublikasi dan dapat dikelola mandiri.'
  - title: 'Digitalisasi UMKM'
    description: 'Sejumlah UMKM didaftarkan ke Google Maps dan diarsipkan dalam website dusun.'
notesForNext:
  - type: 'lanjutan'
    text: 'Perlu pendampingan lanjutan untuk update konten website secara rutin.'
  - type: 'saran'
    text: 'Pertimbangkan pelatihan tambahan untuk pengelolaan media sosial dusun.'
gallery:
  - src: '/images/kkn/117/galeri-1.jpg'
    alt: 'Foto pembukaan KKN 117 di Balai Dusun Bedalo'
    category: 'kebersamaan'
  - src: '/images/kkn/117/galeri-2.jpg'
    alt: 'Kegiatan bimbingan belajar anak-anak'
    category: 'pendidikan'
---
```

---

### 3.2 Collection `kknProgram`

Mewakili satu program kerja KKN.

- Lokasi file: `src/content/kknProgram/*.md`

```ts
const kknProgram = defineCollection({
  type: 'content',
  schema: z.object({
    kknKode: z.string(), // "117"
    title: z.string(),
    slug: z.string(),
    kategori: z.enum([
      'pendidikan',
      'kesehatan',
      'ekonomi',
      'lingkungan',
      'keagamaan',
      'pariwisata',
      'lainnya',
    ]),
    status: z.enum(['selesai', 'berjalan', 'lanjutan', 'rekomendasi']),
    lokasi: z.string(), // "Balai Dusun Bedalo"
    tanggal: z.string().optional(), // "2025-02-01"
    ringkasan: z.string(), // ringkasan 1–2 kalimat
    impact: z.string().optional(), // dampak spesifik
  }),
});
```

Contoh file: `src/content/kknProgram/digitalisasi-dusun-bedalo.md`

```md
---
kknKode: '117'
title: 'Digitalisasi Dusun Bedalo & Website Profil'
slug: 'digitalisasi-dusun-bedalo'
kategori: 'pariwisata'
status: 'selesai'
lokasi: 'Dusun Bedalo & online'
tanggal: '2025-02-10'
ringkasan: 'Membangun website statis untuk profil dusun, potensi wisata, UMKM, dan data dasar.'
impact: 'Dusun memiliki infrastruktur digital awal yang dapat dikelola mandiri dan biaya operasional rendah.'
---
```

---

### 3.3 Collection `kknMember`

Mewakili anggota KKN.

- Lokasi file: `src/content/kknMember/*.md` atau `*.json` (boleh `type: 'data'`, namun untuk konsistensi gunakan `content`).

```ts
const kknMember = defineCollection({
  type: 'content',
  schema: z.object({
    kknKode: z.string(), // "117"
    name: z.string(),
    role: z.string(), // "Koordinator", "Sekretaris", "Sie Pendidikan"
    division: z.string(), // "Pendidikan", "Media", "Kesehatan", dll.
    instagram: z.string().optional(), // "https://instagram.com/username"
    avatar: z.string().optional(), // "/images/kkn/117/anggota-nama.jpg"
    isKoordinator: z.boolean().default(false),
    order: z.number().default(0),
  }),
});
```

Contoh file: `src/content/kknMember/117-fulan.md`

```md
---
kknKode: '117'
name: 'Fulan Bin Fulan'
role: 'Koordinator'
division: 'Koordinasi'
instagram: 'https://instagram.com/fulan'
avatar: '/images/kkn/117/fulan.jpg'
isKoordinator: true
order: 1
---
```

---

## 4. Struktur Halaman & Section

Di dalam `src/pages/tentang-kkn/[kode].astro`, data diambil sebagai berikut:

- Ambil record KKN:
  - `const allKkn = await getCollection('kkn');`
  - Pilih `kkn = allKkn.find(item => item.data.slug === kodeParam);`

- Ambil program kerja terkait:
  - `const programs = (await getCollection('kknProgram')).filter(p => p.data.kknKode === kodeParam);`

- Ambil anggota terkait:
  - `const members = (await getCollection('kknMember')).filter(m => m.data.kknKode === kodeParam);`

### 4.1 Section 1 – Hero KKN

**Isi:**

- Title: `KKN [kode] – Dusun Bedalo`
- Subtitle: `kampus`, `kelompok`, `tema`
- Periode: `periodeMulai` – `periodeSelesai`
- Hero image (`heroImage`) bila tersedia.
- Tombol:
  - “Lihat Program Kerja” → scroll ke section program (anchor).
  - “Lihat Galeri” → scroll ke galeri.

**Desain:**

- Background putih, teks biru tua (sesuai palette global).
- Layout mobile-first:
  - Mobile: kolom vertikal.
  - Desktop: hero text + gambar berdampingan.

### 4.2 Section 2 – Highlight Stat KKN

**Isi:**

- Menggunakan array `highlight` dari `kkn`.
- Ditampilkan sebagai 2–4 **StatCard** (jumlah anggota, program, durasi, dsb).

**Desain:**

- Grid 2 kolom di mobile, 4 kolom di desktop.
- Card dengan class `bedalo-card` + icon kecil (opsional).

### 4.3 Section 3 – Media Sosial & Konten Online

**Isi:**

- Link dari `kkn.data.socials`:
  - Instagram, TikTok, YouTube, lainnya.

- Opsional embed:
  - Jika `socials.youtube` tersedia → embed playlist/video.
  - Jika diperlukan, embed feed IG (bisa disiapkan secara manual melalui iframe/script di masa depan).

**Desain:**

- Card khusus dengan ikon platform (SVG statis di repo).
- Tombol jelas “Kunjungi Instagram KKN 117” dsb.

### 4.4 Section 4 – Daftar Program Kerja

**Isi:**

- Data dari `kknProgram` filter `kknKode`.
- Untuk setiap program:
  - Title, kategori, status, lokasi, tanggal, ringkasan.

- Filter bar:
  - Filter per kategori (chip).
  - Filter per status.
  - Search input (opsional) untuk judul program.

**Desain & Interaksi:**

- Menggunakan komponen `ProgramCard` (di `src/components/kkn/ProgramCard.astro`).
- Filter & search diimplementasikan sebagai island kecil (React/Svelte/Vue) atau vanilla JS:
  - Di Astro: komponen `ProgramList.astro` dengan `client:load`/`client:idle` untuk logika filter.

- Program disortir berdasar tanggal (jika ada), fallback ke judul/`slug`.

### 4.5 Section 5 – Struktur Organisasi & Anggota

**Isi:**

- Highlight 1 koordinator (berdasarkan `isKoordinator: true`).
- Anggota lain di-grid dengan info:
  - avatar (jika ada) → fallback inisial.
  - name.
  - role.
  - division.
  - Instagram icon (klik → buka tab baru).

**Desain & Interaksi:**

- Grid card responsive.
- Filter chip berdasarkan `division` (opsional).
- Komponen: `MemberCard.astro` + `MemberGrid.astro` (island bila butuh filter dinamis).

### 4.6 Section 6 – Dampak & Hasil KKN

**Isi:**

- `impactSummary` sebagai paragraf pembuka.
- `impacts` sebagai list card:
  - title
  - description

**Desain:**

- `bedalo-card` per item.
- Bisa layout 1 kolom / 2 kolom di desktop.

### 4.7 Section 7 – Timeline Kegiatan (Opsional)

**Isi:**

- Mengambil `programs` yang memiliki `tanggal`.
- Diurutkan naik (kronologis).
- Ditampilkan dalam komponen `Timeline.astro`:
  - Tanggal
  - Nama program
  - Kategori (icon kecil)
  - Ringkasan singkat

**Desain:**

- Vertical timeline sederhana (dot + line di sisi kiri).

### 4.8 Section 8 – Galeri KKN

**Isi:**

- Menggunakan `kkn.data.gallery`.
- Filter kategori (pendidikan, kesehatan, ekonomi, pariwisata, kebersamaan, lainnya).
- Klik gambar → buka lightbox (opsional).

**Desain & Interaksi:**

- Grid 2 kolom mobile, 3–4 kolom desktop.
- Lightbox bisa menggunakan JS ringan atau library sederhana; jika tidak, minimal perbesar di tab baru.

### 4.9 Section 9 – Catatan untuk KKN Berikutnya

**Isi:**

- Data `notesForNext` (type + text).
- Ditampilkan sebagai:
  - List dengan badge warna berbeda per `type`:
    - `lanjutan` (mis. warna hijau).
    - `saran` (biru).
    - `peringatan` (merah/oranye).

### 4.10 Section 10 – Dokumen & Unduhan (Opsional)

**Isi:**

- Link ke dokumen terkait:
  - Laporan akhir PDF.
  - Modul edukasi.
  - Poster/infografis.

- Implementasi:
  - Hard-coded di markdown body `kkn` **atau**
  - Tambah field opsional di schema `kkn`:

```ts
documents: z.array(
  z.object({
    label: z.string(), // "Laporan Akhir KKN 117"
    url: z.string(), // "/docs/kkn-117-laporan.pdf" atau link GDrive
  })
).default([]);
```

---

## 5. Komponen & Modularisasi

Untuk menjaga kode modular dan bersih, buat folder khusus:

- `src/components/kkn/`
  - `KknHero.astro`
  - `KknHighlights.astro`
  - `KknSocials.astro`
  - `ProgramList.astro`
  - `ProgramCard.astro`
  - `MemberGrid.astro`
  - `MemberCard.astro`
  - `ImpactSection.astro`
  - `Timeline.astro` (opsional)
  - `KknGallery.astro`
  - `NotesForNext.astro`
  - `DocumentsSection.astro` (opsional)

`[kode].astro` hanya menjadi “komposer” yang:

1. Fetch data via `getCollection`.
2. Mempersiapkan props.
3. Merangkai section dengan BaseLayout.

---

## 6. Integrasi dengan Decap CMS

Tambahkan collections berikut di `public/admin/config.yml`:

- `kkn` → folder `src/content/kkn`
- `kknProgram` → folder `src/content/kknProgram`
- `kknMember` → folder `src/content/kknMember`

Tujuan:

- KKN berikutnya (mis. KKN 119) dapat input sendiri:
  - Data profil KKN (satu file `119.md`).
  - Daftar program.
  - Daftar anggota.

Ketika konten baru commit ke branch `main`, Vercel otomatis build dan halaman `/tentang-kkn/119` langsung tersedia.

---

## 7. SEO & Aksesibilitas

- Title halaman dinamis:
  - `"Tentang KKN ${kode} di Dusun Bedalo"`

- Meta description dibangun dari `tema` + `impactSummary`.
- Pastikan:
  - Semua gambar memiliki `alt` yang deskriptif.
  - Gunakan heading level berurutan: `h1` sekali, lalu `h2` per section.
  - Link eksternal media sosial menggunakan `rel="noopener noreferrer"`.

---

## 8. Performance & Responsiveness

- Semua gambar KKN disimpan di `/public/images/kkn/[kode]/`.
- Kompresi gambar untuk menghindari page size besar.
- Gunakan `loading="lazy"` untuk gambar di galeri.
- Card-based layout dioptimalkan untuk mobile:
  - Padding minimal `p-4`.
  - Grid 1 kolom di <640px, 2–4 kolom di layar lebih besar.

---

## 9. Alur Penambahan KKN Baru (Contoh KKN 119)

1. Tambah file `src/content/kkn/119.md`.
2. Tambah beberapa file di `src/content/kknProgram/` dengan `kknKode: "119"`.
3. Tambah file di `src/content/kknMember/` dengan `kknKode: "119"`.
4. Deploy otomatis → halaman `/tentang-kkn/119` tersedia tanpa perubahan kode.

---

```

```
