import type { Metadata } from "next";
import { Header } from "@/components/header";
import { CartDrawer } from "@/components/cart-drawer";
import { Footer } from "@/components/footer";
import { AuthForm } from "@/components/auth-form";

export const metadata: Metadata = {
  title: "ورود / ثبت‌نام",
};

export default function LoginPage() {
  return (
    <>
      <Header />
      <CartDrawer />
      <main className="mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-4 py-12">
        <AuthForm />
      </main>
      <Footer />
    </>
  );
}