/* =========================================================
   PEOPLE — The People’s Cafe
   Foto di folder: assets/img/people/   (nama file cukup ditulis tanpa folder)
   Foto dari folder lain ditulis lengkap, contoh: 'minuman/es-teh.jpg'
   ========================================================= */
TEMPAT.push(buatTempat({
  id: 'people',                 // juga nama folder foto
  nama: 'The People’s Cafe',
  jenis: 'Cafe',                // Street Food | Cafe | Restoran | Dessert
  harga: [20000, 55000],           // [termurah, termahal]
  rating: 4.7, worth: 86, jarak: '2.1 km',
  alamat: 'Jl. Gajah Mada, Semarang',
  jam: '09.00 – 23.00',
  deskripsi: 'Cafe adem dengan banyak colokan, spot study & chill favorit.',
  label: ['Must Try'],

  // --- dipakai fitur Terserah? & VibeMatch (pilihan nilai: lihat data/pilihan.js) ---
  mood: ['study', 'date', 'friends'],
  kategori: ['ringan', 'minuman', 'dessert'],
  rasa: ['manis', 'kopi', 'segar'],
  asal: ['western', 'lokal'],
  skor: [86, 74, 80, 88, 95, 86],          // rasa, harga, porsi, pelayanan, suasana, overall

  // --- foto ---
  foto: ['depan.jpg', 'djournal.jpg', 'interior.jpg'],
  fotoPengguna: [],   // foto dari pengunjung

  // --- menu (harga: null → tampil "Cek harga"; estimasi: true → tampil "±Rp") ---
  menu: [
    { nama: 'Es Kopi Susu Gula Aren', harga: 24000, foto: 'minuman/es-kopi-susu-aren.jpg', tipe: 'minuman' },
    { nama: 'Es Milo', harga: 20000, foto: 'minuman/es-milo.jpg', tipe: 'minuman' },
    { nama: 'Es Teh Lemon', harga: 18000, foto: 'minuman/es-teh.jpg', tipe: 'minuman' },
  ],

  // --- link: tempel di antara tanda kutip. Yang kosong → tombolnya tidak muncul ---
  link: {
    gmaps:      'https://share.google/rGHEke2CY9Byk47h3',
    katalog:    'https://thepeoplescafeid.com/menu/',
    instagram:  'https://www.instagram.com/thepeoplescafe/?hl=en',
    tiktok:     'https://www.tiktok.com/@thepeoplescafe',
    gofood:     'https://gofood.link/a/TdkN2YU',
    shopeefood: 'https://shopee.co.id/universal-link/now-food/shop/23422877?deep_and_deferred=1&shareChannel=copy_link',
    grabfood:   '',
    website:    'https://thepeoplescafeid.com/cabang/semarang/pollux-mall-paragon/',
  },

  // --- ulasan contoh (ulasan pengguna disimpan di browser) ---
  ulasan: [
    { user: 'Cipeng', bintang: 5, teks: 'Adem, colokan banyak, pasta dan kopi nya mantap.',
      pesan: [{ menu: 'Es Kopi Susu Gula Aren', bintang: 5 }] },
  ],
}));
