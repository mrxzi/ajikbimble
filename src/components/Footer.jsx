export default function Footer() {
  return (
    <footer id="lokasi" className="bg-gray-950 text-gray-500 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-baseline gap-0.5 mb-4">
              <span className="text-[16px] font-extrabold text-white">ajik</span>
              <span className="text-[16px] font-extrabold text-brand-400">bimbel</span>
            </div>
            <p className="text-[12px] text-gray-500 leading-relaxed mb-4">
              Lembaga bimbingan belajar dan karantina kedinasan terpercaya sejak 2014.
            </p>
            <div className="flex gap-1.5">
              {['fa-instagram', 'fa-youtube', 'fa-tiktok'].map((ic) => (
                <a key={ic} href="#" className="w-7 h-7 rounded-md bg-gray-800 text-gray-500 hover:text-white flex items-center justify-center text-[11px] transition-colors">
                  <i className={`fa-brands ${ic}`} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-4">Program</h4>
            <ul className="space-y-2 text-[12px]">
              {['Seleksi Akmil', 'AAL & AAU', 'Akpol & Bintara', 'IPDN Kemendagri', 'STAN & STIN'].map((l) => (
                <li key={l}><a href="#program" className="hover:text-gray-300 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-4">Pembinaan</h4>
            <ul className="space-y-2 text-[12px]">
              {['Simulasi CAT BKN', 'Psikotes & Kecermatan', 'Samapta Jasmani', 'Pelatihan Renang', 'Mental & Pantukhir'].map((l) => (
                <li key={l}><a href="#keunggulan" className="hover:text-gray-300 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-4">Kontak</h4>
            <ul className="space-y-2.5 text-[12px]">
              <li className="flex items-start gap-2">
                <i className="fa-solid fa-location-dot text-gray-600 mt-0.5 shrink-0 text-[10px]" />
                <span>Jl. Krida Samapta Raya No. 88, Jagakarsa, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-gray-600 shrink-0 text-[10px]" />
                <span>0812-8899-7766</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-gray-600 shrink-0 text-[10px]" />
                <span>info@ajikbimbel.ac.id</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-clock text-gray-600 shrink-0 text-[10px]" />
                <span>Senin–Sabtu, 07.30–20.00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-600">
          <p>© 2026 Ajik Bimbel. Hak cipta dilindungi.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400 transition-colors">Privasi</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
