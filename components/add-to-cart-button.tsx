"use client";

import { useCart } from "@/components/cart-provider";
import { useState, type CSSProperties } from "react";

/* رژ و قلبهایی که موقع کلیک به بیرون فوران میکنند */
const BURST_EMOJIS = ["💄", "💄", "💋", "💗", "💗", "💄", "🛒", "✨"];

type Particle = {
  id: number;
  emoji: string;
  dx: number;
  dy: number;
  rot: number;
  delay: number;
};

export function AddToCartButton({
  productId,
  compact = false,
}: {
  productId: string;
  compact?: boolean;
}) {
  const { addItem, openCart } = useCart();
  const [particles, setParticles] = useState<Particle[]>([]);

  const handleClick = () => {
    addItem(productId);
    if (!compact) openCart();

    /* فوران رژ و قلب صورتی */
    const batch: Particle[] = BURST_EMOJIS.map((emoji, i) => {
      const angle =
        (i / BURST_EMOJIS.length) * Math.PI * 2 + Math.random() * 0.7;
      const dist = 46 + Math.random() * 36;
      return {
        id: Date.now() + i,
        emoji,
        dx: Math.cos(angle) * dist,
        dy: Math.sin(angle) * dist - 16,
        rot: (Math.random() - 0.5) * 180,
        delay: i * 30,
      };
    });
    setParticles(batch);
    window.setTimeout(() => setParticles([]), 1200);
  };

  return (
    <button
      onClick={handleClick}
      className={`group/btn relative overflow-visible rounded-full bg-brand-100 font-bold text-brand-800 transition-colors hover:bg-brand-300 ${
        compact ? "px-4 py-2 text-sm" : "w-full px-6 py-3 text-base"
      }`}
      aria-label={`افزودن به سبد خرید`}
    >
      {/* متن اصلی — با هاور محو میشود */}
      <span className="block transition-all duration-300 group-hover/btn:scale-75 group-hover/btn:opacity-0">
        افزودن به سبد خرید
      </span>

      {/* آیکون سبد خرید — با هاور از بالا سر میخورد به مرکز */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 grid place-items-center"
      >
        <span className="text-xl leading-none opacity-0 transition-all duration-300 -translate-y-[180%] group-hover/btn:translate-y-0 group-hover/btn:opacity-100">
          🛒
        </span>
      </span>

      {/* ذرات فوران */}
      {particles.map((p) => (
        <span
          key={p.id}
          aria-hidden
          className="sorva-particle text-base"
          style={
            {
              "--bx": `${p.dx}px`,
              "--by": `${p.dy}px`,
              "--br": `${p.rot}deg`,
              animationDelay: `${p.delay}ms`,
            } as CSSProperties
          }
        >
          {p.emoji}
        </span>
      ))}
    </button>
  );
}