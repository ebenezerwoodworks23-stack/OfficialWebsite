import { Service, GalleryProject, Testimonial, FeatureCard, ProcessStep } from "./types";
import modularKitchenImage from "../assets/ModernKitchen.png";
import wardrobeImage from "../assets/WardrobeWork.jpeg";
import cupboardImage from "../assets/Cupboard(1).jpeg";
import tvUnitImage from "../assets/TVUnitWork.jpeg";
import tvUnitImage1 from "../assets/TVUnitWork(1).jpeg";
import tvUnitImage2 from "../assets/TVUnitWork(2).jpeg";
import bedroomImage from "../assets/BedroomWork.jpeg";
import officeImage from "../assets/OfficeWork.jpeg";
import wardrobeAltImage from "../assets/WoodenCompartmentWork.png";
import dressingTableImage from "../assets/DressingTable.jpeg";
import poojaImage from "../assets/PoojaWork.jpeg";
import homeImage from "../assets/CompleteHomeWork.png";
import testimonialAvatarOne from "../assets/WardrobeWork(1).jpeg";
import testimonialAvatarTwo from "../assets/BedroomWork.jpeg";
import testimonialAvatarThree from "../assets/PoojaWork.jpeg";

export const servicesData: Service[] = [
  {
    id: "modular-kitchen",
    title: "Modular Kitchen",
    shortDescription: "Sleek, highly functional premium modular kitchens engineered for smooth operation and luxury appearance.",
    longDescription: "Our premium modular kitchens blend state-of-the-art European design with practical ergonomic layouts. We specialize in custom configurations (L-shaped, U-shaped, parallel, and island designs) using Premium Mica Finish surfaces, elegant detailing, and premium hardware for a refined finish.",
    iconName: "ChefHat",
    imageUrl: modularKitchenImage,
    features: [
      "Premium Mica Finish cabinetry for a refined and durable surface",
      "Premium soft-close drawers and pull-outs",
      "Custom layouts (Island, Parallel, L & U Shapes)",
      "Integrated smart organizers & corner solutions",
      "Quartz or premium granite countertops"
    ],
    materials: ["Premium Mica Finish", "MDF (Medium Density Fiberboard)", "Novopan Board", "Quartz Surface"]
  },
  {
    id: "wardrobes",
    title: "Wardrobes",
    shortDescription: "Custom luxury wardrobes, sliding closets, and walk-in dressing areas tailored to maximize your storage space.",
    longDescription: "Our custom wardrobes are designed to reflect your personal style while optimizing every square inch of storage. From space-saving sliding door systems to sprawling walk-in closets, we integrate customized drawer dividers, sensor LED lighting, pull-out shoe racks, and premium glass door designs to deliver a boutique-like dressing experience.",
    iconName: "FolderOpen",
    imageUrl: wardrobeImage,
    features: [
      "Space-saving sliding doors & luxurious open layouts",
      "Internal motion-activated LED sensory lighting",
      "Customized jewellery drawers, pull-out trousers, and shoe racks",
      "Toughened tinted glass doors or lacquered glass finishes",
      "Heavy-duty long-term German sliding mechanisms"
    ],
    materials: ["MDF (Medium Density Fiberboard)", "Premium Mica Finish", "Novopan Board", "Tinted Profiling Glass"]
  },
  {
    id: "wooden-cupboards",
    title: "Wooden Cupboards",
    shortDescription: "Elegant, durable wood storage cupboards for living rooms, kitchens, study areas, and hallway showcases.",
    longDescription: "Store with elegance. Our custom wooden cupboards combine heavy-duty stability with exquisite wooden textures. Perfect as dining room sideboards, library bookshelves, or elegant hallway vitrines, they are crafted to elevate your home storage into a design statement.",
    iconName: "Layers",
    imageUrl: cupboardImage,
    features: [
      "Custom depth and adjustable shelving grids",
      "Sturdy framework resistant to heavy loading",
      "Concealed hinge designs and premium designer handles",
      "Glass display panels with built-in spotlights"
    ],
    materials: ["MDF (Medium Density Fiberboard)", "Premium Mica Finish", "Novopan Board"]
  },
  {
    id: "tv-units",
    title: "TV Units",
    shortDescription: "Bespoke modern entertainment consoles, wall paneling, and media centers with hidden wire management.",
    longDescription: "Upgrade your entertainment experience. We create focal-point TV consoles featuring stunning wooden wall cladding (including slatted and fluted patterns), floating cabinets, hidden cable routing channels, and ambient LED backlighting that gives your living space a dramatic, luxurious theater feel.",
    iconName: "Tv",
    imageUrl: tvUnitImage,
    features: [
      "Sleek floating consoles with handleless press-to-open doors",
      "Elegant fluted panels with premium finish options",
      "Complete wire integration - no messy visible cables",
      "Integrated shelves for decorative showpieces and speakers"
    ],
    materials: ["Premium Mica Finish", "MDF (Medium Density Fiberboard)", "Novopan Board"]
  },
  {
    id: "bedroom-interiors",
    title: "Bedroom Interiors",
    shortDescription: "Unmatched serenity with custom wooden beds, headboards, nightstands, and integrated vanity units.",
    longDescription: "Transform your bedroom into a luxurious sanctuary. We construct custom bed frames (including king and queen size hydraulic storage beds), floor-to-ceiling headboards upholstered in premium fabrics or warm wood grains, suspended nightstands, and matching custom vanities.",
    iconName: "Bed",
    imageUrl: bedroomImage,
    features: [
      "Hydraulic lift-up storage frames for heavy bedding",
      "Custom acoustic or slatted wood headboards",
      "Matching bedside drawer tables with soft glide channels",
      "Sophisticated dressing tables with high-reflection silver mirrors"
    ],
    materials: ["Premium Mica Finish", "MDF (Medium Density Fiberboard)", "Novopan Board"]
  },
  {
    id: "office-interiors",
    title: "Office Interiors",
    shortDescription: "Professional workspaces featuring executive desks, meeting tables, acoustic partitions, and filing credenzas.",
    longDescription: "Productivity meets professional luxury. We design and manufacture modern ergonomic workspace elements including solid wood executive tables, sleek laminate partition walls, and secure document storage credenzas suitable for both home offices and large corporate settings.",
    iconName: "Briefcase",
    imageUrl: officeImage,
    features: [
      "Ergonomic wire grommets and power-strips integration",
      "Filing cabinets with central heavy-duty locking systems",
      "Conference tables with built-in mic & HDMI wire pathways",
      "Modern wooden vertical slats partitions"
    ],
    materials: ["Premium Mica Finish", "MDF (Medium Density Fiberboard)", "Novopan Board"]
  },
  {
    id: "wooden-partitions",
    title: "Wooden Partitions",
    shortDescription: "Aesthetic slatted dividers, CNC-carved panels, and jali screens to separate foyer, dining, and living rooms.",
    longDescription: "Divide spaces gracefully without blocking light. Our custom partition grids, slatted wooden pillars, and decorative wooden CNC boards add structure, privacy, and architectural richness to foyer entryways, dining halls, and master suites.",
    iconName: "Columns",
    imageUrl: wardrobeAltImage,
    features: [
      "Aesthetic vertical slatted layouts or intricate classic carvings",
      "Includes display cubbies for books, vases, or souvenirs",
      "Sturdy anchor system for ceiling-to-floor security",
      "Integrated planter boxes for indoor greenery"
    ],
    materials: ["Premium Mica Finish", "MDF (Medium Density Fiberboard)", "Novopan Board"]
  },
  {
    id: "custom-furniture",
    title: "Custom Furniture",
    shortDescription: "Bespoke handcrafted chairs, tables, consoles, and dressers made exactly to your dimensions and design taste.",
    longDescription: "Don't settle for mass-market imports. We handcraft unique heirloom-quality furniture pieces based on your reference sketches or Pinterest boards. Every joint is structurally mortised and tenoned by master artisans for lifelong durability.",
    iconName: "Wrench",
    imageUrl: dressingTableImage,
    features: [
      "Lifetime structural guarantee on custom joint frameworks",
      "Selection of premium board finishes with refined detailing",
      "Bespoke staining matching existing home colors",
      "Handcrafted hand-rubbed oil and wax premium finishes"
    ],
    materials: ["Premium Mica Finish", "MDF (Medium Density Fiberboard)", "Novopan Board"]
  },
  {
    id: "pooja-units",
    title: "Pooja Units",
    shortDescription: "Sacred home temple shrines with refined finish detailing, integrated drawers, and brass fixtures.",
    longDescription: "Create a peaceful sanctuary for daily prayers. Our customized Pooja Units combine traditional wood carvings with modern aesthetics. They include warm hidden spot illumination, drawers for incense and scriptures, slide-out brass plates, and beautiful CNC carved jali doors.",
    iconName: "Compass",
    imageUrl: poojaImage,
    features: [
      "Exquisite floral or geometric CNC laser-cut wood patterns",
      "Pull-out drawers for holy items and prayer books",
      "Dedicated sliding brass plate for lighting oil diyas",
      "Spacious layouts featuring backlighting for a divine halo effect"
    ],
    materials: ["Premium Mica Finish", "MDF (Medium Density Fiberboard)", "Novopan Board"]
  },
  {
    id: "complete-home-interiors",
    title: "Complete Home Interiors",
    shortDescription: "Coordinated whole-home interior transformations: Foyer, Living, Dining, Kitchen, & Bedroom interiors.",
    longDescription: "Enjoy a stress-free transformation. We take complete charge of your empty villa or apartment, designing a unified wooden color scheme and material flow across all rooms. Includes lighting plans, cabinetry, loose furniture, and custom cladding.",
    iconName: "Home",
    imageUrl: homeImage,
    features: [
      "Dedicated senior designer for cohesive styling across the home",
      "Complete 3D visual render walkthrough before cutting wood",
      "All-inclusive turnkey execution: Woodwork, false ceilings, and lighting",
      "Special discount package pricing for whole-home projects"
    ],
    materials: ["Full-Spectrum premium finishes", "Custom wood choices", "Custom curated upholstery"]
  }
];

