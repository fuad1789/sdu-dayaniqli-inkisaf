"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function ContactLocation() {
  const { t } = useLanguage();
  return (
    <section className="w-full py-12 md:py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white"
          >
            {t("contact.title")}
          </motion.h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
            {t("contact.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Contact Info (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t("contact.info_center")}</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300">
                  <div className="p-3 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white mb-1">{t("contact.address.label")}</strong>
                    <span>{t("contact.address")}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300">
                  <div className="p-3 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white mb-1">{t("contact.phone.label")}</strong>
                    <span>+994 18 642 09 30</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300">
                  <div className="p-3 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white mb-1">{t("contact.email.label")}</strong>
                    <a href="mailto:info@sdu.edu.az" className="hover:text-emerald-600 transition-colors">info@sdu.edu.az</a>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300">
                  <div className="p-3 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white mb-1">{t("contact.hours.label")}</strong>
                    <span>{t("contact.hours")}</span>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-medium transition-colors">
                  {t("contact.link")}
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Map (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full h-[300px] lg:h-[450px] relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm bg-slate-200 dark:bg-slate-800"
          >
            {/* Google Maps iFrame */}
            <iframe 
              src="https://maps.google.com/maps?q=Sumqay%C4%B1t%20D%C3%B6vl%C9%99t%20Universiteti&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SDU Xəritə"
            ></iframe>
            
            {/* Overlay to integrate map colors slightly (optional stylistic choice) */}
            <div className="absolute inset-0 pointer-events-none mix-blend-saturation opacity-20 bg-slate-500 dark:bg-slate-900"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
