import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata = { title: "Shop" };

export default function ShopPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
      <h1 className="mb-10 text-3xl font-bold tracking-widest text-ink">
        SHOP
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} priority={i < 2} />
        ))}
      </div>
    </main>
  );
}
