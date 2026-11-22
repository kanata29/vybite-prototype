/* =========================================================
   VYBITE - halaman/komunitas.js
   community()  = tab Community
   soon()       = halaman preview fitur Coming Soon (isi: KOMUNITAS di data/lainnya.js)
   ========================================================= */

function community() {
  return `
  ${judulVibi('Community 👥', 'acc-headphones', UCAPAN_VIBI.community)}
  <div class="g2" style="margin-top:14px">
    ${['mutual', 'circle', 'match', 'games'].map(k => `
      <div class="card pcard soon" style="padding:16px" onclick="go('soon','${k}')">
        <span class="bdg">Soon</span><div style="font-size:30px">${KOMUNITAS[k][0]}</div><b>${KOMUNITAS[k][1]}</b>
      </div>`).join('')}
  </div>
  <h2>Taste Circle populer</h2>
  ${[['☕', 'Coffee Lovers', '1.2K'], ['🌶️', 'Spicy Food Addicts', '860'], ['💎', 'Hidden Gems Explorer', '540'], ['🍰', 'Dessert Hunters', '720']].map(c => `
    <div class="card row" style="padding:12px;margin-bottom:8px" onclick="go('soon','circle')">
      <div class="av" style="background:var(--y)">${c[0]}</div><div><b>${c[1]}</b><div class="mut">${c[2]} anggota</div></div>
    </div>`).join('')}`;
}

function soon() {
  const c = KOMUNITAS[S.arg];
  return `
  ${headerHalaman(c[1], S.tab)}
  <div class="hero" style="text-align:center">
    ${vibi(VIBI_SOON[S.arg], 150, 'tengah')}
    <span class="tag p">Coming Soon</span>
    <p style="margin-top:8px;font-weight:600">${c[2]}</p>
  </div>
  <h2>Contoh tampilan</h2>
  <div class="glass" style="padding:16px">
    <div class="row"><div class="av">R</div><b>${c[3]}</b></div>
    <div class="bar" style="margin-top:12px"><i style="width:68%"></i></div>
  </div>
  <h2>Nanti kamu bisa</h2>
  <div class="card" style="padding:14px">${c[4]}</div>
  <button class="btn w" style="margin-top:16px" onclick="toast('Kamu masuk waiting list 🎉')">Kabari aku saat rilis</button>`;
}
