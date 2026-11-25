export default function Footer() {
  return (
    <footer id="lokasi" className="bg-brand-950 text-brand-200 pt-14 pb-10">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 border-b border-brand-900">
          {/* Brand & Social */}
          <div className="max-w-sm">
            <a href="#" className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-400" />
              <span className="text-lg font-extrabold text-white tracking-tight">
                Ajik<span className="text-brand-400">Bimbel</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-brand-300/80 leading-relaxed mb-5">
              Lembaga bimbingan belajar dan karantina kedinasan TNI, POLRI, & IPDN terpercaya sejak 2014.
            </p>
            <div className="flex gap-2">
              {['fa-instagram', 'fa-youtube', 'fa-tiktok'].map((ic) => (
                <a
                  key={ic}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-brand-900 text-brand-300 hover:text-white hover:bg-brand-800 flex items-center justify-center text-xs transition-colors"
                  aria-label={ic}
                >
                  <i className={`fa-brands ${ic}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Kontak & Lokasi */}
          <div className="md:justify-self-end">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Kontak & Lokasi Markas
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-brand-300/80">
              <li className="flex items-start gap-2.5">
                <i className="fa-solid fa-location-dot text-brand-400 mt-1 shrink-0" />
                <span>Jl. Krida Samapta Raya No. 88, Jagakarsa, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-phone text-brand-400 shrink-0" />
                <span>0812-8899-7766</span>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-envelope text-brand-400 shrink-0" />
                <span>info@ajikbimbel.ac.id</span>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-clock text-brand-400 shrink-0" />
                <span>Senin–Sabtu, 07.30–20.00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-400/70">
          <p>© 2026 Ajik Bimbel. Hak cipta dilindungi.</p>
          <p>Bimbingan Belajar Masuk TNI • POLRI • IPDN</p>
        </div>
      </div>
    </footer>
  );
}
