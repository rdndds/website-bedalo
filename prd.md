# Product Requirements Document (PRD)

**Produk:** Website Statis Dusun Bedalo
**Versi:** 1.0 (MVP yang serius)
**Pemilik Produk:** Perangkat Dusun Bedalo & Karang Taruna Maju Mulia
**Developer:** Tim web (kampus/KKN/kontributor lain)

---

## 1. Latar Belakang

Dusun Bedalo adalah salah satu padukuhan di Kalurahan Krambilsawit, Kapanewon Saptosari, Gunungkidul, berbatasan langsung dengan Samudra Hindia di sisi selatan. Jarak ke balai kalurahan ±2,8 km dan ke ibu kota kabupaten (Wonosari) ±26 km, sehingga termasuk wilayah pedesaan pesisir yang cukup jauh dari pusat kota.

Jumlah penduduk 605 jiwa dalam 137 KK, tersebar di 3 RT (RT 01, 02, 03). Mayoritas mata pencaharian di sektor pertanian lahan kering (singkong, jagung, kacang), peternakan kecil, dan sebagian usaha jasa/perdagangan serta UMKM (misalnya produksi bakpia yang dipasarkan di jalur lintas selatan).

Dusun ini punya potensi wisata alam besar: **empat pantai** (Ngedan, Ngluwen, Butuh, Mbirit) yang masih relatif sepi, serta aset budaya (karawitan, reog, yasinan), lembaga pendidikan (PAUD Insan Cendekia III, TPA di Masjid Sunan Kalijaga), dan berbagai kegiatan sosial.

Pada 2025, KKN UIN Sunan Kalijaga membuat inisiatif **“Digitalisasi Dusun Bedalo”** berupa website statis dan pendataan UMKM/objek wisata, termasuk listing di Google Maps, dengan tujuan memperluas pemasaran UMKM, menaikkan citra dusun, dan menyediakan infrastruktur digital berbiaya operasional nol.

Website yang akan dibangun/diteruskan ini adalah pondasi digital untuk:

- Promosi wisata & UMKM
- Pusat informasi resmi dusun
- Sarana warga mengakses data dasar & agenda

---

## 2. Tujuan Produk

### 2.1 Tujuan Utama

1. **Mempromosikan Dusun Bedalo sebagai destinasi wisata pesisir** (pantai & bukit) yang asri dan relatif “hidden gem”.
2. **Menyediakan satu sumber informasi resmi** tentang dusun (profil, data penduduk, fasilitas, lembaga, kegiatan).
3. **Mengangkat UMKM & potensi ekonomi lokal** (produk singkong, bakpia, kerajinan, jasa wisata).
4. **Mempermudah komunikasi antara perangkat dusun, karang taruna, dan warga** melalui informasi agenda, pengumuman, dan kanal aspirasi.
5. **Menjaga kesinambungan program Digitalisasi Dusun** agar tidak mati setelah KKN selesai (CMS mudah, tanpa biaya bulanan).

### 2.2 Sasaran Kuantitatif (12 bulan)

- Minimal **10 UMKM** dan **5 objek wisata** terdata dan tampil di website.
- Minimal **1.000 kunjungan unik/bulan** setelah 6 bulan live.
- Minimal **2 update konten/bulan** oleh pengelola lokal (bukan developer).
- Minimal **3 kolaborasi baru** (kampus, komunitas, tour operator, dsb.) yang datang via website (diukur dari form kontak/WhatsApp).

---

## 3. Stakeholder

- **Perangkat Dusun (Kepala Dusun & RW/RT)** – pemilik data dan otoritas informasi resmi.
- **Karang Taruna Maju Mulia** – pengelola konten harian, dokumentasi kegiatan, dan admin CMS.
- **Pengelola UMKM** – penyedia data usaha, foto produk, kontak.
- **Pengelola wisata pantai & bukit** – penyedia info tarif, akses, peraturan lokal.
- **Warga Dusun Bedalo** – pengguna informasi fasilitas & agenda.
- **Wisatawan** – pengguna informasi wisata & akses.
- **Tim teknis / developer** – yang mengembangkan dan memelihara kode.

