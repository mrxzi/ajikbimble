const testimonials = [
  {
    name: 'Dimas Pratama',
    title: 'Lulus Akmil Magelang, 2022',
    initials: 'DP',
    quote:
      'Dulu lari 12 menit saya cuma tembus 2.200 meter. Berkat latihan terstruktur di sini, saat tes resmi bisa 3.350 meter dengan nilai samapta 98. Format psikotesnya juga persis dengan ujian asli.',
  },
  {
    name: 'Sarah Wulandari',
    title: 'Lulus Taruni Akpol, 2023',
    initials: 'SW',
    quote:
      'Bimbingan mental kepribadian melatih saya tetap tenang di hadapan penguji pantukhir. Nilai akademik saya jadi peringkat tertinggi di Polda. Terima kasih seluruh tim pelatih.',
  },
  {
    name: 'Arya Nugraha',
    title: 'Lulus Praja IPDN, 2024',
    initials: 'AN',
    quote:
      'Skor SKD BKN saya tembus 468 berkat drill ribuan soal di lab komputer. Trik penalaran TWK dan hitungan cepat TIU sangat menghemat waktu saat ujian sesungguhnya.',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimoni" className="py-20 md:py-24 bg-neutral-50 border-y border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-xl mb-12">
          <p className="text-xs font-bold text-brand-700 uppercase tracking-wider mb-2.5">
            Kisah Alumni
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight mb-3">
            Mereka sudah membuktikan
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Pengalaman langsung para alumni yang kini mengabdi di kesatuan TNI, POLRI, dan IPDN.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-brand-600 text-xs">
                    {[...Array(5)].map((_, j) => (
                      <i key={j} className="fa-solid fa-star" />
                    ))}
                  </div>
                  <i className="fa-solid fa-quote-right text-neutral-200 text-lg" />
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed mb-6">"{t.quote}"</p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <div className="w-10 h-10 rounded-full bg-brand-50 text-brand-700 border border-brand-200/70 flex items-center justify-center text-xs font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-900">{t.name}</p>
                  <p className="text-xs text-neutral-500">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
