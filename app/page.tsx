import Link from "next/link";
import Image from "next/image";
import HeroSlideshow from "@/components/HeroSlideshow";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative flex min-h-[80vh] flex-1 items-center justify-center overflow-hidden">
        <HeroSlideshow />
        <div className="absolute inset-0 bg-surface/65" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <Image
            src="/logo-full-mint.svg"
            alt="Savage Flow Co."
            width={300}
            height={233}
            priority
          />
          <p className="mt-5 text-sm font-bold tracking-[0.3em] text-accent">
            NOTHING BEATS THE RIDE
          </p>
          <Link
            href="/shop"
            className="mt-10 border border-accent px-8 py-3 text-sm font-bold tracking-widest text-accent transition-colors hover:bg-accent hover:text-surface"
          >
            SHOP ALL
          </Link>
        </div>
      </section>
    </main>
  );
}
