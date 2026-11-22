/* =========================================================
   VYBITE - halaman/tempat.js   (detail satu tempat makan)
   Bagian halaman, dari atas ke bawah:
   1. Galeri foto            5. Menu & harga (+ rating tiap menu) + foto pengunjung
   2. Nama, label, info      6. Ulasan (pesan apa & rate berapa)
   3. Tombol aksi + Rute     7. Tempat serupa
   4. Worth It Score
   Data tempat diambil dari js/data/tempat/*.js
   ========================================================= */

const NAMA_ASPEK = ['Rasa', 'Harga', 'Porsi', 'Pelayanan', 'Suasana'];
const NAMA_TIPE  = { makanan: '🍽️ Makanan', minuman: '🥤 Minuman', dessert: '🍰 Dessert' };

/* ---------- Halaman utama ---------- */
function place() {
  const p = cariTempat(S.arg), sk = hitungSkor(p);
  const tipe = [...new Set(p.menu.map(m => m.tipe))];

  return `
  <div class="detail">

    <!-- 1. GALERI FOTO (geser ke samping, atau klik thumbnail) -->
    <div class="galeri">
      <div class="gal-scroll" onscroll="tandaiGaleri(this)">
        ${p.foto.length ? p.foto.map((_, i) => fotoTempat(p, i, 'gi')).join('') : fotoTempat(p, 0, 'gi')}
      </div>
      <button class="back glass" onclick="go('${S.tab}')">←</button>
      <span class="skor glass" id="gal-info">📷 1 / ${Math.max(p.foto.length, 1)}</span>
      ${p.foto.length > 1 ? `<div class="gal-thumb">${p.foto.map((_, i) => `<button class="${i === 0 ? 'on' : ''}" onclick="geserGaleri(${i})">${fotoTempat(p, i)}</button>`).join('')}</div>` : ''}
    </div>

    <div class="sheet">
      <!-- 2. NAMA, LABEL, INFO -->
      <div class="row sp">
        <h1 style="font-size:22px">${p.nama}</h1>
        <div class="worth-badge"><b>${sk.worth}</b><small>WORTH IT</small></div>
      </div>
      <div>
        ${p.label.map(l => `<span class="tag y">${l}</span>`).join('')}
        ${sk.worth >= 85 ? '<span class="tag p">Worth It ✓</span>' : ''}
        ${p.contoh ? '<span class="tag">Contoh data</span>' : ''}
      </div>
      <div class="mut" style="margin:8px 0">
        ⭐ ${sk.rating} (${sk.jumlah} review) · ${Rp(p.harga[0])} – ${Rp(p.harga[1])}<br>
        📍 ${p.alamat} · ${p.jarak}<br>
        🕒 ${p.jam}
      </div>
      <p>${p.deskripsi}</p>

      <!-- 3. TOMBOL AKSI. Rute memakai link gmaps dari data (lihat urlRute di logika.js) -->
      <div class="aksi">
        <button class="btn ${S.saved.has(p.id) ? 'p' : ''}" onclick="simpan('${p.id}')">${S.saved.has(p.id) ? '❤️ Tersimpan' : '🤍 Save'}</button>
        <button class="btn s" onclick="bukaForm('${p.id}')">✍️ Review</button>
        <button class="btn s" onclick="toast('Link disalin 🔗')">🔗 Share</button>
        <a class="btn b" href="${urlRute(p)}" target="_blank" rel="noopener">🧭 Rute</a>
      </div>
      ${linkSosmed(p)}

      <!-- 4. WORTH IT SCORE -->
      <h2>Worth It Score</h2>
      <div class="card" style="padding:14px">
        ${['Rasa', 'Harga', 'Porsi', 'Pelayanan', 'Suasana', 'Overall'].map((l, i) => `
          <div class="row" style="margin:6px 0">
            <span style="width:82px;font-size:13px">${l}</span>
            <div class="bar"><i style="width:${sk.skor[i]}%"></i></div>
            <b style="width:28px;text-align:right">${sk.skor[i]}</b>
          </div>`).join('')}
        <div class="mut" style="margin-top:10px">Distribusi rating</div>
        ${[5, 4, 3, 2, 1].map(b => `
          <div class="row" style="margin:3px 0"><span style="width:26px;font-size:12px">${b}★</span>
            <div class="bar"><i style="width:${sk.dist[b]}%"></i></div><span class="mut" style="width:34px;text-align:right">${sk.dist[b]}%</span></div>`).join('')}
      </div>

      <!-- 5. MENU & HARGA -->
      <h2>Menu & Harga</h2>
      ${tipe.length > 1 ? barisChip([['semua', 'Semua'], ...tipe.map(t => [t, NAMA_TIPE[t]])], S.menuTab, 'setMenuTab') : ''}
      <div class="daftar-menu">
        ${p.menu.map((m, i) => ({ m, i })).filter(x => S.menuTab === 'semua' || x.m.tipe === S.menuTab).map(x => kartuMenu(p, x.m, x.i)).join('')}
      </div>
      <div class="mut" style="margin-top:8px">
        ${p.link.katalog ? 'Ini menu pilihan. Menu lainnya ada di katalog resto.' : `Menampilkan ${p.menu.length} menu pilihan.`}
        ${p.menu.some(m => m.estimasi) ? ' Harga bertanda ± masih perkiraan.' : ''}
      </div>
      ${p.link.katalog ? `<a class="btn b w" style="margin-top:10px;text-align:center;display:block" href="${p.link.katalog}" target="_blank" rel="noopener">📖 Lihat menu lengkap</a>` : ''}

      <!-- FOTO DARI PENGUNJUNG (isi: fotoPengguna di data tempat) -->
      ${p.fotoPengguna.length ? `
        <h2>Foto dari pengunjung</h2>
        <div class="foto-grid">${p.fotoPengguna.map(f => `<img src="${urlFoto(p, f)}" alt="Foto pengunjung" loading="lazy" onclick="bukaFoto(this.src)" onerror="this.remove()">`).join('')}</div>` : ''}

      <!-- 6. ULASAN -->
      <h2>Ulasan <button class="chip" onclick="bukaForm('${p.id}')">✍️ Tulis ulasan</button></h2>
      ${S.formUlasan ? formUlasan(p) : ''}
      ${semuaUlasan(p).map(kartuUlasan).join('') || '<div class="mut">Belum ada ulasan. Jadi yang pertama!</div>'}

      <!-- 7. TEMPAT SERUPA -->
      <h2>Tempat serupa</h2>
      ${deretKartu(TEMPAT.filter(x => x.id !== p.id && x.jenis === p.jenis).slice(0, 4), true)}
    </div>
  </div>`;
}

