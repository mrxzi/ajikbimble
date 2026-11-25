import { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 rounded-full bg-white text-gray-600 border border-gray-200 shadow-sm hover:shadow transition flex items-center justify-center"
          aria-label="Ke atas">
          <i className="fa-solid fa-chevron-up text-sm" />
        </button>
      )}
      <a href="https://wa.me/6281288997766?text=Halo%20Ajik%20Bimbel" target="_blank" rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center transition-all"
        aria-label="WhatsApp">
        <i className="fa-brands fa-whatsapp text-2xl" />
      </a>
    </div>
  );
}
