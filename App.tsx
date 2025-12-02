import React from 'react';
import TransvaalDaisy from './components/TransvaalDaisy';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-amber-100 flex flex-col items-center justify-center p-4 font-sans antialiased">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl">
          <header className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-rose-800 tracking-tight">
              Maaf untuk yang semalam
            </h1>
            <p className="text-lg text-rose-500 mt-2">ini bunga garbera onlen buat bubub, semalem aku minta maaf yaak</p>
            <p className="text-lg text-rose-500 mt-2">maaf ya kalo jelek soalnya dadakan hehe 💗</p>
          </header>

          <main>
             <TransvaalDaisy />
          </main>
        </div>

        <footer className="text-center mt-8 text-rose-400/80">
          <p>©2025 Dibuat dadakan kek tahu bulat</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
