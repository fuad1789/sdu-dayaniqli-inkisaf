"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Leaf, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageContext";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.gov"), href: "#focus-areas" },
    { name: t("nav.env"), href: "#focus-areas" },
    { name: t("nav.soc"), href: "#focus-areas" },
    { name: t("nav.res"), href: "#focus-areas" },
    { name: t("nav.edu"), href: "#focus-areas" },
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
          <div className="flex items-center gap-5 bg-slate-100/50 dark:bg-slate-800/50 px-5 py-2.5 rounded-full backdrop-blur-sm border border-slate-200 dark:border-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary-light transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
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
            <nav className="flex flex-col px-4 py-6 gap-1">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 px-4 mb-2">
                {t("nav.nav")}
              </p>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
