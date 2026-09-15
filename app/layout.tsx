import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";

/* فونت ایران یکان وب (همان فونت استفاده‌شده در تاموگرل) */
const iranyekan = localFont({
  src: [
    {
      path: "../public/fonts/IRANYekanWebRegular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanWebBold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-iranyekan",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "سروا شاپ | فروشگاه لوازم آرایشی و بهداشتی",
    template: "%s | سروا شاپ",
  },
  description:
    "سروا شاپ؛ فروشگاه آنلاین لوازم آرایشی و بهداشتی با جدیدترین برندها، بهترین قیمت‌ها و ارسال سریع.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${iranyekan.variable} font-sans min-h-full flex flex-col antialiased`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
