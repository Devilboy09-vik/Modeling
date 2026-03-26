import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const portfolioImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1670132718453-70321d9ecf20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Editorial fashion shoot",
    category: "Editorial",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1762430815620-fcca603c240c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Runway walk",
    category: "Runway",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1758613654186-6ce234bf94ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Studio photoshoot",
    category: "Studio",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1568253130222-5fc7d0173808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "High fashion",
    category: "Editorial",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1654460274151-9c8826f43175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Outdoor photoshoot",
    category: "Outdoor",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1614942917889-c1f6a8ad933a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    alt: "Fashion pose",
    category: "Studio",
  },
];

export function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // 👉 Next / Prev functions
  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % portfolioImages.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + portfolioImages.length) % portfolioImages.length
      );
    }
  };

  // 👉 Keyboard support
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <section className="py-40 px-5 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl tracking-wider mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            PORTFOLIO
          </motion.h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative aspect-[3/4] overflow-hidden cursor-pointer group"
              onClick={() => setSelectedIndex(index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition" />

              <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition">
                {image.category}
              </div>
            </motion.div>
          ))}
        </div>

        {/* LIGHTBOX WITH SLIDER */}
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 text-white text-4xl"
              onClick={() => setSelectedIndex(null)}
            >
              ×
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 text-white text-4xl"
              onClick={prevImage}
            >
              ‹
            </button>

            {/* Image */}
            <motion.img
              key={selectedIndex}
              src={portfolioImages[selectedIndex].src}
              className="max-h-[90vh] max-w-full object-contain rounded-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            />

            {/* Next */}
            <button
              className="absolute right-4 text-white text-4xl"
              onClick={nextImage}
            >
              ›
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}