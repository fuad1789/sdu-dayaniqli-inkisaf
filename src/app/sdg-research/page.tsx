"use client";

import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Globe, Search, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function SdgResearchPage() {
  const { t } = useLanguage();

  const metrics = [
    { icon: BookOpen,  value: "145",   label: t("res.metric1.label"), color: "text-orange-600 dark:text-orange-400",   bg: "bg-orange-50 dark:bg-orange-900/20" },
    { icon: Search,    value: "$1.2M", label: t("res.metric2.label"), color: "text-amber-600 dark:text-amber-400",     bg: "bg-amber-50 dark:bg-amber-900/20" },
    { icon: Globe,     value: "34",    label: t("res.metric3.label"), color: "text-yellow-600 dark:text-yellow-400",   bg: "bg-yellow-50 dark:bg-yellow-900/20" },
    { icon: Lightbulb, value: "120+",  label: t("res.metric4.label"), color: "text-rose-600 dark:text-rose-400",       bg: "bg-rose-50 dark:bg-rose-900/20" },
  ];

  const initiatives = [
    { title: t("res.init1.title"), status: t("res.init1.status"), statusKey: "Active",      progress: 75, desc: t("res.init1.desc") },
    { title: t("res.init2.title"), status: t("res.init2.status"), statusKey: "In Progress", progress: 40, desc: t("res.init2.desc") },
    { title: t("res.init3.title"), status: t("res.init3.status"), statusKey: "Planned",     progress: 10, desc: t("res.init3.desc") },
    { title: t("res.init4.title"), status: t("res.init4.status"), statusKey: "Active",      progress: 85, desc: t("res.init4.desc") },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 to-amber-700 py-24 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-yellow-200 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4" /> {t("res.badge")}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {t("res.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto"
          >
            {t("res.desc")}
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
          {t("res.initiatives.title")}
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
                  item.statusKey === "Active"      ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" :
                  item.statusKey === "In Progress" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"   :
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
                    className="h-2 rounded-full bg-orange-500"
                  />
                </div>
                <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 w-8 text-right">
                  {item.progress}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 py-16 px-4 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">{t("res.cta.title")}</h2>
        <p className="text-orange-100 mb-6 max-w-md mx-auto text-sm">
          {t("res.cta.desc")}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-orange-700 font-semibold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors"
        >
          {t("res.cta.btn")} <ChevronRight className="w-4 h-4" />
        </Link>
      </section>

    </main>
  );
}
