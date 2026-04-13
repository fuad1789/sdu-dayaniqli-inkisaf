"use client";

import { motion } from "framer-motion";
import {
  Users,
  HandshakeIcon,
  GraduationCap,
  ChevronRight,
  Brain,
  Stethoscope,
  Dumbbell,
  Clock,
  MapPin,
  Download,
  Trophy,
  FileText,
  ClipboardList,
  ExternalLink,
  Leaf,
  Accessibility,
  Mail,
  Phone,
  CheckCircle2,
  User,
  Music,
  Theater,
  Palette,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

const clubLogos = [
  { src: "/clubs/THIK.png", alt: "Students Trade Union" },
  { src: "/clubs/TGT.png", alt: "Student Youth Organization" },
  { src: "/clubs/TEC.png", alt: "Student Research Society" },
  { src: "/clubs/Eco.png", alt: "Ecoclub" },
  { src: "/clubs/club-sports.jpeg", alt: "Sports Club" },
  { src: "/clubs/club-01.jpg", alt: "Student Club" },
  { src: "/clubs/club-02.jpg", alt: "Student Club" },
  { src: "/clubs/club-03.jpg", alt: "Student Club" },
  { src: "/clubs/club-04.jpg", alt: "Student Club" },
  { src: "/clubs/club-05.jpg", alt: "Student Club" },
  { src: "/clubs/club-06.jpg", alt: "Student Club" },
  { src: "/clubs/club-07.jpg", alt: "Student Club" },
  { src: "/clubs/club-08.jpg", alt: "Student Club" },
  { src: "/clubs/politoloqlar-klubu.jpg", alt: "Politicians Club" },
  { src: "/clubs/club-10.jpg", alt: "Student Club" },
  { src: "/clubs/club-11.jpg", alt: "Student Club" },
  { src: "/clubs/club-12.jpg", alt: "Student Club" },
  { src: "/clubs/club-13.jpg", alt: "Student Club" },
  { src: "/clubs/SDU-MUN.jpg", alt: "SDU Model United Nations" },
];

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

  const youthClubGroups = [
    { title: t("edu2.youthclub.g1.title"), desc: t("edu2.youthclub.g1.desc"), icon: Music, color: "bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400" },
    { title: t("edu2.youthclub.g2.title"), desc: t("edu2.youthclub.g2.desc"), icon: Theater, color: "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400" },
    { title: t("edu2.youthclub.g3.title"), desc: t("edu2.youthclub.g3.desc"), icon: Palette, color: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400" },
    { title: t("edu2.youthclub.g4.title"), desc: t("edu2.youthclub.g4.desc"), icon: Music, color: "bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400" },
    { title: t("edu2.youthclub.g5.title"), desc: t("edu2.youthclub.g5.desc"), icon: Music, color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400" },
    { title: t("edu2.youthclub.g6.title"), desc: t("edu2.youthclub.g6.desc"), icon: Trophy, color: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400" },
    { title: t("edu2.youthclub.g7.title"), desc: t("edu2.youthclub.g7.desc"), icon: Palette, color: "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400" },
  ];

  const partners = [
    t("comm.partner1.title"),
    t("comm.partner2.title"),
    t("comm.partner3.title"),
    t("comm.partner4.title"),
    t("comm.partner5.title"),
    t("comm.partner6.title"),
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

      {/* Disability Support Services */}
      <section id="disability-support" className="max-w-6xl mx-auto px-4 py-20 scroll-mt-24">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Accessibility className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              {t("comm.section1.title")}
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-3xl mx-auto text-sm leading-relaxed">
            {t("comm.disability.desc")}
          </p>
        </div>

        {/* Image + Info */}
        <div className="grid lg:grid-cols-5 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg"
          >
            <Image
              src="/disability-support/center.jpg"
              alt={t("comm.section1.title")}
              fill
              sizes="(max-width: 1024px) 100vw, 460px"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 flex flex-col justify-center"
          >
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t("comm.disability.leader")}</span>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{t("comm.disability.leaderName")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t("comm.disability.location")}</span>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{t("comm.disability.schedule")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <a href={`mailto:${t("comm.disability.email")}`} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  {t("comm.disability.email")}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                <a href={`tel:${t("comm.disability.phone")}`} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  {t("comm.disability.phone")}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Activities */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 mb-8"
        >
          <div className="grid sm:grid-cols-2 gap-3">
            {(["act1", "act2", "act3", "act4", "act5", "act6"] as const).map((key, i) => (
              <motion.div
                key={key}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {t(`comm.disability.${key}`)}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PDF downloads */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/disability-support/regulation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-medium px-5 py-3 rounded-xl border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow text-sm"
          >
            <FileText className="w-4 h-4" />
            {t("comm.disability.regulation")}
          </a>
          <a
            href="/disability-support/action-plan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-medium px-5 py-3 rounded-xl border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow text-sm"
          >
            <FileText className="w-4 h-4" />
            {t("comm.disability.actionplan")}
          </a>
        </div>
      </section>

      {/* Partnerships */}
      <section id="partnerships" className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4 scroll-mt-24">
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

      {/* Student Wellbeing Services */}
      <section id="wellbeing-services" className="max-w-6xl mx-auto px-4 py-20 scroll-mt-24">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-14 text-center">
          {t("comm.wellbeing.title")}
        </h2>

        {/* ── Psychological Service ── */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Photos */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden col-span-1 row-span-2">
                <Image src="/wellbeing/psych-1.jpg" alt="Psychological Service" fill sizes="300px" className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src="/wellbeing/psych-2.jpg" alt="Psychological Service" fill sizes="300px" className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src="/wellbeing/psych-3.jpg" alt="Psychological Service" fill sizes="300px" className="object-cover" />
              </div>
            </motion.div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {t("comm.psych.title")}
                </h3>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5">
                {t("comm.psych.desc")}
              </p>

              <h4 className="font-semibold text-slate-700 dark:text-slate-300 text-sm mb-3">
                {t("comm.psych.services.title")}
              </h4>
              <ul className="space-y-2 mb-6">
                {["s1", "s2", "s3", "s4", "s5"].map((key) => (
                  <li key={key} className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                    {t(`comm.psych.${key}`)}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2 text-sm bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <Clock className="w-4 h-4 text-purple-500" />
                  {t("comm.psych.schedule")}
                </span>
                <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-purple-500" />
                  {t("comm.psych.location")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Medical Service ── */}
        <div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Info — left on this one */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {t("comm.medical.title")}
                </h3>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5">
                {t("comm.medical.desc")}
              </p>

              <ul className="space-y-2 mb-6">
                {["s1", "s2", "s3", "s4", "s5"].map((key) => (
                  <li key={key} className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    {t(`comm.medical.${key}`)}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2 text-sm bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <Clock className="w-4 h-4 text-red-500" />
                  {t("comm.medical.schedule")}
                </span>
                <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-red-500" />
                  {t("comm.medical.location")}
                </span>
              </div>
            </div>

            {/* Photos — right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src="/wellbeing/medical-1.jpg" alt="Medical Service" fill sizes="300px" className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src="/wellbeing/medical-2.jpg" alt="Medical Service" fill sizes="300px" className="object-cover" />
              </div>
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden col-span-2">
                <Image src="/wellbeing/medical-3.jpg" alt="Medical Service" fill sizes="600px" className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sports Club */}
      <section id="sports-club" className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Dumbbell className="w-7 h-7 text-orange-500" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              {t("comm.sports.title")}
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-center max-w-3xl mx-auto mb-3 text-sm leading-relaxed">
            {t("comm.sports.desc")}
          </p>
          <p className="text-center text-sm font-medium text-orange-600 dark:text-orange-400 mb-10">
            {t("comm.sports.director")}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Sports Sections */}
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-orange-500" />
                {t("comm.sports.sections.title")}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["sec1", "sec2", "sec3", "sec4", "sec5", "sec6", "sec7", "sec8"].map((key, i) => (
                  <motion.div
                    key={key}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="bg-slate-50 dark:bg-slate-800 rounded-xl px-4 py-3 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200 flex items-center gap-2"
                  >
                    <Dumbbell className="w-4 h-4 text-orange-500 shrink-0" />
                    {t(`comm.sports.${key}`)}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sports Facilities */}
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                {t("comm.sports.facilities.title")}
              </h3>
              <div className="space-y-2">
                {["fac1", "fac2", "fac3", "fac4", "fac5", "fac6", "fac7", "fac8", "fac9"].map((key, i) => (
                  <motion.div
                    key={key}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <ChevronRight className="w-4 h-4 text-orange-500 shrink-0" />
                    {t(`comm.sports.${key}`)}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sports Partnerships */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-4 text-center">
              {t("comm.sports.partners.title")}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["partner1", "partner2", "partner3"].map((key, i) => (
                <motion.div
                  key={key}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl px-6 py-4 border border-slate-200 dark:border-slate-700 flex items-center gap-3 hover:shadow-lg transition-shadow"
                >
                  <HandshakeIcon className="w-5 h-5 text-orange-500 shrink-0" />
                  <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">
                    {t(`comm.sports.${key}`)}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Unions & Clubs */}
      <section id="student-clubs" className="max-w-7xl mx-auto px-4 py-20 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
            {t("comm.clubs.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            {t("comm.clubs.desc")}
          </p>
        </motion.div>

        {/* Logo marquee */}
        <div className="relative overflow-x-clip overflow-y-visible py-2 mb-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent" />
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
            {[...clubLogos, ...clubLogos].map((logo, i) => (
              <div
                key={`${logo.src}-${i}`}
                className="shrink-0 w-36 h-36 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center p-4 shadow-sm hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-1 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={120}
                  className="object-contain w-full h-full rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Eco Club ── */}
        <div id="eco-club" className="max-w-6xl mx-auto mb-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t("edu2.ecoclub.title")}
            </h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 max-w-3xl">
            {t("edu2.ecoclub.desc")}
          </p>

          <div className="grid lg:grid-cols-5 gap-6 mb-8">
            {/* Photos — 2 cols */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="relative aspect-square rounded-2xl overflow-hidden group">
                  <Image
                    src={`/Ecoclub/photos/eco-${n}.jpg`}
                    alt={`Eco Club ${n}`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 200px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Activities — 3 cols */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3 content-start">
              {(["act1", "act2", "act3", "act4", "act5", "act6", "act7", "act8"] as const).map((key, i) => (
                <motion.div
                  key={key}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex items-start gap-3 bg-white dark:bg-slate-800 rounded-xl px-4 py-3 border border-slate-200 dark:border-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-300 text-sm">
                    {t(`edu2.ecoclub.${key}`)}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="/Ecoclub/Ekoklubun_uzvleri.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 font-medium px-4 py-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800 hover:shadow-lg transition-shadow text-sm">
              <FileText className="w-4 h-4" /> {t("edu2.ecoclub.members_pdf")}
            </a>
            <a href="/Ecoclub/Ekoklubun_esasnamesi.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 font-medium px-4 py-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800 hover:shadow-lg transition-shadow text-sm">
              <FileText className="w-4 h-4" /> {t("edu2.ecoclub.charter_pdf")}
            </a>
          </div>
        </div>

        {/* ── Student-Youth Club ── */}
        <div id="youth-club" className="max-w-6xl mx-auto scroll-mt-24">
          {/* Header with image */}
          <div className="flex flex-col md:flex-row items-start gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-56 h-56 relative rounded-2xl overflow-hidden shadow-lg shrink-0"
            >
              <Image
                src="/youth-club/leader.jpg"
                alt={t("edu2.youthclub.title")}
                fill
                sizes="224px"
                className="object-cover"
              />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {t("edu2.youthclub.title")}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-3">
                {t("edu2.youthclub.desc")}
              </p>
              <p className="text-sm font-medium text-rose-600 dark:text-rose-400">
                {t("edu2.youthclub.director")}
              </p>
            </div>
          </div>

          {/* Groups grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${group.color}`}>
                  <group.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                  {group.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {group.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Literacy Survey */}
      <section id="sustainability-survey" className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl shadow-xl overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-6 right-8 w-32 h-32 border-2 border-white rounded-full" />
              <div className="absolute bottom-4 left-6 w-20 h-20 border-2 border-white rounded-full" />
              <div className="absolute top-1/2 right-1/4 w-12 h-12 border-2 border-white rounded-full" />
            </div>

            <div className="relative px-8 py-12 sm:px-12 sm:py-14 text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                <ClipboardList className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {t("comm.survey.title")}
              </h2>
              <p className="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
                {t("comm.survey.desc")}
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScTAx8D2MR8QHSxr20h7oVDNu8qCMe4VRqz7F4pBPCyVHU9eQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-emerald-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-emerald-50 hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
              >
                {t("comm.survey.btn")}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
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
