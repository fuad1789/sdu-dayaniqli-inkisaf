"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "./LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-12 md:py-20 lg:py-24">
      {/* Background Campus Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-transparent to-slate-50 dark:from-slate-900/90 dark:via-slate-900/50 dark:to-slate-900" />
      </div>

      <div className="relative z-10 container max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 bg-white/50 dark:bg-slate-800/50"
        >
          <Leaf className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium tracking-wide text-primary">{t("hero.badge")}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 text-slate-900 dark:text-white"
          dangerouslySetInnerHTML={{ __html: t("hero.title") }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-medium"
        >
          {t("hero.desc")}
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
           className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0"
        >
          <button className={cn(
            "group relative px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 w-full md:w-auto",
            "bg-primary hover:bg-primary-light hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20",
            "flex items-center justify-center gap-2 cursor-pointer"
          )}>
            <span className="relative z-10">{t("hero.explore")}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </button>
          
          <button className={cn(
            "px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-semibold transition-all duration-300 w-full md:w-auto",
            "bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700",
            "hover:bg-white dark:hover:bg-slate-800 hover:-translate-y-1 hover:shadow-lg text-slate-700 dark:text-slate-200 cursor-pointer"
          )}>
            {t("hero.join")}
          </button>
        </motion.div>
      </div>

      {/* Floating 3D-like elements (Simulated with Framer Motion) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="hidden lg:block absolute right-[10%] top-[20%] w-32 h-32 rounded-3xl bg-gradient-to-br from-primary/20 to-cta/20 backdrop-blur-3xl border border-white/20 rotate-12 pointer-events-none"
      />
      <motion.div
         animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
         transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
         className="hidden lg:block absolute left-[15%] bottom-[20%] w-24 h-24 rounded-full bg-gradient-to-tr from-secondary/20 to-primary/20 backdrop-blur-3xl border border-white/20 pointer-events-none"
      />
    </section>
  );
}
