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

    // Environmental Strategy Page
    "env.badge": "Strategic Focus Area 2",
    "env.title": "Environmental Strategy",
    "env.desc": "Measuring, managing, and publishing our carbon footprint, energy consumption, and biodiversity impact through rigorous GRI-aligned annual reports.",

    "env.metric1.label": "Carbon reduction vs 2020 baseline",
    "env.metric2.label": "Renewable energy generated",
    "env.metric3.label": "Water saved annually",
    "env.metric4.label": "Target by 2030",

    "env.initiatives.title": "Active Initiatives",

    "env.init1.title": "Solar Energy Expansion",
    "env.init1.status": "Active",
    "env.init1.desc": "Installing 500kW solar panels across campus rooftops to cover 40% of energy needs by 2025.",

    "env.init2.title": "Rainwater Harvesting System",
    "env.init2.status": "Active",
    "env.init2.desc": "Campus-wide collection infrastructure now recovers over 1.2 million litres of water annually.",

    "env.init3.title": "Zero-Waste Campus Programme",
    "env.init3.status": "In Progress",
    "env.init3.desc": "Waste segregation stations, composting, and single-use plastic elimination across all buildings.",

    "env.init4.title": "Urban Green Belt",
    "env.init4.status": "Planned",
    "env.init4.desc": "3-hectare biodiversity corridor with native plant species bordering the main campus.",

    "env.cta.title": "Access our Environmental Reports",
    "env.cta.desc": "Full GRI-aligned sustainability reports are available for download from the SDU Document Portal.",
    "env.cta.btn": "Back to Home",

    // Social Impact Page
    "soc.badge": "Strategic Focus Area 3",
    "soc.title": "Social Impact & Inclusion",
    "soc.desc": "Advancing equity and belonging through inclusive access programs, disability support, gender equality initiatives, and community outreach partnerships.",
    "soc.metric1.label": "Students receiving financial aid",
    "soc.metric2.label": "Women in STEM programs",
    "soc.metric3.label": "Community outreach projects",
    "soc.metric4.label": "Campus accessibility rating",
    "soc.initiatives.title": "Active Initiatives",
    "soc.init1.title": "Women in STEM Mentorship",
    "soc.init1.desc": "Connecting female students with industry leaders to boost representation in technical fields.",
    "soc.init1.status": "Active",
    "soc.init2.title": "Accessible Campus Initiative",
    "soc.init2.desc": "Upgrading all campus facilities with ramps, elevators, and braille signage.",
    "soc.init2.status": "In Progress",
    "soc.init3.title": "Rural Student Support Fund",
    "soc.init3.desc": "Providing housing and stipends for students from remote regions.",
    "soc.init3.status": "Active",
    "soc.init4.title": "Community Volunteering Program",
    "soc.init4.desc": "Coordinating student volunteer hours for local NGOs and schools.",
    "soc.init4.status": "Planned",
    "soc.cta.title": "Join Our Community Efforts",
    "soc.cta.desc": "Get involved in our social initiatives and make a difference today.",
    "soc.cta.btn": "Explore Opportunities",

    // SDG Research Page
    "res.badge": "Strategic Focus Area 4",
    "res.title": "SDG Research Outputs",
    "res.desc": "Producing peer-reviewed research, policy briefs, and innovation projects that directly contribute measurable progress to the UN's 17 Global Goals.",
    "res.metric1.label": "Peer-reviewed papers published",
    "res.metric2.label": "Active SDG research grants",
    "res.metric3.label": "International partnerships",
    "res.metric4.label": "Student research projects",
    "res.initiatives.title": "Key Research Projects",
    "res.init1.title": "Renewable Energy Lab",
    "res.init1.desc": "Developing cost-effective solar storage solutions for urban environments.",
    "res.init1.status": "Active",
    "res.init2.title": "Caspian Sea Biodiversity Study",
    "res.init2.desc": "Tracking marine life changes and pollution levels in partnership with global NGOs.",
    "res.init2.status": "In Progress",
    "res.init3.title": "Sustainable Agriculture Tech",
    "res.init3.desc": "Testing IoT sensors for water optimization in regional farming.",
    "res.init3.status": "Planned",
    "res.init4.title": "Green Economy Policy Briefs",
    "res.init4.desc": "Advising local government on circular economy transitions.",
    "res.init4.status": "Active",
    "res.cta.title": "Access our Research Portal",
    "res.cta.desc": "Read our latest publications and discover collaboration opportunities.",
    "res.cta.btn": "View Publications",

    // Education & Curriculum Page
    "edu.badge": "Strategic Focus Area 5",
    "edu.title": "Education & Curriculum",
    "edu.desc": "Embedding sustainability competencies across all degree programmes, equipping every SDU graduate with the knowledge to lead the green transition.",
    "edu.metric1.label": "Courses integrating SDGs",
    "edu.metric2.label": "Dedicated sustainability degrees",
    "edu.metric3.label": "Faculty trained in green education",
    "edu.metric4.label": "Students enrolled in green courses",
    "edu.initiatives.title": "Curriculum Updates",
    "edu.init1.title": "Mandatory 'Green Transition' Core Course",
    "edu.init1.desc": "A foundational course required for all first-year students across all faculties.",
    "edu.init1.status": "Active",
    "edu.init2.title": "MSc in Sustainable Development",
    "edu.init2.desc": "New interdisciplinary master's degree launching next academic year.",
    "edu.init2.status": "In Progress",
    "edu.init3.title": "Faculty Green Training Workshops",
    "edu.init3.desc": "Equipping professors with tools to integrate SDGs into existing syllabi.",
    "edu.init3.status": "Active",
    "edu.init4.title": "Student Sustainability Incubator",
    "edu.init4.desc": "A lab for students to develop and prototype eco-friendly business models.",
    "edu.init4.status": "Planned",
    "edu.cta.title": "Review Our Academic Offerings",
    "edu.cta.desc": "Explore syllabi, green degrees, and training programs at SDU.",
    "edu.cta.btn": "View Course Catalog",

    // Governance & Policy Page
    "gov.title": "Governance & Policy",
    "gov.desc": "Building transparent institutional frameworks, ethical decision-making processes, and evidence-based sustainability policies that drive long-term impact.",
    "gov.pillars.title": "Our Governance Pillars",
    "gov.pillars.desc": "Four interconnected principles that underpin how SDU governs its sustainability agenda.",
    "gov.pillar1.title": "Institutional Integrity",
    "gov.pillar1.desc": "Establishing robust governance frameworks that embed sustainability accountability at every level of university leadership.",
    "gov.pillar2.title": "Evidence-Based Policy",
    "gov.pillar2.desc": "Drafting and reviewing sustainability policies grounded in peer-reviewed data, international benchmarks, and stakeholder consultation.",
    "gov.pillar3.title": "Transparent Reporting",
    "gov.pillar3.desc": "Publishing annual sustainability reports compliant with GRI and IESBA standards, ensuring complete public accountability.",
    "gov.pillar4.title": "Stakeholder Engagement",
    "gov.pillar4.desc": "Creating meaningful dialogue between faculty, students, government authorities, and NGOs to co-design sustainability initiatives.",
    "gov.docs.title": "Policy Documents",
    "gov.doc1.title": "SDU Sustainability Strategy 2024–2030",
    "gov.doc1.tag": "Strategy",
    "gov.doc2.title": "Annual GRI Sustainability Report",
    "gov.doc2.tag": "Report",
    "gov.doc3.title": "Campus Carbon Neutrality Roadmap",
    "gov.doc3.tag": "Roadmap",
    "gov.doc4.title": "Stakeholder Engagement Charter",
    "gov.doc4.tag": "Policy",
    "gov.cta.title": "Contribute to Our Policy Work",
    "gov.cta.desc": "Faculty, students, and community partners can submit policy proposals through the SDU Sustainability Portal.",
    "gov.cta.btn": "Back to Home",
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
    "bento.card1.title": "Təhsil və Kurikulum",
    "bento.card1.desc": "Artıq 40-dan çox dərəcə proqramımız BMT-nin Dayanıqlı İnkişaf Məqsədlərinə yönəlmiş inteqrasiya olunmuş kursları özündə əks etdirir.",
    "bento.card1.link": "Kurslara Bax",
    "bento.card2.title": "Sosial Təsir və İnklüzivlik",
    "bento.card2.desc": "İcma fərqindəliyini artıran Tələbə Ekoloji Təşəbbüsləri.",
    "bento.card3.title": "İdarəetmə və Siyasət",
    "bento.card3.desc": "Rəsmi Davamlılıq Strategiyası 2024-2030 sənədimizlə tanış olun.",
    "bento.card3.link": "Sənədi Yüklə",
    "bento.card4.badge": "Ən Son Tədqiqat",
    "bento.card4.title": "\"Şəhər Mühitlərində Bərpa Olunan Enerji Saxlanmasında İnnovasiyalar\"",
    
    // Carbon Calculator
    "calc.badge": "İnteraktiv Alət",
    "calc.title": "Karbon İzi Kalkulyatoru",
    "calc.desc": "Kampüs daxilində gündəlik fəaliyyətlərinizin təbiətə təsirini hesablayın və kompensasiya yollarını öyrənin.",
    "calc.monthly": "Aylıq Göstəricilər",
    "calc.elec.title": "Elektrik Sərfiyyatı",
    "calc.elec.unit": "Aylıq, kWh",
    "calc.trans.title": "Nəqliyyat İzləri",
    "calc.trans.unit": "Aylıq, km",
    "calc.gas.title": "Təbii Qaz",
    "calc.gas.unit": "Aylıq, m³",
    "calc.total.badge": "Ümumi Emissiya",
    "calc.total.desc": "Bu sizin təxmini aylıq karbon izinizi (CO₂) təmsil edir.",
    "calc.tree.title": "Sıfırlamaq üçün lazım olan ağac",
    "calc.tree.unit": "ədəd (illik)",
    
    // Events
    "events.title": "Gələcəkdən Gələn Tədbirlər",
    "events.desc": "Davamlı inkişaf hədəflərini dəstəkləyən qarşıdan gələn seminarlar, aksiyalar və panellər.",
    "events.view_all": "Bütün tədbirləri gör",
    "events.event1.title": "Yaşıl Kampus Günü: Kütləvi Ağacəkmə",
    "events.event1.month": "Okt",
    "events.event1.loc": "Qeydiyyat Mərkəzi qarşısı",
    "events.event1.cat": "Aksiya",
    "events.event2.title": "Təkrar Emal Seminarı: Gələcək Bizim Əlimizdə",
    "events.event2.month": "Okt",
    "events.event2.loc": "Akt Zalı",
    "events.event2.cat": "Təhsil",
    "events.event3.title": "Alternativ Enerji Mənbələri Sərgisi",
    "events.event3.month": "Noy",
    "events.event3.loc": "Əsas Korpus Foye",
    "events.event3.cat": "Sərgi",
    "events.register": "Qeydiyyatdan Keç",
    
    // Gallery
    "gallery.title": "Mühit və İcma",
    "gallery.desc": "Kampüsdəki davamlılıq təşəbbüslərindən ən parlaq anlar.",

    // FAQ
    "faq.title": "Tez-Tez Verilən Suallar",
    "faq.desc": "SDU-nun davamlı inkişaf fəaliyyətləri haqqında suallarınızın cavabları.",
    "faq.q1": "DİM (Dayanıqlı İnkişaf Məqsədləri) nədir?",
    "faq.a1": "Dayanıqlı İnkişaf Məqsədləri BMT tərəfindən irəli sürülmüş yoxsulluğun aradan qaldırılması, planetin qorunması və hamı üçün sülh və rifahın təmin edilməsini hədəfləyən 17 qlobal məqsəddir. SDU olaraq biz bu məqsədlərə öz siyasət və tədqiqatlarımızla güclü dəstək veririk.",
    "faq.q2": "Tələbələr ekoloji layihələrə necə qoşula bilər?",
    "faq.a2": "Tələbələrimiz il boyu keçirilən 'Yaşıl Kampus' ağacəkmə aksiyalarına, təkrar emal emalatxanalarına və Dayanıqlılıq İnkubatoruna birbaşa portalımızdakı Tədbirlər Təqvimi bölməsindən qeydiyyatdan keçərək qoşula bilərlər.",
    "faq.q3": "Universitetin 2030 hədəfi nədir?",
    "faq.a3": "Əsas hədəfimiz 2030-cu ilə qədər kampus daxilində tam sıfır karbon emissiyasına (Net-Zero) nail olmaq, bərpa olunan enerjiyə keçid etmək və qlobal dayanıqlılıq üzrə reytinqlərdə qabaqcıl ali təhsil müəssisələrindən birinə çevrilməkdir.",
    "faq.q4": "Təkrar emal qutuları kampusda harada yerləşir?",
    "faq.a4": "Əsas tədris binalarının foyelərində, kitabxanada, yeməkxana ərazisində və yataqxanaların girişində xüsusi qeyd edilmiş ağıllı təkrar emal qutuları (kağız, plastik və ümumi tullantı) mövcuddur.",

    // Contact
    "contact.title": "Əlaqə və Ünvan",
    "contact.desc": "Bizimlə əlaqə saxlayaraq davamlı gələcək üçün birgə addımlayaq.",
    "contact.info_center": "Məlumat Mərkəzi",
    "contact.address.label": "Ünvan",
    "contact.address.title": "Məkan & Ofisimiz",
    "contact.address": "Sumqayıt, 43-cü məhəllə, SDU Əsas Bina, Otaq 115",
    "contact.phone.label": "Telefon",
    "contact.email.label": "Elektron Poçt",
    "contact.email": "sustainability@sdu.edu.az",
    "contact.phone": "+994 18 642 09 30",
    "contact.hours.label": "İş Saatları",
    "contact.hours": "B.e. - C. : 09:00 - 18:00",
    "contact.link": "Rəsmi Veb-Sayta Keçid",
    "contact.btn": "Təşəbbüsə qoşul",

    // Footer
    "footer.rights": "Bütün hüquqlar qorunur.",

    // Environmental Strategy Page
    "env.badge": "Strateji İstiqamət 2",
    "env.title": "Ekoloji Strategiya",
    "env.desc": "Karbon izimizi, enerji sərfiyyatımızı və biomüxtəlifliyə təsirimizi GRI standartlarına uyğun illik hesabatlar vasitəsilə ölçür, idarə edir və nəşr edirik.",

    "env.metric1.label": "2020-ci il baza göstəricisinə nisbətən karbon azalması",
    "env.metric2.label": "İstehsal edilən bərpa olunan enerji",
    "env.metric3.label": "İllik su qənaəti",
    "env.metric4.label": "2030-cu ilədək hədəf",

    "env.initiatives.title": "Aktiv Təşəbbüslər",

    "env.init1.title": "Günəş Enerjisinin Genişləndirilməsi",
    "env.init1.status": "Aktiv",
    "env.init1.desc": "2025-ci ilə qədər enerji ehtiyacının 40%-ni ödəmək üçün kampus damlarında 500 kVt günəş panelləri quraşdırılır.",

    "env.init2.title": "Yağış Suyunun Toplanması Sistemi",
    "env.init2.status": "Aktiv",
    "env.init2.desc": "Kampüs miqyaslı toplama infrastrukturu artıq hər il 1,2 milyondan çox litr su bərpa edir.",

    "env.init3.title": "Tullantısız Kampus Proqramı",
    "env.init3.status": "Davam edir",
    "env.init3.desc": "Bütün binalarda tullantı ayrışdırma stansiyaları, kompostlaşdırma və birdəfəlik plastikdən imtina.",

    "env.init4.title": "Şəhər Yaşıl Zolağı",
    "env.init4.status": "Planlaşdırılır",
    "env.init4.desc": "Əsas kampusun ətrafında yerli bitki növləri ilə 3 hektar biomüxtəliflik koridoru.",

    "env.cta.title": "Ekoloji Hesabatlarımıza Daxil Olun",
    "env.cta.desc": "Tam GRI standartlarına uyğun davamlılıq hesabatları SDU Sənəd Portalından yükləmək üçün mövcuddur.",
    "env.cta.btn": "Ana Səhifəyə Qayıt",

    // Social Impact Page
    "soc.badge": "Strateji İstiqamət 3",
    "soc.title": "Sosial Təsir və İnklüzivlik",
    "soc.desc": "İnklüziv proqramlar, əlilliyi olan şəxslərə dəstək, gender bərabərliyi təşəbbüsləri və icma tərəfdaşlıqları vasitəsilə bərabərliyi inkişaf etdiririk.",
    "soc.metric1.label": "Maliyyə yardımı alan tələbələr",
    "soc.metric2.label": "STEM proqramlarında qadınlar",
    "soc.metric3.label": "İcma dəstək layihələri",
    "soc.metric4.label": "Kampusun əlçatanlıq reytinqi",
    "soc.initiatives.title": "Aktiv Təşəbbüslər",
    "soc.init1.title": "STEM-də Qadınlar Mentoru Proqramı",
    "soc.init1.desc": "Texniki sahələrdə təmsilçiliyi artırmaq üçün qadın tələbələri sənaye liderləri ilə birləşdirir.",
    "soc.init1.status": "Aktiv",
    "soc.init2.title": "Əlçatan Kampus Təşəbbüsü",
    "soc.init2.desc": "Bütün kampus obyektlərini panduslar, liftlər və brayl lövhələri ilə təkmilləşdirmək.",
    "soc.init2.status": "Davam edir",
    "soc.init3.title": "Kənd Tələbələrinə Dəstək Fondu",
    "soc.init3.desc": "Ucqar bölgələrdən gələn tələbələr üçün mənzil və təqaüd təminatı.",
    "soc.init3.status": "Aktiv",
    "soc.init4.title": "İcma Könüllülük Proqramı",
    "soc.init4.desc": "Yerli QHT-lər və məktəblər üçün tələbə könüllü saatlarının əlaqələndirilməsi.",
    "soc.init4.status": "Planlaşdırılır",
    "soc.cta.title": "İcma Səylərimizə Qoşulun",
    "soc.cta.desc": "Sosial təşəbbüslərimizdə iştirak edin və bu gün fərq yaradın.",
    "soc.cta.btn": "İmkanları Kəşf Edin",

    // SDG Research Page
    "res.badge": "Strateji İstiqamət 4",
    "res.title": "DİM Tədqiqat Nəticələri",
    "res.desc": "BMT-nin 17 Qlobal Məqsədinə birbaşa töhfə verən elmi məqalələr, siyasət xülasələri və innovasiya layihələri istehsal edirik.",
    "res.metric1.label": "Dərc edilmiş elmi məqalələr",
    "res.metric2.label": "Aktiv tədqiqat qrantları",
    "res.metric3.label": "Beynəlxalq tərəfdaşlıqlar",
    "res.metric4.label": "Tələbə tədqiqat layihələri",
    "res.initiatives.title": "Əsas Tədqiqat Layihələri",
    "res.init1.title": "Bərpa Olunan Enerji Laboratoriyası",
    "res.init1.desc": "Şəhər mühitləri üçün sərfəli günəş enerjisi saxlama həllərinin inkişafı.",
    "res.init1.status": "Aktiv",
    "res.init2.title": "Xəzər Dənizi Biomüxtəliflik Tədqiqatı",
    "res.init2.desc": "Qlobal QHT-lərlə tərəfdaşlıqda dəniz həyatı dəyişikliklərinin və çirklənmə səviyyələrinin izlənməsi.",
    "res.init2.status": "Davam edir",
    "res.init3.title": "Dayanıqlı Kənd Təsərrüfatı Texnologiyaları",
    "res.init3.desc": "Regional əkinçilikdə suyun optimallaşdırılması üçün IoT sensorlarının sınaqdan keçirilməsi.",
    "res.init3.status": "Planlaşdırılır",
    "res.init4.title": "Yaşıl İqtisadiyyat Siyasət Sənədləri",
    "res.init4.desc": "Sirkulyar iqtisadiyyata keçid üzrə yerli hökumətə məsləhətlər.",
    "res.init4.status": "Aktiv",
    "res.cta.title": "Tədqiqat Portalımıza Daxil Olun",
    "res.cta.desc": "Ən son nəşrlərimizi oxuyun və əməkdaşlıq imkanlarını kəşf edin.",
    "res.cta.btn": "Nəşrlərə Baxın",

    // Education & Curriculum Page
    "edu.badge": "Strateji İstiqamət 5",
    "edu.title": "Təhsil və Kurikulum",
    "edu.desc": "Bütün dərəcə proqramlarına davamlılıq kompetensiyalarını daxil edərək, hər bir SDU məzununu yaşıl keçidə rəhbərlik etmək üçün biliklərlə təmin edirik.",
    "edu.metric1.label": "DİM-ləri inteqrasiya edən kurslar",
    "edu.metric2.label": "Davamlı inkişaf dərəcələri",
    "edu.metric3.label": "Yaşıl təhsil üzrə təlim keçmiş müəllimlər",
    "edu.metric4.label": "Yaşıl kurslarda oxuyan tələbələr",
    "edu.initiatives.title": "Kurikulum Yeniləmələri",
    "edu.init1.title": "Məcburi 'Yaşıl Keçid' Əsas Kursu",
    "edu.init1.desc": "Bütün fakültələrdə bütün birinci kurs tələbələri üçün tələb olunan təməl kurs.",
    "edu.init1.status": "Aktiv",
    "edu.init2.title": "Davamlı İnkişaf üzrə Magistratura",
    "edu.init2.desc": "Gələn tədris ilində yeni fənlərarası magistr dərəcəsinin tətbiqi.",
    "edu.init2.status": "Davam edir",
    "edu.init3.title": "Müəllimlər üçün Yaşıl Təlim Seminarları",
    "edu.init3.desc": "Professorların DİM-ləri mövcud tədris planlarına inteqrasiya etmələri üçün alətlərlə təchiz edilməsi.",
    "edu.init3.status": "Aktiv",
    "edu.init4.title": "Tələbə Davamlılıq İnkubatoru",
    "edu.init4.desc": "Tələbələrin ekoloji təmiz biznes modelləri hazırlaması üçün laboratoriya.",
    "edu.init4.status": "Planlaşdırılır",
    "edu.cta.title": "Akademik Təkliflərimizi Nəzərdən Keçirin",
    "edu.cta.desc": "SDU-da tədris planları, yaşıl dərəcələr və təlim proqramlarını kəşf edin.",
    "edu.cta.btn": "Kurs Kataloquna Baxın",

    // Governance & Policy Page
    "gov.title": "İdarəetmə və Siyasət",
    "gov.desc": "Uzunmüddətli təsir göstərən şəffaf institusional çərçivələrin, etik qərar qəbuletmə proseslərinin və sübutlara əsaslanan siyasətlərin qurulması.",
    "gov.pillars.title": "İdarəetmə Sütunlarımız",
    "gov.pillars.desc": "SDU-nun davamlılıq gündəmini necə idarə etdiyini təməlləndirən dörd bir-biri ilə əlaqəli prinsip.",
    "gov.pillar1.title": "İnstitusional Dürüstlük",
    "gov.pillar1.desc": "Universitet rəhbərliyinin hər səviyyəsində davamlılıq məsuliyyətini təmin edən möhkəm idarəetmə çərçivələrinin qurulması.",
    "gov.pillar2.title": "Sübutlara Əsaslanan Siyasət",
    "gov.pillar2.desc": "Elmi rəylə təsdiqlənmiş məlumatlar, beynəlxalq standartlar və maraqlı tərəflərlə məsləhətləşmə əsasında davamlılıq siyasətlərinin hazırlanması və nəzərdən keçirilməsi.",
    "gov.pillar3.title": "Şəffaf Hesabatlılıq",
    "gov.pillar3.desc": "GRI və IESBA standartlarına uyğun illik davamlılıq hesabatlarının nəşr edilməsi və tam ictimai məsuliyyət.",
    "gov.pillar4.title": "Maraqlı Tərəflərin İştirakı",
    "gov.pillar4.desc": "Davamlılıq təşəbbüslərini birgə hazırlamaq üçün müəllimlər, tələbələr, hökumət nümayəndələri və QHT-lər arasında mənalı dialoqun yaradılması.",
    "gov.docs.title": "Siyasət Sənədləri",
    "gov.doc1.title": "SDU Davamlılıq Strategiyası 2024–2030",
    "gov.doc1.tag": "Strategiya",
    "gov.doc2.title": "İllik GRI Davamlılıq Hesabatı",
    "gov.doc2.tag": "Hesabat",
    "gov.doc3.title": "Kampus Karbon Neytrallığı Yol Xəritəsi",
    "gov.doc3.tag": "Yol Xəritəsi",
    "gov.doc4.title": "Maraqlı Tərəflərin İştirakı Nizamnaməsi",
    "gov.doc4.tag": "Siyasət",
    "gov.cta.title": "Siyasət İşimizə Töhfə Verin",
    "gov.cta.desc": "Müəllimlər, tələbələr və icma tərəfdaşları SDU Davamlılıq Portalı vasitəsilə siyasət təklifləri göndərə bilərlər.",
    "gov.cta.btn": "Ana Səhifəyə Qayıt",
  },
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