"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Slide = {
  badge: string;
  title: string;
  highlight: string;
  desc: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  emoji: string;
  gradient: string;
};

const SLIDES: Slide[] = [
  {
    badge: "🌸 تازه‌های سروا برای پوست درخشانت",
    title: "زیباییت",
    highlight: "سزاوار بهترین‌هاست",
    desc: "سروا شاپ، فروشگاه آنلاین لوازم آرایشی و بهداشتی؛ جدیدترین برندها با ضمانت اصالت، ارسال سریع و قیمت مناسب.",
    primary: { label: "مشاهده محصولات", href: "/products" },
    secondary: { label: "پیشنهادهای ویژه", href: "/products?deals=1" },
    emoji: "💄",
    gradient: "from-brand-600 via-brand-500 to-fuchsia-400",
  },
  {
    badge: "🔥 فقط تا پایان هفته",
    title: "تخفیف‌های داغ",
    highlight: "تا ۴۰٪ ارزان‌تر!",
    desc: "منتخب پرفروش‌ترین محصولات آرایشی و مراقبتی با تخفیف باورنکردنی؛ تا تمام نشده سریع برو ببین!",
    primary: { label: "دیدن تخفیف‌ها", href: "/products?deals=1" },
    emoji: "🏷️",
    gradient: "from-purple-700 via-fuchsia-600 to-pink-500",
  },
  {
    badge: "✨ روتین کامل مراقبت از پوست",
    title: "پوسته رو بشناس،",
    highlight: "درخشش رو شروع کن",
    desc: "از شوینده تا ضد آفتاب؛ همه‌چیز برای یک روتین ساده و مؤثر، با راهنمای خرید رایگان سروا.",
    primary: { label: "شروع روتین", href: "/products?cat=skincare" },
    secondary: { label: "همه محصولات", href: "/products" },
    emoji: "🧴",
    gradient: "from-rose-600 via-brand-500 to-amber-400",
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      5000,
    );
    return () => clearInterval(timer);
  }, [paused]);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);

  return (
    <section
      className="relative mx-auto w-4/5 overflow-hidden rounded-3xl text-white shadow-lg shadow-brand-200/50"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="اسلایدر"
    >
      <div className="grid">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            aria-hidden={i !== index}
            className={`col-start-1 row-start-1 bg-linear-to-l ${s.gradient} transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 md:grid-cols-2 md:py-20">
              <div>
                <p className="mb-3 inline-block rounded-full bg-white/20 px-4 py-1 text-sm">
                  {s.badge}
                </p>
                <h1 className="text-3xl font-black leading-snug md:text-5xl">
                  {s.title}{" "}
                  <span className="text-yellow-200">{s.highlight}</span>
                </h1>
                <p className="mt-4 max-w-md leading-7 text-white/90">
                  {s.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={s.primary.href}
                    className="rounded-full bg-white px-6 py-3 font-bold text-brand-700 transition hover:bg-brand-50"
                  >
                    {s.primary.label}
                  </Link>
                  {s.secondary && (
                    <Link
                      href={s.secondary.href}
                      className="rounded-full border-2 border-white/70 px-6 py-3 font-bold transition hover:bg-white/10"
                    >
                      {s.secondary.label}
                    </Link>
                  )}
                </div>
              </div>
              <div className="hidden justify-center md:flex">
                <div className="grid h-72 w-72 rotate-6 place-items-center rounded-[2.5rem] bg-white/15 text-8xl shadow-xl backdrop-blur-sm">
                  {s.emoji}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* دکمههای قبلی / بعدی */}
      <button
        onClick={() => go(1)}
        aria-label="بنر بعدی"
        className="absolute left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/20 backdrop-blur transition hover:bg-white/35"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={() => go(-1)}
        aria-label="بنر قبلی"
        className="absolute right-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/20 backdrop-blur transition hover:bg-white/35"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* نقطههای ناوبری */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`رفتن به بنر ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}