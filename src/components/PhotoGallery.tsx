"use client";

import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1741637335289-c99652d3155f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Students walking on campus",
    className: "md:col-span-2 md:row-span-2", // Featured large image
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    alt: "Technology lab group discussion",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Campus nature and solar panels",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    alt: "Students studying together",
    className: "md:col-span-2 md:row-span-1", // Wide bottom image
  },
];

export default function PhotoGallery() {
  return (
    <section className="w-full py-12 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white"
          >
            Mühit və İcma
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-600 dark:text-slate-400"
          >
            Gələcəyi şəkilləndirən tələbələrimiz və gündəlik kampus həyatımız.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:auto-rows-[240px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl group ${img.className} border border-slate-200 dark:border-slate-800`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
