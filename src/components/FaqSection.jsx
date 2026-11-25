import { useState } from 'react';

const faqs = [
  {
    q: 'Kapan waktu ideal untuk mulai bergabung?',
    a: '6–12 bulan sebelum jadwal seleksi. Pembinaan fisik, perbaikan postur, dan penguasaan materi CAT membutuhkan adaptasi bertahap yang tidak bisa instan.',
  },
  {
    q: 'Bagaimana jika saya punya mata minus atau gigi berlubang?',
    a: 'Pada sesi pra-rikkes, tim dokter mitra akan memeriksa batas toleransi dan memberi rujukan tindakan medis yang diperbolehkan panitia seleksi, seperti penambalan gigi estetik atau rekomendasi tindakan refraktif.',
  },
  {
    q: 'Belum bisa renang, apakah tetap bisa ikut?',
    a: 'Tentu. Kami menyediakan kelas renang dari nol — mulai dari teknik mengapung, pernapasan, hingga kayuhan gaya dada standar militer secara bertahap.',
  },
  {
    q: 'Apa perbedaan Karantina dengan kelas Reguler?',
    a: 'Karantina menerapkan pola asrama semi-militer 24 jam: bangun pukul 04.30, latihan fisik pagi dan sore, kelas akademik siang–malam, evaluasi harian, serta asupan gizi terukur. Reguler adalah program pulang-pergi 4–5 kali per minggu.',
  },
  {
    q: 'Bagaimana cara mendaftar?',
    a: 'Klik tombol "Daftar Sekarang" di menu atas untuk mengisi data singkat, atau hubungi admin kami melalui tombol WhatsApp di bagian bawah.',
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-brand-700 uppercase tracking-wider mb-2.5">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Pertanyaan yang sering diajukan
          </h2>
        </div>

        <div className="space-y-2.5">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden transition-colors ${
                  isOpen ? 'border-brand-300 bg-white' : 'border-neutral-200 bg-white'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-neutral-50 transition-colors"
                >
                  <span className="text-sm sm:text-[15px] font-semibold text-neutral-900">
                    {faq.q}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 transition-all ${
                      isOpen
                        ? 'bg-brand-700 text-white rotate-180'
                        : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    <i className="fa-solid fa-chevron-down" />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-neutral-600 leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
