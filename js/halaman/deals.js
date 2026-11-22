/* =========================================================
   VYBITE - halaman/deals.js
   Voucher menyesuaikan kategori akun & status verifikasi (fungsi layak()
   di logika.js). Isi voucher: DEALS di data/lainnya.js
   ========================================================= */

const TAB_DEALS = [['all', 'All'], ['mhs', 'Student'], ['plj', 'Pelajar'], ['gen', 'General'], ['ms', 'Merchant']];

function deals() {
  const daftar = DEALS.filter(d =>
    S.dealTab === 'all' ? true :
    S.dealTab === 'gen' ? d.untuk === 'all' :
    S.dealTab === 'ms'  ? d.special : d.untuk === S.dealTab);

  return `
  ${headerHalaman('Vybite Deals 🎟️')}
  <div class="judul-vibi"><p class="mut">${UCAPAN_VIBI.deals}</p>${vibi('expr-cool', 90)}</div>
  <div class="glass row" style="padding:10px 14px;margin-bottom:10px">
    <span>${S.verif ? '✅' : '⚠️'}</span>
    <span class="mut">Akun ${NAMA_AKUN[S.kat]} · ${S.verif ? 'Terverifikasi' : 'Belum terverifikasi'}</span>
  </div>
  ${barisChip(TAB_DEALS, S.dealTab, 'setDealTab')}
  ${daftar.map((d, i) => `
    <div class="v ${['', 'b', 'p'][i % 3]}">
      <div class="l">${d.badge}</div>
      <div class="r">
        <b>${d.judul}</b>
        <div class="mut">${d.merchant} · s.d. ${d.berlaku}</div>
        <div class="mut" style="font-size:11px">${d.syarat}</div>
        <button class="btn ${layak(d) ? '' : 's'}" style="padding:6px 14px;margin-top:6px;font-size:12px" onclick="klaimDeal(${DEALS.indexOf(d)})">
          ${S.klaim.has(d.judul) ? '✅ Diklaim' : layak(d) ? 'Klaim' : '🔒 Terkunci'}</button>
      </div>
    </div>`).join('') || '<div class="mut">Belum ada promo.</div>'}`;
}
const setDealTab = t => { S.dealTab = t; R(); };

function klaimDeal(i) {
  const d = DEALS[i];
  if (!layak(d)) return toast(d.untuk === 'mhs' && S.kat === 'mhs' && !S.verif ? 'Verifikasi akun dulu di Profile' : 'Khusus kategori ' + NAMA_AKUN[d.untuk]);
  S.klaim.add(d.judul);
  toast('Voucher diklaim! Kode VYB' + (1000 + i * 37));
  R();
}
