export default function Hero() {
  const stats = [
    { icon: 'fa-user-graduate', num: '1.500+', label: 'Alumni lolos seleksi' },
    { icon: 'fa-award', num: '94%', label: 'Tingkat kelulusan' },
    { icon: 'fa-chalkboard-user', num: '45+', label: 'Instruktur & pembina' },
    { icon: 'fa-calendar-check', num: '12 Tahun', label: 'Pengalaman berjalan' },
  ];

  return (
    <section id="beranda" className="bg-white pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-700 bg-brand-50 border border-brand-200/70 px-3.5 py-1.5 rounded-full mb-7">
            <i className="fa-solid fa-circle-check text-[11px]" />
            <span>Pendaftaran Angkatan 2026 / 2027 Telah Dibuka</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-neutral-900 mb-6">
            Persiapan terarah untuk menjadi{' '}
            <span className="text-brand-700">abdi negara.</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-10 max-w-xl mx-auto">
            Bimbingan belajar intensif seleksi masuk TNI, POLRI, dan IPDN — mencakup akademik CAT, psikotes, samapta jasmani, hingga pantukhir.
          </p>

          <div className="flex justify-center mb-16">
            <a
              href="#program"
              className="inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors"
            >
              <span>Jelajahi Program</span>
              <i className="fa-solid fa-arrow-down text-xs" />
            </a>
          </div>
        </div>

        {/* Clean Stats Bar */}
        <div className="border-t border-neutral-200/80 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-neutral-50/70 border border-neutral-200/70 rounded-2xl p-5 text-center"
              >
                <div className="w-9 h-9 mx-auto mb-3 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center text-sm">
                  <i className={`fa-solid ${s.icon}`} />
                </div>
                <div className="text-2xl md:text-[28px] font-extrabold text-neutral-900 tracking-tight">
                  {s.num}
                </div>
                <div className="text-xs sm:text-sm text-neutral-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
