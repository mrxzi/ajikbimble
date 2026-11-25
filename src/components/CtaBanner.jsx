export default function CtaBanner({ onOpenModal }) {
  return (
    <section className="py-20 md:py-28 bg-gray-900">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-[36px] font-extrabold tracking-tight text-white leading-tight mb-4">
            Siap memulai perjalananmu?
          </h2>
          <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
            Dapatkan konsultasi gratis dan simulasi CAT perdana tanpa biaya.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://wa.me/6281288997766?text=Halo%20Ajik%20Bimbel,%20saya%20siap%20mendaftar" target="_blank" rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold text-[14px] px-6 py-3 rounded-xl transition-colors">
              <i className="fa-brands fa-whatsapp text-[#25D366] text-lg" /> Hubungi via WhatsApp
            </a>
            <button onClick={onOpenModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold text-[14px] px-6 py-3 rounded-xl border border-gray-700 transition-colors">
              Isi form pendaftaran
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
