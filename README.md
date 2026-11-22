# Vybite — Discover Places, Find Your Vibe

Prototype web app (HTML + CSS + JavaScript biasa — tanpa build tool & backend).

## Menjalankan
Buka folder di VS Code → klik kanan `index.html` → **Open with Live Server**
(atau buka `index.html` langsung di browser).

## Struktur folder

```
index.html                 ← urutan script dimuat di sini (urutan penting)
css/style.css              ← semua tampilan (ada daftar isi di bagian atas)
js/
  data/                    ← ★ yang paling sering kamu edit
    pilihan.js             ← daftar nilai yang boleh (jenis, rasa, asal, mood, ...)
    tempat/
      _awal.js             ← menyiapkan TEMPAT & fungsi buatTempat() (jangan dihapus)
      _template.js         ← template tempat baru (tidak dimuat aplikasi)
      katsu.js, hokben.js, ... ← SATU FILE = SATU TEMPAT
    terserah.js            ← pertanyaan & pilihan quiz "Terserah?"
    lainnya.js             ← deals, kategori akun, lokasi, Coming Soon, ucapan Vibi
    feedback.js            ← ★ pengaturan form feedback (isi link Google Form di sini)
    periksa.js             ← pemeriksa salah ketik data (peringatan di Console)
  state.js                 ← data yang berubah saat dipakai (+ tema)
  logika.js                ← Worth It Score, rating, pencocokan rekomendasi
  ui.js                    ← kartu tempat, foto, navigasi, helper Vibi
  halaman/                 ← satu file = satu halaman
  main.js                  ← router R() + start aplikasi
assets/
  img/<id-tempat>/         ← foto tiap tempat (nama folder = id tempat)
  img/minuman/             ← foto minuman yang dipakai banyak tempat
  vibi/                    ← maskot Vibi
```

## Mau edit apa, buka file mana?

| Mau ubah…                                              | Buka                              |
|--------------------------------------------------------|-----------------------------------|
| Data / menu / harga / link satu tempat                 | `js/data/tempat/<id>.js`          |
| Tambah tempat baru                                     | lihat "Menambah tempat" di bawah  |
| Pertanyaan quiz Terserah?                              | `js/data/terserah.js`             |
| Voucher, kategori akun, lokasi, Coming Soon, ucapan Vibi | `js/data/lainnya.js`            |
| Warna, tema terang/gelap, ukuran, layout               | `css/style.css`                   |
| Rumus Worth It Score / pencocokan                      | `js/logika.js`                    |
| Pengaturan form feedback / Google Form                 | `js/data/feedback.js`             |
| Isi satu halaman                                       | `js/halaman/<nama>.js`            |

## Menambah tempat
1. Buat folder foto `assets/img/namatempat/` dan isi fotonya.
2. Salin `js/data/tempat/_template.js` → `js/data/tempat/namatempat.js`, lalu isi datanya
   (`id` harus sama dengan nama folder: huruf kecil, tanpa spasi).
3. Tambah satu baris di `index.html` (di bawah daftar tempat lain):
   `<script src="js/data/tempat/namatempat.js"></script>`
4. Buka aplikasi. Kalau ada salah tulis (jenis, rasa, asal, link tanpa `https://`, menu di ulasan
   yang tidak ada, dll) muncul **toast peringatan** dan detailnya ada di **Console (F12)**.

## Foto
- Nama file **tanpa** `/` → ada di folder tempat itu, mis. `foto: ['depan.jpg']` → `assets/img/<id>/depan.jpg`
- Nama file **dengan** `/` → dihitung dari `assets/img/`, mis. `'minuman/es-teh.jpg'`
- `foto` = galeri resmi (gambar tempat), `fotoPengguna` = tampil di bagian "Foto dari pengunjung"
- Menu tanpa foto → pakai `emoji: '🍰'`. Foto yang gagal dimuat otomatis diganti emoji.
- Penamaan yang dipakai: `depan.jpg`, `interior.jpg`, `pengunjung-*.jpg`, `<nama-menu>.jpg` (huruf kecil, pakai `-`).

## Menu & harga
```js
{ nama: 'Mie Ayam Polos', harga: 11000, foto: 'polos.jpg', tipe: 'makanan' },
{ nama: 'Es Kopi KOV',    harga: null,  foto: 'pengunjung-kopi.jpg', tipe: 'minuman' },  // tampil "Cek harga"
{ nama: 'Caramel Macchiato', harga: 58000, estimasi: true, ... },                          // tampil "±Rp58.000"
```

## Link (Rute, katalog, sosmed, pesan antar)
Isi di blok `link` tiap tempat. Yang kosong (`''`) → tombolnya tidak muncul.
- `gmaps` → tombol 🧭 Rute (kalau kosong, Rute mencari lewat nama + alamat di Google Maps)
- `katalog` → tombol 📖 Lihat menu lengkap
- `instagram`, `tiktok`, `gofood`, `shopeefood`, `grabfood`, `website` → chip di bawah tombol aksi
Spasi di awal/akhir link dibuang otomatis. Link harus diawali `https://`.

