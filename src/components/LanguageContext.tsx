"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "az";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Define translation dictionary
export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.gov": "Governance & Policy",
    "nav.env": "Environmental Strategy",
    "nav.soc": "Social Impact",
    "nav.res": "SDG Research",
    "nav.edu": "Education & Curriculum",
    "nav.nav": "Navigation",
    "nav.sfa": "Strategic Focus Areas",
    "sdu.sus": "Sustainability",

    // Hero
    "hero.badge": "Sumgayit State University",
    "hero.title": "SDU: Shaping a <br class='hidden md:block' /> Sustainable Future, Today",
    "hero.desc": "Discover how we are transforming our campus and community for a better future through data-driven sustainable solutions aligned with the UN's SDGs.",
    "hero.explore": "Explore Our Impact",
    "hero.join": "Join Our Initiatives",

    // Strategic Focus Areas
    "sfa.badge": "Strategic Framework",
    "sfa.title": "Strategic Focus Areas",
    "sfa.desc": "Our sustainability agenda is structured around five interconnected pillars, each designed to create lasting, systemic change across campus and the wider community.",
    "sfa.focus1.title": "Governance & Policy",
    "sfa.focus1.desc": "Building transparent institutional frameworks, ethical decision-making processes, and evidence-based sustainability policies that drive long-term impact.",
    "sfa.focus2.title": "Environmental Strategy & Reporting",
    "sfa.focus2.desc": "Measuring, managing, and publishing our carbon footprint, energy consumption, and biodiversity impact through rigorous annual GRI-aligned reports.",
    "sfa.focus3.title": "Social Impact & Inclusion",
    "sfa.focus3.desc": "Advancing equity and belonging through inclusive access programs, disability support, gender equality initiatives, and community outreach partnerships.",
    "sfa.focus4.title": "SDG Research Outputs",
    "sfa.focus4.desc": "Producing peer-reviewed research, policy briefs, and innovation projects that directly contribute measurable progress to the UN's 17 Global Goals.",
    "sfa.focus5.title": "Education & Curriculum Integration",
    "sfa.focus5.desc": "Embedding sustainability competencies across all degree programmes, equipping every SDU graduate with the knowledge to lead the green transition.",
    "sfa.learn_more": "Learn more",
    "sfa.more_soon": "More initiatives coming soon",

    // SDG Grid
    "sdg.title": "SDG Goals in Action",
    "sdg.desc": "Our 12 active UN Sustainable Development Goals and the concrete contributions SDU is making toward each one.",
    "sdg.show_less": "Show Less",
    "sdg.see_all": "See All 12 Active Goals",
    
    // Impact Dashboard
    "impact.badge": "Live Data",
    "impact.title": "Impact Dashboard",
    "impact.desc": "Real-time metrics tracking our progress toward carbon neutrality and zero-waste campus operations.",
    "impact.carbon.title": "Carbon Offset",
    "impact.carbon.metric": "1,245",
    "impact.carbon.unit": "tons",
    "impact.energy.title": "Renewable Energy",
    "impact.energy.metric": "320",
    "impact.energy.unit": "MWh",
    "impact.waste.title": "Waste Recycled",
    "impact.waste.metric": "4,150",
    "impact.waste.unit": "kg",
    "impact.water.title": "Water Saved",
    "impact.water.metric": "1.2",
    "impact.water.unit": "M liters",
    "impact.chart.title": "Energy Consumption & Savings",
    "impact.chart.desc": "Monthly tracking (2024)",
    
    // Bento Activities
    "bento.title": "University Initiatives",
    "bento.desc": "Discover how we integrate sustainability into every aspect of campus life, from policy to research and student engagement.",
    "bento.card1.title": "Education & Curriculum",
    "bento.card1.desc": "More than 40 degree programs now reflect integrated coursework aimed at the UN Sustainable Development Goals.",
    "bento.card1.link": "View Courses",
    "bento.card2.title": "Social Impact and Inclusion",
    "bento.card2.desc": "Student Environmental Initiatives driving community awareness.",
    "bento.card3.title": "Governance & Policy",
    "bento.card3.desc": "Access our official Sustainability Strategy 2024-2030 document.",
    "bento.card3.link": "Download PDF",
    "bento.card4.badge": "Latest Research",
    "bento.card4.title": "\"Innovations in Renewable Energy Storage in Urban Environments\"",
    
    // Carbon Calculator
    "calc.badge": "Interactive Tool",
    "calc.title": "Carbon Footprint Calculator",
    "calc.desc": "Measure the impact of your daily habits on nature and find out how many trees you need to offset it.",
    "calc.monthly": "Monthly Indicators",
    "calc.elec.title": "Electricity Consumption",
    "calc.elec.unit": "Monthly, kWh",
    "calc.trans.title": "Transport Footprint",
    "calc.trans.unit": "Monthly, km",
    "calc.gas.title": "Natural Gas",
    "calc.gas.unit": "Monthly, m³",
    "calc.total.badge": "Total Emission",
    "calc.total.desc": "This represents your estimated monthly carbon footprint (CO₂).",
    "calc.tree.title": "Trees needed to offset",
    "calc.tree.unit": "trees/year",
    
    // Events
    "events.title": "Upcoming Events",
    "events.desc": "Stay engaged with SDU's greening and sustainable development activities. Every step makes a difference.",
    "events.view_all": "View All Events",
    "events.event1.title": "Green Campus Day: Mass Tree Planting",
    "events.event1.month": "Oct",
    "events.event1.loc": "In front of Registration Center",
    "events.event1.cat": "Action",
    "events.event2.title": "Recycling Seminar: The Future is in Our Hands",
    "events.event2.month": "Oct",
    "events.event2.loc": "Assembly Hall",
    "events.event2.cat": "Education",
    "events.event3.title": "Alternative Energy Sources Exhibition",
    "events.event3.month": "Nov",
    "events.event3.loc": "Main Building Foyer",
    "events.event3.cat": "Exhibition",
    "events.register": "Register",
    
    // Gallery
    "gallery.title": "Environment and Community",
    "gallery.desc": "The brightest moments of our sustainability initiatives on campus.",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.desc": "Answers to your questions about SDU's sustainable development activities.",
    "faq.q1": "What are SDGs (Sustainable Development Goals)?",
    "faq.a1": "The Sustainable Development Goals are 17 global goals proposed by the UN aimed at eradicating poverty, protecting the planet, and ensuring peace and prosperity for all. As SDU, we strongly support these goals with our policies and research.",
    "faq.q2": "How can students join ecological projects?",
    "faq.a2": "Our students can join the 'Green Campus' tree planting actions, recycling workshops, and Sustainability Incubator held throughout the year by registering directly from the Events Calendar section on our portal.",
    "faq.q3": "What is the university's 2030 goal?",
    "faq.a3": "Our main goal is to achieve full zero carbon emissions (Net-Zero) within the campus by 2030, switch to renewable energy, and become one of the leading higher education institutions in global sustainability rankings.",
    "faq.q4": "Where are recycling bins located on campus?",
    "faq.a4": "Specially marked smart recycling bins (paper, plastic, and general waste) are available in the foyers of main educational buildings, the library, the dining area, and at the entrances of dormitories.",

    // Contact
    "contact.title": "Contact and Location",
    "contact.desc": "Contact us or visit the campus for a more sustainable future.",
    "contact.info_center": "Information Center",
    "contact.address.label": "Address",
    "contact.address": "Sumgait city, 43rd block, Sumgait State University Main Building (SDG Center)",
    "contact.phone.label": "Phone",
    "contact.email.label": "Email",
    "contact.hours.label": "Working Hours",
    "contact.hours": "Mon - Fri : 09:00 - 18:00",
    "contact.link": "Visit Official Website",

    // Footer
    "footer.rights": "All rights reserved.",
  },
  az: {
    // Navbar
    "nav.gov": "İdarəetmə və Siyasət",
    "nav.env": "Ekoloji Strategiya",
    "nav.soc": "Sosial Təsir",
    "nav.res": "DİM Tədqiqatları",
    "nav.edu": "Təhsil və Kurikulum",
    "nav.nav": "Naviqasiya",
    "nav.sfa": "Strateji İstiqamətlər",
    "sdu.sus": "Dayanıqlılıq",

    // Hero
    "hero.badge": "Sumqayıt Dövlət Universiteti",
    "hero.title": "SDU: Dayanıqlı Gələcəyi <br class='hidden md:block' /> Bu Gündən Şəkilləndiririk",
    "hero.desc": "BMT-nin DİM-lərinə uyğun olaraq məlumatlara əsaslanan dayanıqlı həllər vasitəsilə kampüsümüzü və cəmiyyətimizi necə dəyişdiyimizi kəşf edin.",
    "hero.explore": "Təsirimizlə Tanış Olun",
    "hero.join": "Təşəbbüslərimizə Qoşulun",

    // Strategic Focus Areas
    "sfa.badge": "Strateji Çərçivə",
    "sfa.title": "Strateji İstiqamətlər",
    "sfa.desc": "Davamlılıq gündəmimiz kampüs və daha geniş icmada qalıcı, sistemli dəyişiklik yaratmaq üçün nəzərdə tutulmuş beş bir-biri ilə əlaqəli sütun ətrafında qurulub.",
    "sfa.focus1.title": "İdarəetmə və Siyasət",
    "sfa.focus1.desc": "Uzunmüddətli təsir göstərən şəffaf institusional çərçivələrin, etik qərar qəbuletmə proseslərinin və sübutlara əsaslanan siyasətlərin qurulması.",
    "sfa.focus2.title": "Ekoloji Strategiya və Hesabatlılıq",
    "sfa.focus2.desc": "Karbon izi, enerji sərfiyyatı və biomüxtəlifliyə təsiri GRI standartlarına cavab verən illik hesabatlar vasitəsilə ölçmək və idarə etmək.",
    "sfa.focus3.title": "Sosial Təsir və İnklüzivlik",
    "sfa.focus3.desc": "İnklüziv proqramlar, əlilliyi olan şəxslərə dəstək, gender bərabərliyi təşəbbüsləri vasitəsilə ədaləti inkişaf etdirmək.",
    "sfa.focus4.title": "DİM Tədqiqat Nəticələri",
    "sfa.focus4.desc": "BMT-nin 17 Qlobal Məqsədinə birbaşa töhfə verən tədqiqat, siyasət xülasələri və innovasiya layihələrinin istehsalı.",
    "sfa.focus5.title": "Təhsil və Kurikulum İnteqrasiyası",
    "sfa.focus5.desc": "Bütün dərəcə proqramlarına davamlılıq kompetensiyalarının daxil edilməsi.",
    "sfa.learn_more": "Daha ətraflı",
    "sfa.more_soon": "Daha çox təşəbbüs tezliklə",

    // SDG Grid
    "sdg.title": "DİM Hədəfləri Fəaliyyətdə",
    "sdg.desc": "SDU-nun 12 aktiv BMT Davamlı İnkişaf Məqsədi və hər birinə verdiyi konkret töhfələr.",
    "sdg.show_less": "Daha Az Göstər",
    "sdg.see_all": "Bütün 12 Aktiv Hədəfi Göstər",
    
    // Impact Dashboard
    "impact.badge": "Canlı Məlumatlar",
    "impact.title": "Təsir Paneli",
    "impact.desc": "Karbon neytrallığı və tullantısız kampüs əməliyyatlarına doğru irəliləyişimizi izləyən real vaxt göstəriciləri.",
    "impact.carbon.title": "Azaldılmış Karbon",
    "impact.carbon.metric": "1,245",
    "impact.carbon.unit": "ton",
    "impact.energy.title": "Bərpa Olunan Enerji",
    "impact.energy.metric": "320",
    "impact.energy.unit": "MWh",
    "impact.waste.title": "Təkrar Emal Edilən Tullantı",
    "impact.waste.metric": "4,150",
    "impact.waste.unit": "kq",
    "impact.water.title": "Su Qənaəti",
    "impact.water.metric": "1.2",
    "impact.water.unit": "M litr",
    "impact.chart.title": "Enerji İstehlakı & Qənaət",
    "impact.chart.desc": "Aylıq izləmə (2024)",
    
    // Bento Activities
    "bento.title": "Universitet Təşəbbüsləri",
    "bento.desc": "SDU kampüsündə həyata keçirilən davamlı inkişaf layihələri və aktiv tədbirlərimizlə tanış olun.",
    
    // Carbon Calculator
    "calc.badge": "İnteraktiv Alət",
    "calc.title": "Karbon İzi Kalkulyatoru",
    "calc.desc": "Kampüs daxilində gündəlik fəaliyyətlərinizin təbiətə təsirini hesablayın və kompensasiya yollarını öyrənin.",
    
    // Events
    "events.title": "Gələcəkdən Gələn Tədbirlər",
    "events.desc": "Davamlı inkişaf hədəflərini dəstəkləyən qarşıdan gələn seminarlar, aksiyalar və panellər.",
    "events.view_all": "Bütün tədbirləri gör",
    
    // Gallery
    "gallery.title": "Mühit və İcma",
    "gallery.desc": "Kampüsdəki davamlılıq təşəbbüslərindən ən parlaq anlar.",

    // FAQ
    "faq.title": "Tez-Tez Verilən Suallar",
    "faq.desc": "SDU-nun davamlı inkişaf fəaliyyətləri haqqında suallarınızın cavabları.",

    // Contact
    "contact.title": "Əlaqə və Ünvan",
    "contact.desc": "Bizimlə əlaqə saxlayaraq davamlı gələcək üçün birgə addımlayaq.",
    "contact.address.title": "Məkan & Ofisimiz",
    "contact.address": "Sumqayıt, 43-cü məhəllə, SDU Əsas Bina, Otaq 115",
    "contact.email": "sustainability@sdu.edu.az",
    "contact.phone": "+994 (12) 345-67-89",
    "contact.btn": "Təşəbbüsə qoşul",

    // Footer
    "footer.rights": "Bütün hüquqlar qorunur.",
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en");

  // On mount, load language from localStorage
  useEffect(() => {
    const storedLang = localStorage.getItem("sdu-lang") as Language;
    if (storedLang && (storedLang === "en" || storedLang === "az")) {
      setLanguageState(storedLang);
    } else {
      setLanguageState("az"); // Default to AZ
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("sdu-lang", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
