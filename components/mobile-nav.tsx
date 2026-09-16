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

type SheetNode =
  | { kind: "link"; label: string; href: string }
  | { kind: "group"; label: string; emoji: string; allHref: string; nodes: SheetNode[] };

type StackEntry = {
  title: string;
  allHref?: string;
  nodes: SheetNode[];
};

const SECTIONS: SheetNode[] = [
  {
    kind: "group",
    label: "محصولات آرایشی",
    emoji: "💄",
    allHref: "/products?cat=cosmetic",
    nodes: MAKEUP_MENU.map((cat) => ({
      kind: "group",
      label: cat.label,
      emoji: cat.emoji,
      allHref: `/products?cat=${cat.slug}`,
      nodes: cat.children.map((leaf) => ({
        kind: "link",
        label: leaf.label,
        href: `/products?cat=${cat.slug}&sub=${leaf.slug}`,
      })),
    })),
  },
  {
    kind: "group",
    label: "محصولات بهداشتی",
    emoji: "🧼",
    allHref: "/products?cat=body",
    nodes: HYGIENE_MENU.map((leaf) => ({
      kind: "link",
      label: leaf.label,
      href: `/products?cat=body&sub=${leaf.slug}`,
    })),
  },
  {
    kind: "group",
    label: "محصولات مو",
    emoji: "💇‍♀️",
    allHref: "/products?cat=hair",
    nodes: HAIR_MENU.map((leaf) => ({
      kind: "link",
      label: leaf.label,
      href: `/products?cat=hair&sub=${leaf.slug}`,
    })),
  },
  {
    kind: "group",
    label: "عطر و اسپری",
    emoji: "🌸",
    allHref: "/products?cat=perfume",
    nodes: PERFUME_MENU.map((leaf) => ({
      kind: "link",
      label: leaf.label,
      href: `/products?cat=perfume&sub=${leaf.slug}`,
    })),
  },
  {
    kind: "group",
    label: "اکسسوری",
    emoji: "🎀",
    allHref: "/products?cat=accessory",
    nodes: ACCESSORY_MENU.map((leaf) => ({
      kind: "link",
      label: leaf.label,
      href: `/products?cat=accessory&sub=${leaf.slug}`,
    })),
  },
];

export function MobileNav() {
  const pathname = usePathname();
  const { count, openCart } = useCart();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [stack, setStack] = useState<StackEntry[]>([
    { title: "دسته‌بندی محصولات", nodes: SECTIONS },
  ]);
  const [lastPathname, setLastPathname] = useState(pathname);

  // با عوض شدن مسیر، شیت بسته و استک ریست می‌شود (پترن رسمی «adjust state during render»)
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setSheetOpen(false);
    setStack([{ title: "دسته‌بندی محصولات", nodes: SECTIONS }]);
  }

  useEffect(() => {
    if (!sheetOpen) return;
    const previous = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSheetOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [sheetOpen]);

  const current = stack[stack.length - 1];
  const isHome = pathname === "/";
  const isAccount = pathname === "/login";

  const closeAndReset = () => {
    setSheetOpen(false);
    setStack([{ title: "دسته‌بندی محصولات", nodes: SECTIONS }]);
  };

  const tabClass = (active: boolean) =>
    `flex flex-col items-center justify-center gap-0.5 px-1 py-2 text-[11px] font-bold transition-colors ${
      active ? "text-brand-600" : "text-brand-900/65"
    }`;

  return (
    <>
      <div
        onClick={closeAndReset}
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity md:hidden ${
          sheetOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="دسته‌بندی محصولات"
        className={`fixed inset-y-0 right-0 z-50 flex max-h-screen w-[85vw] max-w-sm flex-col bg-white shadow-xl transition-transform duration-300 md:hidden ${
          sheetOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-brand-100 px-4 py-3">
          <div className="flex items-center gap-2">
            {stack.length > 1 && (
              <button
                onClick={() => setStack((prev) => prev.slice(0, -1))}
                aria-label="بازگشت"
                className="grid h-9 w-9 place-items-center rounded-full text-brand-700 hover:bg-brand-50"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
            <p className="font-black text-brand-900">{current.title}</p>
          </div>
          <button
            onClick={closeAndReset}
            aria-label="بستن دسته‌بندی"
            className="grid h-9 w-9 place-items-center rounded-full text-brand-700 hover:bg-brand-50"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        {current.allHref ? (
          <div className="border-b border-brand-100 px-4 py-2.5">
            <Link
              href={current.allHref}
              onClick={closeAndReset}
              className="block rounded-xl bg-brand-50 px-3.5 py-2.5 text-center text-sm font-black text-brand-700 hover:bg-brand-100"
            >
              همه {current.title}
            </Link>
          </div>
        ) : null}
        <div className="flex-1 overflow-y-auto p-3">
          <ul className="space-y-1">
            {current.nodes.map((node) => (
              <li key={node.kind === "link" ? node.href : node.label}>
                {node.kind === "link" ? (
                  <Link
                    href={node.href}
                    onClick={closeAndReset}
                    className="block rounded-xl px-3.5 py-2.5 text-sm font-bold text-brand-900 hover:bg-brand-50"
                  >
                    {node.label}
                  </Link>
                ) : (
                  <div className="flex items-center gap-1 rounded-xl hover:bg-brand-50">
                    <Link
                      href={node.allHref}
                      onClick={closeAndReset}
                      className="flex min-w-0 flex-1 items-center gap-2.5 px-3.5 py-2.5"
                    >
                      <span className="text-xl">{node.emoji}</span>
                      <span className="truncate text-sm font-black text-brand-900">
                        {node.label}
                      </span>
                    </Link>
                    <button
                      onClick={() =>
                        setStack((prev) => [
                          ...prev,
                          { title: node.label, allHref: node.allHref, nodes: node.nodes },
                        ])
                      }
                      aria-label={"دیدن زیردسته‌های " + node.label}
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-brand-500 hover:bg-brand-100 hover:text-brand-700"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <nav
        aria-label="ناوبری موبایل"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-brand-100 bg-white/95 text-center shadow-[0_-4px_16px_rgba(236,72,153,0.08)] backdrop-blur md:hidden"
      >
        <Link href="/" className={tabClass(isHome)}>
          <span className="text-xl leading-none">🏠</span>
          <span>فروشگاه</span>
        </Link>
        <button
          onClick={() => {
            setStack([{ title: "دسته‌بندی محصولات", nodes: SECTIONS }]);
            setSheetOpen(true);
          }}
          className={tabClass(sheetOpen)}
          aria-haspopup="dialog"
        >
          <span className="text-xl leading-none">🗂️</span>
          <span>دسته‌بندی</span>
        </button>
        <button onClick={openCart} className={tabClass(false)} aria-label="سبد خرید">
          <span className="relative text-xl leading-none">
            🛒
            {count > 0 ? (
              <span className="absolute -left-2 -top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-brand-600 px-1 text-[10px] font-black text-white ring-2 ring-white">
                {faNum.format(count)}
              </span>
            ) : null}
          </span>
          <span>سبد خرید</span>
        </button>
        <Link href="/login" className={tabClass(isAccount)}>
          <span className="text-xl leading-none">👤</span>
          <span>حساب من</span>
        </Link>
      </nav>
    </>
  );
}