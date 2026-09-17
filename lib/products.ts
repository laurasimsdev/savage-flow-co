import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "p1",
    slug: "chainring-tee",
    name: "Chainring Tee",
    description:
      "The tooth-ring mark, screenprinted on heavyweight cotton. Softer than it looks.",
    price: 3200,
    category: "tee",
    image: "/products/chainring-tee.jpg",
    variants: [
      { id: "v1", size: "S", color: "Plum", stock: 4 },
      { id: "v2", size: "M", color: "Plum", stock: 11 },
      { id: "v3", size: "L", color: "Plum", stock: 7 },
      { id: "v4", size: "XL", color: "Plum", stock: 0 },
    ],
  },
  {
    id: "p2",
    slug: "flow-state-cap",
    name: "Flow State Cap",
    description: "Six-panel, curved brim, embroidered wave on the front.",
    price: 2800,
    category: "hat",
    image: "/products/flow-state-cap.jpg",
    variants: [{ id: "v5", size: null, color: "Black", stock: 22 }],
  },
  {
    id: "p3",
    slug: "tooth-ring-sticker",
    name: "Tooth Ring Sticker",
    description: "Four inches, weatherproof vinyl. Put it on the down tube.",
    price: 500,
    category: "sticker",
    image: "/products/tooth-ring-sticker.jpg",
    variants: [{ id: "v6", size: null, color: null, stock: 140 }],
  },
  {
    id: "p4",
    slug: "trail-socks",
    name: "Trail Socks",
    description: "Crew height, lime stripe, holds up to a full day of laps.",
    price: 1600,
    category: "socks",
    image: "/products/trail-socks.jpg",
    variants: [
      { id: "v7", size: "S/M", color: "Lime", stock: 9 },
      { id: "v8", size: "L/XL", color: "Lime", stock: 3 },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}