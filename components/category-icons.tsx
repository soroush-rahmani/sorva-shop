import Link from "next/link";
import { CATEGORIES } from "@/lib/products";

export function CategoryIcons() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="text-center text-xl font-black text-brand-900 md:text-2xl">
        دسته‌بندی محصولات
      </h2>
      <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {CATEGORIES.map((c) => (
          <Link
            key={c.slug}
            href={`/products?cat=${c.slug}`}
            className="group flex flex-col items-center gap-2 rounded-2xl border border-brand-100 bg-white p-4 text-center transition hover:border-brand-300 hover:shadow-md"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-3xl transition group-hover:scale-110">
              {c.emoji}
            </span>
            <span className="text-sm font-bold text-brand-800">
              {c.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}