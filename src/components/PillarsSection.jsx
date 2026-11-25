const pillars = [
  {
    icon: 'fa-brain',
    title: 'Akademik & CAT BKN',
    desc: 'Ribuan bank soal ter-update, trik hitung cepat TIU, penalaran TWK, dan strategi TKP berbobot tinggi.',
  },
  {
    icon: 'fa-eye',
    title: 'Psikotes & Kecermatan',
    desc: 'Bimbingan langsung psikolog berlisensi untuk tes Pauli, Kraepelin, Wartegg, EPPS, dan ketahanan fokus.',
  },
  {
    icon: 'fa-person-running',
    title: 'Samapta Jasmani',
    desc: 'Pembinaan fisik terukur: lari 12 menit, pull-up, push-up, sit-up, shuttle run, dan teknik renang.',
  },
  {
    icon: 'fa-heart-pulse',
    title: 'Pra-Medical (Rikkes)',
    desc: 'Screening awal postur, gigi, mata, THT, varises, dan lab darah untuk mendeteksi kendala sedini mungkin.',
  },
  {
    icon: 'fa-comments',
    title: 'Mental & Pantukhir',
    desc: 'Simulasi wawancara PMK, public speaking, dan pembentukan sikap tampang di hadapan dewan penguji.',
  },
  {
    icon: 'fa-chart-line',
    title: 'Monitoring Progress',
    desc: 'Rapor digital berkala untuk orang tua berisi grafik skor CAT, catatan waktu samapta, dan evaluasi medis.',
  },
];

export default function PillarsSection() {
  return (
    <section id="keunggulan" className="py-20 md:py-24 bg-neutral-50 border-y border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-xl mb-12">
          <p className="text-xs font-bold text-brand-700 uppercase tracking-wider mb-2.5">
            Mengapa Ajik Bimbel
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight mb-3">
            Pembinaan menyeluruh, bukan sekadar les biasa
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Seleksi TNI, POLRI, dan IPDN menguji kesiapan secara menyeluruh — akademik, fisik, kesehatan, dan mental.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-neutral-200 rounded-2xl p-6 hover:border-brand-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center text-base mb-4">
                <i className={`fa-solid ${p.icon}`} />
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">{p.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
