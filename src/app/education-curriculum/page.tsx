"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Users,
  Leaf,
  Award,
  Lightbulb,
  ChevronRight,
  FileText,
  Download,
  Music,
  Palette,
  Theater,
  Trophy,
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

export default function SustainableEducationPage() {
  const { t } = useLanguage();

  const topics = [
    { title: t("edu2.topic1.title"), desc: t("edu2.topic1.desc"), icon: Lightbulb, color: "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400" },
    { title: t("edu2.topic2.title"), desc: t("edu2.topic2.desc"), icon: Leaf, color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400" },
    { title: t("edu2.topic3.title"), desc: t("edu2.topic3.desc"), icon: Users, color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" },
    { title: t("edu2.topic4.title"), desc: t("edu2.topic4.desc"), icon: BookOpen, color: "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400" },
    { title: t("edu2.topic5.title"), desc: t("edu2.topic5.desc"), icon: Lightbulb, color: "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400" },
    { title: t("edu2.topic6.title"), desc: t("edu2.topic6.desc"), icon: Award, color: "bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400" },
  ];

  const courses = [
    { title: t("edu2.course1.title"), desc: t("edu2.course1.desc") },
    { title: t("edu2.course2.title"), desc: t("edu2.course2.desc") },
    { title: t("edu2.course3.title"), desc: t("edu2.course3.desc") },
    { title: t("edu2.course4.title"), desc: t("edu2.course4.desc") },
    { title: t("edu2.course5.title"), desc: t("edu2.course5.desc") },
    { title: t("edu2.course6.title"), desc: t("edu2.course6.desc") },
  ];

  const initiatives = [
    { title: t("edu2.init1.title"), desc: t("edu2.init1.desc"), pdf: "/Student-Sustainability-Initiatives/Academic Freedom Policy_new.pdf" },
    { title: t("edu2.init2.title"), desc: t("edu2.init2.desc"), pdf: "/Student-Sustainability-Initiatives/Anticorruption policy_new.pdf" },
    { title: t("edu2.init3.title"), desc: t("edu2.init3.desc"), pdf: "/Student-Sustainability-Initiatives/Antidiscrimination policy_new.pdf" },
    { title: t("edu2.init4.title"), desc: t("edu2.init4.desc"), pdf: "/Student-Sustainability-Initiatives/Anti-harassment policy_new.pdf" },
    { title: t("edu2.init5.title"), desc: t("edu2.init5.desc"), pdf: "/Student-Sustainability-Initiatives/Climate Action and Sustainability Policy_new.pdf" },
    { title: t("edu2.init6.title"), desc: t("edu2.init6.desc"), pdf: "/Student-Sustainability-Initiatives/Equality Diversity & Inclusion Policy_new.pdf" },
    { title: t("edu2.init7.title"), desc: t("edu2.init7.desc"), pdf: "/Student-Sustainability-Initiatives/FrameWork_Equality, Diversity, Inclusion.pdf" },
    { title: t("edu2.init8.title"), desc: t("edu2.init8.desc"), pdf: "/Student-Sustainability-Initiatives/Inclusive Education and Accessibility Framework_new.pdf" },
    { title: t("edu2.init9.title"), desc: t("edu2.init9.desc"), pdf: "/Student-Sustainability-Initiatives/Policy on Ethical Organizational Values_new.pdf" },
    { title: t("edu2.init10.title"), desc: t("edu2.init10.desc"), pdf: "/Student-Sustainability-Initiatives/Policy on Ethical Values_new.pdf" },
    { title: t("edu2.init11.title"), desc: t("edu2.init11.desc"), pdf: "/Student-Sustainability-Initiatives/Prevention Policy on Human Trafficking_new.pdf" },
    { title: t("edu2.init12.title"), desc: t("edu2.init12.desc"), pdf: "/Student-Sustainability-Initiatives/Student Safety Policy_new.pdf" },
    { title: t("edu2.init13.title"), desc: t("edu2.init13.desc"), pdf: "/Student-Sustainability-Initiatives/Sustainability Policy on Donations and Funding_new.pdf" },
    { title: t("edu2.init14.title"), desc: t("edu2.init14.desc"), pdf: "/Student-Sustainability-Initiatives/Sustainable Investment Policy_new.pdf" },
    { title: t("edu2.init15.title"), desc: t("edu2.init15.desc"), pdf: "/Student-Sustainability-Initiatives/Sustainable Procurement Policy_new.pdf" },
  ];

  const ecoActivities = [
    t("edu2.ecoclub.act1"),
    t("edu2.ecoclub.act2"),
    t("edu2.ecoclub.act3"),
    t("edu2.ecoclub.act4"),
    t("edu2.ecoclub.act5"),
    t("edu2.ecoclub.act6"),
    t("edu2.ecoclub.act7"),
    t("edu2.ecoclub.act8"),
  ];

  const youthClubGroups = [
    { title: t("edu2.youthclub.g1.title"), desc: t("edu2.youthclub.g1.desc"), icon: Music, color: "bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400" },
    { title: t("edu2.youthclub.g2.title"), desc: t("edu2.youthclub.g2.desc"), icon: Theater, color: "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400" },
    { title: t("edu2.youthclub.g3.title"), desc: t("edu2.youthclub.g3.desc"), icon: Palette, color: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400" },
    { title: t("edu2.youthclub.g4.title"), desc: t("edu2.youthclub.g4.desc"), icon: Music, color: "bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400" },
    { title: t("edu2.youthclub.g5.title"), desc: t("edu2.youthclub.g5.desc"), icon: Music, color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400" },
    { title: t("edu2.youthclub.g6.title"), desc: t("edu2.youthclub.g6.desc"), icon: Trophy, color: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400" },
    { title: t("edu2.youthclub.g7.title"), desc: t("edu2.youthclub.g7.desc"), icon: Palette, color: "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400" },
  ];

  const workshops = [
    t("edu2.workshop1.title"),
    t("edu2.workshop2.title"),
    t("edu2.workshop3.title"),
    t("edu2.workshop4.title"),
    t("edu2.workshop5.title"),
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-600 to-red-700 py-24 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-pink-200 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <GraduationCap className="w-4 h-4" /> {t("nav.edu2")}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {t("edu2.section1.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-base md:text-lg text-rose-100 max-w-3xl mx-auto leading-relaxed"
          >
            {t("edu2.intro")}
          </motion.p>
        </div>
      </section>

      {/* Sustainability Topics in Curriculum */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">
          {t("edu2.section1.title")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, i) => (
            <motion.div
              key={topic.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${topic.color}`}>
                <topic.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                {topic.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {topic.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Relevant Courses & Programs */}
      <section className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            {t("edu2.section2.title")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c, i) => (
              <motion.div
                key={c.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center mb-3">
                  <BookOpen className="w-5 h-5 text-rose-600 dark:text-rose-400" />
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

      {/* All Courses 2026 — Download Card */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-rose-600 to-red-700 rounded-3xl shadow-xl px-8 py-10 text-white"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                <BookOpen className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">
                  {t("edu2.allCourses.title")}
                </h2>
                <p className="text-rose-100 text-sm leading-relaxed max-w-2xl">
                  {t("edu2.allCourses.desc")}
                </p>
              </div>
            </div>
            <a
              href="/Student-Sustainability-Initiatives/Sustainable Education_all courses 2026.pdf"
              download
              className="inline-flex items-center gap-2 bg-white text-rose-700 font-semibold px-6 py-3 rounded-xl hover:bg-rose-50 transition-colors text-sm shrink-0 self-start sm:self-center"
            >
              <Download className="w-4 h-4" />
              {t("edu2.allCourses.download")}
            </a>
          </div>
        </motion.div>
      </section>

      {/* Student Sustainability Initiatives */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t("edu2.section3.title")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          {initiatives.map((init, i) => (
            <motion.a
              key={init.title}
              href={init.pdf}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-pink-300 dark:hover:border-pink-700 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-900/20 flex items-center justify-center mb-3">
                <FileText className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">{init.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1">{init.desc}</p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-pink-600 dark:text-pink-400 mt-4">
                <FileText className="w-3.5 h-3.5" /> PDF
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Eco-Club */}
      <section className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Leaf className="w-7 h-7 text-emerald-500" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t("edu2.ecoclub.title")}
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-center max-w-3xl mx-auto mb-8 text-sm leading-relaxed">
            {t("edu2.ecoclub.desc")}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {ecoActivities.map((act, i) => (
              <motion.div
                key={act}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl px-5 py-4 border border-slate-200 dark:border-slate-700 flex items-start gap-3 hover:shadow-lg transition-shadow"
              >
                <Leaf className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">{act}</span>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/Ecoclub/Ekoklubun_uzvleri.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 font-medium px-5 py-3 rounded-xl border border-emerald-200 dark:border-emerald-800 hover:shadow-lg transition-shadow text-sm"
            >
              <FileText className="w-4 h-4" />
              {t("edu2.ecoclub.members_pdf")}
            </a>
            <a
              href="/Ecoclub/Ekoklubun_esasnamesi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 font-medium px-5 py-3 rounded-xl border border-emerald-200 dark:border-emerald-800 hover:shadow-lg transition-shadow text-sm"
            >
              <FileText className="w-4 h-4" />
              {t("edu2.ecoclub.charter_pdf")}
            </a>
          </div>
        </div>
      </section>

      {/* Student-Youth Club */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 text-center">
          {t("edu2.youthclub.title")}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-center max-w-3xl mx-auto mb-3 text-sm leading-relaxed">
          {t("edu2.youthclub.desc")}
        </p>
        <p className="text-center text-sm font-medium text-rose-600 dark:text-rose-400 mb-10">
          {t("edu2.youthclub.director")}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {youthClubGroups.map((group, i) => (
            <motion.div
              key={group.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${group.color}`}>
                <group.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                {group.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {group.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workshops & Seminars */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t("edu2.section5.title")}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {workshops.map((w, i) => (
            <motion.div
              key={w}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-xl px-5 py-3 border border-slate-200 dark:border-slate-700 flex items-center gap-3 hover:shadow-lg transition-shadow"
            >
              <Award className="w-5 h-5 text-rose-500 shrink-0" />
              <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">{w}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rose-600 py-16 px-4 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">{t("edu2.cta")}</h2>
        <a
          href="/Student-Sustainability-Initiatives/Sustainable Education_all courses 2026.pdf"
          download
          className="inline-flex items-center gap-2 bg-white text-rose-700 font-semibold px-6 py-3 rounded-xl hover:bg-rose-50 transition-colors"
        >
          <Download className="w-4 h-4" /> {t("edu.cta.btn")}
        </a>
      </section>
    </main>
  );
}
