import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <main className="flex-1 bg-plum px-6 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-widest text-mint sm:text-5xl">
          <Image
            src="/logo-full.svg"
            alt="Savage Flow Co."
            width={320}
            height={248}
            className="mx-auto"
            priority
          />
        </h1>
        <p className="mt-3 text-sm font-bold tracking-[0.3em] text-lime">
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
