/* =========================================================
   BATTERHUB — BatterHub - Tembalang
   Foto di folder: assets/img/batterhub/   (nama file cukup ditulis tanpa folder)
   Foto dari folder lain ditulis lengkap, contoh: 'minuman/es-teh.jpg'
   CATATAN: harga menu belum diisi (null) → tampil "Cek harga". Isi kalau sudah tahu.
   ========================================================= */
TEMPAT.push(buatTempat({
  id: 'batterhub',                 // juga nama folder foto
  nama: 'BatterHub - Tembalang',
  jenis: 'Street Food',                // Street Food | Cafe | Restoran | Dessert
  harga: [15000, 40000],           // [termurah, termahal]
  rating: 4.6, worth: 85, jarak: '6.9 km',
  alamat: 'Jl. Tirto Agung No.64F, Pedalangan, Kec. Banyumanik, Kota Semarang',
  jam: '08.00 – 24.00',
  deskripsi: 'Nasi dengan ayam boneless crispy dan pilihan level pedas, cocok buat makan cepat.',
  label: ['Budget'],

  // --- dipakai fitur Terserah? & VibeMatch (pilihan nilai: lihat data/pilihan.js) ---
  mood: ['quick', 'budget', 'friends'],
  kategori: ['berat'],
  rasa: ['gurih', 'pedas'],
  asal: ['lokal'],
  skor: [88, 90, 80, 82, 78, 85],          // rasa, harga, porsi, pelayanan, suasana, overall

  // --- foto ---
  foto: ['depan.jpg', 'menu-board.jpg', 'area-makan.jpg'],
  fotoPengguna: ['pengunjung-makanan-1.jpg', 'pengunjung-makanan-2.jpg'],   // foto dari pengunjung

  // --- menu (harga: null → tampil "Cek harga"; estimasi: true → tampil "±Rp") ---
  menu: [
    { nama: 'Boneless Fried Chicken + Nasi', harga: null, foto: 'pengunjung-makanan-1.jpg', tipe: 'makanan' },
    { nama: 'Paket Ayam Telur Pedas', harga: null, foto: 'pengunjung-makanan-2.jpg', tipe: 'makanan' },
  ],

  // --- link: tempel di antara tanda kutip. Yang kosong → tombolnya tidak muncul ---
  link: {
    gmaps:      'https://share.google/fnjElzxw2baOdDa3v',
    katalog:    '',
    instagram:  'https://www.instagram.com/batterhub.id/',
    tiktok:     'https://www.tiktok.com/@batterhub.id',
    gofood:     'https://gofood.co.id/semarang/restaurant/batterhub-boneless-fried-chicken-tembalang-22bd3853-7615-4b99-95da-00f8390cf507',
    shopeefood: '',
    grabfood:   '',
    website:    '',
  },

  // --- ulasan contoh (ulasan pengguna disimpan di browser) ---
  ulasan: [],
}));
