# SDU Dayanıqlılıq Portalı - Menyu Bölmələrinin Məzmun Yenilənməsi

**Tarix:** 2026-03-25
**Status:** Təsdiqə gözləyir
**Müəllif:** Claude Code (Brainstorming Skill)

---

## 1. Ümumi Baxış

### 1.1 Məqsəd
Sumqayıt Dövlət Universitetinin Dayanıqlılıq portalının 5 əsas bölməsinin məzmununu yeniləmək. Mövcud naviqasiya strukturu və URL-lər dəyişməz qalır, ancaq hər səhifənin iç məzmunu tamamilə yenilənir.

### 1.2 Əhatə Dairəsi
- 5 mövcud səhifənin məzmununun yenilənməsi
- Hər səhifə üçün çoxbölməli yeni struktur
- Sumqayıt xəritəsi komponentinin əlavə edilməsi (Research səhifəsinə)
- Bütün mətnlərin EN/AZ tərcümələrinin hazırlanması
- Mövcud dizayn sisteminə 100% sadiq qalmaq

### 1.3 Dizayn Prinsipləri
- **Mövcud üslub saxlanılır:** Rəng qradiyentləri, kart dizaynı, animasiyalar, tipografiya
- **Framer Motion:** Scroll animasiyaları qorunur
- **Tailwind CSS:** Mövcud utility class-lar istifadə olunur
- **Lucide React:** İkonlar mövcud kitabxanadan
- **Responsive:** Mobile-first yanaşma davam edir

---

## 2. Mövcud Vəziyyət

### 2.1 Mövcud Səhifələr
| Route | Mövcud Ad (EN) | Mövcud Ad (AZ) |
|-------|----------------|----------------|
| `/governance-policy` | Governance & Policy | İdarəetmə və Siyasət |
| `/environmental-strategy` | Environmental Strategy | Ekoloji Strategiya |
| `/social-impact` | Social Impact | Sosial Təsir |
| `/sdg-research` | SDG Research | DİM Tədqiqatları |
| `/education-curriculum` | Education & Curriculum | Təhsil və Kurikulum |

### 2.2 Mövcud Struktur
```
Hero (başlıq + təsvir + icon)
→ Metrics (4 kart)
→ Initiatives (4 blok)
→ CTA (əlaqə bölməsi)
```

---

## 3. Yeni Məzmun Strukturu

### 3.1 Governance & Accountability (`/governance-policy`)

**Rəng:** Blue/Indigo qradiyent (`from-blue-600 to-indigo-700`)

```
Hero
├── Başlıq: "Governance & Accountability"
├── Təsvir: "Sumgayit State University is committed to responsible governance..."
└── İkon: Shield (Lucide)

Section 1: Institutional Governance & Sustainability Framework
├── 2-3 izahedici kart
├── Universitetin idarəetmə strukturu
└── Dayanıqlılıq üzrə məsuliyyət səviyyələri

Section 2: Key Policies
├── 5 policy kartı:
│   ├── Ethics Policy
│   ├── Anti-Corruption Policy
│   ├── Inclusion & Diversity Policy
│   ├── Sustainable Procurement Policy
│   └── Financial Responsibility Policy
└── Hər kart: başlıq, qısa təsvir, "Learn more" linki

Section 3: Sustainability Leadership & Committees
├── 3 blok:
│   ├── Sustainability Steering Committee
│   ├── Working Groups
│   └── Leadership Team
└── Hər blok: üzvlər, rol, əlaqə

Section 4: Institutional Commitments
├── 4 öhdəlik kartı:
│   ├── UN SDG Commitment
│   ├── Carbon Neutrality Goal
│   ├── Transparency Pledge
│   └── Community Partnership
└── CTA: "Learn More About Our Governance"
```

