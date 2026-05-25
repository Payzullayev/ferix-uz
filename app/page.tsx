"use client";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">

        {/* background */}
        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-[#070B14]/90" />

          {/* glow */}
          <div className="absolute top-40 left-40 w-[500px] h-[500px] bg-[#F5B942]/10 blur-[120px] rounded-full" />

        </div>

        {/* content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-4xl">

            <p className="text-[#F5B942] font-semibold tracking-widest mb-6">
              FERIX_UZ ELEVATOR FACTORY
            </p>

            <h1 className="text-5xl md:text-6xl font-black leading-[0.95]">
              Sifatli liftlar
              <br />

              <span className="text-[#F5B942]">
                zamonaviy binolar
              </span>

              <br />
              uchun.
            </h1>

            <p className="mt-10 text-xl text-gray-300 leading-relaxed max-w-2xl">
              Biz yuqori sifatli, xavfsiz va zamonaviy
              liftlarni ishlab chiqaramiz va o‘rnatamiz.
            </p>

            <div className="flex gap-5 mt-12">

              <button className="px-9 py-4 rounded-2xl bg-[#F5B942] text-black font-bold hover:scale-105 transition duration-300">
                Mahsulotlar
              </button>

              <button className="px-9 py-4 rounded-2xl border border-[#F5B942]/40 hover:bg-[#F5B942]/10 transition duration-300">
                Batafsil
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="relative z-20 -mt-20 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            {/* card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:border-[#F5B942]/40 transition">

              <h2 className="text-5xl font-black text-[#F5B942]">
                15+
              </h2>

              <p className="text-gray-300 mt-3">
                Yillik tajriba
              </p>

            </div>

            {/* card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:border-[#F5B942]/40 transition">

              <h2 className="text-5xl font-black text-[#F5B942]">
                1200+
              </h2>

              <p className="text-gray-300 mt-3">
                O‘rnatilgan liftlar
              </p>

            </div>

            {/* card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:border-[#F5B942]/40 transition">

              <h2 className="text-5xl font-black text-[#F5B942]">
                50+
              </h2>

              <p className="text-gray-300 mt-3">
                Malakali muhandislar
              </p>

            </div>

            {/* card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:border-[#F5B942]/40 transition">

              <h2 className="text-5xl font-black text-[#F5B942]">
                24/7
              </h2>

              <p className="text-gray-300 mt-3">
                Texnik xizmat
              </p>

            </div>

          </div>

        </div>

      </section>
{/* ABOUT */}

<section className="py-32 px-6">

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

    {/* VIDEO */}
    <div className="relative">

      <div className="absolute -inset-4 bg-[#F5B942]/10 blur-3xl rounded-[40px]" />

      <div className="relative w-full h-[320px] md:h-[500px] rounded-[40px] overflow-hidden border border-white/10 bg-black flex items-center justify-center">

        {/* glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5B942]/20 via-transparent to-[#F5B942]/20 blur-3xl opacity-40" />

        {/* video */}
        <video
          id="factoryVideo"
          playsInline
          controls={false}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="relative h-full object-contain z-10"
          poster="/images/poster.jpg"
        >
          <source src="/videos/factory.mp4" type="video/mp4" />
        </video>

  {/* play button */}
  <button
  onClick={() => {
    const video = document.getElementById(
      "factoryVideo"
    ) as HTMLVideoElement;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }}
  className="absolute z-20 w-24 h-24 rounded-full bg-red-500/90 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_0_40px_rgba(239,68,68,0.6)] hover:scale-110 transition duration-300"
>
  <div className="ml-1 text-white text-4xl">
    ▶
  </div>
</button>

</div>

    </div>

    {/* right content */}
    <div>

      <p className="text-[#F5B942] font-semibold tracking-widest mb-5">
        FERIX_UZ HAQIDA
      </p>

      <h2 className="text-3xl md:text-5xl font-black leading-tight">
        Biz dunyoni harakatlantiruvchi
        liftlarni yaratamiz.
      </h2>

      <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-8">
        Ferix.uz — zamonaviy texnologiyalar asosida
        ishlaydigan lift zavodi. Bizning maqsadimiz
        xavfsizlik, sifat va ishonchlilikni ta’minlash.
      </p>

      {/* features */}
      <div className="grid-cols-1 sm:grid-cols-2 gap-5 mt-10">

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#F5B942]/40 transition">
          <h3 className="text-[#F5B942] font-bold text-base md:text-lg">
            Zamonaviy texnologiya
          </h3>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#F5B942]/40 transition">
          <h3 className="text-[#F5B942] font-bold text-base md:text-lg">
            Energiya tejamkor
          </h3>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#F5B942]/40 transition">
          <h3 className="text-[#F5B942] font-bold text-base md:text-lg">
            Xavfsizlik kafolati
          </h3>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#F5B942]/40 transition">
          <h3 className="text-[#F5B942] font-bold text-base md:text-lg">
            Yuqori sifat
          </h3>
        </div>

      </div>

    </div>

  </div>

</section>
{/* PRODUCTS */}

<section className="pb-32 px-6">

  <div className="max-w-7xl mx-auto">

    {/* title */}
    <div className="flex items-end justify-between mb-12">

      <div>

        <p className="text-[#F5B942] font-semibold tracking-widest mb-4">
          MAHSULOTLARIMIZ
        </p>

        <h2 className="text-5xl font-black">
          Premium lift tizimlari
        </h2>

      </div>

      <button className="hidden md:block border border-[#F5B942]/40 px-6 py-3 rounded-2xl hover:bg-[#F5B942]/10 transition">
        Barchasi
      </button>

    </div>

    {/* cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* card */}
      <div className="group bg-white/5 border border-white/10 rounded-[30px] overflow-hidden hover:border-[#F5B942]/40 transition">

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        <div className="p-7">

          <h3 className="text-2xl font-bold">
            Yo‘lovchi liftlari
          </h3>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Zamonaviy binolar uchun premium lift tizimlari.
          </p>

        </div>

      </div>

      {/* card */}
      <div className="group bg-white/5 border border-white/10 rounded-[30px] overflow-hidden hover:border-[#F5B942]/40 transition">

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        <div className="p-7">

          <h3 className="text-2xl font-bold">
            Yuk liftlari
          </h3>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Zavod va omborlar uchun mustahkam liftlar.
          </p>

        </div>

      </div>

      {/* card */}
      <div className="group bg-white/5 border border-white/10 rounded-[30px] overflow-hidden hover:border-[#F5B942]/40 transition">

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-[280px] object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        <div className="p-7">

          <h3 className="text-2xl font-bold">
            Panoramik liftlar
          </h3>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Premium ko‘rinish va zamonaviy dizayn.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* PROCESS */}

