import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PolicyCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

export default function PolicyCard({
  icon: Icon,
  title,
  description,
  color,
  bgColor,
}: PolicyCardProps) {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", bgColor)}>
        <Icon className={cn("w-6 h-6", color)} />
      </div>
      <h3 className="font-semibold text-slate-900 dark:text-white text-lg mb-2">
        {title}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
        {description}
      </p>
      <button className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
        Learn more <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
