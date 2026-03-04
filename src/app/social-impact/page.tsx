"use client";

import { motion } from "framer-motion";
import { Users, Heart, GraduationCap, ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function SocialImpactPage() {
  const { t } = useLanguage();

  const metrics = [
    { icon: Users,         value: "1,200+", label: t("soc.metric1.label"), color: "text-blue-600 dark:text-blue-400",    bg: "bg-blue-50 dark:bg-blue-900/20" },
    { icon: GraduationCap, value: "55%",    label: t("soc.metric2.label"), color: "text-cyan-600 dark:text-cyan-400",    bg: "bg-cyan-50 dark:bg-cyan-900/20" },
    { icon: Heart,         value: "15+",    label: t("soc.metric3.label"), color: "text-sky-600 dark:text-sky-400",      bg: "bg-sky-50 dark:bg-sky-900/20" },
    { icon: ShieldCheck,   value: "100%",   label: t("soc.metric4.label"), color: "text-indigo-600 dark:text-indigo-400",bg: "bg-indigo-50 dark:bg-indigo-900/20" },
  ];

  const initiatives = [
    { title: t("soc.init1.title"), status: t("soc.init1.status"), statusKey: "Active",      progress: 80, desc: t("soc.init1.desc") },
    { title: t("soc.init2.title"), status: t("soc.init2.status"), statusKey: "In Progress", progress: 65, desc: t("soc.init2.desc") },
    { title: t("soc.init3.title"), status: t("soc.init3.status"), statusKey: "Active",      progress: 90, desc: t("soc.init3.desc") },
    { title: t("soc.init4.title"), status: t("soc.init4.status"), statusKey: "Planned",     progress: 20, desc: t("soc.init4.desc") },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 py-24 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-cyan-200 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <Users className="w-4 h-4" /> {t("soc.badge")}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {t("soc.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto"
          >
            {t("soc.desc")}
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
          {t("soc.initiatives.title")}
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
                  item.statusKey === "Active"      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
                  item.statusKey === "In Progress" ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400"   :
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
                    className="h-2 rounded-full bg-blue-500"
                  />
                </div>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 w-8 text-right">
                  {item.progress}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 px-4 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">{t("soc.cta.title")}</h2>
        <p className="text-blue-100 mb-6 max-w-md mx-auto text-sm">
          {t("soc.cta.desc")}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
        >
          {t("soc.cta.btn")} <ChevronRight className="w-4 h-4" />
        </Link>
      </section>

    </main>
  );
}