export const galleryProjects: GalleryProject[] = [
  {
    id: "proj1",
    title: "Kitchen Project",
    category: "Kitchens",
    imageUrl: modularKitchenImage
  },
  {
    id: "proj2",
    title: "Wardrobe Project",
    category: "Wardrobes",
    imageUrl: wardrobeImage
  },
  {
    id: "proj3",
    title: "Wardrobe Detail",
    category: "Wardrobes",
    imageUrl: wardrobeAltImage
  },
  {
    id: "proj4",
    title: "Cupboard Project",
    category: "Cupboards",
    imageUrl: cupboardImage
  },
  {
    id: "proj5",
    title: "TV Unit Project",
    category: "TV Units",
    imageUrl: tvUnitImage
  },
  {
    id: "proj6",
    title: "Bedroom Project",
    category: "Bedrooms",
    imageUrl: bedroomImage
  },
  {
    id: "proj7",
    title: "Office Interior",
    category: "Office Interiors",
    imageUrl: officeImage
  },
  {
    id: "proj8",
    title: "TV Unit Project1",
    category: "TV Units",
    imageUrl: tvUnitImage1
  },
  {
    id: "proj9",
    title: "Custom Furniture",
    category: "Bedrooms",
    imageUrl: dressingTableImage
  },
  {
    id: "proj10",
    title: "TV Unit Project2",
    category: "TV Units",
    imageUrl: tvUnitImage2
  }
];

