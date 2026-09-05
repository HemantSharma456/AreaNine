// =============================================
// AREANINE — Site Data
// All content, project info, team data, etc.
// =============================================

import team1 from "../assets/images/team1(1).jpg";
import team2 from "../assets/images/team2.jpg";
import team3 from "../assets/images/team3.jpg";


export const siteConfig = {
  name: "AreaNine",
  tagline: "Designing Spaces. Defining Experiences.",
  description:
    "AreaNine is a contemporary architecture studio driven by the belief that great design is felt before it is seen. We create buildings and spaces that resonate with purpose, precision, and poetry.",
  founded: "2012",
  location: "Panipat, Haryana",
  email: "studio@areanine.com",
  phone: "+1 (212) 555-0190",
};

export const projects = [
  {
    id: 1,
    title: "Meridian House",
    category: "Residential",
    location: "Oslo, Norway",
    year: "2023",
    area: "420 sqm",
    status: "Completed",
    description:
      "A private residence that converses with the Norwegian landscape through a series of cantilevered volumes and floor-to-ceiling glazing. The design negotiates between shelter and openness, drawing the forest floor into the interior.",
    shortDesc: "A residence in dialogue with the Nordic landscape.",
    // Replace this image with actual project image
    coverImage: "/assets/images/project1.jpg",
    // Replace these images with actual gallery images
    gallery: [
      "/assets/images/project1.jpg",
      "/assets/images/project1-2.jpg",
      "/assets/images/project1-3.jpg",
    ],
    tags: ["Residential", "Landscape", "Contemporary"],
  },
  {
    id: 2,
    title: "Oblique Tower",
    category: "Commercial",
    location: "Singapore",
    year: "2022",
    area: "12,400 sqm",
    status: "Completed",
    description:
      "A mixed-use commercial tower defined by its angled facade system that responds dynamically to solar orientation. The building's exterior — a lattice of folded aluminium panels — creates constantly shifting shadow patterns across the street.",
    shortDesc: "A tower whose facade shifts with the sun.",
    // Replace this image with actual project image
    coverImage: "/assets/images/project2.jpg",
    gallery: [
      "/assets/images/project2.jpg",
      "/assets/images/project2-2.jpg",
      "/assets/images/project2-3.jpg",
    ],
    tags: ["Commercial", "High-rise", "Facade"],
  },
  {
    id: 3,
    title: "Salt Gallery",
    category: "Cultural",
    location: "Lisbon, Portugal",
    year: "2022",
    area: "1,800 sqm",
    status: "Completed",
    description:
      "A contemporary arts gallery embedded into a historic waterfront warehouse. The intervention preserves the industrial bones while inserting a new circulation spine — a dramatic ramp of raw concrete and weathered steel.",
    shortDesc: "Contemporary art meets industrial heritage.",
    // Replace this image with actual project image
    coverImage: "/assets/images/project3.jpg",
    gallery: [
      "/assets/images/project3.jpg",
      "/assets/images/project3-2.jpg",
    ],
    tags: ["Cultural", "Adaptive Reuse", "Heritage"],
  },
  {
    id: 4,
    title: "Canopy Pavilion",
    category: "Public",
    location: "Melbourne, Australia",
    year: "2023",
    area: "640 sqm",
    status: "Completed",
    description:
      "A public pavilion for the Melbourne Botanic Gardens designed as a series of interlocking timber hyperbolic paraboloids. The structure creates dappled shade while allowing rain to channel through its valleys into a reflecting pool.",
    shortDesc: "Geometry inspired by the canopy above.",
    // Replace this image with actual project image
    coverImage: "/assets/images/project4.jpg",
    gallery: [
      "/assets/images/project4.jpg",
      "/assets/images/project4-2.jpg",
    ],
    tags: ["Public", "Timber", "Landscape"],
  },
  {
    id: 5,
    title: "Threshold Spa",
    category: "Hospitality",
    location: "Kyoto, Japan",
    year: "2021",
    area: "2,200 sqm",
    status: "Completed",
    description:
      "A luxury wellness retreat designed in the tradition of Japanese spatial philosophy — Ma. Every threshold, every transition between inside and outside is orchestrated as a contemplative pause. Materials are raw: stone, water, timber, light.",
    shortDesc: "Wellness through the philosophy of Ma.",
    // Replace this image with actual project image
    coverImage: "/assets/images/project5.jpg",
    gallery: [
      "/assets/images/project5.jpg",
      "/assets/images/project5-2.jpg",
      "/assets/images/project5-3.jpg",
    ],
    tags: ["Hospitality", "Wellness", "Japanese"],
  },
  {
    id: 6,
    title: "Void House",
    category: "Residential",
    location: "Cape Town, South Africa",
    year: "2024",
    area: "310 sqm",
    status: "Under Construction",
    description:
      "Organized around a central courtyard void, this private residence draws the Atlantic breeze through its heart. Thick masonry walls and deep-set openings mediate the intense coastal light, creating an interior of remarkable calm.",
    shortDesc: "Organized around light, air, and absence.",
    // Replace this image with actual project image
    coverImage: "/assets/images/project6.jpg",
    gallery: [
      "/assets/images/project6.jpg",
      "/assets/images/project6-2.jpg",
    ],
    tags: ["Residential", "Courtyard", "Masonry"],
  },
];

