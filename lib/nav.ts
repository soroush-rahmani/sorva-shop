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

/* زیردستههای بهداشتی — لینکها به /products?cat=body&sub=Y */
export const HYGIENE_MENU: NavLeaf[] = [
  { slug: "shaving", label: "اصلاح صورت و بدن", emoji: "🪒" },
  { slug: "body-care", label: "مراقبت از بدن", emoji: "🧼" },
  { slug: "face-care", label: "مراقبت از صورت (اسکین کر)", emoji: "🧴" },
  { slug: "accessories", label: "لوازم جانبی", emoji: "🧰" },
];

/* زیرزیردستههای آرایشی — لینکها به /products?cat=X&sub=Y */
export const MAKEUP_MENU: NavCategory[] = [
  {
    slug: "face",
    label: "آرایش صورت",
    emoji: "🪞",
    children: [
      { slug: "foundation", label: "کرم پودر", emoji: "🧴" },
      { slug: "concealer", label: "کانسیلر", emoji: "🫧" },
      { slug: "blush", label: "رژگونه", emoji: "🍑" },
      { slug: "contour", label: "کانتور", emoji: "🪄" },
      { slug: "highlighter", label: "هایلایتر", emoji: "✨" },
      { slug: "powder-pancake", label: "پودر فیکس و پنکیک", emoji: "☁️" },
      { slug: "primer", label: "پرایمر", emoji: "💦" },
      { slug: "fixing-spray", label: "اسپری فیکساتور", emoji: "🌬️" },
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
      { slug: "false-lashes", label: "مژه مصنوعی", emoji: "🦋" },
      { slug: "lash-growth", label: "تقویت مژه", emoji: "🌿" },
    ],
  },
  {
    slug: "brow",
    label: "آرایش ابرو",
    emoji: "🖌️",
    children: [
      { slug: "brow-pencil-shadow", label: "مداد و سایه ابرو", emoji: "✏️" },
      { slug: "brow-gel", label: "ژل ابرو", emoji: "💧" },
      { slug: "brow-grooming", label: "اصلاح ابرو", emoji: "🪒" },
      { slug: "brow-growth", label: "تقویت ابرو", emoji: "🌱" },
    ],
  },
  {
    slug: "lip",
    label: "آرایش لب",
    emoji: "💋",
    children: [
      { slug: "lipstick", label: "رژلب جامد و مایع", emoji: "💄" },
      { slug: "lip-gloss-balm", label: "لیپ گلاس و بالم", emoji: "💎" },
      { slug: "lip-liner", label: "خط لب", emoji: "🖍️" },
      { slug: "tint-peeloff", label: "تینت و پیلاف", emoji: "🍒" },
      { slug: "lip-plumper", label: "حجم‌دهنده لب", emoji: "💋" },
    ],
  },
];