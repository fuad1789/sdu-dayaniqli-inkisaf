"use client";

import { motion } from "framer-motion";
import {
  Shield,
  FileText,
  Scale,
  Users,
  ChevronRight,
  Award,
  Landmark,
  HandshakeIcon,
  Eye,
  BanknoteIcon,
  ShieldCheck,
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

export default function GovernanceAccountabilityPage() {
  const { t } = useLanguage();

  const policies = [
    {
      icon: Scale,
      title: t("gov2.policy1.title"),
      desc: t("gov2.policy1.desc"),
      color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    },
    {
      icon: ShieldCheck,
      title: t("gov2.policy2.title"),
      desc: t("gov2.policy2.desc"),
      color:
        "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400",
    },
    {
      icon: Users,
      title: t("gov2.policy3.title"),
      desc: t("gov2.policy3.desc"),
      color:
        "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400",
    },
    {
      icon: HandshakeIcon,
      title: t("gov2.policy4.title"),
      desc: t("gov2.policy4.desc"),
      color:
        "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: BanknoteIcon,
      title: t("gov2.policy5.title"),
      desc: t("gov2.policy5.desc"),
      color:
        "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
    },
  ];

  const committees = [
    {
      title: t("gov2.committee1.title"),
      desc: t("gov2.committee1.desc"),
    },
    {
      title: t("gov2.committee2.title"),
      desc: t("gov2.committee2.desc"),
    },
    {
      title: t("gov2.committee3.title"),
      desc: t("gov2.committee3.desc"),
    },
  ];

  const commitments = [
    {
      icon: Award,
      title: t("gov2.commitment1.title"),
      desc: t("gov2.commitment1.desc"),
    },
    {
      icon: Landmark,
      title: t("gov2.commitment2.title"),
      desc: t("gov2.commitment2.desc"),
    },
    {
      icon: Eye,
      title: t("gov2.commitment3.title"),
      desc: t("gov2.commitment3.desc"),
    },
    {
      icon: HandshakeIcon,
      title: t("gov2.commitment4.title"),
      desc: t("gov2.commitment4.desc"),
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 py-24 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-200 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" /> {t("nav.gov2")}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {t("nav.gov2")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-base md:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            {t("gov2.intro")}
          </motion.p>
        </div>
      </section>

      {/* Institutional Governance & Sustainability Framework */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
            {t("gov2.section1.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            {t("gov2.section1.desc")}
          </p>
        </div>
      </section>

      {/* Key Policies */}
      <section className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            {t("gov2.section2.title")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {policies.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${p.color}`}
                >
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

      {/* Sustainability Leadership & Committees */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
            {t("gov2.section3.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            {t("gov2.section3.desc")}
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {committees.map((c, i) => (
            <motion.div
              key={c.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-blue-600 dark:text-blue-400" />
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
      </section>

      {/* Institutional Commitments */}
      <section className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            {t("gov2.section4.title")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((c, i) => (
              <motion.div
                key={c.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center mx-auto mb-4">
                  <c.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
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

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          {t("gov2.cta")}
        </h2>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
        >
          {t("gov.cta.btn")} <ChevronRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
