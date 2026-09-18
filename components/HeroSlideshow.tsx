"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  "/hero/hero-cliff.jpg",
  "/hero/hero-wave.jpg",
  "/hero/hero-tire.jpg",
];

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      6000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {SLIDES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="100vw"
          priority={i === 0}
          className={`object-cover transition-opacity duration-[1600ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
