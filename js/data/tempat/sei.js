/* =========================================================
   SEI — Sei Ayam Majapahit
   Foto di folder: assets/img/sei/   (nama file cukup ditulis tanpa folder)
   Foto dari folder lain ditulis lengkap, contoh: 'minuman/es-teh.jpg'
   ========================================================= */
TEMPAT.push(buatTempat({
  id: 'sei',                 // juga nama folder foto
  nama: 'Sei Ayam Majapahit',
  jenis: 'Restoran',                // Street Food | Cafe | Restoran | Dessert
  harga: [30000, 60000],           // [termurah, termahal]
  rating: 4.5, worth: 82, jarak: '3.2 km',
  alamat: 'Jl. Majapahit, Semarang',
  jam: '10.00 – 22.00',
  deskripsi: 'Daging asap juicy dengan sambal luat, pas buat makan rame-rame.',
  label: ['Must Try'],

  // --- dipakai fitur Terserah? & VibeMatch (pilihan nilai: lihat data/pilihan.js) ---
  mood: ['friends', 'comfort', 'date'],
  kategori: ['berat'],
  rasa: ['pedas', 'gurih', 'asin'],
  asal: ['lokal'],
  skor: [90, 76, 88, 82, 78, 82],          // rasa, harga, porsi, pelayanan, suasana, overall

  // --- foto ---
  foto: ['depan.jpg', 'sei-ayam-nasi.jpg'],
  fotoPengguna: [],   // foto dari pengunjung

  // --- menu (harga: null → tampil "Cek harga"; estimasi: true → tampil "±Rp") ---
  menu: [
    { nama: 'Sei Ayam Nasi', harga: 38000, foto: 'sei-ayam-nasi.jpg', tipe: 'makanan' },
    { nama: 'Paket Sharing', harga: 89000, emoji: '🍱', tipe: 'makanan' },
  ],

  // --- link: tempel di antara tanda kutip. Yang kosong → tombolnya tidak muncul ---
  link: {
    gmaps:      '',
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
    { user: 'Rani', bintang: 5, teks: 'Sambal luatnya pedas nagih!',
      pesan: [{ menu: 'Sei Ayam Nasi', bintang: 5 }] },
  ],
}));
