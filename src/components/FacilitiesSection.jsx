const items = [
  { icon: 'fa-desktop',         title: 'Lab CAT 50 Unit',      desc: 'Simulasi CAT real-time ber-AC dengan software berwaktu otomatis sesuai server BKN.' },
  { icon: 'fa-person-swimming', title: 'Kolam Renang Standar', desc: 'Latihan teknik renang gaya dada militer dan pengambilan waktu 25 meter.' },
  { icon: 'fa-road',            title: 'Lintasan & Lapangan',  desc: 'Lintasan lari terukur, tiang pull-up standar Mabes, matras, dan area shuttle run.' },
  { icon: 'fa-bed',             title: 'Asrama Semi-Militer',  desc: 'Kamar ber-AC bersih, pengawasan 24 jam, pola disiplin harian, dan konsumsi bergizi.' },
  { icon: 'fa-chalkboard-user', title: 'Kelas Eksklusif',      desc: 'Maksimal 25 siswa per kelas dilengkapi proyektor interaktif untuk belajar intensif.' },
  { icon: 'fa-kit-medical',     title: 'Pusat Fisioterapi',    desc: 'Pemulihan cedera, bimbingan postur, tes buta warna, dan pemeriksaan berkala.' },
];

export default function FacilitiesSection() {
  return (
    <section id="fasilitas" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-xl mb-12">
          <p className="text-[13px] font-semibold text-brand-600 mb-3 tracking-wide">FASILITAS</p>
          <h2 className="text-3xl md:text-[36px] font-extrabold tracking-tight text-gray-900 leading-tight">
            Sarana mendukung proses terbaik
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((f, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 flex gap-4 hover:shadow-sm transition-shadow">
              <div className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center text-[15px] shrink-0">
                <i className={`fa-solid ${f.icon}`} />
              </div>
              <div>
                <h3 className="text-[14px] font-semibold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
