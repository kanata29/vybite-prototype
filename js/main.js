/* =========================================================
   VYBITE - main.js
   R() menggambar ulang layar sesuai S.view (halaman aktif).
   ★ HALAMAN BARU: buat fungsinya di js/halaman/, lalu daftarkan di ROUTER ★
   ========================================================= */

const ROUTER = {
  home, explore, place, vibe, terserah,
  community, soon, plan, cal, split,
  deals, saved, profile, feedback,
};

function R() {
  const app = $('#app');
  app.className = S.langkah < 3 ? 'tanpa-nav' : '';   // onboarding tidak punya sidebar
  if (S.langkah < 3) {                                   // masih onboarding
    app.innerHTML = BLOBS + onboarding();
    return;
  }
  const halaman = ROUTER[S.view] || home;
  const tombolFeedback = S.view === 'feedback' ? '' : `<button class="fab-fb" onclick="go('feedback')">💬 Feedback</button>`;
  app.innerHTML = BLOBS + `<div class="pg v-${S.view}">${halaman()}</div>` + tombolFeedback + navigasi();
  if (S.view === 'explore') isiDaftarExplore();          // isi daftar hasil search/filter
}

terapkanTema();
R();

// Periksa data tempat; kalau ada yang salah tulis, kasih tahu di Console + toast
const peringatanData = periksaData();
if (peringatanData.length) {
  console.warn('[Vybite] ' + peringatanData.length + ' peringatan data tempat:\n- ' + peringatanData.join('\n- '));
  setTimeout(() => toast('⚠️ ' + peringatanData.length + ' peringatan data — buka Console (F12)'), 500);
}
