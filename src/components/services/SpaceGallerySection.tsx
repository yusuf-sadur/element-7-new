"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

interface SpaceGallerySectionProps {
  images: StaticImageData[];
  title: string;
}

export default function SpaceGallerySection({
  images,
  title,
}: Readonly<SpaceGallerySectionProps>) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(100);
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    const current = el.scrollLeft;
    const progress = Math.min(100, Math.max(0, (current / maxScroll) * 100));
    setScrollProgress(progress);
    setCanScrollLeft(current > 10);
    setCanScrollRight(current < maxScroll - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByAmount = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.65;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const handleNextLightbox = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => ((prev ?? 0) + 1) % images.length);
  }, [selectedIndex, images.length]);

  const handlePrevLightbox = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      (prev ?? 0) === 0 ? images.length - 1 : (prev ?? 0) - 1
    );
  }, [selectedIndex, images.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNextLightbox();
      if (e.key === "ArrowLeft") handlePrevLightbox();
    },
    [selectedIndex, handleNextLightbox, handlePrevLightbox]
  );

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, handleKeyDown]);

  if (!images || images.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-warm-black py-16 md:py-24 border-t border-stone/10">
      <div className="container-e7 mb-8 md:mb-12">
        <Reveal variant="up">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-bronze">
                Build Showcase
              </p>
              <h2 className="mt-2 font-display text-[clamp(1.75rem,3.2vw,2.75rem)] font-light leading-tight text-stone">
                {title} Portfolio.
              </h2>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollByAmount("left")}
                disabled={!canScrollLeft}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-stone/20 bg-stone-900/60 text-stone transition-all duration-300 hover:border-bronze hover:bg-bronze hover:text-black disabled:opacity-30 disabled:pointer-events-none"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => scrollByAmount("right")}
                disabled={!canScrollRight}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-stone/20 bg-stone-900/60 text-stone transition-all duration-300 hover:border-bronze hover:bg-bronze hover:text-black disabled:opacity-30 disabled:pointer-events-none"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Full-Bleed Horizontal Drag/Scroll Slider */}
      <div
        ref={scrollRef}
        className="no-scrollbar flex w-full gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 md:px-12 lg:px-16"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((img, idx) => (
          <div
            key={`${title}-slide-${idx}`}
            className="group relative shrink-0 snap-start overflow-hidden rounded-2xl border border-stone/15 bg-stone-900 shadow-2xl transition-all duration-500 hover:border-bronze/50 aspect-[16/10] w-[84vw] sm:w-[68vw] md:w-[52vw] lg:w-[42vw]"
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className="relative h-full w-full block text-left focus:outline-none"
            >
              <Image
                src={img}
                alt={`${title} showcase photograph ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 84vw, (max-width: 1024px) 52vw, 42vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-70" />

              {/* Expand Icon Badge */}
              <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-stone/30 bg-black/40 text-stone backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-bronze group-hover:bg-bronze group-hover:text-black">
                <Maximize2 size={16} />
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Slider Progress Bar */}
      <div className="container-e7 mt-8 flex items-center justify-between gap-6">
        <div className="h-0.5 w-full max-w-xs overflow-hidden rounded-full bg-stone/15">
          <div
            className="h-full bg-bronze transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-stone/40">
          Drag or click arrows to explore
        </p>
      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-lg"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Header Toolbar */}
            <div
              className="absolute top-0 inset-x-0 z-10 flex items-center justify-between p-6 text-stone/80"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col">
                <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-bronze">
                  {title}
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-stone/50">
                  {selectedIndex + 1} / {images.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-stone transition-all hover:bg-white/20 hover:scale-105"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Image Container */}
            <div
              className="relative max-h-[84vh] max-w-[92vw] h-[82vh] w-[88vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex]}
                alt={`${title} expanded photograph ${selectedIndex + 1}`}
                fill
                sizes="92vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Lightbox Navigation */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevLightbox();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/50 text-stone backdrop-blur-md transition-all hover:scale-110 hover:border-bronze hover:bg-bronze hover:text-black md:left-8"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextLightbox();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/50 text-stone backdrop-blur-md transition-all hover:scale-110 hover:border-bronze hover:bg-bronze hover:text-black md:right-8"
                  aria-label="Next image"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
