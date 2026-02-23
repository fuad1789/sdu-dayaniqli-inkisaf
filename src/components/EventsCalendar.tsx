"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const events = [
  {
    id: 1,
    title: "Yaşıl Kampus Günü: Kütləvi Ağacəkmə",
    date: "15",
    month: "Okt",
    time: "10:00 - 14:00",
    location: "Qeydiyyat Mərkəzi qarşısı",
    category: "Aksiya",
    color: "bg-emerald-500",
    textColor: "text-emerald-500",
  },
  {
    id: 2,
    title: "Təkrar Emal Seminarı: Gələcək Bizim Əlimizdə",
    date: "22",
    month: "Okt",
    time: "14:00 - 15:30",
    location: "Akt Zalı",
    category: "Təhsil",
    color: "bg-cyan-500",
    textColor: "text-cyan-500",
  },
  {
    id: 3,
    title: "Alternativ Enerji Mənbələri Sərgisi",
    date: "05",
    month: "Noy",
    time: "09:00 - 17:00",
    location: "Əsas Korpus Foye",
    category: "Sərgi",
    color: "bg-amber-500",
    textColor: "text-amber-500",
  },
];

export default function EventsCalendar() {
  return (
    <section id="events" className="w-full py-12 md:py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
              Qarşıdan Gələn Tədbirlər
            </h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
              SDU-nun yaşıllaşdırma və dayanıqlı inkişaf fəaliyyətlərinə aktiv qoşulun. Hər addım bir fərq yaradır.
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-6 py-3.5 md:py-3 rounded-full border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors whitespace-nowrap w-full md:w-auto"
          >
            Bütün Təqvimi Gör
            <Calendar className="w-4 h-4 ml-1" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group flex flex-col justify-between bg-white dark:bg-slate-900/20 rounded-3xl p-6 lg:p-8 border border-slate-200 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Date & Category minimal header */}
                <div className="flex justify-between items-start mb-8">
                  <div className="flex flex-col">
                    <span className="text-4xl lg:text-5xl font-light text-slate-900 dark:text-white tracking-tighter leading-none mb-1">
                      {event.date}
                    </span>
                    <span className={cn("text-xs font-bold uppercase tracking-[0.2em]", event.textColor)}>
                      {event.month}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    {event.category}
                  </span>
                </div>

                {/* Minimal Title */}
                <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 dark:text-white leading-snug mb-6 group-hover:text-primary transition-colors line-clamp-3">
                  {event.title}
                </h3>

                {/* Clean Details */}
                <div className="space-y-3 text-sm text-slate-500 dark:text-slate-400 font-medium">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 stroke-[1.5]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 stroke-[1.5]" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Minimal Action */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  Qeydiyyatdan Keç
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
