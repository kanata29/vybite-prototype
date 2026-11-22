/* =========================================================
   VYBITE - state.js
   Semua data yang berubah saat aplikasi dipakai disimpan di objek S.
   Yang disimpan permanen di browser (localStorage): tema, tempat
   tersimpan, dan ulasan pengguna.
   ========================================================= */

/* ---------- 1. PENYIMPANAN BROWSER (aman kalau diblokir) ---------- */
function bacaLokal(kunci, awal) {
  try { const v = localStorage.getItem(kunci); return v ? JSON.parse(v) : awal; } catch (e) { return awal; }
}
function tulisLokal(kunci, nilai) {
  try { localStorage.setItem(kunci, JSON.stringify(nilai)); } catch (e) {}
}

/* ---------- 2. STATE UTAMA ---------- */
const S = {
  // onboarding
  langkah: 0,            // 0 = halaman awal (onboarding), 3 = sudah masuk aplikasi
  kat: null,             // kategori akun: plj | mhs | pkj | um
  nama: '',
  detail: '',            // isian tambahan (sekolah/kampus/pekerjaan)
  lokasi: LOKASI[0],

  // navigasi
  tab: 'home',           // tab bawah yang aktif
  view: 'home',          // halaman yang sedang tampil
  arg: null,             // parameter halaman (mis. id tempat)

  // data pengguna
  saved: new Set(bacaLokal('vybite-simpan', ['katsu'])),
  verif: false,
  klaim: new Set(),

  // explore
  q: '',
  f: { jenis: 'Semua', hargaMaks: 0, urut: 'pop', peta: false },

  // halaman tempat
  menuTab: 'semua',
  formUlasan: false,
  draft: null,           // isian form ulasan (lihat halaman/tempat.js)

  // feedback prototipe
  fb: null,              // isian form feedback (lihat halaman/feedback.js)
  fbSelesai: false,

  // fitur lain
  tz: [],                // jawaban Terserah: [['mood','quick'], ...]
  vm: { mood: null, budget: null },
  dealTab: 'all',
  agenda: AGENDA_AWAL.map(a => a.slice()),
  patungan: {
    orang: ['Kamu', 'Rani', 'Dimas'],
    item: [['Nasi Katsu', 22000, [0, 1]], ['Es Jeruk', 8000, [1]], ['Kopi Susu', 24000, [0, 2]]],
  },
};

/* ---------- 3. TEMA: default Terang, user bisa ganti ---------- */
const KUNCI_TEMA = 'vybite-tema';
function getTema() {
  let t = 'light';
  try { t = localStorage.getItem(KUNCI_TEMA) || 'light'; } catch (e) {}
  return t;                                    // light | dark | auto
}
function terapkanTema() {
  const t = getTema();
  const gelap = t === 'dark' || (t === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.theme = gelap ? 'dark' : 'light';
}
function setTema(t) {
  try { localStorage.setItem(KUNCI_TEMA, t); } catch (e) {}
  terapkanTema();
  R();
}
