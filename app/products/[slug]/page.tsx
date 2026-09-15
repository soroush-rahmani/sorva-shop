import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { CartDrawer } from "@/components/cart-drawer";
import { Footer } from "@/components/footer";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS, getProduct, productsByCategory } from "@/lib/products";
import { discountPercent, formatPrice, formatRating } from "@/lib/format";

const faNum = new Intl.NumberFormat("fa-IR");

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product?.name ?? "محصول" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const hasDiscount =
    product.originalPrice != null && product.originalPrice > product.price;
  const related = productsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <Header />
      <CartDrawer />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        {/* مسیر صفحه */}
        <nav className="text-sm text-brand-400">
          <Link href="/" className="hover:text-brand-600">
            خانه
          </Link>
          <span className="mx-1">/</span>
          <Link href="/products" className="hover:text-brand-600">
            محصولات
          </Link>
          <span className="mx-1">/</span>
          <Link
            href={`/products?cat=${product.category}`}
            className="hover:text-brand-600"
          >
            {product.categoryLabel}
          </Link>
        </nav>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {/* تصویر محصول */}
          <div
            className={`relative flex h-80 items-center justify-center overflow-hidden rounded-3xl bg-linear-to-br text-9xl ${product.gradient}`}
          >
            <span>{product.emoji}</span>
            {hasDiscount && (
              <span className="absolute right-4 top-4 rounded-full bg-brand-600 px-3 py-1.5 text-sm font-black text-white">
                {faNum.format(discountPercent(product.price, product.originalPrice!))}
                ٪-
              </span>
            )}
            {product.isNew && (
              <span className="absolute left-4 top-4 rounded-full bg-sky-500 px-3 py-1.5 text-sm font-black text-white">
                جدید
              </span>
            )}
          </div>

          {/* اطلاعات محصول */}
          <div className="flex flex-col">
            <p className="text-sm font-bold text-brand-500">
              {product.brand} • {product.categoryLabel}
            </p>
            <h1 className="mt-2 text-2xl font-black text-brand-900 md:text-3xl">
              {product.name}
            </h1>
            <p className="mt-2 text-sm text-amber-600">
              ⭐ {formatRating(product.rating)}{" "}
              <span className="text-brand-400">
                ({faNum.format(product.reviews)} دیدگاه)
              </span>
            </p>

            <div className="mt-5 rounded-2xl bg-brand-50 p-4">
              {hasDiscount && (
                <p className="text-sm text-brand-400 line-through">
                  {formatPrice(product.originalPrice!)}
                </p>
              )}
              <p className="mt-1 text-2xl font-black text-brand-700">
                {formatPrice(product.price)}
              </p>
              {hasDiscount && (
                <p className="mt-1 text-xs font-bold text-emerald-600">
                  شما {faNum.format(discountPercent(product.price, product.originalPrice!))}٪ صرفه‌جویی می‌کنید 🎉
                </p>
              )}
            </div>

            <p className="mt-5 leading-8 text-brand-700">
              {product.description}
            </p>

            <ul className="mt-5 space-y-2 text-sm text-brand-600">
              <li>🚚 ارسال رایگان برای خرید بالای ۱٬۵۰۰٬۰۰۰ تومان</li>
              <li>✅ ضمانت اصالت کالا</li>
              <li>↩️ تا ۷ روز امکان مرجوعی</li>
            </ul>

            <div className="mt-6">
              <AddToCartButton productId={product.id} />
            </div>
          </div>
        </div>

        {/* محصولات مرتبط */}
        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xl font-black text-brand-900">
              محصولات مرتبط 🌸
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}