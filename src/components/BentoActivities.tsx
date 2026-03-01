"use client";

import { motion } from "framer-motion";
import { Download, Users, GraduationCap, Microscope, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "./LanguageContext";

export default function BentoActivities() {
  const { t } = useLanguage();
  return (
    <section className="w-full py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white"
          >
            {t("bento.title")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 text-lg"
          >
            {t("bento.desc")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto lg:auto-rows-[280px]">
          
          {/* 1. Education & Curriculum (Large card spanning 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-primary to-emerald-900 text-white group cursor-pointer min-h-[300px] lg:min-h-0 flex flex-col justify-end"
          >
            {/* Abstract Topographic/Circuit SVG Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
            
            <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-[0.05] transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
              <GraduationCap className="w-48 h-48 sm:w-64 sm:h-64" />
            </div>
            <div className="relative z-10 w-full">
              <div className="bg-white/20 backdrop-blur-md self-start p-3 rounded-2xl mb-6 inline-block">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">{t("bento.card1.title")}</h3>
              <p className="text-emerald-50 text-base sm:text-lg max-w-md">
                {t("bento.card1.desc")}
              </p>
              <div className="mt-6 sm:mt-8 flex items-center gap-2 font-medium">
                <span>{t("bento.card1.link")}</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* 2. Social Impact & Inclusion (Medium card) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 lg:col-span-2 lg:row-span-1 relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 group cursor-pointer flex flex-col sm:flex-row items-start sm:items-center gap-6 min-h-[220px] lg:min-h-0"
          >
            {/* Placeholder Image space */}
            <div className="w-full sm:w-32 h-40 sm:h-32 rounded-2xl bg-slate-100 dark:bg-slate-700 overflow-hidden flex-shrink-0 relative">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=300&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex-col">
              <div className="p-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg w-fit mb-4">
                 <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">{t("bento.card2.title")}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {t("bento.card2.desc")}
              </p>
            </div>
          </motion.div>

          {/* 3. Governance & Policy (Small card) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1 lg:col-span-1 lg:row-span-1 rounded-3xl bg-slate-900 dark:bg-slate-950 p-6 sm:p-8 border border-slate-800 flex flex-col justify-start lg:justify-between gap-5 lg:gap-0 group cursor-pointer hover:bg-slate-800 transition-colors"
          >
            <div>
              <h3 className="text-white font-bold text-lg sm:text-xl mb-2">{t("bento.card3.title")}</h3>
              <p className="text-slate-400 text-sm md:text-xs xl:text-sm">
                {t("bento.card3.desc")}
              </p>
            </div>
            <button className="w-full flex justify-between items-center px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-colors">
              <span className="text-xs sm:text-sm font-medium">{t("bento.card3.link")}</span>
              <Download className="w-4 h-4" />
            </button>
          </motion.div>

          {/* 4. SDG Research Outputs (Small card) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-1 lg:col-span-1 lg:row-span-1 rounded-3xl bg-white dark:bg-slate-800 p-6 sm:p-8 border border-slate-200 dark:border-slate-800 flex flex-col justify-start lg:justify-between group cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-xl w-fit mb-5 lg:mb-0">
              <Microscope className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 sm:mb-2 text-left">{t("bento.card4.badge")}</div>
              <h3 className="text-slate-900 dark:text-white font-bold text-base sm:text-lg leading-tight group-hover:text-primary transition-colors text-left">
                {t("bento.card4.title")}
              </h3>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
