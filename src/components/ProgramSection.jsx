import { useState } from 'react';

const programs = [
  {
    id: 'tni',
    tag: 'TNI',
    icon: 'fa-jet-fighter',
    title: 'Seleksi TNI Terpadu',
    sub: 'Akmil · AAL · AAU · Pa PK',
    desc: 'Persiapan lengkap untuk calon taruna Akademi Militer, Angkatan Laut, Angkatan Udara, dan Perwira Karier.',
    points: [
      'Akademik & potensi skolastik standar militer',
      'Psikotes standar Dinas Psikologi TNI',
      'Samapta A & B (lari 12 menit, pull-up, push-up, sit-up, shuttle run)',
      'Latihan renang dasar hingga lanjutan',
      'Pembinaan Mental Ideologi (MI) & wawancara',
    ],
  },
  {
    id: 'polri',
    tag: 'POLRI',
    icon: 'fa-handcuffs',
    title: 'Seleksi POLRI',
    sub: 'Akpol · Bintara · Tamtama',
    desc: 'Bimbingan intensif menghadapi seluruh tahapan seleksi kepolisian dengan sistem penilaian terbaru hingga pantukhir.',
    points: [
      'Ujian akademik berbasis komputer (CAT)',
      'Psikotes tahap I & II (kecermatan, kepribadian, kecerdasan)',
      'Kesamaptaan jasmani A & B + renang standar Polri',
      'Pra-rikkes (pemeriksaan kesehatan fisik luar, dalam & lab)',
      'Simulasi PMK & wawancara sidang pantukhir',
    ],
  },
  {
    id: 'ipdn',
    tag: 'IPDN',
    icon: 'fa-landmark',
    title: 'IPDN & Kedinasan',
    sub: 'Institut Pemerintahan Dalam Negeri',
    desc: 'Pelatihan intensif SKD BKN, tes kesehatan, jasmani, dan pantukhir untuk calon praja pamong praja dan kedinasan.',
    points: [
      'SKD BKN: TWK, TIU, TKP (target skor passing grade 450+)',
      'Tryout CAT real-time mirip server BKN resmi',
      'Kesamaptaan jasmani standar Kemendagri',
      'Pendampingan pemeriksaan kesehatan tahap I & II',
      'Wawancara integritas & kepemimpinan',
    ],
  },
];

export default function ProgramSection() {
  const [active, setActive] = useState('tni');
  const current = programs.find((p) => p.id === active);

  return (
    <section id="program" className="py-20 md:py-24 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-xl mb-10">
          <p className="text-xs font-bold text-brand-700 uppercase tracking-wider mb-2.5">
            Program Bimbingan
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight mb-3">
            Pilih jalur sesuai tujuanmu
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Kurikulum disusun mengikuti regulasi seleksi terbaru masing-masing matra dan sekolah kedinasan.
          </p>
        </div>

        {/* Matra Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {programs.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                active === p.id
                  ? 'bg-brand-700 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70 hover:text-neutral-900'
              }`}
            >
              <i className={`fa-solid ${p.icon} text-xs`} />
              <span>{p.tag}</span>
            </button>
          ))}
        </div>

        {/* Clean Detail Card */}
        <div
          className="bg-neutral-50/70 border border-neutral-200 rounded-2xl p-7 md:p-10 animate-fade-in"
          key={active}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="w-11 h-11 rounded-xl bg-brand-700 text-white flex items-center justify-center text-base mb-5">
                <i className={`fa-solid ${current.icon}`} />
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 mb-1">{current.title}</h3>
              <p className="text-xs font-medium text-brand-700 mb-4">{current.sub}</p>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                {current.desc}
              </p>

              <div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-600 bg-white border border-neutral-200 px-3.5 py-2 rounded-lg">
                <i className="fa-solid fa-users text-brand-700" />
                <span>Kuota terbatas 20–25 siswa per kelas</span>
              </div>
            </div>

            <div className="bg-white border border-neutral-200/80 rounded-2xl p-6">
              <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-5">
                Fokus Pembinaan
              </p>
              <ul className="space-y-3.5">
                {current.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-50 text-brand-700 flex items-center justify-center text-[10px] shrink-0">
                      <i className="fa-solid fa-check" />
                    </span>
                    <span className="text-sm text-neutral-700 leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
