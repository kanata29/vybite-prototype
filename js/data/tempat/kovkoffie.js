/* =========================================================
   KOVKOFFIE — Kov Koffie - Sultan Agung
   Foto di folder: assets/img/kovkoffie/   (nama file cukup ditulis tanpa folder)
   Foto dari folder lain ditulis lengkap, contoh: 'minuman/es-teh.jpg'
   CATATAN: harga menu belum diisi (null) → tampil "Cek harga".
   ========================================================= */
TEMPAT.push(buatTempat({
  id: 'kovkoffie',                 // juga nama folder foto
  nama: 'Kov Koffie - Sultan Agung',
  jenis: 'Cafe',                // Street Food | Cafe | Restoran | Dessert
  harga: [10000, 28000],           // [termurah, termahal]
  rating: 4.6, worth: 85, jarak: '4.6 km',
  alamat: 'Jl. Sultan Agung No.135, Kaliwiru, Kec. Candisari, Kota Semarang',
  jam: '24 jam',
  deskripsi: 'Coffee shop buka 24 jam di Sultan Agung dengan area indoor dan outdoor yang luas.',
  label: ['24 Jam'],

  // --- dipakai fitur Terserah? & VibeMatch (pilihan nilai: lihat data/pilihan.js) ---
  mood: ['study', 'friends', 'late'],
  kategori: ['minuman', 'ringan'],
  rasa: ['kopi', 'manis'],
  asal: ['lokal'],
  skor: [88, 90, 80, 82, 78, 85],          // rasa, harga, porsi, pelayanan, suasana, overall

  // --- foto ---
  foto: ['depan.jpg', 'interior-1.jpg', 'interior-2.jpg', 'interior-3.jpg'],
  fotoPengguna: ['pengunjung-kopi.jpg', 'pengunjung-malam.jpg', 'pengunjung-counter.jpg'],   // foto dari pengunjung

  // --- menu (harga: null → tampil "Cek harga"; estimasi: true → tampil "±Rp") ---
  menu: [
    { nama: 'Es Kopi KOV', harga: null, foto: 'pengunjung-kopi.jpg', tipe: 'minuman' },
  ],

  // --- link: tempel di antara tanda kutip. Yang kosong → tombolnya tidak muncul ---
  link: {
    gmaps:      'https://maps.app.goo.gl/uDV4h45Xbe1vQBPt6',
    katalog:    '',
    instagram:  'https://www.instagram.com/kovkoffie/?hl=id',
    tiktok:     'https://www.tiktok.com/@kovkoffie?is_from_webapp=1&sender_device=pc',
    gofood:     '',
    shopeefood: '',
    grabfood:   '',
    website:    '',
  },

  // --- ulasan contoh (ulasan pengguna disimpan di browser) ---
  ulasan: [],
}));
