import Link from "next/link";
import type { Product } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export function ProductSection({
  title,
  subtitle,
  products,
  linkHref = "/products",
}: {
  title: string;
  subtitle?: string;
  products: Product[];
  linkHref?: string;
}) {
  if (products.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-brand-900 md:text-2xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-1 text-sm text-brand-400">{subtitle}</p>
          )}
        </div>
        <Link
          href={linkHref}
          className="shrink-0 rounded-full border border-brand-300 px-4 py-1.5 text-sm font-bold text-brand-700 transition hover:bg-brand-50"
        >
          مشاهده همه
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}