## Rating & ulasan
Di halaman tempat: **Tulis ulasan** → pilih menu yang dipesan + bintang tiap menu → nilai
rasa/harga/porsi/pelayanan/suasana → rating keseluruhan. Ulasan tersimpan di browser (`localStorage`)
dan ikut menghitung Worth It Score, rating tempat, dan rating tiap menu.
Hapus semua ulasan: DevTools → Application → Local Storage → hapus `vybite-ulasan`.

## Tema
Default terang (kuning + putih). User bisa pilih Terang / Gelap / Otomatis di Profile
atau tombol 🌓 di Home. Warna ada di `:root` dan `:root[data-theme="dark"]` pada `css/style.css`.

## Maskot Vibi (the sassy duck)
Gambar di `assets/vibi/` (`.webp`, background transparan). Pakai lewat helper di `js/ui.js`:

```js
${vibi('expr-happy', 120)}                              // gambar Vibi lebar 120px
${bubbleVibi('Halo, aku Vibi!')}                        // gelembung ucapan
${judulVibi('Judul Halaman', 'acc-map', 'kata Vibi')}   // judul + Vibi di kanan
```
Ucapan Vibi per halaman: `UCAPAN_VIBI`; gambar tiap halaman Coming Soon: `VIBI_SOON` (`js/data/lainnya.js`);
gambar tiap pertanyaan Terserah?: field `vibi:` di `js/data/terserah.js`.

Nama file yang tersedia (tanpa `.webp`):
- Utama: `vibi-main`, `vibi-logo`, `favicon.png`
- Pose: `pose-phone`, `pose-wink`, `pose-boba`, `pose-burger`, `pose-sleep`
- Ekspresi: `expr-sassy`, `expr-wink`, `expr-shocked`, `expr-angry`, `expr-cry`, `expr-happy`, `expr-curious`, `expr-lazy`, `expr-cool`, `expr-dots`
- Aksesori: `acc-backpack`, `acc-headphones`, `acc-boba`, `acc-tote`, `acc-map`
- Stiker: `sticker-laper`, `sticker-yuk`, `sticker-nice`, `sticker-makasih`, `sticker-onit`, `sticker-best`
- Ikon: `ui-duckhead`, `ui-magnifier`, `ui-burger`, `ui-fries`, `ui-cup`, `ui-pin`, `ui-star`, `ui-sparkle`, `ui-pink-love`, `ui-bubble-heart`, `ui-bubble-alert`

## Halaman baru
Buat `js/halaman/namabaru.js`, tambahkan `<script>` di `index.html`, daftarkan fungsinya di `ROUTER`
(`js/main.js`), lalu buka dengan `go('namahalaman')`.


## Feedback responden (Aktivitas 5.2) — jawaban masuk ke Google Sheets-mu
Responden mengisi di web ini (tombol **💬 Feedback** melayang di semua halaman). Jawaban dikirim ke
Google Form milikmu, jadi hanya kamu yang bisa melihatnya di Google Sheets. Cocok untuk GitHub Pages.

**Hubungkan sekali (±5 menit):**
1. Buat Google Form baru dengan **6 pertanyaan, semuanya bertipe "Jawaban singkat"** (jangan pilihan ganda,
   supaya jawaban tidak ditolak karena beda tulisan). Urutan & judul bebas, mis.: Kesan, Kategori, Perangkat,
   Fitur dicoba, Yang disukai, Yang perlu diperbaiki.
2. Di Form: titik tiga (⋮) → **Dapatkan link isi otomatis** → isi semua kolom dengan teks apa saja (mis. `a`, `b`, `c`…)
   → **Dapatkan link** → salin. Linknya mirip:
   `https://docs.google.com/forms/d/e/AAAA.../viewform?usp=pp_url&entry.111=a&entry.222=b&...`
3. Buka `js/data/feedback.js`:
   - `formUrl`: salin bagian sampai `/viewform`, lalu ganti `viewform` jadi **`formResponse`**
   - `kolom`: tulis `entry.111`, `entry.222`, ... sesuai urutan pertanyaan yang kamu isi tadi
     (kesan → kategori → perangkat → fitur → suka → saran)
4. Di Form, tab **Respons** → ikon Sheets → **Buat spreadsheet**. Kirim satu feedback dari web untuk tes,
   lalu cek barisnya masuk di Sheets.
Selama `formUrl` kosong, muncul toast peringatan dan jawaban hanya tersimpan di browser responden.

**Menjawab Aktivitas 5.2 dari Sheets** (anggap kolom Kesan = kolom B, baris 1 = judul):
- Jumlah orang yang terlibat: `=COUNTA(B2:B)`
- Yang menyukai: `=COUNTIF(B2:B;"Suka")`
- Netral / kurang senang: `=COUNTIF(B2:B;"Netral")+COUNTIF(B2:B;"Kurang suka")`
(Pakai koma `,` kalau Sheets-mu berbahasa Inggris.)

Catatan: satu kiriman = satu responden. Di perangkat yang dipakai bergantian, pakai tombol
"Isi lagi (responden lain)" setelah terkirim. Form Google tidak bisa dibaca balasannya oleh browser,
jadi selalu uji sekali setelah deploy.

## Deploy ke GitHub Pages
Push folder ini ke repo (isi `vybite/` di root repo, `index.html` harus di root), lalu
Settings → Pages → Branch `main` / folder `/ (root)` → Save. Semua path di project sudah relatif.