**LanguageContext tərcümələri:**
```typescript
// EN
"gov2.intro": "Sumgayit State University is committed to responsible governance..."
"gov2.section1.title": "Institutional Governance & Sustainability Framework"
"gov2.section2.title": "Key Policies"
"gov2.policy1": "Ethics Policy"
"gov2.policy2": "Anti-Corruption Policy"
"gov2.policy3": "Inclusion & Diversity Policy"
"gov2.policy4": "Sustainable Procurement Policy"
"gov2.policy5": "Financial Responsibility Policy"
"gov2.section3.title": "Sustainability Leadership & Committees"
"gov2.section4.title": "Institutional Commitments"
"gov2.cta": "Learn More About Our Governance"

// AZ
"gov2.intro.az": "Sumqayıt Dövlət Universiteti məsul idarəetmə..."
// ...digər tərcümələr
```

---

### 3.2 Strategy & Reporting (`/environmental-strategy` → yenilənir)

**Rəng:** Emerald/Teal qradiyent (`from-emerald-600 to-teal-700`)

```
Hero
├── Başlıq: "Strategy & Reporting"
├── Təsvir: "Sumgayit State University is gradually integrating sustainability principles..."
└── İkon: FileText (Lucide)

Section 1: Climate Action and Sustainability Strategy
├── 3 strategiyanı izah edən kart:
│   ├── Carbon Reduction Strategy
│   ├── Energy Transition Plan
│   └── Biodiversity Protection
└── Hər kart: hədəf, tarix, status

Section 2: SDG Alignment
├── 17 DİM üçün uyğunluq diaqramı (grid layout)
├── Hər DİM üçün:
│   ├── İkon
│   ├── Ad
│   └── Status (Active/Planned)
└── Filtrləmə: Hamısı / Aktiv / Planlaşdırılan

Section 3: Sustainability Goals & Priorities
├── 5 hədəf kartı:
│   ├── Net-Zero by 2030
│   ├── Zero Waste Campus
│   ├── 100% Renewable Energy
│   ├── Water Conservation
│   └── Green Education for All
└── Hər kart: metrik, deadline, progress bar

Section 4: SDG Reports & Progress
├── 4 hesabat kartı (yüklənə bilən PDF):
│   ├── Annual Sustainability Report 2024
│   ├── SDG Progress Report 2023
│   ├── Climate Action Update 2024
│   └── GRI Compliance Report
└── Hər kart: il, həcm, download button

Section 5: Key Indicators
├── 6 metrik kartı:
│   ├── Carbon Emissions (tons CO2)
│   ├── Renewable Energy (%)
│   ├── Waste Recycled (%)
│   ├── Water Saved (M liters)
│   ├── Green Courses (%)
│   └── Community Projects (#)
└── CTA: "Download Full Reports"
```

**LanguageContext tərcümələri:**
```typescript
// EN
"strat.intro": "Sumgayit State University is gradually integrating..."
"strat.section1.title": "Climate Action and Sustainability Strategy"
"strat.section2.title": "SDG Alignment"
"strat.section3.title": "Sustainability Goals & Priorities"
"strat.section4.title": "SDG Reports & Progress"
"strat.section5.title": "Key Indicators"
"strat.cta": "Download Full Reports"
// ...digər tərcümələr
```

---

### 3.3 Research for Sustainable Development (`/sdg-research`)

**Rəng:** Orange/Amber qradiyent (`from-orange-600 to-amber-700`)