<section className="pb-32 px-6">

  <div className="max-w-7xl mx-auto">

    {/* title */}
    <div className="mb-16">

      <p className="text-[#F5B942] font-semibold tracking-widest mb-4">
        ISH JARAYONI
      </p>

      <h2 className="text-5xl font-black">
        Biz qanday ishlaymiz
      </h2>

    </div>

    {/* timeline */}
    <div className="relative">

      {/* line */}
      <div className="absolute top-10 left-0 w-full h-[2px] bg-white/10" />

      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">

        {/* item */}
        <div className="text-center">

          <div className="w-20 h-20 mx-auto rounded-full bg-[#F5B942] text-black flex items-center justify-center text-2xl font-black shadow-[0_0_40px_rgba(245,185,66,0.4)]">
            01
          </div>

          <h3 className="text-xl font-bold mt-6">
            Maslahat
          </h3>

          <p className="text-gray-400 mt-3 text-sm">
            Ehtiyojlarni o‘rganamiz
          </p>

        </div>

        {/* item */}
        <div className="text-center">

          <div className="w-20 h-20 mx-auto rounded-full border border-[#F5B942]/40 bg-white/5 flex items-center justify-center text-2xl font-black">
            02
          </div>

          <h3 className="text-xl font-bold mt-6">
            Loyiha
          </h3>

          <p className="text-gray-400 mt-3 text-sm">
            Eng yaxshi yechim
          </p>

        </div>

        {/* item */}
        <div className="text-center">

          <div className="w-20 h-20 mx-auto rounded-full border border-[#F5B942]/40 bg-white/5 flex items-center justify-center text-2xl font-black">
            03
          </div>

          <h3 className="text-xl font-bold mt-6">
            Ishlab chiqarish
          </h3>

          <p className="text-gray-400 mt-3 text-sm">
            Premium sifat
          </p>

        </div>

        {/* item */}
        <div className="text-center">

          <div className="w-20 h-20 mx-auto rounded-full border border-[#F5B942]/40 bg-white/5 flex items-center justify-center text-2xl font-black">
            04
          </div>

          <h3 className="text-xl font-bold mt-6">
            O‘rnatish
          </h3>

          <p className="text-gray-400 mt-3 text-sm">
            Professional montaj
          </p>

        </div>

        {/* item */}
        <div className="text-center">

          <div className="w-20 h-20 mx-auto rounded-full border border-[#F5B942]/40 bg-white/5 flex items-center justify-center text-2xl font-black">
            05
          </div>

          <h3 className="text-xl font-bold mt-6">
            Sinov
          </h3>

          <p className="text-gray-400 mt-3 text-sm">
            Xavfsizlik tekshiruvi
          </p>

        </div>

        {/* item */}
        <div className="text-center">

          <div className="w-20 h-20 mx-auto rounded-full border border-[#F5B942]/40 bg-white/5 flex items-center justify-center text-2xl font-black">
            06
          </div>

          <h3 className="text-xl font-bold mt-6">
            Support
          </h3>

          <p className="text-gray-400 mt-3 text-sm">
            24/7 xizmat
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* CONTACT */}

