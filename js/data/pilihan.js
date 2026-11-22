/* =========================================================
   VYBITE - data/pilihan.js
   Daftar NILAI YANG BOLEH dipakai di data tempat.
   Kalau menulis nilai di luar daftar ini, aplikasi akan memberi
   peringatan di Console browser (F12) dan toast saat dibuka.
   ========================================================= */

// jenis tempat → dipakai filter di Explore
const JENIS_TEMPAT = ['Street Food', 'Cafe', 'Restoran', 'Dessert'];
const IKON_JENIS   = { 'Street Food': '🍢', 'Cafe': '☕', 'Restoran': '🍛', 'Dessert': '🍧' };

// dipakai fitur Terserah? dan VibeMatch
const KATEGORI_MAKAN = ['berat', 'ringan', 'dessert', 'minuman'];
const RASA           = ['gurih', 'asin', 'pedas', 'manis', 'kopi', 'segar', 'creamy'];
const ASAL           = ['western', 'asian', 'timur-tengah', 'lokal'];
const MOOD           = ['quick', 'budget', 'comfort', 'friends', 'date', 'study', 'late'];

// tipe menu → tab Makanan / Minuman / Dessert di halaman tempat
const TIPE_MENU = ['makanan', 'minuman', 'dessert'];

// kolom link di tiap tempat (tombol hanya muncul kalau linknya diisi)
const KUNCI_LINK = ['gmaps', 'katalog', 'instagram', 'tiktok', 'gofood', 'shopeefood', 'grabfood', 'website'];
