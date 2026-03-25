# SDU Dayanıqlılıq Portalı - Məzmun Yenilənməsi Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 5 mövcud səhifənin məzmununu yeni tələblərə uyğun yeniləmək və yeni komponentlər əlavə etmək.

**Architecture:** Mövcud dizayn sisteminə sadiq qalaraq hər səhifəni çoxbölməli struktura çevirmək. Yeni komponentlər (SumqayitMap, PolicyCard, ReportCard, PartnershipCard) yaradılacaq. Bütün mətnlər LanguageContext-dən gələcək.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide React, next-themes

---

## Fayl Strukturu

### Yaradılacaq Fayllar:
```
src/
├── components/
│   ├── SumqayitMap.tsx          # YENİ - Sumqayıt xəritəsi komponenti
│   ├── PolicyCard.tsx           # YENİ - Policy kartı komponenti
│   ├── ReportCard.tsx           # YENİ - Hesabat kartı komponenti
│   └── PartnershipCard.tsx      # YENİ - Tərəfdaşlıq kartı komponenti
└── app/
    ├── governance-policy/page.tsx       # YENİDƏN YAZILIR
    ├── environmental-strategy/page.tsx  # YENİDƏN YAZILIR
    ├── social-impact/page.tsx           # YENİDƏN YAZILIR
    ├── sdg-research/page.tsx            # YENİDƏN YAZILIR
    └── education-curriculum/page.tsx    # YENİDƏN YAZILIR
```

### Dəyişdiriləcək Fayllar:
```
src/
└── components/
    └── LanguageContext.tsx      # ~200+ yeni tərcümə əlavə ediləcək
```

---

## Task 1: LanguageContext Tərcümələrinin Əlavə Edilməsi

**Files:**
- Modify: `src/components/LanguageContext.tsx`

**Məqsəd:** Bütün 5 səhifə üçün yeni EN/AZ tərcümələri əlavə etmək.

- [ ] **Step 1: LanguageContext.tsx faylını oxu**

```bash
Read: src/components/LanguageContext.tsx
```

- [ ] **Step 2: Governance & Accountability tərcümələrini əlavə et (EN)**

```typescript
// "en" obyektinə əlavə et:
"gov2.intro": "Sumgayit State University is committed to responsible governance and transparent institutional practices that support sustainable development. The University has established a set of policies and governance mechanisms that guide ethical conduct, equality and inclusion, environmental responsibility, and responsible financial management.",
"gov2.section1.title": "Institutional Governance & Sustainability Framework",
"gov2.section1.desc": "Our governance structure ensures accountability at every level, with clear lines of responsibility for sustainability outcomes.",
"gov2.section2.title": "Key Policies",
"gov2.policy1.title": "Ethics Policy",
"gov2.policy1.desc": "Guiding principles for ethical decision-making and conduct across all university operations.",
"gov2.policy2.title": "Anti-Corruption Policy",
"gov2.policy2.desc": "Zero-tolerance approach to corruption with transparent reporting mechanisms.",
"gov2.policy3.title": "Inclusion & Diversity Policy",
"gov2.policy3.desc": "Commitment to equal opportunity and inclusive practices for all members of our community.",
"gov2.policy4.title": "Sustainable Procurement Policy",
"gov2.policy4.desc": "Responsible sourcing practices that consider environmental and social impact.",
"gov2.policy5.title": "Financial Responsibility Policy",
"gov2.policy5.desc": "Transparent financial management aligned with sustainability principles.",
"gov2.section3.title": "Sustainability Leadership & Committees",
"gov2.section3.desc": "Dedicated teams driving our sustainability agenda forward.",
"gov2.committee1.title": "Sustainability Steering Committee",
"gov2.committee1.desc": "Executive leadership overseeing strategic sustainability initiatives.",
"gov2.committee2.title": "Working Groups",
"gov2.committee2.desc": "Cross-functional teams implementing specific sustainability projects.",
"gov2.committee3.title": "Leadership Team",
"gov2.committee3.desc": "Senior management accountable for sustainability outcomes.",
"gov2.section4.title": "Institutional Commitments",
"gov2.commitment1.title": "UN SDG Commitment",
"gov2.commitment1.desc": "Aligned with all 17 Sustainable Development Goals.",
"gov2.commitment2.title": "Carbon Neutrality Goal",
"gov2.commitment2.desc": "Targeting net-zero emissions by 2030.",
"gov2.commitment3.title": "Transparency Pledge",
"gov2.commitment3.desc": "Annual public reporting on sustainability performance.",
"gov2.commitment4.title": "Community Partnership",
"gov2.commitment4.desc": "Collaborative approach with local stakeholders.",
"gov2.cta": "Learn More About Our Governance",
```

- [ ] **Step 3: Governance & Accountability tərcümələrini əlavə et (AZ)**

```typescript
// "az" obyektinə əlavə et:
"gov2.intro": "Sumqayıt Dövlət Universiteti davamlı inkişafı dəstəkləyən məsul idarəetmə və şəffaf institusional praktikalarla bağlıdır. Universitet etik davranış, bərabərlik və inklüzivlik, ekoloji məsuliyyət və məsul maliyyə idarəçiliyinə rəhbərlik edən siyasətlər və idarəetmə mexanizmləri yaradıb.",
"gov2.section1.title": "İnstitusional İdarəetmə və Dayanıqlılıq Çərçivəsi",
"gov2.section1.desc": "İdarəetmə strukturumuz hər səviyyədə məsuliyyəti təmin edir, dayanıqlılıq nəticələri üçün aydın məsuliyyət xəttləri yaradır.",
"gov2.section2.title": "Əsas Siyasətlər",
"gov2.policy1.title": "Etika Siyasəti",
"gov2.policy1.desc": "Universitetin bütün fəaliyyətində etik qərar qəbuletmə və davranış üçün rəhbər prinsiplər.",
"gov2.policy2.title": "Korrupsiyaya Qarşı Siyasət",
"gov2.policy2.desc": "Şəffaf hesabat mexanizmləri ilə korrupsiyaya sıfır tolerantlıq yanaşması.",
"gov2.policy3.title": "İnklüzivlik və Müxtəliflik Siyasəti",
"gov2.policy3.desc": "İcma üzvlərinin hamısı üçün bərabər imkan və inklüziv praktikalar öhdəliyi.",
"gov2.policy4.title": "Dayanıqlı Satınalma Siyasəti",
"gov2.policy4.desc": "Ətraf mühit və sosial təsiri nəzərə alan məsul təchizat praktikaları.",
"gov2.policy5.title": "Maliyyə Məsuliyyəti Siyasəti",
"gov2.policy5.desc": "Dayanıqlılıq prinsiplərinə uyğun şəffaf maliyyə idarəçiliyi.",
"gov2.section3.title": "Dayanıqlılıq Rəhbərliyi və Komitələri",
"gov2.section3.desc": "Dayanıqlılıq gündəmimizi irəli aparan həsr olunmuş komandalar.",
"gov2.committee1.title": "Dayanıqlılıq üzrə Rəhbər Komitə",
"gov2.committee1.desc": "Strateji dayanıqlılıq təşəbbüslərinə nəzarət edən icra rəhbərliyi.",
"gov2.committee2.title": "İşçi Qrupları",
"gov2.committee2.desc": "Xüsusi dayanıqlılıq layihələrini həyata keçirən funksional komandalar.",
"gov2.committee3.title": "Rəhbərlik Komandası",
"gov2.committee3.desc": "Dayanıqlılıq nəticələrinə görə məsul olan baş idarəetmə.",
"gov2.section4.title": "İnstitusional Öhdəliklər",
"gov2.commitment1.title": "BMT DİM Öhdəliyi",
"gov2.commitment1.desc": "17 Dayanıqlı İnkişaf Məqsədinin hamısı ilə uyğunlaşma.",
"gov2.commitment2.title": "Karbon Neytrallığı Məqsədi",
"gov2.commitment2.desc": "2030-cu ilə qədər xalis sıfır emissiya hədəfi.",
"gov2.commitment3.title": "Şəffaflıq Öhdəliyi",
"gov2.commitment3.desc": "Dayanıqlılıq performansı haqqında illik ictimai hesabat.",
"gov2.commitment4.title": "İcma Tərəfdaşlığı",
"gov2.commitment4.desc": "Yerli maraqlı tərəflərlə əməkdaşlıq yanaşması.",
"gov2.cta": "İdarəetmə Haqqında Daha Ətraflı",
```

