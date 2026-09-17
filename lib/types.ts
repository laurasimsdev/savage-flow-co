export type Category = "tee" | "hat" | "sticker" | "socks";

export interface Variant {
  id: string;
  size: string | null;
  color: string | null;
  stock: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  variants: Variant[];
}