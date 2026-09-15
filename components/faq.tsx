const FAQS = [
  {
    q: "هزینه ارسال چقدر است؟",
    a: "خرید بالای ۱٬۵۰۰٬۰۰۰ تومان ارسال رایگان است. برای مبالغ کمتر، هزینه پست پیشتاز ۱۳۰ هزار تومان و تحویل ۴ تا ۵ روز کاری است. امکان ارسال تیپاکس درب منزل (۴۸ ساعته) هم وجود دارد.",
  },
  {
    q: "امکان پرداخت کارت به کارت هست؟",
    a: "بله؛ در مرحله آخر ثبت سفارش می‌توانید از طریق درگاه امن زرین‌پال یا کارت به کارت (با ارسال اسکرین‌شات) پرداخت را انجام دهید.",
  },
  {
    q: "اصالت و کیفیت کالاها تضمین می‌شود؟",
    a: "تمام محصولات سروا شاپ اورجینال هستند و با ضمانت اصالت ارسال می‌شوند. در صورت مغایرت کالا، مرجوعی حق شماست.",
  },
  {
    q: "مرجوعی محصول چگونه است؟",
    a: "در صورتی که رنگ یا نوع کالا اشتباه ارسال شده باشد یا بسته آسیب دیده باشد، تا ۷ روز فرصت دارید کالا را مرجوع کنید.",
  },
  {
    q: "چطور سفارشم را پیگیری کنم؟",
    a: "بعد از ثبت سفارش، کد رهگیری تا ۴۸ ساعت بعد از طریق پیامک و کانال تلگرام سروا برای شما ارسال می‌شود.",
  },
];

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h2 className="text-center text-xl font-black text-brand-900 md:text-2xl">
        سوالات متداول 🤔
      </h2>
      <div className="mt-6 space-y-3">
        {FAQS.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-brand-100 bg-white p-4 open:ring-1 open:ring-brand-200"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-3 font-bold text-brand-900">
              <span>{f.q}</span>
              <span className="text-brand-400 transition group-open:rotate-45">
                ＋
              </span>
            </summary>
            <p className="mt-3 text-sm leading-7 text-brand-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}