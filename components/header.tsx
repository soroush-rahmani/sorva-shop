"use client";

import Link from "next/link";
import Image from "next/image";
import { MAKEUP_MENU, HYGIENE_MENU, type NavLeaf } from "@/lib/nav";
import { useCart } from "@/components/cart-provider";
import { useState } from "react";

const faNum = new Intl.NumberFormat("fa-IR");

/* آیتمهای نوبار — از راست به چپ مثل دوشیزه */
const NAV_ITEMS: {
  href?: string;
  label: string;
  emoji: string;
  mega?: boolean;
  dropdown?: NavLeaf[];
  dropdownHref?: string;
}[] = [
  { href: "/", label: "صفحه اصلی", emoji: "🏡" },
  { label: "محصولات آرایشی", emoji: "💄", mega: true },
  {
    label: "محصولات بهداشتی",
    emoji: "🧼",
    dropdown: HYGIENE_MENU,
    dropdownHref: "/products?cat=body",
  },
  { href: "/products?cat=hair", label: "محصولات مو", emoji: "💇‍♀️" },
  { href: "/products?cat=perfume", label: "عطر و اسپری", emoji: "🌸" },
  { href: "/products?cat=accessory", label: "اکسسوری", emoji: "🎀" },
  { href: "/about", label: "درباره ما", emoji: "💗" },
];

export function Header() {
  const { count, openCart } = useCart();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const megaOpen = openMenu === "محصولات آرایشی";

  return (
    <header className="sticky top-0 z-40">
      

      {/* هدر اصلی */}
      <div className="bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
          <Link href="/" className="shrink-0" aria-label="سروا شاپ — صفحه اصلی">
            <Image
              src="/images/logo.png"
              alt="لوگوی سروا شاپ"
              width={112}
              height={112}
              priority
              className="h-14 w-14 object-contain md:h-16 md:w-16"
            />
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

      {/* نوبار اصلی — آیتمها از راست + مگامنو آرایشی */}
      <nav className="bg-white">
        <div
          className="relative mx-auto max-w-6xl px-4"
          onMouseLeave={() => setOpenMenu(null)}
        >
          <div className="flex items-center gap-1">
            {NAV_ITEMS.map((item) =>
              item.mega ? (
                <button
                  key={item.label}
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onClick={() =>
                    setOpenMenu(openMenu === item.label ? null : item.label)
                  }
                  aria-expanded={megaOpen}
                  className={`flex items-center gap-1.5 rounded-t-xl px-3 py-3 text-sm font-bold transition-colors ${
                    megaOpen
                      ? "text-brand-600"
                      : "text-brand-900 hover:text-brand-600"
                  }`}
                >
                  <span className="text-base">{item.emoji}</span>
                  <span>{item.label}</span>
                  <svg
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      megaOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ) : item.dropdown ? (
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
                      <path
                        d="M6 9l6 6 6-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* پنل کشویی بهداشتی */}
                  <div
                    className={`absolute right-0 top-full z-50 w-60 rounded-2xl border border-brand-100 bg-white p-2 shadow-xl shadow-brand-200/40 transition-all duration-200 ${
                      openMenu === item.label
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    <Link
                      href={item.dropdownHref!}
                      onClick={() => setOpenMenu(null)}
                      className="flex items-center gap-2 rounded-xl bg-brand-50 px-3 py-2 font-bold text-brand-800 transition-colors hover:bg-brand-100"
                    >
                      <span className="text-base">{item.emoji}</span>
                      <span>همه محصولات بهداشتی</span>
                    </Link>
                    <ul className="mt-1 space-y-0.5">
                      {item.dropdown.map((leaf) => (
                        <li key={leaf.slug}>
                          <Link
                            href={`/products?cat=body&sub=${leaf.slug}`}
                            onClick={() => setOpenMenu(null)}
                            className="block rounded-lg px-3 py-1.5 text-sm text-brand-900/80 transition-colors hover:bg-brand-50 hover:text-brand-600"
                          >
                            {leaf.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
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

          {/* مگامنو — پنل بزرگ تمامعرض با ستونهای زیردسته و زیرزیردستهها (مثل تاموگرل) */}
          <div
            className={`absolute inset-x-4 top-full z-50 rounded-2xl border border-brand-100 bg-white p-6 shadow-xl shadow-brand-200/40 transition-all duration-200 ${
              megaOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-1 opacity-0"
            }`}
          >
            <div className="grid grid-cols-4 gap-6">
              {MAKEUP_MENU.map((cat) => (
                <div key={cat.slug}>
                  <Link
                    href={`/products?cat=${cat.slug}`}
                    className="flex items-center gap-2 rounded-xl bg-brand-50 px-3 py-2 font-bold text-brand-800 transition-colors hover:bg-brand-100"
                  >
                    <span className="text-base">{cat.emoji}</span>
                    <span>{cat.label}</span>
                  </Link>
                  <ul className="mt-2 space-y-0.5">
                    {cat.children.map((leaf) => (
                      <li key={leaf.slug}>
                        <Link
                          href={`/products?cat=${cat.slug}&sub=${leaf.slug}`}
                          onClick={() => setOpenMenu(null)}
                          className="block rounded-lg px-3 py-1.5 text-sm text-brand-900/80 transition-colors hover:bg-brand-50 hover:text-brand-600"
                        >
                          {leaf.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}