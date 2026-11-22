/* =========================================================
   VYBITE - halaman/profil.js
   profile() = Foodie Profile + pengaturan tampilan (terang/gelap)
   saved()   = Saved Places
   ========================================================= */

const PILIHAN_TEMA = [['light', '☀️ Terang'], ['dark', '🌙 Gelap'], ['auto', '🖥️ Otomatis']];
const BADGES = ['🔥 Streak 7', '🍜 Noodle Hunter', '☕ Kopi Addict', '💎 Gem Finder'];

function profile() {
  const nama = S.nama || 'Alya';
  const jumlahUlasan = TEMPAT.reduce((s, p) => s + ulasanUser(p.id).length, 0);
  return `
  <div style="text-align:center;margin-top:8px">
    <div class="av" style="width:84px;height:84px;margin:auto;font-size:34px">${nama[0]}</div>
    <h1 style="margin-top:8px">${nama}</h1>
    <div class="mut">@${nama.toLowerCase()}.vybes · ${NAMA_AKUN[S.kat]} · ${namaLokasi()}</div>
    <div style="margin-top:6px"><span class="tag ${S.verif ? 'y' : 'p'}">${S.verif ? '✅ Terverifikasi' : 'Belum terverifikasi'}</span></div>
  </div>

  <div class="glass row sp" style="padding:14px;margin:14px 0;text-align:center">
    <div><b>${S.saved.size}</b><div class="mut">Saved</div></div>
    <div><b>${jumlahUlasan}</b><div class="mut">Ulasanmu</div></div>
    <div><b>1.240</b><div class="mut">Jajan Score</div></div>
  </div>

  ${S.verif ? '' : `<button class="btn w" onclick="S.verif=true;toast('Akun terverifikasi (simulasi) ✅');R()">Verifikasi akun (simulasi)</button>`}

  <div class="card" style="padding:14px;margin-top:12px" onclick="go('soon','rank')">
    <div class="row sp"><b>👑 Tukang Jajan</b><span class="tag p">Soon</span></div>
    <div class="bar" style="margin-top:8px"><i style="width:64%"></i></div>
    <div class="mut">64% menuju Food Explorer</div>
  </div>

  <div class="card row" style="padding:12px;margin-top:12px">${vibi('expr-happy', 76)}<div><b>Vibi</b><div class="mut">${UCAPAN_VIBI.profil}</div></div></div>

  <h2>Badges</h2>
  <div class="chips wr">${BADGES.map(b => `<span class="tag y" style="font-size:12px;padding:6px 12px">${b}</span>`).join('')}</div>

  <h2>Pintasan</h2>
  <div class="g2">
    <button class="btn s" onclick="go('saved')">❤️ Saved Places</button>
    <button class="btn b" onclick="go('deals')">🎟️ Deals</button>
    <button class="btn s" onclick="go('soon','history')">🔥 Jajan History</button>
    <button class="btn p" onclick="go('soon','yum')">🎁 YumDrop</button>
  </div>

  <h2>Tampilan</h2>
  ${barisChip(PILIHAN_TEMA, getTema(), 'setTema')}

  <button class="btn s w" style="margin-top:14px" onclick="S.langkah=0;S.kat=null;S.verif=false;R()">Keluar</button>`;
}

function saved() {
  const daftar = TEMPAT.filter(p => S.saved.has(p.id));
  return `
  ${headerHalaman('Saved Places ❤️', 'profile')}
  ${daftar.length ? `<div class="g2">${daftar.map(kartuTempat).join('')}</div>`
                  : `<div class="card" style="padding:24px;text-align:center">${vibi('pose-sleep', 150, 'tengah')}<div>${UCAPAN_VIBI.simpan}</div></div>`}`;
}
