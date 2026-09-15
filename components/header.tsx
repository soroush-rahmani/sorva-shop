"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-provider";
import { useState } from "react";

const faNum = new Intl.NumberFormat("fa-IR");

/* آیتمهای نوبار — از راست به چپ مثل دوشیزه */
const NAV_ITEMS: {
  href?: string;
  label: string;
  emoji: string;
  children?: { href: string; label: string; emoji: string }[];
}[] = [
  { href: "/", label: "صفحه اصلی", emoji: "🏡" },
  {
    label: "محصولات آرایشی",
    emoji: "💄",
    children: [
      { href: "/products?cat=face", label: "آرایش صورت", emoji: "🪞" },
      { href: "/products?cat=eye", label: "آرایش چشم", emoji: "👁️" },
      { href: "/products?cat=brow", label: "آرایش ابرو", emoji: "🖌️" },
      { href: "/products?cat=lip", label: "آرایش لب", emoji: "💋" },
    ],
  },
  { href: "/products?cat=body", label: "محصولات بهداشتی", emoji: "🧼" },
  { href: "/products?cat=hair", label: "محصولات مو", emoji: "💇‍♀️" },
  { href: "/products?cat=perfume", label: "عطر و اسپری", emoji: "🌸" },
  { href: "/products?cat=accessory", label: "اکسسوری", emoji: "🎀" },
  { href: "/about", label: "درباره ما", emoji: "💗" },
];

export function Header() {
  const { count, openCart } = useCart();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40">
      {/* نوار اعتماد (الهام‌گرفته از UX دوشیزه) */}
      <div className="bg-brand-700 text-white text-[13px]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2">
          <span>🚚 ارسال رایگان خرید بالای ۱٬۵۰۰٬۰۰۰ تومان</span>
          <span className="hidden sm:inline">✅ ضمانت اصالت کالا</span>
          <span className="hidden md:inline">💬 پشتیبانی ۲۴ ساعته</span>
        </div>
      </div>

      {/* هدر اصلی */}
      <div className="bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
          <Link
            href="/"
            className="shrink-0 bg-linear-to-l from-brand-600 to-brand-400 bg-clip-text text-xl font-black text-transparent md:text-2xl"
          >
            سروا شاپ 🌸
          </Link>

          <div className="hidden flex-1 items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-2 md:flex">
            <input
              type="search"
              placeholder="جستجو در محصولات…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-brand-300"
            />
            <span className="mr-2 text-brand-500">🔍</span>
          </div>

          <div className="mr-auto flex items-center gap-1.5 md:mr-0">
            <Link
              href="/login"
              className="hidden items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-brand-800 hover:bg-brand-50 sm:flex"
              aria-label="ورود / ثبت‌نام"
            >
              <span className="text-base">👤</span>
              <span>ورود</span>
            </Link>
            <button
              onClick={openCart}
              className="relative flex items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-700"
              aria-label="سبد خرید"
            >
              <span className="text-base">🛍</span>
              <span className="hidden sm:inline">سبد خرید</span>
              {count > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-900 px-1 text-[11px] text-white">
                  {faNum.format(count)}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* نوبار اصلی — آیتمها از راست: صفحه اصلی، آرایشی، بهداشتی، مو، عطر، اکسسوری، درباره ما */}
      <nav className="bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-1 px-4">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  onClick={() =>
                    setOpenMenu(openMenu === item.label ? null : item.label)
                  }
                  aria-expanded={openMenu === item.label}
                  className={`flex items-center gap-1.5 rounded-t-xl px-3 py-3 text-sm font-bold transition-colors ${
                    openMenu === item.label
                      ? "text-brand-600"
                      : "text-brand-900 hover:text-brand-600"
                  }`}
                >
                  <span className="text-base">{item.emoji}</span>
                  <span>{item.label}</span>
                  <svg
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      openMenu === item.label ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* پنل کشویی */}
                <div
                  className={`absolute right-0 top-full z-50 w-52 rounded-2xl border border-brand-100 bg-white p-2 shadow-xl shadow-brand-200/40 transition-all duration-200 ${
                    openMenu === item.label
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <Link
                    href="/products"
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-bold text-brand-600 transition-colors hover:bg-brand-50"
                  >
                    <span>🛍️</span>
                    <span>مشاهده همه محصولات</span>
                  </Link>
                  <div className="my-1 border-t border-brand-100" />
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpenMenu(null)}
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm text-brand-900 transition-colors hover:bg-brand-50 hover:text-brand-600"
                    >
                      <span className="text-base">{child.emoji}</span>
                      <span>{child.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="flex items-center gap-1.5 rounded-xl px-3 py-3 text-sm font-bold text-brand-900 transition-colors hover:text-brand-600"
              >
                <span className="text-base">{item.emoji}</span>
                <span>{item.label}</span>
              </Link>
            ),
          )}
        </div>
      </nav>
    </header>
  );
}