---

## 4. Target Pengguna & Kebutuhan

### 4.1 Persona Utama

1. **Wisatawan Lokal DIY/Jawa**
   - Usia 18–40, suka wisata alam “sunyi”, pantai, camping/foto.
   - Kebutuhan:
     - Info rute ke pantai (dari Yogyakarta/Kota Wonosari).
     - Info tiket, parkir, jam buka, fasilitas (warung, mushola, MCK, air).
     - Foto suasana terbaru & review singkat.
     - Kontak lokal (pengelola, ojek, homestay).

2. **Keluarga / Rombongan Kecil**
   - Kebutuhan:
     - Keamanan & kelayakan membawa anak.
     - Tempat makan/warung.
     - Nomor darurat (pos kesehatan, puskesmas, aparat dusun).

3. **Warga Dusun Bedalo**
   - Kebutuhan:
     - Info jadwal posyandu, PAUD, TPA, senam, kegiatan karang taruna.
     - Data dusun (jumlah penduduk, layanan, kontak RT/RW).
     - Dokumentasi kegiatan dusun (Gebyar Kemerdekaan, Jumat Bersih, dll.).

4. **Pemilik UMKM**
   - Kebutuhan:
     - Profil usaha tampil rapi dengan lokasi di peta, nomor WA, dan foto produk.
     - Bisa update sendiri harga/kontak tanpa minta bantuan developer.

5. **Mitra Eksternal (kampus, NGO, tour operator)**
   - Kebutuhan:
     - Gambaran singkat potensi dan kebutuhan dusun.
     - Kontak resmi dusun dan karang taruna.
     - Halaman khusus yang menjelaskan program sebelumnya (mis. KKN, pelatihan).

---

## 5. Ruang Lingkup

### 5.1 In-Scope (MVP)

- Website statis, **mobile-first**, bahasa Indonesia.
- CMS berbasis git (mis. Decap CMS) agar perangkat dusun & karang taruna bisa edit konten tanpa coding.
- Struktur navigasi utama:
  - Beranda
  - Profil Dusun
  - Data & Potensi
  - Pariwisata
  - UMKM
  - Layanan & Fasilitas
  - Agenda & Berita
  - Galeri
  - Kontak & Aspirasi
  - Tentang Proyek

- Integrasi ringan:
  - Link ke lokasi Google Maps untuk setiap objek (pantai, UMKM, fasilitas).
  - Form kontak/aspirasi via Google Form atau layanan form statis.

### 5.2 Out of Scope (untuk versi awal)

- Sistem booking/pembayaran online.
- Multi-bahasa penuh (EN, dll.) – cukup disiapkan struktur kalau nanti ditambah.
- Dashboard admin kompleks (cukup CMS standar).
- Fitur login pengguna umum.

---

## 6. Informasi & Konten yang Harus Ada

Bagian ini menjawab permintaan “setiap bit informasi” yang sebaiknya dibawa ke web.

### 6.1 Profil & Data Dusun

Dari laporan KKN:

- Letak administratif, batas wilayah, jarak ke fasilitas penting (balai kalurahan, JLS, puskesmas, kantor kapanewon, Wonosari, Yogyakarta).
- Tabel distribusi penduduk per RT (RT 01, 02, 03; jumlah KK & jiwa).
- Gambaran mata pencaharian:
  - Petani singkong, jagung, kacang; padi tadah hujan.
  - Peternak sapi, kambing, ayam.
  - Perantau bakwan kawi, pedagang, guru, aparatur desa.
  - Produsen bakpia & UMKM lain.

- Kondisi pendidikan: mayoritas orang tua tamat SD, pemuda rata-rata SMA/SMK, sedikit yang kuliah.
- Isu kesehatan (stunting, peran posyandu).
- Informasi agama (100% Islam, pusat kegiatan di Masjid Sunan Kalijaga & TPA).
- Tradisi & budaya (yasinan, karawitan, reog, arisan, tirakatan).

### 6.2 Aset Fisik & Alam