```
Hero
├── Başlıq: "Research for Sustainable Development"
├── Təsvir: "The historical industrial development of Sumgayit provides a unique context..."
└── İkon: BookOpen (Lucide)

Section 1: Sumqayıt Map Component (YENİ)
├── İnteraktiv SVG xəritə və ya statik şəkil
├── Əsas lokasiyalar:
│   ├── SDU Main Campus
│   ├── Research Centers
│   ├── Industrial Zones
│   └── Environmental Restoration Areas
└── Tooltip-lər: hər lokasiya haqqında məlumat

Section 2: SDG-related Research Projects
├── 6 tədqiqat layihəsi kartı:
│   ├── Renewable Energy Storage
│   ├── Caspian Sea Biodiversity
│   ├── Sustainable Agriculture
│   ├── Air Quality Monitoring
│   ├── Green Economy Policy
│   └── Waste Management Tech
└── Hər kart: SDG icon, başlıq, təsvir, status

Section 3: Research Partnerships
├── 5 tərəfdaş təşkilat kartı:
│   ├── International Universities
│   ├── Research Institutes
│   ├── NGOs & Foundations
│   ├── Government Agencies
│   └── Industry Partners
└── Hər kart: loqo, ad, tərəfdaşlıq növü

Section 4: Research Centres & Laboratories
├── 4 mərkəz/laboratoriya kartı:
│   ├── Renewable Energy Lab
│   ├── Environmental Research Center
│   ├── Sustainability Innovation Hub
│   └── Data Analytics Lab
└── Hər kart: təsvir, avadanlıq, əlaqə

Section 5: Student Research Projects
├── 5 tələbə layihəsi kartı:
│   ├── Undergraduate Projects
│   ├── Master's Theses
│   ├── PhD Dissertations
│   ├── Innovation Challenge Winners
│   └── Grant Recipients
└── Hər kart: tələbə, mövzu, SDG, il
└── CTA: "Explore Research Opportunities"
```

**Xüsusi Komponent: SumqayitMap.tsx**
```typescript
// Yeni komponent: src/components/SumqayitMap.tsx
// Xüsusiyyətlər:
// - SVG əsaslı interaktiv xəritə
// - Tooltip-lər hər lokasiya üçün
// - Zoom in/out funksiyası
// - Responsive dizayn
// - Dark mode dəstəyi
```

**LanguageContext tərcümələri:**
```typescript
// EN
"res2.intro": "The historical industrial development of Sumgayit..."
"res2.section1.title": "Sumqayıt: Research Context"
"res2.section2.title": "SDG-related Research Projects"
"res2.section3.title": "Research Partnerships"
"res2.section4.title": "Research Centres & Laboratories"
"res2.section5.title": "Student Research Projects"
"res2.cta": "Explore Research Opportunities"
// ...digər tərcümələr
```

---

### 3.4 Sustainable Education (`/education-curriculum`)

**Rəng:** Rose/Pink qradiyent (`from-rose-600 to-pink-700`)

```
Hero
├── Başlıq: "Sustainable Education"
├── Təsvir: "Sumgayit State University promotes education that encourages awareness..."
└── İkon: GraduationCap (Lucide)

Section 1: Sustainability Topics in Curriculum
├── 6 mövzu kartı:
│   ├── Climate Change Science
│   ├── Circular Economy
│   ├── Social Responsibility
│   ├── Environmental Ethics
│   ├── Green Technology
│   └── Sustainable Development Goals
└── Hər kart: təsvir, fakültə, səviyyə

Section 2: Relevant Courses & Programs
├── 6 kurs/proqram kartı:
│   ├── Introduction to Sustainability
│   ├── Environmental Management
│   ├── Green Business Practices
│   ├── Renewable Energy Systems
│   ├── Sustainable Urban Planning
│   └── MSc in Sustainable Development
└── Hər kart: kredit, semester, müəllim

Section 3: Student Sustainability Initiatives
├── 5 tələbə təşəbbüsü kartı:
│   ├── Green Campus Movement
│   ├── Recycling Program
│   ├── Energy Awareness Campaign
│   ├── Sustainable Fashion Project
│   └── Food Waste Reduction
└── Hər kart: lider, üzvlər, təsvir

Section 4: Eco-Club Activities
├── 4 eko-klub fəaliyyəti:
│   ├── Tree Planting Events
│   ├── Beach Cleanups
│   ├── Sustainability Workshops
│   └── Documentary Screenings
└── Hər fəaliyyət: tarix, yer, qeydiyyat linki

Section 5: Workshops & Seminars
├── 5 tədbir kartı:
│   ├── Guest Lectures
│   ├── Expert Panels
│   ├── Hands-on Training
│   ├── Career Fairs
│   └── Research Symposia
└── Hər kart: spiker, mövzu, qeydiyyat
└── CTA: "View Course Catalog"
```

