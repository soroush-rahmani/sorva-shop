import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-l from-brand-600 via-brand-500 to-fuchsia-400 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="mb-3 inline-block rounded-full bg-white/20 px-4 py-1 text-sm">
            🌸 تازه‌های سروا برای پوست درخشانت
          </p>
          <h1 className="text-3xl font-black leading-snug md:text-5xl">
            زیباییت{" "}
            <span className="text-yellow-200">سزاوار بهترین‌هاست</span>
          </h1>
          <p className="mt-4 max-w-md leading-7 text-brand-50">
            سروا شاپ، فروشگاه آنلاین لوازم آرایشی و بهداشتی؛ جدیدترین برندها
            با ضمانت اصالت، ارسال سریع و قیمت مناسب.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
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
              پیشنهادهای ویژه
            </Link>
          </div>
        </div>
        <div className="hidden justify-center md:flex">
          <div className="grid h-72 w-72 rotate-6 place-items-center rounded-[2.5rem] bg-white/15 text-8xl shadow-xl backdrop-blur-sm">
            💄
          </div>
        </div>
      </div>
    </section>
  );
}