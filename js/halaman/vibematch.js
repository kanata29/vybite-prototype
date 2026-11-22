/* =========================================================
   VYBITE - halaman/vibematch.js
   Pilih vibe + budget → 3 tempat paling cocok (logika: cocokkan() di logika.js)
   ========================================================= */

const PILIHAN_VIBE = [
  ['date', '💕 Date Night'], ['study', '📚 Study & Chill'], ['friends', '👯 Hangout'], ['quick', '⚡ Quick Lunch'],
  ['comfort', '🍲 Comfort Food'], ['budget', '💸 Budget Friendly'], ['late', '🌙 Late Night'],
];
const PILIHAN_BUDGET = [['15000', '≤ Rp15.000'], ['30000', '≤ Rp30.000'], ['70000', 'Bebas']];

function vibe() {
  const v = S.vm;
  const hasil = v.mood && v.budget ? cocokkan({ mood: v.mood, budget: +v.budget }) : null;
  return `
  ${headerHalaman('VibeMatch ✨')}
  <div class="judul-vibi"><p class="mut">${UCAPAN_VIBI.vibe}</p>${vibi('acc-boba', 90)}</div>
  <h2>Vibe-nya apa?</h2>
  ${barisChip(PILIHAN_VIBE, v.mood, 'setVibe').replace('class="chips"', 'class="chips wr"')}
  <h2>Budget</h2>
  ${barisChip(PILIHAN_BUDGET, v.budget, 'setBudgetVibe').replace('class="chips"', 'class="chips wr"')}
  ${hasil ? `
    <h2>Match buat kamu 🎯</h2>
    <div class="g2">${hasil.map((h, i) => `
      <div>${kartuTempat(h.p)}<div class="mut" style="margin-top:4px">${Math.round(96 - i * 7)}% cocok dengan vibe-mu</div></div>`).join('')}</div>`
  : `<div class="card" style="padding:20px;text-align:center;margin-top:16px">${vibi('expr-curious', 110)}<div class="mut">Pilih vibe & budget dulu ya</div></div>`}`;
}
const setVibe = v => { S.vm.mood = v; R(); };
const setBudgetVibe = v => { S.vm.budget = v; R(); };
