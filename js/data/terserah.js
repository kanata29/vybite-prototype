/* =========================================================
   VYBITE - data/terserah.js
   Pertanyaan & pilihan untuk fitur "Terserah?"
   Format pilihan: [ 'nilai', 'teks yang tampil' ]
   vibi : gambar Vibi di pertanyaan itu (nama file di assets/vibi/ tanpa .webp)

   ALUR PERTANYAAN
   1. mood
   2. jenis   → "Lagi pengen makan apa?"
   3. rasa    → ISINYA BERUBAH sesuai jawaban jenis (lihat TERSERAH.rasa)
   4. asal    → hanya muncul kalau jenis = makanan berat / ringan
   5. budget
   6. lokasi
   Nilai 'nilai' harus sama dengan isi field mood / kategori / rasa / asal
   pada data/tempat.js supaya hasilnya cocok.
   ========================================================= */

const TERSERAH = {

  mood: {
    tanya: 'Mood-mu sekarang?',
    vibi: 'expr-curious',
    opsi: [
      ['quick',   '😵 Buru-buru'],
      ['comfort', '🥺 Butuh comfort food'],
      ['friends', '🥳 Rame-rame'],
      ['date',    '😍 Romantis'],
      ['late',    '🌙 Begadang'],
    ],
  },

  jenis: {
    tanya: 'Lagi pengen makan apa?',
    vibi: 'pose-burger',
    opsi: [
      ['berat',   '🍛 Makanan berat'],
      ['ringan',  '🍟 Makanan ringan'],
      ['dessert', '🍰 Dessert'],
      ['minuman', '🥤 Minuman'],
    ],
  },

  // Pertanyaan ketiga menyesuaikan jawaban "jenis"
  rasa: {
    berat: {
      tanya: 'Lagi pengen rasa yang gimana?',
      vibi: 'expr-lazy',
      opsi: [['gurih', '🍗 Gurih'], ['asin', '🧂 Asin'], ['pedas', '🌶️ Pedas'], ['manis', '🍯 Manis']],
    },
    ringan: {
      tanya: 'Lagi pengen rasa yang gimana?',
      vibi: 'expr-lazy',
      opsi: [['gurih', '🍗 Gurih'], ['asin', '🧂 Asin'], ['pedas', '🌶️ Pedas'], ['manis', '🍯 Manis']],
    },
    dessert: {
      tanya: 'Dessert yang gimana?',
      vibi: 'expr-lazy',
      opsi: [['manis', '🍬 Manis banget'], ['segar', '🍧 Segar & dingin'], ['creamy', '🧁 Creamy']],
    },
    minuman: {
      tanya: 'Minuman yang gimana?',
      vibi: 'pose-boba',
      opsi: [['kopi', '☕ Kopi'], ['segar', '🍋 Segar'], ['manis', '🧋 Manis'], ['creamy', '🥛 Creamy']],
    },
  },

  asal: {
    tanya: 'Pengen masakan ala mana?',
    vibi: 'acc-map',
    opsi: [
      ['western',      '🍔 Western food'],
      ['asian',        '🍜 Asian food'],
      ['timur-tengah', '🥙 Timur Tengah'],
      ['lokal',        '🍚 Lokal Indonesia'],
    ],
  },

  budget: {
    tanya: 'Budget per orang?',
    vibi: 'expr-cool',
    opsi: [['15000', '≤ Rp15.000'], ['30000', '≤ Rp30.000'], ['70000', 'Bebas']],
  },

  lokasi: {
    tanya: 'Lokasi?',
    vibi: 'acc-backpack',
    opsi: [['near', '📍 Dekat sini'], ['any', '🗺️ Mana aja']],
  },
};

// Urutan pertanyaan berdasarkan jawaban yang sudah ada
function urutTerserah(jawaban) {
  const urut = ['mood', 'jenis', 'rasa'];
  if (jawaban.jenis === 'berat' || jawaban.jenis === 'ringan') urut.push('asal');
  urut.push('budget', 'lokasi');
  return urut;
}
