"use client";

import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Zap, Droplet, Leaf, Recycle, TrendingDown } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const data = [
  { name: "Jul", energy: 400, savings: 240 },
  { name: "Aug", energy: 300, savings: 139 },
  { name: "Sep", energy: 200, savings: 980 },
  { name: "Oct", energy: 278, savings: 390 },
  { name: "Nov", energy: 189, savings: 480 },
  { name: "Dec", energy: 239, savings: 380 },
  { name: "Jan", energy: 349, savings: 430 },
];

const getStats = (t: (key: string) => string) => [
  {
    title: t("impact.carbon.title"),
    value: "1,240",
    unit: t("impact.carbon.unit"),
    icon: Leaf,
    trend: "Keçən ilə nisbətən -12%",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: t("impact.energy.title"),
    value: "850",
    unit: t("impact.energy.unit"),
    icon: Zap,
    trend: "Keçən ilə nisbətən +18%",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: t("impact.water.title"),
    value: "4.5M",
    unit: t("impact.water.unit"),
    icon: Droplet,
    trend: "Keçən ilə nisbətən -5%",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    title: t("impact.waste.title"),
    value: "75",
    unit: "%",
    icon: Recycle,
    trend: "Keçən ilə nisbətən +10%",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

export default function ImpactDashboard() {
  const { t } = useLanguage();
  const stats = getStats(t);

  return (
    <section id="impact" className="w-full py-12 md:py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Stats Grid */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="mb-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-slate-900 dark:text-white">
                {t("impact.title")}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {t("impact.desc")}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:gap-4 flex-grow">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-3 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-2">
                      <div className={`p-2 rounded-xl ${stat.bg}`}>
                        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.color}`} />
                      </div>
                      <div className="flex items-center gap-1 text-[9px] sm:text-[10px] md:text-xs font-medium text-slate-500 bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded-full">
                        <TrendingDown className="w-3 h-3 shrink-0" />
                        <span className="inline-block truncate max-w-[50px] sm:max-w-[70px]">{stat.trend}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-slate-500 dark:text-slate-400 text-[10px] sm:text-xs font-bold mb-1 line-clamp-2 leading-tight" title={stat.title}>{stat.title}</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl sm:text-2xl xl:text-3xl font-black text-slate-900 dark:text-white leading-none tracking-tight">{stat.value}</span>
                        <span className="text-[10px] md:text-xs font-semibold text-slate-500">{stat.unit}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Chart Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 p-5 md:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col h-full"
          >
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-tight">{t("impact.chart.title")}</h3>
                <p className="text-slate-500 text-xs md:text-sm">{t("impact.chart.desc")}</p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white text-xs md:text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors whitespace-nowrap self-start sm:self-auto"
              >
                Hesabatı Yüklə
              </motion.button>
            </div>
            {/* Scrollable container to maintain chart visibility without breaking page */}
            <div className="flex-grow w-full relative min-h-[300px] h-[300px] overflow-x-auto overflow-y-hidden hide-scrollbar">
              <div className="min-w-[500px] w-full h-full pb-2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 20, right: 20, left: 10, bottom: 20 }}>
                    <defs>
                      <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#228B22" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#228B22" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#64748b', fontSize: 12 }} 
                      dy={10} 
                      label={{ value: 'Aylar', position: 'insideBottom', offset: -15, fill: '#64748b', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#64748b', fontSize: 12 }} 
                      label={{ value: 'MWh', angle: -90, position: 'insideLeft', offset: -5, fill: '#64748b', fontSize: 12 }}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', backdropFilter: 'blur(8px)' }}
                      itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                      labelStyle={{ color: '#94a3b8', marginBottom: '4px' }}
                      formatter={(value: number | undefined) => [`${value ?? 0} MWh`, 'Qənaət']}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="savings" 
                      stroke="#228B22" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorSavings)" 
                      animationDuration={1500}
                      activeDot={{ r: 6, fill: '#228B22', stroke: '#fff', strokeWidth: 2 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