**LanguageContext tərcümələri:**
```typescript
// EN
"edu2.intro": "Sumgayit State University promotes education..."
"edu2.section1.title": "Sustainability Topics in Curriculum"
"edu2.section2.title": "Relevant Courses & Programs"
"edu2.section3.title": "Student Sustainability Initiatives"
"edu2.section4.title": "Eco-Club Activities"
"edu2.section5.title": "Workshops & Seminars"
"edu2.cta": "View Course Catalog"
// ...digər tərcümələr
```

---

### 3.5 Community & Social Impact (`/social-impact`)

**Rəng:** Purple/Violet qradiyent (`from-purple-600 to-violet-700`)

```
Hero
├── Başlıq: "Community & Social Impact"
├── Təsvir: "The University recognizes the importance of contributing to the development..."
└── İkon: Users (Lucide)

Section 1: Community Outreach Projects
├── 6 layihə kartı:
│   ├── Rural Education Support
│   ├── Healthcare Awareness
│   ├── Digital Literacy Program
│   ├── Youth Empowerment
│   ├── Elderly Care Initiative
│   └── Disability Support
└── Hər kart: məqsəd,受益ənlər, tərəfdaşlar

Section 2: Partnerships
├── 6 tərəfdaş təşkilat kartı:
│   ├── Local Government
│   ├── International NGOs
│   ├── Community Organizations
│   ├── Private Sector
│   ├── Media Partners
│   └── Academic Institutions
└── Hər kart: loqo, ad, əməkdaşlıq növü

Section 3: Volunteering Initiatives
├── 5 könüllülük proqramı:
│   ├── Student Volunteer Corps
│   ├── Faculty Pro Bono Program
│   ├── Alumni Mentorship
│   ├── Community Service Days
│   └── Emergency Response Team
└── Hər proqram: saatlar, iştirakçılar, təsvir

Section 4: Sustainability Awareness Campaigns
├── 4 kampaniya kartı:
│   ├── Climate Action Week
│   ├── Zero Waste Challenge
│   ├── Biodiversity Month
│   └── Green Transportation Day
└── Hər kampaniya: tarix, məqsəd, nəticələr

Section 5: Student Engagement Activities
├── 5 fəaliyyət kartı:
│   ├── Sustainability Hackathon
│   ├── Community Garden Project
│   ├── Social Innovation Lab
│   ├── Cultural Exchange Events
│   └── Leadership Training
└── Hər fəaliyyət: təsvir, qeydiyyat, şəkillər
└── CTA: "Join Our Community"
```

**LanguageContext tərcümələri:**
```typescript
// EN
"comm.intro": "The University recognizes the importance..."
"comm.section1.title": "Community Outreach Projects"
"comm.section2.title": "Partnerships"
"comm.section3.title": "Volunteering Initiatives"
"comm.section4.title": "Sustainability Awareness Campaigns"
"comm.section5.title": "Student Engagement Activities"
"comm.cta": "Join Our Community"
// ...digər tərcümələr
```

---

## 4. Texniki Tələblər

### 4.1 Yeni Komponentlər

| Komponent | Path | Təsvir |
|-----------|------|--------|
| `SumqayitMap.tsx` | `src/components/SumqayitMap.tsx` | İnteraktiv SVG xəritə |
| `PolicyCard.tsx` | `src/components/PolicyCard.tsx` | Policy kartı üçün |
| `ReportCard.tsx` | `src/components/ReportCard.tsx` | Hesabat yükləmə kartı |
| `PartnershipCard.tsx` | `src/components/PartnershipCard.tsx` | Tərəfdaşlıq kartı |

### 4.2 Yenilənən Komponentlər

| Komponent | Dəyişiklik |
|-----------|------------|
| `Navbar.tsx` | Dəyişiklik yoxdur (adlar saxlanılır) |
| `LanguageContext.tsx` | ~200+ yeni tərcümə əlavə ediləcək |

### 4.3 Fayl Strukturu

