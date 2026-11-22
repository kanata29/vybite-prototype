/* =========================================================
   KOPITAGRAM — Kopitagram - Dr.Cipto
   Foto di folder: assets/img/kopitagram/   (nama file cukup ditulis tanpa folder)
   Foto dari folder lain ditulis lengkap, contoh: 'minuman/es-teh.jpg'
   CATATAN: harga menu belum diisi (null) → tampil "Cek harga".
   ========================================================= */
TEMPAT.push(buatTempat({
  id: 'kopitagram',                 // juga nama folder foto
  nama: 'Kopitagram - Dr.Cipto',
  jenis: 'Cafe',                // Street Food | Cafe | Restoran | Dessert
  harga: [25000, 75000],           // [termurah, termahal]
  rating: 4.6, worth: 85, jarak: '4.6 km',
  alamat: 'Jalan Dokter Cipto No.111, Sarirejo, Kec. Semarang Tim., Kota Semarang',
  jam: '08.00 – 24.00',
  deskripsi: 'Coffee shop dengan taman dan area outdoor luas, cocok buat nongkrong lama.',
  label: ['Aesthetic'],

  // --- dipakai fitur Terserah? & VibeMatch (pilihan nilai: lihat data/pilihan.js) ---
  mood: ['study', 'friends', 'date'],
  kategori: ['ringan', 'minuman', 'berat'],
  rasa: ['kopi', 'gurih', 'manis'],
  asal: ['lokal'],
  skor: [88, 90, 80, 82, 78, 85],          // rasa, harga, porsi, pelayanan, suasana, overall

  // --- foto ---
  foto: ['depan.jpg', 'taman-1.jpg', 'taman-2.jpg', 'taman-3.jpg', 'taman-4.jpg'],
  fotoPengguna: ['pengunjung-indoor.jpg', 'pengunjung-outdoor.jpg', 'pengunjung-makanan.jpg'],   // foto dari pengunjung

  // --- menu (harga: null → tampil "Cek harga"; estimasi: true → tampil "±Rp") ---
  menu: [
    { nama: 'Hidangan Favorit', harga: null, foto: 'pengunjung-makanan.jpg', tipe: 'makanan' },
  ],

  // --- link: tempel di antara tanda kutip. Yang kosong → tombolnya tidak muncul ---
  link: {
    gmaps:      'https://maps.app.goo.gl/SK8rjYUDv2f2k3jd6',
    katalog:    '',
    instagram:  'https://www.instagram.com/kopitagram/',
    tiktok:     'https://www.tiktok.com/@kopitagram?lang=id-ID',
    gofood:     '',
    shopeefood: '',
    grabfood:   '',
    website:    '',
  },

  // --- ulasan contoh (ulasan pengguna disimpan di browser) ---
  ulasan: [],
}));
