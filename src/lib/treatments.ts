import { CLINIC, SITE_URL } from "./clinic";

export type TreatmentIcon = "Sparkles" | "Gem" | "Activity" | "Smile";

export type TreatmentImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type TreatmentEvidenceCase = {
  layout?: "clinical" | "sequence";
  badge?: string;
  eyebrow?: string;
  title: string;
  description: string;
  consent: string;
  ctaLabel?: string;
  images: TreatmentImage[];
};

export type TreatmentFaq = {
  question: string;
  answer: string;
};

export type TreatmentStep = {
  number: string;
  title: string;
  duration?: string;
  description: string;
};

export type TreatmentOption = {
  name: string;
  bestFor: string;
  summary: string;
};

export type TreatmentStat = {
  value: string;
  label: string;
  detail: string;
};

export type TreatmentSource = {
  label: string;
  href: string;
  note: string;
};

export type Treatment = {
  slug: string;
  cardTitle: string;
  navLabel: string;
  name: string;
  h1: {
    leading: string;
    accent: string;
    trailing: string;
  };
  title: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  icon: TreatmentIcon;
  heroLead: string;
  heroFacts: string[];
  heroImage: TreatmentImage;
  heroImageFit?: "cover" | "contain";
  ogImage: string;
  heroAside: { value: string; label: string }[];
  quickAnswer: string;
  definition: {
    title: string;
    paragraphs: string[];
  };
  signsTitle: string;
  signs: { title: string; description: string }[];
  candidates: string[];
  notFor: string[];
  optionsTitle: string;
  optionsIntro: string;
  options: TreatmentOption[];
  stepsTitle: string;
  stepsIntro: string;
  steps: TreatmentStep[];
  evidence: {
    intro: string;
    stats: TreatmentStat[];
    caveat: string;
    sources: TreatmentSource[];
  };
  benefits: { title: string; description: string }[];
  technology: { title: string; description: string }[];
  gallery: TreatmentImage[];
  galleryTitle: string;
  galleryNote: string;
  evidenceCase?: TreatmentEvidenceCase;
  aftercare: { title: string; items: string[] }[];
  risks: string[];
  costTitle: string;
  costIntro: string;
  costFactors: string[];
  costNote: string;
  faqs: TreatmentFaq[];
  related: string[];
  ctaHeadline: string;
  ctaBody: string;
  updated: string;
  readingTime: string;
  procedureType: string;
  medicalSpecialty: string;
};

const IMG = {
  fullMouthHero: {
    src: "/treatments/full-mouth-rehabilitation-malabar-hill-mumbai.webp",
    alt: "Full mouth rehabilitation treatment planning at Smile Clinique, Malabar Hill, Mumbai",
    caption: "A coordinated reconstruction plan, designed around the bite and the face.",
  },
  smileHero: {
    src: "/treatments/smile-design-porcelain-veneers-malabar-hill-mumbai.webp",
    alt: "Porcelain veneers and smile design result at Smile Clinique, Mumbai",
    caption: "Minimal-preparation porcelain designed tooth by tooth.",
  },
  implantsHero: {
    src: "/treatments/dental-implant-before-after-malabar-hill-mumbai.webp",
    alt: "Before and after single-tooth dental implant restoration at Smile Clinique in Malabar Hill, Mumbai",
    caption: "Single-tooth implant restoration: before (top) and after (bottom). Clinical images shared with consent.",
  },
  orthoHero: {
    src: "/treatments/orthodontic-clear-aligners-frontal-pre-mid-post-malabar-hill-mumbai.webp",
    alt: "Frontal pre, mid and post clear aligner treatment views at Smile Clinique in Malabar Hill, Mumbai",
    caption:
      "Frontal view: pre-treatment, mid-treatment and post-treatment. Clinical images shared with consent.",
  },
  orthoFrontal: {
    src: "/treatments/orthodontic-clear-aligners-frontal-pre-mid-post-malabar-hill-mumbai.webp",
    alt: "Frontal pre, mid and post clear aligner smile views at Smile Clinique, Malabar Hill, Mumbai",
    caption:
      "Frontal view: pre-treatment, mid-treatment and post-treatment aligner progress.",
  },
  orthoProfile: {
    src: "/treatments/orthodontic-clear-aligners-profile-pre-mid-post-malabar-hill-mumbai.webp",
    alt: "Profile pre, mid and post clear aligner smile views at Smile Clinique, Malabar Hill, Mumbai",
    caption:
      "Profile view: pre-treatment, mid-treatment and post-treatment aligner progress.",
  },
  blueprint: {
    src: "/treatments/digital-dental-treatment-planning-mumbai.webp",
    alt: "Digital diagnostic blueprint used for dental treatment planning in Mumbai",
    caption: "Records first: photographs, scans and bite analysis inform the plan.",
  },
  simulation: {
    src: "/treatments/dental-simulation-smile-design-malabar-hill-mumbai.webp",
    alt: "Virtual dental treatment simulation used at Smile Clinique Mumbai",
    caption: "A visual plan lets patients preview direction before treatment starts.",
  },
  integration: {
    src: "/treatments/dental-restoration-integration-mumbai.webp",
    alt: "Final clinical integration of dental restorations at Smile Clinique",
    caption: "The final fit is checked at the tooth, bite and tissue level.",
  },
  smileOutcome: {
    src: "/treatments/natural-smile-outcome-mumbai.webp",
    alt: "Natural-looking smile outcome after cosmetic dental treatment in Mumbai",
    caption: "The goal is a smile that fits the face, not a template.",
  },
  veneerOutcome: {
    src: "/treatments/smile-design-porcelain-veneers-malabar-hill-mumbai.webp",
    alt: "Minimally invasive porcelain veneer outcome at Smile Clinique Mumbai",
    caption: "Enamel-preserving design where the clinical situation allows.",
  },
  implantOutcome: {
    src: "/treatments/dental-implant-restoration-xray-malabar-hill-mumbai.webp",
    alt: "Radiograph of an implant-supported restoration at Smile Clinique in Malabar Hill, Mumbai",
    caption: "Radiograph of the implant-supported restoration in function.",
  },
  implantFixtureXray: {
    src: "/treatments/dental-implant-fixture-xray-malabar-hill-mumbai.webp",
    alt: "Radiograph confirming the dental implant fixture in the upper central incisor site at Smile Clinique, Mumbai",
    caption: "Radiograph after implant placement: the fixture is positioned in the planned site.",
  },
  xray: {
    src: "/treatments/dental-implant-preoperative-xray-malabar-hill-mumbai.webp",
    alt: "Pre-operative dental radiograph showing a missing upper central incisor at Smile Clinique, Malabar Hill, Mumbai",
    caption: "Pre-operative radiograph: missing upper central incisor and bone assessment before implant planning.",
  },
};

