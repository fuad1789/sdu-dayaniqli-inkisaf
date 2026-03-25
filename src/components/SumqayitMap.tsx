"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, Factory, Trees } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./LanguageContext";

interface Location {
  id: string;
  name: string;
  nameAz: string;
  x: number;
  y: number;
  type: "campus" | "research" | "industrial" | "restoration";
  description: string;
  descriptionAz: string;
}

const locations: Location[] = [
  {
    id: "sdu-campus",
    name: "SDU Main Campus",
    nameAz: "SDU Əsas Kampus",
    x: 50,
    y: 40,
    type: "campus",
    description: "Main university campus with sustainability research facilities",
    descriptionAz: "Dayanıqlılıq tədqiqatları obyektləri ilə əsas universitet kampusu",
  },
  {
    id: "research-center",
    name: "Environmental Research Center",
    nameAz: "Ətraf Mühit Tədqiqatları Mərkəzi",
    x: 30,
    y: 60,
    type: "research",
    description: "Leading facility for ecological monitoring and analysis",
    descriptionAz: "Ekoloji monitorinq və təhlil üçün aparıcı mərkəz",
  },
  {
    id: "industrial-zone",
    name: "Industrial Zone",
    nameAz: "Sənaye Zonası",
    x: 70,
    y: 30,
    type: "industrial",
    description: "Historical industrial area undergoing environmental restoration",
    descriptionAz: "Ekoloji bərpa olunan tarixi sənaye ərazisi",
  },
  {
    id: "restoration-area",
    name: "Environmental Restoration Area",
    nameAz: "Ətraf Mühitin Bərpası Ərazisi",
    x: 60,
    y: 70,
    type: "restoration",
    description: "Active ecological recovery and reforestation project",
    descriptionAz: "Aktiv ekoloji bərpa və yaşıllaşdırma layihəsi",
  },
];

const typeIcons = {
  campus: Building2,
  research: MapPin,
  industrial: Factory,
  restoration: Trees,
};

const typeColors = {
  campus: "text-blue-600 dark:text-blue-400",
  research: "text-green-600 dark:text-green-400",
  industrial: "text-orange-600 dark:text-orange-400",
  restoration: "text-emerald-600 dark:text-emerald-400",
};

const typeBgColors = {
  campus: "bg-blue-50 dark:bg-blue-900/20",
  research: "bg-green-50 dark:bg-green-900/20",
  industrial: "bg-orange-50 dark:bg-orange-900/20",
  restoration: "bg-emerald-50 dark:bg-emerald-900/20",
};

export default function SumqayitMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const { language } = useLanguage();

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
        {/* Simplified map background */}
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Abstract map elements */}
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300 dark:text-slate-700" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />

          {/* Abstract coastline */}
          <path d="M 0 80 Q 25 75 50 85 T 100 80 L 100 100 L 0 100 Z" fill="currentColor" className="text-blue-100 dark:text-blue-900/30" />

          {/* Abstract roads */}
          <path d="M 0 50 Q 50 45 100 55" stroke="currentColor" strokeWidth="1" fill="none" className="text-slate-400 dark:text-slate-600" />
          <path d="M 50 0 Q 55 50 100 50" stroke="currentColor" strokeWidth="1" fill="none" className="text-slate-400 dark:text-slate-600" />
        </svg>

        {/* Location markers */}
        {locations.map((location) => {
          const Icon = typeIcons[location.type];
          return (
            <motion.button
              key={location.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              onClick={() => setSelectedLocation(location)}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer p-2 rounded-full bg-white dark:bg-slate-800 shadow-lg border-2 ${typeColors[location.type]}`}
              style={{ left: `${location.x}%`, top: `${location.y}%` }}
              aria-label={language === "en" ? location.name : location.nameAz}
            >
              <Icon className="w-4 h-4" />
            </motion.button>
          );
        })}

        {/* Tooltip */}
        {selectedLocation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-xl p-4 border border-slate-200 dark:border-slate-700 shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                  {language === "en" ? selectedLocation.name : selectedLocation.nameAz}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {language === "en" ? selectedLocation.description : selectedLocation.descriptionAz}
                </p>
              </div>
              <button
                onClick={() => setSelectedLocation(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xl leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {Object.entries(typeIcons).map(([type, Icon]) => (
          <div key={type} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${typeBgColors[type as keyof typeof typeBgColors]}`}>
              <Icon className={`w-4 h-4 ${typeColors[type as keyof typeof typeColors]}`} />
            </div>
            <span className="capitalize">{type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
