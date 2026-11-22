/* =========================================================
   VYBITE - data/lainnya.js
   Data pendukung: kategori akun, lokasi, kategori Home, deals,
   komunitas (Coming Soon). Edit teks / tambah item di sini.
   ========================================================= */

/* ---------- 1. KATEGORI AKUN (onboarding) ---------- */
// [kode, emoji, nama, keterangan]
const KATEGORI_AKUN = [
  ['plj', '🎒', 'Pelajar',   'Sekolah & jenjang'],
  ['mhs', '🎓', 'Mahasiswa', 'Kampus & prodi'],
  ['pkj', '💼', 'Pekerja',   'Bidang pekerjaan'],
  ['um',  '✨', 'Umum',      'Profil dasar'],
];
const NAMA_AKUN = { plj: 'Pelajar', mhs: 'Mahasiswa', pkj: 'Pekerja', um: 'Umum' };

/* ---------- 2. PILIHAN LOKASI ---------- */
const LOKASI = ['📍 Lokasi saat ini', '🎓 Kampus', '🏫 Sekolah', '💼 Tempat kerja', '🏠 Tempat tinggal', '🗺️ Kota lain'];

/* ---------- 3. KATEGORI BULAT DI HOME ---------- */
// foto: path dari assets/img/  (contoh 'minuman/es-teh.jpg')  |  emoji dipakai kalau tidak ada foto
const KATEGORI_HOME = [
  { label: 'Street Food', jenis: 'Street Food', foto: 'katsu/nasi-goreng-katsu.jpg' },
  { label: 'Cafe',        jenis: 'Cafe',        foto: 'minuman/es-kopi-susu-aren.jpg' },
  { label: 'Restoran',    jenis: 'Restoran',    foto: 'hokben/yakiniku-bento.jpg' },
  { label: 'Dessert',     jenis: 'Dessert',     emoji: '🍧' },
];

/* ---------- 4. DEALS / VOUCHER ---------- */
// untuk: 'all' (semua) | 'mhs' | 'plj' | 'pkj'   ← siapa yang boleh klaim
// special: true → masuk tab "Merchant Specials"
const DEALS = [
  { judul: 'Es Kopi Susu Rp10.000',    merchant: 'The People’s Cafe',   badge: 'Diskon',  untuk: 'mhs', berlaku: '31 Des 2026', syarat: 'Tunjukkan kartu mahasiswa. 1 voucher per hari.' },
  { judul: 'Buy 1 Get 1 Katsu',        merchant: 'Warung Katsu J2pan',  badge: 'B1G1',    untuk: 'all', berlaku: '15 Des 2026', syarat: 'Berlaku Senin–Kamis, dine-in.' },
  { judul: 'Paket Pelajar Rp15.000',   merchant: 'Burjo Evan',          badge: 'Pelajar', untuk: 'plj', berlaku: '20 Des 2026', syarat: 'Wajib seragam / kartu pelajar.' },
  { judul: 'Diskon 20% Bento',         merchant: 'Bento Corner',        badge: '20%',     untuk: 'all', berlaku: '30 Nov 2026', syarat: 'Min. belanja Rp40.000.', special: true },
  { judul: 'Merchant Special Kopken',  merchant: 'Kopken Anjasmoro',    badge: 'Special', untuk: 'pkj', berlaku: '10 Jan 2027', syarat: 'Untuk pekerja, jam 07.00–10.00.', special: true },
  { judul: 'Free Es Jeruk',            merchant: 'Waroeng Steak',       badge: 'Gratis',  untuk: 'all', berlaku: '31 Des 2026', syarat: 'Setiap pembelian steak.' },
  { judul: 'Student Combo Sei Ayam',   merchant: 'Sei Ayam Majapahit',  badge: 'Rp25.000', untuk: 'mhs', berlaku: '31 Jan 2027', syarat: 'Khusus mahasiswa terverifikasi.' },
];

