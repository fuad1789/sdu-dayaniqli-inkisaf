"use client";

import { motion } from "framer-motion";
import {
  Users,
  Heart,
  HandshakeIcon,
  Megaphone,
  GraduationCap,
  Globe,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function CommunityImpactPage() {
  const { t } = useLanguage();

  const outreach = [
    { title: t("comm.outreach1.title"), desc: t("comm.outreach1.desc"), icon: GraduationCap, color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" },
    { title: t("comm.outreach2.title"), desc: t("comm.outreach2.desc"), icon: Heart, color: "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400" },
    { title: t("comm.outreach3.title"), desc: t("comm.outreach3.desc"), icon: Globe, color: "bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400" },
    { title: t("comm.outreach4.title"), desc: t("comm.outreach4.desc"), icon: Users, color: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400" },
    { title: t("comm.outreach5.title"), desc: t("comm.outreach5.desc"), icon: Heart, color: "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400" },
    { title: t("comm.outreach6.title"), desc: t("comm.outreach6.desc"), icon: Users, color: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400" },
  ];

  const partners = [
    t("comm.partner1.title"),
    t("comm.partner2.title"),
    t("comm.partner3.title"),
    t("comm.partner4.title"),
    t("comm.partner5.title"),
    t("comm.partner6.title"),
  ];

  const volunteers = [
    { title: t("comm.volunteer1.title"), desc: t("comm.volunteer1.desc") },
    { title: t("comm.volunteer2.title"), desc: t("comm.volunteer2.desc") },
    { title: t("comm.volunteer3.title"), desc: t("comm.volunteer3.desc") },
    { title: t("comm.volunteer4.title"), desc: t("comm.volunteer4.desc") },
    { title: t("comm.volunteer5.title"), desc: t("comm.volunteer5.desc") },
  ];

  const campaigns = [
    t("comm.campaign1.title"),
    t("comm.campaign2.title"),
    t("comm.campaign3.title"),
    t("comm.campaign4.title"),
  ];

  const activities = [
    t("comm.activity1.title"),
    t("comm.activity2.title"),
    t("comm.activity3.title"),
    t("comm.activity4.title"),
    t("comm.activity5.title"),
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-700 py-24 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-cyan-200 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <Users className="w-4 h-4" /> {t("nav.comm")}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {t("nav.comm")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-base md:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            {t("comm.intro")}
          </motion.p>
        </div>
      </section>

      {/* Community Outreach Projects */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
          {t("comm.section1.title")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outreach.map((o, i) => (
            <motion.div
              key={o.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${o.color}`}>
                <o.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                {o.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {o.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partnerships */}
      <section className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            {t("comm.section2.title")}
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
                className="bg-slate-50 dark:bg-slate-800 rounded-xl px-6 py-4 border border-slate-200 dark:border-slate-700 flex items-center gap-3 hover:shadow-lg transition-shadow"
              >
                <HandshakeIcon className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">
                  {p}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering Initiatives */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t("comm.section3.title")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {volunteers.map((v, i) => (
            <motion.div
              key={v.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center mb-3">
                <Heart className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{v.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sustainability Awareness Campaigns */}
      <section className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            {t("comm.section4.title")}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {campaigns.map((c, i) => (
              <motion.div
                key={c}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl px-5 py-3 border border-slate-200 dark:border-slate-700 flex items-center gap-3 hover:shadow-lg transition-shadow"
              >
                <Megaphone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Engagement Activities */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t("comm.section5.title")}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {activities.map((a, i) => (
            <motion.div
              key={a}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-xl px-5 py-3 border border-slate-200 dark:border-slate-700 flex items-center gap-3 hover:shadow-lg transition-shadow"
            >
              <GraduationCap className="w-5 h-5 text-blue-500 shrink-0" />
              <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">{a}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 px-4 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">{t("comm.cta")}</h2>
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
