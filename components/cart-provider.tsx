"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { PRODUCTS } from "@/lib/products";

export type CartItem = {
  productId: string;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (productId: string, qty?: number) => void;
  removeItem: (productId: string) => void;
  updateQty: (productId: string, qty: number) => void;
  clearCart: () => void;
  count: number;
  total: number;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "sorva-cart-v1";
const EMPTY: CartItem[] = [];

/* استور خارجی سبک برای سبد خرید (سازگار با useSyncExternalStore) */
const listeners = new Set<() => void>();
let store: CartItem[] = EMPTY;
let loaded = false;

function load() {
  if (loaded) return;
  loaded = true;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as CartItem[];
      store = Array.isArray(parsed) ? parsed : EMPTY;
    }
  } catch {
    // ignore
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): CartItem[] {
  load();
  return store;
}

function getServerSnapshot(): CartItem[] {
  return EMPTY;
}

function persist(next: CartItem[]) {
  store = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // ignore
  }
  for (const listener of listeners) listener();
}

export function CartProvider({ children }: { children: ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isCartOpen, setCartOpen] = useState(false);

  const addItem = useCallback((productId: string, qty = 1) => {
    const current = getSnapshot();
    const found = current.find((i) => i.productId === productId);
    const next = found
      ? current.map((i) =>
          i.productId === productId ? { ...i, qty: i.qty + qty } : i
        )
      : [...current, { productId, qty }];
    persist(next);
  }, []);

  const removeItem = useCallback((productId: string) => {
    persist(getSnapshot().filter((i) => i.productId !== productId));
  }, []);

  const updateQty = useCallback((productId: string, qty: number) => {
    if (qty <= 0) {
      persist(getSnapshot().filter((i) => i.productId !== productId));
      return;
    }
    persist(
      getSnapshot().map((i) =>
        i.productId === productId ? { ...i, qty } : i
      )
    );
  }, []);

  const clearCart = useCallback(() => persist([]), []);

  const count = items.reduce((acc, i) => acc + i.qty, 0);

  const total = useMemo(
    () =>
      items.reduce((acc, i) => {
        const p = PRODUCTS.find((pr) => pr.id === i.productId);
        return acc + (p ? p.price * i.qty : 0);
      }, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isCartOpen,
        openCart: () => setCartOpen(true),
        closeCart: () => setCartOpen(false),
        addItem,
        removeItem,
        updateQty,
        clearCart,
        count,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart باید داخل CartProvider استفاده شود");
  return ctx;
}