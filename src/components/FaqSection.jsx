import { useState } from 'react';

const faqs = [
  { q: 'Kapan waktu ideal untuk mulai bergabung?', a: '6–12 bulan sebelum jadwal seleksi. Pembinaan fisik, perbaikan postur, dan penguasaan soal membutuhkan proses adaptasi berjenjang yang tidak bisa instan.' },
  { q: 'Bagaimana jika saya punya mata minus atau gigi berlubang?', a: 'Pada sesi pra-rikkes, tim dokter mitra akan memeriksa batas toleransi dan memberikan rujukan tindakan medis yang diperbolehkan panitia seleksi, seperti penambalan estetik atau rekomendasi tindakan refraktif.' },
  { q: 'Belum bisa renang, apakah bisa ikut?', a: 'Tentu. Kami punya kelas renang dari nol — mulai dari teknik mengapung, pernapasan, hingga kayuhan gaya dada standar militer secara bertahap.' },
  { q: 'Apa bedanya Karantina dengan kelas Reguler?', a: 'Karantina menerapkan pola asrama semi-militer 24 jam: bangun 04.30, fisik pagi/sore, kelas siang & malam, evaluasi harian, dan gizi terukur. Reguler adalah program pulang-pergi 4–5 pertemuan per minggu.' },
  { q: 'Bagaimana cara mendaftar?', a: 'Klik tombol "Konsultasi" atau "Cek Kelayakan" di website ini untuk terhubung dengan konsultan kami via WhatsApp. Anda akan dijadwalkan tes diagnostic gratis.' },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-[13px] font-semibold text-brand-600 mb-3 tracking-wide">FAQ</p>
          <h2 className="text-3xl md:text-[36px] font-extrabold tracking-tight text-gray-900 leading-tight">
            Pertanyaan umum
          </h2>
        </div>

        <div className="space-y-1.5">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                  <span className="text-[14px] font-semibold text-gray-800">{faq.q}</span>
                  <i className={`fa-solid fa-chevron-down text-gray-400 text-[11px] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-[14px] text-gray-500 leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[14px] text-gray-500 mb-3">Masih punya pertanyaan?</p>
          <a href="https://wa.me/6281288997766?text=Halo%20Ajik%20Bimbel,%20saya%20punya%20pertanyaan" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg transition-colors">
            <i className="fa-brands fa-whatsapp text-[15px]" /> Chat langsung
          </a>
        </div>
      </div>
    </section>
  );
}
