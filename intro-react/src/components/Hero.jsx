import { useState } from 'react';

export default function Hero() {
  // Tempat menyimpan apa pun yang diketik user di kolom input
  const [inputText, setInputText] = useState('');

  const jalankanTombol = () => {
    if (inputText.trim() === '') {
      alert('Isi dulu kolomnya, Han!');
    } else {
      alert(`Selamat! Brand "${inputText}" lo berhasil didaftarkan!`);
    }
  };

  return (
    <section className="bg-gray-100 py-24 text-center">
      <h1 className="text-4xl font-extrabold text-slate-900 pb-3">
        Solusi Terbaik untuk Bisnismu
      </h1>
      <p className="pb-5 text-gray-500 text-lg">
        Platform all-in-one untuk manajemen dan pertumbuhan bisnis kecil.
      </p>
      
      {/* Area Input Tugas dari Dosen */}
      <div className="flex flex-col items-center gap-4 max-w-md mx-auto px-4">
        <input 
          type="text" 
          placeholder="Masukkan nama bisnismu..." 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
        />
        <button 
          onClick={jalankanTombol}
          className="bg-indigo-800 text-white px-6 py-2 rounded-full font-bold hover:bg-violet-900 cursor-pointer"
        >
          Mulai Gratis
        </button>
      </div>
    </section>
  );
}