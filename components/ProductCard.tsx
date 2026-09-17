import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format";

export default function ProductCard({ product }: { product: Product }) {
  const inStock = product.variants.some((v) => v.stock > 0);

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block border border-orchid transition-colors hover:border-lime"
    >
      <div className="aspect-square bg-orchid/30" />

      <div className="flex items-baseline justify-between gap-2 p-3">
        <h3 className="font-bold tracking-wide text-mint group-hover:text-lime">
          {product.name}
        </h3>
        <span className="shrink-0 text-sm text-ice">
          {formatPrice(product.price)}
        </span>
      </div>

      {!inStock && (
        <p className="px-3 pb-3 text-xs tracking-widest text-ice/60">
          SOLD OUT
        </p>
      )}
    </Link>
  );
}
