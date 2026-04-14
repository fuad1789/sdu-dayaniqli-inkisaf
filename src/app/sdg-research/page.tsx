"use client";

import { motion } from "framer-motion";
import {
  FlaskConical,
  BookOpen,
  Globe,
  GraduationCap,
  Lightbulb,
  Building2,
  Microscope,
  ChevronRight,
  Download,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import SumqayitMap from "@/components/SumqayitMap";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function ResearchPage() {
  const { t } = useLanguage();

  const projects = [
    { title: t("res2.project1.title"), desc: t("res2.project1.desc"), icon: Lightbulb, color: "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400" },
    { title: t("res2.project2.title"), desc: t("res2.project2.desc"), icon: Globe, color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" },
    { title: t("res2.project3.title"), desc: t("res2.project3.desc"), icon: FlaskConical, color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400" },
    { title: t("res2.project4.title"), desc: t("res2.project4.desc"), icon: Microscope, color: "bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400" },
    { title: t("res2.project5.title"), desc: t("res2.project5.desc"), icon: Building2, color: "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400" },
    { title: t("res2.project6.title"), desc: t("res2.project6.desc"), icon: FlaskConical, color: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400" },
  ];

  const partners = [
    t("res2.partner1.title"),
    t("res2.partner2.title"),
    t("res2.partner3.title"),
    t("res2.partner4.title"),
    t("res2.partner5.title"),
  ];

  const centers = [
    { title: t("res2.center1.title"), desc: t("res2.center1.desc") },
    { title: t("res2.center2.title"), desc: t("res2.center2.desc") },
    { title: t("res2.center3.title"), desc: t("res2.center3.desc") },
    { title: t("res2.center4.title"), desc: t("res2.center4.desc") },
  ];

  const studentResearch = [
    t("res2.student1.title"),
    t("res2.student2.title"),
    t("res2.student3.title"),
    t("res2.student4.title"),
    t("res2.student5.title"),
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
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <FlaskConical className="w-4 h-4" /> {t("nav.res2")}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {t("res2.section2.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-base md:text-lg text-orange-100 max-w-3xl mx-auto leading-relaxed"
          >
            {t("res2.intro")}
          </motion.p>
        </div>
      </section>

      {/* Sumqayit Map Context */}
      <section id="sumqayit-context" className="max-w-6xl mx-auto px-4 py-20 scroll-mt-24">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
          {t("res2.section1.title")}
        </h2>
        <SumqayitMap />
      </section>

      {/* SDG-related Research Projects */}
      <section id="research-projects" className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            {t("res2.section2.title")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${p.color}`}>
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                  {p.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Partnerships */}
      <section id="research-partnerships" className="max-w-6xl mx-auto px-4 py-20 scroll-mt-24">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t("res2.section3.title")}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {partners.map((p, i) => (
            <motion.div
              key={p}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-xl px-6 py-4 border border-slate-200 dark:border-slate-700 flex items-center gap-3 hover:shadow-lg transition-shadow"
            >
              <Globe className="w-5 h-5 text-orange-500 shrink-0" />
              <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">
                {p}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Research Centres & Laboratories */}
      <section id="research-centres" className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            {t("res2.section4.title")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {centers.map((c, i) => (
              <motion.div
                key={c.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center mb-4">
                  <Microscope className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                  {c.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Research Projects */}
      <section id="student-research" className="max-w-6xl mx-auto px-4 py-20 scroll-mt-24">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t("res2.section5.title")}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {studentResearch.map((s, i) => (
            <motion.div
              key={s}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-xl px-5 py-3 border border-slate-200 dark:border-slate-700 flex items-center gap-3 hover:shadow-lg transition-shadow"
            >
              <GraduationCap className="w-5 h-5 text-amber-500 shrink-0" />
              <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">
                {s}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Research Performance in SDGs */}
      <section id="research-performance" className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4 scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {t("res2.performance.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            {t("res2.performance.desc")}
          </p>
          <motion.a
            href="/Student-Sustainability-Initiatives/SSU Research Performance in SDGs.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 bg-slate-50 dark:bg-slate-800 rounded-2xl px-8 py-6 border border-slate-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-lg transition-all group"
          >
            <div className="w-14 h-14 rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center shrink-0">
              <BarChart3 className="w-7 h-7 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                {t("res2.performance.report")}
              </h3>
              <span className="text-xs text-slate-400">PDF</span>
            </div>
            <Download className="w-5 h-5 text-orange-500 ml-4 shrink-0" />
          </motion.a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 py-16 px-4 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">{t("res2.cta")}</h2>
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