export const categories = ["All", "Residential", "Commercial", "Cultural", "Public", "Hospitality"];

export const teamMembers = [
  {
    id: 1,
    name: "Mr. Ashish Saluja",
    role: "Principal Architect & Founder",
    bio: "Guided by vision and driven by precision, Ar. Ashish Saluja founded the firm with a clear purpose — to create architecture that transcends trends and defines timeless luxury. With a deep respect for proportion, detail, and context, his design philosophy balances elegance with intelligence, crafting spaces that feel refined, purposeful, and enduring.",
    // Replace this image with actual team member photo
    image:  team1,
  },
  {
    id: 2,
    name: "Mrs. Riya Chitkara Saluja",
    role: "Co-Member",
    bio: "I’m Riya Chitkara Saluja, an architect, a graduate of Guru Gobind Singh Indraprastha University, Delhi, and over the past five years, I’ve had the opportunity to work on a range of institutional and high-rise residential projects across Delhi.",
    // Replace this image with actual team member photo
    image: team2,
  },
  {
    id: 3,
    name: "Mr. Naman Pruthi",
    role: "Co-Partner & Principal Architect",
    bio: "With a design philosophy rooted in elegance, precision, and timeless architecture, Naman leads projects that balance aesthetic sophistication with intelligent planning. Each space is thoughtfully crafted to reflect exclusivity, comfort, and long-term value.",
    // Replace this image with actual team member photo
    image: team3,
  },
];

export const services = [
  {
    id: 1,
    number: "01",
    title: "Architecture",
    description:
      "From concept to completion, we lead the full design and delivery of buildings that are precise, purposeful, and enduring. Our process is rigorous and collaborative.",
  },
  {
    id: 2,
    number: "02",
    title: "Interior Design",
    description:
      "We design interiors that are inseparable from the architecture — considering light, material, proportion, and sequence as a unified spatial experience.",
  },
  {
    id: 3,
    number: "03",
    title: "Master Planning",
    description:
      "Urban strategies and site masterplans that establish frameworks for growth, movement, and identity — designed to be resilient and adaptable over time.",
  },
  {
    id: 4,
    number: "04",
    title: "Heritage & Adaptation",
    description:
      "Sensitive interventions within existing fabric. We believe the most compelling contemporary spaces often exist in dialogue with the past.",
  },
  {
    id: 5,
    number: "05",
    title: "Research & Consultancy",
    description:
      "Design research, feasibility studies, and strategic consultancy for clients navigating complex briefs or challenging sites.",
  },
  {
    id: 6,
    number: "06",
    title: "Exhibition Design",
    description:
      "Temporary and permanent installations and exhibitions — environments for ideas, objects, and experiences to be encountered and contemplated.",
  },
];

export const galleryImages = [
  { id: 1, src: "/assets/images/gallery1.jpg", alt: "Meridian House exterior", span: "tall" },
  { id: 2, src: "/assets/images/gallery2.jpg", alt: "Oblique Tower detail", span: "wide" },
  { id: 3, src: "/assets/images/gallery3.jpg", alt: "Salt Gallery interior", span: "normal" },
  { id: 4, src: "/assets/images/gallery4.jpg", alt: "Canopy Pavilion structure", span: "normal" },
  { id: 5, src: "/assets/images/gallery5.jpg", alt: "Threshold Spa courtyard", span: "tall" },
  { id: 6, src: "/assets/images/gallery6.jpg", alt: "Void House interior", span: "normal" },
  { id: 7, src: "/assets/images/gallery7.jpg", alt: "Detail — concrete texture", span: "wide" },
  { id: 8, src: "/assets/images/gallery8.jpg", alt: "Staircase — Oslo residence", span: "normal" },
];

export const awards = [
  { year: "2023", award: "Architectural Review House Award", project: "Meridian House" },
  { year: "2022", award: "RIBA International Award", project: "Salt Gallery" },
  { year: "2021", award: "World Architecture Festival Finalist", project: "Threshold Spa" },
  { year: "2020", award: "Wallpaper* Design Award", project: "Studio" },
];
