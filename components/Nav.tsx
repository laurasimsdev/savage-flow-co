import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-10 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="group flex items-center gap-3">
          <LogoMark className="h-9 w-9 text-ink transition-colors group-hover:text-accent" />
          <span className="font-bold tracking-widest text-ink group-hover:text-accent">
            SAVAGE FLOW CO.
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/shop"
            className="text-sm font-bold tracking-widest text-ink hover:text-accent"
          >
            SHOP
          </Link>
          <Link
            href="/cart"
            className="text-sm font-bold tracking-widest text-accent hover:text-ink"
          >
            CART (0)
          </Link>
        </div>
      </div>
    </nav>
  );
}
