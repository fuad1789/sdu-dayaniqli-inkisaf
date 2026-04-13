"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Shield,
  Microscope,
  BarChart3,
  ArrowUpRight,
  Leaf,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

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

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          {/* 1. Governance & Accountability — 3 cols */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-3 lg:col-span-2"
          >
            <Link
              href="/governance-policy"
              className="group block h-full relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-white min-h-[320px] flex flex-col justify-between"
            >
              {/* Decorative circles */}
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full border border-white/[0.06] group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full border border-white/[0.04] group-hover:scale-125 transition-transform duration-700 delay-75 pointer-events-none" />
              <div className="absolute bottom-16 right-8 w-16 h-16 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {t("bento.card3.title")}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t("bento.card3.desc")}
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-2 font-medium text-sm text-slate-400 group-hover:text-blue-400 transition-colors mt-6">
                <span>{t("bento.explore")}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          </motion.div>

          {/* 2. Strategy & Reporting — 2 cols */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-3 lg:col-span-2"
          >
            <Link
              href="/environmental-strategy"
              className="group block h-full relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 text-white min-h-[320px] flex flex-col justify-between"
            >
              {/* Decorative leaf shapes */}
              <div className="absolute top-6 right-6 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-500 pointer-events-none">
                <Leaf className="w-28 h-28 rotate-45" />
              </div>
              <div className="absolute bottom-12 right-16 opacity-[0.05] pointer-events-none">
                <Leaf className="w-16 h-16 -rotate-12" />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {t("bento.card5.title")}
                </h3>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  {t("bento.card5.desc")}
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-2 font-medium text-sm text-emerald-200 group-hover:text-white transition-colors mt-6">
                <span>{t("bento.explore")}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          </motion.div>

          {/* 3. Research — 1 col */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-3 lg:col-span-2"
          >
            <Link
              href="/sdg-research"
              className="group block h-full relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-white min-h-[320px] flex flex-col justify-between"
            >
              {/* Grid dots pattern */}
              <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }} />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center mb-6">
                  <Microscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {t("bento.card4.title2")}
                </h3>
                <p className="text-amber-100 text-sm leading-relaxed">
                  {t("bento.card4.desc2")}
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-2 font-medium text-sm text-amber-200 group-hover:text-white transition-colors mt-6">
                <span>{t("bento.explore")}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          </motion.div>

          {/* 4. Education — 3 cols */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <Link
              href="/education-curriculum"
              className="group block h-full rounded-3xl bg-white dark:bg-slate-800 p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all flex flex-col justify-between min-h-[240px]"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {t("bento.card1.title")}
                  </h3>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {t("bento.card1.desc")}
                </p>
              </div>

              <div className="flex items-center gap-2 font-medium text-sm text-slate-400 group-hover:text-primary transition-colors mt-6">
                <span>{t("bento.card1.link")}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          </motion.div>

          {/* 5. Community & Social Impact — 3 cols */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <Link
              href="/social-impact"
              className="group block h-full relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 hover:shadow-xl transition-all flex flex-col justify-between min-h-[240px]"
            >
              {/* Accent strip */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 rounded-l-3xl" />

              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {t("bento.card2.title")}
                  </h3>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {t("bento.card2.desc")}
                </p>
              </div>

              <div className="flex items-center gap-2 font-medium text-sm text-slate-400 group-hover:text-primary transition-colors mt-6">
                <span>{t("bento.explore")}</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
