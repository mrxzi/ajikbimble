export default function Hero() {
  return (
    <section id="beranda" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      {/* Soft ambient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white -z-10" />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-100 rounded-full blur-[140px] opacity-40 -z-10" />

      <div className="max-w-6xl mx-auto px-5">
        {/* Centered hero */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-700 bg-brand-50 border border-brand-100 px-3 py-1 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            Pendaftaran Angkatan 2026/2027 dibuka
          </div>

          <h1 className="text-[40px] md:text-[52px] lg:text-[58px] font-extrabold leading-[1.08] tracking-tight text-gray-900 mb-6">
            Persiapan terbaik untuk menjadi{' '}
            <span className="text-brand-600">abdi negara</span>
          </h1>

          <p className="text-[17px] md:text-lg text-gray-500 leading-relaxed mb-10 max-w-xl mx-auto">
            Bimbingan seleksi masuk TNI, POLRI, dan IPDN — akademik, psikotes, 
            samapta jasmani, hingga pendampingan pantukhir.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#program"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-semibold text-[15px] px-7 py-3.5 rounded-xl transition-colors">
              Lihat program
              <i className="fa-solid fa-arrow-right text-[11px]" />
            </a>
            <a href="https://wa.me/6281288997766?text=Halo%20Ajik%20Bimbel" target="_blank" rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-[15px] px-7 py-3.5 rounded-xl border border-gray-200 transition-colors">
              <i className="fa-brands fa-whatsapp text-[#25D366] text-lg" />
              Tanya via WhatsApp
            </a>
          </div>
        </div>

        {/* Stats — minimal line */}
        <div className="border-t border-gray-100 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { num: '1.500+', label: 'Alumni lolos seleksi' },
              { num: '94%', label: 'Tingkat kelulusan' },
              { num: '45+', label: 'Instruktur & pembina' },
              { num: '12 th', label: 'Pengalaman berjalan' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-[28px] font-extrabold text-gray-900">{s.num}</div>
                <div className="text-[13px] text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
