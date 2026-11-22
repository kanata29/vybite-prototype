/* =========================================================
   VYBITE - data/tempat/_awal.js
   Menyiapkan daftar TEMPAT dan fungsi buatTempat().
   File ini harus dimuat SEBELUM file tempat lain (lihat index.html).

   buatTempat() mengisi nilai bawaan, jadi di file tiap tempat kamu
   cukup menulis field yang dibutuhkan, dan membersihkan spasi
   berlebih di link (kesalahan yang sering terjadi saat copy-paste).
   ========================================================= */

const FOTO = 'assets/img/';          // folder dasar semua foto
const TEMPAT = [];                   // diisi oleh file tempat di folder ini

const DASAR_TEMPAT = {
  contoh: false,                     // true = data contoh (tampil badge "Contoh data")
  emoji: '🍽️',                       // dipakai kalau foto belum ada
  foto: [], fotoPengguna: [],
  label: [], mood: [], kategori: [], rasa: [], asal: [],
  menu: [], ulasan: [],
};

function buatTempat(data) {
  const t = { ...DASAR_TEMPAT, ...data };
  // semua kolom link selalu ada; spasi di awal/akhir dibuang
  t.link = {};
  KUNCI_LINK.forEach(k => { t.link[k] = String((data.link || {})[k] || '').trim(); });
  // tiap menu: nilai bawaan tipe 'makanan', harga belum diisi (null)
  t.menu = t.menu.map(m => ({ tipe: 'makanan', harga: null, estimasi: false, ...m }));
  return t;
}
