import { useState, useEffect } from 'react';

export default function RegistrationModal({ isOpen, onClose, initialPackage = '' }) {
  const [form, setForm] = useState({
    nama: '',
    wa: '',
    target: 'TNI (Akmil / AAL / AAU)',
    paket: 'Supercamp Karantina',
    tinggi: '170',
    berat: '65',
    usia: '18',
    catatan: '',
  });

  useEffect(() => {
    if (initialPackage) {
      setForm((prev) => ({ ...prev, paket: initialPackage }));
    }
  }, [initialPackage]);

  if (!isOpen) return null;

  const submit = (e) => {
    e.preventDefault();
    const msg = `Halo Ajik Bimbel, saya ingin mendaftar:%0A• Nama: ${encodeURIComponent(form.nama)}%0A• WA: ${encodeURIComponent(form.wa)}%0A• Target: ${encodeURIComponent(form.target)}%0A• Paket: ${encodeURIComponent(form.paket)}%0A• Fisik: ${form.tinggi}cm / ${form.berat}kg (${form.usia} th)%0A• Catatan: ${encodeURIComponent(form.catatan || '-')}`;
    window.open(`https://wa.me/6281288997766?text=${msg}`, '_blank');
    onClose();
  };

  const set = (k, v) => setForm({ ...form, [k]: v });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full border border-neutral-200 shadow-xl overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 pb-4 border-b border-neutral-100 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-neutral-900">Form Pendaftaran</h3>
            <p className="text-xs text-neutral-500 mt-0.5">Isi data singkat untuk pendaftaran & konsultasi.</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-neutral-200 flex items-center justify-center transition-colors"
            aria-label="Tutup"
          >
            <i className="fa-solid fa-xmark text-sm" />
          </button>
        </div>

        <form onSubmit={submit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                Nama lengkap
              </label>
              <input
                type="text"
                required
                placeholder="Raden Bagus Pratama"
                value={form.nama}
                onChange={(e) => set('nama', e.target.value)}
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-600 text-neutral-900 placeholder:text-neutral-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                WhatsApp
              </label>
              <input
                type="tel"
                required
                placeholder="081234567890"
                value={form.wa}
                onChange={(e) => set('wa', e.target.value)}
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-600 text-neutral-900 placeholder:text-neutral-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                Target seleksi
              </label>
              <select
                value={form.target}
                onChange={(e) => set('target', e.target.value)}
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-600 text-neutral-900"
              >
                <option>TNI (Akmil / AAL / AAU)</option>
                <option>POLRI (Akpol)</option>
                <option>POLRI (Bintara)</option>
                <option>IPDN (Kemendagri)</option>
                <option>Kedinasan Lain</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                Pilihan paket
              </label>
              <select
                value={form.paket}
                onChange={(e) => set('paket', e.target.value)}
                className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-600 text-neutral-900"
              >
                <option>Paket Reguler</option>
                <option>Supercamp Karantina</option>
                <option>Paket Weekend</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                Tinggi (cm)
              </label>
              <input
                type="number"
                required
                placeholder="170"
                value={form.tinggi}
                onChange={(e) => set('tinggi', e.target.value)}
                className="w-full text-sm px-3 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-600 text-neutral-900 placeholder:text-neutral-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                Berat (kg)
              </label>
              <input
                type="number"
                required
                placeholder="65"
                value={form.berat}
                onChange={(e) => set('berat', e.target.value)}
                className="w-full text-sm px-3 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-600 text-neutral-900 placeholder:text-neutral-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                Usia
              </label>
              <input
                type="number"
                required
                placeholder="18"
                value={form.usia}
                onChange={(e) => set('usia', e.target.value)}
                className="w-full text-sm px-3 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-600 text-neutral-900 placeholder:text-neutral-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
              Catatan (opsional)
            </label>
            <textarea
              rows="2"
              placeholder="Mata minus, belum bisa renang, dll..."
              value={form.catatan}
              onChange={(e) => set('catatan', e.target.value)}
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-600 text-neutral-900 placeholder:text-neutral-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <i className="fa-brands fa-whatsapp text-base" />
            <span>Kirim Pendaftaran</span>
          </button>
          <p className="text-[11px] text-center text-neutral-400">
            Data Anda dijamin kerahasiaannya.
          </p>
        </form>
      </div>
    </div>
  );
}
