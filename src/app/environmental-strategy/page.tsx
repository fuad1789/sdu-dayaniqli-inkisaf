"use client";

import { motion } from "framer-motion";
import { Leaf, Zap, Droplets, Wind, ChevronRight, TrendingDown } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function EnvironmentalStrategyPage() {
  const { t } = useLanguage();

  const metrics = [
    { icon: TrendingDown, value: "34%",      label: t("env.metric1.label"), color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
    { icon: Zap,          value: "320 MWh",  label: t("env.metric2.label"), color: "text-yellow-600 dark:text-yellow-400",  bg: "bg-yellow-50 dark:bg-yellow-900/20"  },
    { icon: Droplets,     value: "1.2M L",   label: t("env.metric3.label"), color: "text-blue-600 dark:text-blue-400",      bg: "bg-blue-50 dark:bg-blue-900/20"      },
    { icon: Wind,         value: "Net-Zero", label: t("env.metric4.label"), color: "text-teal-600 dark:text-teal-400",      bg: "bg-teal-50 dark:bg-teal-900/20"      },
  ];

  const initiatives = [
    { title: t("env.init1.title"), status: t("env.init1.status"), statusKey: "Active",      progress: 68, desc: t("env.init1.desc") },
    { title: t("env.init2.title"), status: t("env.init2.status"), statusKey: "Active",      progress: 85, desc: t("env.init2.desc") },
    { title: t("env.init3.title"), status: t("env.init3.status"), statusKey: "In Progress", progress: 42, desc: t("env.init3.desc") },
    { title: t("env.init4.title"), status: t("env.init4.status"), statusKey: "Planned",     progress: 15, desc: t("env.init4.desc") },
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
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <Leaf className="w-4 h-4" /> {t("env.badge")}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {t("env.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto"
          >
            {t("env.desc")}
          </motion.p>
        </div>
      </section>

      {/* Metrics */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 text-center"
            >
              <div className={`w-12 h-12 rounded-xl ${m.bg} flex items-center justify-center mx-auto mb-3`}>
                <m.icon className={`w-6 h-6 ${m.color}`} />
              </div>
              <p className={`text-2xl font-bold ${m.color} mb-1`}>{m.value}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Initiatives */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          {t("env.initiatives.title")}
        </h2>
        <div className="space-y-5">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  item.statusKey === "Active"      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" :
                  item.statusKey === "In Progress" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"   :
                                                     "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                }`}>
                  {item.status}
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{item.desc}</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="h-2 rounded-full bg-emerald-500"
                  />
                </div>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 w-8 text-right">
                  {item.progress}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 py-16 px-4 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">{t("env.cta.title")}</h2>
        <p className="text-emerald-100 mb-6 max-w-md mx-auto text-sm">
          {t("env.cta.desc")}
        </p>
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
