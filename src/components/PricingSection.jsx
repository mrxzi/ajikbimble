const packages = [
  {
    name: 'Paket Reguler',
    duration: 'Durasi 6 Bulan',
    desc: 'Kelas harian pulang-pergi untuk siswa sekitar lokasi dengan jadwal belajar teratur.',
    features: [
      '4× pertemuan akademik & 2× jasmani per minggu',
      'Modul cetak & 15.000+ bank soal CAT',
      '12× tryout CAT berperingkat nasional',
      '1× medical check-up awal (Pra-Rikkes)',
      'Konseling hasil psikotes berkala',
    ],
    notIncluded: ['Asrama & makan harian'],
    popular: false,
  },
  {
    name: 'Supercamp Karantina',
    duration: 'Karantina 3–6 Bulan',
    desc: 'Program full-asrama berdisiplin semi-militer dengan fokus penuh dan tingkat kelulusan tertinggi.',
    features: [
      'Bimbingan akademik intensif pagi, siang & malam',
      'Kamar asrama ber-AC + makan sehat 3× sehari',
      'Pembinaan fisik samapta setiap pagi & sore',
      'Latihan renang intensif 3× seminggu',
      'Medical check-up berkala bersama dokter mitra',
      'Tryout CAT real-time setiap akhir pekan',
      'Simulasi wawancara pantukhir bersama mantan penguji',
      'Seragam latihan & perlengkapan belajar lengkap',
    ],
    notIncluded: [],
    popular: true,
  },
  {
    name: 'Paket Weekend',
    duration: 'Durasi 4 Bulan',
    desc: 'Kelas khusus hari Sabtu dan Minggu. Fleksibel untuk siswa sekolah atau mahasiswa aktif.',
    features: [
      'Pertemuan intensif setiap Sabtu & Minggu',
      'Latihan samapta & renang mingguan',
      'Modul lengkap SKD BKN & psikotes',
      '6× simulasi tryout CAT offline/online',
      'Akses aplikasi latihan soal 24 jam',
    ],
    notIncluded: ['Asrama karantina', 'Konsumsi harian'],
    popular: false,
  },
];

export default function PricingSection({ onSelectPackage }) {
  return (
    <section id="paket" className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs font-bold text-brand-700 uppercase tracking-wider mb-2.5">
            Pilihan Paket
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight mb-3">
            Investasi untuk masa depanmu
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Tersedia cicilan tanpa bunga serta beasiswa prestasi potongan hingga 30%.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl border flex flex-col relative ${
                pkg.popular
                  ? 'border-brand-600 bg-white ring-1 ring-brand-600/20 shadow-sm'
                  : 'border-neutral-200 bg-white'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-6 bg-brand-700 text-white text-[11px] font-bold px-3.5 py-1 rounded-full">
                  Paling Banyak Dipilih
                </div>
              )}

              <div className="p-7 flex-1">
                <p className="text-xs text-brand-700 font-semibold mb-1">{pkg.duration}</p>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{pkg.name}</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 pb-6 border-b border-neutral-100">
                  {pkg.desc}
                </p>

                <ul className="space-y-2.5">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                      <i className="fa-solid fa-check text-brand-700 mt-1 text-[11px] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                  {pkg.notIncluded.map((n, i) => (
                    <li key={`no-${i}`} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-400 line-through">
                      <i className="fa-solid fa-xmark mt-1 text-[11px] shrink-0" />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-7 pt-0">
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-3 rounded-xl text-sm font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-brand-700 hover:bg-brand-800 text-white'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800'
                  }`}
                >
                  Pilih {pkg.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
