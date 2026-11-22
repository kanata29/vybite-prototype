/* =========================================================
   STEAK — Waroeng Steak
   Foto di folder: assets/img/steak/   (nama file cukup ditulis tanpa folder)
   Foto dari folder lain ditulis lengkap, contoh: 'minuman/es-teh.jpg'
   ========================================================= */
TEMPAT.push(buatTempat({
  id: 'steak',                 // juga nama folder foto
  nama: 'Waroeng Steak',
  jenis: 'Restoran',                // Street Food | Cafe | Restoran | Dessert
  harga: [20000, 45000],           // [termurah, termahal]
  rating: 4.2, worth: 80, jarak: '1.8 km',
  alamat: 'Jl. Pemuda, Semarang',
  jam: '10.00 – 22.00',
  deskripsi: 'Steak terjangkau dengan porsi kenyang untuk sekelompok teman.',
  label: ['Worth It'],

  // --- dipakai fitur Terserah? & VibeMatch (pilihan nilai: lihat data/pilihan.js) ---
  mood: ['friends', 'comfort', 'quick'],
  kategori: ['berat'],
  rasa: ['gurih', 'asin'],
  asal: ['western'],
  skor: [80, 88, 86, 78, 72, 80],          // rasa, harga, porsi, pelayanan, suasana, overall

  // --- foto ---
  foto: ['depan.jpg'],
  fotoPengguna: [],   // foto dari pengunjung

  // --- menu (harga: null → tampil "Cek harga"; estimasi: true → tampil "±Rp") ---
  menu: [
    { nama: 'Beef Steak', harga: 32000, emoji: '🥩', tipe: 'makanan' },
    { nama: 'Es Jeruk', harga: 8000, foto: 'minuman/es-jeruk.jpg', tipe: 'minuman' },
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
    { user: 'Dimas', bintang: 4, teks: 'Steak-nya empuk untuk harga segini.',
      pesan: [{ menu: 'Beef Steak', bintang: 4 }] },
  ],
}));
