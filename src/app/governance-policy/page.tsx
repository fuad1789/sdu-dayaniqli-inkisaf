"use client";

import { motion } from "framer-motion";
import { Shield, FileText, Scale, Users, ChevronRight, Download } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

const pillars = [
  {
    icon: Shield,
    title: "Institutional Integrity",
    desc: "Establishing robust governance frameworks that embed sustainability accountability at every level of university leadership.",
    color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Scale,
    title: "Evidence-Based Policy",
    desc: "Drafting and reviewing sustainability policies grounded in peer-reviewed data, international benchmarks, and stakeholder consultation.",
    color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    desc: "Publishing annual sustainability reports compliant with GRI and IESBA standards, ensuring complete public accountability.",
    color: "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400",
  },
  {
    icon: Users,
    title: "Stakeholder Engagement",
    desc: "Creating meaningful dialogue between faculty, students, government authorities, and NGOs to co-design sustainability initiatives.",
    color: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400",
  },
];

const documents = [
  { title: "SDU Sustainability Strategy 2024–2030", tag: "Strategy", year: "2024" },
  { title: "Annual GRI Sustainability Report", tag: "Report", year: "2023" },
  { title: "Campus Carbon Neutrality Roadmap", tag: "Roadmap", year: "2024" },
  { title: "Stakeholder Engagement Charter", tag: "Policy", year: "2023" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function GovernancePolicyPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 py-24 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-200 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" /> Strategic Focus Area 1
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Governance &amp; Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Building transparent institutional frameworks, ethical decision-making processes, and evidence-based sustainability policies that drive long-term impact.
          </motion.p>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Our Governance Pillars</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Four interconnected principles that underpin how SDU governs its sustainability agenda.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${p.color}`}>
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">{p.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Policy Documents */}
      <section className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Policy Documents</h2>
          <div className="space-y-4">
            {documents.map((doc, i) => (
              <motion.div
                key={doc.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 rounded-xl px-5 py-4 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <FileText className="w-5 h-5 text-blue-500 shrink-0" />
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white text-sm">{doc.title}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{doc.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-flex text-xs font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-full">
                    {doc.tag}
                  </span>
                  <button className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Contribute to Our Policy Work</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto">
          Faculty, students, and community partners can submit policy proposals through the SDU Sustainability Portal.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
        >
          Back to Home <ChevronRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
