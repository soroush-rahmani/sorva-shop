export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  categoryLabel: string;
  emoji: string;
  gradient: string;
  price: number; // قیمت فعلی به تومان
  originalPrice?: number; // قیمت اصلی (قبل از تخفیف)
  rating: number;
  reviews: number;
  isNew?: boolean;
  description: string;
};

export const CATEGORIES: {
  slug: string;
  label: string;
  emoji: string;
}[] = [
  { slug: "lip", label: "آرایش لب", emoji: "💄" },
  { slug: "eye", label: "آرایش چشم", emoji: "👁" },
  { slug: "skin", label: "مراقبت پوست", emoji: "🧴" },
  { slug: "face", label: "آرایش صورت", emoji: "✨" },
  { slug: "tools", label: "ابزار آرایش", emoji: "🪞" },
  { slug: "body", label: "مراقبت بدن", emoji: "🧼" },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "matte-lipstick-pecco",
    name: "رژ لب مات مخملی",
    brand: "پیکو",
    category: "lip",
    categoryLabel: "آرایش لب",
    emoji: "💄",
    gradient: "from-rose-200 via-pink-200 to-fuchsia-100",
    price: 385000,
    originalPrice: 550000,
    rating: 4.8,
    reviews: 124,
    isNew: true,
    description:
      "رژ لب مات با بافت مخملی و ماندگاری بالا؛ رنگدانه‌های غنی و بدون حس خشکی روی لب. مناسب استفاده روزانه و مهمانی.",
  },
  {
    id: "p2",
    slug: "cherry-lip-tint",
    name: "تینت لب ماندگار چری",
    brand: "ولورا",
    category: "lip",
    categoryLabel: "آرایش لب",
    emoji: "🍒",
    gradient: "from-pink-300 via-rose-200 to-red-100",
    price: 245000,
    originalPrice: 290000,
    rating: 4.6,
    reviews: 89,
    description:
      "تینت سبک و ماندگار با رایحه گیلاس؛ لایه‌ای و قابل ساخت تا رنگ دلخواه، بدون چسبندگی.",
  },
  {
    id: "p3",
    slug: "sakura-eyeshadow-palette",
    name: "پالت سایه ساکورا ۱۲ رنگ",
    brand: "لومینر",
    category: "eye",
    categoryLabel: "آرایش چشم",
    emoji: "🌸",
    gradient: "from-fuchsia-300 via-pink-200 to-violet-100",
    price: 620000,
    originalPrice: 890000,
    rating: 4.9,
    reviews: 210,
    isNew: true,
    description:
      "پالت ۱۲ رنگ با ترکیب مات و شایمر؛ رنگدانه‌های فوق‌العاده برای مدل‌های روزانه و عروس.",
  },
  {
    id: "p4",
    slug: "fluffy-volume-mascara",
    name: "ریمل حجم‌دهنده فرشته",
    brand: "لش بیوتی",
    category: "eye",
    categoryLabel: "آرایش چشم",
    emoji: "🖤",
    gradient: "from-slate-300 via-rose-100 to-pink-100",
    price: 340000,
    originalPrice: 425000,
    rating: 4.5,
    reviews: 97,
    description:
      "ریمل ضد آب با فرمول حجم‌دهنده و جداساز مژه؛ بدون ماسیده شدن در طول روز.",
  },
  {
    id: "p5",
    slug: "brow-pencil-viara",
    name: "مداد ابرو سه‌کاره",
    brand: "ویرا",
    category: "eye",
    categoryLabel: "آرایش چشم",
    emoji: "✏️",
    gradient: "from-amber-200 via-rose-100 to-pink-100",
    price: 98000,
    rating: 4.3,
    reviews: 45,
    description:
      "مداد ابرو با برس و اسپولین؛ کشش نرم و رنگدهی یکنواخت برای فرم‌دهی ساده ابرو.",
  },
  {
    id: "p6",
    slug: "vitamin-c-serum",
    name: "سرم ویتامین C روشن‌کننده",
    brand: "گلدن اسکین",
    category: "skin",
    categoryLabel: "مراقبت پوست",
    emoji: "🍊",
    gradient: "from-orange-200 via-amber-100 to-rose-100",
    price: 780000,
    originalPrice: 1090000,
    rating: 4.9,
    reviews: 312,
    isNew: true,
    description:
      "سرم ضدلک با ۱۵٪ ویتامین C خالص؛ روشن‌کننده پوست، ضد چروک و مناسب انواع پوست.",
  },
  {
    id: "p7",
    slug: "spf50-sunscreen",
    name: "کرم ضدآفتاب SPF50 آبرسان",
    brand: "سانگارد",
    category: "skin",
    categoryLabel: "مراقبت پوست",
    emoji: "☀️",
    gradient: "from-yellow-200 via-rose-100 to-pink-100",
    price: 495000,
    originalPrice: 650000,
    rating: 4.8,
    reviews: 268,
    description:
      "ضدآفتاب بدون چربی با SPF50 و خاصیت آبرسانی؛ مناسب پوست‌های حساس، بدون سفید شدن.",
  },
  {
    id: "p8",
    slug: "aloe-sheet-mask",
    name: "ماسک ورقه‌ای آلوئه‌ورا",
    brand: "نچرال بایو",
    category: "skin",
    categoryLabel: "مراقبت پوست",
    emoji: "🥒",
    gradient: "from-green-200 via-emerald-100 to-rose-50",
    price: 89000,
    originalPrice: 145000,
    rating: 4.4,
    reviews: 156,
    description:
      "ماسک ورقه‌ای آبرسان با عصاره آلوئه‌ورا؛ پوست را شاداب و لطیف می‌کند.",
  },
  {
    id: "p9",
    slug: "contour-brush-set",
    name: "براش کانتور و هایلایتر",
    brand: "گلوری",
    category: "tools",
    categoryLabel: "ابزار آرایش",
    emoji: "🖌️",
    gradient: "from-violet-200 via-pink-100 to-rose-100",
    price: 185000,
    rating: 4.7,
    reviews: 74,
    description:
      "مجموعه دو براش حرفه‌ای با پرز نرم و متراکم برای سایه‌زنی و هایلایت دقیق.",
  },
  {
    id: "p10",
    slug: "24h-makeup-fixer",
    name: "اسپری فیکساتور ۲۴ ساعته",
    brand: "فیکس می",
    category: "face",
    categoryLabel: "آرایش صورت",
    emoji: "💦",
    gradient: "from-sky-200 via-rose-100 to-fuchsia-100",
    price: 420000,
    originalPrice: 560000,
    rating: 4.6,
    reviews: 88,
    isNew: true,
    description:
      "فیکساتور سبک با ماندگاری ۲۴ ساعت؛ آرایش را در جای خود ثابت نگه می‌دارد و جلوی چربی را می‌گیرد.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsByCategory(category?: string): Product[] {
  if (!category) return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

export const NEW_PRODUCTS = PRODUCTS.filter((p) => p.isNew);

export const DEALS = PRODUCTS.filter((p) => p.originalPrice);