const pillars = [
  { icon: 'fa-brain',          title: 'Akademik & CAT',       desc: 'Ribuan bank soal ter-update, trik hitung cepat TIU, dan strategi TKP berbobot tinggi berstandar BKN.' },
  { icon: 'fa-eye',            title: 'Psikotes',             desc: 'Bimbingan langsung psikolog berlisensi untuk tes Pauli, Kraepelin, Wartegg, EPPS, dan kecermatan.' },
  { icon: 'fa-person-running', title: 'Samapta Jasmani',      desc: 'Pembinaan fisik terukur: lari 12 menit, pull-up, push-up, sit-up, shuttle run, dan teknik renang.' },
  { icon: 'fa-heart-pulse',    title: 'Pra-Medical (Rikkes)', desc: 'Screening postur, gigi, mata, THT, varises, dan lab darah sejak awal untuk deteksi kendala.' },
  { icon: 'fa-comments',       title: 'Mental & Pantukhir',   desc: 'Simulasi wawancara PMK, public speaking, dan pembentukan sikap tampang di hadapan dewan penguji.' },
  { icon: 'fa-chart-line',     title: 'Monitoring Progress',  desc: 'Rapor digital berkala untuk orang tua: grafik skor CAT, waktu samapta, dan catatan kesehatan.' },
];

export default function PillarsSection() {
  return (
    <section id="keunggulan" className="py-20 md:py-28 bg-gray-900">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-xl mb-14">
          <p className="text-[13px] font-semibold text-brand-400 mb-3 tracking-wide">MENGAPA AJIK BIMBEL</p>
          <h2 className="text-3xl md:text-[36px] font-extrabold tracking-tight text-white leading-tight mb-4">
            Bukan sekadar les biasa
          </h2>
          <p className="text-gray-400 leading-relaxed text-[15px]">
            Kami membentuk kesiapan menyeluruh — akademik, fisik, mental, dan kesehatan — 
            karena seleksi TNI, POLRI, dan IPDN menguji semuanya.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {pillars.map((p, i) => (
            <div key={i} className="bg-gray-800/60 border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-gray-700 text-gray-300 flex items-center justify-center text-[15px] mb-4">
                <i className={`fa-solid ${p.icon}`} />
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2">{p.title}</h3>
              <p className="text-[13px] text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
