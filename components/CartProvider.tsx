"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { CartItem } from "@/lib/types";

const STORAGE_KEY = "savage-flow-cart";

type CartContextValue = {
  items: CartItem[];
  count: number;
  add: (productId: string, variantId: string) => void;
  remove: (variantId: string) => void;
  setQuantity: (variantId: string, quantity: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // load once on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // corrupt or unavailable storage: start empty
    }
  }, []);

  // save on every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  function add(productId: string, variantId: string) {
    setItems((prev) => {
      const existing = prev.find((i) => i.variantId === variantId);
      if (existing) {
        return prev.map((i) =>
          i.variantId === variantId ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...prev, { productId, variantId, quantity: 1 }];
    });
  }

  function remove(variantId: string) {
    setItems((prev) => prev.filter((i) => i.variantId !== variantId));
  }

  function setQuantity(variantId: string, quantity: number) {
    if (quantity < 1) return remove(variantId);
    setItems((prev) =>
      prev.map((i) => (i.variantId === variantId ? { ...i, quantity } : i)),
    );
  }

  function clear() {
    setItems([]);
  }

  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, count, add, remove, setQuantity, clear }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
