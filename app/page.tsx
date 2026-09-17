import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <main className="flex-1 px-6 py-12">
      <header className="mb-12 flex flex-col items-center">
        <Image
          src="/logo-full-mint.svg"
          alt="Savage Flow Co."
          width={280}
          height={217}
          priority
        />
        <p className="mt-4 text-sm font-bold tracking-[0.3em] text-accent">
          NOTHING BEATS THE RIDE
        </p>
      </header>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
