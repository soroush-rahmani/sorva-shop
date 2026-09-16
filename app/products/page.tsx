import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { CartDrawer } from "@/components/cart-drawer";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import {
  CATEGORIES,
  CATEGORY_GROUPS,
  DEALS,
  productsByCategory,
} from "@/lib/products";
import { subLabel, subcategoriesFor } from "@/lib/nav";

export const metadata: Metadata = {
  title: "محصولات",
};

function categoryLabel(slug?: string) {
  if (!slug) return "همه محصولات";
  const group = CATEGORY_GROUPS.find((g) => g.slug === slug);
  if (group) return group.label;
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? "همه محصولات";
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string; sub?: string; deals?: string }>;
}) {
  const params = await searchParams;
  const cat = params.cat;
  const sub = params.sub;
  const deals = params.deals === "1";

  const products = deals ? DEALS : productsByCategory(cat, sub);
  const subs = subcategoriesFor(cat);
  const catLabel = categoryLabel(cat);
  const currentSubLabel = subLabel(cat, sub);
  const heading = deals
    ? "تخفیفات ویژه"
    : currentSubLabel
      ? `${catLabel} / ${currentSubLabel}`
      : catLabel;

  return (
    <>
      <Header />
      <CartDrawer />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <h1 className="text-xl font-black text-brand-900 md:text-2xl">
          {heading}
        </h1>

        {/* فیلتر زیردسته‌ها — فقط وقتی دسته‌ای انتخاب شده باشه */}
        {subs.length > 0 && !deals && (
          <div className="scrollbar-none mt-3 flex items-center gap-2 overflow-x-auto pb-1 text-sm">
            <Link
              href={`/products?cat=${cat}`}
              className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 ${
                !sub
                  ? "bg-brand-100 font-bold text-brand-800"
                  : "border border-brand-100 text-brand-700 hover:bg-brand-50"
              }`}
            >
              همه {catLabel}
            </Link>
            {subs.map((leaf) => (
              <Link
                key={leaf.slug}
                href={`/products?cat=${cat}&sub=${leaf.slug}`}
                className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 ${
                  sub === leaf.slug
                    ? "bg-brand-100 font-bold text-brand-800"
                    : "border border-brand-100 text-brand-700 hover:bg-brand-50"
                }`}
              >
                {leaf.label}
              </Link>
            ))}
          </div>
        )}

        {products.length === 0 ? (
          <div className="mt-16 text-center">
            <span className="text-6xl">🔍</span>
            <p className="mt-4 font-bold text-brand-800">
              محصولی در این دسته پیدا نشد.
            </p>
            <Link
              href="/products"
              className="mt-5 inline-block rounded-full bg-brand-600 px-6 py-2.5 font-bold text-white transition hover:bg-brand-700"
            >
              مشاهده همه محصولات
            </Link>
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