/* ---------- 5. FITUR COMING SOON ---------- */
// emoji, judul, deskripsi, contoh tampilan, fitur nanti
const KOMUNITAS = {
  mutual:  ['👯', 'Mutualan',             'Follow temanmu, intip aktivitas jajan & review mereka.', 'Rani baru review Burjo Evan ⭐4.5', 'Follow/Unfollow, rekomendasi akun, feed mutual'],
  circle:  ['🫶', 'Taste Circle',         'Komunitas berdasarkan selera: Coffee Lovers, Spicy Food Addicts, Hidden Gems Explorer.', 'Coffee Lovers · 1.2K anggota', 'Join community, postingan & diskusi'],
  match:   ['💞', 'How Match U Are?',     'Cek kecocokan selera dengan temanmu ala Spotify Blend.', 'Kamu & Rani: 82% cocok!', 'Persentase, makanan favorit sama, tempat untuk didatangi bareng'],
  history: ['🔥', 'Jajan History & Streak', 'Kalender jajan, foto makanan, dan streak harianmu.', 'Streak 7 hari 🔥 · Jajan Score 1.240', 'Kalender aktivitas, statistik, riwayat review'],
  games:   ['🎮', 'Mini Games',           'Food Bingo, This or That, Guess the Food, Food Challenges.', 'Food Bingo: 3/9 kotak', 'Permainan ringan dengan hadiah badge'],
  yum:     ['🎁', 'YumDrop',              'Traktir teman dengan voucher makanan lewat pesan personal.', 'Dari kamu: Es Kopi untuk Rani 💌', 'Pilih teman, merchant, hadiah, dan pesan'],
  rank:    ['👑', 'Jajan Rank',           'Naik rank dari Tukang Ngicip sampai Sultan Kuliner lewat eksplorasi & review.', 'Tukang Jajan → Food Explorer 64%', 'Rank, progress, achievement & badge'],
  mabar:   ['🍽️', 'Mabar (Makan Bareng)', 'Rencanakan makan bareng, undang teman, dan pantau konfirmasi.', 'Mabar Sabtu: 4 konfirmasi, 2 pending', 'Undangan, peserta, status konfirmasi'],
};

/* ---------- 6. AGENDA AWAL KALENDER ---------- */
// [tanggal, judul]
const AGENDA_AWAL = [
  [14, 'Mabar katsu bareng Rani'],
  [20, 'Ngopi & ngerjain tugas'],
  [27, 'Nongkrong ulang tahun Dimas'],
];

/* ---------- 7. MASKOT VIBI: ucapan & aset ---------- */
// Kalimat Vibi di tiap halaman (ubah sesuka hati). Gaya bicara: sassy tapi peduli.
const UCAPAN_VIBI = {
  onboarding: 'Kenalin, aku Vibi! Bestie jajanmu yang paling sassy 😎',
  home:       'Laper? Gas cari yang worth it, jangan sampai salah jajan.',
  explore:    'Mau cari apa? Aku udah siap nemenin keliling.',
  kosong:     'Hmm… belum ketemu. Coba kata kunci lain deh.',
  vibe:       'Pilih vibe-nya, sisanya serahin ke aku.',
  terserah:   'Terserah? Oke, aku yang pilihin. Jangan protes ya.',
  simpan:     'Belum ada yang disimpan. Yuk jajan dulu!',
  plan:       'Rencanain jajanmu biar nggak dadakan terus.',
  community:  'Cari temen yang sepemikiran soal makan enak.',
  deals:      'Promo itu wajib diklaim. Rugi kalau nggak.',
  profil:     'Ini profil jajanmu. Jaga streak-nya ya!',
};
// Gambar Vibi untuk tiap halaman Coming Soon (nama file di assets/vibi/ tanpa .webp)
const VIBI_SOON = {
  mutual: 'sticker-yuk', circle: 'acc-headphones', match: 'expr-wink', history: 'acc-backpack',
  games: 'expr-happy', yum: 'pose-burger', rank: 'expr-cool', mabar: 'sticker-makasih',
};
