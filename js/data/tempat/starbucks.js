/* =========================================================
   STARBUCKS — Starbucks Gajah Mada
   Foto di folder: assets/img/starbucks/   (nama file cukup ditulis tanpa folder)
   Foto dari folder lain ditulis lengkap, contoh: 'minuman/es-teh.jpg'
   CATATAN: harga menu = ESTIMASI (±). Ganti dengan harga resmi lalu hapus "estimasi: true".
   ========================================================= */
TEMPAT.push(buatTempat({
  id: 'starbucks',                 // juga nama folder foto
  nama: 'Starbucks Gajah Mada',
  jenis: 'Cafe',                // Street Food | Cafe | Restoran | Dessert
  harga: [35000, 70000],           // [termurah, termahal]
  rating: 4.5, worth: 72, jarak: '2.0 km',
  alamat: 'Jl. Gajah Mada, Semarang',
  jam: '07.00 – 22.00',
  deskripsi: 'Nyaman buat kerja lama, harga memang premium.',
  label: ['Overpriced?'],

  // --- dipakai fitur Terserah? & VibeMatch (pilihan nilai: lihat data/pilihan.js) ---
  mood: ['study', 'date'],
  kategori: ['ringan', 'minuman', 'dessert'],
  rasa: ['manis', 'kopi', 'creamy'],
  asal: ['western'],
  skor: [84, 58, 75, 85, 92, 72],          // rasa, harga, porsi, pelayanan, suasana, overall

  // --- foto ---
  foto: ['depan.jpg', 'interior.jpg'],
  fotoPengguna: [],   // foto dari pengunjung

  // --- menu (harga: null → tampil "Cek harga"; estimasi: true → tampil "±Rp") ---
  menu: [
    { nama: 'Caramel Frappuccino', harga: 62000, foto: 'caramel-frappuccino.jpg', tipe: 'minuman', estimasi: true },
    { nama: 'Caramel Macchiato', harga: 58000, foto: 'caramel-macchiato.jpg', tipe: 'minuman', estimasi: true },
    { nama: 'Green Tea Cream Frappuccino', harga: 64000, foto: 'green-tea-cream-frappuccino.jpg', tipe: 'minuman', estimasi: true },
    { nama: 'Iced Caffe Latte', harga: 52000, foto: 'iced-caffe-latte.jpg', tipe: 'minuman', estimasi: true },
    { nama: 'Java Chip Frappuccino', harga: 66000, foto: 'java-chip-frappuccino.jpg', tipe: 'minuman', estimasi: true },
    { nama: 'Mango Passion Frappuccino', harga: 62000, foto: 'mango-passion-frappuccino.jpg', tipe: 'minuman', estimasi: true },
    { nama: 'Mocha Frappuccino', harga: 60000, foto: 'mocha-frappuccino.jpg', tipe: 'minuman', estimasi: true },
    { nama: 'Strawberry Acai Refresher', harga: 56000, foto: 'strawberry-acai-refresher.jpg', tipe: 'minuman', estimasi: true },
  ],

  // --- link: tempel di antara tanda kutip. Yang kosong → tombolnya tidak muncul ---
  link: {
    gmaps:      'https://maps.app.goo.gl/fybJgNbxx8hyYV8w7',
    katalog:    'https://starbucks.menu-kopi.id/',
    instagram:  'https://www.instagram.com/starbucksindonesia/?hl=en',
    tiktok:     '',
    gofood:     'https://gofood.co.id/semarang/restaurant/starbucks-coffee-kopi-gadjahmada-semarang-33877395-19ec-449b-ae59-db82be97a120',
    shopeefood: 'https://shopee.co.id/universal-link/now-food/shop/41076?deep_and_deferred=1&shareChannel=copy_link',
    grabfood:   '',
    website:    '',
  },

  // --- ulasan contoh (ulasan pengguna disimpan di browser) ---
  ulasan: [
    { user: 'Salsa', bintang: 4, teks: 'Enak buat WFH, tapi harganya bikin mikir.',
      pesan: [{ menu: 'Iced Caffe Latte', bintang: 4 }] },
  ],
}));
