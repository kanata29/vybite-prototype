/* =========================================================
   VYBITE - halaman/terserah.js
   Quiz "Terserah?". Pertanyaan & pilihan diatur di data/terserah.js.
   Jawaban disimpan berurutan di S.tz, contoh: [['mood','quick'],['jenis','berat']]
   ========================================================= */

const jawabanTerserah = () => Object.fromEntries(S.tz);

function terserah() {
  const j = jawabanTerserah(), urut = urutTerserah(j);
  const kini = urut.find(k => !(k in j));               // pertanyaan berikutnya
  return kini ? tampilPertanyaan(kini, j, urut) : tampilHasil(j);
}

/* ---------- Satu pertanyaan ---------- */
function tampilPertanyaan(kunci, j, urut) {
  const q = kunci === 'rasa' ? TERSERAH.rasa[j.jenis] : TERSERAH[kunci];
  const total = urut.length, ke = S.tz.length;
  return `
  <div class="top">
    <button class="back glass" onclick="${ke ? 'mundurTerserah()' : "go('home')"}">←</button>
    <h1 style="font-size:20px">Terserah? 🎲</h1>
  </div>
  <div class="bar" style="margin-bottom:16px"><i style="width:${ke / total * 100}%"></i></div>
  <div class="q-vibi">${vibi(q.vibi || 'expr-curious', 120)}${ke === 0 ? bubbleVibi(UCAPAN_VIBI.terserah) : ''}</div>
  <h1>${q.tanya}</h1>
  <p class="mut" style="margin-bottom:14px">Pertanyaan ${ke + 1} dari ${total}</p>
  <div class="g2">
    ${q.opsi.map(o => `<div class="card pcard opsi" onclick="jawabTerserah('${kunci}','${o[0]}')">${o[1]}</div>`).join('')}
  </div>`;
}
function jawabTerserah(kunci, nilai) { S.tz.push([kunci, nilai]); R(); }
function mundurTerserah() { S.tz.pop(); R(); }

/* ---------- Hasil ---------- */
function tampilHasil(j) {
  const hasil = cocokkan({ mood: j.mood, jenis: j.jenis, rasa: j.rasa, asal: j.asal, budget: +j.budget, dekat: j.lokasi === 'near' });
  const utama = hasil[0];
  return `
  ${headerHalaman('Hasil Terserah? 🎉')}
  <div style="text-align:center">${vibi('sticker-nice', 140)}<h1>Vibi bilang: ${utama.p.nama}!</h1></div>
  <div class="hasil-utama">${kartuTempat(utama.p)}</div>
  <div class="chips wr" style="justify-content:center">${utama.alasan.map(a => `<span class="tag y">✓ ${a}</span>`).join('')}</div>
  <h2>Alternatif</h2>
  <div class="g2">${hasil.slice(1).map(h => kartuTempat(h.p)).join('')}</div>
  <button class="btn w" style="margin-top:14px" onclick="S.tz=[];R()">Ulangi 🔁</button>`;
}
