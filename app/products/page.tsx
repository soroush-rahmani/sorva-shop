import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { CartDrawer } from "@/components/cart-drawer";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { CATEGORIES, DEALS, productsByCategory } from "@/lib/products";

export const metadata: Metadata = {
  title: "محصولات",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string; deals?: string }>;
}) {
  const params = await searchParams;
  const cat = params.cat;
  const deals = params.deals === "1";

  const products = deals ? DEALS : productsByCategory(cat);

  const activeLabel = deals
    ? "تخفیفات ویژه 🔥"
    : cat
      ? (CATEGORIES.find((c) => c.slug === cat)?.label ?? "همه محصولات")
      : "همه محصولات";

  return (
    <>
      <Header />
      <CartDrawer />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <h1 className="text-xl font-black text-brand-900 md:text-2xl">
          {activeLabel}
        </h1>

        {/* فیلتر دسته‌بندی */}
        <div className="scrollbar-none mt-4 flex items-center gap-2 overflow-x-auto pb-1 text-sm">
          <Link
            href="/products"
            className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 font-bold ${
              !cat && !deals
                ? "bg-brand-600 text-white"
                : "border border-brand-200 text-brand-800 hover:bg-brand-50"
            }`}
          >
            همه
          </Link>
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/products?cat=${c.slug}`}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 ${
                cat === c.slug
                  ? "bg-brand-600 font-bold text-white"
                  : "border border-brand-200 text-brand-800 hover:bg-brand-50"
              }`}
            >
              {c.emoji} {c.label}
            </Link>
          ))}
          <Link
            href="/products?deals=1"
            className={`shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 ${
              deals
                ? "bg-amber-500 font-bold text-white"
                : "border border-amber-300 text-amber-700 hover:bg-amber-50"
            }`}
          >
            🔥 تخفیفات ویژه
          </Link>
        </div>

        {products.length === 0 ? (
          <div className="mt-16 text-center">
            <span className="text-6xl">🔍</span>
            <p className="mt-4 font-bold text-brand-800">
              محصولی در این دسته پیدا نشد.
            </p>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}