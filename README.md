# Tapak Digital: Jasa Pembuatan Website

Landing page statis (tanpa build) untuk menawarkan jasa website company profile & UMKM, dalam dua bahasa:

- `index.html`: **English** (default, di `/`)
- `id/index.html`: **Bahasa Indonesia** (di `/id/`)
- `style.css` dan `main.js` dipakai bersama oleh kedua halaman

Kalau mengubah teks, ubah di **kedua** file HTML supaya isinya tetap sama.

## Deploy ke GitHub Pages

Supaya alamatnya memakai nama brand (bukan nama pribadi), buat **GitHub Organization** gratis bernama `tapak-digital`
(GitHub → ikon profil → *Your organizations* → *New organization* → Free), lalu buat repo **`tapak-digital.github.io`** di dalamnya
→ website tampil di **https://tapak-digital.github.io**.

Paling profesional: domain sendiri (lihat bagian bawah).

### Cara A: lewat browser (tanpa git)
1. Login GitHub → **New repository** → nama `tapak-digital.github.io` (di organization `tapak-digital`) → **Public** → Create.
2. Klik **uploading an existing file** → drag `index.html`, `style.css`, `main.js`, `README.md`, **folder `id`, `img`, dan `logo`** → **Commit changes**.
3. **Settings → Pages** → Source: *Deploy from a branch* → Branch `main` / `(root)` → Save.
4. Tunggu 1 sampai 2 menit, buka https://tapak-digital.github.io.

### Cara B: lewat git
```bash
cd "G:/WORK HUNTER/website-jasa"
git init -b main
git add .
git commit -m "Initial landing page"
git remote add origin https://github.com/tapak-digital/tapak-digital.github.io.git
git push -u origin main
```
Lalu aktifkan Pages seperti langkah 3 di atas.

## Yang mudah diubah

| Apa | Di mana |
|---|---|
| Nomor WhatsApp | `var WA_NUMBER = "6289602015445";` di `main.js` |
| Nama brand | cari `Tapak Digital` di kedua file HTML |
| Harga paket | bagian `<!-- HARGA -->` |
| Portofolio | bagian `<!-- PORTOFOLIO -->`: tiap kartu satu `<a class="work">`; gambar di folder `img/` (800×500 JPG) |
| Pesan otomatis WhatsApp | atribut `data-msg="..."` di tiap tombol |
| Warna utama | `--brand` di `:root` paling atas `style.css` |

## Opsional berikutnya
- Domain sendiri (mis. `tapakdigital.my.id` / `tapakdigital.com`, cek ketersediaan dulu): tambahkan di **Settings → Pages → Custom domain**.
- Ganti kotak huruf "T" dengan logo Tapak Digital.
- Bina Digital belum punya gambar (situsnya memakai verifikasi Cloudflare). Simpan screenshot manual sebagai `img/binadigital.jpg` lalu ganti kartunya.
- Tambah testimoni **asli** setelah ada klien yang bersedia.
- Daftarkan ke Google Search Console & buat Google Business Profile.

## Logo
File di folder `logo/`:
- `tapak-digital-icon.svg`: ikon (vektor, bisa diperbesar tanpa pecah)
- `tapak-digital-icon-512.png`: ikon untuk foto profil WhatsApp Business / Instagram
- `tapak-digital-logo.png`: logo lengkap untuk latar terang
- `tapak-digital-logo-putih.png`: logo lengkap untuk latar gelap

Kalau alamat website bukan `tapak-digital.github.io`, ganti juga URL di `<meta property="og:image">` (gambar yang muncul saat link dibagikan di WhatsApp).
