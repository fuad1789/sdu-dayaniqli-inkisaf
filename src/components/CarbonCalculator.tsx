"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Leaf, Zap, Car, Flame, TreePine } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CarbonCalculator() {
  const [electricity, setElectricity] = useState(300);
  const [transport, setTransport] = useState(500);
  const [gas, setGas] = useState(100);

  // Calculation Logic
  // Total CO2 = (Electricity * 0.4) + (Transport * 0.2) + (Gas * 2.0)
  const totalCO2 = useMemo(() => {
    return (electricity * 0.4) + (transport * 0.2) + (gas * 2.0);
  }, [electricity, transport, gas]);

  // Trees needed = Math.ceil((Total CO2 * 12) / 22)
  const treesNeeded = useMemo(() => {
    return Math.ceil((totalCO2 * 12) / 22);
  }, [totalCO2]);

  return (
    <section className="w-full py-12 md:py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 mb-6"
          >
            <Leaf className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">İnteraktiv Alət</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white"
          >
            Karbon İzi Kalkulyatoru
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-600 dark:text-slate-400"
          >
            Aylıq istehlak vərdişlərinizin təbiətə təsirini ölçün və onu sıfırlamaq üçün neçə ağaca ehtiyacınız olduğunu öyrənin.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-stretch w-full">
          
          {/* LEFT: Inputs Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-3/5 rounded-3xl p-6 md:p-8 lg:p-10 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Aylıq Göstəricilər</h3>
            
            <div className="space-y-6 md:space-y-8">
              {/* Electricity Slider */}
              <div>
                <div className="flex justify-between items-end mb-3 md:mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 md:p-2.5 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 shrink-0">
                      <Zap className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <label htmlFor="elec" className="block text-sm font-bold text-slate-900 dark:text-white leading-tight">Elektrik Sərfiyyatı</label>
                      <span className="text-[10px] md:text-xs font-medium text-slate-500">Aylıq, kWh</span>
                    </div>
                  </div>
                  <div className="text-lg md:text-xl font-bold px-2 py-0.5 md:px-3 md:py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-900 dark:text-white shrink-0">
                    {electricity}
                  </div>
                </div>
                <input 
                  id="elec"
                  type="range" 
                  min="0" 
                  max="1000" 
                  value={electricity} 
                  onChange={(e) => setElectricity(Number(e.target.value))}
                  className="w-full h-1.5 md:h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              {/* Transport Slider */}
              <div>
                <div className="flex justify-between items-end mb-3 md:mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 md:p-2.5 rounded-xl bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 shrink-0">
                      <Car className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <label htmlFor="trans" className="block text-sm font-bold text-slate-900 dark:text-white leading-tight">Nəqliyyat İzləri</label>
                      <span className="text-[10px] md:text-xs font-medium text-slate-500">Aylıq, km</span>
                    </div>
                  </div>
                  <div className="text-lg md:text-xl font-bold px-2 py-0.5 md:px-3 md:py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-900 dark:text-white shrink-0">
                    {transport}
                  </div>
                </div>
                <input 
                  id="trans"
                  type="range" 
                  min="0" 
                  max="2000" 
                  value={transport} 
                  onChange={(e) => setTransport(Number(e.target.value))}
                  className="w-full h-1.5 md:h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
              </div>

              {/* Gas Slider */}
              <div>
                <div className="flex justify-between items-end mb-3 md:mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 md:p-2.5 rounded-xl bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 shrink-0">
                      <Flame className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <label htmlFor="gas" className="block text-sm font-bold text-slate-900 dark:text-white leading-tight">Təbii Qaz</label>
                      <span className="text-[10px] md:text-xs font-medium text-slate-500">Aylıq, m³</span>
                    </div>
                  </div>
                  <div className="text-lg md:text-xl font-bold px-2 py-0.5 md:px-3 md:py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-900 dark:text-white shrink-0">
                    {gas}
                  </div>
                </div>
                <input 
                  id="gas"
                  type="range" 
                  min="0" 
                  max="500" 
                  value={gas} 
                  onChange={(e) => setGas(Number(e.target.value))}
                  className="w-full h-1.5 md:h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Results Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-2/5 relative overflow-hidden rounded-3xl p-6 md:p-8 lg:p-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl flex flex-col justify-center"
          >
            {/* Soft inner glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="relative z-10 text-center mb-8 md:mb-10">
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-300 mb-4 md:mb-6">
                Ümumi Emissiya
              </span>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <motion.span 
                  className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 drop-shadow-sm leading-none"
                  key={totalCO2} // Re-animate on change
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {Math.round(totalCO2)}
                </motion.span>
                <span className="text-xl md:text-2xl font-bold text-slate-400">kq</span>
              </div>
              <p className="text-slate-400 text-xs md:text-sm font-medium">Bu sizin təxmini aylıq karbon izinizi (CO₂) təmsil edir.</p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-10" />

            {/* Tree Offset Card */}
            <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 flex items-center text-left gap-4 md:gap-5 group overflow-hidden">
               {/* Animated Tree bg */}
               <div className="absolute right-[-20%] top-[-20%] opacity-10 group-hover:scale-125 transition-transform duration-[2s]">
                  <TreePine className="w-48 h-48" />
               </div>

               <div className="p-3 md:p-4 bg-emerald-500/20 text-emerald-400 rounded-2xl shadow-inner border border-emerald-500/30 shrink-0 relative z-10">
                 <TreePine className="w-6 h-6 md:w-8 md:h-8" />
               </div>
               
               <div className="relative z-10 flex-col flex">
                 <p className="text-xs md:text-sm font-bold text-slate-300 mb-1 leading-tight">Sıfırlamaq üçün lazım olan ağac</p>
                 <div className="flex items-baseline gap-1.5 md:gap-2">
                   <motion.span 
                     className="text-3xl md:text-4xl font-extrabold text-white leading-none"
                     key={treesNeeded}
                     initial={{ scale: 0.5, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     transition={{ type: "spring", bounce: 0.5 }}
                   >
                     {treesNeeded}
                   </motion.span>
                   <span className="text-slate-400 text-[10px] md:text-sm font-medium">ədəd (illik)</span>
                 </div>
               </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
