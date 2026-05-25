"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mt-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl px-6 py-4 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-black tracking-wider text-white">
              FERIX<span className="text-[#F5B942]">.UZ</span>
            </h1>

            <p className="text-xs text-gray-400">
              Elevator Factory
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <a href="#" className="text-white/80 hover:text-[#F5B942] transition">
              Asosiy
            </a>

            <a href="#" className="text-white/80 hover:text-[#F5B942] transition">
              Biz haqimizda
            </a>

            <a href="#" className="text-white/80 hover:text-[#F5B942] transition">
              Mahsulotlar
            </a>

            <a href="#" className="text-white/80 hover:text-[#F5B942] transition">
              Loyihalar
            </a>

            <a href="#" className="text-white/80 hover:text-[#F5B942] transition">
              Aloqa
            </a>
          </nav>

          <button className="px-5 py-3 rounded-xl bg-[#F5B942] text-black font-bold hover:scale-105 transition">
            Bog‘lanish
          </button>

        </div>
      </div>
    </header>
  );
}