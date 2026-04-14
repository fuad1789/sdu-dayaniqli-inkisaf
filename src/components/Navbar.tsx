"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Leaf, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageContext";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedLink, setExpandedLink] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { t } = useLanguage();

  const handleMouseEnter = useCallback((href: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredLink(href);
  }, []);

  const handleMouseLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => setHoveredLink(null), 150);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: t("nav.gov2"),
      href: "/governance-policy",
      subLinks: [
        { name: t("gov2.section1.title"), id: "institutional-governance" },
        { name: t("gov2.section2.title"), id: "key-policies" },
        { name: t("gov2.scicouncil.title"), id: "scientific-council" },
        { name: t("gov2.center.title"), id: "sustainability-center" },
        { name: t("gov2.sdcommittee.title"), id: "sd-committee" },
        { name: t("gov2.section4.title"), id: "institutional-commitments" },
      ],
    },
    {
      name: t("nav.strat"),
      href: "/environmental-strategy",
      subLinks: [
        { name: t("strat.section1.title"), id: "climate-action-strategy" },
        { name: t("strat.section2.title"), id: "sdg-alignment" },
        { name: t("strat.section3.title"), id: "sustainability-goals" },
        { name: t("strat.section4.title"), id: "sdg-reports" },
        { name: t("strat.financial.title"), id: "financial-reports" },
        { name: t("strat.section5.title"), id: "key-indicators" },
      ],
    },
    {
      name: t("nav.res2"),
      href: "/sdg-research",
      subLinks: [
        { name: t("res2.section1.title"), id: "sumqayit-context" },
        { name: t("res2.section2.title"), id: "research-projects" },
        { name: t("res2.section3.title"), id: "research-partnerships" },
        { name: t("res2.section4.title"), id: "research-centres" },
        { name: t("res2.section5.title"), id: "student-research" },
        { name: t("res2.performance.title"), id: "research-performance" },
      ],
    },
    {
      name: t("nav.edu2"),
      href: "/education-curriculum",
      subLinks: [
        { name: t("edu2.section1.title"), id: "sustainability-topics" },
        { name: t("edu2.section2.title"), id: "courses-programs" },
        { name: t("edu2.section3.title"), id: "student-initiatives" },
        { name: t("edu2.section5.title"), id: "workshops-seminars" },
      ],
    },
    {
      name: t("nav.comm"),
      href: "/social-impact",
      subLinks: [
        { name: t("comm.section1.title"), id: "disability-support" },
        { name: t("comm.section2.title"), id: "partnerships" },
        { name: t("comm.wellbeing.title"), id: "wellbeing-services" },
        { name: t("comm.sports.title"), id: "sports-club" },
        { name: t("comm.clubs.title"), id: "student-clubs" },
        { name: t("edu2.ecoclub.title"), id: "eco-club" },
        { name: t("edu2.youthclub.title"), id: "youth-club" },
        { name: t("comm.survey.title"), id: "sustainability-survey" },
      ],
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
            <Leaf className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight text-slate-900 dark:text-white">SDU</span>
            <span className="text-xs font-semibold text-primary tracking-wide">{t("sdu.sus")}</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4">
          {/* Main nav pill container */}
          <div className="flex items-center gap-1 bg-slate-100/50 dark:bg-slate-800/50 px-3 py-2 rounded-full backdrop-blur-sm border border-slate-200 dark:border-slate-700">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.href)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap inline-flex items-center gap-1",
                    hoveredLink === link.href
                      ? "text-primary bg-primary/10 dark:text-primary-light dark:bg-primary-light/10"
                      : "text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary-light"
                  )}
                >
                  {link.name}
                  <ChevronDown
                    className={cn(
                      "w-3 h-3 transition-transform duration-200 opacity-50",
                      hoveredLink === link.href && "rotate-180 opacity-100"
                    )}
                  />
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {hoveredLink === link.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                    >
                      {/* Invisible bridge to prevent hover gap */}
                      <div className="absolute -top-1 left-0 right-0 h-4" />
                      <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xl shadow-slate-200/50 dark:shadow-black/30 overflow-hidden min-w-[280px]">
                        {/* Top accent line */}
                        <div className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />

                        <div className="p-2">
                          {link.subLinks.map((sub, i) => (
                            <motion.div
                              key={sub.id}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.2,
                                delay: i * 0.03,
                                ease: "easeOut",
                              }}
                            >
                              <Link
                                href={`${link.href}#${sub.id}`}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-primary/8 dark:hover:bg-primary-light/8 hover:text-primary dark:hover:text-primary-light transition-all duration-150 group"
                              >
                                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-primary dark:group-hover:bg-primary-light group-hover:scale-150 transition-all duration-150 shrink-0" />
                                <span className="flex-1 leading-snug">
                                  {sub.name}
                                </span>
                                <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-50 group-hover:translate-x-0 transition-all duration-150" />
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <LanguageToggle />
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-6 gap-1 max-h-[70vh] overflow-y-auto">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 px-4 mb-2">
                {t("nav.nav")}
              </p>
              {navLinks.map((link) => (
                <div key={link.href}>
                  <div className="flex items-center">
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-1 px-4 py-3 rounded-xl text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      {link.name}
                    </Link>
                    <button
                      onClick={() =>
                        setExpandedLink(
                          expandedLink === link.href ? null : link.href
                        )
                      }
                      className="p-2 mr-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          expandedLink === link.href && "rotate-180"
                        )}
                      />
                    </button>
                  </div>
                  <AnimatePresence>
                    {expandedLink === link.href && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-6 pb-2 flex flex-col gap-0.5">
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.id}
                              href={`${link.href}#${sub.id}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="px-4 py-2 rounded-lg text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary-light hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