/* ---------- Galeri: tandai thumbnail aktif saat digeser / klik thumbnail ---------- */
function tandaiGaleri(el) {
  const i = Math.round(el.scrollLeft / el.clientWidth);
  document.querySelectorAll('.gal-thumb button').forEach((b, j) => b.classList.toggle('on', j === i));
  const info = $('#gal-info');
  if (info) info.textContent = `📷 ${i + 1} / ${el.children.length}`;
}
function geserGaleri(i) {
  const g = $('.gal-scroll');
  g.scrollTo({ left: i * g.clientWidth, behavior: 'smooth' });
}

/* ---------- Tombol sosmed & pesan antar (hanya yang link-nya terisi) ---------- */
function linkSosmed(p) {
  const tombol = Object.keys(INFO_LINK).filter(k => p.link[k]).map(k =>
    `<a class="chip" href="${p.link[k]}" target="_blank" rel="noopener">${INFO_LINK[k][0]} ${INFO_LINK[k][1]}</a>`).join('');
  return tombol ? `<div class="chips wr">${tombol}</div>` : '';
}

/* ---------- Satu kartu menu (foto, nama, rating, harga) ---------- */
function kartuMenu(p, m, i) {
  const r = ratingMenu(p, m.nama);
  return `
  <div class="kartu-menu">
    <div class="foto-menu">${fotoMenu(p, m)}</div>
    <div class="isi">
      <b>${m.nama}</b>
      <div class="mut">${r ? `⭐ ${r.rata} (${r.n} rating)` : 'Belum ada rating'}</div>
      <div class="row sp">
        <b class="harga-menu">${teksHarga(m)}</b>
        <button class="chip kecil" onclick="rateMenu('${p.id}',${i})">Rate</button>
      </div>
    </div>
  </div>`;
}
const setMenuTab = t => { S.menuTab = t; R(); };

/* ---------- Satu kartu ulasan ---------- */
function kartuUlasan(u) {
  return `
  <div class="card" style="padding:12px;margin-bottom:8px">
    <div class="row">
      <div class="av" style="width:32px;height:32px">${u.user[0]}</div>
      <b>${u.user}</b> ${u.user === 'Kamu' ? '<span class="tag y">Ulasanmu</span>' : ''}
      <span>${'⭐'.repeat(u.bintang)}</span>
    </div>
    ${u.teks ? `<div style="margin-top:6px">${u.teks}</div>` : ''}
    ${(u.pesan || []).length ? `<div style="margin-top:6px">${u.pesan.map(x => `<span class="tag">🍽️ ${x.menu} · ${'⭐'.repeat(x.bintang)}</span>`).join('')}</div>` : ''}
  </div>`;
}