export const whyChooseUsData: FeatureCard[] = [
  {
    id: "quality",
    title: "Premium Quality Materials",
    description: "We use Premium Mica Finish, MDF (Medium Density Fiberboard), and Novopan Board to deliver durable and refined interiors.",
    iconName: "ShieldCheck"
  },
  {
    id: "craftsmanship",
    title: "Skilled Craftsmanship",
    description: "Our team consists of generational master woodworkers and professional designers who execute every joint, carving, and polish with millimeter accuracy.",
    iconName: "Award"
  },
  {
    id: "customized",
    title: "Customized Designs",
    description: "No cookie-cutter templates. We tailor everything—dimensions, storage splits, handle positions, and timber hues—to match your unique lifestyle and tastes.",
    iconName: "Sliders"
  },
  {
    id: "pricing",
    title: "Affordable Pricing",
    description: "Direct manufacturing allows us to eliminate third-party showrooms margins. We provide luxurious premium wooden interiors at fair, highly competitive prices.",
    iconName: "DollarSign"
  },
  {
    id: "delivery",
    title: "On-Time Delivery",
    description: "We hate infinite renovations. We adhere to a strict production timeline and deliver your finished woodwork on or before the agreed contract date.",
    iconName: "Clock"
  },
  {
    id: "installation",
    title: "Professional Installation",
    description: "Our in-house installation engineers fit your units without creating any mess. We handle leveling and custom wall mounts with absolute structural precision.",
    iconName: "Wrench"
  },
  {
    id: "satisfaction",
    title: "Customer Satisfaction",
    description: "Our work is shaped around your needs with clear planning and careful finishing from the first discussion onward.",
    iconName: "Heart"
  },
  {
    id: "modern",
    title: "Modern Designs",
    description: "We keep up with practical design trends and create layouts that suit the space and the way you use it.",
    iconName: "Sparkles"
  }
];

