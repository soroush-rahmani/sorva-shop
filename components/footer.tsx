import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-brand-100 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="bg-linear-to-l from-brand-600 to-brand-400 bg-clip-text text-lg font-black text-transparent">
            سروا شاپ 🌸
          </p>
          <p className="mt-3 text-sm leading-7 text-brand-700">
            فروشگاه آنلاین لوازم آرایشی و بهداشتی؛ جدیدترین برندها با ضمانت
            اصالت، ارسال سریع و قیمت مناسب. زیبایی، حق توست.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-brand-900">دسترسی سریع</h3>
          <ul className="mt-3 space-y-2 text-sm text-brand-600">
            <li>
              <Link href="/products" className="hover:text-brand-700">
                همه محصولات
              </Link>
            </li>
            <li>
              <Link href="/products?deals=1" className="hover:text-brand-700">
                تخفیفات ویژه
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-brand-700">
                جدیدترین محصولات
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-brand-900">خدمات مشتریان</h3>
          <ul className="mt-3 space-y-2 text-sm text-brand-600">
            <li>سوالات متداول</li>
            <li>راهنمای خرید</li>
            <li>شرایط مرجوعی</li>
            <li>پیگیری سفارش</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-brand-900">ارتباط با ما</h3>
          <ul className="mt-3 space-y-2 text-sm text-brand-600">
            <li>📱 ۰۹۱۲ ۰۰۰ ۰۱۰۱</li>
            <li>✉️ info@sorva.shop</li>
            <li>📸 اینستاگرام: @sorva.shop</li>
            <li>✈️ تلگرام: @sorva_shop</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-100 py-4 text-center text-xs text-brand-400">
        تمامی حقوق برای سروا شاپ محفوظ است © {new Date().getFullYear()}
      </div>
    </footer>
  );
}