/* =========================================================
   CHOWYUMFAT — Chow Yum Fat
   Foto di folder: assets/img/chowyumfat/   (nama file cukup ditulis tanpa folder)
   Foto dari folder lain ditulis lengkap, contoh: 'minuman/es-teh.jpg'
   CATATAN: harga & label & mood di bawah masih PERKIRAAN — sesuaikan dengan data aslinya.
   ========================================================= */
TEMPAT.push(buatTempat({
  id: 'chowyumfat',                 // juga nama folder foto
  nama: 'Chow Yum Fat',
  jenis: 'Restoran',                // Street Food | Cafe | Restoran | Dessert
  harga: [30000, 120000],           // [termurah, termahal]
  rating: 4.6, worth: 85, jarak: '4.6 km',
  alamat: 'Jl. Sultan Agung No.142, Kaliwiru, Kec. Candisari, Kota Semarang',
  jam: '12.00 – 21.00',
  deskripsi: 'Restoran Chinese food dengan bebek panggang khas yang dipajang di dapur terbuka.',
  label: ['Must Try'],

  // --- dipakai fitur Terserah? & VibeMatch (pilihan nilai: lihat data/pilihan.js) ---
  mood: ['friends', 'date', 'comfort'],
  kategori: ['berat'],
  rasa: ['gurih', 'asin'],
  asal: ['asian'],
  skor: [88, 90, 80, 82, 78, 85],          // rasa, harga, porsi, pelayanan, suasana, overall

  // --- foto ---
  foto: ['depan.jpg', 'interior.jpg', 'dapur-bebek.jpg'],
  fotoPengguna: ['pengunjung-1-interior.jpg', 'pengunjung-2-makanan.jpg', 'pengunjung-3-chowmart.jpg', 'pengunjung-4-interior.jpg'],   // foto dari pengunjung

  // --- menu (harga: null → tampil "Cek harga"; estimasi: true → tampil "±Rp") ---
  menu: [
    { nama: 'Bebek Panggang', harga: null, foto: 'dapur-bebek.jpg', tipe: 'makanan' },
    { nama: 'Hidangan Sharing', harga: null, foto: 'pengunjung-2-makanan.jpg', tipe: 'makanan' },
  ],

  // --- link: tempel di antara tanda kutip. Yang kosong → tombolnya tidak muncul ---
  link: {
    gmaps:      'https://maps.app.goo.gl/N67mqjidUM2FxTCt6',
    katalog:    '',
    instagram:  'https://www.instagram.com/chowyumfat_id/',
    tiktok:     'https://www.tiktok.com/@chowyumfat.id',
    gofood:     'https://gofood.co.id/semarang/restaurant/chow-yum-fat-candisari-9d19da7b-507d-4d2b-8f79-8c34328f0b31',
    shopeefood: '',
    grabfood:   '',
    website:    '',
  },

  // --- ulasan contoh (ulasan pengguna disimpan di browser) ---
  ulasan: [],
}));
