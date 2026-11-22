/* =========================================================
   VYBITE - data/feedback.js
   Pengaturan form umpan balik (Aktivitas 5.2: validasi prototipe).
   Jawaban responden dikirim ke GOOGLE FORM milikmu (hanya kamu yang
   bisa lihat di Google Sheets), diisi lewat halaman Feedback di web ini.

   ★ YANG HARUS KAMU ISI: formUrl + kolom (lihat langkah di README bagian "Feedback") ★
   Selama formUrl kosong, jawaban cuma tersimpan di browser responden
   (mode uji coba) dan muncul peringatan di Console.
   ========================================================= */

const FEEDBACK = {

  // Alamat kirim Google Form. Bentuknya:
  // 'https://docs.google.com/forms/d/e/XXXXXXXXXXXX/formResponse'   (akhiran harus /formResponse)
  formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSckXvj18mURxn0ugDyv4WysUv03CguSoYIcN2Q3UpLZ7gzscA/formResponse',

  // Nomor kolom tiap pertanyaan di Google Form, bentuknya 'entry.1234567890'
  kolom: {
    kesan:     'entry.421398999',   // Pertanyaan 1: kesan (Suka / Netral / Kurang suka)
    kategori:  'entry.1284594810',   // Pertanyaan 2: kategori responden (Pelajar / Mahasiswa / ...)
    perangkat: 'entry.1443083309',   // Pertanyaan 3: HP atau Laptop/Tablet
    fitur:     'entry.469441093',   // Pertanyaan 4: fitur yang dicoba
    suka:      'entry.661835474',   // Pertanyaan 5: yang paling disukai
    saran:     'entry.1676602009',   // Pertanyaan 6: yang perlu diperbaiki
  },

  // Pilihan kesan: [kode, teks tampil, teks yang masuk ke Sheet]
  kesan: [
    ['suka',   '😍 Suka',        'Suka'],
    ['netral', '😐 Netral',      'Netral'],
    ['kurang', '🙁 Kurang suka', 'Kurang suka'],
  ],

  // Daftar fitur yang bisa dicentang responden
  fitur: ['Halaman awal', 'Home', 'Explore & filter', 'Detail tempat & menu', 'Tulis ulasan & rating',
          'VibeMatch', 'Terserah?', 'Deals', 'Profile', 'Maskot Vibi'],
};
