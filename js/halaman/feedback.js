/* =========================================================
   VYBITE - halaman/feedback.js
   Form umpan balik untuk responden validasi prototipe.
   - Jawaban dikirim ke Google Form (pengaturan: js/data/feedback.js)
   - Cadangan: disimpan juga di browser (localStorage 'vybite-feedback')
   Satu kiriman = satu responden. Di Google Sheets:
     Jumlah responden  = jumlah baris
     Yang menyukai     = baris dengan kesan "Suka"
     Netral / kurang   = baris "Netral" + "Kurang suka"
   ========================================================= */

const KUNCI_FEEDBACK = 'vybite-feedback';
const draftFeedback = () => ({ kesan: null, fitur: [], suka: '', saran: '' });
let sedangKirim = false;

function feedback() {
  if (!S.fb) S.fb = draftFeedback();
  return S.fbSelesai ? feedbackTerkirim() : formFeedback(S.fb);
}

/* ---------- Form ---------- */
function formFeedback(d) {
  return `
  ${headerHalaman('Feedback prototipe 💬', S.tab)}
  <div class="judul-vibi">
    <p class="mut">Hai! Aku Vibi. Kasih tahu pendapatmu soal Vybite ya — jawabanmu bantu banget buat pengembangan.</p>
    ${vibi('pose-wink', 100)}
  </div>

  <div class="card form-ulasan" style="margin-top:14px">
    <b>1. Kesan kamu setelah mencoba Vybite?</b>
    <div class="chips wr" style="margin:8px 0 14px">
      ${FEEDBACK.kesan.map(k => `<button class="chip ${d.kesan === k[0] ? 'on' : ''}" onclick="S.fb.kesan='${k[0]}';R()">${k[1]}</button>`).join('')}
    </div>

    <b>2. Fitur apa saja yang sudah kamu coba?</b>
    <div class="chips wr" style="margin:8px 0 14px">
      ${FEEDBACK.fitur.map((f, i) => `<button class="chip ${d.fitur.includes(f) ? 'on' : ''}" onclick="gantiFitur(${i})">${f}</button>`).join('')}
    </div>

    <b>3. Apa yang paling kamu suka?</b>
    <textarea class="in area" placeholder="Contoh: tampilannya cerah, fitur Terserah? seru…" oninput="S.fb.suka=this.value">${d.suka}</textarea>

    <b style="display:block;margin-top:14px">4. Apa yang perlu diperbaiki?</b>
    <textarea class="in area" placeholder="Contoh: tombol kurang jelas, ingin ada fitur…" oninput="S.fb.saran=this.value">${d.saran}</textarea>

    <button class="btn w" style="margin-top:16px" onclick="kirimFeedback()">Kirim feedback 🚀</button>
  </div>`;
}
function gantiFitur(i) {
  const f = FEEDBACK.fitur[i], arr = S.fb.fitur, k = arr.indexOf(f);
  k < 0 ? arr.push(f) : arr.splice(k, 1);
  R();
}

/* ---------- Kirim ---------- */
async function kirimFeedback() {
  const d = S.fb;
  if (sedangKirim) return;
  if (!d.kesan) return toast('Pilih kesanmu dulu ya 🙂');

  // Data yang dikirim. Kuncinya harus sama dengan FEEDBACK.kolom di data/feedback.js
  const data = {
    kesan:     FEEDBACK.kesan.find(k => k[0] === d.kesan)[2],
    kategori:  NAMA_AKUN[S.kat] || '-',
    perangkat: innerWidth < 700 ? 'HP' : 'Laptop/Tablet',
    fitur:     d.fitur.join(', ') || '-',
    suka:      d.suka.trim() || '-',
    saran:     d.saran.trim() || '-',
  };

  // 1) cadangan di browser
  tulisLokal(KUNCI_FEEDBACK, [{ ...data, waktu: new Date().toISOString() }, ...bacaLokal(KUNCI_FEEDBACK, [])]);

  // 2) kirim ke Google Form (kalau sudah diatur)
  if (FEEDBACK.formUrl) {
    sedangKirim = true;
    const badan = new URLSearchParams();
    Object.keys(data).forEach(k => { if (FEEDBACK.kolom[k]) badan.append(FEEDBACK.kolom[k], data[k]); });
    try {
      // mode 'no-cors': jawaban masuk ke Google Form, tapi browser tidak bisa membaca balasannya
      await fetch(FEEDBACK.formUrl, { method: 'POST', mode: 'no-cors', body: badan });
    } catch (e) {
      sedangKirim = false;
      return toast('Koneksi bermasalah. Coba kirim lagi ya 🙏');
    }
    sedangKirim = false;
  }
  S.fbSelesai = true; R(); scrollTo(0, 0);
}

/* ---------- Setelah terkirim ---------- */
function feedbackTerkirim() {
  return `
  <div style="text-align:center;padding-top:24px">
    ${vibi('sticker-makasih', 200, 'tengah')}
    <h1 style="margin-top:12px">Makasih banyak! 🎉</h1>
    <p class="mut" style="margin:6px 0 20px">Feedback-mu sudah terkirim dan sangat membantu.</p>
    <button class="btn w" onclick="go('home')">Kembali ke Home</button>
    <button class="btn s w" style="margin-top:10px" onclick="S.fb=draftFeedback();S.fbSelesai=false;R()">Isi lagi (responden lain di perangkat ini)</button>
  </div>`;
}
