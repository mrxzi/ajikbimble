const items = [
  {
    icon: 'fa-desktop',
    title: 'Lab CAT 50 Unit',
    desc: 'Ruang komputer ber-AC dengan software simulasi CAT real-time berwaktu otomatis sesuai standar server BKN.',
  },
  {
    icon: 'fa-person-swimming',
    title: 'Kolam Renang Standar',
    desc: 'Sarana latihan pernapasan, teknik renang gaya dada militer, dan pengambilan waktu resmi 25 meter.',
  },
  {
    icon: 'fa-road',
    title: 'Lintasan & Lapangan',
    desc: 'Lintasan lari terukur, tiang pull-up standar Mabes, matras sit-up, serta area latihan shuttle run.',
  },
  {
    icon: 'fa-bed',
    title: 'Asrama Semi-Militer',
    desc: 'Kamar ber-AC bersih, pengawasan 24 jam, jadwal disiplin harian teratur, dan asupan makan bergizi.',
  },
  {
    icon: 'fa-chalkboard-user',
    title: 'Kelas Eksklusif',
    desc: 'Maksimal 25 siswa per kelas dilengkapi proyektor interaktif untuk fokus pemahaman materi intensif.',
  },
  {
    icon: 'fa-kit-medical',
    title: 'Pusat Fisioterapi',
    desc: 'Pemulihan cedera otot, bimbingan perbaikan postur tubuh, tes buta warna, dan pemeriksaan rutin.',
  },
];

export default function FacilitiesSection() {
  return (
    <section id="fasilitas" className="py-20 md:py-24 bg-neutral-50 border-y border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-xl mb-12">
          <p className="text-xs font-bold text-brand-700 uppercase tracking-wider mb-2.5">
            Fasilitas
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight mb-3">
            Sarana mendukung hasil terbaik
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Lingkungan belajar dan latihan fisik dirancang agar siswa terbiasa dengan standar ujian sebenarnya.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-neutral-200 p-6 flex items-start gap-4 hover:border-brand-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center text-base shrink-0">
                <i className={`fa-solid ${f.icon}`} />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-neutral-900 mb-1.5">{f.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
