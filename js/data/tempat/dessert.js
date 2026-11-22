/* =========================================================
   DESSERT — Es Teler & Dessert Corner (contoh)
   Foto di folder: assets/img/dessert/   (nama file cukup ditulis tanpa folder)
   Foto dari folder lain ditulis lengkap, contoh: 'minuman/es-teh.jpg'
   ========================================================= */
TEMPAT.push(buatTempat({
  id: 'dessert',                 // juga nama folder foto
  nama: 'Es Teler & Dessert Corner (contoh)',
  contoh: true,                  // data contoh — ganti dengan tempat aslimu lalu hapus baris ini
  emoji: '🍧',                    // dipakai kalau belum ada foto
  jenis: 'Dessert',                // Street Food | Cafe | Restoran | Dessert
  harga: [10000, 28000],           // [termurah, termahal]
  rating: 4.5, worth: 85, jarak: '1.0 km',
  alamat: 'Isi alamat aslinya di sini',
  jam: '12.00 – 21.00',
  deskripsi: 'Contoh tempat dessert. Ganti dengan data aslimu.',
  label: ['Budget'],

  // --- dipakai fitur Terserah? & VibeMatch (pilihan nilai: lihat data/pilihan.js) ---
  mood: ['friends', 'date', 'budget'],
  kategori: ['dessert', 'minuman'],
  rasa: ['manis', 'segar', 'creamy'],
  asal: ['lokal'],
  skor: [88, 90, 80, 82, 78, 85],          // rasa, harga, porsi, pelayanan, suasana, overall

  // --- foto ---
  foto: [],
  fotoPengguna: [],   // foto dari pengunjung

  // --- menu (harga: null → tampil "Cek harga"; estimasi: true → tampil "±Rp") ---
  menu: [
    { nama: 'Es Teler', harga: 15000, emoji: '🍧', tipe: 'dessert' },
    { nama: 'Pancake Coklat', harga: 22000, emoji: '🥞', tipe: 'dessert' },
  ],

  // --- link: tempel di antara tanda kutip. Yang kosong → tombolnya tidak muncul ---
  link: {
    gmaps:      '',
    katalog:    '',
    instagram:  '',
    tiktok:     '',
    gofood:     '',
    shopeefood: '',
    grabfood:   '',
    website:    '',
  },

  // --- ulasan contoh (ulasan pengguna disimpan di browser) ---
  ulasan: [],
}));
