"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HeartHandshake, Wheat, HeartPulse, BookOpenCheck, Scale, Droplet, 
  Zap, Briefcase, Factory, Minimize, Building2, Recycle, 
  CloudRain, Fish, TreePine, ShieldCheck, Globe
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "./LanguageContext";

const SDGs = [
  { id: 1, title: "No Poverty", color: "bg-red-500", icon: HeartHandshake, action: "Over 500 scholarships and financial assistance grants provided annually to low-income students." },
  { id: 2, title: "Zero Hunger", color: "bg-amber-600", icon: Wheat, action: "Campus food banks and subsidized canteens ensuring no student goes hungry." },
  { id: 3, title: "Good Health & Well-Being", color: "bg-green-600", icon: HeartPulse, action: "Free 24/7 medical check-ups and psychological support services available on campus." },
  { id: 4, title: "Quality Education", color: "bg-red-700", icon: BookOpenCheck, action: "Modernized curricula integrating sustainability across 40+ degree programmes." },
  { id: 5, title: "Gender Equality", color: "bg-orange-600", icon: Scale, action: "Women's representation in STEM programmes raised to 55% through targeted outreach." },
  { id: 6, title: "Clean Water & Sanitation", color: "bg-cyan-500", icon: Droplet, action: "50+ smart water dispensers installed, saving 100,000 plastic bottles annually." },
  { id: 7, title: "Affordable & Clean Energy", color: "bg-yellow-500", icon: Zap, action: "30% of campus energy switched to solar via new rooftop panel installations." },
  { id: 8, title: "Decent Work & Economic Growth", color: "bg-rose-800", icon: Briefcase, action: "Campus incubator supporting 20+ student startups and driving local job creation." },
  { id: 9, title: "Industry, Innovation & Infrastructure", color: "bg-orange-500", icon: Factory, action: "Partnerships with leading tech companies to establish 3 new advanced research labs." },
  { id: 10, title: "Reduced Inequalities", color: "bg-pink-600", icon: Minimize, action: "Comprehensive accessibility upgrades across all campus buildings and platforms." },
  { id: 11, title: "Sustainable Cities & Communities", color: "bg-amber-500", icon: Building2, action: "Promoting green transit with free campus buses and bicycle-sharing programmes." },
  { id: 12, title: "Responsible Consumption & Production", color: "bg-amber-700", icon: Recycle, action: "Campus-wide zero-waste initiative targeting an 80% recycling rate by 2028." },
  // The following 5 SDGs are temporarily hidden — client reports are pending.
  // Uncomment to restore when reports are available.
  // { id: 13, title: "Climate Action", color: "bg-emerald-700", icon: CloudRain, action: "Commitment to reach net-zero carbon emissions across all facilities by 2040." },
  // { id: 14, title: "Life Below Water", color: "bg-blue-600", icon: Fish, action: "Coastal clean-up and conservation projects led by the Marine Biology department." },
  // { id: 15, title: "Life on Land", color: "bg-green-500", icon: TreePine, action: "5,000 trees planted and a protected botanical garden established on campus." },
  // { id: 16, title: "Peace, Justice & Strong Institutions", color: "bg-blue-800", icon: ShieldCheck, action: "Public forums with global experts on human rights and ethical governance." },
  // { id: 17, title: "Partnerships for the Goals", color: "bg-indigo-800", icon: Globe, action: "Collaboration with 15 international universities for joint sustainability research." },
];

// Currently rendering 12 SDGs (reports for SDG 13–17 pending from client).
// To restore all 17, remove .slice(0, 12) below.
const ACTIVE_SDGS = SDGs.slice(0, 12);

export default function SdgGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const { t, language } = useLanguage();

  const topSDGs = ACTIVE_SDGS.slice(0, 6);
  const remainingSDGs = ACTIVE_SDGS.slice(6);

  return (
    <section id="initiatives" className="w-full py-12 md:py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden relative">
      <div className="absolute left-0 top-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute right-[-10%] top-[20%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute left-[-10%] bottom-[10%] w-[30%] h-[30%] bg-cta/5 rounded-full blur-[80px]" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white"
          >
            {t("sdg.title")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-600 dark:text-slate-400"
          >
            {t("sdg.desc")}
          </motion.p>
        </div>

        {/* Top 6 SDGs (Horizontal scroll on mobile) */}
        <div className="flex overflow-x-auto hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 pb-4 md:pb-0 w-full overflow-y-hidden">
          {topSDGs.map((sdg) => {
            const isHovered = hoveredId === sdg.id;
            const Icon = sdg.icon;
            
            return (
              <div
                key={sdg.id}
                onMouseEnter={() => setHoveredId(sdg.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={cn(
                  "w-[280px] sm:w-[320px] shrink-0 md:w-auto md:shrink relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer transition-all duration-300 ease-in-out border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm group flex flex-col",
                  isHovered ? "shadow-xl border-slate-300 dark:border-slate-700" : ""
                )}
              >
                <div className="p-5 md:p-8 flex flex-col relative z-10 w-full md:min-h-[220px]">
                  <div className="flex items-center gap-3 md:gap-4 mb-3">
                    <div className={cn(
                      "w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-300",
                      sdg.color,
                      isHovered ? "scale-110" : ""
                    )}>
                      <Icon className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <div>
                      <span className="text-xs md:text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-0.5">
                        SDG {sdg.id}
                      </span>
                      <h3 className="font-bold text-lg md:text-xl text-slate-900 dark:text-white leading-tight">
                        {sdg.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                    {sdg.action}
                  </p>
                </div>
                
                {/* Decorative background gradient on hover */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300",
                  sdg.color
                )} />
              </div>
            );
          })}
        </div>
        
        {/* Accordion Toggle Button */}
        <div className="flex justify-center mb-8">
           <button 
             onClick={() => setExpanded(!expanded)}
             className="px-8 py-3 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium transition-colors flex items-center gap-2"
           >
             {expanded ? t("sdg.show_less") : t("sdg.see_all")}
             <motion.div
               animate={{ rotate: expanded ? 180 : 0 }}
               transition={{ duration: 0.3 }}
             >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                  <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
             </motion.div>
           </button>
        </div>

        {/* Expandable Remaining SDGs (7–12) */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4 pb-8">
                {remainingSDGs.map((sdg) => {
                  const Icon = sdg.icon;
                  return (
                    <div 
                      key={sdg.id} 
                      className="p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800/50 flex flex-col justify-between hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-3 mb-3">
                         <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white", sdg.color)}>
                            <Icon className="w-5 h-5" />
                         </div>
                         <h4 className="font-bold text-sm text-slate-900 dark:text-white leading-tight">
                           {sdg.id}. {sdg.title}
                         </h4>
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                        {sdg.action}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
