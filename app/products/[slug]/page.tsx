import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/products";
import { formatPrice } from "@/lib/format";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default async function ProductPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  return (
    <main className="mx-auto grid max-w-5xl flex-1 gap-10 px-6 py-12 md:grid-cols-2">
      <div className="aspect-square bg-surface-2" />

      <div>
        <h1 className="text-3xl font-bold tracking-wide text-ink">
          {product.name}
        </h1>
        <p className="mt-2 text-xl text-accent">{formatPrice(product.price)}</p>
        <p className="mt-6 text-ink-muted">{product.description}</p>

        <h2 className="mt-10 text-xs font-bold tracking-widest text-ink-muted">
          {product.variants[0].size ? "SIZE" : "AVAILABILITY"}
        </h2>

        <ul className="mt-3 flex flex-wrap gap-2">
          {product.variants.map((v) => (
            <li
              key={v.id}
              className={
                v.stock > 0
                  ? "border border-line px-4 py-2 text-sm text-ink"
                  : "border border-line px-4 py-2 text-sm text-ink-muted/40 line-through"
              }
            >
              {v.size ?? (v.stock > 0 ? "In stock" : "Sold out")}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
