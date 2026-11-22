/* =========================================================
   TEMPLATE TEMPAT BARU  (file ini TIDAK dimuat aplikasi)

   CARA TAMBAH TEMPAT
   1. Salin file ini → ganti nama jadi  namatempat.js  (huruf kecil, tanpa spasi)
      di folder js/data/tempat/
   2. Buat folder foto  assets/img/namatempat/  lalu isi fotonya
      (id di bawah HARUS sama dengan nama folder)
   3. Edit isinya
   4. Tambah SATU baris di index.html, di bawah daftar tempat lain:
      <script src="js/data/tempat/namatempat.js"></script>
   5. Buka aplikasi. Kalau ada yang salah tulis, muncul peringatan
      di Console (F12) dan toast di layar.

   Pilihan nilai (jenis, kategori, rasa, asal, mood, tipe): js/data/pilihan.js
   ========================================================= */
TEMPAT.push(buatTempat({
  id: 'namatempat',                 // = nama folder foto
  nama: 'Nama Tempat',
  jenis: 'Cafe',                    // Street Food | Cafe | Restoran | Dessert
  harga: [15000, 40000],            // [termurah, termahal] dalam rupiah
  rating: 4.5, worth: 85, jarak: '1.2 km',
  alamat: 'Alamat lengkap',
  jam: '10.00 – 22.00',
  deskripsi: 'Satu atau dua kalimat tentang tempat ini.',
  label: ['Worth It'],              // bebas: Must Try, Hidden Gem, Budget, ...

  // --- dipakai Terserah? & VibeMatch ---
  mood: ['friends', 'study'],
  kategori: ['ringan', 'minuman'],
  rasa: ['kopi', 'manis'],
  asal: ['lokal'],
  skor: [85, 85, 80, 80, 80, 85],   // rasa, harga, porsi, pelayanan, suasana, overall

  // --- foto: nama file di assets/img/namatempat/ ---
  foto: ['depan.jpg', 'interior.jpg'],
  fotoPengguna: [],                 // foto dari pengunjung

  // --- menu ---
  // harga: null → tampil "Cek harga" | estimasi: true → tampil "±Rp..."
  // foto: nama file (di folder tempat ini) atau 'minuman/es-teh.jpg' (folder lain)
  // emoji: dipakai kalau tidak ada foto
  menu: [
    { nama: 'Nama Menu', harga: 25000, foto: 'menu-1.jpg', tipe: 'minuman' },
    { nama: 'Menu Tanpa Foto', harga: 18000, emoji: '🍰', tipe: 'dessert' },
  ],

  // --- link: tempel di antara tanda kutip. Yang kosong → tombolnya tidak muncul ---
  link: {
    gmaps:      '',     // tombol 🧭 Rute
    katalog:    '',     // tombol 📖 Lihat menu lengkap
    instagram:  '',
    tiktok:     '',
    gofood:     '',
    shopeefood: '',
    grabfood:   '',
    website:    '',
  },

  // --- ulasan contoh (boleh kosong: ulasan: [],) ---
  ulasan: [
    { user: 'Rani', bintang: 5, teks: 'Enak dan nyaman.',
      pesan: [{ menu: 'Nama Menu', bintang: 5 }] },       // nama menu harus sama dengan di atas
  ],
}));
