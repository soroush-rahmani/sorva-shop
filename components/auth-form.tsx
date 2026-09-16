"use client";

import { useState } from "react";

type Mode = "login" | "register";

export function AuthForm() {
  const [mode, setMode] = useState<Mode>("login");
  const [sent, setSent] = useState(false);

  const isLogin = mode === "login";

  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border border-brand-100 bg-white p-6 shadow-sm md:p-8">
      {/* انتخاب ورود / ثبت‌نام */}
      <div className="grid grid-cols-2 gap-1 rounded-2xl bg-brand-50 p-1">
        <button
          type="button"
          onClick={() => {
            setMode("login");
            setSent(false);
          }}
          className={`rounded-xl py-2 text-sm font-bold transition ${
            isLogin
              ? "bg-white text-brand-700 shadow-sm"
              : "text-brand-900/60 hover:text-brand-700"
          }`}
        >
          ورود
        </button>
        <button
          type="button"
          onClick={() => {
            setMode("register");
            setSent(false);
          }}
          className={`rounded-xl py-2 text-sm font-bold transition ${
            !isLogin
              ? "bg-white text-brand-700 shadow-sm"
              : "text-brand-900/60 hover:text-brand-700"
          }`}
        >
          ثبت‌نام
        </button>
      </div>

      <h1 className="mt-6 text-lg font-black text-brand-900">
        {isLogin ? "به سروا شاپ خوش برگشتی 🌸" : "به خانواده سروا خوش آمدی 🌸"}
      </h1>
      <p className="mt-2 text-sm leading-6 text-brand-900/60">
        {isLogin
          ? "شماره موبایلت را وارد کن تا کد ورود برایت پیامک شود."
          : "با شماره موبایل ثبت‌نام کن؛ سفارش‌هایت را راحت پیگیری می‌کنی."}
      </p>

      {sent ? (
        <div className="mt-6 rounded-2xl bg-brand-50 p-4 text-sm leading-7 text-brand-900">
          <p className="font-bold">
            کد تأیید به شماره وارد‌شده ارسال شد ✅
          </p>
          <p className="mt-1 text-brand-900/70">
            این بخش بعد از وصل شدن سرویس پیامک فعال می‌شود و در حال حاضر نمایشی
            است.
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="mt-3 font-bold text-brand-600 hover:text-brand-700"
          >
            بازگشت
          </button>
        </div>
      ) : (
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          {!isLogin && (
            <div>
              <label
                htmlFor="fullname"
                className="mb-1.5 block text-sm font-bold text-brand-900"
              >
                نام و نام خانوادگی
              </label>
              <input
                id="fullname"
                name="fullname"
                required
                className="w-full rounded-xl border border-brand-200 bg-brand-50/40 px-4 py-2.5 text-sm outline-none transition focus:border-brand-400 focus:bg-white"
                placeholder="مثلاً سارا محمدی"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-sm font-bold text-brand-900"
            >
              شماره موبایل
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              inputMode="numeric"
              pattern="09[0-9]{9}"
              className="w-full rounded-xl border border-brand-200 bg-brand-50/40 px-4 py-2.5 text-left text-sm outline-none transition focus:border-brand-400 focus:bg-white"
              placeholder="09121234567"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-brand-600 py-3 font-bold text-white transition hover:bg-brand-700"
          >
            {isLogin ? "دریافت کد ورود" : "ثبت‌نام و دریافت کد"}
          </button>

          <p className="text-center text-xs leading-6 text-brand-900/60">
            با ادامه دادن، قوانین و حریم خصوصی سروا شاپ را می‌پذیری.
          </p>
        </form>
      )}
    </div>
  );
}