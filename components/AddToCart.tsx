"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import type { Product } from "@/lib/types";

export default function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const available = product.variants.filter((v) => v.stock > 0);
  const [selected, setSelected] = useState(available[0]?.id ?? null);
  const hasSizes = product.variants.some((v) => v.size !== null);

  if (available.length === 0) {
    return (
      <p className="mt-10 border border-line px-6 py-3 text-center text-sm tracking-widest text-ink-muted">
        SOLD OUT
      </p>
    );
  }

  return (
    <div className="mt-10">
      {hasSizes && (
        <>
          <h2 className="text-xs font-bold tracking-widest text-ink-muted">
            SIZE
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {product.variants.map((v) => (
              <li key={v.id}>
                <button
                  onClick={() => setSelected(v.id)}
                  disabled={v.stock === 0}
                  className={`border px-4 py-2 text-sm transition-colors ${
                    v.stock === 0
                      ? "border-line text-ink-muted/40 line-through"
                      : v.id === selected
                        ? "border-accent bg-accent text-surface"
                        : "border-line text-ink hover:border-accent"
                  }`}
                >
                  {v.size}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}

      <button
        onClick={() => selected && add(product.id, selected)}
        className="mt-6 w-full border border-accent px-8 py-3 text-sm font-bold tracking-widest text-accent transition-colors hover:bg-accent hover:text-surface"
      >
        ADD TO CART
      </button>
    </div>
  );
}
