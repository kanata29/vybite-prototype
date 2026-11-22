/* =========================================================
   VYBITE - halaman/explore.js
   Search + filter jenis / harga + urutan + tampilan daftar atau peta.
   Daftar hasil digambar terpisah oleh isiDaftarExplore() supaya
   kolom search tidak kehilangan fokus saat mengetik.
   ========================================================= */

const FILTER_JENIS = [['Semua', 'Semua'], ...JENIS_TEMPAT.map(j => [j, IKON_JENIS[j] + ' ' + j])];   // dari data/pilihan.js
const FILTER_HARGA = [[0, 'Semua harga'], [15000, '≤ Rp15.000'], [25000, '≤ Rp25.000'], [35000, '≤ Rp35.000']];
const FILTER_URUT  = [['pop', 'Popularitas'], ['rat', 'Rating'], ['pri', 'Harga']];

function explore() {
  const f = S.f;
  return `
  ${judulVibi('Explore 🔎', 'acc-map', UCAPAN_VIBI.explore)}
  <input class="in" style="margin:12px 0 8px" placeholder="Cari katsu, kopi, cafe…" value="${S.q}"
         oninput="S.q=this.value;isiDaftarExplore()">
  ${barisChip(FILTER_JENIS, f.jenis, 'setJenis')}
  ${barisChip(FILTER_HARGA, f.hargaMaks, 'setHarga')}
  <div class="row sp" style="margin:6px 0 10px">
    ${barisChip(FILTER_URUT, f.urut, 'setUrut')}
    <button class="chip" onclick="S.f.peta=!S.f.peta;R()">${f.peta ? '📋 Daftar' : '🗺️ Peta'}</button>
  </div>
  <div id="lst"></div>`;
}

const setJenis = v => { S.f.jenis = v; R(); };
const setHarga = v => { S.f.hargaMaks = +v; R(); };
const setUrut  = v => { S.f.urut = v; R(); };

// Filter + urutkan, lalu isi #lst
function isiDaftarExplore() {
  const f = S.f, kotak = $('#lst');
  if (!kotak) return;

  const hasil = TEMPAT
    .filter(p => f.jenis === 'Semua' || p.jenis === f.jenis)
    .filter(p => !f.hargaMaks || p.harga[0] <= f.hargaMaks)
    .filter(p => (p.nama + p.jenis + p.kategori.join() + p.rasa.join() + p.asal.join() + p.menu.map(m => m.nama).join()).toLowerCase().includes(S.q.toLowerCase()))
    .sort((a, b) => f.urut === 'rat' ? hitungSkor(b).rating - hitungSkor(a).rating
                  : f.urut === 'pri' ? a.harga[0] - b.harga[0]
                  : hitungSkor(b).worth - hitungSkor(a).worth);

  if (!hasil.length) {
    kotak.innerHTML = `<div class="card" style="padding:24px;text-align:center">${vibi('expr-cry', 120)}<b>Belum ketemu 🥲</b><div class="mut">${UCAPAN_VIBI.kosong}</div></div>`;
  } else if (f.peta) {
    // Peta simulasi: pin disebar otomatis (belum pakai peta sungguhan)
    kotak.innerHTML = `<div class="map">${hasil.map((p, i) =>
      `<div class="pin" style="left:${18 + (i * 37) % 66}%;top:${20 + (i * 29) % 60}%" onclick="go('place','${p.id}')">${p.nama.split(' ')[0]} ⭐${hitungSkor(p).rating}</div>`).join('')}</div>`;
  } else {
    kotak.innerHTML = `<div class="g2">${hasil.map(kartuTempat).join('')}</div>`;
  }
}