- Posyandu (jadwal, lokasi di balai dusun).
- Pendidikan:
  - KB/PAUD Insan Cendekia III (alamat, jam, kontak).
  - TPA di Masjid Sunan Kalijaga.

- Fasilitas umum:
  - Masjid Sunan Kalijaga.
  - Lapangan voli dusun.
  - Balai padukuhan.

- Aset alam:
  - Ladang & kebun jati–singkong, pemanfaatan singkong (gathot, tiwul, gaplek, dsb.).
  - Hutan jati sekitar dusun.
  - Sumber air: PDAM & tampungan air 9.000 liter, tadah hujan.

### 6.3 Aset Wisata

- Pantai Ngedan – pantai paling berkembang, akses relatif mudah, sudah ada warung/fasilitas.
- Pantai Ngluwen – kecil, lebih sepi.
- Pantai Butuh – pantai dengan pasir putih, akses lebih menantang.
- Pantai Mbirit – cocok foto, relatif belum ramai.
- (Dari sumber luar yang sudah kamu riset sebelumnya: Bukit Maracah/puncak pandang) – bisa dijadikan sub-objek wisata, dihubungkan dengan info yang valid di luar PRD ini.

Untuk tiap objek:

- Lokasi GPS (link gmaps), cara menuju, perkiraan waktu tempuh, tiket & retribusi, jam operasional, fasilitas, tips keselamatan, foto.

### 6.4 Aset UMKM

Dari KKN Digitalisasi:

- Produsen bakpia pathok lokal Bedalo yang berjualan di JLS.
- UMKM olahan singkong (gathot, tiwul, kerupuk, dsb.).
- Kelompok kerajinan pelepah pisang.

Data per UMKM:

- Nama usaha & pemilik.
- Jenis produk/jasa.
- Deskripsi singkat (cerita).
- Foto produk & tempat.
- Alamat & link Maps.
- Nomor WA/telepon.
- Jam operasional.

### 6.5 Organisasi & Kegiatan

- Struktur informal:
  - Yasinan (jadwal, format, siapa saja).
  - Karawitan & latihan 3x/minggu.
  - Seni Reog (latihan Sabtu–Minggu, anak-anak).
  - Kelompok kerajinan ibu-ibu.

- Karang Taruna (profil, program rutin).
- Kegiatan hasil KKN (untuk arsip):
  - TPA & Mengaji, Pendampingan PAUD, Bimbel.
  - Posyandu & sosialisasi stunting.
  - Semarak Sabtu Sehat (senam).
  - Gebyar Kemerdekaan & tirakatan.
  - Jum’at Bersih (masjid & pantai).
  - Bedalo Terang (pemasangan lampu jalan).
  - Digitalisasi Dusun Bedalo.

---

## 7. Struktur Halaman & Slug

Berikut usulan sitemap & slug untuk versi 1:

1. **Beranda** – `/`
   - Hero section: foto panoramik Bedalo/pantai, tagline.
   - Highlight cepat:
     - “4 Pantai di Satu Dusun”
     - Jumlah penduduk & info singkat.
     - Teaser UMKM unggulan.
     - Link cepat ke “Rencanakan Kunjungan” & “Data Dusun”.

2. **Profil Dusun** – `/profil-dusun`
   - Sejarah singkat dusun & kalurahan.
   - Peta lokasi (embedded gambar + link Maps).
   - Batas wilayah & jarak ke fasilitas penting.
   - Visi-misi dusun (bisa mengadaptasi visi yang mereka punya).

3. **Data & Potensi** – `/data-dusun`
   - Tabel penduduk per RT.
   - Ringkasan pendidikan, pekerjaan, kesehatan (angka & grafik sederhana).
   - Potensi ekonomi: pertanian, peternakan, pariwisata, UMKM.
   - Potensi budaya: karawitan, reog, tradisi.

4. **Pariwisata** – `/pariwisata`
   - Daftar semua objek wisata dengan kartu (foto, ringkasan, tombol “Lihat Detail”).
   - Child pages:
     - `/pariwisata/pantai-ngedan`
     - `/pariwisata/pantai-ngluwen`
     - `/pariwisata/pantai-butuh`
     - `/pariwisata/pantai-mbirit`
     - (opsional) `/pariwisata/bukit-maracah`

   - Tiap detail:
     - Deskripsi.
     - Cara ke sana.
     - Harga tiket & parkir.
     - Fasilitas & tips.
     - Galeri foto.

