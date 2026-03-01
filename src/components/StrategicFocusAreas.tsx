"use client";

import { motion, Variants } from "framer-motion";
import {
  Scale,
  Leaf,
  Users,
  FlaskConical,
  GraduationCap,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";

const getFocusAreas = (t: (key: string) => string) => [
  {
    id: 1,
    title: t("sfa.focus1.title"),
    description: t("sfa.focus1.desc"),
    icon: Scale,
    gradient: "from-sky-500/10 to-blue-600/10",
    iconBg: "bg-sky-500",
    border: "hover:border-sky-300 dark:hover:border-sky-700",
    accent: "text-sky-600 dark:text-sky-400",
  },
  {
    id: 2,
    title: t("sfa.focus2.title"),
    description: t("sfa.focus2.desc"),
    icon: Leaf,
    gradient: "from-emerald-500/10 to-green-600/10",
    iconBg: "bg-emerald-500",
    border: "hover:border-emerald-300 dark:hover:border-emerald-700",
    accent: "text-emerald-600 dark:text-emerald-400",
  },
  {
    id: 3,
    title: t("sfa.focus3.title"),
    description: t("sfa.focus3.desc"),
    icon: Users,
    gradient: "from-violet-500/10 to-purple-600/10",
    iconBg: "bg-violet-500",
    border: "hover:border-violet-300 dark:hover:border-violet-700",
    accent: "text-violet-600 dark:text-violet-400",
  },
  {
    id: 4,
    title: t("sfa.focus4.title"),
    description: t("sfa.focus4.desc"),
    icon: FlaskConical,
    gradient: "from-orange-500/10 to-amber-600/10",
    iconBg: "bg-orange-500",
    border: "hover:border-orange-300 dark:hover:border-orange-700",
    accent: "text-orange-600 dark:text-orange-400",
  },
  {
    id: 5,
    title: t("sfa.focus5.title"),
    description: t("sfa.focus5.desc"),
    icon: GraduationCap,
    gradient: "from-rose-500/10 to-pink-600/10",
    iconBg: "bg-rose-500",
    border: "hover:border-rose-300 dark:hover:border-rose-700",
    accent: "text-rose-600 dark:text-rose-400",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function StrategicFocusAreas() {
  const { t } = useLanguage();
  const focusAreas = getFocusAreas(t);

  return (
    <section
      id="focus-areas"
      className="w-full py-16 md:py-28 bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[20%] w-[50%] h-1/2 bg-primary/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-[10%] w-[30%] h-1/3 bg-cta/3 rounded-full blur-[100px]" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {t("sfa.badge")}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-slate-900 dark:text-white"
          >
            {t("sfa.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            {t("sfa.desc")}
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.id}
                variants={cardVariants}
                className={`group relative flex flex-col rounded-2xl md:rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${area.border} cursor-default`}
              >
                {/* Card background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${area.iconBg} flex items-center justify-center text-white shadow-md mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>

                  {/* Number badge */}
                  <span className={`text-xs font-bold uppercase tracking-widest mb-2 ${area.accent}`}>
                    Focus Area {String(area.id).padStart(2, "0")}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                    {area.description}
                  </p>

                  {/* Subtle arrow indicator */}
                  <div className={`mt-5 flex items-center gap-1.5 text-xs font-semibold ${area.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <span>{t("sfa.learn_more")}</span>
                    <svg
                      className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Decorative 6th cell — keeps the grid balanced on large screens */}
          <motion.div
            variants={cardVariants}
            className="hidden lg:flex flex-col items-center justify-center rounded-2xl md:rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 p-8 text-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
              <span className="text-2xl">🌍</span>
            </div>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 leading-snug">
              {t("sfa.more_soon")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