/* =========================================================
   FORM ULASAN: pilih menu yang dipesan + rate tiap menu,
   rate aspek (rasa, harga, dst), rate keseluruhan, tulis komentar.
   Hasilnya disimpan di browser (localStorage) lewat simpanUlasan().
   ========================================================= */

function draftBaru() { return { menu: {}, aspek: [0, 0, 0, 0, 0], bintang: 0, teks: '' }; }

function bukaForm(id) {
  if (S.view !== 'place') return;
  S.formUlasan = true;
  if (!S.draft) S.draft = draftBaru();
  R();
}
// Tombol "Rate" di baris menu: buka form dengan menu itu sudah terpilih
function rateMenu(id, i) {
  S.formUlasan = true;
  if (!S.draft) S.draft = draftBaru();
  if (!(i in S.draft.menu)) S.draft.menu[i] = 0;
  R();
  setTimeout(() => { const f = $('#form-ulasan'); if (f) f.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 50);
}
function tutupForm() { S.formUlasan = false; S.draft = null; R(); }

// 5 bintang yang bisa diklik. aksi = nama fungsi, arg = argumen tambahan sebelum nilai
function inputBintang(aksi, arg, nilai) {
  return `<span class="stars">${[1, 2, 3, 4, 5].map(n =>
    `<button class="${n <= nilai ? 'on' : ''}" onclick="${aksi}(${arg}${n})">⭐</button>`).join('')}</span>`;
}
function togglePesan(i) { const m = S.draft.menu; (i in m) ? delete m[i] : m[i] = 0; R(); }
const nilaiMenu  = (i, n) => { S.draft.menu[i] = n; R(); };
const nilaiAspek = (j, n) => { S.draft.aspek[j] = n; R(); };
const nilaiAll   = n => { S.draft.bintang = n; R(); };

function formUlasan(p) {
  const d = S.draft;
  return `
  <div class="card form-ulasan" id="form-ulasan">
    <b>1. Kamu pesan apa? (boleh lebih dari satu)</b>
    <div class="chips wr" style="margin:8px 0">
      ${p.menu.map((m, i) => `<button class="chip ${i in d.menu ? 'on' : ''}" onclick="togglePesan(${i})">${m.nama}</button>`).join('')}
    </div>
    ${Object.keys(d.menu).map(i => `
      <div class="row sp" style="margin:4px 0"><span>${p.menu[i].nama}</span>${inputBintang('nilaiMenu', i + ',', d.menu[i])}</div>`).join('')}

    <b style="display:block;margin-top:14px">2. Nilai tempatnya</b>
    ${NAMA_ASPEK.map((a, j) => `
      <div class="row sp" style="margin:4px 0"><span>${a}</span>${inputBintang('nilaiAspek', j + ',', d.aspek[j])}</div>`).join('')}

    <b style="display:block;margin-top:14px">3. Rating keseluruhan</b>
    <div style="margin:4px 0">${inputBintang('nilaiAll', '', d.bintang)}</div>

    <textarea class="in area" placeholder="Ceritain pengalamanmu… (opsional)" oninput="S.draft.teks=this.value">${d.teks}</textarea>
    <div class="row" style="margin-top:10px">
      <button class="btn" onclick="kirimUlasan('${p.id}')">Kirim ulasan</button>
      <button class="btn s" onclick="tutupForm()">Batal</button>
    </div>
  </div>`;
}

function kirimUlasan(id) {
  const p = cariTempat(id), d = S.draft;
  if (!d.bintang) return toast('Isi rating keseluruhan dulu ya ⭐');
  const idxMenu = Object.keys(d.menu);
  if (idxMenu.some(i => !d.menu[i])) return toast('Beri bintang untuk setiap menu yang kamu pilih');

  simpanUlasan(id, {
    user: 'Kamu',
    bintang: d.bintang,
    teks: d.teks.trim(),
    aspek: d.aspek.map(v => v || d.bintang),          // aspek yang kosong ikut rating keseluruhan
    pesan: idxMenu.map(i => ({ menu: p.menu[i].nama, bintang: d.menu[i] })),
  });
  S.formUlasan = false; S.draft = null;
  toast('Ulasan terkirim, makasih! 🎉');
  R();
}