export const TREATMENTS: Treatment[] = [
  {
    slug: "full-mouth-rehabilitation-malabar-hill-mumbai",
    cardTitle: "Full Mouth Rehabilitation",
    navLabel: "Full Mouth Rehabilitation",
    name: "Full Mouth Rehabilitation",
    h1: {
      leading: "Full Mouth",
      accent: "Rehabilitation",
      trailing: "in Malabar Hill, Mumbai",
    },
    title:
      "Full Mouth Rehabilitation | Malabar Hill, Mumbai",
    description:
      "Full mouth rehabilitation in Malabar Hill, Mumbai. Digital planning, crowns, bridges and implants by Dr. Nidhi Mehta. Book a consultation.",
    keywords: [
      "full mouth rehabilitation mumbai",
      "full mouth reconstruction mumbai",
      "full mouth rehabilitation malabar hill",
      "full mouth dental implants mumbai",
      "bite reconstruction mumbai",
      "worn teeth treatment mumbai",
      "full mouth rehabilitation cost mumbai",
      "prosthodontist south mumbai",
      "full mouth rehab dentist mumbai",
      "dental reconstruction malabar hill",
    ],
    eyebrow: "Signature treatment · Malabar Hill, Mumbai",
    icon: "Sparkles",
    heroLead:
      "A plan-led rebuild of worn, broken or missing teeth — restoring comfortable function, a stable bite and a smile that looks like it belongs to you.",
    heroFacts: [
      "Coordinated multidisciplinary plan",
      "Digital bite and smile blueprint",
      "Staged for comfort and predictability",
    ],
    heroImage: IMG.fullMouthHero,
    ogImage: "/og/full-mouth-rehabilitation-malabar-hill-mumbai.jpg",
    heroAside: [
      { value: "Records first", label: "Photos, scans and bite analysis" },
      { value: "Test-drive", label: "Preview the plan before final treatment" },
      { value: "Long-term", label: "Maintenance built into the plan" },
    ],
    quickAnswer:
      "Full mouth rehabilitation is a customised programme that restores most or all of the teeth and the way they meet. It can combine gum treatment, root canals, crowns, onlays, veneers, bridges and implants in a carefully sequenced plan. Suitability is confirmed only after an in-person examination, photographs, scans and, where indicated, radiographs or a CBCT scan at Smile Clinique in Malabar Hill, Mumbai.",
    definition: {
      title: "A plan, not a single procedure",
      paragraphs: [
        "Full mouth rehabilitation — sometimes called full mouth reconstruction — is an umbrella term for rebuilding the function, comfort and appearance of most or all of the teeth. It is not one treatment that can be bought off a menu. It is a sequence of decisions about disease control, bite stability, materials, tooth preparation and maintenance.",
        "The clinical goal is a healthy foundation, a stable occlusion and restorations that can be cleaned. The aesthetic goal is a result that fits the face rather than a set of obviously artificial teeth. Those two goals are planned together, because a beautiful restoration that is difficult to maintain is not a successful restoration.",
        "At Smile Clinique, the plan is built from records rather than guesswork: clinical photographs, intraoral scans, a careful assessment of how the teeth meet, and radiographs or a CBCT scan when the clinical examination indicates them. If a simpler treatment can solve the problem, a full reconstruction is not automatically recommended.",
      ],
    },
    signsTitle: "When a full-mouth plan may be worth considering",
    signs: [
      {
        title: "Widespread wear or erosion",
        description:
          "Teeth look short, flat or chipped; enamel has worn away; hot or cold sensitivity is increasing.",
      },
      {
        title: "Multiple failing restorations",
        description:
          "Old fillings, crowns, bridges or root canals are leaking, fracturing or being replaced repeatedly.",
      },
      {
        title: "Missing teeth and bite collapse",
        description:
          "Gaps have allowed neighbouring teeth to drift, the bite has changed, or chewing has become one-sided.",
      },
      {
        title: "Jaw fatigue or an unstable bite",
        description:
          "Clenching or grinding, jaw tiredness or a sense that the teeth no longer fit together comfortably.",
      },
      {
        title: "A smile that has lost its frame",
        description:
          "Dark spaces, uneven edges, exposed margins or a collapsed lower face affect confidence and function.",
      },
      {
        title: "Complex needs in one plan",
        description:
          "Gum health, bite, missing teeth and aesthetics need to be coordinated rather than treated as isolated problems.",
      },
    ],
    candidates: [
      "Adults with generalised wear, erosion or multiple failing teeth",
      "People missing several teeth who want a fixed, planned solution",
      "Patients whose bite has changed after years of grinding or tooth loss",
      "Anyone who has been told they need work across several teeth and wants a clear sequence",
    ],
    notFor: [
      "Someone looking for a single cosmetic fix with healthy, stable teeth",
      "Active gum disease or uncontrolled decay that has not yet been treated",
      "A patient who cannot commit to staged visits and long-term maintenance",
    ],
    optionsTitle: "The right reconstruction looks different for every mouth",
    optionsIntro:
      "Full mouth rehabilitation is a category, not a package. The options below describe common routes; the final mix is chosen after diagnosis.",
    options: [
      {
        name: "Crown and bridge rehabilitation",
        bestFor: "Heavily restored teeth with enough healthy tooth structure",
        summary:
          "A planned rebuild of the bite using crowns and bridges on natural teeth, often after root canal treatment or gum care.",
      },
      {
        name: "Minimally invasive onlays and veneers",
        bestFor: "Worn teeth where enamel can be preserved",
        summary:
          "Bonded ceramic or composite restorations that restore shape and bite with less removal of healthy tooth than full crowns.",
      },
      {
        name: "Implant-assisted rehabilitation",
        bestFor: "Missing teeth or a lack of posterior support",
        summary:
          "Implants replace missing roots so bridges or crowns can be supported without cutting down healthy neighbouring teeth.",
      },
      {
        name: "Full-arch implant rehabilitation",
        bestFor: "Most or all teeth missing, or teeth that cannot be saved",
        summary:
          "A fixed or removable prosthesis supported by four or more implants per arch, planned around bone volume and bite forces.",
      },
    ],
    stepsTitle: "The Smile Clinique protocol",
    stepsIntro:
      "A full-mouth case is sequenced so that disease is controlled before aesthetics, and the bite is tested before it is made permanent.",
    steps: [
      {
        number: "01",
        title: "Diagnosis and records",
        duration: "Consultation · 60–90 minutes",
        description:
          "We examine the teeth, gums, bite and jaw. Photographs, intraoral scans and appropriate imaging are used to understand why the teeth have failed, not just which teeth need work.",
      },
      {
        number: "02",
        title: "Blueprint and test-drive",
        description:
          "A digital plan and, where suitable, a provisional or trial restoration let you preview the proposed changes. Bite, speech and aesthetics are tested before irreversible treatment.",
      },
      {
        number: "03",
        title: "Disease control",
        description:
          "Active decay, gum inflammation, infected teeth and hopeless teeth are addressed first. Bone grafting or extractions are planned early if implants will be needed.",
      },
      {
        number: "04",
        title: "Structural rebuild",
        description:
          "Implants, root canals, crowns, onlays, veneers and bridges are completed in a planned order. Materials are selected for the load, the aesthetics and the maintenance needs of each tooth.",
      },
      {
        number: "05",
        title: "Review and maintenance",
        description:
          "The final fit, bite, cleaning access and gum response are reviewed. A maintenance schedule and night guard, if indicated, help protect the investment.",
      },
    ],
    evidence: {
      intro:
        "Full mouth rehabilitation is a planning philosophy rather than a single procedure, so the evidence comes from the treatments used within it: ceramic restorations, implants, occlusal planning and minimally invasive materials. The consistent theme is that diagnosis, material choice and maintenance matter more than a brand name.",
      stats: [
        {
          value: "95.5%",
          label: "10-year survival of porcelain laminate veneers",
          detail:
            "A 2021 systematic review of 25 studies and about 6,500 veneers reported an estimated 10-year cumulative survival of 95.5% when fracture, debonding, caries and endodontic failure were counted as failures.",
        },
        {
          value: "≈95%",
          label: "10-year implant survival",
          detail:
            "A 2026 systematic review and meta-analysis of 34 studies, 7,522 patients and 20,445 implants reported survival of approximately 94.9%–95.2% at 10–25 years.",
        },
        {
          value: "94.6%",
          label: "Mean cumulative implant survival beyond 10 years",
          detail:
            "An earlier systematic review of 23 studies with a mean follow-up of 13.4 years reported a cumulative mean survival of 94.6% and mean marginal bone loss of 1.3 mm.",
        },
        {
          value: "No single recipe",
          label: "Occlusal philosophy must be individualised",
          detail:
            "A 2021 systematic review of full-mouth rehabilitation studies concluded that no occlusal philosophy is universally applicable; the plan should follow the diagnosis and the patient's needs.",
        },
      ],
      caveat:
        "Published survival figures are averages from selected study populations. They are not a promise for an individual mouth. Bone quality, gum health, smoking, diabetes, grinding, material choice, the operator's technique and long-term maintenance all change the real-world outcome.",
      sources: [
        {
          label: "Fan et al., Clinical Oral Investigations (2025)",
          href: "https://doi.org/10.1007/s00784-025-06181-z",
          note: "Systematic review and meta-analysis of minimally invasive full-mouth rehabilitation for moderate to severe tooth wear.",
        },
        {
          label: "Moraschini et al., Periodontology 2000 (2026)",
          href: "https://doi.org/10.1111/prd.70098",
          note: "Long-term dental implant survival, success and biological outcomes beyond 10 years.",
        },
        {
          label: "Moraschini et al., International Journal of Oral and Maxillofacial Surgery (2014)",
          href: "https://doi.org/10.1016/j.ijom.2014.10.023",
          note: "Systematic review of implant survival in studies with at least 10 years of follow-up.",
        },
        {
          label: "Thimmappa et al., Journal of Indian Prosthodontic Society (2021)",
          href: "https://doi.org/10.4103/jips.jips_397_19",
          note: "Systematic review of philosophies used in full mouth rehabilitation.",
        },
      ],
    },
    benefits: [
      {
        title: "One coherent plan",
        description:
          "Gum health, bite, missing teeth and aesthetics are sequenced together instead of being solved as disconnected problems.",
      },
      {
        title: "A bite that feels predictable",
        description:
          "The plan is tested with provisionals or a trial design before the final restorations are made, reducing surprises.",
      },
      {
        title: "Materials matched to the mouth",
        description:
          "Ceramic, zirconia, composite or implant-supported options are selected for load, appearance and cleanability — not one material for every tooth.",
      },
      {
        title: "A maintainable result",
        description:
          "Margins, contours and cleaning access are designed so that hygiene at home and professional reviews can protect the work.",
      },
    ],
    technology: [
      {
        title: "Intraoral scanning",
        description:
          "A true-colour digital replica of the teeth replaces putty impressions for most restorative and aligner workflows.",
      },
      {
        title: "CBCT when indicated",
        description:
          "Three-dimensional imaging helps assess bone, roots and implant sites when the clinical examination calls for it.",
      },
      {
        title: "Digital smile and bite design",
        description:
          "Photographs and scans are used to plan proportions and occlusal relationships before treatment begins.",
      },
      {
        title: "Provisional restorations",
        description:
          "A trial phase lets you test speech, comfort and appearance while the laboratory prepares the final work.",
      },
    ],
    gallery: [
      IMG.blueprint,
      IMG.simulation,
      IMG.integration,
    ],
    galleryTitle: "From diagnostic records to final integration",
    galleryNote:
      "Representative clinical imagery from the planning and restorative workflow. Individual results vary.",
    aftercare: [
      {
        title: "The first two weeks",
        items: [
          "Expect mild sensitivity or a feeling of fullness while the bite settles.",
          "Follow the written instructions for eating, cleaning and any provisional restorations.",
          "Report persistent high spots, pain or a loose temporary restoration promptly.",
        ],
      },
      {
        title: "Daily home care",
        items: [
          "Clean around every margin, bridge and implant with the recommended brushes and interdental aids.",
          "Use a soft brush and non-abrasive toothpaste; avoid biting nails, pens or ice.",
          "If you grind, wear the night guard exactly as instructed.",
        ],
      },
      {
        title: "Professional reviews",
        items: [
          "Keep scheduled hygiene visits so small problems are found before they become failures.",
          "Have the bite checked if a restoration feels high or if you notice new jaw fatigue.",
          "Tell your dentist about new medications, diabetes control changes or smoking.",
        ],
      },
      {
        title: "Protecting the investment",
        items: [
          "Do not use the teeth as tools.",
          "Limit frequent acidic drinks and sugar exposure.",
          "Seek help early for a chip, looseness or gum bleeding rather than waiting for pain.",
        ],
      },
    ],
    risks: [
      "Sensitivity or temporary discomfort after preparation and placement.",
      "A temporary change in speech or bite while provisionals settle.",
      "Chip, fracture or debonding of ceramic or composite restorations.",
      "Implant failure, peri-implant inflammation or bone loss, particularly with smoking or poor hygiene.",
      "The need for further treatment if decay, gum disease or grinding continues.",
      "Time and cost can be greater than initially hoped if extractions, grafting or specialist care are needed.",
    ],
    costTitle: "What changes the cost of full mouth rehabilitation in Mumbai",
    costIntro:
      "There is no honest single price for full mouth rehabilitation because the number of teeth, the materials, the foundation and the sequence vary enormously. A written plan after examination is the only reliable quote.",
    costFactors: [
      "How many teeth need restorations and how many are missing",
      "Whether implants, bone grafting or sinus lifting are required",
      "The material chosen: lithium disilicate, zirconia, composite or metal-ceramic",
      "Gum treatment, root canal treatment and extractions",
      "Laboratory work, provisional restorations and review visits",
      "Case complexity and the number of treatment stages",
    ],
    costNote:
      "At Smile Clinique, you receive an itemised plan before treatment. Ask what is included, what is excluded, and what the maintenance costs are likely to be. A low headline price that excludes imaging, grafting, provisionals or the final prosthesis is not a useful comparison.",
    faqs: [
      {
        question: "What is the difference between full mouth rehabilitation and full mouth reconstruction?",
        answer:
          "The terms are often used interchangeably. Both describe a coordinated plan to restore function, comfort and appearance across most or all of the teeth. Some clinicians use reconstruction for cases with more structural or implant work, but the important issue is the diagnosis and sequence, not the label.",
      },
      {
        question: "Do I always need implants for full mouth rehabilitation?",
        answer:
          "No. If the natural teeth can be saved and the bite can be stabilised with crowns, onlays, veneers or bridges, implants may not be needed. Implants are considered when teeth are missing or cannot be restored predictably.",
      },
      {
        question: "How long does full mouth rehabilitation take?",
        answer:
          "It depends on healing, gum condition, laboratory work and the number of stages. Some crown-based cases can be completed over several months; implant cases may need longer for healing and bone grafting. A realistic timeline is given after diagnosis, not as a sales promise.",
      },
      {
        question: "Is full mouth rehabilitation painful?",
        answer:
          "Most treatment is carried out with local anaesthesia and comfort-focused techniques. Some visits are longer than a routine filling, and temporary sensitivity or soreness can occur. Anxiety is discussed openly so that the pace and sedation options can be planned.",
      },
      {
        question: "Will my new teeth look natural?",
        answer:
          "That is the aim. Digital design, provisional restorations and careful shade and surface-characterisation work help avoid a monochrome, artificial result. The final appearance also depends on how much healthy tooth structure remains and how the gums heal.",
      },
      {
        question: "Can I see the plan before treatment?",
        answer:
          "In many cases, yes. Photographs, scans and a digital or provisional trial can help you understand the proposed direction. A preview is a planning aid, not a guarantee of the final result.",
      },
      {
        question: "How long will the restorations last?",
        answer:
          "There is no single lifespan. Published studies report high survival for ceramics and implants, but individual results depend on material, bite forces, hygiene, grinding and maintenance. The plan should include a realistic maintenance schedule.",
      },
      {
        question: "Can I have full mouth rehabilitation if I have gum disease?",
        answer:
          "Active gum disease needs to be controlled first. Building restorations on inflamed or unstable foundations increases the risk of failure. Some patients need periodontal treatment and a review period before reconstruction begins.",
      },
      {
        question: "Do you treat patients from outside Malabar Hill?",
        answer: `Yes. Smile Clinique is in Malabar Hill and serves patients from Walkeshwar, Cumballa Hill, Kemps Corner, Peddar Road, Breach Candy, Tardeo, Colaba, Worli and wider Mumbai. Call ${CLINIC.phoneDisplay} to discuss the first appointment.`,
      },
      {
        question: "How do I start?",
        answer:
          "Book a consultation for a clinical examination and records. You will leave with a clearer diagnosis, a proposed sequence and an itemised plan — or with a recommendation for a simpler treatment if full reconstruction is not justified.",
      },
    ],
    related: [
      "dental-implants-malabar-hill-mumbai",
      "smile-design-malabar-hill-mumbai",
      "clear-aligners-orthodontics-malabar-hill-mumbai",
    ],
    ctaHeadline: "Rebuild function. Restore confidence.",
    ctaBody:
      "Start with a diagnosis, not a package. Book a full-mouth rehabilitation consultation at Smile Clinique in Malabar Hill, Mumbai.",
    updated: "2026-10-28",
    readingTime: "9 min read",
    procedureType: "Restorative and prosthetic rehabilitation",
    medicalSpecialty: "Prosthodontics",
  },
  {
    slug: "smile-design-malabar-hill-mumbai",
    cardTitle: "Smile Design",
    navLabel: "Smile Design & Veneers",
    name: "Smile Design & Porcelain Veneers",
    h1: {
      leading: "Smile Design",
      accent: "& Porcelain Veneers",
      trailing: "in Malabar Hill, Mumbai",
    },
    title:
      "Smile Design & Porcelain Veneers | Malabar Hill, Mumbai",
    description:
      "Digital smile design and porcelain veneers in Malabar Hill, Mumbai. Minimally invasive, evidence-led aesthetic dentistry by Dr. Nidhi Mehta.",
    keywords: [
      "smile design mumbai",
      "porcelain veneers mumbai",
      "dental veneers malabar hill",
      "cosmetic dentist mumbai",
      "smile makeover mumbai",
      "digital smile design mumbai",
      "minimal preparation veneers mumbai",
      "teeth whitening mumbai",
      "composite bonding mumbai",
      "cosmetic dentistry south mumbai",
    ],
    eyebrow: "Aesthetic dentistry · Malabar Hill, Mumbai",
    icon: "Gem",
    heroLead:
      "A considered, minimally invasive approach to changing the shape, shade and symmetry of the smile — designed around your face, not a template.",
    heroFacts: [
      "Digital smile design",
      "Enamel-preserving where possible",
      "Trial smile before final ceramics",
    ],
    heroImage: IMG.smileHero,
    ogImage: "/og/smile-design-malabar-hill-mumbai.jpg",
    heroAside: [
      { value: "Face-led", label: "Proportions planned around you" },
      { value: "Material-aware", label: "Ceramic chosen for the case" },
      { value: "Test first", label: "Preview before irreversible work" },
    ],
    quickAnswer:
      "Smile design is a planning process that coordinates the shape, shade, proportion and alignment of the front teeth with the face. Porcelain veneers are thin ceramic restorations bonded to the front of selected teeth. They can be highly aesthetic and conservative when the enamel and bite are suitable, but they are not reversible and are not the right choice for every smile. A consultation, photographs and a digital or trial design are used to decide.",
    definition: {
      title: "Aesthetic dentistry with a diagnosis underneath",
      paragraphs: [
        "Smile design is not a single product. It is the process of deciding what should change — and what should not — before any tooth is prepared. The shape of the teeth, the smile line, the gums, the lips and the way the teeth meet all influence the result.",
        "Porcelain veneers are thin ceramic shells bonded to the front surface of teeth. Modern adhesive dentistry can preserve more enamel than older full-crown techniques, but veneers still involve removing a small amount of tooth structure and are not fully reversible. Composite bonding is an alternative for some cases; aligners may be more appropriate when the main issue is position rather than shape.",
        "At Smile Clinique, the first conversation is about the goal, the limits and the trade-offs. A beautiful result that ignores the bite, the gums or the long-term maintenance plan is not a good result. The plan should be able to explain why each tooth is being changed.",
      ],
    },
    signsTitle: "What smile design can address",
    signs: [
      {
        title: "Stubborn discolouration",
        description:
          "Intrinsic staining or old restorations that do not respond well to whitening alone.",
      },
      {
        title: "Chipped or worn edges",
        description:
          "Small fractures, flat incisal edges or uneven length that affect the smile line.",
      },
      {
        title: "Gaps and asymmetry",
        description:
          "Spacing, a rotated tooth or a smile that looks off-centre — sometimes best solved with aligners first.",
      },
      {
        title: "Old bonding or crowns",
        description:
          "Restorations that have stained, lost their shape or no longer match the neighbouring teeth.",
      },
      {
        title: "Proportions that feel off",
        description:
          "Short, square or disproportionately wide teeth that dominate the face or the smile.",
      },
      {
        title: "A gummy or uneven smile line",
        description:
          "Gum contour and tooth display are assessed together rather than treated in isolation.",
      },
    ],
    candidates: [
      "Adults with healthy teeth and gums who want a planned aesthetic change",
      "Patients with chipped, worn or discoloured front teeth",
      "People who want a preview before committing to ceramic work",
      "Cases where alignment, whitening and bonding have been considered first",
    ],
    notFor: [
      "Active gum disease, untreated decay or a unstable bite",
      "Severe crowding that would be better treated with orthodontics",
      "Anyone expecting a zero-preparation, fully reversible result in every case",
    ],
    optionsTitle: "Not every smile needs veneers",
    optionsIntro:
      "The least invasive option that reliably meets the goal is usually the best option. These are the main routes we consider.",
    options: [
      {
        name: "Porcelain veneers",
        bestFor: "Shape, shade and proportion changes on selected front teeth",
        summary:
          "Thin ceramic bonded to the front of the tooth. Excellent for colour stability and surface detail when enamel bonding is favourable.",
      },
      {
        name: "Composite bonding",
        bestFor: "Small chips, edges and conservative changes",
        summary:
          "Direct resin can be sculpted and polished in one visit, with minimal or no drilling. It is more stain-prone and may need periodic refresh.",
      },
      {
        name: "Professional whitening",
        bestFor: "Healthy teeth with extrinsic or mild intrinsic staining",
        summary:
          "A supervised whitening plan can change shade without removing tooth structure. Existing restorations will not whiten.",
      },
      {
        name: "Aligner-first smile design",
        bestFor: "Crowding, spacing or rotation before cosmetic work",
        summary:
          "Moving teeth into a better position can reduce how much drilling and ceramic are needed for the final result.",
      },
    ],
    stepsTitle: "From consultation to final bond",
    stepsIntro:
      "The best aesthetic work is planned backwards from the face, then tested before the final ceramic is made.",
    steps: [
      {
        number: "01",
        title: "Consultation and smile analysis",
        description:
          "We listen to what you want changed, examine the teeth and gums, review the bite and take photographs. We also discuss what should stay the same.",
      },
      {
        number: "02",
        title: "Digital design and mock-up",
        description:
          "A digital plan or physical mock-up helps you preview shape and proportion. It is a communication tool, not a guarantee, and it can be adjusted.",
      },
      {
        number: "03",
        title: "Preparation, only if needed",
        description:
          "Where veneers are chosen, the amount of enamel removal is kept as conservative as the case allows. Some cases need more preparation than others.",
      },
      {
        number: "04",
        title: "Provisional and laboratory phase",
        description:
          "Provisionals let you test speech, comfort and appearance. Shade, translucency and surface texture are communicated to the laboratory.",
      },
      {
        number: "05",
        title: "Bonding and review",
        description:
          "The final veneers are tried in, checked for fit and bite, then bonded. You receive cleaning and maintenance instructions and a review appointment.",
      },
    ],
    evidence: {
      intro:
        "Ceramic veneers are among the best-studied aesthetic restorations. The evidence is encouraging, but it also shows why case selection and bonding substrate matter: veneers bonded to enamel perform better than those bonded to exposed dentine.",
      stats: [
        {
          value: "95.5%",
          label: "10-year veneer survival",
          detail:
            "A 2021 systematic review of 25 studies and about 6,500 porcelain laminate veneers estimated 95.5% cumulative survival at 10 years when fracture, debonding, caries and endodontic failure were counted as failures.",
        },
        {
          value: "99%",
          label: "Survival when bonded to enamel",
          detail:
            "A 2024 meta-analysis found almost perfect survival for ceramic veneers bonded to enamel, with lower survival and success when bonding involved composite or severely exposed dentine.",
        },
        {
          value: "96.8%",
          label: "10-year survival for lithium disilicate",
          detail:
            "A 2024 systematic review and meta-analysis reported a pooled 10.4-year survival of 96.81% for lithium-disilicate laminate veneers, with lower long-term complication rates than feldspathic or leucite-reinforced ceramics.",
        },
        {
          value: "Material matters",
          label: "Not all ceramics behave the same",
          detail:
            "The same 2024 review found differences in technical, aesthetic and biological complication rates between ceramic families, supporting case-specific material selection rather than a single default.",
        },
      ],
      caveat:
        "Survival is not the same as success. A veneer can remain on the tooth while needing repair, replacement or gum treatment. Bonding to enamel, a stable bite, good hygiene and a night guard where indicated all influence how long the result lasts.",
      sources: [
        {
          label: "Alenezi et al., Journal of Clinical Medicine (2021)",
          href: "https://doi.org/10.3390/jcm10051074",
          note: "Systematic review of long-term survival and complications of porcelain laminate veneers.",
        },
        {
          label: "Klein et al., Clinical Oral Investigations (2024)",
          href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12076113/",
          note: "Systematic review and meta-analysis of ceramic laminate veneers by material.",
        },
        {
          label: "Alqutaibi et al., Journal of Prosthetic Dentistry (2024)",
          href: "https://www.thejpd.org/article/S0022-3913(24)00215-4/abstract",
          note: "Meta-analysis of veneer survival and success by bonding substrate.",
        },
        {
          label: "Layton et al., Journal of Prosthetic Dentistry (2012)",
          href: "https://pubmed.ncbi.nlm.nih.gov/23101039/",
          note: "Systematic review and meta-analysis of feldspathic porcelain veneer survival.",
        },
      ],
    },
    benefits: [
      {
        title: "A plan for the whole smile",
        description:
          "Shape, shade, gum line and bite are considered together rather than changing one tooth at a time.",
      },
      {
        title: "Conservative where possible",
        description:
          "Alignment and whitening are considered before drilling; veneer preparation is kept as minimal as the case allows.",
      },
      {
        title: "Preview before commitment",
        description:
          "Digital design and mock-ups help you understand the direction before irreversible treatment begins.",
      },
      {
        title: "Colour stability",
        description:
          "Ceramic resists everyday staining better than direct composite, which can be useful for long-term aesthetic predictability.",
      },
    ],
    technology: [
      {
        title: "Digital photography",
        description:
          "Standardised photographs make smile analysis and shade communication more precise.",
      },
      {
        title: "Intraoral scanning",
        description:
          "Digital impressions improve comfort and allow the laboratory to work from an accurate model.",
      },
      {
        title: "Trial smile and provisionals",
        description:
          "A temporary version lets you test the proposed change in your own mouth before final bonding.",
      },
      {
        title: "Shade and texture matching",
        description:
          "Translucency, surface texture and characterisation are planned with the laboratory, not chosen from a single shade tab.",
      },
    ],
    gallery: [IMG.blueprint, IMG.veneerOutcome, IMG.smileOutcome],
    galleryTitle: "Design, preview, refine",
    galleryNote:
      "Representative clinical imagery from the smile design and ceramic workflow. Individual results vary.",
    aftercare: [
      {
        title: "The first week",
        items: [
          "Mild sensitivity to cold is common and usually settles.",
          "Avoid biting hard foods with the front teeth while you adjust.",
          "Report any bite high spot or persistent discomfort.",
        ],
      },
      {
        title: "Daily care",
        items: [
          "Brush gently with a soft brush and non-abrasive toothpaste.",
          "Clean between the teeth; veneer margins need the same attention as natural enamel.",
          "Limit frequent acidic drinks and avoid chewing ice, pens or nails.",
        ],
      },
      {
        title: "Protecting ceramics",
        items: [
          "If you grind or clench, a night guard is strongly considered.",
          "Wear a mouth guard for contact sport.",
          "Do not use the front teeth as tools.",
        ],
      },
      {
        title: "Reviews",
        items: [
          "Keep hygiene visits so margins, gums and bite can be checked.",
          "Have chips or looseness assessed early.",
          "Professional whitening may be needed for untreated teeth over time; veneers do not change shade.",
        ],
      },
    ],
    risks: [
      "Sensitivity after preparation or bonding.",
      "Chipping, fracture or debonding of ceramic, especially with grinding or biting hard objects.",
      "Irreversible removal of some enamel; veneers are not a reversible treatment.",
      "Shade mismatch or a result that does not meet expectations if the plan is rushed.",
      "Gum inflammation or recession around margins if hygiene is poor.",
      "The need to replace or repair a veneer at some point; no restoration lasts forever.",
    ],
    costTitle: "What changes the cost of smile design in Mumbai",
    costIntro:
      "The price of a smile makeover is driven by how many teeth are involved, the material, the laboratory work and whether alignment, gum treatment or bite correction is needed first.",
    costFactors: [
      "Number of veneers, crowns or bonded teeth",
      "Ceramic material and laboratory complexity",
      "Whether aligners or whitening are needed first",
      "Gum contouring or periodontal treatment",
      "Trial smile, provisionals and review visits",
      "Replacement of old crowns, fillings or bonding",
    ],
    costNote:
      "A quote should state the number of units, the material, the laboratory, the provisional phase and what happens if a veneer needs adjustment. Comparing a per-tooth price without knowing the material and inclusions can be misleading.",
    faqs: [
      {
        question: "Are porcelain veneers permanent?",
        answer:
          "No restoration is permanent. Veneers are long-lasting but require maintenance, and the preparation of enamel is irreversible. Published studies report high 10-year survival, but individual results depend on the bite, hygiene, grinding and material.",
      },
      {
        question: "Do veneers always require drilling?",
        answer:
          "Not always, but many cases require some enamel removal to create space for the ceramic. The amount depends on the existing tooth position, thickness and the planned change. A no-preparation claim should be treated cautiously unless your own case has been assessed.",
      },
      {
        question: "Veneers or composite bonding?",
        answer:
          "Composite is usually more conservative and can be done in one visit, but it can stain and may need polishing or replacement sooner. Ceramic offers better colour stability and surface detail but usually costs more and is less reversible. The right choice depends on the tooth and the goal.",
      },
      {
        question: "Can veneers fix crooked teeth?",
        answer:
          "Veneers can change the appearance of mildly rotated teeth, but they do not correct the underlying position. Severe crowding may be better treated with aligners or braces first. Masking position with ceramic can require more tooth removal and may not be in the tooth's long-term interest.",
      },
      {
        question: "Will my veneers look too white?",
        answer:
          "That is a planning decision. Shade is selected with your age, skin tone, eye colour and the neighbouring teeth in mind. A natural result often has subtle variation rather than one uniform white.",
      },
      {
        question: "How long do veneers last?",
        answer:
          "Systematic reviews report roughly 95% survival at 10 years for porcelain laminate veneers, with variation by material and bonding substrate. Many veneers last longer, but chips, debonding and gum changes can require repair.",
      },
      {
        question: "Can I whiten my teeth instead?",
        answer:
          "If the main concern is shade and the teeth are healthy, whitening may be enough. Whitening does not change the shape of teeth and does not whiten existing crowns or veneers. A consultation can compare the options honestly.",
      },
      {
        question: "Do you use digital smile design?",
        answer:
          "Yes. Photographs and digital planning are used to discuss proportions and possible changes. A digital preview is a communication tool; it is not a guarantee of the final result.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "Most visits are comfortable with local anaesthesia. Some patients experience temporary sensitivity after preparation or bonding. Anxiety and comfort needs are discussed before treatment.",
      },
      {
        question: "Where is Smile Clinique?",
        answer: `Smile Clinique is at ${CLINIC.addressLine}. Patients travel from Malabar Hill, Walkeshwar, Cumballa Hill, Peddar Road, Kemps Corner, Breach Candy, Tardeo, Colaba and wider Mumbai. Call ${CLINIC.phoneDisplay} to book.`,
      },
    ],
    related: [
      "full-mouth-rehabilitation-malabar-hill-mumbai",
      "clear-aligners-orthodontics-malabar-hill-mumbai",
      "dental-implants-malabar-hill-mumbai",
    ],
    ctaHeadline: "Design the smile. Keep the character.",
    ctaBody:
      "Book a smile design consultation at Smile Clinique in Malabar Hill, Mumbai, and start with a diagnosis rather than a template.",
    updated: "2026-10-28",
    readingTime: "8 min read",
    procedureType: "Cosmetic dental treatment",
    medicalSpecialty: "CosmeticDentistry",
  },
  {
    slug: "dental-implants-malabar-hill-mumbai",
    cardTitle: "Dental Implants",
    navLabel: "Dental Implants",
    name: "Dental Implants",
    h1: {
      leading: "Dental",
      accent: "Implants",
      trailing: "in Malabar Hill, Mumbai",
    },
    title:
      "Dental Implants | Malabar Hill, Mumbai",
    description:
      "Dental implants in Malabar Hill, Mumbai. Guided, evidence-led treatment for single teeth, bridges and full arches by Dr. Nidhi Mehta.",
    keywords: [
      "dental implants mumbai",
      "dental implant malabar hill",
      "single tooth implant mumbai",
      "full mouth implants mumbai",
      "all on 4 implants mumbai",
      "implant dentist south mumbai",
      "tooth implant cost mumbai",
      "implant supported denture mumbai",
      "guided implant surgery mumbai",
      "bone grafting dental implant mumbai",
    ],
    eyebrow: "Implant dentistry · Malabar Hill, Mumbai",
    icon: "Activity",
    heroLead:
      "A long-term replacement for missing teeth, planned around bone, bite, gums and the way you actually use your mouth.",
    heroFacts: [
      "CBCT-led assessment",
      "Guided placement where suitable",
      "Single tooth to full arch",
    ],
    heroImage: IMG.implantsHero,
    ogImage: "/og/dental-implants-malabar-hill-mumbai.jpg",
    heroAside: [
      { value: "≈95%", label: "Published 10-year implant survival" },
      { value: "Bone first", label: "Grafting planned when needed" },
      { value: "Maintenance", label: "Reviews protect the investment" },
    ],
    quickAnswer:
      "A dental implant is a titanium root replacement placed in the jaw to support a crown, bridge or full-arch prosthesis. It can replace one tooth without cutting down healthy neighbours, or support a larger reconstruction when several teeth are missing. Implants are not suitable for everyone: bone volume, gum health, smoking, diabetes control, bite forces and maintenance all matter. Planning begins with a clinical examination and, where indicated, a CBCT scan.",
    definition: {
      title: "A replacement root, not just a replacement tooth",
      paragraphs: [
        "A dental implant is a small titanium fixture that is placed into the jawbone and allowed to integrate with the bone. Once healed, it can support a single crown, a bridge or a larger prosthesis. The visible tooth is the crown; the implant is the foundation beneath the gum.",
        "The main advantage is that an implant can replace a missing tooth without preparing the adjacent healthy teeth, as a conventional bridge would. Implants can also help support a denture or a full-arch prosthesis when several teeth are missing. The main trade-off is that implant treatment is a surgical procedure with healing time, and it requires a commitment to maintenance.",
        "At Smile Clinique, implant planning is prosthetically driven: the final tooth position and bite are considered before the implant position. A CBCT scan is used when indicated to assess bone volume, nerves, sinuses and the relationship between the planned implant and the final crown.",
      ],
    },
    signsTitle: "When an implant may be considered",
    signs: [
      {
        title: "One missing tooth",
        description:
          "You want to replace a single tooth without cutting down the two healthy teeth next to it.",
      },
      {
        title: "Several missing teeth",
        description:
          "An implant-supported bridge can restore a segment without relying on natural abutments.",
      },
      {
        title: "A loose or uncomfortable denture",
        description:
          "Implants can stabilise a removable denture or support a fixed full-arch prosthesis.",
      },
      {
        title: "A tooth that cannot be saved",
        description:
          "After extraction, an implant may be planned once the site has healed and infection is controlled.",
      },
      {
        title: "Bite changes after tooth loss",
        description:
          "Drifting teeth or a collapsed bite may be stabilised as part of a broader reconstruction.",
      },
      {
        title: "A need for fixed function",
        description:
          "You prefer a fixed solution and are prepared for the surgical and maintenance commitment.",
      },
    ],
    candidates: [
      "Adults with missing teeth and adequate bone, or bone that can be grafted",
      "People with healthy gums or gum disease that has been treated and stabilised",
      "Patients who can attend follow-up visits and maintain hygiene",
      "Cases where the final crown or prosthesis can be planned before surgery",
    ],
    notFor: [
      "Uncontrolled diabetes, active infection or untreated gum disease",
      "Heavy smoking that cannot be reduced around surgery and healing",
      "A bite or parafunction problem that has not been assessed",
    ],
    optionsTitle: "One implant, a bridge, or a full arch",
    optionsIntro:
      "The number and position of implants are chosen from the prosthetic goal and the available bone — not from a fixed package.",
    options: [
      {
        name: "Single tooth implant",
        bestFor: "One missing tooth with healthy neighbours",
        summary:
          "A single implant supports one crown, preserving the adjacent teeth. The most conservative option when the site is suitable.",
      },
      {
        name: "Implant-supported bridge",
        bestFor: "Several adjacent missing teeth",
        summary:
          "Two or more implants support a bridge, avoiding a long-span conventional bridge on natural teeth.",
      },
      {
        name: "Implant-stabilised denture",
        bestFor: "A removable denture that needs more stability",
        summary:
          "A smaller number of implants can improve retention and comfort without committing to a full fixed arch.",
      },
      {
        name: "Full-arch implant rehabilitation",
        bestFor: "Most or all teeth missing in one or both arches",
        summary:
          "A fixed or removable prosthesis supported by four or more implants, planned around bone volume and bite forces.",
      },
    ],
    stepsTitle: "The implant pathway",
    stepsIntro:
      "Good implant dentistry is mostly planning. The surgery is the short part; the diagnosis and the final restoration determine the outcome.",
    steps: [
      {
        number: "01",
        title: "Examination and imaging",
        description:
          "We assess the missing tooth space, gums, bite, bone and medical history. A CBCT scan is used when indicated to measure bone and identify anatomy.",
      },
      {
        number: "02",
        title: "Prosthetic plan",
        description:
          "The final crown or prosthesis is designed first, so the implant is placed where the tooth needs to be — not simply where the bone looks easiest.",
      },
      {
        number: "03",
        title: "Implant placement",
        description:
          "The implant is placed under local anaesthesia, with a guided or freehand approach depending on the case. Bone grafting may be performed at the same time or as a separate stage.",
      },
      {
        number: "04",
        title: "Healing and integration",
        description:
          "Osseointegration usually takes several weeks to months. Temporary arrangements are planned so you are not left without a functional appearance.",
      },
      {
        number: "05",
        title: "Abutment, crown and maintenance",
        description:
          "The final restoration is fitted and the bite is checked. Regular reviews and hygiene visits protect the implant and the surrounding gum.",
      },
    ],
    evidence: {
      intro:
        "Dental implants are one of the most extensively studied dental treatments. The evidence supports high long-term retention, but it also shows an important distinction: an implant can survive without being biologically healthy. Success depends on the gum, bone, bite and maintenance around it.",
      stats: [
        {
          value: "≈95%",
          label: "10-year implant survival",
          detail:
            "A 2026 meta-analysis of 34 studies, 7,522 patients and 20,445 implants reported approximately 95% survival after 10–25 years, with pooled failure around 4.8%–5.1%.",
        },
        {
          value: "95.4% / 92.8%",
          label: "5- and 10-year survival for implant-supported fixed prostheses",
          detail:
            "The ITI consensus database reports cumulative implant survival of 95.4% at 5 years and 92.8% at 10 years for implants supporting fixed partial dentures.",
        },
        {
          value: "≈85%",
          label: "Success is lower than survival",
          detail:
            "The 2026 review found average success of 85.1% across 14 studies, but definitions varied substantially. Survival alone does not prove biological health or absence of complications.",
        },
        {
          value: "10.8%",
          label: "Implant-level peri-implantitis in long-term data",
          detail:
            "The same review reported a descriptive mean of 10.8% for implant-level peri-implantitis, with a wide range across studies — a reminder that maintenance and monitoring matter.",
        },
      ],
      caveat:
        "Implant survival figures are population averages, not personal guarantees. Smoking, uncontrolled diabetes, gum disease, bone quantity, grinding, the prosthetic plan, surgical technique and follow-up all affect the result. A CBCT and clinical examination are needed before anyone can tell you whether an implant is the right option.",
      sources: [
        {
          label: "Moraschini et al., Periodontology 2000 (2026)",
          href: "https://doi.org/10.1111/prd.70098",
          note: "Systematic review and meta-analysis of implant survival, success and biological outcomes beyond 10 years.",
        },
        {
          label: "ITI Consensus: Implant Survival and Complications",
          href: "https://academy.iti.org/academy/consensus-database/consensus-statement/-/consensus/implant-survival-and-complications/1321",
          note: "International Team for Implantology consensus statements on implant and prosthesis survival.",
        },
        {
          label: "Howe et al., Journal of Dentistry (2019)",
          href: "https://doi.org/10.1016/j.jdent.2019.03.008",
          note: "Systematic review and sensitivity meta-analysis of 10-year dental implant survival.",
        },
        {
          label: "Moraschini et al., International Journal of Oral and Maxillofacial Surgery (2014)",
          href: "https://doi.org/10.1016/j.ijom.2014.10.023",
          note: "Long-term implant survival and marginal bone loss in studies with at least 10 years of follow-up.",
        },
      ],
    },
    benefits: [
      {
        title: "Preserves neighbouring teeth",
        description:
          "A single implant can replace a tooth without cutting down the healthy teeth on either side.",
      },
      {
        title: "Bone and bite support",
        description:
          "An implant-supported restoration can help maintain bone and support a stable bite when teeth are missing.",
      },
      {
        title: "Fixed or removable options",
        description:
          "From one crown to a full-arch prosthesis, the plan can be tailored to the clinical situation and your preferences.",
      },
      {
        title: "Designed for maintenance",
        description:
          "The restoration is contoured for cleaning, and reviews are scheduled to monitor the gum and bone around the implant.",
      },
    ],
    technology: [
      {
        title: "CBCT imaging",
        description:
          "Three-dimensional scans help assess bone height, width, nerves and sinus anatomy before surgery.",
      },
      {
        title: "Guided surgery",
        description:
          "A surgical guide can transfer the digital plan to the mouth when the case is suitable, improving precision and predictability.",
      },
      {
        title: "Digital impressions",
        description:
          "Scans are used to design the final crown or prosthesis and to communicate with the laboratory.",
      },
      {
        title: "Prosthetic-led planning",
        description:
          "The final tooth position is designed before the implant is placed, so the restoration is not an afterthought.",
      },
    ],
    gallery: [
      IMG.implantsHero,
      IMG.xray,
      IMG.implantFixtureXray,
      IMG.implantOutcome,
    ],
    galleryTitle: "A real single-tooth implant case",
    galleryNote:
      "Clinical images from a patient treated at Smile Clinique in Malabar Hill, Mumbai, shared with the patient's consent. Individual results vary.",
    evidenceCase: {
      badge: "Before / After",
      eyebrow: "Real patient case · Malabar Hill, Mumbai",
      title: "Single-tooth implant restoration",
      description:
        "This patient presented with a missing upper central incisor. The case was planned with a radiograph, an implant fixture was placed, and the final restoration was returned to function and appearance.",
      consent:
        "Patient images shared with consent. No identifying details shown.",
      ctaLabel: "Discuss a similar case",
      images: [
        IMG.implantsHero,
        IMG.xray,
        IMG.implantFixtureXray,
        IMG.implantOutcome,
      ],
    },
    aftercare: [
      {
        title: "After surgery",
        items: [
          "Follow the written instructions for medication, ice and rest.",
          "Do not disturb the surgical site or use straws vigorously in the early period.",
          "Report severe pain, bleeding, swelling or fever promptly.",
        ],
      },
      {
        title: "Healing phase",
        items: [
          "Keep the area clean with the recommended rinses and gentle brushing.",
          "Avoid smoking; it impairs healing and increases failure risk.",
          "Attend the review appointments even if everything feels fine.",
        ],
      },
      {
        title: "Daily care",
        items: [
          "Clean around the implant and the restoration with the recommended brushes and interdental aids.",
          "Use a soft brush and avoid abrasive materials on the prosthesis.",
          "If you grind, wear the night guard as instructed.",
        ],
      },
      {
        title: "Long-term monitoring",
        items: [
          "Keep regular hygiene reviews to check gum health and bone levels.",
          "Report bleeding, swelling or looseness early.",
          "Maintain good diabetes control and discuss medication changes with your dentist.",
        ],
      },
    ],
    risks: [
      "Bleeding, swelling, bruising and discomfort after surgery.",
      "Infection, delayed healing or failure of the implant to integrate.",
      "Damage to nearby nerves, roots or sinuses, depending on anatomy.",
      "Bone graft or sinus lift complications, including graft failure.",
      "Peri-implant inflammation or bone loss over time, especially with smoking or poor hygiene.",
      "Loosening, fracture or wear of the crown, abutment or prosthesis.",
    ],
    costTitle: "What changes the cost of dental implants in Mumbai",
    costIntro:
      "Implant pricing is not just the price of a screw. It includes diagnosis, imaging, surgery, components, healing time, the final crown or prosthesis and maintenance. A quote should make those inclusions clear.",
    costFactors: [
      "Number of implants and whether a single crown, bridge or full arch is planned",
      "Implant system and prosthetic components selected for the case",
      "Bone grafting, sinus lift or extraction",
      "CBCT imaging, surgical guides and laboratory work",
      "Temporary prosthesis or provisional tooth during healing",
      "Follow-up, hygiene and long-term maintenance",
    ],
    costNote:
      "At Smile Clinique, the implant system and components are discussed as part of the written plan. Ask whether the quote includes imaging, grafting, the abutment, the final crown and reviews. The cheapest implant is not necessarily the cheapest treatment if it excludes the parts you will need.",
    faqs: [
      {
        question: "Are dental implants painful?",
        answer:
          "The procedure is usually performed under local anaesthesia, so you should not feel sharp pain during surgery. Afterwards, mild to moderate soreness, swelling and bruising are common and can be managed with the prescribed plan. Comfort and anxiety are discussed before treatment.",
      },
      {
        question: "How long do dental implants last?",
        answer:
          "Published long-term studies report around 95% survival at 10 years, but an implant is not a lifetime guarantee. Gum health, bone, smoking, bite forces, the prosthesis and maintenance all influence how long it lasts. Regular reviews are essential.",
      },
      {
        question: "Am I too old for an implant?",
        answer:
          "Age alone is not the deciding factor. General health, medications, bone quality, gum health and the ability to maintain hygiene matter more. A medical review may be needed for some patients.",
      },
      {
        question: "Can I have an implant if I smoke?",
        answer:
          "Smoking increases the risk of impaired healing, infection and implant failure. Some clinicians will still treat selected patients who reduce or stop smoking around surgery; others may recommend an alternative. This is discussed honestly at consultation.",
      },
      {
        question: "Can I have an implant if I have diabetes?",
        answer:
          "Well-controlled diabetes is often compatible with implant treatment, but uncontrolled diabetes increases healing and infection risks. Recent medical review and good glycaemic control are important.",
      },
      {
        question: "Do I need a bone graft?",
        answer:
          "Sometimes. Bone volume is assessed on a CBCT scan. A graft may be needed if the bone is too narrow or short, or if a tooth has been missing for a long time. Not every implant case requires grafting.",
      },
      {
        question: "What is All-on-4 or All-on-6?",
        answer:
          "These are full-arch treatment concepts in which four or six implants support a fixed prosthesis. They are not automatically better or worse than other options; the number and position of implants depend on bone, bite and prosthetic design.",
      },
      {
        question: "How long does implant treatment take?",
        answer:
          "Healing after placement usually takes several weeks to months before the final restoration. Some cases can be temporarily restored sooner; others need grafting and a longer timeline. A realistic sequence is given after assessment.",
      },
      {
        question: "Will the implant look like a natural tooth?",
        answer:
          "Modern implant crowns can look very natural, but the result depends on the gum, bone and the position of the implant. Planning the final tooth before surgery helps create a better emergence profile and shade match.",
      },
      {
        question: "Where can I get an implant consultation in Mumbai?",
        answer: `Smile Clinique is at ${CLINIC.addressLine}. Consultations are available Monday to Saturday. Call ${CLINIC.phoneDisplay} or message the clinic on WhatsApp to arrange an assessment.`,
      },
    ],
    related: [
      "full-mouth-rehabilitation-malabar-hill-mumbai",
      "smile-design-malabar-hill-mumbai",
      "clear-aligners-orthodontics-malabar-hill-mumbai",
    ],
    ctaHeadline: "Replace the tooth. Protect the foundation.",
    ctaBody:
      "Book an implant assessment at Smile Clinique in Malabar Hill, Mumbai. Start with a clinical examination and, where indicated, a CBCT scan.",
    updated: "2026-10-28",
    readingTime: "9 min read",
    procedureType: "Surgical implant treatment",
    medicalSpecialty: "Oral Implantology",
  },
  {
    slug: "clear-aligners-orthodontics-malabar-hill-mumbai",
    cardTitle: "Orthodontics",
    navLabel: "Clear Aligners & Orthodontics",
    name: "Clear Aligners & Orthodontics",
    h1: {
      leading: "Clear Aligners",
      accent: "& Orthodontics",
      trailing: "in Malabar Hill, Mumbai",
    },
    title:
      "Clear Aligners & Orthodontics | Malabar Hill, Mumbai",
    description:
      "Clear aligners and orthodontics in Malabar Hill, Mumbai. Evidence-led planning for crowding, gaps, overbite and relapse by Dr. Nidhi Mehta.",
    keywords: [
      "clear aligners mumbai",
      "invisible braces mumbai",
      "orthodontist malabar hill",
      "orthodontic treatment south mumbai",
      "invisalign mumbai",
      "braces mumbai",
      "teeth straightening mumbai",
      "clear aligners cost mumbai",
      "adult orthodontics mumbai",
      "retainer after braces mumbai",
    ],
    eyebrow: "Orthodontics · Malabar Hill, Mumbai",
    icon: "Smile",
    heroLead:
      "Discreet alignment for crowding, spacing and bite problems — planned digitally, delivered at a pace that fits real life.",
    heroFacts: [
      "Clear aligners and fixed braces",
      "Digital treatment simulation",
      "Retention planned from day one",
    ],
    heroImage: IMG.orthoHero,
    heroImageFit: "contain",
    ogImage: "/og/clear-aligners-orthodontics-malabar-hill-mumbai.jpg",
    heroAside: [
      { value: "Mild–moderate", label: "Aligners are strongest here" },
      { value: "Severe cases", label: "Braces may be more predictable" },
      { value: "Retention", label: "Protects the result long term" },
    ],
    quickAnswer:
      "Clear aligners are removable, transparent trays that gradually move teeth into a planned position. They work well for many mild to moderate cases of crowding, spacing and bite correction, and can be more comfortable and easier to clean than fixed braces. They are less predictable for severe or complex movements, and they depend on the patient wearing them for the prescribed hours each day. Fixed braces remain a strong option for many cases. An orthodontic assessment, scans and a digital plan are needed to decide.",
    definition: {
      title: "Alignment is a plan, not a tray",
      paragraphs: [
        "Clear aligners are a sequence of custom-made trays that apply controlled force to move teeth. The trays are removable, which makes eating and cleaning easier, but it also means the result depends on cooperation: most aligner systems require around 20–22 hours of wear per day.",
        "Not every malocclusion is an aligner case. Simple crowding, spacing and mild bite issues are often straightforward. Severe crowding, large overjets, significant skeletal discrepancies, impacted teeth and some extraction cases may be better treated with fixed braces or a combined orthodontic–surgical plan. The right answer depends on the diagnosis, not the marketing.",
        "At Smile Clinique, orthodontic planning includes the bite, the gums, the jaw joints, the position of the roots and the long-term retention plan. Straight teeth that are not stable, or that sit on an unhealthy gum foundation, are not a successful outcome. Retention is discussed before treatment begins, not after the braces come off.",
      ],
    },
    signsTitle: "What orthodontic treatment can address",
    signs: [
      {
        title: "Crowding",
        description:
          "Teeth overlap or rotate because there is not enough space in the arch.",
      },
      {
        title: "Spacing and gaps",
        description:
          "Generalised or localised spaces that affect the smile or the bite.",
      },
      {
        title: "Relapse after previous braces",
        description:
          "Teeth have drifted after orthodontic treatment, often because retention was incomplete.",
      },
      {
        title: "Overjet or overbite",
        description:
          "The front teeth protrude or overlap more than is comfortable or aesthetic.",
      },
      {
        title: "Crossbite or narrow arches",
        description:
          "The upper and lower teeth do not meet symmetrically; some cases need a broader assessment.",
      },
      {
        title: "Hard-to-clean alignment",
        description:
          "Overlapping teeth trap plaque and make hygiene difficult, increasing decay and gum risk.",
      },
    ],
    candidates: [
      "Adults and older teenagers with healthy teeth and gums",
      "Mild to moderate crowding, spacing or bite problems",
      "Patients willing to wear aligners for the prescribed hours",
      "People who want a discreet option for a social or professional reason",
    ],
    notFor: [
      "Severe skeletal discrepancies that need a combined surgical plan",
      "Untreated gum disease or active decay",
      "Patients who cannot commit to wear time and retention",
    ],
    optionsTitle: "Aligners, braces, or a combined plan",
    optionsIntro:
      "The appliance is a tool. The diagnosis and the finishing plan decide whether the result is stable and functional.",
    options: [
      {
        name: "Clear aligners",
        bestFor: "Mild to moderate crowding, spacing and selected bite corrections",
        summary:
          "Removable transparent trays. Discreet and easier to clean, but dependent on daily wear time and suitable case selection.",
      },
      {
        name: "Ceramic braces",
        bestFor: "Patients who want fixed treatment with less visible hardware",
        summary:
          "Tooth-coloured brackets and wires. More visible than aligners but can handle a wider range of movements.",
      },
      {
        name: "Lingual braces",
        bestFor: "Selected cases where appearance is a priority",
        summary:
          "Brackets placed on the tongue side of the teeth. Very discreet, but technically demanding and not suitable for every bite.",
      },
      {
        name: "Fixed metal braces",
        bestFor: "Complex movements and cases needing maximum control",
        summary:
          "The most established orthodontic appliance. Durable and predictable for many complex cases, with a visible appearance.",
      },
    ],
    stepsTitle: "The orthodontic pathway",
    stepsIntro:
      "Orthodontics is a series of small, controlled movements. The plan and the retention phase are as important as the active treatment.",
    steps: [
      {
        number: "01",
        title: "Assessment and records",
        description:
          "We examine the bite, gums, jaw joints and tooth positions. Photographs, radiographs and intraoral scans are used to plan and monitor treatment.",
      },
      {
        number: "02",
        title: "Digital treatment plan",
        description:
          "The projected tooth movement is reviewed with you. The plan is a guide, not a guarantee; refinements may be needed.",
      },
      {
        number: "03",
        title: "Active treatment",
        description:
          "Aligners are changed on schedule, or braces are adjusted at intervals. Wear time, cleaning and comfort are reviewed at each visit.",
      },
      {
        number: "04",
        title: "Refinement",
        description:
          "Near the end, small corrections may be needed. This is normal and is planned rather than treated as a failure.",
      },
      {
        number: "05",
        title: "Retention",
        description:
          "Retainers are fitted to protect the result. Teeth can move throughout life, so long-term retention is part of the treatment, not an optional extra.",
      },
    ],
    evidence: {
      intro:
        "Clear aligner research has matured, but the evidence is nuanced. Aligners are well supported for mild to moderate malocclusion; they are not automatically equivalent to fixed braces for every movement. The strongest message is that case selection and retention matter.",
      stats: [
        {
          value: "Mild–moderate",
          label: "Where aligners perform best",
          detail:
            "An overview of 18 systematic reviews found clear aligner treatment effective for mild to moderate malocclusion, with inferior outcomes for severe cases or specific tooth movements.",
        },
        {
          value: "No significant difference",
          label: "Simple nonextraction cases in a 21-RCT meta-analysis",
          detail:
            "A 2025 systematic review and meta-analysis of 21 randomised trials found no significant difference in ABO objective grading, Little Irregularity Index or PAR scores between aligners and fixed appliances for simple nonextraction cases.",
        },
        {
          value: "Better hygiene indices",
          label: "Plaque, gingival and bleeding scores",
          detail:
            "The same meta-analysis reported significantly lower plaque, gingival and bleeding indices with clear aligners, alongside better quality-of-life scores at six months.",
        },
        {
          value: "Relapse risk",
          label: "Retention is not optional",
          detail:
            "The overview of systematic reviews noted greater relapse with clear aligner treatment. Long-term retainer wear and review are essential regardless of which appliance is used.",
        },
      ],
      caveat:
        "The overall quality of evidence in orthodontic comparisons is often low to moderate, and many studies involve selected cases. A digital simulation shows a planned movement, not a guaranteed biological response. Root resorption, gum response, compliance and growth can all change the outcome.",
      sources: [
        {
          label: "Papageorgiou et al., Clinical Oral Investigations (2021)",
          href: "https://link.springer.com/article/10.1007/s00784-021-04361-1",
          note: "Overview of systematic reviews on clear aligner effectiveness compared with fixed appliances.",
        },
        {
          label: "Baneshi et al., Journal of Evidence-Based Dental Practice (2024)",
          href: "https://doi.org/10.1016/j.jebdp.2024.102081",
          note: "Systematic review and meta-analysis of clear aligners versus fixed appliances.",
        },
        {
          label: "Thai et al., American Journal of Orthodontics and Dentofacial Orthopedics (2025)",
          href: "https://www.sciencedirect.com/science/article/abs/pii/S1532338224001313",
          note: "Systematic review and meta-analysis of 21 RCTs comparing clear aligners and fixed appliances.",
        },
        {
          label: "Alwafi et al., Dentistry Review (2023)",
          href: "https://doi.org/10.1016/j.dentre.2023.100074",
          note: "Overview of systematic reviews and RCTs on predictability and clinical effectiveness of clear aligner therapy.",
        },
      ],
    },
    benefits: [
      {
        title: "Discreet treatment",
        description:
          "Clear aligners are much less visible than metal braces, which can matter in professional and social settings.",
      },
      {
        title: "Removable and cleanable",
        description:
          "You can remove the trays to eat and brush, which can make hygiene easier than with fixed appliances.",
      },
      {
        title: "Digital planning",
        description:
          "Scans and software help visualise the proposed movement and plan attachments and refinements.",
      },
      {
        title: "Fixed-brace backup",
        description:
          "When aligners are not the most predictable option, fixed braces remain available rather than forcing one system.",
      },
    ],
    technology: [
      {
        title: "Intraoral scanning",
        description:
          "Digital models replace putty impressions and allow accurate aligner fabrication and progress review.",
      },
      {
        title: "Digital treatment simulation",
        description:
          "Software predicts tooth movement and helps discuss the plan, limitations and likely refinements.",
      },
      {
        title: "Attachments and interproximal reduction",
        description:
          "Small tooth-coloured attachments or controlled enamel reduction may be used to support specific movements.",
      },
      {
        title: "Retainer planning",
        description:
          "Fixed and removable retainers are planned before treatment ends so the result has the best chance of lasting.",
      },
    ],
    gallery: [IMG.orthoFrontal, IMG.orthoProfile],
    galleryTitle: "A real clear-aligner case, in two views",
    galleryNote:
      "Frontal and profile Pre / Mid / Post photographs from a patient treated at Smile Clinique in Malabar Hill, Mumbai, shared with consent. Individual results vary.",
    evidenceCase: {
      layout: "sequence",
      badge: "Pre / Mid / Post",
      eyebrow: "Real clear-aligner case · Malabar Hill, Mumbai",
      title: "Clear aligner treatment: frontal and profile progress",
      description:
        "This patient's aligner journey is documented in two views at three stages: pre-treatment, mid-treatment and post-treatment. The mid-treatment photographs show the tooth-coloured attachments used to guide aligner movement; the post-treatment views show the finished alignment and smile balance.",
      consent:
        "Patient images shared with consent. No identifying details shown.",
      ctaLabel: "Discuss clear aligners",
      images: [IMG.orthoFrontal, IMG.orthoProfile],
    },
    aftercare: [
      {
        title: "During aligner treatment",
        items: [
          "Wear the trays for the prescribed hours, usually around 20–22 hours per day.",
          "Remove them for eating, drinking anything other than water, and brushing.",
          "Clean the trays and your teeth before reinserting them.",
        ],
      },
      {
        title: "During fixed braces",
        items: [
          "Avoid hard, sticky foods that can break brackets or wires.",
          "Use the recommended interdental brushes and fluoride products.",
          "Attend adjustment visits and report loose brackets or wires.",
        ],
      },
      {
        title: "Discomfort",
        items: [
          "Mild soreness for a few days after a new tray or adjustment is normal.",
          "Use the recommended pain relief if needed and eat softer foods temporarily.",
          "Report severe pain, a loose appliance or a tray that does not fit.",
        ],
      },
      {
        title: "Retention",
        items: [
          "Wear retainers exactly as instructed; teeth can move throughout life.",
          "Bring retainers to review appointments so they can be checked.",
          "Replace a lost or damaged retainer promptly.",
        ],
      },
    ],
    risks: [
      "Relapse after treatment, especially without consistent retainer wear.",
      "Root resorption or gum recession in susceptible patients.",
      "Caries and gum inflammation if hygiene is poor, particularly with fixed braces.",
      "Aligners not fitting or not tracking as planned, requiring refinements.",
      "Treatment time longer than predicted, especially with poor wear time.",
      "Not suitable for severe skeletal problems without a combined plan.",
    ],
    costTitle: "What changes the cost of orthodontics in Mumbai",
    costIntro:
      "Orthodontic fees reflect the complexity of the case, the appliance, the number of reviews and the retention plan. A quote should include the full active phase and the retainers.",
    costFactors: [
      "Complexity of the crowding, spacing or bite problem",
      "Aligner system versus ceramic, lingual or metal braces",
      "Number of aligner stages and expected refinements",
      "Extractions, attachments or auxiliary appliances",
      "Retainers and follow-up reviews",
      "Laboratory and digital planning costs",
    ],
    costNote:
      "Ask whether the quote includes refinements, retainers and post-treatment reviews. Orthodontic treatment is a process, not a single purchase, and the retention phase is part of the result.",
    faqs: [
      {
        question: "Are clear aligners as effective as braces?",
        answer:
          "For mild to moderate cases, evidence supports aligners as an effective alternative. For severe or complex movements, fixed braces may be more predictable. The right choice depends on the diagnosis, not a general claim.",
      },
      {
        question: "How many hours a day do I need to wear aligners?",
        answer:
          "Most systems recommend around 20–22 hours per day. The trays are removed for eating, drinking anything other than water, and brushing. Poor wear time is one of the most common reasons treatment takes longer.",
      },
      {
        question: "How long does orthodontic treatment take?",
        answer:
          "It varies with the complexity of the case and the patient's response. Simple alignment may take months; complex bite correction can take longer. A realistic estimate is given after records and planning, with the understanding that refinements may be needed.",
      },
      {
        question: "Is orthodontic treatment painful?",
        answer:
          "Mild soreness for a few days after a new tray or adjustment is common. It usually settles. Severe pain, a loose appliance or a tray that does not fit should be reported.",
      },
      {
        question: "Can adults have braces or aligners?",
        answer:
          "Yes. Healthy teeth and gums can be moved at any age. Adults may have more complex needs such as crowns, implants, gum recession or previous orthodontic relapse, so a combined plan is often useful.",
      },
      {
        question: "Will I need a retainer forever?",
        answer:
          "Long-term retention is often recommended because teeth can move throughout life. Some patients use a fixed retainer and a removable night retainer. The exact plan depends on the case.",
      },
      {
        question: "Can aligners fix an overbite?",
        answer:
          "Some overbites can be improved with aligners, but not all. The cause matters: dental overbite, skeletal pattern, jaw relationship and habits can all contribute. A clinical assessment is needed.",
      },
      {
        question: "Do I need teeth removed?",
        answer:
          "Not always. Extractions are considered when there is significant crowding or a bite problem that cannot be resolved with space creation alone. The decision is made from records, not a routine rule.",
      },
      {
        question: "Can I whiten during orthodontic treatment?",
        answer:
          "It is usually better to wait until active treatment is complete, especially with fixed braces, so the shade is even. Whitening can be planned after the appliances are removed.",
      },
      {
        question: "Where can I get an orthodontic consultation in Mumbai?",
        answer: `Smile Clinique is at ${CLINIC.addressLine}. Call ${CLINIC.phoneDisplay} to arrange an orthodontic assessment in Malabar Hill.`,
      },
    ],
    related: [
      "smile-design-malabar-hill-mumbai",
      "dental-implants-malabar-hill-mumbai",
      "full-mouth-rehabilitation-malabar-hill-mumbai",
    ],
    ctaHeadline: "Straighten with a plan. Retain with discipline.",
    ctaBody:
      "Book an orthodontic assessment at Smile Clinique in Malabar Hill, Mumbai. We will discuss aligners, braces and the retention plan honestly.",
    updated: "2026-10-28",
    readingTime: "9 min read",
    procedureType: "Orthodontic treatment",
    medicalSpecialty: "Orthodontics",
  },
];

export const TREATMENT_MAP = new Map(
  TREATMENTS.map((treatment) => [treatment.slug, treatment]),
);

export function getTreatment(slug: string): Treatment | undefined {
  return TREATMENT_MAP.get(slug);
}

export function getRelatedTreatments(treatment: Treatment): Treatment[] {
  return treatment.related
    .map((slug) => TREATMENT_MAP.get(slug))
    .filter((item): item is Treatment => Boolean(item));
}

export function treatmentUrl(slug: string): string {
  return `/treatments/${slug}`;
}

export function absoluteTreatmentUrl(slug: string): string {
  return `${SITE_URL}/treatments/${slug}`;
}
