/* =========================================================
   VYBITE - logika.js
   Perhitungan (tanpa tampilan):
   1. Ulasan pengguna  2. Worth It Score & rating
   3. Pencocokan rekomendasi  4. Link (rute, sosmed)  5. Deals
   ========================================================= */

/* ---------- 1. ULASAN PENGGUNA (tersimpan di browser) ---------- */
const KUNCI_ULASAN = 'vybite-ulasan';

function ulasanUser(id) {
  return (bacaLokal(KUNCI_ULASAN, {})[id]) || [];
}
function simpanUlasan(id, ulasan) {
  const semua = bacaLokal(KUNCI_ULASAN, {});
  semua[id] = [ulasan, ...(semua[id] || [])];
  tulisLokal(KUNCI_ULASAN, semua);
}
// Ulasan pengguna (terbaru dulu) + ulasan contoh dari data/tempat.js
function semuaUlasan(p) {
  return [...ulasanUser(p.id), ...p.ulasan];
}

/* ---------- 2. WORTH IT SCORE, RATING, RATING MENU ---------- */
// Nilai awal di data dianggap setara 10 ulasan, lalu ulasan pengguna ikut dihitung.
const BOBOT_AWAL = 10;

function hitungSkor(p) {
  const baru = ulasanUser(p.id), n = baru.length;
  const rata = (dasar, nilaiBaru) => Math.round((dasar * BOBOT_AWAL + nilaiBaru) / (BOBOT_AWAL + n));

  const rating = n ? Math.round(((p.rating * BOBOT_AWAL + baru.reduce((s, u) => s + u.bintang, 0)) / (BOBOT_AWAL + n)) * 10) / 10 : p.rating;
  const worth = rata(p.worth, baru.reduce((s, u) => s + u.bintang * 20, 0));
  const skor = p.skor.map((v, i) => i < 5 ? rata(v, baru.reduce((s, u) => s + (u.aspek ? u.aspek[i] * 20 : v), 0)) : worth);

  // distribusi bintang (persen) dari 120 ulasan awal + ulasan baru
  const dasar = { 5: 60, 4: 28, 3: 8, 2: 3, 1: 1 }, total = 100 + n, dist = {};
  for (let b = 5; b >= 1; b--) dist[b] = Math.round((dasar[b] + baru.filter(u => u.bintang === b).length) / total * 100);

  return { rating, worth, skor, dist, jumlah: 120 + p.worth + n };
}

// Rating rata-rata satu menu dari semua ulasan yang memesan menu itu
function ratingMenu(p, namaMenu) {
  const nilai = [];
  semuaUlasan(p).forEach(u => (u.pesan || []).forEach(x => { if (x.menu === namaMenu) nilai.push(x.bintang); }));
  if (!nilai.length) return null;
  return { rata: Math.round(nilai.reduce((a, b) => a + b, 0) / nilai.length * 10) / 10, n: nilai.length };
}

/* ---------- 3. PENCOCOKAN REKOMENDASI (VibeMatch & Terserah) ---------- */
// kriteria: { mood, jenis, rasa, asal, budget (angka), dekat (true/false) }
// Mengembalikan 3 tempat terbaik beserta alasan cocoknya.
function cocokkan(k) {
  return TEMPAT.map(p => {
    let skor = 0; const alasan = [];
    if (k.mood && p.mood.includes(k.mood)) { skor += 2; alasan.push('Pas buat mood-mu'); }
    if (k.jenis) {
      if (p.kategori.includes(k.jenis)) { skor += 3; alasan.push('Sesuai jenis yang kamu mau'); } else skor -= 3;
    }
    if (k.rasa && p.rasa.includes(k.rasa)) { skor += 2; alasan.push('Rasanya ' + k.rasa); }
    if (k.asal) {
      if (p.asal.includes(k.asal)) { skor += 2.5; alasan.push('Gaya masakan cocok'); } else skor -= 1;
    }
    if (k.budget && p.harga[0] <= k.budget) { skor += 1.5; alasan.push('Masuk budget'); }
    if (k.dekat && parseFloat(p.jarak) <= 2) { skor += 1; alasan.push('Dekat dari sini'); }
    skor += p.rating / 5 + p.worth / 200;
    return { p, skor, alasan };
  }).sort((a, b) => b.skor - a.skor).slice(0, 3);
}

/* ---------- 4. LINK: RUTE & SOSMED ---------- */
// Tombol Rute: pakai link Google Maps dari data; kalau kosong, cari lewat nama + alamat
function urlRute(p) {
  return p.link.gmaps || 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(p.nama + ' ' + p.alamat);
}
// Tombol sosmed / aplikasi pesan antar. Hanya yang link-nya diisi yang tampil.
const INFO_LINK = {
  instagram:  ['📸', 'Instagram'],
  tiktok:     ['🎵', 'TikTok'],
  gofood:     ['🟢', 'GoFood'],
  shopeefood: ['🟠', 'ShopeeFood'],
  grabfood:   ['🟩', 'GrabFood'],
  website:    ['🌐', 'Website'],
};

/* ---------- 5. DEALS: apakah akun ini boleh klaim? ---------- */
function layak(d) {
  if (d.untuk === 'all') return true;
  if (S.kat !== d.untuk) return false;
  return d.untuk === 'mhs' ? S.verif : true;   // promo mahasiswa butuh verifikasi
}
