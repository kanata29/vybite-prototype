/* =========================================================
   MIEAYAM — Mie Ayam Bandung Pak No
   Foto di folder: assets/img/mieayam/   (nama file cukup ditulis tanpa folder)
   Foto dari folder lain ditulis lengkap, contoh: 'minuman/es-teh.jpg'
   ========================================================= */
TEMPAT.push(buatTempat({
  id: 'mieayam',                 // juga nama folder foto
  nama: 'Mie Ayam Bandung Pak No',
  jenis: 'Street Food',                // Street Food | Cafe | Restoran | Dessert
  harga: [11000, 14000],           // [termurah, termahal]
  rating: 4.5, worth: 85, jarak: '1.1 km',
  alamat: 'Jl. Sadewa 4 No.12, Pendrikan Kidul, Kec. Semarang Tengah, Kota Semarang',
  jam: '11.00 – 17.00',
  deskripsi: 'Pilihan mie ayam bandung buat jajan cepat, ada varian polos, pangsit, bakso dan komplit.',
  label: ['Hidden Gem'],

  // --- dipakai fitur Terserah? & VibeMatch (pilihan nilai: lihat data/pilihan.js) ---
  mood: ['quick', 'friends', 'late'],
  kategori: ['berat', 'ringan'],
  rasa: ['gurih', 'asin', 'pedas'],
  asal: ['lokal'],
  skor: [85, 85, 84, 80, 75, 83],          // rasa, harga, porsi, pelayanan, suasana, overall

  // --- foto ---
  foto: ['depan.jpg', 'komplit.jpg', 'polos.jpg'],
  fotoPengguna: [],   // foto dari pengunjung

  // --- menu (harga: null → tampil "Cek harga"; estimasi: true → tampil "±Rp") ---
  menu: [
    { nama: 'Mie Ayam Polos', harga: 11000, foto: 'polos.jpg', tipe: 'makanan' },
    { nama: 'Mie Ayam Komplit', harga: 12000, foto: 'komplit.jpg', tipe: 'makanan' },
    { nama: 'Mie Ayam Pangsit', harga: 13000, foto: 'pangsit.jpg', tipe: 'makanan' },
    { nama: 'Mie Ayam Bakso', harga: 14000, foto: 'bakso.jpg', tipe: 'makanan' },
    { nama: 'Pangsit Kuah (isi 10)', harga: null, foto: 'pangsit-kuah.jpg', tipe: 'makanan' },
  ],

  // --- link: tempel di antara tanda kutip. Yang kosong → tombolnya tidak muncul ---
  link: {
    gmaps:      'https://maps.app.goo.gl/u4pxPhMJiw4PDsX98',
    katalog:    '',
    instagram:  '',
    tiktok:     '',
    gofood:     'https://gofood.co.id/semarang/restaurant/mie-bandung-pak-no-prembaen-0f961df4-9f25-435c-9bf8-7b1aa7c3f0a0',
    shopeefood: '',
    grabfood:   '',
    website:    '',
  },

  // --- ulasan contoh (ulasan pengguna disimpan di browser) ---
  ulasan: [],
}));
