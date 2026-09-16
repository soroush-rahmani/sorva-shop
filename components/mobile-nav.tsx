"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/components/cart-provider";
import {
  ACCESSORY_MENU,
  HAIR_MENU,
  HYGIENE_MENU,
  MAKEUP_MENU,
  PERFUME_MENU,
} from "@/lib/nav";

const faNum = new Intl.NumberFormat("fa-IR");

type SectionItem = { label: string; href: string };
type Section = {
  slug: string;
  label: string;
  allHref: string;
  items: SectionItem[];
};

export const SECTIONS: Section[] = [
  {
    slug: "cosmetic",
    label: "محصولات آرایشی",
    allHref: "/products?cat=cosmetic",
    items: MAKEUP_MENU.map((cat) => ({
      label: cat.label,
      href: `/products?cat=${cat.slug}`,
    })),
  },
  {
    slug: "body",
    label: "محصولات بهداشتی",
    allHref: "/products?cat=body",
    items: HYGIENE_MENU.map((leaf) => ({
      label: leaf.label,
      href: `/products?cat=body&sub=${leaf.slug}`,
    })),
  },
  {
    slug: "hair",
    label: "محصولات مو",
    allHref: "/products?cat=hair",
    items: HAIR_MENU.map((leaf) => ({
      label: leaf.label,
      href: `/products?cat=hair&sub=${leaf.slug}`,
    })),
  },
  {
    slug: "perfume",
    label: "عطر و اسپری",
    allHref: "/products?cat=perfume",
    items: PERFUME_MENU.map((leaf) => ({
      label: leaf.label,
      href: `/products?cat=perfume&sub=${leaf.slug}`,
    })),
  },
  {
    slug: "accessory",
    label: "اکسسوری",
    allHref: "/products?cat=accessory",
    items: ACCESSORY_MENU.map((leaf) => ({
      label: leaf.label,
      href: `/products?cat=accessory&sub=${leaf.slug}`,
    })),
  },
];

export function MobileNav() {
  const pathname = usePathname();
  const { count, openCart } = useCart();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>("cosmetic");

  useEffect(() => {
    if (!sheetOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSheetOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [sheetOpen]);

  const isHome = pathname === "/";
  const isProducts = pathname.startsWith("/products");
  const isAccount = pathname === "/login";

  const itemClass = (active: boolean) =>
    `flex flex-col items-center justify-center gap-0.5 py-2 text-[10px] font-bold transition-colors ${
      active ? "text-brand-600" : "text-brand-900/60"
    }`;

  return (
    <>
      {/* Category Sheet backdrop */}
      <div
        onClick={() => setSheetOpen(false)}
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity md:hidden ${
          sheetOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

            {/* Category Sheet — slide-over از سمت راست مثل تامو */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="دسته‌بندی محصولات"
                className={`fixed inset-y-0 right-0 z-50 flex h-screen w-[85vw] max-w-sm flex-col bg-white shadow-xl transition-transform duration-300 md:hidden ${
          sheetOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="sticky top-0 flex items-center justify-between border-b border-brand-100 bg-white/95 px-5 py-4 backdrop-blur">
          <h2 className="font-black text-brand-900">دسته‌بندی محصولات</h2>
          <button
            onClick={() => setSheetOpen(false)}
            aria-label="بستن"
            className="grid h-9 w-9 place-items-center rounded-full text-brand-500 transition hover:bg-brand-50"
          >
            ✕
          </button>
        </div>

                <div className="flex-1 overflow-y-auto p-4 pb-8">
          <Link
            href="/products"
            onClick={() => setSheetOpen(false)}
            className="flex items-center justify-center gap-2 rounded-2xl bg-brand-600 px-4 py-3 font-bold text-white"
          >
            همه محصولات
          </Link>

          <ul className="mt-3 space-y-2">
            {SECTIONS.map((section) => {
              const expanded = openSection === section.slug;
              return (
                <li key={section.slug} className="overflow-hidden rounded-2xl border border-brand-100">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setOpenSection(expanded ? null : section.slug)}
                      aria-expanded={expanded}
                      className="flex-1 text-right px-4 py-3 font-bold text-brand-900"
                    >
                      {section.label}
                    </button>
                    <Link
                      href={section.allHref}
                      onClick={() => setSheetOpen(false)}
                      className="shrink-0 border-r border-brand-100 px-3 text-xs font-bold text-brand-600"
                    >
                      همه
                    </Link>
                  </div>
                  {expanded && (
                    <ul className="grid grid-cols-2 gap-1 p-3 pt-0">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setSheetOpen(false)}
                            className="block rounded-xl px-3 py-2 text-center text-xs text-brand-900/80 hover:bg-brand-50 hover:text-brand-600"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link
              href="/products?deals=1"
              onClick={() => setSheetOpen(false)}
              className="rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3 text-center text-sm font-bold text-amber-700"
            >
              🔥 تخفیفات ویژه
            </Link>
            <Link
              href="/about"
              onClick={() => setSheetOpen(false)}
              className="rounded-2xl border border-brand-200 bg-white px-4 py-3 text-center text-sm font-bold text-brand-800"
            >
              درباره ما
            </Link>
          </div>
                </div>
      </div>

      {/* Bottom nav bar — mobile only */}
            <nav
        aria-label="منوی اصلی موبایل"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-100 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
      >
        <ul className="grid grid-cols-4">
          <li>
            <Link href="/" aria-label="فروشگاه" className={itemClass(isHome)}>
              <span className="text-xl">🏠</span>
              <span>فروشگاه</span>
            </Link>
          </li>
          <li>
            <button
              onClick={() => setSheetOpen(true)}
              aria-expanded={sheetOpen}
              aria-label="دسته‌بندی محصولات"
              className={`w-full ${itemClass(isProducts)}`}
            >
              <span className="text-xl">☰</span>
              <span>دسته‌بندی</span>
            </button>
          </li>
          <li>
            <button
              onClick={openCart}
              aria-label={`سبد خرید${count > 0 ? ` (${count} کالا)` : ""}`}
              className={`w-full ${itemClass(false)}`}
            >
              <span className="relative text-2xl">
                🛒
                {count > 0 && (
                  <span className="absolute -right-1 -top-2 grid h-4 min-w-[1rem] place-items-center rounded-full bg-brand-600 px-1 text-[9px] font-bold text-white ring-2 ring-white">
                    {faNum.format(count)}
                  </span>
                )}
              </span>
              <span>سبد خرید</span>
            </button>
          </li>
          <li>
            <Link href="/login" aria-label="حساب من" className={itemClass(isAccount)}>
              <span className="text-xl">👤</span>
              <span>حساب من</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}