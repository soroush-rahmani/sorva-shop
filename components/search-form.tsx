"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

/* فرم جستجو — با ارسال، کاربر به صفحه نتایج /products?q=… می‌رود */
export function SearchForm({ className = "" }: { className?: string }) {
  const router = useRouter();
  const params = useSearchParams();
  const [value, setValue] = useState(params.get("q") ?? "");

  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        const q = value.trim();
        router.push(q ? `/products?q=${encodeURIComponent(q)}` : "/products");
      }}
      className={`flex items-center rounded-full border border-brand-200 bg-white px-4 py-1.5 ${className}`}
    >
      <input
        type="search"
        name="q"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="جستجو در محصولات…"
        aria-label="جستجو در محصولات"
        className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-brand-300"
      />
      <button
        type="submit"
        aria-label="جستجو"
        className="mr-2 shrink-0 text-brand-500 transition-colors hover:text-brand-700"
      >
        🔍
      </button>
    </form>
  );
}