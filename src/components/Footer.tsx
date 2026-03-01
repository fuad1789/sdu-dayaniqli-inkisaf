"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Leaf } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="w-full bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pb-8 lg:pb-12 pt-16">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16">
          
          {/* Brand & Intro Column */}
          <div className="lg:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-6 group hover:shadow-md transition-shadow">
              <Leaf className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold tracking-wide text-slate-800 dark:text-slate-200">SDU - DİM Portalı</span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
              Sumqayıt Dövlət Universiteti olaraq biz innovasiya, ətraf mühitə qayğı və dayanıqlı gələcək üçün inamla addımlayırıq.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-400 transition-colors shadow-sm border border-slate-100 dark:border-slate-700">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-400 transition-colors shadow-sm border border-slate-100 dark:border-slate-700">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-400 transition-colors shadow-sm border border-slate-100 dark:border-slate-700">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Column 1: Faydalı Linklər */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 tracking-wide">Faydalı Linklər</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
              <li><Link href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block hover:translate-x-1 duration-200">SDU Rəsmi Saytı</Link></li>
              <li><Link href="#initiatives" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block hover:translate-x-1 duration-200">Təşəbbüslər</Link></li>
              <li><Link href="#impact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block hover:translate-x-1 duration-200">Ekoloji Hesabatlar</Link></li>
              <li><Link href="#events" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block hover:translate-x-1 duration-200">Tədbirlər Təqvimi</Link></li>
              <li><Link href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block hover:translate-x-1 duration-200">Tələbə Portalı</Link></li>
            </ul>
          </div>

          {/* Links Column 2: Hüquqi Məlumat */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 tracking-wide">Hüquqi Məlumat</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-600 dark:text-slate-400">
              <li><Link href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block hover:translate-x-1 duration-200">Məxfilik Siyasəti</Link></li>
              <li><Link href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block hover:translate-x-1 duration-200">İstifadəçi Şərtləri</Link></li>
              <li><Link href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block hover:translate-x-1 duration-200">Kuki Siyasəti</Link></li>
              <li><Link href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-block hover:translate-x-1 duration-200">Təhlükəsizlik</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between pt-8 border-t border-slate-200 dark:border-slate-800 text-sm xl:text-base text-slate-500 dark:text-slate-400 gap-4 md:gap-0">
          <p className="text-center md:text-left">© 2026 {t("hero.badge")}. {t("footer.rights")}</p>
          <div className="mt-2 md:mt-0 flex space-x-6">
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Ana Səhifə</Link>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Dəstək</Link>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
