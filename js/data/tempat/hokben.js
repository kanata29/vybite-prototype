/* =========================================================
   HOKBEN — HokBen Majapahit Semarang
   Foto di folder: assets/img/hokben/   (nama file cukup ditulis tanpa folder)
   Foto dari folder lain ditulis lengkap, contoh: 'minuman/es-teh.jpg'
   ========================================================= */
TEMPAT.push(buatTempat({
  id: 'hokben',                 // juga nama folder foto
  nama: 'HokBen Majapahit Semarang',
  jenis: 'Restoran',                // Street Food | Cafe | Restoran | Dessert
  harga: [25000, 45000],           // [termurah, termahal]
  rating: 4.5, worth: 84, jarak: '1.4 km',
  alamat: 'Jl. Brigjen Sudiarto No.326B, Semarang',
  jam: '10.00 – 21.00',
  deskripsi: 'Bento rapi dan wangi, cocok buat lunch cepat tapi tetap niat.',
  label: ['Worth It'],

  // --- dipakai fitur Terserah? & VibeMatch (pilihan nilai: lihat data/pilihan.js) ---
  mood: ['quick', 'date', 'friends'],
  kategori: ['berat', 'ringan'],
  rasa: ['gurih', 'asin'],
  asal: ['asian'],
  skor: [88, 80, 85, 86, 82, 84],          // rasa, harga, porsi, pelayanan, suasana, overall

  // --- foto ---
  foto: ['depan.jpg', 'bento-set.jpg', 'yakiniku-bento.jpg', 'karage-bento.jpg'],
  fotoPengguna: [],   // foto dari pengunjung

  // --- menu (harga: null → tampil "Cek harga"; estimasi: true → tampil "±Rp") ---
  menu: [
    { nama: 'Yakiniku Bento', harga: 38000, foto: 'yakiniku-bento.jpg', tipe: 'makanan' },
    { nama: 'Karage Bento', harga: 32000, foto: 'karage-bento.jpg', tipe: 'makanan' },
    { nama: 'Bento Set', harga: 29000, foto: 'bento-set.jpg', tipe: 'makanan' },
    { nama: 'Ice Tea', harga: 9000, foto: 'minuman/es-teh.jpg', tipe: 'minuman' },
  ],

  // --- link: tempel di antara tanda kutip. Yang kosong → tombolnya tidak muncul ---
  link: {
    gmaps:      'https://maps.app.goo.gl/bi8oJPDc8EtAM2va8',
    katalog:    '',
    instagram:  '',
    tiktok:     '',
    gofood:     '',
    shopeefood: '',
    grabfood:   '',
    website:    '',
  },

  // --- ulasan contoh (ulasan pengguna disimpan di browser) ---
  ulasan: [
    { user: 'Salsa', bintang: 5, teks: 'Yakiniku-nya juicy, nasi-nya pulen.',
      pesan: [{ menu: 'Yakiniku Bento', bintang: 5 }] },
  ],
}));