<section className="pb-24 md:pb-32 px-4 md:px-6">

  <div className="max-w-7xl mx-auto">

    <div className="grid lg:grid-cols-2 gap-6 md:gap-10">

      {/* LEFT */}
      <div className="bg-white/5 border border-white/10 rounded-[30px] md:rounded-[40px] p-6 md:p-10 backdrop-blur-xl">

        <p className="text-[#F5B942] font-semibold tracking-widest mb-4 text-sm">
          ALOQA
        </p>

        <h2 className="text-3xl md:text-5xl font-black leading-tight">
          Biz bilan bog‘laning
        </h2>

        <p className="text-gray-400 mt-5 md:mt-6 text-base md:text-lg leading-relaxed">
          Loyihangiz uchun professional lift
          yechimlarini taklif qilamiz.
        </p>

        <div className="mt-8 md:mt-10 space-y-6">

          {/* phone */}
          <div className="bg-black/20 border border-white/10 rounded-2xl p-5">

            <p className="text-gray-500 text-sm">
              Telefon
            </p>

            <h3 className="text-lg md:text-2xl font-bold mt-2 break-all">
              +998 94 626 56 26
            </h3>

          </div>

          {/* email */}
          <div className="bg-black/20 border border-white/10 rounded-2xl p-5">

            <p className="text-gray-500 text-sm">
              Email
            </p>

            <h3 className="text-lg md:text-2xl font-bold mt-2 break-all">
              beshimovelnur@gmail.com
            </h3>

          </div>

          {/* address */}
          <div className="bg-black/20 border border-white/10 rounded-2xl p-5">

            <p className="text-gray-500 text-sm">
              Manzil
            </p>

            <h3 className="text-lg md:text-2xl font-bold mt-2">
              Toshkent, Uzbekistan
            </h3>

          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div className="bg-white/5 border border-white/10 rounded-[30px] md:rounded-[40px] p-6 md:p-10 backdrop-blur-xl">

        <h3 className="text-2xl md:text-3xl font-black mb-8">
          Taklif olish
        </h3>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Ismingiz"
            className="w-full h-14 md:h-16 rounded-2xl bg-black/20 border border-white/10 px-5 outline-none focus:border-[#F5B942]/50 transition"
          />

          <input
            type="text"
            placeholder="Telefon raqamingiz"
            className="w-full h-14 md:h-16 rounded-2xl bg-black/20 border border-white/10 px-5 outline-none focus:border-[#F5B942]/50 transition"
          />

          <textarea
            placeholder="Xabaringiz"
            rows={6}
            className="w-full rounded-2xl bg-black/20 border border-white/10 p-5 outline-none focus:border-[#F5B942]/50 transition"
          />

          <button className="w-full h-14 md:h-16 rounded-2xl bg-[#F5B942] text-black font-black text-base md:text-lg hover:scale-[1.02] transition duration-300">
            Yuborish
          </button>

        </div>

      </div>

    </div>

  </div>

</section>

{/* FOOTER */}

<footer className="border-t border-white/10 py-10 px-6">

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">

    <div>

      <h2 className="text-3xl font-black">
        FERIX<span className="text-[#F5B942]">.UZ</span>
      </h2>

      <p className="text-gray-500 mt-2">
        Premium elevator factory
      </p>

    </div>

    <p className="text-gray-500 text-sm">
      © 2026 Ferix.uz — Barcha huquqlar himoyalangan
    </p>

  </div>

</footer>
    </main>
  );
}