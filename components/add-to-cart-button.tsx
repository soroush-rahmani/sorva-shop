"use client";

import { useCart } from "@/components/cart-provider";

export function AddToCartButton({ productId }: { productId: string }) {
  const { addItem, openCart } = useCart();

  return (
    <button
      onClick={() => {
        addItem(productId);
        openCart();
      }}
      className="w-full rounded-full bg-brand-600 px-6 py-3 font-black text-white transition hover:bg-brand-700"
    >
      🛍 افزودن به سبد خرید
    </button>
  );
}