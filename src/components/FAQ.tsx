"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "DİM (Dayanıqlı İnkişaf Məqsədləri) nədir?",
    answer: "Dayanıqlı İnkişaf Məqsədləri BMT tərəfindən irəli sürülmüş yoxsulluğun aradan qaldırılması, planetin qorunması və hamı üçün sülh və rifahın təmin edilməsini hədəfləyən 17 qlobal məqsəddir. SDU olaraq biz bu məqsədlərə öz siyasət və tədqiqatlarımızla güclü dəstək veririk."
  },
  {
    question: "Tələbələr ekoloji layihələrə necə qoşula bilər?",
    answer: "Tələbələrimiz il boyu keçirilən 'Yaşıl Kampus' ağacəkmə aksiyalarına, təkrar emal emalatxanalarına və Dayanıqlılıq İnkubatoruna birbaşa portalımızdakı Tədbirlər Təqvimi bölməsindən qeydiyyatdan keçərək qoşula bilərlər."
  },
  {
    question: "Universitetin 2030 hədəfi nədir?",
    answer: "Əsas hədəfimiz 2030-cu ilə qədər kampus daxilində tam sıfır karbon emissiyasına (Net-Zero) nail olmaq, bərpa olunan enerjiyə keçid etmək və qlobal dayanıqlılıq üzrə reytinqlərdə qabaqcıl ali təhsil müəssisələrindən birinə çevrilməkdir."
  },
  {
    question: "Təkrar emal qutuları kampusda harada yerləşir?",
    answer: "Əsas tədris binalarının foyelərində, kitabxanada, yeməkxana ərazisində və yataqxanaların girişində xüsusi qeyd edilmiş ağıllı təkrar emal qutuları (kağız, plastik və ümumi tullantı) mövcuddur."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first

  return (
    <section className="w-full py-24 bg-white dark:bg-slate-950">
      <div className="container max-w-4xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white"
          >
            Tez-tez Verilən Suallar
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Hədəflərimiz və təşəbbüslərimiz haqqında ən çox maraqlanılan mövzular.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-colors duration-300",
                  isOpen 
                    ? "bg-slate-50 border-emerald-500/30 dark:bg-slate-900 dark:border-emerald-500/50" 
                    : "bg-white border-slate-200 hover:border-slate-300 dark:bg-slate-950 dark:border-slate-800 dark:hover:border-slate-700"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-lg text-slate-900 dark:text-white pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                      isOpen ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400" : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                    )}
                  >
                    <Plus className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/50 mt-2">
                        <p className="pt-4">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
