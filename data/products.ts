export type Product = {
  name: string;
  slug: string;
  src: string;
  tagline: string;
  description: string;
  highlights: string[];
  origin: string;
  packaging: string;
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
    origin: "India",
    packaging: "Bulk / Custom bales on request",
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
    origin: "India",
    packaging: "50 kg bags / Bulk",
  },
  {
    name: "Wheat",
    slug: "wheat",
    src: "/products/wheat.png",
    tagline: "Export-grade Indian wheat for global markets",
    description:
      "Our wheat is sourced from the fertile plains of India, meeting international quality standards. It is suitable for flour milling, food processing, and animal feed applications.",
    highlights: [
      "High protein content",
      "Low moisture & impurities",
      "FSSAI & APEDA certified",
      "Available year-round",
    ],
    origin: "Uttar Pradesh & Punjab, India",
    packaging: "25 kg / 50 kg bags or Bulk",
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
    origin: "Maharashtra & Madhya Pradesh, India",
    packaging: "10 kg / 20 kg mesh bags",
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
    packaging: "50 kg bags / Bulk",
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
    origin: "India",
    packaging: "1 kg / 5 kg / 25 kg / 50 kg bags",
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
    packaging: "50 kg bags / Bulk",
  },
];
