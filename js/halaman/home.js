/* =========================================================
   VYBITE - halaman/home.js
   Susunan Home (dari atas): header → hero kuning → kategori bulat →
   Trending → Popular Around You → Budget Friendly → Hidden Gems →
   Deals → rekomendasi mutual
   ========================================================= */

function home() {
  const deal = DEALS.find(layak);
  const nama = S.nama || 'Alya';
  const hemat = TEMPAT.filter(p => p.harga[1] <= 35000);
  const gem = TEMPAT.filter(p => p.label.includes('Hidden Gem') || p.worth >= 87);

  return `
  <!-- 1. HEADER: sapaan, ganti tema, notifikasi -->
  <div class="row sp">
    <div class="row">
      <div class="av" onclick="go('profile')">${nama[0]}</div>
      <div><div class="mut">Hey, ${nama} 👋</div><b>Lagi pengen jajan apa hari ini?</b></div>
    </div>
    <div class="row" style="gap:6px">
      <button class="back glass" onclick="setTema(document.documentElement.dataset.theme==='dark'?'light':'dark')">🌓</button>
      <button class="back glass" onclick="toast('Belum ada notifikasi baru 🔔')">🔔</button>
    </div>
  </div>

  <!-- 2. HERO KUNING: search + lokasi + tombol fitur -->
  <div class="hero hero-home">
    <div class="hero-maskot">${vibi('pose-phone', 150)}</div>
    <div class="mut-dark">📍 ${namaLokasi()} · <a onclick="S.lokasi=LOKASI[(LOKASI.indexOf(S.lokasi)+1)%LOKASI.length];R()">ganti</a></div>
    <h1 class="hero-judul">Let’s find your<br>next bite!</h1>
    <div class="vibi-kata">“${UCAPAN_VIBI.home}” — Vibi</div>
    <div class="cari-pill glass" onclick="go('explore')"><span>🔎</span><span class="mut">Cari makanan atau tempat…</span></div>
    <div class="row" style="margin-top:12px">
      <button class="btn s" onclick="S.tz=[];go('terserah')">Terserah? 🎲</button>
      <button class="btn b" onclick="go('vibe')">VibeMatch ✨</button>
    </div>
  </div>

  <!-- 3. KATEGORI BULAT (isi: KATEGORI_HOME di data/lainnya.js) -->
  <div class="kategori">
    ${KATEGORI_HOME.map(k => `
      <button onclick="S.f.jenis='${k.jenis}';go('explore')">
        <span class="bulat">${k.foto ? `<img src="${FOTO}${k.foto}" alt="">` : k.emoji}</span>${k.label}
      </button>`).join('')}
  </div>

  <!-- 4. DERETAN REKOMENDASI -->
  <h2>🔥 Trending Places <a onclick="go('explore')">Lihat semua</a></h2>
  ${deretKartu([...TEMPAT].sort((a, b) => b.rating - a.rating).slice(0, 6))}

  <h2>📍 Popular Around You</h2>
  ${deretKartu([...TEMPAT].sort((a, b) => parseFloat(a.jarak) - parseFloat(b.jarak)).slice(0, 6))}

  <h2>💸 Budget Friendly</h2>
  ${deretKartu(hemat)}

  <h2>💎 Hidden Gems</h2>
  ${deretKartu(gem)}

  <!-- 5. DEALS & MUTUAL -->
  <h2>🎟️ Vybite Deals <a onclick="go('deals')">Semua</a></h2>
  <div class="v b" onclick="go('deals')">
    <div class="l">${deal.badge}</div>
    <div class="r"><b>${deal.judul}</b><div class="mut">${deal.merchant} · s.d. ${deal.berlaku}</div></div>
  </div>

  <h2>👯 Rekomendasi dari mutual</h2>
  <div class="card" style="padding:14px" onclick="go('soon','mutual')">
    <div class="row"><div class="av">R</div>
      <div><b>Rani</b> <span class="mut">suka</span> Warung Katsu J2pan
        <div class="mut">“Porsi gede, harga aman!” ⭐ 4.5</div></div></div>
  </div>`;
}
