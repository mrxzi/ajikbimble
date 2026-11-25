const testimonials = [
  { name: 'Dimas Pratama', title: 'Lulus Akmil Magelang, 2022', initials: 'DP',
    quote: 'Dulu lari 12 menit saya cuma tembus 2.200 meter. Berkat latihan terstruktur di sini, saat tes resmi bisa 3.350 meter dengan nilai samapta 98. Format psikotesnya juga persis dengan ujian asli.' },
  { name: 'Sarah Wulandari', title: 'Lulus Taruni Akpol, 2023', initials: 'SW',
    quote: 'Bimbingan mental kepribadian melatih saya tetap tenang di hadapan penguji pantukhir. Nilai akademik saya jadi peringkat tertinggi di Polda. Sangat berterima kasih kepada seluruh tim pelatih.' },
  { name: 'Arya Nugraha', title: 'Lulus Praja IPDN, 2024', initials: 'AN',
    quote: 'Skor SKD BKN saya tembus 468 berkat drill ribuan soal di lab komputer. Trik penalaran TWK dan hitungan cepat TIU sangat menghemat waktu saat ujian sesungguhnya.' },
];

export default function TestimonialsSection() {
  return (
    <section id="testimoni" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-xl mb-12">
          <p className="text-[13px] font-semibold text-brand-600 mb-3 tracking-wide">KISAH ALUMNI</p>
          <h2 className="text-3xl md:text-[36px] font-extrabold tracking-tight text-gray-900 leading-tight">
            Mereka sudah membuktikan
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between">
              <div>
                <div className="flex gap-0.5 text-amber-400 text-[13px] mb-4">
                  {[...Array(5)].map((_, j) => <i key={j} className="fa-solid fa-star" />)}
                </div>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-6">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-brand-50 text-brand-700 flex items-center justify-center text-[12px] font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-gray-900">{t.name}</p>
                  <p className="text-[12px] text-gray-400">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
