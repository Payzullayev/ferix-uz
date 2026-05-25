"use client";

interface NavbarProps {
  lang: string;
  setLang: (lang: string) => void;
}

export default function Navbar({
  lang,
  setLang,
}: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="mt-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl px-6 py-4 flex items-center justify-between">

          {/* logo */}
          <div>

            <h1 className="text-2xl font-black tracking-wider text-white">
              FERIX<span className="text-[#F5B942]">.UZ</span>
            </h1>

            <p className="text-xs text-gray-400">
              Elevator Factory
            </p>

          </div>

          {/* menu */}
          <nav className="hidden md:flex items-center gap-10">

            <a
              href="#"
              className="text-white/80 hover:text-[#F5B942] transition"
            >
              Asosiy
            </a>

            <a
              href="#"
              className="text-white/80 hover:text-[#F5B942] transition"
            >
              Biz haqimizda
            </a>

            <a
              href="#"
              className="text-white/80 hover:text-[#F5B942] transition"
            >
              Mahsulotlar
            </a>

            <a
              href="#"
              className="text-white/80 hover:text-[#F5B942] transition"
            >
              Loyihalar
            </a>

            <a
              href="#"
              className="text-white/80 hover:text-[#F5B942] transition"
            >
              Aloqa
            </a>

          </nav>

          {/* right */}
          <div className="flex items-center gap-3">

            {/* language switch */}
            <div className="flex items-center gap-2">

              <button
                onClick={() => setLang("uz")}
                className={`px-3 py-2 rounded-xl text-sm transition ${
                  lang === "uz"
                    ? "bg-[#F5B942] text-black"
                    : "bg-white/5 text-white"
                }`}
              >
                UZ
              </button>

              <button
                onClick={() => setLang("ru")}
                className={`px-3 py-2 rounded-xl text-sm transition ${
                  lang === "ru"
                    ? "bg-[#F5B942] text-black"
                    : "bg-white/5 text-white"
                }`}
              >
                RU
              </button>

              <button
                onClick={() => setLang("en")}
                className={`px-3 py-2 rounded-xl text-sm transition ${
                  lang === "en"
                    ? "bg-[#F5B942] text-black"
                    : "bg-white/5 text-white"
                }`}
              >
                EN
              </button>

            </div>

            {/* contact button */}
            <button className="hidden md:block px-5 py-3 rounded-xl bg-[#F5B942] text-black font-bold hover:scale-105 transition">
              Bog‘lanish
            </button>

          </div>

        </div>

      </div>

    </header>
  );
}