- [ ] **Step 4: Strategy & Reporting tərcümələrini əlavə et (EN)**

```typescript
// "en" obyektinə əlavə et:
"strat.intro": "Sumgayit State University is gradually integrating sustainability principles into its institutional strategy and planning processes. The University aligns its activities with the United Nations Sustainable Development Goals (SDGs) and works to monitor progress through internal reporting and evaluation mechanisms.",
"strat.section1.title": "Climate Action and Sustainability Strategy",
"strat.strategy1.title": "Carbon Reduction Strategy",
"strat.strategy1.desc": "Comprehensive plan to reduce carbon emissions by 50% by 2027.",
"strat.strategy2.title": "Energy Transition Plan",
"strat.strategy2.desc": "Shifting to 100% renewable energy sources by 2028.",
"strat.strategy3.title": "Biodiversity Protection",
"strat.strategy3.desc": "Preserving and enhancing campus ecosystems and native species.",
"strat.section2.title": "SDG Alignment",
"strat.sdg.desc": "Our activities align with all 17 UN Sustainable Development Goals.",
"strat.section3.title": "Sustainability Goals & Priorities",
"strat.goal1.title": "Net-Zero by 2030",
"strat.goal1.desc": "Achieve carbon neutrality across all campus operations.",
"strat.goal2.title": "Zero Waste Campus",
"strat.goal2.desc": "Divert 90% of waste from landfills through reduction and recycling.",
"strat.goal3.title": "100% Renewable Energy",
"strat.goal3.desc": "Power all facilities with clean, renewable sources.",
"strat.goal4.title": "Water Conservation",
"strat.goal4.desc": "Reduce water consumption by 40% through efficiency measures.",
"strat.goal5.title": "Green Education for All",
"strat.goal5.desc": "Integrate sustainability into every degree program.",
"strat.section4.title": "SDG Reports & Progress",
"strat.report1.title": "Annual Sustainability Report 2024",
"strat.report2.title": "SDG Progress Report 2023",
"strat.report3.title": "Climate Action Update 2024",
"strat.report4.title": "GRI Compliance Report",
"strat.download": "Download PDF",
"strat.section5.title": "Key Indicators",
"strat.indicator1": "Carbon Emissions",
"strat.indicator2": "Renewable Energy",
"strat.indicator3": "Waste Recycled",
"strat.indicator4": "Water Saved",
"strat.indicator5": "Green Courses",
"strat.indicator6": "Community Projects",
"strat.cta": "Download Full Reports",
```

- [ ] **Step 5: Strategy & Reporting tərcümələrini əlavə et (AZ)**

```typescript
// "az" obyektinə əlavə et:
"strat.intro": "Sumqayıt Dövlət Universiteti davamlılıq prinsiplərini tədricən institusional strategiya və planlaşdırma proseslərinə inteqrasiya edir. Universitet fəaliyyətini BMT-nin Dayanıqlı İnkişaf Məqsədləri (DİM) ilə uyğunlaşdırır və daxili hesabat və qiymətləndirmə mexanizmləri vasitəsilə irəliləyişi izləyir.",
"strat.section1.title": "İqlim Fəalliyəti və Dayanıqlılıq Strategiyası",
"strat.strategy1.title": "Karbon Azaltma Strategiyası",
"strat.strategy1.desc": "2027-ci ilə qədər karbon emissiyasını 50% azaltmaq üçün hərtərəfli plan.",
"strat.strategy2.title": "Enerji Keçidi Planı",
"strat.strategy2.desc": "2028-ci ilə qədər 100% bərpa olunan enerji mənbələrinə keçid.",
"strat.strategy3.title": "Biomüxtəlifliyin Qorunması",
"strat.strategy3.desc": "Kampus ekosistemlərinin və yerli növlərin qorunması və inkişafı.",
"strat.section2.title": "DİM Uyğunluğu",
"strat.sdg.desc": "Fəaliyyətimiz BMT-nin 17 Dayanıqlı İnkişaf Məqsədinin hamısı ilə uyğundur.",
"strat.section3.title": "Dayanıqlılıq Məqsədləri və Prioritetləri",
"strat.goal1.title": "2030-cu ilə qədər Net-Zero",
"strat.goal1.desc": "Bütün kampus əməliyyatlarında karbon neytrallığına nail olmaq.",
"strat.goal2.title": "Tullantısız Kampus",
"strat.goal2.desc": "Azaltma və təkrar emal vasitəsilə tullantıların 90%-ni poliqonlardan yayındırmaq.",
"strat.goal3.title": "100% Bərpa Olunan Enerji",
"strat.goal3.desc": "Bütün obyektləri təmiz, bərpa olunan mənbələrlə təchiz etmək.",
"strat.goal4.title": "Su Qənaəti",
"strat.goal4.desc": "Səmərəlilik tədbirləri vasitəsilə su istehlakını 40% azaltmaq.",
"strat.goal5.title": "Hamı üçün Yaşıl Təhsil",
"strat.goal5.desc": "Davamlılığı hər dərəcə proqramına inteqrasiya etmək.",
"strat.section4.title": "DİM Hesabatları və İrəliləyiş",
"strat.report1.title": "İllik Dayanıqlılıq Hesabatı 2024",
"strat.report2.title": "DİM İrəliləyiş Hesabatı 2023",
"strat.report3.title": "İqlim Fəalliyəti Yenilənməsi 2024",
"strat.report4.title": "GRI Uyğunluq Hesabatı",
"strat.download": "PDF Yüklə",
"strat.section5.title": "Əsas Göstəricilər",
"strat.indicator1": "Karbon Emissiyası",
"strat.indicator2": "Bərpa Olunan Enerji",
"strat.indicator3": "Təkrar Emal",
"strat.indicator4": "Su Qənaəti",
"strat.indicator5": "Yaşıl Kurslar",
"strat.indicator6": "İcma Layihələri",
"strat.cta": "Tam Hesabatları Yüklə",
```

- [ ] **Step 6: Research tərcümələrini əlavə et (EN)**

