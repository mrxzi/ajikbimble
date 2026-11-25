import { useState } from 'react';

const standards = {
  tni:   { label: 'TNI (Akmil)', minH: { pria: 163, wanita: 157 } },
  polri: { label: 'POLRI (Akpol)', minH: { pria: 165, wanita: 160 } },
  ipdn:  { label: 'IPDN', minH: { pria: 160, wanita: 155 } },
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

  let bmiStatus, bmiColor;
  if (bmi < 18.5)      { bmiStatus = 'Kurang';        bmiColor = 'text-amber-700 bg-amber-50 border-amber-100'; }
  else if (bmi <= 24.9) { bmiStatus = 'Ideal';         bmiColor = 'text-green-700 bg-green-50 border-green-100'; }
  else if (bmi <= 27)   { bmiStatus = 'Sedikit lebih'; bmiColor = 'text-amber-700 bg-amber-50 border-amber-100'; }
  else                  { bmiStatus = 'Berlebih';      bmiColor = 'text-red-700 bg-red-50 border-red-100'; }

  const Selector = ({ options, value, onChange }) => (
    <div className="flex gap-1.5">
      {options.map((o) => (
        <button key={o.value} onClick={() => onChange(o.value)}
          className={`flex-1 py-2 rounded-lg text-[13px] font-semibold transition-all ${
            value === o.value ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }`}>
          {o.label}
        </button>
      ))}
    </div>
  );

  return (
    <section id="kalkulator" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-xl mb-12">
          <p className="text-[13px] font-semibold text-brand-600 mb-3 tracking-wide">CEK KELAYAKAN</p>
          <h2 className="text-3xl md:text-[36px] font-extrabold tracking-tight text-gray-900 leading-tight">
            Apakah fisikmu sudah memenuhi syarat?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-[13px] font-medium text-gray-600 mb-2">Target seleksi</label>
              <Selector value={matra} onChange={setMatra}
                options={[{ value: 'tni', label: 'TNI' }, { value: 'polri', label: 'POLRI' }, { value: 'ipdn', label: 'IPDN' }]} />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-gray-600 mb-2">Jenis kelamin</label>
              <Selector value={gender} onChange={setGender}
                options={[{ value: 'pria', label: 'Pria' }, { value: 'wanita', label: 'Wanita' }]} />
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[13px] font-medium text-gray-600">Tinggi badan</span>
                <span className="text-lg font-bold text-gray-900">{height} <span className="text-[13px] font-normal text-gray-400">cm</span></span>
              </div>
              <input type="range" min="145" max="195" value={height}
                onChange={(e) => setHeight(+e.target.value)} className="w-full accent-brand-600 cursor-pointer" />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1.5">
                <span>145</span><span>Min. syarat: {minH} cm</span><span>195</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[13px] font-medium text-gray-600">Berat badan</span>
                <span className="text-lg font-bold text-gray-900">{weight} <span className="text-[13px] font-normal text-gray-400">kg</span></span>
              </div>
              <input type="range" min="40" max="110" value={weight}
                onChange={(e) => setWeight(+e.target.value)} className="w-full accent-brand-600 cursor-pointer" />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1.5">
                <span>40</span><span>Ideal: {minW}–{maxW} kg</span><span>110</span>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="pb-4 border-b border-gray-100">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Hasil analisis</p>
                <p className="text-[15px] font-semibold text-gray-800">
                  {std.label} — {gender === 'pria' ? 'Pria' : 'Wanita'}
                </p>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] ${heightOk ? 'bg-brand-600' : 'bg-red-500'}`}>
                    <i className={`fa-solid ${heightOk ? 'fa-check' : 'fa-xmark'}`} />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-gray-900">Tinggi: {height} cm</p>
                    <p className="text-[12px] text-gray-400">Batas: {minH} cm</p>
                  </div>
                </div>
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${heightOk ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                  {heightOk ? 'Memenuhi' : 'Kurang'}
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[13px] font-medium text-gray-600">Skor IMT</span>
                  <span className="text-2xl font-extrabold text-gray-900">{bmi}</span>
                </div>
                <div className={`text-[13px] font-semibold p-3.5 rounded-xl border ${bmiColor}`}>
                  Status: {bmiStatus}
                </div>
                <p className="text-[12px] text-gray-400 mt-2">
                  Berat ideal: <span className="text-gray-600 font-medium">{minW}–{maxW} kg</span>
                </p>
              </div>
            </div>

            <a href="https://wa.me/6281288997766?text=Halo%20Ajik%20Bimbel,%20saya%20ingin%20konsultasi%20fisik" target="_blank" rel="noreferrer"
              className="mt-6 w-full py-3 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-semibold text-[13px] text-center transition-colors block">
              Konsultasi fisik gratis →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
