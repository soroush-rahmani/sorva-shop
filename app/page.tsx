import { Header } from "@/components/header";
import { CartDrawer } from "@/components/cart-drawer";
import { HeroSlider } from "@/components/hero-slider";
import { CategoryIcons } from "@/components/category-icons";
import { ProductSection } from "@/components/product-section";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { NEW_PRODUCTS, DEALS } from "@/lib/products";

export default function Home() {
  return (
    <>
      <Header />
      <CartDrawer />
      <main>
        <HeroSlider />
        <CategoryIcons />

        <ProductSection
          title="جدیدترین محصولات ✨"
          subtitle="تازه‌های رسیده به سروا"
          products={NEW_PRODUCTS}
        />

        <ProductSection
          title="تخفیفات روزانه 🔥"
          subtitle="پیشنهادهای ویژه با بهترین قیمت"
          products={DEALS}
        />

        {/* باکس اعتمادسازی (UX دوشیزه) */}
        <section className="border-y border-brand-100 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-10 md:grid-cols-4">
            {[
              { icon: "🚚", title: "ارسال سریع", desc: "ارسال رایگان بالای ۱٫۵ میلیون" },
              { icon: "✅", title: "ضمانت اصالت", desc: "همه محصولات اورجینال" },
              { icon: "🛡", title: "پرداخت امن", desc: "درگاه زرین‌پال و کارت به کارت" },
              { icon: "💬", title: "پشتیبانی ۲۴/۷", desc: "پاسخ‌گویی در تمام ساعات" },
            ].map((b) => (
              <div
                key={b.title}
                className="flex flex-col items-center gap-2 rounded-2xl bg-brand-50 p-5 text-center"
              >
                <span className="text-3xl">{b.icon}</span>
                <p className="font-bold text-brand-900">{b.title}</p>
                <p className="text-xs text-brand-500">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <Faq />
      </main>
      <Footer />
    </>
  );
}
