"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import Image from "next/image";

const SDGs = [
  { id: 1,  color: "#E5243B", action: "Over 500 scholarships and financial assistance grants provided annually to low-income students." },
  { id: 2,  color: "#DDA63A", action: "Campus food banks and subsidized canteens ensuring no student goes hungry." },
  { id: 3,  color: "#4C9F38", action: "Free 24/7 medical check-ups and psychological support services available on campus." },
  { id: 4,  color: "#C5192D", action: "Modernized curricula integrating sustainability across 40+ degree programmes." },
  { id: 5,  color: "#FF3A21", action: "Women's representation in STEM programmes raised to 55% through targeted outreach." },
  { id: 6,  color: "#26BDE2", action: "50+ smart water dispensers installed, saving 100,000 plastic bottles annually." },
  { id: 7,  color: "#FCC30B", action: "30% of campus energy switched to solar via new rooftop panel installations." },
  { id: 8,  color: "#A21942", action: "Campus incubator supporting 20+ student startups and driving local job creation." },
  { id: 9,  color: "#FD6925", action: "Partnerships with leading tech companies to establish 3 new advanced research labs." },
  { id: 10, color: "#DD1367", action: "Comprehensive accessibility upgrades across all campus buildings and platforms." },
  { id: 11, color: "#FD9D24", action: "Promoting green transit with free campus buses and bicycle-sharing programmes." },
  { id: 12, color: "#BF8B2E", action: "Campus-wide zero-waste initiative targeting an 80% recycling rate by 2028." },
  { id: 13, color: "#3F7E44", action: "Commitment to reach net-zero carbon emissions across all facilities by 2040." },
  { id: 14, color: "#0A97D9", action: "Coastal clean-up and conservation projects led by the Marine Biology department." },
  { id: 15, color: "#56C02B", action: "5,000 trees planted and a protected botanical garden established on campus." },
  { id: 16, color: "#00689D", action: "Public forums with global experts on human rights and ethical governance." },
  { id: 17, color: "#19486A", action: "Collaboration with 15 international universities for joint sustainability research." },
];

function getSdgIconUrl(id: number) {
  const padded = String(id).padStart(2, "0");
  return `https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${padded}.jpg`;
}

export default function SdgGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section
      id="initiatives"
      className="w-full py-16 md:py-28 bg-white dark:bg-slate-950 overflow-hidden relative"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-5%] top-[10%] w-[35%] h-[35%] bg-emerald-400/5 rounded-full blur-[120px]" />
        <div className="absolute left-[-5%] bottom-[5%] w-[25%] h-[25%] bg-blue-400/5 rounded-full blur-[100px]" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 lg:px-8 relative z-10">

        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 mb-3"
          >
            United Nations · 2030 Agenda
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white"
          >
            {t("sdg.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto"
          >
            {t("sdg.desc")}
          </motion.p>
        </div>

        {/* SDG Mosaic Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-2 md:gap-3"
        >
          {SDGs.map((sdg, index) => {
            const isHovered = hoveredId === sdg.id;

            return (
              <motion.div
                key={sdg.id}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.4, ease: "easeOut" }}
                onMouseEnter={() => setHoveredId(sdg.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden cursor-pointer shadow-sm"
                style={{ boxShadow: isHovered ? `0 8px 32px ${sdg.color}55` : undefined }}
              >
                {/* Official SDG Image */}
                <Image
                  src={getSdgIconUrl(sdg.id)}
                  alt={`SDG ${sdg.id}`}
                  fill
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 16vw, 160px"
                  className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
                  unoptimized
                />

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-2 md:p-3 transition-all duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: `linear-gradient(to top, ${sdg.color}ee 0%, ${sdg.color}99 40%, transparent 100%)`,
                  }}
                >
                  <p className="text-white text-[9px] md:text-[10px] leading-tight font-medium line-clamp-4">
                    {sdg.action}
                  </p>
                </div>

                {/* SDG number badge — top-left on hover */}
                <div
                  className={`absolute top-1.5 right-1.5 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-white text-[9px] md:text-[10px] font-bold transition-all duration-300 ${
                    isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                  style={{ backgroundColor: sdg.color }}
                >
                  {sdg.id}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-slate-400 dark:text-slate-600 mt-8"
        >
          Hover over each goal to learn about our campus initiatives · All 17 UN Sustainable Development Goals
        </motion.p>
      </div>
    </section>
  );
}