```typescript
// "en" obyektinə əlavə et:
"res2.intro": "The historical industrial development of Sumgayit provides a unique context for sustainability research. Today, the city's ongoing environmental improvements and restoration efforts offer opportunities for research on ecological recovery, pollution mitigation, and sustainable resource management.",
"res2.section1.title": "Sumqayıt: Research Context",
"res2.section2.title": "SDG-related Research Projects",
"res2.project1.title": "Renewable Energy Storage",
"res2.project1.desc": "Developing cost-effective solar storage solutions for urban environments.",
"res2.project2.title": "Caspian Sea Biodiversity",
"res2.project2.desc": "Tracking marine life changes and pollution levels in partnership with global NGOs.",
"res2.project3.title": "Sustainable Agriculture",
"res2.project3.desc": "Testing IoT sensors for water optimization in regional farming.",
"res2.project4.title": "Air Quality Monitoring",
"res2.project4.desc": "Real-time air quality tracking across industrial and residential zones.",
"res2.project5.title": "Green Economy Policy",
"res2.project5.desc": "Advising local government on circular economy transitions.",
"res2.project6.title": "Waste Management Tech",
"res2.project6.desc": "Innovative solutions for waste reduction and recycling.",
"res2.section3.title": "Research Partnerships",
"res2.partner1.title": "International Universities",
"res2.partner2.title": "Research Institutes",
"res2.partner3.title": "NGOs & Foundations",
"res2.partner4.title": "Government Agencies",
"res2.partner5.title": "Industry Partners",
"res2.section4.title": "Research Centres & Laboratories",
"res2.center1.title": "Renewable Energy Lab",
"res2.center1.desc": "Advanced research in solar, wind, and energy storage technologies.",
"res2.center2.title": "Environmental Research Center",
"res2.center2.desc": "Monitoring and analyzing local ecosystem health and biodiversity.",
"res2.center3.title": "Sustainability Innovation Hub",
"res2.center3.desc": "Incubating green technologies and sustainable business models.",
"res2.center4.title": "Data Analytics Lab",
"res2.center4.desc": "Big data solutions for sustainability metrics and reporting.",
"res2.section5.title": "Student Research Projects",
"res2.student1.title": "Undergraduate Projects",
"res2.student2.title": "Master's Theses",
"res2.student3.title": "PhD Dissertations",
"res2.student4.title": "Innovation Challenge Winners",
"res2.student5.title": "Grant Recipients",
"res2.cta": "Explore Research Opportunities",
```

- [ ] **Step 7: Research tərcümələrini əlavə et (AZ)**

```typescript
// "az" obyektinə əlavə et:
"res2.intro": "Sumqayıtın tarixi sənaye inkişafı davamlılıq tədqiqatları üçün unikal kontekst yaradır. Bu gün şəhərin davam edən ekoloji təkmilləşdirmə və bərpa səyləri ekoloji bərpa, çirklənmənin azaldılması və davamlı resurs idarəçiliyi üzrə tədqiqatlar üçün imkanlar təqdim edir.",
"res2.section1.title": "Sumqayıt: Tədqiqat Konteksti",
"res2.section2.title": "DİM-lə Əlaqəli Tədqiqat Layihələri",
"res2.project1.title": "Bərpa Olunan Enerji Saxlanması",
"res2.project1.desc": "Şəhər mühitləri üçün sərfəli günəş enerjisi saxlama həllərinin inkişafı.",
"res2.project2.title": "Xəzər Dənizi Biomüxtəlifliyi",
"res2.project2.desc": "Qlobal QHT-lərlə tərəfdaşlıqda dəniz həyatı dəyişikliklərinin və çirklənmə səviyyələrinin izlənməsi.",
"res2.project3.title": "Dayanıqlı Kənd Təsərrüfatı",
"res2.project3.desc": "Regional əkinçilikdə suyun optimallaşdırılması üçün IoT sensorlarının sınaqdan keçirilməsi.",
"res2.project4.title": "Hava Keyfiyyətinin Monitorinqi",
"res2.project4.desc": "Sənaye və yaşayış zonalarında hava keyfiyyətinin real vaxt izlənməsi.",
"res2.project5.title": "Yaşıl İqtisadiyyat Siyasəti",
"res2.project5.desc": "Sirkulyar iqtisadiyyata keçid üzrə yerli hökumətə məsləhətlər.",
"res2.project6.title": "Tullantı İdarəetmə Texnologiyası",
"res2.project6.desc": "Tullantıların azaldılması və təkrar emalı üçün innovativ həllər.",
"res2.section3.title": "Tədqiqat Tərəfdaşlıqları",
"res2.partner1.title": "Beynəlxalq Universitetlər",
"res2.partner2.title": "Tədqiqat İnstitutları",
"res2.partner3.title": "QHT-lər və Fondlar",
"res2.partner4.title": "Hökumət Agentlikləri",
"res2.partner5.title": "Sənaye Tərəfdaşları",
"res2.section4.title": "Tədqiqat Mərkəzləri və Laboratoriyalar",
"res2.center1.title": "Bərpa Olunan Enerji Laboratoriyası",
"res2.center1.desc": "Günəş, külək və enerji saxlama texnologiyaları üzrə qabaqcıl tədqiqatlar.",
"res2.center2.title": "Ətraf Mühit Tədqiqatları Mərkəzi",
"res2.center2.desc": "Yerli ekosistem sağlamlığının və biomüxtəlifliyin monitorinqi və təhlili.",
"res2.center3.title": "Dayanıqlılıq İnnovasiya Mərkəzi",
"res2.center3.desc": "Yaşıl texnologiyaların və davamlı biznes modellərinin inkubasiyası.",
"res2.center4.title": "Data Analitikası Laboratoriyası",
"res2.center4.desc": "Dayanıqlılıq metrikaları və hesabatı üçün böyük data həlləri.",
"res2.section5.title": "Tələbə Tədqiqat Layihələri",
"res2.student1.title": "Bakalavr Layihələri",
"res2.student2.title": "Magistr Dissertasiyaları",
"res2.student3.title": "Fəlsəfə Doktoru Dissertasiyaları",
"res2.student4.title": "İnnovasiya Çempionatı Qalibləri",
"res2.student5.title": "Qrant Alıcıları",
"res2.cta": "Tədqiqat İmkanlarını Kəşf Edin",
```

- [ ] **Step 8: Education tərcümələrini əlavə et (EN)**

```typescript
// "en" obyektinə əlavə et:
"edu2.intro": "Sumgayit State University promotes education that encourages awareness of sustainability and responsible citizenship. Sustainability-related topics are gradually being integrated into teaching, student activities, and academic initiatives.",
"edu2.section1.title": "Sustainability Topics in Curriculum",
"edu2.topic1.title": "Climate Change Science",
"edu2.topic1.desc": "Understanding the scientific basis of climate change and its impacts.",
"edu2.topic2.title": "Circular Economy",
"edu2.topic2.desc": "Principles of waste reduction and resource efficiency.",
"edu2.topic3.title": "Social Responsibility",
"edu2.topic3.desc": "Ethical business practices and community engagement.",
"edu2.topic4.title": "Environmental Ethics",
"edu2.topic4.desc": "Philosophical foundations of environmental stewardship.",
"edu2.topic5.title": "Green Technology",
"edu2.topic5.desc": "Innovations in clean energy and sustainable materials.",
"edu2.topic6.title": "Sustainable Development Goals",
"edu2.topic6.desc": "Global framework for addressing sustainability challenges.",
"edu2.section2.title": "Relevant Courses & Programs",
"edu2.course1.title": "Introduction to Sustainability",
"edu2.course1.desc": "Foundational concepts and principles of sustainable development.",
"edu2.course2.title": "Environmental Management",
"edu2.course2.desc": "Systems approach to managing environmental resources.",
"edu2.course3.title": "Green Business Practices",
"edu2.course3.desc": "Sustainable strategies for modern organizations.",
"edu2.course4.title": "Renewable Energy Systems",
"edu2.course4.desc": "Design and implementation of clean energy solutions.",
"edu2.course5.title": "Sustainable Urban Planning",
"edu2.course5.desc": "Creating livable, efficient, and green cities.",
"edu2.course6.title": "MSc in Sustainable Development",
"edu2.course6.desc": "Advanced interdisciplinary master's program.",
"edu2.section3.title": "Student Sustainability Initiatives",
"edu2.init1.title": "Green Campus Movement",
"edu2.init1.desc": "Student-led efforts to make campus more sustainable.",
"edu2.init2.title": "Recycling Program",
"edu2.init2.desc": "Campus-wide waste segregation and recycling initiative.",
"edu2.init3.title": "Energy Awareness Campaign",
"edu2.init3.desc": "Educating peers about energy conservation.",
"edu2.init4.title": "Sustainable Fashion Project",
"edu2.init4.desc": "Promoting ethical and sustainable clothing choices.",
"edu2.init5.title": "Food Waste Reduction",
"edu2.init5.desc": "Initiatives to reduce food waste in dining facilities.",
"edu2.section4.title": "Eco-Club Activities",
"edu2.eco1.title": "Tree Planting Events",
"edu2.eco2.title": "Beach Cleanups",
"edu2.eco3.title": "Sustainability Workshops",
"edu2.eco4.title": "Documentary Screenings",
"edu2.section5.title": "Workshops & Seminars",
"edu2.workshop1.title": "Guest Lectures",
"edu2.workshop2.title": "Expert Panels",
"edu2.workshop3.title": "Hands-on Training",
"edu2.workshop4.title": "Career Fairs",
"edu2.workshop5.title": "Research Symposia",
"edu2.cta": "View Course Catalog",
```

