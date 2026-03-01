"use client";

import { useLanguage } from "./LanguageContext";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "az" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer flex items-center gap-2"
      aria-label="Toggle language"
    >
      <Globe className="w-5 h-5 -mt-px opacity-80" />
      <span className="text-sm font-semibold uppercase tracking-wider">
        {language}
      </span>
    </button>
  );
}
