/** قیمت را با ارقام فارسی و جداکننده هزارگان + واحد تومان برمی‌گرداند */
export function formatPrice(value: number): string {
  return `${new Intl.NumberFormat("fa-IR").format(value)} تومان`;
}

/** درصد تخفیف با ارقام فارسی */
export function discountPercent(price: number, original: number): number {
  return Math.round((1 - price / original) * 100);
}

/** قالب‌بندی امتیاز */
export function formatRating(value: number): string {
  return new Intl.NumberFormat("fa-IR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
}