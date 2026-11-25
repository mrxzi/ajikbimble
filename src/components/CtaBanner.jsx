export default function CtaBanner() {
  return (
    <section className="pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="bg-brand-900 rounded-3xl p-8 sm:p-14 text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-xs font-bold text-brand-300 uppercase tracking-wider mb-3">
              Konsultasi Pendidikan
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Siap memulai perjalananmu menjadi abdi negara?
            </h2>
            <p className="text-brand-200 text-sm sm:text-base leading-relaxed mb-8">
              Dapatkan konsultasi gratis dan simulasi CAT perdana tanpa dipungut biaya bersama pembina kami.
            </p>
            <div className="flex justify-center">
              <a
                href="https://wa.me/6281288997766?text=Halo%20Ajik%20Bimbel,%20saya%20ingin%20konsultasi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-brand-50 text-brand-950 font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors"
              >
                <i className="fa-brands fa-whatsapp text-brand-700 text-base" />
                <span>Hubungi via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