- [ ] **Step 9: Education tərcümələrini əlavə et (AZ)**

```typescript
// "az" obyektinə əlavə et:
"edu2.intro": "Sumqayıt Dövlət Universiteti davamlılıq şüuru və məsul vətəndaşlığı təşviq edən təhsili dəstəkləyir. Davamlılıqla əlaqəli mövzular tədricən tədrisə, tələbə fəaliyyətlərinə və akademik təşəbbüslərə inteqrasiya olunur.",
"edu2.section1.title": "Kurikulumda Davamlılıq Mövzuları",
"edu2.topic1.title": "İqlim Dəyişikliyi Elmi",
"edu2.topic1.desc": "İqlim dəyişikliyinin elmi əsasları və təsirlərinin başa düşülməsi.",
"edu2.topic2.title": "Sirkulyar İqtisadiyyat",
"edu2.topic2.desc": "Tullantıların azaldılması və resurs səmərəliliyi prinsipləri.",
"edu2.topic3.title": "Sosial Məsuliyyət",
"edu2.topic3.desc": "Etik biznes praktikaları və icma ilə əlaqə.",
"edu2.topic4.title": "Ətraf Mühit Etikası",
"edu2.topic4.desc": "Ətraf mühitin qorunmasının fəlsəfi əsasları.",
"edu2.topic5.title": "Yaşıl Texnologiya",
"edu2.topic5.desc": "Təmiz enerji və davamlı materiallarda innovasiyalar.",
"edu2.topic6.title": "Dayanıqlı İnkişaf Məqsədləri",
"edu2.topic6.desc": "Davamlılıq problemlərini həll etmək üçün qlobal çərçivə.",
"edu2.section2.title": "Müvafiq Kurslar və Proqramlar",
"edu2.course1.title": "Davamlılığa Giriş",
"edu2.course1.desc": "Davamlı inkişafın əsas konsepsiya və prinsipləri.",
"edu2.course2.title": "Ətraf Mühit İdarəçiliyi",
"edu2.course2.desc": "Ətraf mühit resurslarının idarə edilməsinə sistemli yanaşma.",
"edu2.course3.title": "Yaşıl Biznes Praktikaları",
"edu2.course3.desc": "Müasir təşkilatlar üçün davamlı strategiyalar.",
"edu2.course4.title": "Bərpa Olunan Enerji Sistemləri",
"edu2.course4.desc": "Təmiz enerji həllərinin layihələndirilməsi və tətbiqi.",
"edu2.course5.title": "Davamlı Şəhər Planlaşdırması",
"edu2.course5.desc": "Yaşana bilən, səmərəli və yaşıl şəhərlərin yaradılması.",
"edu2.course6.title": "Davamlı İnkişaf üzrə Magistratura",
"edu2.course6.desc": "Qabaqcıl fənlərarası magistr proqramı.",
"edu2.section3.title": "Tələbə Davamlılıq Təşəbbüsləri",
"edu2.init1.title": "Yaşıl Kampus Hərəkatı",
"edu2.init1.desc": "Kampusu daha davamlı etmək üçün tələbə təşəbbüsləri.",
"edu2.init2.title": "Təkrar Emal Proqramı",
"edu2.init2.desc": "Kampüs miqyaslı tullantı ayrışdırma və təkrar emal təşəbbüsü.",
"edu2.init3.title": "Enerji Şüuru Kampaniyası",
"edu2.init3.desc": "Həmyaşıdları enerji qənaəti haqqında maarifləndirmə.",
"edu2.init4.title": "Davamlı Dəb Layihəsi",
"edu2.init4.desc": "Etik və davamlı geyim seçimlərinin təşviqi.",
"edu2.init5.title": "Qida Tullantılarının Azaldılması",
"edu2.init5.desc": "Yeməkxanalarda qida tullantılarının azaldılması təşəbbüsləri.",
"edu2.section4.title": "Eko-Klub Fəaliyyətləri",
"edu2.eco1.title": "Ağacəkmə Tədbirləri",
"edu2.eco2.title": "Çimərlik Təmizliyi",
"edu2.eco3.title": "Davamlılıq Seminarları",
"edu2.eco4.title": "Sənədli Film Göstəriləri",
"edu2.section5.title": "Seminar və Treyninqlər",
"edu2.workshop1.title": "Qonaq Mühazirələri",
"edu2.workshop2.title": "Ekspert Panelləri",
"edu2.workshop3.title": "Praktik Treyninqlər",
"edu2.workshop4.title": "Karyera Sərgiləri",
"edu2.workshop5.title": "Tədqiqat Simpoziumları",
"edu2.cta": "Kurs Kataloquna Bax",
```

- [ ] **Step 10: Community tərcümələrini əlavə et (EN)**

```typescript
// "en" obyektinə əlavə et:
"comm.intro": "The University recognizes the importance of contributing to the development of society and the local community. Through partnerships, outreach activities, and public engagement initiatives, Sumgayit State University works to promote social inclusion, environmental awareness, and community development.",
"comm.section1.title": "Community Outreach Projects",
"comm.outreach1.title": "Rural Education Support",
"comm.outreach1.desc": "Providing educational resources to underserved rural areas.",
"comm.outreach2.title": "Healthcare Awareness",
"comm.outreach2.desc": "Public health education and screening programs.",
"comm.outreach3.title": "Digital Literacy Program",
"comm.outreach3.desc": "Teaching digital skills to community members of all ages.",
"comm.outreach4.title": "Youth Empowerment",
"comm.outreach4.desc": "Leadership development and mentorship for young people.",
"comm.outreach5.title": "Elderly Care Initiative",
"comm.outreach5.desc": "Support services and companionship for senior citizens.",
"comm.outreach6.title": "Disability Support",
"comm.outreach6.desc": "Accessibility improvements and assistance programs.",
"comm.section2.title": "Partnerships",
"comm.partner1.title": "Local Government",
"comm.partner2.title": "International NGOs",
"comm.partner3.title": "Community Organizations",
"comm.partner4.title": "Private Sector",
"comm.partner5.title": "Media Partners",
"comm.partner6.title": "Academic Institutions",
"comm.section3.title": "Volunteering Initiatives",
"comm.volunteer1.title": "Student Volunteer Corps",
"comm.volunteer1.desc": "Organized student volunteering across various causes.",
"comm.volunteer2.title": "Faculty Pro Bono Program",
"comm.volunteer2.desc": "Professional services donated by faculty members.",
"comm.volunteer3.title": "Alumni Mentorship",
"comm.volunteer3.desc": "Graduates mentoring current students and community youth.",
"comm.volunteer4.title": "Community Service Days",
"comm.volunteer4.desc": "Coordinated days of service across the university.",
"comm.volunteer5.title": "Emergency Response Team",
"comm.volunteer5.desc": "Rapid response volunteers for community emergencies.",
"comm.section4.title": "Sustainability Awareness Campaigns",
"comm.campaign1.title": "Climate Action Week",
"comm.campaign2.title": "Zero Waste Challenge",
"comm.campaign3.title": "Biodiversity Month",
"comm.campaign4.title": "Green Transportation Day",
"comm.section5.title": "Student Engagement Activities",
"comm.activity1.title": "Sustainability Hackathon",
"comm.activity2.title": "Community Garden Project",
"comm.activity3.title": "Social Innovation Lab",
"comm.activity4.title": "Cultural Exchange Events",
"comm.activity5.title": "Leadership Training",
"comm.cta": "Join Our Community",
```

