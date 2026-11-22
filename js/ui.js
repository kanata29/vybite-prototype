/* =========================================================
   VYBITE - ui.js
   Komponen tampilan yang dipakai banyak halaman:
   helper kecil, kartu tempat, navigasi bawah/samping, maskot.
   ========================================================= */

/* ---------- 1. HELPER KECIL ---------- */
const $ = s => document.querySelector(s);
const Rp = n => 'Rp' + n.toLocaleString('id-ID');
const HALAMAN_UTAMA = ['home', 'explore', 'community', 'plan', 'profile'];
const cariTempat = id => TEMPAT.find(t => t.id === id);
const namaLokasi = () => S.lokasi.replace(/^\S+\s/, '');   // buang emoji di depan

function toast(pesan) {
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = pesan;
  document.body.append(t);
  setTimeout(() => t.remove(), 1800);
}

// Pindah halaman. Contoh: go('place', 'katsu')
function go(halaman, arg) {
  S.view = halaman; S.arg = arg;
  if (HALAMAN_UTAMA.includes(halaman)) S.tab = halaman;
  R(); scrollTo(0, 0);
  const pg = $('.pg'); if (pg) pg.classList.add('baru');   // animasi masuk hanya saat pindah halaman
}

// Simpan / hapus dari Saved Places
function simpan(id) {
  S.saved.has(id) ? S.saved.delete(id) : S.saved.add(id);
  tulisLokal('vybite-simpan', [...S.saved]);
  toast(S.saved.has(id) ? 'Disimpan ke Saved Places ❤️' : 'Dihapus dari Saved');
  R();
}

/* ---------- 2. FOTO (cadangan emoji kalau foto belum ada / gagal dimuat) ---------- */
// Nama file TANPA "/" → ada di folder tempat itu: assets/img/<id>/nama.jpg
// Nama file DENGAN "/" → dihitung dari assets/img/, contoh 'minuman/es-teh.jpg'
const urlFoto = (p, nama) => FOTO + (nama.includes('/') ? nama : p.id + '/' + nama);

// Kalau file foto tidak ditemukan, ganti dengan kotak emoji supaya layout tidak rusak
function fotoRusak(img) {
  const kotak = document.createElement('div');
  kotak.className = 'ph-emoji ' + (img.dataset.kelas || '');
  kotak.textContent = img.dataset.emoji || '🍽️';
  img.replaceWith(kotak);
}
function fotoTempat(p, i = 0, kelas = '') {
  const f = p.foto[i];
  return f ? `<img class="${kelas}" src="${urlFoto(p, f)}" alt="${p.nama}" loading="lazy" data-kelas="${kelas}" data-emoji="${p.emoji}" onerror="fotoRusak(this)">`
           : `<div class="ph-emoji ${kelas}">${p.emoji}</div>`;
}
function fotoMenu(p, m) {
  return m.foto ? `<img src="${urlFoto(p, m.foto)}" alt="${m.nama}" loading="lazy" data-emoji="${m.emoji || '🍴'}" onerror="fotoRusak(this)">`
                : `<div class="ph-emoji">${m.emoji || '🍴'}</div>`;
}
// Teks harga menu: kosong → "Cek harga", perkiraan → "±Rp..."
const teksHarga = m => m.harga == null ? 'Cek harga' : (m.estimasi ? '±' : '') + Rp(m.harga);

// Perbesar foto (klik di mana saja untuk menutup)
function bukaFoto(src) {
  const kotak = document.createElement('div');
  kotak.className = 'lightbox'; kotak.onclick = () => kotak.remove();
  kotak.innerHTML = `<img src="${src}" alt="Foto pengunjung">`;
  document.body.append(kotak);
}

/* ---------- 3. MASKOT VIBI (the sassy duck) & DEKORASI ---------- */
// Pakai di halaman mana pun:  ${vibi('expr-happy', 120)}
// nama = nama file di assets/vibi/ tanpa .webp  (daftar nama ada di README)
const VIBI = 'assets/vibi/';
const vibi = (nama, ukuran = 100, kelas = '') =>
  `<img class="vibi ${kelas}" src="${VIBI}${nama}.webp" style="width:${ukuran}px" alt="Vibi" onerror="this.style.display='none'">`;
// Gelembung ucapan Vibi
const bubbleVibi = teks => `<div class="bubble">${teks}</div>`;
// Judul halaman + Vibi di kanannya
const judulVibi = (judul, gambar, kata) => `
  <div class="judul-vibi">
    <div><h1>${judul}</h1>${kata ? `<p class="mut" style="margin-top:4px">${kata}</p>` : ''}</div>
    ${vibi(gambar, 88)}
  </div>`;
const BLOBS = `
  <div class="blob" style="width:240px;height:240px;background:#ffd84d;top:-70px;right:-60px"></div>
  <div class="blob" style="width:200px;height:200px;background:#ffe27a;top:380px;left:-90px"></div>`;

/* ---------- 4. KARTU TEMPAT (foto besar + info di atasnya) ---------- */
function kartuTempat(p) {
  const sk = hitungSkor(p);
  return `
  <div class="kartu" onclick="go('place','${p.id}')">
    ${fotoTempat(p)}
    <button class="simpan" onclick="event.stopPropagation();simpan('${p.id}')">${S.saved.has(p.id) ? '❤️' : '🤍'}</button>
    <span class="skor glass">⭐ ${sk.worth}</span>
    <div class="info">
      <b>${p.nama}</b>
      <small>${p.jenis} · ${p.jarak}</small>
      <div>${p.label.map(l => `<span class="tag">${l}</span>`).join('')}</div>
      <small>${Rp(p.harga[0])} – ${Rp(p.harga[1])}</small>
    </div>
  </div>`;
}
// Deretan kartu (geser samping di HP, satu baris grid di laptop)
// semua=true → di laptop tampilkan SEMUA kartu (bukan hanya satu baris)
const deretKartu = (daftar, semua = false) => `<div class="hs ${semua ? 'semua' : ''}">${daftar.map(kartuTempat).join('')}</div>`;

/* ---------- 5. KOMPONEN KECIL ---------- */
// Judul halaman + tombol kembali
const headerHalaman = (judul, kembali = 'home') => `
  <div class="top">
    <button class="back glass" onclick="go('${kembali}')">←</button>
    <h1 style="font-size:20px">${judul}</h1>
  </div>`;

// Baris chip. daftar = [[nilai, teks], ...], aktif = nilai yang dipilih, fn = nama fungsi onclick
const barisChip = (daftar, aktif, fn) => `
  <div class="chips">${daftar.map(c => `<button class="chip ${c[0] == aktif ? 'on' : ''}" onclick="${fn}('${c[0]}')">${c[1]}</button>`).join('')}</div>`;

/* ---------- 6. NAVIGASI (bawah di HP, samping di laptop) ---------- */
function navigasi() {
  const menu = [['home', '🏠', 'Home'], ['explore', '🔎', 'Explore'], ['community', '👥', 'Community'], ['plan', '📅', 'Plan'], ['profile', '🙂', 'Profile']];
  return `<div class="nav glass">${vibi('ui-duckhead', 46, 'nav-vibi')}${menu.map(m =>
    `<button class="${S.tab === m[0] ? 'on' : ''}" onclick="go('${m[0]}')"><b>${m[1]}</b>${m[2]}</button>`).join('')}</div>`;
}
