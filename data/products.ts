export type SpecRow = { parameter: string; value: string };

export type Product = {
  name: string;
  slug: string;
  src: string;
  tagline: string;
  description: string;
  highlights: string[];
  origin: string;
  packaging: string;
  specs: SpecRow[];
  varieties: string[];
  grading: string;
  shipping: {
    loadability: string;
    incoterms: string;
    ports: string;
    leadTime: string;
  };
  certifications: string[];
  harvestSeason: string;
};

export const products: Product[] = [
  {
    name: "Corn Silage",
    slug: "corn-silage",
    src: "/products/silage.png",
    tagline: "Premium fermented fodder for livestock nutrition",
    description:
      "Corn Silage is a high-energy fermented feed made from the whole corn plant. It is widely used as a primary roughage source for dairy and beef cattle, providing excellent nutritional value and digestibility.",
    highlights: [
      "High energy and digestibility",
      "Rich in starch and fiber",
      "Ideal for dairy & beef cattle",
      "Consistent moisture content",
    ],
    origin: "Maharashtra & Madhya Pradesh, India",
    packaging: "Bulk bales / Custom wrapped bales on request",
    specs: [
      { parameter: "Type", value: "Whole Plant Corn Silage" },
      { parameter: "Dry Matter", value: "30% – 35%" },
      { parameter: "Crude Protein", value: "7% – 9% (DM basis)" },
      { parameter: "Starch Content", value: "28% – 32% (DM basis)" },
      { parameter: "NDF (Fiber)", value: "42% – 48%" },
      { parameter: "pH", value: "3.8 – 4.2" },
      { parameter: "Moisture", value: "65% – 70%" },
      { parameter: "Foreign Matter", value: "Nil" },
    ],
    varieties: ["Pioneer 30V92", "DKC 9144", "Local Hybrid Varieties"],
    grading: "Grade A (Dairy), Grade B (Beef/General Livestock)",
    shipping: {
      loadability: "22–24 MT per 20ft Container",
      incoterms: "FOB, CIF, CFR",
      ports: "Mundra, Kandla, JNPT (Nhava Sheva)",
      leadTime: "10–15 days after LC opening",
    },
    certifications: [
      "FSSAI Approved",
      "Phytosanitary Certificate",
      "Certificate of Origin",
      "Fumigation Certificate",
      "SGS / Intertek Third-Party Inspection Available",
    ],
    harvestSeason: "Kharif Season — July to October. Peak availability: October–December.",
  },
  {
    name: "Wheat Maize",
    slug: "wheat-maize",
    src: "/products/maize.png",
    tagline: "Dual-grain blend for superior feed formulations",
    description:
      "Wheat Maize is a carefully blended combination of wheat and maize grains, offering a balanced nutritional profile suitable for poultry, cattle, and aquaculture feed industries.",
    highlights: [
      "Balanced carbohydrate profile",
      "Suitable for poultry & cattle feed",
      "Consistent grain quality",
      "Available in bulk quantities",
    ],
    origin: "Uttar Pradesh, Rajasthan & Karnataka, India",
    packaging: "50 kg PP bags / Bulk",
    specs: [
      { parameter: "Type", value: "Yellow / White Maize (Feed Grade)" },
      { parameter: "Moisture", value: "14% Max" },
      { parameter: "Protein", value: "8% – 10% Min" },
      { parameter: "Starch", value: "68% – 72%" },
      { parameter: "Oil Content", value: "3.5% – 4.5%" },
      { parameter: "Aflatoxin", value: "10 ppb Max" },
      { parameter: "Foreign Matter", value: "2% Max" },
      { parameter: "Broken Grains", value: "3% Max" },
    ],
    varieties: ["Yellow Maize (Hybrid)", "White Maize", "Dent Corn"],
    grading: "Feed Grade A, Poultry Grade",
    shipping: {
      loadability: "24–26 MT per 20ft Container",
      incoterms: "FOB, CIF, CFR",
      ports: "Mundra, Kandla, Kakinada",
      leadTime: "7–12 days after LC opening",
    },
    certifications: [
      "APEDA Certified",
      "FSSAI Approved",
      "Phytosanitary Certificate",
      "Certificate of Origin",
      "Fumigation Certificate",
      "SGS / Intertek Inspection Available",
    ],
    harvestSeason: "Kharif Season — Harvested October–December. Year-round availability from storage.",
  },
  {
    name: "Wheat",
    slug: "wheat",
    src: "/products/wheat.png",
    tagline: "Export-grade Indian wheat for global markets",
    description:
      "Our wheat is sourced from the fertile plains of India, meeting international quality standards. It is suitable for flour milling, food processing, and animal feed applications across EU, GCC, and Southeast Asian markets.",
    highlights: [
      "High protein content",
      "Low moisture & impurities",
      "FSSAI & APEDA certified",
      "Available year-round",
    ],
    origin: "Uttar Pradesh & Punjab, India",
    packaging: "25 kg / 50 kg PP bags or Bulk",
    specs: [
      { parameter: "Type", value: "Milling Wheat / Soft Wheat" },
      { parameter: "Protein Content", value: "11.5% – 13.5% Min" },
      { parameter: "Moisture", value: "12% Max" },
      { parameter: "Test Weight", value: "78 kg/hl Min" },
      { parameter: "Foreign Matter", value: "1.5% Max" },
      { parameter: "Falling Number", value: "300 sec Min" },
      { parameter: "Gluten (Wet)", value: "26% – 28%" },
      { parameter: "Broken Grains", value: "2% Max" },
    ],
    varieties: ["Sharbati", "Lok-1", "C-306", "Pusa Gold", "HD-2967"],
    grading: "Grade A (Milling), Grade B (General), Feed Grade",
    shipping: {
      loadability: "24 MT per 20ft Container / 26 MT per 40ft Container",
      incoterms: "FOB, CIF, CFR",
      ports: "Mundra, Kandla, JNPT (Nhava Sheva)",
      leadTime: "10–14 days after LC opening",
    },
    certifications: [
      "APEDA Certified",
      "FSSAI Approved",
      "Phytosanitary Certificate",
      "Certificate of Origin",
      "Fumigation Certificate",
      "SGS / Intertek Third-Party Inspection Available",
    ],
    harvestSeason: "Rabi Season — Harvested March to May. Peak export window: April–July.",
  },
  {
    name: "Onion",
    slug: "onion",
    src: "/products/onion.png",
    tagline: "Fresh Indian onions with global export standards",
    description:
      "Alif Agro Nutrition exports premium quality onions sourced directly from major growing regions in India. Our onions are graded, sorted, and packed to meet EU, GCC, and Southeast Asian market requirements.",
    highlights: [
      "Firm texture & pungent flavour",
      "Graded by size & quality",
      "Long shelf life",
      "Compliant with EU & GCC standards",
    ],
    origin: "Maharashtra (Nashik) & Madhya Pradesh, India",
    packaging: "10 kg / 20 kg mesh bags / Jute bags",
    specs: [
      { parameter: "Type", value: "Red Onion / White Onion" },
      { parameter: "Size", value: "45–55 mm / 55–65 mm / 65–75 mm" },
      { parameter: "Moisture", value: "86% – 88%" },
      { parameter: "Dry Matter", value: "12% – 14%" },
      { parameter: "Shelf Life", value: "30–45 days at ambient temp" },
      { parameter: "Sprouts / Rots", value: "2% Max" },
      { parameter: "Foreign Matter", value: "1% Max" },
      { parameter: "Pesticide Residue", value: "As per EU MRL standards" },
    ],
    varieties: ["Nasik Red", "Bellary Red", "White Onion (Pusa White)", "Agrifound Light Red"],
    grading: "Super A (Export), Grade A, Grade B",
    shipping: {
      loadability: "20–22 MT per 20ft Container",
      incoterms: "FOB, CIF, CFR",
      ports: "JNPT (Nhava Sheva), Mundra, Chennai",
      leadTime: "5–10 days after LC opening",
    },
    certifications: [
      "APEDA Certified",
      "FSSAI Approved",
      "Phytosanitary Certificate",
      "Certificate of Origin",
      "EU Pesticide Residue Compliant",
      "SGS / Intertek Inspection Available",
    ],
    harvestSeason: "Main crop: November–February (Kharif). Summer crop: March–May. Year-round availability.",
  },
  {
    name: "Jaw",
    slug: "jaw",
    src: "/products/jaw.png",
    tagline: "Traditional Indian jowar for food & feed",
    description:
      "Jaw (Jowar / Sorghum) is a drought-resistant grain widely used in food products and animal feed. It is gluten-free, rich in nutrients, and increasingly popular in health food markets globally.",
    highlights: [
      "Gluten-free grain",
      "Rich in iron & fiber",
      "Used in food & feed industries",
      "Sustainably sourced",
    ],
    origin: "Maharashtra & Karnataka, India",
    packaging: "50 kg PP bags / Bulk",
    specs: [
      { parameter: "Type", value: "White Sorghum / Red Sorghum (Jowar)" },
      { parameter: "Moisture", value: "12% Max" },
      { parameter: "Protein", value: "9% – 11%" },
      { parameter: "Starch", value: "68% – 74%" },
      { parameter: "Tannin Content", value: "0.3% Max (Food Grade)" },
      { parameter: "Foreign Matter", value: "2% Max" },
      { parameter: "Broken Grains", value: "3% Max" },
      { parameter: "Aflatoxin", value: "10 ppb Max" },
    ],
    varieties: ["White Jowar (CSH-16)", "Red Sorghum", "Sweet Sorghum", "Hybrid Jowar"],
    grading: "Food Grade A, Feed Grade B",
    shipping: {
      loadability: "24–26 MT per 20ft Container",
      incoterms: "FOB, CIF, CFR",
      ports: "Mundra, Kandla, Kakinada",
      leadTime: "7–12 days after LC opening",
    },
    certifications: [
      "APEDA Certified",
      "FSSAI Approved",
      "Phytosanitary Certificate",
      "Certificate of Origin",
      "Fumigation Certificate",
      "Gluten-Free Certified",
    ],
    harvestSeason: "Kharif: October–November. Rabi: February–March. Two crops per year.",
  },
  {
    name: "Wheat Flour",
    slug: "wheat-flour",
    src: "/products/wheat-flour.png",
    tagline: "Finely milled wheat flour for bakery & food industry",
    description:
      "Our wheat flour is milled from premium Indian wheat, offering consistent quality for bakeries, food manufacturers, and retail markets. Available in various grades including maida, atta, and semolina.",
    highlights: [
      "Consistent protein & gluten levels",
      "Fine & uniform milling",
      "Suitable for bakery & pasta",
      "Custom grades available",
    ],
    origin: "Uttar Pradesh & Punjab, India",
    packaging: "1 kg / 5 kg / 25 kg / 50 kg PP bags",
    specs: [
      { parameter: "Type", value: "Atta (Whole Wheat) / Maida (Refined) / Semolina" },
      { parameter: "Moisture", value: "13.5% Max" },
      { parameter: "Protein", value: "10% – 12% (Atta) / 9% – 11% (Maida)" },
      { parameter: "Ash Content", value: "0.6% Max (Maida) / 1.2% Max (Atta)" },
      { parameter: "Gluten (Wet)", value: "24% – 28%" },
      { parameter: "Falling Number", value: "280 sec Min" },
      { parameter: "Fineness (Mesh)", value: "100 mesh (Maida) / 80 mesh (Atta)" },
      { parameter: "Foreign Matter", value: "Nil" },
    ],
    varieties: ["Whole Wheat Atta", "Refined Maida", "Semolina (Sooji/Rava)", "Durum Wheat Flour"],
    grading: "Food Grade A (Export), Retail Grade, Industrial Grade",
    shipping: {
      loadability: "20–22 MT per 20ft Container",
      incoterms: "FOB, CIF, CFR",
      ports: "JNPT (Nhava Sheva), Mundra, Kandla",
      leadTime: "10–15 days after LC opening",
    },
    certifications: [
      "FSSAI Approved",
      "APEDA Certified",
      "ISO 22000",
      "Phytosanitary Certificate",
      "Certificate of Origin",
      "Halal Certified (on request)",
    ],
    harvestSeason: "Milled year-round from Rabi wheat (harvested March–May). Consistent supply guaranteed.",
  },
  {
    name: "Bajra",
    slug: "bajra",
    src: "/products/bajra.png",
    tagline: "Nutrient-rich pearl millet for health & feed markets",
    description:
      "Bajra (Pearl Millet) is one of India's most important cereal crops. It is highly nutritious, drought-tolerant, and used extensively in human food, animal feed, and the growing health food segment worldwide.",
    highlights: [
      "High in iron, zinc & magnesium",
      "Gluten-free & easily digestible",
      "Used in health foods & feed",
      "Sustainably grown",
    ],
    origin: "Rajasthan & Gujarat, India",
    packaging: "50 kg PP bags / Bulk",
    specs: [
      { parameter: "Type", value: "Pearl Millet (Bajra) — Food & Feed Grade" },
      { parameter: "Moisture", value: "12% Max" },
      { parameter: "Protein", value: "10% – 12%" },
      { parameter: "Fat", value: "4% – 5%" },
      { parameter: "Fiber (Crude)", value: "2% – 3%" },
      { parameter: "Iron Content", value: "8 mg/100g Min" },
      { parameter: "Foreign Matter", value: "2% Max" },
      { parameter: "Broken Grains", value: "3% Max" },
    ],
    varieties: ["HHB-67 (Improved)", "Pusa Composite 383", "GHB-558", "Local Desi Bajra"],
    grading: "Food Grade A, Feed Grade B",
    shipping: {
      loadability: "24–26 MT per 20ft Container",
      incoterms: "FOB, CIF, CFR",
      ports: "Mundra, Kandla, Pipavav",
      leadTime: "7–12 days after LC opening",
    },
    certifications: [
      "APEDA Certified",
      "FSSAI Approved",
      "Phytosanitary Certificate",
      "Certificate of Origin",
      "Fumigation Certificate",
      "Gluten-Free Certified",
    ],
    harvestSeason: "Kharif Season — Harvested September–October. Peak export: October–January.",
  },
];
