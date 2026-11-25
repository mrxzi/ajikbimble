import { useState } from 'react';

const standards = {
  tni:   { label: 'TNI (Akmil / Bintara)', minH: { pria: 163, wanita: 157 } },
  polri: { label: 'POLRI (Akpol / Bintara)', minH: { pria: 165, wanita: 160 } },
  ipdn:  { label: 'IPDN (Kemendagri)', minH: { pria: 160, wanita: 155 } },
};

export default function Calculator() {
  const [matra, setMatra] = useState('tni');
  const [gender, setGender] = useState('pria');
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(65);

  const std = standards[matra];
  const hm = height / 100;
  const bmi = hm > 0 ? (weight / (hm * hm)).toFixed(1) : 0;
  const minH = std.minH[gender];
  const heightOk = height >= minH;
  const minW = Math.round(18.5 * hm * hm);
  const maxW = Math.round(24.9 * hm * hm);

  let bmiStatus = 'Ideal';
  let bmiDesc = 'Proporsi berat badan ideal dan siap untuk latihan samapta.';
  let bmiBadge = 'bg-brand-50 text-brand-800 border-brand-200';

  if (bmi < 18.5) {
    bmiStatus = 'Berat Kurang';
    bmiDesc = 'Disarankan peningkatan massa otot & nutrisi sebelum tes kesamaptaan.';
    bmiBadge = 'bg-neutral-100 text-neutral-800 border-neutral-200';
  } else if (bmi > 24.9 && bmi <= 27) {
    bmiStatus = 'Sedikit Berlebih';
    bmiDesc = 'Perlu kardio rutin dan pengaturan pola makan agar lolos pemeriksaan fisik.';
    bmiBadge = 'bg-neutral-100 text-neutral-800 border-neutral-200';
  } else if (bmi > 27) {
    bmiStatus = 'Berlebih';
    bmiDesc = 'Berisiko mengurangi poin kesamaptaan. Disarankan program penurunan lemak terarah.';
    bmiBadge = 'bg-red-50 text-red-700 border-red-200';
  }

  const Selector = ({ options, value, onChange }) => (
    <div className="flex gap-2">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
            value === o.value
              ? 'bg-brand-700 text-white'
              : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200/70 hover:text-neutral-900'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );

  return (
    <section id="kalkulator" className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-xl mb-12">
          <p className="text-xs font-bold text-brand-700 uppercase tracking-wider mb-2.5">
            Cek Kelayakan Fisik
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight mb-3">
            Apakah fisikmu sudah memenuhi syarat?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Hitung Indeks Massa Tubuh (IMT) dan cek kesesuaian tinggi badanmu terhadap standar minimum seleksi resmi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Input Column */}
          <div className="bg-neutral-50/70 border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-5">
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                <i className="fa-solid fa-crosshairs text-brand-700 mr-1.5" />
                Target Seleksi
              </label>
              <Selector
                value={matra}
                onChange={setMatra}
                options={[
                  { value: 'tni', label: 'TNI' },
                  { value: 'polri', label: 'POLRI' },
                  { value: 'ipdn', label: 'IPDN' },
                ]}
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                <i className="fa-solid fa-venus-mars text-brand-700 mr-1.5" />
                Jenis Kelamin
              </label>
              <Selector
                value={gender}
                onChange={setGender}
                options={[
                  { value: 'pria', label: 'Pria' },
                  { value: 'wanita', label: 'Wanita' },
                ]}
              />
            </div>

            <div className="bg-white border border-neutral-200 rounded-xl p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-neutral-700">
                  <i className="fa-solid fa-ruler-vertical text-brand-700 mr-2" />
                  Tinggi Badan
                </span>
                <span className="text-lg font-extrabold text-neutral-900">
                  {height} <span className="text-xs font-medium text-neutral-500">cm</span>
                </span>
              </div>
              <input
                type="range"
                min="145"
                max="195"
                value={height}
                onChange={(e) => setHeight(+e.target.value)}
                className="w-full brand-slider"
              />
              <div className="flex justify-between text-[11px] text-neutral-400 mt-2">
                <span>145 cm</span>
                <span className="text-neutral-600 font-medium">Min. syarat: {minH} cm</span>
                <span>195 cm</span>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-xl p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-neutral-700">
                  <i className="fa-solid fa-weight-scale text-brand-700 mr-2" />
                  Berat Badan
                </span>
                <span className="text-lg font-extrabold text-neutral-900">
                  {weight} <span className="text-xs font-medium text-neutral-500">kg</span>
                </span>
              </div>
              <input
                type="range"
                min="40"
                max="110"
                value={weight}
                onChange={(e) => setWeight(+e.target.value)}
                className="w-full brand-slider"
              />
              <div className="flex justify-between text-[11px] text-neutral-400 mt-2">
                <span>40 kg</span>
                <span className="text-neutral-600 font-medium">Ideal: {minW}–{maxW} kg</span>
                <span>110 kg</span>
              </div>
            </div>
          </div>

          {/* Result Column */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-center space-y-6">
            <div className="pb-4 border-b border-neutral-100">
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">
                Hasil Analisis
              </p>
              <p className="text-base font-bold text-neutral-900">
                Standar {std.label} — {gender === 'pria' ? 'Pria' : 'Wanita'}
              </p>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-50 border border-neutral-200/70">
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs ${
                    heightOk ? 'bg-brand-700' : 'bg-red-600'
                  }`}
                >
                  <i className={`fa-solid ${heightOk ? 'fa-check' : 'fa-xmark'}`} />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-900">Tinggi: {height} cm</p>
                  <p className="text-xs text-neutral-500">Batas minimum: {minH} cm</p>
                </div>
              </div>
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full ${
                  heightOk
                    ? 'bg-brand-50 text-brand-700 border border-brand-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}
              >
                {heightOk ? 'Memenuhi' : 'Di Bawah Batas'}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-600">Skor IMT (Body Mass Index)</span>
                <span className="text-3xl font-extrabold text-neutral-900">{bmi}</span>
              </div>
              <div className={`text-sm p-4 rounded-xl border ${bmiBadge}`}>
                <p className="font-bold mb-1">Status: {bmiStatus}</p>
                <p className="text-xs leading-relaxed opacity-90">{bmiDesc}</p>
              </div>
              <p className="text-xs text-neutral-500 pt-1">
                Rentang berat badan ideal untuk tinggi {height} cm:{' '}
                <strong className="text-neutral-900">{minW}–{maxW} kg</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
