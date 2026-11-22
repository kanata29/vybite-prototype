/* =========================================================
   KEBAB — Kebab Baba Rafi
   Foto di folder: assets/img/kebab/   (nama file cukup ditulis tanpa folder)
   Foto dari folder lain ditulis lengkap, contoh: 'minuman/es-teh.jpg'
   ========================================================= */
TEMPAT.push(buatTempat({
  id: 'kebab',                 // juga nama folder foto
  nama: 'Kebab Baba Rafi',
  jenis: 'Street Food',                // Street Food | Cafe | Restoran | Dessert
  harga: [29000, 33000],           // [termurah, termahal]
  rating: 4.4, worth: 83, jarak: '1.6 km',
  alamat: 'Ungaran - Cangkiran No.3, Semarang',
  jam: '11.00 – 22.00',
  deskripsi: 'Pilihan kebab sapi buat jajan cepat, ada varian Black dan Original.',
  label: ['Hidden Gem'],

  // --- dipakai fitur Terserah? & VibeMatch (pilihan nilai: lihat data/pilihan.js) ---
  mood: ['quick', 'friends', 'late'],
  kategori: ['berat', 'ringan'],
  rasa: ['gurih', 'asin', 'pedas'],
  asal: ['timur-tengah'],
  skor: [85, 85, 84, 80, 75, 83],          // rasa, harga, porsi, pelayanan, suasana, overall

  // --- foto ---
  foto: ['depan.jpg', 'kebab-black.jpg', 'kebab-original.jpg'],
  fotoPengguna: [],   // foto dari pengunjung

  // --- menu (harga: null → tampil "Cek harga"; estimasi: true → tampil "±Rp") ---
  menu: [
    { nama: 'Kebab Sapi Black', harga: 33000, foto: 'kebab-black.jpg', tipe: 'makanan' },
    { nama: 'Kebab Sapi Original', harga: 29000, foto: 'kebab-original.jpg', tipe: 'makanan' },
  ],

  // --- link: tempel di antara tanda kutip. Yang kosong → tombolnya tidak muncul ---
  link: {
    gmaps:      'https://maps.app.goo.gl/jRSKr8Bo5ioievjR6',
    katalog:    '',
    instagram:  'https://www.instagram.com/babarafiofficial/reels/',
    tiktok:     'https://www.tiktok.com/@babarafiofficial',
    gofood:     'https://gofood.co.id/semarang/restaurant/kebab-container-by-baba-rafi-alun-alun-lama-ungaran-06dfa970-a2b1-4d68-abb1-5935849eab8b',
    shopeefood: '',
    grabfood:   '',
    website:    '',
  },

  // --- ulasan contoh (ulasan pengguna disimpan di browser) ---
  ulasan: [],
}));