- [ ] **Step 11: Community tərcümələrini əlavə et (AZ)**

```typescript
// "az" obyektinə əlavə et:
"comm.intro": "Universitet cəmiyyətin inkişafına töhfə verməyin əhəmiyyətini qəbul edir. Tərəfdaşlıqlar, maarifləndirmə fəaliyyətləri və ictimai iştirak təşəbbüsləri vasitəsilə Sumqayıt Dövlət Universiteti sosial inklüzivliyi, ekoloji şüuru və icma inkişafını təşviq edir.",
"comm.section1.title": "İcma ilə Əlaqə Layihələri",
"comm.outreach1.title": "Kənd Təhsilinə Dəstək",
"comm.outreach1.desc": "Az təmin edilmiş kənd ərazilərinə təhsil resurslarının təqdim edilməsi.",
"comm.outreach2.title": "Səhiyyə Maarifləndirməsi",
"comm.outreach2.desc": "İctimai sağlamlıq təhsili və skrininq proqramları.",
"comm.outreach3.title": "Rəqəmsal Savadlılıq Proqramı",
"comm.outreach3.desc": "Bütün yaşlardan olan icma üzvlərinə rəqəmsal bacarıqların öyrədilməsi.",
"comm.outreach4.title": "Gənclərin Gücləndirilməsi",
"comm.outreach4.desc": "Gənclər üçün liderlik inkişafı və mentorluq.",
"comm.outreach5.title": "Yaşlılara Qayğı Təşəbbüsü",
"comm.outreach5.desc": "Yaşlı vətəndaşlar üçün dəstək xidmətləri və yoldaşlıq.",
"comm.outreach6.title": "Əlilliyə Dəstək",
"comm.outreach6.desc": "Əlçatanlıq təkmilləşdirmələri və yardım proqramları.",
"comm.section2.title": "Tərəfdaşlıqlar",
"comm.partner1.title": "Yerli Hökumət",
"comm.partner2.title": "Beynəlxalq QHT-lər",
"comm.partner3.title": "İcma Təşkilatları",
"comm.partner4.title": "Özəl Sektor",
"comm.partner5.title": "KİV Tərəfdaşları",
"comm.partner6.title": "Akademik Müəssisələr",
"comm.section3.title": "Könüllülük Təşəbbüsləri",
"comm.volunteer1.title": "Tələbə Könüllülük Korpusu",
"comm.volunteer1.desc": "Müxtəlif səbəblər üzrə təşkil edilmiş tələbə könüllülüyü.",
"comm.volunteer2.title": "Müəllimlərin Pro Bono Proqramı",
"comm.volunteer2.desc": "Müəllimlər tərəfindən ianə edilən peşəkar xidmətlər.",
"comm.volunteer3.title": "Məzun Mentorluğu",
"comm.volunteer3.desc": "Məzunların cari tələbələrə və icma gənclərinə mentorluq etməsi.",
"comm.volunteer4.title": "İcma Xidməti Günləri",
"comm.volunteer4.desc": "Universitet üzrə əlaqələndirilmiş xidmət günləri.",
"comm.volunteer5.title": "Fövqəladə Cavab Komandası",
"comm.volunteer5.desc": "İcma fövqəladə halları üçün sürətli cavab könüllüləri.",
"comm.section4.title": "Davamlılıq Maarifləndirmə Kampaniyaları",
"comm.campaign1.title": "İqlim Fəalliyəti Həftəsi",
"comm.campaign2.title": "Sıfır Tullantı Çəlliyi",
"comm.campaign3.title": "Biomüxtəliflik Ayı",
"comm.campaign4.title": "Yaşıl Nəqliyyat Günü",
"comm.section5.title": "Tələbə İştirakı Fəaliyyətləri",
"comm.activity1.title": "Davamlılıq Hakatonu",
"comm.activity2.title": "İcma Bağı Layihəsi",
"comm.activity3.title": "Sosial İnnovasiya Laboratoriyası",
"comm.activity4.title": "Mədəni Mübadilə Tədbirləri",
"comm.activity5.title": "Liderlik Treyninqi",
"comm.cta": "İcmamıza Qoşulun",
```

- [ ] **Step 12: Build yoxla**

```bash
npm run build
```
Gözlənilən: Uğurlu build, xəta yoxdur

- [ ] **Step 13: Commit**

```bash
git add src/components/LanguageContext.tsx
git commit -m "feat: add 200+ translations for 5 sustainability pages

- Governance & Accountability (EN/AZ)
- Strategy & Reporting (EN/AZ)
- Research for Sustainable Development (EN/AZ)
- Sustainable Education (EN/AZ)
- Community & Social Impact (EN/AZ)

All translations ready for page content updates."
```

---

## Task 2: SumqayitMap Komponentinin Yaradılması

**Files:**
- Create: `src/components/SumqayitMap.tsx`
- Test: Visual test in browser

**Məqsəd:** Research səhifəsi üçün Sumqayıt xəritəsi komponenti yaratmaq.

- [ ] **Step 1: SumqayitMap.tsx faylını yarat**

```typescript
"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, Factory, Trees } from "lucide-react";
import { useState } from "react";

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

export default function SumqayitMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

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
                  {selectedLocation.name}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {selectedLocation.description}
                </p>
              </div>
              <button
                onClick={() => setSelectedLocation(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
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
            <Icon className={`w-4 h-4 ${typeColors[type as keyof typeof typeColors]}`} />
            <span className="capitalize">{type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Component import yoxla**

Build yoxla:
```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/SumqayitMap.tsx
git commit -m "feat: add SumqayitMap component with interactive markers

- SVG-based interactive map for Research page
- 4 location types: campus, research, industrial, restoration
- Tooltip with bilingual support (EN/AZ)
- Responsive design with dark mode
- Framer Motion animations"
```

---

## Task 3: PolicyCard Komponentinin Yaradılması

**Files:**
- Create: `src/components/PolicyCard.tsx`

- [ ] **Step 1: PolicyCard.tsx faylını yarat**

```typescript
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
```

- [ ] **Step 2: Commit**

```bash
git add src/components/PolicyCard.tsx
git commit -m "feat: add PolicyCard component for governance page

