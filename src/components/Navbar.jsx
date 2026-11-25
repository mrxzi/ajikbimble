import { useState, useEffect } from 'react';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { label: 'Program', href: '#program' },
    { label: 'Mengapa Kami', href: '#keunggulan' },
    { label: 'Fasilitas', href: '#fasilitas' },
    { label: 'Biaya', href: '#paket' },
    { label: 'Alumni', href: '#testimoni' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.05)]' : 'bg-white/80 backdrop-blur-md'}`}>
      <div className="max-w-6xl mx-auto px-5 h-[60px] flex items-center justify-between">
        {/* Logo — text only */}
        <a href="#" className="flex items-baseline gap-0.5 select-none">
          <span className="text-[20px] font-extrabold tracking-tight text-gray-900">ajik</span>
          <span className="text-[20px] font-extrabold tracking-tight text-brand-600">bimbel</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className="px-3 py-1.5 text-[13px] font-medium text-gray-500 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button onClick={onOpenModal}
            className="text-[13px] font-medium text-gray-500 hover:text-gray-800 transition-colors">
            Cek Kelayakan
          </button>
          <a href="https://wa.me/6281288997766?text=Halo%20Ajik%20Bimbel,%20saya%20ingin%20konsultasi" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 bg-brand-700 hover:bg-brand-800 text-white text-[13px] font-semibold px-4 py-[7px] rounded-lg transition-colors">
            <i className="fa-brands fa-whatsapp text-[15px]"></i>
            Konsultasi
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 -mr-2 text-gray-600" onClick={() => setOpen(!open)} aria-label="Menu">
          <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 pb-5 pt-1 animate-fade-in">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="block py-2.5 text-[14px] font-medium text-gray-600 hover:text-gray-900 border-b border-gray-50 last:border-0">
              {l.label}
            </a>
          ))}
          <div className="flex gap-2 pt-4">
            <button onClick={() => { setOpen(false); onOpenModal(); }}
              className="flex-1 text-center py-2.5 text-sm font-semibold rounded-lg border border-gray-200 text-gray-700">
              Cek Kelayakan
            </button>
            <a href="https://wa.me/6281288997766" target="_blank" rel="noreferrer"
              className="flex-1 text-center py-2.5 text-sm font-semibold rounded-lg bg-brand-700 text-white flex items-center justify-center gap-1.5">
              <i className="fa-brands fa-whatsapp"></i> Konsultasi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
