"use client";

import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import { useCart } from "@/components/cart-provider";
import { formatPrice } from "@/lib/format";

const faNum = new Intl.NumberFormat("fa-IR");

export function CartDrawer() {
  const { items, isCartOpen, closeCart, updateQty, removeItem, total, count } =
    useCart();

  return (
    <>
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity ${
          isCartOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="سبد خرید"
      >
        <div className="flex items-center justify-between border-b border-brand-100 p-4">
          <h2 className="text-lg font-black text-brand-900">
            سبد خرید ({faNum.format(count)} مورد)
          </h2>
          <button
            onClick={closeCart}
            className="grid h-9 w-9 place-items-center rounded-full text-brand-500 transition hover:bg-brand-50"
            aria-label="بستن سبد خرید"
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center">
            <span className="text-6xl">🛍</span>
            <p className="font-bold text-brand-800">سبد خریدت خالیه!</p>
            <p className="text-sm text-brand-400">
              کلی برند جدید منتظرته 🌸
            </p>
            <Link
              href="/products"
              onClick={closeCart}
              className="mt-2 rounded-full bg-brand-600 px-5 py-2 text-sm font-bold text-white transition hover:bg-brand-700"
            >
              مشاهده محصولات
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-brand-50 overflow-y-auto">
              {items.map((item) => {
                const product = PRODUCTS.find((p) => p.id === item.productId);
                if (!product) return null;
                return (
                  <li key={item.productId} className="flex gap-3 p-4">
                    <div
                      className={`grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-linear-to-br text-3xl ${product.gradient}`}
                    >
                      {product.emoji}
                    </div>
                    <div className="flex flex-1 flex-col">
                      <p className="text-sm font-bold text-brand-900">
                        {product.name}
                      </p>
                      <p className="text-xs text-brand-400">
                        {formatPrice(product.price)}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          onClick={() => updateQty(item.productId, item.qty - 1)}
                          className="grid h-7 w-7 place-items-center rounded-full border border-brand-200 text-brand-600 transition hover:bg-brand-50"
                          aria-label="کم کردن تعداد"
                        >
                          −
                        </button>
                        <span className="min-w-6 text-center text-sm font-bold">
                          {faNum.format(item.qty)}
                        </span>
                        <button
                          onClick={() => updateQty(item.productId, item.qty + 1)}
                          className="grid h-7 w-7 place-items-center rounded-full border border-brand-200 text-brand-600 transition hover:bg-brand-50"
                          aria-label="زیاد کردن تعداد"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.productId)}
                          className="mr-auto text-xs text-brand-400 transition hover:text-brand-600"
                        >
                          حذف
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-brand-100 p-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-brand-900">جمع کل</span>
                <span className="text-lg font-black text-brand-700">
                  {formatPrice(total)}
                </span>
              </div>
              <button className="mt-3 w-full rounded-full bg-brand-600 py-3 font-black text-white transition hover:bg-brand-700">
                ثبت سفارش و پرداخت
              </button>
              <p className="mt-2 text-center text-xs text-brand-400">
                پرداخت امن از طریق درگاه زرین‌پال 🔒
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}