5. **UMKM & Produk Lokal** – `/umkm`
   - List UMKM per kategori (makanan, kerajinan, jasa).
   - Halaman detail per UMKM: `/umkm/<slug-usaha>`

6. **Layanan & Fasilitas** – `/layanan`
   - Pendidikan: PAUD, TPA (jadwal, kontak).
   - Kesehatan: Posyandu (jadwal, sasaran).
   - Peribadatan: Masjid Sunan Kalijaga.
   - Fasilitas umum: balai dusun, lapangan, dll.

7. **Agenda & Berita** – `/agenda`
   - Daftar kegiatan mendatang (posyandu, senam, karang taruna, kerja bakti).
   - Berita & dokumentasi singkat kegiatan yang sudah berlalu (bisa format blog).

8. **Galeri** – `/galeri`
   - Grid foto kegiatan & wisata.
   - Filter: “Wisata”, “Kegiatan Warga”, “UMKM”.

9. **Kontak & Aspirasi** – `/kontak`
   - Kontak resmi dusun (Kepala Dusun, kantor kalurahan).
   - Kontak karang taruna.
   - Nomor penting (puskesmas, polsek, damkar).
   - Embed form aspirasi/kritik-saran (Google Form / layanan forms statis).

10. **Tentang Proyek** – `/tentang-proyek`
    - Penjelasan singkat program Digitalisasi Dusun Bedalo.
    - Kredit KKN Angkatan 117 Kelompok 129 & sponsor.
    - Penjelasan singkat teknologi (tanpa terlalu teknis) + ajakan kontribusi.

---

## 8. Persyaratan Fungsional

### 8.1 Navigasi & Struktur

- Menu utama selalu terlihat di header pada semua halaman.
- Burger menu untuk mobile.
- Footer berisi:
  - Link cepat ke halaman penting.
  - Kontak dasar.
  - Copyright & info proyek.

### 8.2 Pengelolaan Konten (CMS)

**Kebutuhan:**

1. Admin lokal (karang taruna/perangkat) bisa:
   - Login ke dashboard CMS.
   - Tambah/edit/hapus:
     - Berita/agenda.
     - Data UMKM (tanpa merusak layout).
     - Konten teks halaman statis (Profil, Data, Layanan).
     - Galeri foto.

2. Perubahan konten terdeploy otomatis (CI/CD) setelah di-save (build & deploy).
3. Tidak ada biaya bulanan untuk hosting/CMS (pakai layanan gratis dan repo git).

### 8.3 Modul Pariwisata

- List objek wisata dengan filter kategori (pantai, bukit).
- Halaman detail objek:
  - Info tekstual.
  - Tombol “Buka di Google Maps”.
  - Tombol “Hubungi Pengelola” (WA link).

- Bisa menandai objek sebagai:
  - `aktif` / `sementara ditutup` (mis. kalau ada bencana).

### 8.4 Modul UMKM

- List UMKM dengan:
  - Foto thumbnail.
  - Nama usaha.
  - Kategori.
  - Lokasi singkat.

- Halaman detail UMKM:
  - Info lengkap + link WA + link Maps.

- Kemungkinan ke depan: filter berdasarkan kategori (makanan/kerajinan/jasa).

### 8.5 Agenda & Berita

- Timeline kartu kegiatan.
- Tagging kegiatan: “Kesehatan”, “Pendidikan”, “Budaya”, “Karang Taruna”.
- Arsip kegiatan KKN 2025 sebagai satu kategori khusus.

### 8.6 Kontak & Aspirasi

- Form kontak:
  - Nama.
  - Email/WA.
  - Subjek.
  - Pesan.

- Pengiriman via:
  - Google Form / Netlify Forms / solusi lain yang tidak butuh backend kustom.

- Notifikasi ke email perangkat/karang taruna.

---

## 9. Persyaratan Non-Fungsional

