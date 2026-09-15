"use client";

import Link from "next/link";
import { CATEGORIES } from "@/lib/products";
import { useCart } from "@/components/cart-provider";
import { useSyncExternalStore } from "react";

const faNum = new Intl.NumberFormat("fa-IR");

function subscribeScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

export function Header() {
  const { count, openCart } = useCart();
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 8,
    () => false,
  );

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

      {/* منوی دسته‌بندی (UX کاتالوگ دوشیزه) — خط زیرین با ::after از راست پدیدار میشود */}
      <nav className={`nav-underline bg-white ${scrolled ? "is-scrolled" : ""}`}>
        <div className="scrollbar-none mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-4 py-2 text-sm">
          <Link
            href="/products"
            className="shrink-0 rounded-full bg-brand-600 px-4 py-1.5 font-bold text-white"
          >
            همه محصولات
          </Link>
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/products?cat=${c.slug}`}
              className="shrink-0 whitespace-nowrap rounded-full border border-brand-200 px-4 py-1.5 text-brand-800 hover:bg-brand-50"
            >
              {c.emoji} {c.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}