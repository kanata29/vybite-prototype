/* =========================================================
   KOPKEN — Kopken Anjasmoro
   Foto di folder: assets/img/kopken/   (nama file cukup ditulis tanpa folder)
   Foto dari folder lain ditulis lengkap, contoh: 'minuman/es-teh.jpg'
   ========================================================= */
TEMPAT.push(buatTempat({
  id: 'kopken',                 // juga nama folder foto
  nama: 'Kopken Anjasmoro',
  jenis: 'Cafe',                // Street Food | Cafe | Restoran | Dessert
  harga: [15000, 35000],           // [termurah, termahal]
  rating: 4.3, worth: 87, jarak: '1.1 km',
  alamat: 'Jl. Anjasmoro, Semarang',
  jam: '08.00 – 22.00',
  deskripsi: 'Kopi kekinian harga bersahabat, cocok take-away sambil jalan.',
  label: ['Worth It', 'Budget'],

  // --- dipakai fitur Terserah? & VibeMatch (pilihan nilai: lihat data/pilihan.js) ---
  mood: ['budget', 'study', 'late'],
  kategori: ['minuman', 'ringan'],
  rasa: ['kopi', 'manis'],
  asal: ['lokal'],
  skor: [82, 93, 78, 80, 80, 87],          // rasa, harga, porsi, pelayanan, suasana, overall

  // --- foto ---
  foto: ['depan.jpg'],
  fotoPengguna: [],   // foto dari pengunjung

  // --- menu (harga: null → tampil "Cek harga"; estimasi: true → tampil "±Rp") ---
  menu: [
    { nama: 'Kopi Susu Aren', harga: 18000, foto: 'minuman/es-kopi-susu-aren.jpg', tipe: 'minuman' },
    { nama: 'Es Kopi Hitam', harga: 15000, foto: 'minuman/es-kopi-hitam.jpg', tipe: 'minuman' },
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
    { user: 'Dimas', bintang: 4, teks: 'Kopi susu aren-nya pas, harga aman.',
      pesan: [{ menu: 'Kopi Susu Aren', bintang: 4 }] },
  ],
}));
