/* ساختار منوی فروشگاه — منبع واحد برای هدر، فیلتر محصولات و صفحات دسته */

export type NavLeaf = {
  slug: string;
  label: string;
  emoji: string;
};

export type NavCategory = {
  slug: string;
  label: string;
  emoji: string;
  children: NavLeaf[];
};

/* زیرزیردستههای آرایشی — لینکها به /products?cat=X&sub=Y */
export const MAKEUP_MENU: NavCategory[] = [
  {
    slug: "face",
    label: "آرایش صورت",
    emoji: "🪞",
    children: [
      { slug: "foundation", label: "کرم پودر و فاندیشن", emoji: "🧴" },
      { slug: "concealer", label: "کانسیلر و تصحیح رنگ", emoji: "🫧" },
      { slug: "blush", label: "رژگونه", emoji: "🍑" },
      { slug: "powder-highlighter", label: "پودر و هایلایتر", emoji: "✨" },
      { slug: "primer-fixer", label: "پرایمر و فیکساتور", emoji: "💦" },
    ],
  },
  {
    slug: "eye",
    label: "آرایش چشم",
    emoji: "👁️",
    children: [
      { slug: "eyeshadow", label: "سایه چشم", emoji: "🎨" },
      { slug: "mascara", label: "ریمل", emoji: "🖤" },
      { slug: "eyeliner", label: "خط چشم", emoji: "🖋️" },
      { slug: "eye-pencil", label: "مداد چشم", emoji: "✏️" },
    ],
  },
  {
    slug: "brow",
    label: "آرایش ابرو",
    emoji: "🖌️",
    children: [
      { slug: "brow-gel", label: "ژل ابرو", emoji: "💧" },
      { slug: "brow-growth", label: "تقویت ابرو", emoji: "🌱" },
      { slug: "brow-grooming", label: "اصلاح ابرو", emoji: "🪒" },
      { slug: "brow-pencil-shadow", label: "مداد و سایه ابرو", emoji: "✏️" },
    ],
  },
  {
    slug: "lip",
    label: "آرایش لب",
    emoji: "💋",
    children: [
      { slug: "lipstick", label: "رژ لب", emoji: "💄" },
      { slug: "lip-gloss", label: "برق لب", emoji: "💎" },
      { slug: "lip-tint", label: "تینت لب", emoji: "🍒" },
      { slug: "lip-pencil", label: "مداد لب", emoji: "🖍️" },
      { slug: "lip-balm", label: "بامز و مرطوب‌کننده لب", emoji: "💗" },
    ],
  },
];