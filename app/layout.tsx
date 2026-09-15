import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
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
        className={`${vazirmatn.variable} font-sans min-h-full flex flex-col antialiased`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
