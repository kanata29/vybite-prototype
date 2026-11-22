/* =========================================================
   VYBITE - halaman/rencana.js   (tab Plan)
   plan()  = menu Plan + agenda mendatang
   cal()   = Vybite Calendar (tambah agenda)
   split() = Split Bills (hitung patungan otomatis)
   ========================================================= */

function plan() {
  return `
  ${judulVibi('Plan 📅', 'acc-tote', UCAPAN_VIBI.plan)}
  <div class="g2" style="margin-top:12px">
    <div class="card pcard" style="padding:16px" onclick="go('cal')"><div style="font-size:30px">🗓️</div><b>Calendar</b><div class="mut">Agenda jajan</div></div>
    <div class="card pcard" style="padding:16px" onclick="go('split')"><div style="font-size:30px">🧾</div><b>Split Bills</b><div class="mut">Hitung patungan</div></div>
    <div class="card pcard soon" style="padding:16px" onclick="go('soon','mabar')"><span class="bdg">Soon</span><div style="font-size:30px">🍽️</div><b>Mabar</b></div>
    <div class="card pcard soon" style="padding:16px" onclick="go('soon','yum')"><span class="bdg">Soon</span><div style="font-size:30px">🎁</div><b>YumDrop</b></div>
  </div>
  <h2>Agenda mendatang</h2>
  ${S.agenda.map(a => `<div class="card row" style="padding:12px;margin-bottom:8px"><div class="av" style="background:var(--p)">${a[0]}</div><b>${a[1]}</b></div>`).join('')}`;
}

/* ---------- Calendar ---------- */
function cal() {
  const adaAgenda = t => S.agenda.some(a => a[0] === t);
  return `
  ${headerHalaman('Vybite Calendar', 'plan')}
  <div class="glass" style="padding:14px">
    <b>November 2026</b>
    <div class="cal" style="margin-top:10px">
      ${'SMTWTFS'.split('').map(d => `<b class="mut">${d}</b>`).join('')}
      <span></span><span></span><span></span><span></span><span></span><span></span>
      ${Array.from({ length: 30 }, (_, i) => i + 1).map(t => `<div class="${t === 15 ? 'td' : adaAgenda(t) ? 'ev' : ''}">${t}</div>`).join('')}
    </div>
  </div>
  <h2>Tambah agenda</h2>
  <div class="row">
    <input class="in" id="ag" placeholder="Mis. Brunch di People’s Cafe">
    <button class="btn" onclick="tambahAgenda()">+</button>
  </div>
  ${S.agenda.map(a => `<div class="mut" style="margin-top:8px">• ${a[0]} Nov — ${a[1]}</div>`).join('')}`;
}
function tambahAgenda() {
  const judul = $('#ag').value.trim();
  if (!judul) return toast('Isi judul dulu');
  const tgl = [16, 18, 21, 24, 25, 28].find(t => !S.agenda.some(a => a[0] === t));
  S.agenda.push([tgl, judul]);
  toast('Agenda ditambahkan ✅'); R();
}

/* ---------- Split Bills ---------- */
function split() {
  const { orang, item } = S.patungan;
  const total = item.reduce((s, i) => s + i[1], 0);
  const perOrang = orang.map((_, o) => item.reduce((s, i) => s + (i[2].includes(o) ? i[1] / i[2].length : 0), 0));
  return `
  ${headerHalaman('Split Bills 🧾', 'plan')}
  ${item.map((it, i) => `
    <div class="card" style="padding:12px;margin-bottom:8px">
      <div class="row sp"><b>${it[0]}</b><span>${Rp(it[1])}</span></div>
      <div class="chips">${orang.map((o, j) => `<button class="chip ${it[2].includes(j) ? 'on' : ''}" onclick="gantiPeserta(${i},${j})">${o}</button>`).join('')}</div>
    </div>`).join('')}
  <div class="row">
    <input class="in" id="in1" placeholder="Item">
    <input class="in" id="in2" type="number" placeholder="Harga" style="width:110px">
    <button class="btn" onclick="tambahItem()">+</button>
  </div>
  <div class="hero" style="margin-top:16px">
    <b>Total ${Rp(total)}</b>
    ${orang.map((o, j) => `<div class="row sp"><span>${o}</span><b>${Rp(Math.round(perOrang[j]))}</b></div>`).join('')}
  </div>`;
}
// Tambah / cabut satu orang dari item (minimal satu orang tetap ada)
function gantiPeserta(i, j) {
  const siapa = S.patungan.item[i][2], k = siapa.indexOf(j);
  if (k < 0) siapa.push(j); else if (siapa.length > 1) siapa.splice(k, 1);
  R();
}
function tambahItem() {
  const nama = $('#in1').value.trim(), harga = +$('#in2').value;
  if (!nama || !harga) return toast('Isi item & harga');
  S.patungan.item.push([nama, harga, S.patungan.orang.map((_, i) => i)]);
  R();
}