- Reusable card for policy display
- Icon, title, description slots
- Hover effects and dark mode support
- Follows existing design system"
```

---

## Task 4: ReportCard Komponentinin Yaradılması

**Files:**
- Create: `src/components/ReportCard.tsx`

- [ ] **Step 1: ReportCard.tsx faylını yarat**

```typescript
import { Download, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReportCardProps {
  title: string;
  year: string;
  onDownload: () => void;
}

export default function ReportCard({ title, year, onDownload }: ReportCardProps) {
  return (
    <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 rounded-xl px-5 py-4 border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary transition-colors group">
      <div className="flex items-center gap-4">
        <FileText className="w-5 h-5 text-primary shrink-0" />
        <div>
          <p className="font-medium text-slate-900 dark:text-white text-sm">
            {title}
          </p>
          <p className="text-xs text-slate-400 mt-0.5">{year}</p>
        </div>
      </div>
      <button
        onClick={onDownload}
        className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all"
      >
        <Download className="w-4 h-4" />
      </button>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ReportCard.tsx
git commit -m "feat: add ReportCard component for strategy page

- Downloadable report card with year display
- Hover effects and dark mode
- Placeholder download handler"
```

---

## Task 5: PartnershipCard Komponentinin Yaradılması

**Files:**
- Create: `src/components/PartnershipCard.tsx`

- [ ] **Step 1: PartnershipCard.tsx faylını yarat**

```typescript
import { Building2, Globe, Users, Briefcase, Landmark, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

interface PartnershipCardProps {
  type: "government" | "ngo" | "community" | "private" | "media" | "academic";
  title: string;
  description?: string;
}

const typeIcons = {
  government: Landmark,
  ngo: Globe,
  community: Users,
  private: Briefcase,
  media: Building2,
  academic: GraduationCap,
};

export default function PartnershipCard({ type, title, description }: PartnershipCardProps) {
  const Icon = typeIcons[type];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-semibold text-slate-900 dark:text-white text-lg mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/PartnershipCard.tsx
git commit -m "feat: add PartnershipCard component

- 6 partnership type icons
- Reusable card for community page
- Dark mode support"
```

---

## Task 6: Governance & Accountability Səhifəsinin Yenilənməsi

**Files:**
- Modify: `src/app/governance-policy/page.tsx`

- [ ] **Step 1: Mövcud faylı oxu**

```bash
Read: src/app/governance-policy/page.tsx
```

- [ ] **Step 2: Yeni məzmunla əvəz et**

```typescript
"use client";

import { motion } from "framer-motion";
import { Shield, FileText, Scale, Users, ChevronRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import PolicyCard from "@/components/PolicyCard";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function GovernancePolicyPage() {
  const { t } = useLanguage();

  const policies = [
    { icon: BookOpen, title: t("gov2.policy1.title"), desc: t("gov2.policy1.desc"), color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" },
    { icon: Shield, title: t("gov2.policy2.title"), desc: t("gov2.policy2.desc"), color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
    { icon: Users, title: t("gov2.policy3.title"), desc: t("gov2.policy3.desc"), color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-900/20" },
    { icon: FileText, title: t("gov2.policy4.title"), desc: t("gov2.policy4.desc"), color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-900/20" },
    { icon: Scale, title: t("gov2.policy5.title"), desc: t("gov2.policy5.desc"), color: "text-rose-600 dark:text-rose-400", bg: "bg-rose-50 dark:bg-rose-900/20" },
  ];

  const committees = [
    { title: t("gov2.committee1.title"), desc: t("gov2.committee1.desc") },
    { title: t("gov2.committee2.title"), desc: t("gov2.committee2.desc") },
    { title: t("gov2.committee3.title"), desc: t("gov2.committee3.desc") },
  ];

  const commitments = [
    { title: t("gov2.commitment1.title"), desc: t("gov2.commitment1.desc") },
    { title: t("gov2.commitment2.title"), desc: t("gov2.commitment2.desc") },
    { title: t("gov2.commitment3.title"), desc: t("gov2.commitment3.desc") },
    { title: t("gov2.commitment4.title"), desc: t("gov2.commitment4.desc") },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 py-24 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-200 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" /> Governance & Accountability
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {t("gov.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto"
          >
            {t("gov2.intro")}
          </motion.p>
        </div>
      </section>

      {/* Section 1: Framework */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            {t("gov2.section1.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            {t("gov2.section1.desc")}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {committees.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 2: Policies */}
      <section className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            {t("gov2.section2.title")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {policies.map((policy, i) => (
              <PolicyCard key={policy.title} {...policy} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Commitments */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t("gov2.section4.title")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {commitments.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          {t("gov2.cta")}
        </h2>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
        >
          {t("gov.cta.btn")} <ChevronRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
```

- [ ] **Step 3: Build yoxla**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/app/governance-policy/page.tsx
git commit -m "feat: update Governance & Accountability page with new content

- New multi-section layout: Framework, Policies, Committees, Commitments
- Reuses PolicyCard component
- Follows existing design system (blue gradient)
- Bilingual support via LanguageContext"
```

---

## Task 7: Strategy & Reporting Səhifəsinin Yenilənməsi

**Files:**
- Modify: `src/app/environmental-strategy/page.tsx`

- [ ] **Step 1: Yeni məzmunla əvəz et**

```typescript
"use client";

import { motion } from "framer-motion";
import { FileText, TrendingDown, Zap, Droplets, Wind, ChevronRight, Target, Leaf, Award } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import ReportCard from "@/components/ReportCard";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function EnvironmentalStrategyPage() {
  const { t } = useLanguage();

  const strategies = [
    { title: t("strat.strategy1.title"), desc: t("strat.strategy1.desc"), icon: TrendingDown, color: "text-emerald-600" },
    { title: t("strat.strategy2.title"), desc: t("strat.strategy2.desc"), icon: Zap, color: "text-yellow-600" },
    { title: t("strat.strategy3.title"), desc: t("strat.strategy3.desc"), icon: Leaf, color: "text-green-600" },
  ];

  const goals = [
    { title: t("strat.goal1.title"), desc: t("strat.goal1.desc"), progress: 34 },
    { title: t("strat.goal2.title"), desc: t("strat.goal2.desc"), progress: 60 },
    { title: t("strat.goal3.title"), desc: t("strat.goal3.desc"), progress: 45 },
    { title: t("strat.goal4.title"), desc: t("strat.goal4.desc"), progress: 28 },
    { title: t("strat.goal5.title"), desc: t("strat.goal5.desc"), progress: 70 },
  ];

  const reports = [
    { title: t("strat.report1.title"), year: "2024" },
    { title: t("strat.report2.title"), year: "2023" },
    { title: t("strat.report3.title"), year: "2024" },
    { title: t("strat.report4.title"), year: "2023" },
  ];

  const indicators = [
    { icon: TrendingDown, value: "1,245", label: t("strat.indicator1"), unit: "tons CO2" },
    { icon: Zap, value: "32%", label: t("strat.indicator2"), unit: "of total" },
    { icon: Droplets, value: "68%", label: t("strat.indicator3"), unit: "recycled" },
    { icon: Wind, value: "1.2M", label: t("strat.indicator4"), unit: "liters" },
  ];

  const handleDownload = () => {
    // Placeholder for download functionality
    alert("Download functionality will be implemented");
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-700 py-24 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-emerald-200 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <FileText className="w-4 h-4" /> Strategy & Reporting
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {t("strat.section1.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto"
          >
            {t("strat.intro")}
          </motion.p>
        </div>
      </section>

      {/* Section 1: Strategies */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {strategies.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <s.icon className={`w-10 h-10 ${s.color} mb-4`} />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 2: SDG Alignment */}
      <section className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {t("strat.section2.title")}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8">{t("strat.sdg.desc")}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {Array.from({ length: 17 }, (_, i) => i + 1).map((sdg) => (
              <motion.div
                key={sdg}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm"
              >
                {sdg}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Goals */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t("strat.section3.title")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal, i) => (
            <motion.div
              key={goal.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-emerald-600" />
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">{goal.title}</h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{goal.desc}</p>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${goal.progress}%` }}
                  viewport={{ once: true }}
                  className="h-2 rounded-full bg-emerald-500"
                />
              </div>
              <p className="text-xs text-emerald-600 mt-2">{goal.progress}% complete</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4: Reports */}
      <section className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            {t("strat.section4.title")}
          </h2>
          <div className="space-y-4">
            {reports.map((report, i) => (
              <ReportCard key={report.title} {...report} onDownload={handleDownload} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Indicators */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t("strat.section5.title")}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {indicators.map((m, i) => (
            <motion.div
              key={m.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 text-center"
            >
              <m.icon className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <p className="text-2xl font-bold text-emerald-600 mb-1">{m.value}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{m.label}</p>
              <p className="text-xs text-slate-400">{m.unit}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 py-16 px-4 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">{t("strat.cta")}</h2>
        <p className="text-emerald-100 mb-6 max-w-md mx-auto text-sm">
          Full reports available for download
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-emerald-700 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors"
        >
          {t("strat.cta")} <ChevronRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Build yoxla**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/app/environmental-strategy/page.tsx
git commit -m "feat: update Strategy & Reporting page with new content

- New sections: Strategies, SDG Alignment, Goals, Reports, Indicators
- 17 SDG badges display
- Progress bars for goals
- ReportCard component for downloads
- Emerald gradient theme"
```

---

## Task 8: Research for Sustainable Development Səhifəsinin Yenilənməsi

**Files:**
- Modify: `src/app/sdg-research/page.tsx`

- [ ] **Step 1: Yeni məzmunla əvəz et**

```typescript
"use client";

import { motion } from "framer-motion";
import { BookOpen, ChevronRight, Users, Building2, Award, Lightbulb } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import SumqayitMap from "@/components/SumqayitMap";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function SdgResearchPage() {
  const { t } = useLanguage();

  const projects = [
    { title: t("res2.project1.title"), desc: t("res2.project1.desc"), sdg: 7 },
    { title: t("res2.project2.title"), desc: t("res2.project2.desc"), sdg: 14 },
    { title: t("res2.project3.title"), desc: t("res2.project3.desc"), sdg: 2 },
    { title: t("res2.project4.title"), desc: t("res2.project4.desc"), sdg: 3 },
    { title: t("res2.project5.title"), desc: t("res2.project5.desc"), sdg: 12 },
    { title: t("res2.project6.title"), desc: t("res2.project6.desc"), sdg: 11 },
  ];

  const partnerships = [
    { title: t("res2.partner1.title"), type: "academic" as const },
    { title: t("res2.partner2.title"), type: "ngo" as const },
    { title: t("res2.partner3.title"), type: "ngo" as const },
    { title: t("res2.partner4.title"), type: "government" as const },
    { title: t("res2.partner5.title"), type: "private" as const },
  ];

  const centers = [
    { title: t("res2.center1.title"), desc: t("res2.center1.desc") },
    { title: t("res2.center2.title"), desc: t("res2.center2.desc") },
    { title: t("res2.center3.title"), desc: t("res2.center3.desc") },
    { title: t("res2.center4.title"), desc: t("res2.center4.desc") },
  ];

  const studentProjects = [
    { title: t("res2.student1.title"), type: "Undergraduate" },
    { title: t("res2.student2.title"), type: "Master's" },
    { title: t("res2.student3.title"), type: "PhD" },
    { title: t("res2.student4.title"), type: "Competition" },
    { title: t("res2.student5.title"), type: "Grant" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 to-amber-700 py-24 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-orange-200 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4" /> Research for Sustainable Development
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {t("res.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto"
          >
            {t("res2.intro")}
          </motion.p>
        </div>
      </section>

      {/* Section 1: Map */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            {t("res2.section1.title")}
          </h2>
        </motion.div>
        <SumqayitMap />
      </section>

      {/* Section 2: Projects */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t("res2.section2.title")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center justify-between mb-3">
                <Award className="w-6 h-6 text-orange-600" />
                <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center text-xs font-bold">
                  SDG {project.sdg}
                </span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: Partnerships */}
      <section className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            {t("res2.section3.title")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerships.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 flex items-center gap-4"
              >
                <Users className="w-8 h-8 text-orange-600" />
                <h3 className="font-semibold text-slate-900 dark:text-white">{p.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Centers */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t("res2.section4.title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {centers.map((center, i) => (
            <motion.div
              key={center.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <Building2 className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{center.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{center.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 5: Student Projects */}
      <section className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            {t("res2.section5.title")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentProjects.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"
              >
                <Lightbulb className="w-6 h-6 text-orange-600 mb-3" />
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-slate-400">{item.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 py-16 px-4 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">{t("res2.cta")}</h2>
        <p className="text-orange-100 mb-6 max-w-md mx-auto text-sm">
          Discover opportunities for collaboration and research
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-orange-700 font-semibold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors"
        >
          {t("res.cta.btn")} <ChevronRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Build yoxla**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/app/sdg-research/page.tsx
git commit -m "feat: update Research page with Sumqayit map and new sections

- SumqayitMap component for research context
- New sections: Projects, Partnerships, Centers, Student Projects
- SDG badges on project cards
- Orange gradient theme"
```

---

## Task 9: Sustainable Education Səhifəsinin Yenilənməsi

**Files:**
- Modify: `src/app/education-curriculum/page.tsx`

- [ ] **Step 1: Yeni məzmunla əvəz et**

```typescript
"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Award, ChevronRight, Lightbulb } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function EducationCurriculumPage() {
  const { t } = useLanguage();

  const topics = [
    { title: t("edu2.topic1.title"), desc: t("edu2.topic1.desc") },
    { title: t("edu2.topic2.title"), desc: t("edu2.topic2.desc") },
    { title: t("edu2.topic3.title"), desc: t("edu2.topic3.desc") },
    { title: t("edu2.topic4.title"), desc: t("edu2.topic4.desc") },
    { title: t("edu2.topic5.title"), desc: t("edu2.topic5.desc") },
    { title: t("edu2.topic6.title"), desc: t("edu2.topic6.desc") },
  ];

  const courses = [
    { title: t("edu2.course1.title"), desc: t("edu2.course1.desc") },
    { title: t("edu2.course2.title"), desc: t("edu2.course2.desc") },
    { title: t("edu2.course3.title"), desc: t("edu2.course3.desc") },
    { title: t("edu2.course4.title"), desc: t("edu2.course4.desc") },
    { title: t("edu2.course5.title"), desc: t("edu2.course5.desc") },
    { title: t("edu2.course6.title"), desc: t("edu2.course6.desc") },
  ];

  const initiatives = [
    { title: t("edu2.init1.title"), desc: t("edu2.init1.desc") },
    { title: t("edu2.init2.title"), desc: t("edu2.init2.desc") },
    { title: t("edu2.init3.title"), desc: t("edu2.init3.desc") },
    { title: t("edu2.init4.title"), desc: t("edu2.init4.desc") },
    { title: t("edu2.init5.title"), desc: t("edu2.init5.desc") },
  ];

  const ecoActivities = [
    t("edu2.eco1.title"),
    t("edu2.eco2.title"),
    t("edu2.eco3.title"),
    t("edu2.eco4.title"),
  ];

  const workshops = [
    t("edu2.workshop1.title"),
    t("edu2.workshop2.title"),
    t("edu2.workshop3.title"),
    t("edu2.workshop4.title"),
    t("edu2.workshop5.title"),
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-600 to-pink-700 py-24 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-pink-200 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <GraduationCap className="w-4 h-4" /> Sustainable Education
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {t("edu.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-lg md:text-xl text-rose-100 max-w-2xl mx-auto"
          >
            {t("edu2.intro")}
          </motion.p>
        </div>
      </section>

      {/* Section 1: Topics */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t("edu2.section1.title")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, i) => (
            <motion.div
              key={topic.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <BookOpen className="w-6 h-6 text-rose-600 mb-3" />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{topic.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{topic.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 2: Courses */}
      <section className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            {t("edu2.section2.title")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"
              >
                <Award className="w-6 h-6 text-rose-600 mb-3" />
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">{course.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{course.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Initiatives */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t("edu2.section3.title")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <Users className="w-6 h-6 text-rose-600 mb-3" />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4: Eco-Club Activities */}
      <section className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            {t("edu2.section4.title")}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {ecoActivities.map((activity, i) => (
              <motion.div
                key={activity}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-5 border border-rose-200 dark:border-rose-800 text-center"
              >
                <Lightbulb className="w-8 h-8 text-rose-600 mx-auto mb-3" />
                <p className="text-sm font-medium text-slate-900 dark:text-white">{activity}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Workshops */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t("edu2.section5.title")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {workshops.map((workshop, i) => (
            <motion.div
              key={workshop}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 flex items-center gap-3"
            >
              <GraduationCap className="w-5 h-5 text-rose-600" />
              <p className="text-sm font-medium text-slate-900 dark:text-white">{workshop}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rose-600 py-16 px-4 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">{t("edu2.cta")}</h2>
        <p className="text-rose-100 mb-6 max-w-md mx-auto text-sm">
          Explore our full catalog of sustainability courses and programs
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-rose-700 font-semibold px-6 py-3 rounded-xl hover:bg-rose-50 transition-colors"
        >
          {t("edu.cta.btn")} <ChevronRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Build yoxla**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/app/education-curriculum/page.tsx
git commit -m "feat: update Education page with curriculum topics and courses

- New sections: Topics, Courses, Initiatives, Eco-Club, Workshops
- 6 curriculum topics displayed
- 6 courses with descriptions
- Student initiatives and eco-club activities
- Rose gradient theme"
```

---

## Task 10: Community & Social Impact Səhifəsinin Yenilənməsi

**Files:**
- Modify: `src/app/social-impact/page.tsx`

- [ ] **Step 1: Yeni məzmunla əvəz et**

```typescript
"use client";

import { motion } from "framer-motion";
import { Users, Heart, Handshake, Award, ChevronRight, Globe } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import PartnershipCard from "@/components/PartnershipCard";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function SocialImpactPage() {
  const { t } = useLanguage();

  const outreachProjects = [
    { title: t("comm.outreach1.title"), desc: t("comm.outreach1.desc") },
    { title: t("comm.outreach2.title"), desc: t("comm.outreach2.desc") },
    { title: t("comm.outreach3.title"), desc: t("comm.outreach3.desc") },
    { title: t("comm.outreach4.title"), desc: t("comm.outreach4.desc") },
    { title: t("comm.outreach5.title"), desc: t("comm.outreach5.desc") },
    { title: t("comm.outreach6.title"), desc: t("comm.outreach6.desc") },
  ];

  const partnerships = [
    { title: t("comm.partner1.title"), type: "government" as const },
    { title: t("comm.partner2.title"), type: "ngo" as const },
    { title: t("comm.partner3.title"), type: "community" as const },
    { title: t("comm.partner4.title"), type: "private" as const },
    { title: t("comm.partner5.title"), type: "media" as const },
    { title: t("comm.partner6.title"), type: "academic" as const },
  ];

  const volunteers = [
    { title: t("comm.volunteer1.title"), desc: t("comm.volunteer1.desc") },
    { title: t("comm.volunteer2.title"), desc: t("comm.volunteer2.desc") },
    { title: t("comm.volunteer3.title"), desc: t("comm.volunteer3.desc") },
    { title: t("comm.volunteer4.title"), desc: t("comm.volunteer4.desc") },
    { title: t("comm.volunteer5.title"), desc: t("comm.volunteer5.desc") },
  ];

  const campaigns = [
    t("comm.campaign1.title"),
    t("comm.campaign2.title"),
    t("comm.campaign3.title"),
    t("comm.campaign4.title"),
  ];

  const activities = [
    t("comm.activity1.title"),
    t("comm.activity2.title"),
    t("comm.activity3.title"),
    t("comm.activity4.title"),
    t("comm.activity5.title"),
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-violet-700 py-24 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-200 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <Users className="w-4 h-4" /> Community & Social Impact
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            {t("soc.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto"
          >
            {t("comm.intro")}
          </motion.p>
        </div>
      </section>

      {/* Section 1: Outreach Projects */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t("comm.section1.title")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outreachProjects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <Heart className="w-6 h-6 text-purple-600 mb-3" />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 2: Partnerships */}
      <section className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            {t("comm.section2.title")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerships.map((p, i) => (
              <PartnershipCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Volunteering */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t("comm.section3.title")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteers.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"
            >
              <Users className="w-6 h-6 text-purple-600 mb-3" />
              <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4: Campaigns */}
      <section className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-700 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            {t("comm.section4.title")}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {campaigns.map((campaign, i) => (
              <motion.div
                key={campaign}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-5 border border-purple-200 dark:border-purple-800 text-center"
              >
                <Globe className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <p className="text-sm font-medium text-slate-900 dark:text-white">{campaign}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Activities */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          {t("comm.section5.title")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, i) => (
            <motion.div
              key={activity}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <Award className="w-6 h-6 text-purple-600 mb-3" />
              <h3 className="font-semibold text-slate-900 dark:text-white">{activity}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-purple-600 py-16 px-4 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">{t("comm.cta")}</h2>
        <p className="text-purple-100 mb-6 max-w-md mx-auto text-sm">
          Join our community initiatives and make a difference today
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-purple-700 font-semibold px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors"
        >
          {t("comm.cta")} <ChevronRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Build yoxla**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/app/social-impact/page.tsx
git commit -m "feat: update Community & Social Impact page with new sections

- New sections: Outreach, Partnerships, Volunteering, Campaigns, Activities
- PartnershipCard component reused
- 6 outreach projects, 6 partnerships, 5 volunteer programs
- Purple gradient theme"
```

---

## Task 11: Final Test və Verification

**Files:**
- All modified files

- [ ] **Step 1: Full build yoxla**

```bash
npm run build
```
Gözlənilən: Uğurlu build, heç bir xəta yoxdur

- [ ] **Step 2: Development server işə sal**

```bash
npm run dev
```

- [ ] **Step 3: Hər səhifəni yoxla**

Aşağıdakı URL-ləri brauzerdə yoxla:
- http://localhost:3000/governance-policy
- http://localhost:3000/environmental-strategy
- http://localhost:3000/sdg-research
- http://localhost:3000/education-curriculum
- http://localhost:3000/social-impact

- [ ] **Step 4: Language toggle yoxla**

Hər səhifədə EN/AZ dil dəyişdirmə test et

- [ ] **Step 5: Dark mode yoxla**

Hər səhifədə dark/light mode dəyişdirmə test et

- [ ] **Step 6: Responsive yoxla**

Mobile, tablet, desktop görünüşləri test et

- [ ] **Step 7: Son commit**

```bash
git add .
git commit -m "feat: complete sustainability content update for all 5 pages

All pages updated with new content structure:
- Governance & Accountability: Framework, Policies, Committees, Commitments
- Strategy & Reporting: Strategies, SDG Alignment, Goals, Reports, Indicators
- Research: Map, Projects, Partnerships, Centers, Student Projects
- Education: Topics, Courses, Initiatives, Eco-Club, Workshops
- Community: Outreach, Partnerships, Volunteering, Campaigns, Activities

New components: SumqayitMap, PolicyCard, ReportCard, PartnershipCard
200+ translations added to LanguageContext (EN/AZ)
All pages follow existing design system"
```

---

## Qəbul Meyarları Yoxlanışı

- [ ] Bütün 5 səhifə yeni məzmunla yüklənir
- [ ] Sumqayıt xəritəsi Research səhifəsində işləyir
- [ ] Bütün kartlar düzgün məlumat göstərir
- [ ] EN/AZ dil dəyişdirmə işləyir
- [ ] Dark mode düzgün işləyir
- [ ] Responsive dizayn düzgündür
- [ ] Build uğurlu keçir
- [ ] Console warnings yoxdur

---

Plan complete and saved to `docs/superpowers/plans/2026-03-25-sdu-sustainability-content-update.md`.

Two execution options:

**1. Subagent-Driven (recommended)** - Hər task üçün ayrı subagent işə salıram, tasklar arasında review edirəm, sürətli iterasiya

**2. Inline Execution** - Bu sessiyada taskları bir-bir yerinə yetirirəm, checkpoint-lərlə

**Hansı yanaşmanı seçirsiniz?**