```
src/
├── app/
│   ├── governance-policy/page.tsx          # YENİDƏN YAZILIR
│   ├── environmental-strategy/page.tsx     # YENİDƏN YAZILIR
│   ├── social-impact/page.tsx              # YENİDƏN YAZILIR
│   ├── sdg-research/page.tsx               # YENİDƏN YAZILIR
│   └── education-curriculum/page.tsx       # YENİDƏN YAZILIR
├── components/
│   ├── SumqayitMap.tsx                     # YENİ
│   ├── PolicyCard.tsx                      # YENİ
│   ├── ReportCard.tsx                      # YENİ
│   └── PartnershipCard.tsx                 # YENİ
└── ...
```

---

## 5. Implementation Plan

### 5.1 Mərhələlər

1. **Hazırlıq** (Day 1)
   - `docs/` qovluğu yaratmaq
   - Bu dizayn sənədini commit etmək
   - `TaskCreate` ilə işləri izləmək

2. **LanguageContext Yenilənməsi** (Day 1-2)
   - ~200+ yeni tərcümə əlavə etmək (EN/AZ)
   - Test etmək

3. **Yeni Komponentlər** (Day 2-3)
   - `SumqayitMap.tsx` yaratmaq
   - `PolicyCard.tsx`, `ReportCard.tsx`, `PartnershipCard.tsx` yaratmaq

4. **Səhifələrin Yenilənməsi** (Day 3-5)
   - Hər səhifəni ayrı-ayrılıqda yeniləmək
   - Hər səhifədən sonra test

5. **Final Yoxlama** (Day 5)
   - Bütün səhifələri test etmək
   - Responsive dizayn yoxlamaq
   - Dark mode yoxlamaq
   - EN/AZ dəyişdirmə test

### 5.2 Task List

- [ ] LanguageContext-ə yeni tərcümələr əlavə et
- [ ] SumqayitMap.tsx komponentini yarat
- [ ] PolicyCard.tsx komponentini yarat
- [ ] ReportCard.tsx komponentini yarat
- [ ] PartnershipCard.tsx komponentini yarat
- [ ] Governance & Accountability səhifəsini yenilə
- [ ] Strategy & Reporting səhifəsini yenilə
- [ ] Research for Sustainable Development səhifəsini yenilə
- [ ] Sustainable Education səhifəsini yenilə
- [ ] Community & Social Impact səhifəsini yenilə
- [ ] Bütün səhifələri test et (responsive, dark mode, i18n)

---

## 6. Qəbul Meyarları

### 6.1 Functional
- [ ] 5 səhifə yeni məzmunla yüklənir
- [ ] Sumqayıt xəritəsi Research səhifəsində görünür
- [ ] Bütün kartlar düzgün məlumat göstərir
- [ ] Download button-lar işləyir (placeholder)
- [ ] EN/AZ dil dəyişdirmə işləyir

### 6.2 Dizayn
- [ ] Mövcud rəng sxemi saxlanılıb
- [ ] Animasiyalar işləyir
- [ ] Responsive dizayn düzgündür
- [ ] Dark mode düzgün işləyir

### 6.3 Performance
- [ ] Səhifə yüklənmə vaxtı < 3 saniyə
- [ ] Heç bir console warning yoxdur
- [ ] Build errorsiz keçir

---

## 7. Risklər və Asılılıqlar

### 7.1 Risklər
| Risk | Təsir | Mitigasiya |
|------|-------|------------|
| Sumqayıt xəritəsi mənbəyi tapılmır | Orta | Placeholder SVG istifadə et |
| Tərcümələr gecikir | Orta | EN əvvəl, AZ sonra əlavə et |
| Mövcud kodla konflikt | Aşağı | Hər səhifəni ayrı test et |

### 7.2 Asılılıqlar
- `framer-motion` (mövcud)
- `lucide-react` (mövcud)
- `next-themes` (mövcud)
- Yeni asılılıq yoxdur

---

## 8. Növbəti Addım

**Bu sənəd təsdiqləndikdən sonra:**
1. `writing-plans` skill çağırılacaq
2. Detallı implementation planı yaradılacaq
3. Kodlama mərhələsinə keçiləcək

---

**Qeydlər:**
- Bu sənəd `docs/superpowers/specs/` qovluğunda saxlanılır
- Git-ə commit edilməlidir
- Implementation zamanı bu sənədə istinad edin
