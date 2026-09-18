"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { Minus, Plus, X } from "lucide-react";

export default function CartPage() {
  const { items, remove, setQuantity, clear } = useCart();

  const lines = items.flatMap((item) => {
    const product = products.find((p) => p.id === item.productId);
    const variant = product?.variants.find((v) => v.id === item.variantId);
    if (!product || !variant) return [];
    return [{ ...item, product, variant }];
  });

  const subtotal = lines.reduce(
    (sum, l) => sum + l.product.price * l.quantity,
    0,
  );

  if (lines.length === 0) {
    return (
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-3xl font-bold tracking-wide text-ink">
          Your cart is empty
        </h1>
        <Link
          href="/shop"
          className="mt-8 border border-accent px-8 py-3 text-sm font-bold tracking-widest text-accent transition-colors hover:bg-accent hover:text-surface"
        >
          SHOP ALL
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold tracking-wide text-ink">Cart</h1>

      <ul className="divide-y divide-line border-y border-line">
        {lines.map((l) => (
          <li key={l.variantId} className="flex gap-5 py-6">
            <Link
              href={`/products/${l.product.slug}`}
              className="relative h-28 w-28 shrink-0 overflow-hidden bg-surface-2"
            >
              <Image
                src={l.product.image}
                alt={l.product.name}
                fill
                sizes="112px"
                className="object-cover"
              />
            </Link>

            <div className="flex flex-1 flex-col">
              <div className="flex items-baseline justify-between gap-4">
                <Link
                  href={`/products/${l.product.slug}`}
                  className="font-bold text-ink hover:text-accent"
                >
                  {l.product.name}
                </Link>
                <span className="shrink-0 text-ink">
                  {formatPrice(l.product.price * l.quantity)}
                </span>
              </div>

              <p className="mt-1 text-sm text-ink-muted">
                {l.variant.size ? `Size ${l.variant.size}` : "One size"}
                <span className="text-ink-muted/50">
                  {" · "}
                  {formatPrice(l.product.price)} each
                </span>
              </p>

              <div className="mt-auto flex items-center justify-between pt-4">
                <div className="flex items-center border border-line">
                  <button
                    onClick={() => setQuantity(l.variantId, l.quantity - 1)}
                    aria-label={`Decrease quantity of ${l.product.name}`}
                    className="px-3 py-1.5 text-ink-muted transition-colors hover:bg-surface-2 hover:text-accent"
                  >
                    <Minus size={14} />
                  </button>

                  <span className="min-w-8 text-center text-sm tabular-nums text-ink">
                    {l.quantity}
                  </span>

                  <button
                    onClick={() => setQuantity(l.variantId, l.quantity + 1)}
                    disabled={l.quantity >= l.variant.stock}
                    aria-label={`Increase quantity of ${l.product.name}`}
                    className="px-3 py-1.5 text-ink-muted transition-colors hover:bg-surface-2 hover:text-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <button
                  onClick={() => remove(l.variantId)}
                  aria-label={`Remove ${l.product.name}`}
                  className="text-ink-muted transition-colors hover:text-accent"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-baseline justify-between border-b border-line pb-4">
        <span className="text-sm tracking-widest text-ink-muted">SUBTOTAL</span>
        <span className="text-2xl text-accent tabular-nums">
          {formatPrice(subtotal)}
        </span>
      </div>

      <p className="mt-3 text-sm text-ink-muted">
        Shipping and tax calculated at checkout.
      </p>

      <button className="mt-8 w-full border border-accent px-8 py-3.5 text-sm font-bold tracking-widest text-accent transition-colors hover:bg-accent hover:text-surface">
        CHECKOUT
      </button>

      <button
        onClick={clear}
        className="mt-4 w-full py-2 text-xs tracking-widest text-ink-muted/60 transition-colors hover:text-accent"
      >
        CLEAR CART
      </button>
    </main>
  );
}