1. **Kinerja**
   - Skor PageSpeed Insight desktop > 90 dan mobile > 80 (target minimal).
   - Halaman utama < 2 MB dan TTFB/First Contentful Paint secepat mungkin (optimasi gambar dan cache).
   - Mendukung koneksi lambat (3G) – gambar dikompresi, lazy load.

2. **Keandalan**
   - Hosting statis (Netlify/Vercel/GitHub Pages atau setara) dengan uptime tinggi.
   - Build otomatis saat konten berubah.

3. **Kemudahan Pemeliharaan**
   - Semua konfigurasi berada dalam repo (Infrastructure as Code sederhana).
   - Panduan admin (dokumen + video yang sudah disiapkan oleh tim KKN).

4. **Aksesibilitas**
   - Kontras warna cukup.
   - Alt text untuk gambar penting.
   - Navigasi bisa dilakukan hanya dengan keyboard.

5. **SEO & Shareability**
   - Meta title & description untuk setiap halaman.
   - URL human readable sesuai slug di atas.
   - Open Graph tags untuk share ke WhatsApp/Instagram/FB.

6. **Keamanan**
   - Akses CMS hanya lewat https dengan auth.
   - Tidak menyimpan data sensitif di frontend.
   - Spam protection dasar untuk form (honeypot / reCAPTCHA ringan jika diperlukan).

---

## 10. Integrasi & Teknologi (Usulan)

Ini tidak mengikat, tapi memandu developer:

- **Frontend:** framework static-friendly (Next.js static export, Astro, Hugo, dsb.).
- **CMS:** Decap CMS (Netlify CMS self-hosted) terintegrasi ke repo Git.
- **Hosting:** Netlify / Vercel / GitHub Pages + Cloudflare (opsional).
- **Form:** Netlify Forms / Google Forms embed.
- **Assets:** Gambar disimpan dalam repo atau bucket publik.

---

## 11. Analytics & Metrik

- Pasang Google Analytics/umami/Matomo (pilih satu).
- Track:
  - Pageview per halaman wisata & UMKM.
  - Click ke tombol “Buka di Maps” dan “Hubungi via WA”.
  - Sumber trafik (media sosial, pencarian, referer lain).

- Laporan berkala (triwulan) bisa diekspor untuk rapat dusun/karang taruna.

---

## 12. Risiko & Mitigasi

| Risiko                               | Dampak                   | Mitigasi                                                                                                      |
| ------------------------------------ | ------------------------ | ------------------------------------------------------------------------------------------------------------- |
| Admin lokal lupa cara pakai CMS      | Website jarang di-update | Dokumentasi tertulis + video tutorial; sesi pelatihan rutin tiap tahun; tunjuk min. 2 admin.                  |
| Hosting/CMS gratis berubah kebijakan | Situs down / berbayar    | Pilih layanan populer & siapkan opsi migrasi (backup repo & konten).                                          |
| Data UMKM & harga tidak update       | Wisatawan kecewa         | Wajibkan update data minimal tiap 6 bulan; gunakan form internal untuk koreksi cepat.                         |
| Akses internet di dusun terbatas     | Admin kesulitan update   | Pengeditan bisa dilakukan dari luar dusun (mis. mahasiswa/relawan) dengan koordinasi WA; konten tetap statis. |

---

## 13. Roadmap Rilis

### Fase 1 – Fondasi (0–1 bulan)

- Menyepakati sitemap & desain wireframe.
- Men-setup repo, hosting, dan CMS.
- Mengisi konten awal:
  - Profil dasar dusun.
  - 4 pantai.
  - 3–5 UMKM utama.
  - 1–2 berita (mis. dokumentasi KKN & Gebyar Kemerdekaan).

### Fase 2 – Pengayaan Konten (1–3 bulan)

- Lengkapi data penduduk & potensi.
- Tambah galeri foto.
- Tambah agenda rutin (posyandu, senam, yasinan, karawitan).

### Fase 3 – Optimalisasi & Promosi (3–6 bulan)

- Optimasi SEO.
- Ajak warga & perantau share link web.
- Evaluasi trafik & update konten berdasarkan feedback.
