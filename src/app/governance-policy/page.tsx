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
  Building2,
  Calendar,
  User,
  Target,
  Globe,
  CheckCircle2,
  Download,
  ClipboardList,
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
    { icon: Scale, title: t("gov2.policy1.title"), desc: t("gov2.policy1.desc"), color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400", pdf: "/Student-Sustainability-Initiatives/Academic Freedom Policy_new.pdf" },
    { icon: ShieldCheck, title: t("gov2.policy2.title"), desc: t("gov2.policy2.desc"), color: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400", pdf: "/Student-Sustainability-Initiatives/Anticorruption policy_new.pdf" },
    { icon: Users, title: t("gov2.policy3.title"), desc: t("gov2.policy3.desc"), color: "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400", pdf: "/Student-Sustainability-Initiatives/Antidiscrimination policy_new.pdf" },
    { icon: Shield, title: t("gov2.policy4.title"), desc: t("gov2.policy4.desc"), color: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400", pdf: "/Student-Sustainability-Initiatives/Anti-harassment policy_new.pdf" },
    { icon: Landmark, title: t("gov2.policy5.title"), desc: t("gov2.policy5.desc"), color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400", pdf: "/Student-Sustainability-Initiatives/Climate Action and Sustainability Policy_new.pdf" },
    { icon: Users, title: t("gov2.policy6.title"), desc: t("gov2.policy6.desc"), color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400", pdf: "/Student-Sustainability-Initiatives/Equality Diversity & Inclusion Policy_new.pdf" },
    { icon: Award, title: t("gov2.policy7.title"), desc: t("gov2.policy7.desc"), color: "bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400", pdf: "/Student-Sustainability-Initiatives/FrameWork_Equality, Diversity, Inclusion.pdf" },
    { icon: Eye, title: t("gov2.policy8.title"), desc: t("gov2.policy8.desc"), color: "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400", pdf: "/Student-Sustainability-Initiatives/Inclusive Education and Accessibility Framework_new.pdf" },
    { icon: HandshakeIcon, title: t("gov2.policy9.title"), desc: t("gov2.policy9.desc"), color: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400", pdf: "/Student-Sustainability-Initiatives/Policy on Ethical Organizational Values_new.pdf" },
    { icon: Scale, title: t("gov2.policy10.title"), desc: t("gov2.policy10.desc"), color: "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400", pdf: "/Student-Sustainability-Initiatives/Policy on Ethical Values_new.pdf" },
    { icon: ShieldCheck, title: t("gov2.policy11.title"), desc: t("gov2.policy11.desc"), color: "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400", pdf: "/Student-Sustainability-Initiatives/Prevention Policy on Human Trafficking_new.pdf" },
    { icon: Shield, title: t("gov2.policy12.title"), desc: t("gov2.policy12.desc"), color: "bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400", pdf: "/Student-Sustainability-Initiatives/Student Safety Policy_new.pdf" },
    { icon: BanknoteIcon, title: t("gov2.policy13.title"), desc: t("gov2.policy13.desc"), color: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400", pdf: "/Student-Sustainability-Initiatives/Sustainability Policy on Donations and Funding_new.pdf" },
    { icon: BanknoteIcon, title: t("gov2.policy14.title"), desc: t("gov2.policy14.desc"), color: "bg-lime-50 dark:bg-lime-900/20 text-lime-600 dark:text-lime-400", pdf: "/Student-Sustainability-Initiatives/Sustainable Investment Policy_new.pdf" },
    { icon: HandshakeIcon, title: t("gov2.policy15.title"), desc: t("gov2.policy15.desc"), color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400", pdf: "/Student-Sustainability-Initiatives/Sustainable Procurement Policy_new.pdf" },
    { icon: Globe, title: t("gov2.policy16.title"), desc: t("gov2.policy16.desc"), color: "bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400", pdf: "/Student-Sustainability-Initiatives/Internationalization_Policy.pdf" },
  ];

  const centerActivities = [
    t("gov2.center.activity1"),
    t("gov2.center.activity2"),
    t("gov2.center.activity3"),
    t("gov2.center.activity4"),
    t("gov2.center.activity5"),
  ];

  const committeeDuties = [
    t("gov2.sdcommittee.duty1"),
    t("gov2.sdcommittee.duty2"),
    t("gov2.sdcommittee.duty3"),
    t("gov2.sdcommittee.duty4"),
    t("gov2.sdcommittee.duty5"),
    t("gov2.sdcommittee.duty6"),
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {policies.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.pdf}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${p.color}`}
                >
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1">
                  {p.desc}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 mt-4">
                  <FileText className="w-3.5 h-3.5" /> PDF
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Development Center */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
            {t("gov2.center.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">
            {t("gov2.center.desc")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Center Info Card */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-xl">
                {t("gov2.center.title")}
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t("gov2.center.established")}</span>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{t("gov2.center.establishedDate")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t("gov2.center.leader")}</span>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{t("gov2.center.leaderName")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t("gov2.center.mission")}</span>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{t("gov2.center.missionDesc")}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Activities Card */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-xl">
                {t("gov2.center.activities")}
              </h3>
            </div>
            <ul className="space-y-3">
              {centerActivities.map((activity, i) => (
                <motion.li
                  key={i}
                  custom={i + 2}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{activity}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Sustainable Development Committee */}
      <section className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
              {t("gov2.sdcommittee.title")}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">
              {t("gov2.sdcommittee.desc")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Duties List */}
            <div className="lg:col-span-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-4 flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                {t("gov2.sdcommittee.duties")}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {committeeDuties.map((duty, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{duty}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Committee Documents */}
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                PDF
              </h3>
              <div className="space-y-4">
                <motion.a
                  href="/Student-Sustainability-Initiatives/Committee_Composition.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  custom={0}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center shrink-0">
                    <Download className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {t("gov2.sdcommittee.composition")}
                    </h4>
                    <span className="text-xs text-slate-400">PDF</span>
                  </div>
                </motion.a>
                <motion.a
                  href="/Student-Sustainability-Initiatives/Committee_Charter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  custom={1}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center shrink-0">
                    <Download className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {t("gov2.sdcommittee.charter")}
                    </h4>
                    <span className="text-xs text-slate-400">PDF</span>
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
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
