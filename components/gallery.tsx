"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type MediaType = "image" | "video";

type MediaItem = {
  type: MediaType;
  src: string;
  title: string;
};

export function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<"all" | "image" | "video">("all");

  const gallery: MediaItem[] = [
    { type: "image", src: "/kaaba-mecca-night.jpg", title: "La Kaaba Sacrée" },
    { type: "video", src: "/gallery-video-2.mp4", title: "Pèlerins en marche" },
    {
      type: "image",
      src: "/medina-mosque-green-dome.jpg",
      title: "Mosquée du Prophète ﷺ",
    },
    {
      type: "video",
      src: "/gallery-video-3.mp4",
      title: "Moments de spiritualité",
    },
    {
      type: "image",
      src: "/pilgrims-tawaf-circumambulating.jpg",
      title: "Tawaf autour de la Kaaba",
    },
  ];

  const filteredGallery =
    filter === "all" ? gallery : gallery.filter((item) => item.type === filter);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A2740]/5">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2740] mb-4">
            Galerie
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Photos & vidéos de nos voyages Umrah
          </p>

          {/* Filters */}
          <div className="flex justify-center gap-3 flex-wrap">
            {[
              { label: "Tous", value: "all" as const },
              { label: "Photos", value: "image" as const },
              { label: "Vidéos", value: "video" as const },
            ].map((btn) => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                  filter === btn.value
                    ? "bg-[#D4AF37] text-[#0A2740] border-[#D4AF37]"
                    : "bg-white text-[#0A2740] border-[#D4AF37]/50 hover:bg-[#D4AF37]/10"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
        >
          <AnimatePresence>
            {filteredGallery.map((item, i) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                onClick={() => setSelectedMedia(item)}
                className="relative group overflow-hidden rounded-lg cursor-pointer aspect-square border border-[#D4AF37]/30 shadow-md"
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="object-cover w-full h-full group-hover:scale-110 transition duration-500"
                    muted
                    onMouseEnter={(e) => {
                      e.currentTarget.currentTime = 0;
                      e.currentTarget.play();
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                )}

                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="bg-[#0A2740]/70 backdrop-blur-sm p-4 rounded-full border border-[#D4AF37]/60"
                    >
                      <Play className="w-8 h-8 text-[#D4AF37]" />
                    </motion.div>
                  </div>
                )}

                {/* Hover title */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-end p-4">
                  <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMedia(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedMedia.type === "image" ? (
                  <Image
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    width={1000}
                    height={800}
                    className="w-full rounded-lg"
                  />
                ) : (
                  <video
                    src={selectedMedia.src}
                    className="w-full rounded-lg"
                    controls
                    autoPlay
                  />
                )}

                <button
                  onClick={() => setSelectedMedia(null)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-200"
                >
                  <X className="w-6 h-6 text-black" />
                </button>

                {selectedMedia.title && (
                  <p className="text-white text-center mt-4 font-semibold">
                    {selectedMedia.title}
                  </p>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
