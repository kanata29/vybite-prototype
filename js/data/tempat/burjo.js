/* =========================================================
   BURJO — Burjo Evan 5
   Foto di folder: assets/img/burjo/   (nama file cukup ditulis tanpa folder)
   Foto dari folder lain ditulis lengkap, contoh: 'minuman/es-teh.jpg'
   ========================================================= */
TEMPAT.push(buatTempat({
  id: 'burjo',                 // juga nama folder foto
  nama: 'Burjo Evan 5',
  jenis: 'Street Food',                // Street Food | Cafe | Restoran | Dessert
  harga: [8000, 18000],           // [termurah, termahal]
  rating: 4.4, worth: 91, jarak: '0.5 km',
  alamat: 'Dekat kampus, Tembalang',
  jam: '08.00 – 02.00',
  deskripsi: 'Burjo legendaris buka sampai larut, kantong mahasiswa aman.',
  label: ['Hidden Gem', 'Budget'],

  // --- dipakai fitur Terserah? & VibeMatch (pilihan nilai: lihat data/pilihan.js) ---
  mood: ['budget', 'late', 'comfort'],
  kategori: ['berat', 'ringan'],
  rasa: ['gurih', 'pedas'],
  asal: ['lokal'],
  skor: [85, 98, 92, 78, 65, 91],          // rasa, harga, porsi, pelayanan, suasana, overall

  // --- foto ---
  foto: ['depan.jpg'],
  fotoPengguna: [],   // foto dari pengunjung

  // --- menu (harga: null → tampil "Cek harga"; estimasi: true → tampil "±Rp") ---
  menu: [
    { nama: 'Indomie Telur', harga: 12000, emoji: '🍜', tipe: 'makanan' },
    { nama: 'Nasi Orak-arik', harga: 10000, emoji: '🍳', tipe: 'makanan' },
    { nama: 'Es Milo', harga: 8000, foto: 'minuman/es-milo.jpg', tipe: 'minuman' },
  ],

  // --- link: tempel di antara tanda kutip. Yang kosong → tombolnya tidak muncul ---
  link: {
    gmaps:      'https://maps.app.goo.gl/Rj7eUb8STqzQzuod7',
    katalog:    '',
    instagram:  'https://www.instagram.com/burjo_evan/',
    tiktok:     '',
    gofood:     '',
    shopeefood: '',
    grabfood:   '',
    website:    '',
  },

  // --- ulasan contoh (ulasan pengguna disimpan di browser) ---
  ulasan: [
    { user: 'Dimas', bintang: 5, teks: 'Murah, kenyang, buka sampai pagi.',
      pesan: [{ menu: 'Indomie Telur', bintang: 5 }, { menu: 'Es Milo', bintang: 4 }] },
  ],
}));
