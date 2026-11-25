const packages = [
  {
    name: 'Reguler', duration: '6 bulan',
    desc: 'Kelas harian untuk siswa yang tinggal dekat lokasi. Intensif tapi tetap pulang-pergi.',
    features: ['4× akademik + 2× jasmani per minggu', 'Modul & 15.000+ bank soal CAT', '12× tryout CAT berperingkat', 'Medical check-up awal', 'Konseling psikotes berkala'],
    notIncluded: ['Asrama & makan'], popular: false,
  },
  {
    name: 'Supercamp Karantina', duration: '3–6 bulan',
    desc: 'Full-asrama dengan disiplin semi-militer. Tingkat kelulusan tertinggi ke Akmil, Akpol & IPDN.',
    features: ['Bimbingan pagi, siang & malam', 'Asrama AC + makan 3× sehat', 'Fisik samapta setiap hari', 'Renang intensif 3× seminggu', 'Medical check-up berkala', 'Tryout CAT setiap pekan', 'Simulasi pantukhir bersama mantan penguji', 'Seragam latihan & perlengkapan'],
    notIncluded: [], popular: true,
  },
  {
    name: 'Weekend', duration: '4 bulan',
    desc: 'Hanya Sabtu-Minggu. Fleksibel untuk siswa yang masih aktif sekolah.',
    features: ['Pertemuan intensif akhir pekan', 'Latihan samapta & renang mingguan', 'Modul SKD & psikotes lengkap', '6× tryout CAT', 'Akses latihan soal 24 jam'],
    notIncluded: ['Asrama', 'Konsumsi harian'], popular: false,
  },
];

export default function PricingSection({ onOpenModal }) {
  return (
    <section id="paket" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[13px] font-semibold text-brand-600 mb-3 tracking-wide">BIAYA PAKET</p>
          <h2 className="text-3xl md:text-[36px] font-extrabold tracking-tight text-gray-900 leading-tight mb-4">
            Investasi untuk masa depanmu
          </h2>
          <p className="text-[15px] text-gray-500">
            Tersedia cicilan tanpa bunga dan beasiswa potongan hingga 30%.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 items-stretch">
          {packages.map((pkg) => (
            <div key={pkg.name}
              className={`rounded-2xl border flex flex-col ${
                pkg.popular ? 'border-brand-300 bg-brand-50 relative' : 'border-gray-200 bg-white'
              }`}>
              {pkg.popular && (
                <div className="absolute -top-3 left-6 bg-gray-900 text-white text-[11px] font-bold px-3 py-1 rounded-full">
                  Paling dipilih
                </div>
              )}

              <div className="p-6 flex-1">
                <p className="text-[12px] text-gray-400 font-medium mb-1">{pkg.duration}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-1.5">{pkg.name}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-6">{pkg.desc}</p>

                <ul className="space-y-2">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-gray-700">
                      <i className="fa-solid fa-check text-brand-600 mt-[3px] text-[10px] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                  {pkg.notIncluded.map((n, i) => (
                    <li key={`no-${i}`} className="flex items-start gap-2 text-[13px] text-gray-300 line-through">
                      <i className="fa-solid fa-xmark mt-[3px] text-[10px] shrink-0" />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 pt-0">
                <button onClick={onOpenModal}
                  className={`w-full py-2.5 rounded-lg text-[13px] font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-gray-900 hover:bg-gray-800 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}>
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
