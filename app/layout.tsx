import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import { BackToTop } from "@/components/back-to-top";

/* فونت استعداد (Estedad) — رایگان و متنباز با لایسنس OFL، حس و حالت نزدیک به ایران یکان */
const estedad = localFont({
  src: "../public/fonts/Estedad-VF.woff2",
  weight: "100 900",
  variable: "--font-estedad",
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
    <html lang="fa" dir="rtl" className={estedad.variable}>
      <body className="font-sans min-h-full flex flex-col antialiased">
        <CartProvider>
          {children}
          <BackToTop />
        </CartProvider>
      </body>
    </html>
  );
}
