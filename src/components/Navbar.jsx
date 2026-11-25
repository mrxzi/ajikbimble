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
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Cek Fisik', href: '#kalkulator' },
    { label: 'Fasilitas', href: '#fasilitas' },
    { label: 'Biaya', href: '#paket' },
    { label: 'Alumni', href: '#testimoni' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md ${
        scrolled ? 'border-b border-neutral-200/80 shadow-sm' : 'border-b border-neutral-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="flex items-center gap-2 select-none">
          <span className="w-2 h-2 rounded-full bg-brand-700" />
          <span className="text-[19px] font-extrabold tracking-tight text-neutral-900">
            Ajik<span className="text-brand-700">Bimbel</span>
          </span>
        </a>

        {/* Single Clean Nav Menu */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-3 py-1.5 text-[13px] font-medium text-neutral-600 hover:text-neutral-950 rounded-lg hover:bg-neutral-100/70 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Single Action Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => onOpenModal('')}
            className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-800 text-white text-[13px] font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <i className="fa-solid fa-pen-to-square text-xs" />
            <span>Daftar Sekarang</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 -mr-2 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'} text-lg`} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden bg-white border-t border-neutral-100 px-5 pb-5 pt-2 animate-fade-in">
          <div className="divide-y divide-neutral-100">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-neutral-700 hover:text-brand-700"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="pt-4">
            <button
              onClick={() => {
                setOpen(false);
                onOpenModal('');
              }}
              className="w-full text-center py-2.5 text-sm font-semibold rounded-lg bg-brand-700 text-white flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-pen-to-square text-xs" />
              <span>Daftar Sekarang</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
