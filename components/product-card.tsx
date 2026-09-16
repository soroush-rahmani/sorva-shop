"use client";

import Link from "next/link";
import type { Product } from "@/lib/products";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { discountPercent, formatPrice } from "@/lib/format";

const faNum = new Intl.NumberFormat("fa-IR");

/* عکس دوم (نمای متفاوت) هر محصول برای هاور — تا عکسهای واقعی اضافه شوند */
const ALT_EMOJI: Record<string, string> = {
  p1: "💋",
  p2: "💋",
  p3: "🎨",
  p4: "👁️",
  p5: "🖌️",
  p6: "🧴",
  p7: "🧴",
  p8: "🧖‍♀️",
  p9: "💄",
  p10: "✨",
};

export function ProductCard({ product }: { product: Product }) {
  const hasDiscount =
    product.originalPrice != null && product.originalPrice > product.price;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition hover:shadow-lg">
      <Link href={`/products/${product.slug}`} className="relative block">
        {/* تصویر اول */}
        <div
          className={`flex h-52 items-center justify-center bg-linear-to-br text-7xl transition-transform duration-500 group-hover:scale-95 ${product.gradient}`}
        >
          {product.emoji}
        </div>

        {/* تصویر دوم — با هاور از مقیاس کوچک زوم میشود (scale 0.1 → 1) */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-linear-to-br text-8xl opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 scale-10 ${product.gradient}`}
        >
          <span className="drop-shadow-md">{ALT_EMOJI[product.id] ?? product.emoji}</span>
        </div>

        {hasDiscount && (
          <span className="absolute right-3 top-3 rounded-full bg-brand-600 px-2.5 py-1 text-xs font-bold text-white">
            {faNum.format(discountPercent(product.price, product.originalPrice!))}
            ٪-
          </span>
        )}
        {product.isNew && (
          <span className="absolute left-3 top-3 rounded-full bg-sky-500 px-2.5 py-1 text-xs font-bold text-white">
            جدید
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4 text-center">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-bold leading-6 text-brand-900 transition hover:text-brand-600">
            {product.name}
          </h3>
        </Link>

        {/* قیمت — با فاصله بیشتر از اسم */}
        <div className="mt-4">
          {hasDiscount && (
            <p className="text-xs text-brand-300 line-through">
              {formatPrice(product.originalPrice!)}
            </p>
          )}
          <p className="text-lg font-black text-brand-700">
            {formatPrice(product.price)}
          </p>
        </div>

        {/* دکمه — همیشه پایینترین نقطه کارت */}
        <div className="mt-auto pt-3">
          <AddToCartButton productId={product.id} compact />
        </div>
      </div>
    </div>
  );
}