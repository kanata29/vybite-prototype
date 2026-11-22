/* =========================================================
   VYBITE - halaman/onboarding.js
   SATU halaman pembuka: branding + Vibi, pilih kategori akun,
   isi nama, pilih lokasi, lalu tombol "Start Vybing".
   Teks sapaan Vibi: UCAPAN_VIBI.onboarding (data/lainnya.js)
   ========================================================= */

const PLACEHOLDER_DETAIL = { mhs: 'Universitas & prodi', plj: 'Nama sekolah', pkj: 'Bidang pekerjaan', um: 'Hobi kulinermu' };

function onboarding() {
  return `
  <div class="pg onb-satu">

    <!-- KIRI: branding + maskot Vibi -->
    <div class="onb-kiri">
      ${vibi('vibi-main', 250, 'tengah')}
      ${bubbleVibi(UCAPAN_VIBI.onboarding)}
      <h1 class="onb-judul">VYBITE</h1>
      <p class="onb-tagline">Discover Places, Find Your Vibe.</p>
      <p class="mut">Find your vibe, take a bite 🍴</p>
    </div>

    <!-- KANAN: form singkat -->
    <div class="onb-kanan">
      <h2 class="onb-tanya">Kamu siapa nih?</h2>
      <p class="mut" style="margin-bottom:12px">Dipakai buat nyocokin voucher & diskon.</p>

      <div class="g2">
        ${KATEGORI_AKUN.map(c => `
          <div class="card pcard akun ${S.kat === c[0] ? 'pilih' : ''}" onclick="pilihAkun('${c[0]}')">
            <div style="font-size:32px">${c[1]}</div><b>${c[2]}</b><div class="mut">${c[3]}</div>
          </div>`).join('')}
      </div>

      <input class="in" placeholder="Nama panggilanmu" value="${S.nama}" oninput="S.nama=this.value" style="margin-top:14px">
      ${S.kat ? `<input class="in" placeholder="${PLACEHOLDER_DETAIL[S.kat]}" value="${S.detail}" oninput="S.detail=this.value" style="margin-top:10px">` : ''}

      <h2 style="margin:18px 0 8px;font-size:15px">Lokasi utamamu</h2>
      <div class="chips wr">
        ${LOKASI.map(l => `<button class="chip ${S.lokasi === l ? 'on' : ''}" onclick="S.lokasi='${l}';R()">${l}</button>`).join('')}
      </div>

      <button class="btn w" style="margin-top:20px;opacity:${S.kat ? 1 : .55}" onclick="mulaiVybing()">Start Vybing 🍴</button>
    </div>
  </div>`;
}

function pilihAkun(kode) { S.kat = kode; R(); }

function mulaiVybing() {
  if (!S.kat) return toast('Pilih kategori akunmu dulu ya 👆');
  S.nama = S.nama.trim() || 'Alya';
  S.langkah = 3; S.view = 'home'; S.tab = 'home';
  R(); scrollTo(0, 0);
}
