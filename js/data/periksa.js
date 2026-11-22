/* =========================================================
   VYBITE - data/periksa.js
   Memeriksa data tempat saat aplikasi dibuka, supaya salah ketik
   cepat ketahuan. Hasilnya muncul di Console (F12) + toast.
   Menambah aturan baru: tambahkan satu baris  cek(kondisi, 'pesan')
   ========================================================= */

function periksaData() {
  const hasil = [], idDipakai = new Set();

  TEMPAT.forEach(p => {
    const cek = (salah, pesan) => { if (salah) hasil.push(`[${p.id}] ${pesan}`); };
    const diluar = (arr, boleh) => arr.filter(x => !boleh.includes(x));

    cek(idDipakai.has(p.id), 'id dobel (harus unik)');
    idDipakai.add(p.id);
    cek(!/^[a-z0-9-]+$/.test(p.id), 'id hanya boleh huruf kecil, angka, dan "-" (id = nama folder foto)');
    cek(!JENIS_TEMPAT.includes(p.jenis), `jenis "${p.jenis}" tidak dikenal → pilih: ${JENIS_TEMPAT.join(' | ')}`);
    cek(!Array.isArray(p.harga) || p.harga.length !== 2 || p.harga[0] > p.harga[1], 'harga harus [termurah, termahal], contoh [15000, 30000]');
    cek(p.rating < 1 || p.rating > 5, 'rating harus 1–5');
    cek(p.worth < 0 || p.worth > 100, 'worth harus 0–100');
    cek(!p.skor || p.skor.length !== 6, 'skor harus 6 angka: rasa, harga, porsi, pelayanan, suasana, overall');
    cek(!p.contoh && /^contoh tempat/i.test(p.deskripsi || ''), 'deskripsi masih teks contoh');
    cek(!p.contoh && p.foto.length === 0, 'belum ada foto (sementara tampil emoji)');

    const salahKategori = diluar(p.kategori, KATEGORI_MAKAN), salahRasa = diluar(p.rasa, RASA),
          salahAsal = diluar(p.asal, ASAL), salahMood = diluar(p.mood, MOOD);
    cek(salahKategori.length, `kategori tidak dikenal: ${salahKategori.join(', ')}`);
    cek(salahRasa.length, `rasa tidak dikenal: ${salahRasa.join(', ')}`);
    cek(salahAsal.length, `asal tidak dikenal: ${salahAsal.join(', ')} (untuk masakan Indonesia pakai "lokal")`);
    cek(salahMood.length, `mood tidak dikenal: ${salahMood.join(', ')}`);

    const namaMenu = p.menu.map(m => m.nama);
    p.menu.forEach(m => {
      cek(!m.nama, 'ada menu tanpa nama');
      cek(!TIPE_MENU.includes(m.tipe), `menu "${m.nama}": tipe "${m.tipe}" tidak dikenal`);
      cek(m.harga !== null && typeof m.harga !== 'number', `menu "${m.nama}": harga harus angka atau null`);
    });
    p.ulasan.forEach(u => (u.pesan || []).forEach(x =>
      cek(!namaMenu.includes(x.menu), `ulasan ${u.user}: menu "${x.menu}" tidak ada di daftar menu`)));
    KUNCI_LINK.forEach(k => cek(p.link[k] && !/^https?:\/\//.test(p.link[k]), `link ${k} harus diawali https://`));
  });
  // Feedback belum terhubung ke Google Form
  if (!FEEDBACK.formUrl) hasil.push('[feedback] formUrl belum diisi di js/data/feedback.js → jawaban responden HANYA tersimpan di browser mereka (mode uji coba)');
  else Object.keys(FEEDBACK.kolom).forEach(k => { if (!FEEDBACK.kolom[k]) hasil.push(`[feedback] kolom "${k}" belum diisi di js/data/feedback.js`); });
  return hasil;
}
