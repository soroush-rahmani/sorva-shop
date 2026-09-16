import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { CartDrawer } from "@/components/cart-drawer";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "درباره ما",
  description:
    "سروا شاپ فروشگاه آنلاین لوازم آرایشی و بهداشتی؛ اصالت کالا، ارسال سریع و مشاوره رایگان زیبایی.",
};

const VALUES: { emoji: string; title: string; text: string }[] = [
  {
    emoji: "💎",
    title: "ضمانت اصالت کالا",
    text: "همه محصولات از نمایندگی‌های رسمی تأمین می‌شوند و کالای غیراصل هرگز عرضه نمی‌کنیم.",
  },
  {
    emoji: "🚚",
    title: "ارسال سریع",
    text: "ارسال به سراسر ایران؛ سفارش‌های تهران در همان روز و شهرستان‌ها در ۲ تا ۳ روز کاری.",
  },
  {
    emoji: "💬",
    title: "مشاوره رایگان",
    text: "تیم ما در انتخاب محصول مناسب پوست و موی تو کنارت است؛ از خرید اشتباه دور می‌مانی.",
  },
  {
    emoji: "🎁",
    title: "هدیه با هر سفارش",
    text: "با هر سفارش یک نمونه (ساشه) رایگان از محصولات محبوب سروا هدیه می‌گیری.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <CartDrawer />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
        <section className="rounded-3xl bg-linear-to-l from-brand-600 via-brand-500 to-fuchsia-400 px-6 py-12 text-white md:px-12">
          <p className="mb-3 inline-block rounded-full bg-white/20 px-4 py-1 text-sm">
            🌸 داستان سروا
          </p>
          <h1 className="text-2xl font-black leading-snug md:text-4xl">
            زیباییت سزاوار بهترین‌هاست
          </h1>
          <p className="mt-4 max-w-2xl leading-8 text-white/90">
            سروا شاپ با یک هدف ساده شروع شد: اینکه پیدا کردن لوازم آرایشی و
            بهداشتی اصل، بدون گشتن بین ده‌ها فروشگاه، ساده و مطمئن باشد. امروز
            برای هزاران مشتری، انتخاب روتین زیبایی از سروا شروع می‌شود.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-full bg-white px-6 py-3 font-bold text-brand-700 transition hover:bg-brand-50"
            >
              مشاهده محصولات
            </Link>
            <Link
              href="/products?deals=1"
              className="rounded-full border-2 border-white/70 px-6 py-3 font-bold transition hover:bg-white/10"
            >
              تخفیفات ویژه
            </Link>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-black text-brand-900 md:text-2xl">
            چرا سروا؟
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-brand-100 bg-white p-5 shadow-sm"
              >
                <span className="text-3xl">{v.emoji}</span>
                <h3 className="mt-3 font-bold text-brand-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-900/70">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-brand-50 p-6 md:col-span-2">
            <h2 className="font-black text-brand-900">راه‌های ارتباطی</h2>
            <p className="mt-3 text-sm leading-7 text-brand-900/70">
              سؤالی درباره محصولات داری یا در انتخاب شک داری؟ کافیه پیام بدی؛
              هر روز از ۹ صبح تا ۹ شب پاسخگو هستیم.
            </p>
            <ul className="mt-4 space-y-2 text-sm font-bold text-brand-800">
              <li>
                پشتیبانی تلگرام:{" "}
                <a
                  href="https://t.me/sushikhan83"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:text-brand-700"
                >
                  @sushikhan83
                </a>
              </li>
              <li>ایمیل: support@sorvashop.ir</li>
              <li>ساعت پاسخگویی: ۹ تا ۲۱</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-brand-600 p-6 text-white">
            <span className="text-4xl">💄</span>
            <h2 className="mt-3 font-black">اگه مطمئن نیستی چی بگیری</h2>
            <p className="mt-2 text-sm leading-7 text-white/90">
              همه محصولات را با دسته‌بندی دقیق دسته‌بندی کرده‌ایم تا در چند
              ثانیه محصول مناسب پوست، مو یا سلیقه‌ات را پیدا کنی.
            </p>
            <Link
              href="/products"
              className="mt-5 inline-block rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-700 transition hover:bg-brand-50"
            >
              شروع خرید
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}