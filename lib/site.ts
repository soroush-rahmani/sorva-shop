/* ثابت‌های سراسری سایت — منبع واحد برای متادیتا، sitemap و robots */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sorvashop.ir"
).replace(/\/$/, "");

export const SITE_NAME = "سروا شاپ";

export const SITE_DESCRIPTION =
  "سروا شاپ؛ فروشگاه آنلاین لوازم آرایشی و بهداشتی با جدیدترین برندها، ضمانت اصالت کالا، ارسال سریع و مشاوره رایگان زیبایی.";