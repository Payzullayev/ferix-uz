"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";

export default function Home() {

  const [lang, setLang] = useState<"uz" | "ru" | "en">("uz");

  const translations = {
    uz: {
      heroTitle1: "Sifatli liftlar",
      heroTitle2: "zamonaviy binolar",
      heroTitle3: "uchun.",

      heroDesc:
        "Biz yuqori sifatli, xavfsiz va zamonaviy liftlarni ishlab chiqaramiz va o‘rnatamiz.",

      productsBtn: "Mahsulotlar",
      moreBtn: "Batafsil",

      stats1: "Yillik tajriba",
      stats2: "O‘rnatilgan liftlar",
      stats3: "Malakali muhandislar",
      stats4: "Texnik xizmat",
    },

    ru: {
      heroTitle1: "Качественные лифты",
      heroTitle2: "для современных",
      heroTitle3: "зданий.",

      heroDesc:
        "Мы производим и устанавливаем современные, безопасные и качественные лифты.",

      productsBtn: "Продукты",
      moreBtn: "Подробнее",

      stats1: "Лет опыта",
      stats2: "Установленных лифтов",
      stats3: "Квалифицированных инженеров",
      stats4: "Техническая поддержка",
    },

    en: {
      heroTitle1: "Quality elevators",
      heroTitle2: "for modern",
      heroTitle3: "buildings.",

      heroDesc:
        "We manufacture and install high-quality, safe and modern elevators.",

      productsBtn: "Products",
      moreBtn: "More",

      stats1: "Years experience",
      stats2: "Installed elevators",
      stats3: "Qualified engineers",
      stats4: "Technical support",
    },
  };

  const t = translations[lang];

  return (
    <main className="min-h-screen bg-[#070B14] text-white overflow-hidden">

      <Navbar lang={lang} setLang={setLang} />

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

              {t.heroTitle1}

              <br />

              <span className="text-[#F5B942]">
                {t.heroTitle2}
              </span>

              <br />

              {t.heroTitle3}

            </h1>

            <p className="mt-10 text-xl text-gray-300 leading-relaxed max-w-2xl">
              {t.heroDesc}
            </p>

            <div className="flex gap-5 mt-12">

              <button className="px-9 py-4 rounded-2xl bg-[#F5B942] text-black font-bold hover:scale-105 transition duration-300">
                {t.productsBtn}
              </button>

              <button className="px-9 py-4 rounded-2xl border border-[#F5B942]/40 hover:bg-[#F5B942]/10 transition duration-300">
                {t.moreBtn}
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
                {t.stats1}
              </p>

            </div>

            {/* card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:border-[#F5B942]/40 transition">

              <h2 className="text-5xl font-black text-[#F5B942]">
                1200+
              </h2>

              <p className="text-gray-300 mt-3">
                {t.stats2}
              </p>

            </div>

            {/* card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:border-[#F5B942]/40 transition">

              <h2 className="text-5xl font-black text-[#F5B942]">
                50+
              </h2>

              <p className="text-gray-300 mt-3">
                {t.stats3}
              </p>

            </div>

            {/* card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:border-[#F5B942]/40 transition">

              <h2 className="text-5xl font-black text-[#F5B942]">
                24/7
              </h2>

              <p className="text-gray-300 mt-3">
                {t.stats4}
              </p>

            </div>

          </div>

        </div>

      </section>

{/* ABOUT */}

<section className="py-24 md:py-32 px-6">

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
          className="absolute z-20 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-red-500 to-red-700 border border-white/20 flex items-center justify-center shadow-[0_0_40px_rgba(239,68,68,0.6)] hover:scale-110 transition duration-300"
        >
          <div className="ml-1 text-white text-3xl md:text-4xl">
            ▶
          </div>
        </button>

      </div>

    </div>

    {/* RIGHT CONTENT */}
    <div>

      <p className="text-[#F5B942] font-semibold tracking-widest mb-5">
        {lang === "uz"
          ? "FERIX_UZ HAQIDA"
          : lang === "ru"
          ? "О FERIX_UZ"
          : "ABOUT FERIX_UZ"}
      </p>

      <h2 className="text-3xl md:text-5xl font-black leading-tight">

        {lang === "uz"
          ? "Biz dunyoni harakatlantiruvchi liftlarni yaratamiz."
          : lang === "ru"
          ? "Мы создаем лифты, которые движут мир."
          : "We create elevators that move the world."}

      </h2>

      <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-8">

        {lang === "uz"
          ? "Ferix.uz — zamonaviy texnologiyalar asosida ishlaydigan lift zavodi. Bizning maqsadimiz xavfsizlik, sifat va ishonchlilikni ta’minlash."
          : lang === "ru"
          ? "Ferix.uz — лифтовый завод, работающий на основе современных технологий. Наша цель — безопасность, качество и надежность."
          : "Ferix.uz is an elevator factory powered by modern technologies. Our goal is safety, quality and reliability."}

      </p>

      {/* FEATURES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#F5B942]/40 transition">
          <h3 className="text-[#F5B942] font-bold text-base md:text-lg">

            {lang === "uz"
              ? "Zamonaviy texnologiya"
              : lang === "ru"
              ? "Современные технологии"
              : "Modern technology"}

          </h3>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#F5B942]/40 transition">
          <h3 className="text-[#F5B942] font-bold text-base md:text-lg">

            {lang === "uz"
              ? "Energiya tejamkor"
              : lang === "ru"
              ? "Энергоэффективность"
              : "Energy efficient"}

          </h3>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#F5B942]/40 transition">
          <h3 className="text-[#F5B942] font-bold text-base md:text-lg">

            {lang === "uz"
              ? "Xavfsizlik kafolati"
              : lang === "ru"
              ? "Гарантия безопасности"
              : "Safety guarantee"}

          </h3>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#F5B942]/40 transition">
          <h3 className="text-[#F5B942] font-bold text-base md:text-lg">

            {lang === "uz"
              ? "Yuqori sifat"
              : lang === "ru"
              ? "Высокое качество"
              : "High quality"}

          </h3>
        </div>

      </div>

    </div>

  </div>

</section>

{/* PRODUCTS */}

<section className="pb-24 md:pb-32 px-6">

  <div className="max-w-7xl mx-auto">

    {/* TITLE */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

      <div>

        <p className="text-[#F5B942] font-semibold tracking-widest mb-4">

          {lang === "uz"
            ? "MAHSULOTLARIMIZ"
            : lang === "ru"
            ? "НАШИ ПРОДУКТЫ"
            : "OUR PRODUCTS"}

        </p>

        <h2 className="text-3xl md:text-5xl font-black">

          {lang === "uz"
            ? "Premium lift tizimlari"
            : lang === "ru"
            ? "Премиальные лифтовые системы"
            : "Premium elevator systems"}

        </h2>

      </div>

      <button className="hidden md:block border border-[#F5B942]/40 px-6 py-3 rounded-2xl hover:bg-[#F5B942]/10 transition">

        {lang === "uz"
          ? "Barchasi"
          : lang === "ru"
          ? "Все"
          : "View all"}

      </button>

    </div>

    {/* CARDS */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* CARD */}
      <div className="group bg-white/5 border border-white/10 rounded-[30px] overflow-hidden hover:border-[#F5B942]/40 transition">

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-[260px] md:h-[280px] object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        <div className="p-7">

          <h3 className="text-2xl font-bold">

            {lang === "uz"
              ? "Yo‘lovchi liftlari"
              : lang === "ru"
              ? "Пассажирские лифты"
              : "Passenger elevators"}

          </h3>

          <p className="text-gray-400 mt-4 leading-relaxed">

            {lang === "uz"
              ? "Zamonaviy binolar uchun premium lift tizimlari."
              : lang === "ru"
              ? "Премиальные лифтовые системы для современных зданий."
              : "Premium elevator systems for modern buildings."}

          </p>

        </div>

      </div>

      {/* CARD */}
      <div className="group bg-white/5 border border-white/10 rounded-[30px] overflow-hidden hover:border-[#F5B942]/40 transition">

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-[260px] md:h-[280px] object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        <div className="p-7">

          <h3 className="text-2xl font-bold">

            {lang === "uz"
              ? "Yuk liftlari"
              : lang === "ru"
              ? "Грузовые лифты"
              : "Cargo elevators"}

          </h3>

          <p className="text-gray-400 mt-4 leading-relaxed">

            {lang === "uz"
              ? "Zavod va omborlar uchun mustahkam liftlar."
              : lang === "ru"
              ? "Надежные лифты для заводов и складов."
              : "Reliable elevators for factories and warehouses."}

          </p>

        </div>

      </div>

      {/* CARD */}
      <div className="group bg-white/5 border border-white/10 rounded-[30px] overflow-hidden hover:border-[#F5B942]/40 transition">

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-[260px] md:h-[280px] object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        <div className="p-7">

          <h3 className="text-2xl font-bold">

            {lang === "uz"
              ? "Panoramik liftlar"
              : lang === "ru"
              ? "Панорамные лифты"
              : "Panoramic elevators"}

          </h3>

          <p className="text-gray-400 mt-4 leading-relaxed">

            {lang === "uz"
              ? "Premium ko‘rinish va zamonaviy dizayn."
              : lang === "ru"
              ? "Премиальный внешний вид и современный дизайн."
              : "Premium appearance and modern design."}

          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* PROCESS */}

<section className="pb-24 md:pb-32 px-6">

  <div className="max-w-7xl mx-auto">

    {/* TITLE */}
    <div className="mb-16">

      <p className="text-[#F5B942] font-semibold tracking-widest mb-4">

        {lang === "uz"
          ? "ISH JARAYONI"
          : lang === "ru"
          ? "ПРОЦЕСС РАБОТЫ"
          : "WORK PROCESS"}

      </p>

      <h2 className="text-3xl md:text-5xl font-black">

        {lang === "uz"
          ? "Biz qanday ishlaymiz"
          : lang === "ru"
          ? "Как мы работаем"
          : "How we work"}

      </h2>

    </div>

    {/* TIMELINE */}
    <div className="relative">

      {/* line */}
      <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-white/10" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">

        {/* ITEM */}
        <div className="text-center">

          <div className="w-20 h-20 mx-auto rounded-full bg-[#F5B942] text-black flex items-center justify-center text-2xl font-black shadow-[0_0_40px_rgba(245,185,66,0.4)]">
            01
          </div>

          <h3 className="text-xl font-bold mt-6">

            {lang === "uz"
              ? "Maslahat"
              : lang === "ru"
              ? "Консультация"
              : "Consultation"}

          </h3>

          <p className="text-gray-400 mt-3 text-sm">

            {lang === "uz"
              ? "Ehtiyojlarni o‘rganamiz"
              : lang === "ru"
              ? "Изучаем потребности"
              : "We study your needs"}

          </p>

        </div>

        {/* ITEM */}
        <div className="text-center">

          <div className="w-20 h-20 mx-auto rounded-full border border-[#F5B942]/40 bg-white/5 flex items-center justify-center text-2xl font-black">
            02
          </div>

          <h3 className="text-xl font-bold mt-6">

            {lang === "uz"
              ? "Loyiha"
              : lang === "ru"
              ? "Проект"
              : "Project"}

          </h3>

          <p className="text-gray-400 mt-3 text-sm">

            {lang === "uz"
              ? "Eng yaxshi yechim"
              : lang === "ru"
              ? "Лучшее решение"
              : "Best solution"}

          </p>

        </div>

        {/* ITEM */}
        <div className="text-center">

          <div className="w-20 h-20 mx-auto rounded-full border border-[#F5B942]/40 bg-white/5 flex items-center justify-center text-2xl font-black">
            03
          </div>

          <h3 className="text-xl font-bold mt-6">

            {lang === "uz"
              ? "Ishlab chiqarish"
              : lang === "ru"
              ? "Производство"
              : "Manufacturing"}

          </h3>

          <p className="text-gray-400 mt-3 text-sm">

            {lang === "uz"
              ? "Premium sifat"
              : lang === "ru"
              ? "Премиальное качество"
              : "Premium quality"}

          </p>

        </div>

        {/* ITEM */}
        <div className="text-center">

          <div className="w-20 h-20 mx-auto rounded-full border border-[#F5B942]/40 bg-white/5 flex items-center justify-center text-2xl font-black">
            04
          </div>

          <h3 className="text-xl font-bold mt-6">

            {lang === "uz"
              ? "O‘rnatish"
              : lang === "ru"
              ? "Установка"
              : "Installation"}

          </h3>

          <p className="text-gray-400 mt-3 text-sm">

            {lang === "uz"
              ? "Professional montaj"
              : lang === "ru"
              ? "Профессиональный монтаж"
              : "Professional монтаж"}

          </p>

        </div>

        {/* ITEM */}
        <div className="text-center">

          <div className="w-20 h-20 mx-auto rounded-full border border-[#F5B942]/40 bg-white/5 flex items-center justify-center text-2xl font-black">
            05
          </div>

          <h3 className="text-xl font-bold mt-6">

            {lang === "uz"
              ? "Sinov"
              : lang === "ru"
              ? "Тестирование"
              : "Testing"}

          </h3>

          <p className="text-gray-400 mt-3 text-sm">

            {lang === "uz"
              ? "Xavfsizlik tekshiruvi"
              : lang === "ru"
              ? "Проверка безопасности"
              : "Safety inspection"}

          </p>

        </div>

        {/* ITEM */}
        <div className="text-center">

          <div className="w-20 h-20 mx-auto rounded-full border border-[#F5B942]/40 bg-white/5 flex items-center justify-center text-2xl font-black">
            06
          </div>

          <h3 className="text-xl font-bold mt-6">

            {lang === "uz"
              ? "Support"
              : lang === "ru"
              ? "Поддержка"
              : "Support"}

          </h3>

          <p className="text-gray-400 mt-3 text-sm">

            {lang === "uz"
              ? "24/7 xizmat"
              : lang === "ru"
              ? "Сервис 24/7"
              : "24/7 service"}

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

          {lang === "uz"
            ? "ALOQA"
            : lang === "ru"
            ? "КОНТАКТЫ"
            : "CONTACT"}

        </p>

        <h2 className="text-3xl md:text-5xl font-black leading-tight">

          {lang === "uz"
            ? "Biz bilan bog‘laning"
            : lang === "ru"
            ? "Свяжитесь с нами"
            : "Contact us"}

        </h2>

        <p className="text-gray-400 mt-5 md:mt-6 text-base md:text-lg leading-relaxed">

          {lang === "uz"
            ? "Loyihangiz uchun professional lift yechimlarini taklif qilamiz."
            : lang === "ru"
            ? "Мы предлагаем профессиональные лифтовые решения для вашего проекта."
            : "We offer professional elevator solutions for your project."}

        </p>

        <div className="mt-8 md:mt-10 space-y-6">

          {/* PHONE */}
          <div className="bg-black/20 border border-white/10 rounded-2xl p-5">

            <p className="text-gray-500 text-sm">

              {lang === "uz"
                ? "Telefon"
                : lang === "ru"
                ? "Телефон"
                : "Phone"}

            </p>

            <h3 className="text-lg md:text-2xl font-bold mt-2 break-all">
              +998 94 626 56 26
            </h3>

          </div>

          {/* EMAIL */}
          <div className="bg-black/20 border border-white/10 rounded-2xl p-5">

            <p className="text-gray-500 text-sm">
              
              Email

            </p>

            <h3 className="text-lg md:text-2xl font-bold mt-2 break-all">
              beshimovelnur@gmail.com
            </h3>

          </div>

          {/* ADDRESS */}
          <div className="bg-black/20 border border-white/10 rounded-2xl p-5">

            <p className="text-gray-500 text-sm">

              {lang === "uz"
                ? "Manzil"
                : lang === "ru"
                ? "Адрес"
                : "Address"}

            </p>

            <h3 className="text-lg md:text-2xl font-bold mt-2">

              {lang === "uz"
                ? "Toshkent, Uzbekistan"
                : lang === "ru"
                ? "Ташкент, Узбекистан"
                : "Tashkent, Uzbekistan"}

            </h3>

          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div className="bg-white/5 border border-white/10 rounded-[30px] md:rounded-[40px] p-6 md:p-10 backdrop-blur-xl">

        <h3 className="text-2xl md:text-3xl font-black mb-8">

          {lang === "uz"
            ? "Taklif olish"
            : lang === "ru"
            ? "Получить предложение"
            : "Get an offer"}

        </h3>

        <div className="space-y-5">

          <input
            type="text"
            placeholder={
              lang === "uz"
                ? "Ismingiz"
                : lang === "ru"
                ? "Ваше имя"
                : "Your name"
            }
            className="w-full h-14 md:h-16 rounded-2xl bg-black/20 border border-white/10 px-5 outline-none focus:border-[#F5B942]/50 transition"
          />

          <input
            type="text"
            placeholder={
              lang === "uz"
                ? "Telefon raqamingiz"
                : lang === "ru"
                ? "Ваш номер телефона"
                : "Your phone number"
            }
            className="w-full h-14 md:h-16 rounded-2xl bg-black/20 border border-white/10 px-5 outline-none focus:border-[#F5B942]/50 transition"
          />

          <textarea
            placeholder={
              lang === "uz"
                ? "Xabaringiz"
                : lang === "ru"
                ? "Ваше сообщение"
                : "Your message"
            }
            rows={6}
            className="w-full rounded-2xl bg-black/20 border border-white/10 p-5 outline-none focus:border-[#F5B942]/50 transition"
          />

          <button className="w-full h-14 md:h-16 rounded-2xl bg-[#F5B942] text-black font-black text-base md:text-lg hover:scale-[1.02] transition duration-300">

            {lang === "uz"
              ? "Yuborish"
              : lang === "ru"
              ? "Отправить"
              : "Send"}

          </button>

        </div>

      </div>

    </div>

  </div>

</section>

{/* FOOTER */}

<footer className="border-t border-white/10 py-10 px-6">

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">

    <div>

      <h2 className="text-3xl font-black">
        FERIX<span className="text-[#F5B942]">.UZ</span>
      </h2>

      <p className="text-gray-500 mt-2 text-sm md:text-base">

        {lang === "uz"
          ? "Premium lift zavodi"
          : lang === "ru"
          ? "Премиальный лифтовый завод"
          : "Premium elevator factory"}

      </p>

    </div>

    <p className="text-gray-500 text-sm">

      {lang === "uz"
        ? "© 2026 Ferix.uz — Barcha huquqlar himoyalangan"
        : lang === "ru"
        ? "© 2026 Ferix.uz — Все права защищены"
        : "© 2026 Ferix.uz — All rights reserved"}

    </p>

  </div>

</footer>

    </main>
  );
}