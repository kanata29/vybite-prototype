/* =========================================================
   KATSU — Warung Katsu J2pan Sadewa
   Foto di folder: assets/img/katsu/   (nama file cukup ditulis tanpa folder)
   Foto dari folder lain ditulis lengkap, contoh: 'minuman/es-teh.jpg'
   ========================================================= */
TEMPAT.push(buatTempat({
  id: 'katsu',                 // juga nama folder foto
  nama: 'Warung Katsu J2pan Sadewa',
  jenis: 'Street Food',                // Street Food | Cafe | Restoran | Dessert
  harga: [15000, 30000],           // [termurah, termahal]
  rating: 4.6, worth: 88, jarak: '0.8 km',
  alamat: 'Jl. Sadewa, Semarang',
  jam: '10.00 – 22.00',
  deskripsi: 'Katsu renyah porsi mahasiswa, sambal mentai-nya bikin nagih.',
  label: ['Must Try', 'Budget'],

  // --- dipakai fitur Terserah? & VibeMatch (pilihan nilai: lihat data/pilihan.js) ---
  mood: ['quick', 'budget', 'comfort', 'friends'],
  kategori: ['berat'],
  rasa: ['gurih', 'asin'],
  asal: ['asian', 'lokal'],
  skor: [90, 92, 86, 80, 70, 88],          // rasa, harga, porsi, pelayanan, suasana, overall

  // --- foto ---
  foto: ['interior.jpg', 'chicken-katsu-nasi.jpg', 'menu-katsu-ayam.jpg', 'menu-katsu-mentai.jpg'],
  fotoPengguna: [],   // foto dari pengunjung

  // --- menu (harga: null → tampil "Cek harga"; estimasi: true → tampil "±Rp") ---
  menu: [
    { nama: 'Chicken Katsu Nasi', harga: 22000, foto: 'chicken-katsu-nasi.jpg', tipe: 'makanan' },
    { nama: 'Katsu Mentai', harga: 28000, foto: 'menu-katsu-mentai.jpg', tipe: 'makanan' },
    { nama: 'Nasi Goreng Katsu', harga: 24000, foto: 'nasi-goreng-katsu.jpg', tipe: 'makanan' },
    { nama: 'Es Jeruk', harga: 8000, foto: 'minuman/es-jeruk.jpg', tipe: 'minuman' },
  ],

  // --- link: tempel di antara tanda kutip. Yang kosong → tombolnya tidak muncul ---
  link: {
    gmaps:      'https://maps.app.goo.gl/1yjNMue4c5T41VSF9',
    katalog:    '',
    instagram:  'https://www.instagram.com/warungkatsujpan2/',
    tiktok:     '',
    gofood:     'https://gofood.co.id/semarang/restaurant/warung-katsu-jpan-2-nasi-ayam-jepang-indraprasta-b87946d5-40d2-4a9c-abff-dd35049dd852',
    shopeefood: '',
    grabfood:   '',
    website:    '',
  },

  // --- ulasan contoh (ulasan pengguna disimpan di browser) ---
  ulasan: [
    { user: 'Rani', bintang: 5, teks: 'Porsi pas, rasa konsisten. Worth it banget!',
      pesan: [{ menu: 'Chicken Katsu Nasi', bintang: 5 }, { menu: 'Es Jeruk', bintang: 4 }] },
    { user: 'Dimas', bintang: 4, teks: 'Mentainya enak, agak antre pas jam makan siang.',
      pesan: [{ menu: 'Katsu Mentai', bintang: 5 }] },
  ],
}));
