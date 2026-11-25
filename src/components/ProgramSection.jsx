import { useState } from 'react';

const programs = [
  {
    id: 'tni', tag: 'TNI',
    title: 'Seleksi TNI', sub: 'Akmil · AAL · AAU',
    desc: 'Persiapan lengkap calon taruna Akademi Militer, Angkatan Laut, dan Angkatan Udara.',
    points: [
      'Akademik & potensi skolastik militer',
      'Psikotes standar dinas psikologi',
      'Samapta A & B (lari, pull-up, push-up, sit-up)',
      'Latihan renang & ketahanan fisik',
      'Pembinaan mental ideologi & wawancara',
    ],
  },
  {
    id: 'polri', tag: 'POLRI',
    title: 'Seleksi POLRI', sub: 'Akpol · Bintara · Tamtama',
    desc: 'Bimbingan menghadapi seluruh tahapan seleksi kepolisian dari awal hingga pantukhir.',
    points: [
      'Ujian akademik berbasis komputer (CAT)',
      'Psikotes tahap I & II (kecermatan, kepribadian)',
      'Kesamaptaan jasmani A & B + renang',
      'Pra-rikkes (pemeriksaan kesehatan fisik & lab)',
      'Simulasi PMK & sidang pantukhir',
    ],
  },
  {
    id: 'ipdn', tag: 'IPDN',
    title: 'IPDN & Kedinasan', sub: 'Institut Pemerintahan Dalam Negeri',
    desc: 'Pelatihan SKD BKN, tes kesehatan, dan pantukhir untuk calon praja pamong praja.',
    points: [
      'SKD BKN: TWK, TIU, TKP (target passing grade 450+)',
      'Tryout CAT real-time mirip server BKN',
      'Kesamaptaan jasmani standar Kemendagri',
      'Tes kesehatan tahap I & II',
      'Wawancara integritas & kepemimpinan',
    ],
  },
];

export default function ProgramSection() {
  const [active, setActive] = useState('tni');
  const current = programs.find((p) => p.id === active);

  return (
    <section id="program" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-xl mb-12">
          <p className="text-[13px] font-semibold text-brand-600 mb-3 tracking-wide">PROGRAM BIMBINGAN</p>
          <h2 className="text-3xl md:text-[36px] font-extrabold tracking-tight text-gray-900 leading-tight">
            Pilih jalur sesuai tujuanmu
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-1.5 mb-8">
          {programs.map((p) => (
            <button key={p.id} onClick={() => setActive(p.id)}
              className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-all ${
                active === p.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-500 hover:text-gray-700 hover:bg-gray-150'
              }`}>
              {p.tag}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="border border-gray-200 rounded-2xl p-7 md:p-10 animate-fade-in" key={active}>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <span className="inline-block text-[11px] font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded mb-4 tracking-wide">
                {current.tag}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{current.title}</h3>
              <p className="text-[13px] text-gray-400 mb-4">{current.sub}</p>
              <p className="text-[15px] text-gray-600 leading-relaxed mb-8">{current.desc}</p>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <a href="#paket"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg transition-colors">
                  Lihat biaya <i className="fa-solid fa-arrow-right text-[10px]" />
                </a>
                <a href="https://wa.me/6281288997766" target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-600 text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                  Tanya detail
                </a>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-5">Fokus pembinaan</p>
              <ul className="space-y-3">
                {current.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[3px] w-[18px] h-[18px] rounded-full bg-brand-50 text-brand-700 flex items-center justify-center text-[10px] font-bold shrink-0">
                      ✓
                    </span>
                    <span className="text-[14px] text-gray-600 leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 pt-5 border-t border-gray-100 text-[12px] text-gray-400">
                Kuota terbatas 20–25 siswa per kelas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
