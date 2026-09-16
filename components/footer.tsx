import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-brand-200 bg-brand-200/70">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Link href="/" aria-label="سروا شاپ — صفحه اصلی">
            <Image
              src="/images/logo.png"
              alt="لوگوی سروا شاپ"
              width={96}
              height={96}
              className="h-16 w-16 object-contain md:h-20 md:w-20"
            />
          </Link>
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
      <div className="border-t border-brand-300/70 bg-brand-300/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-brand-600 sm:flex-row">
          <p className="sm:text-right">
            تمامی حقوق برای سروا شاپ محفوظ است © {new Date().getFullYear()}
          </p>
          <p>
            طراحی و توسعه با{" "}
            <span aria-hidden className="text-brand-500">
              💗
            </span>{" "}
            توسط{" "}
            <a
              href="https://t.me/sushikhan83"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-brand-700 transition-colors hover:text-brand-500"
            >
              سروش رحمانی
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}