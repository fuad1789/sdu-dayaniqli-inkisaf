"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Target,
  Leaf,
  Download,
  TrendingUp,
  Zap,
  Droplets,
  BookOpen,
  Users,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function StrategyReportingPage() {
  const { t } = useLanguage();

  const strategies = [
    {
      icon: TrendingUp,
      title: t("strat.strategy1.title"),
      desc: t("strat.strategy1.desc"),
      color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: Zap,
      title: t("strat.strategy2.title"),
      desc: t("strat.strategy2.desc"),
      color: "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400",
    },
    {
      icon: Leaf,
      title: t("strat.strategy3.title"),
      desc: t("strat.strategy3.desc"),
      color: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
    },
  ];

  const goals = [
    { title: t("strat.goal1.title"), desc: t("strat.goal1.desc"), progress: 35 },
    { title: t("strat.goal2.title"), desc: t("strat.goal2.desc"), progress: 42 },
    { title: t("strat.goal3.title"), desc: t("strat.goal3.desc"), progress: 28 },
    { title: t("strat.goal4.title"), desc: t("strat.goal4.desc"), progress: 55 },
    { title: t("strat.goal5.title"), desc: t("strat.goal5.desc"), progress: 60 },
  ];

  const reports = [
    { title: t("strat.report1.title"), year: "2024" },
    { title: t("strat.report2.title"), year: "2023" },
    { title: t("strat.report3.title"), year: "2024" },
    { title: t("strat.report4.title"), year: "2023" },
  ];

  const indicatorIcons = [TrendingUp, Zap, Leaf, Droplets, BookOpen, Users];
  const indicators = [
    t("strat.indicator1"),
    t("strat.indicator2"),
    t("strat.indicator3"),
    t("strat.indicator4"),
    t("strat.indicator5"),
    t("strat.indicator6"),
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-700 py-24 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-emerald-200 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <BarChart3 className="w-4 h-4" /> {t("nav.strat")}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {t("nav.strat")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-base md:text-lg text-emerald-100 max-w-3xl mx-auto leading-relaxed"
          >
            {t("strat.intro")}
          </motion.p>
        </div>
      </section>

      {/* Climate Action & Sustainability Strategy */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
          {t("strat.section1.title")}
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {strategies.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.color}`}>
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                {s.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {t("strat.section2.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10">
            {t("strat.sdg.desc")}
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-3">
            {Array.from({ length: 17 }, (_, i) => {
              const id = i + 1;
              const padded = String(id).padStart(2, "0");
              const url = `https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${padded}.jpg`;
              return (
                <motion.div
                  key={id}
                  custom={id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={url}
                    alt={`SDG ${id}`}
                    fill
                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 16vw, 160px"
                    className="object-cover"
                    unoptimized
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainability Goals & Priorities */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t("strat.section3.title")}
        </h2>
        <div className="space-y-5">
          {goals.map((g, i) => (
            <motion.div
              key={g.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {g.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {g.desc}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${g.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="h-2 rounded-full bg-emerald-500"
                  />
                </div>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 w-8 text-right">
                  {g.progress}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SDG Reports */}
      <section className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            {t("strat.section4.title")}
          </h2>
          <div className="space-y-4">
            {reports.map((r, i) => (
              <motion.div
                key={r.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 rounded-xl px-5 py-4 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-500 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <BarChart3 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white text-sm">
                      {r.title}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{r.year}</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1.5 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Download className="w-4 h-4" />
                  {t("strat.download")}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Indicators */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 text-center">
          {t("strat.section5.title")}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {indicators.map((ind, i) => {
            const Icon = indicatorIcons[i];
            return (
              <motion.div
                key={ind}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  {ind}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 py-16 px-4 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">{t("strat.cta")}</h2>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-emerald-700 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors"
        >
          {t("env.cta.btn")} <ChevronRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