export const processSteps: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Free Consultation",
    description: "We sit down with you to explore your requirements, styling goals, and guide you through various wood options, materials, and configurations.",
    details: "Discuss layout, view previous work samples, select design directions, and map out rough budgetary parameters. Highly conversational and 100% free of obligation.",
    duration: "1 - 2 Hours"
  },
  {
    stepNumber: 2,
    title: "Site Measurement",
    description: "Our design engineers visit your home or commercial premises to take laser-precision measurements of walls, plumbing, and power points.",
    details: "Analyzing structural levels, mapping electrical sockets, identifying plumbing inlets/outlets, and double-checking wall straightness to prevent any fitment gaps.",
    duration: "1 Day"
  },
  {
    stepNumber: 3,
    title: "2D Design & Manufacturing",
    description: "We share 2D designs after confirming the order and after measurements are taken, then proceed with careful manufacturing.",
    details: "We prepare clear 2D layouts for review, select the right materials, and carry out precise cutting and fitting.",
    duration: "2 - 3 Weeks"
  },
  {
    stepNumber: 4,
    title: "Installation",
    description: "Our professional fitting team unboxes and securely installs the custom units, handles hardware alignments, and cleans up the completed space.",
    details: "Securing wall brackets, mounting soft-close cabinet hinges, leveling worktops, fine-tuning drawers, and performing final premium hand-polishing.",
    duration: "3 - 5 Days"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Kumar",
    location: "Adyar, Chennai",
    rating: 5,
    comment: "Excellent workmanship and beautiful modular kitchen! The team translated our ideas into reality with great attention to detail. The Hettich drawers are incredibly smooth.",
    projectType: "Complete Modular Kitchen",
    avatarUrl: testimonialAvatarOne
  },
  {
    id: "t2",
    name: "Ananya Krishnan",
    location: "Whitefield, Bangalore",
    rating: 5,
    comment: "Ebenezer Wood Works did an outstanding job on our walk-in wardrobe and bedroom interiors. Highly recommended for wardrobes and interior works. The gold profile detailing is exquisite!",
    projectType: "Luxury Bedroom & Wardrobes",
    avatarUrl: testimonialAvatarTwo
  },
  {
    id: "t3",
    name: "Suresh Subramaniam",
    location: "RSPuram, Coimbatore",
    rating: 5,
    comment: "Professional team with timely delivery. The finish quality and craftsmanship were excellent, and the overall detailing felt truly premium. Truly satisfied.",
    projectType: "Pooja Unit & Custom Furniture",
    avatarUrl: testimonialAvatarThree
  }
];
