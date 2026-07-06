import { Service, GalleryProject, Testimonial, FeatureCard, ProcessStep } from "./types";

export const servicesData: Service[] = [
  {
    id: "modular-kitchen",
    title: "Modular Kitchen",
    shortDescription: "Sleek, highly functional premium modular kitchens engineered for smooth operation and luxury appearance.",
    longDescription: "Our premium modular kitchens blend state-of-the-art European design with practical ergonomic layouts. We specialize in custom configurations (L-shaped, U-shaped, parallel, and island designs) utilizing moisture-resistant and boiling-water-resistant plywood, high-gloss acrylic finishes, elegant PU finishes, and soft-close hardware from premium brands like Hettich and Blum.",
    iconName: "ChefHat",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
    features: [
      "Waterproof & Heat-Resistant cabinetry (BWP Plywood)",
      "Premium soft-close drawers and pull-outs",
      "Custom layouts (Island, Parallel, L & U Shapes)",
      "Integrated smart organizers & corner solutions",
      "Quartz or premium granite countertops"
    ],
    materials: ["BWP Marine Plywood", "High-Gloss Acrylic", "Natural Wood Veneer", "Quartz Surface"]
  },
  {
    id: "wardrobes",
    title: "Wardrobes",
    shortDescription: "Custom luxury wardrobes, sliding closets, and walk-in dressing areas tailored to maximize your storage space.",
    longDescription: "Our custom wardrobes are designed to reflect your personal style while optimizing every square inch of storage. From space-saving sliding door systems to sprawling walk-in closets, we integrate customized drawer dividers, sensor LED lighting, pull-out shoe racks, and premium glass door designs to deliver a boutique-like dressing experience.",
    iconName: "FolderOpen",
    imageUrl: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800",
    features: [
      "Space-saving sliding doors & luxurious open layouts",
      "Internal motion-activated LED sensory lighting",
      "Customized jewellery drawers, pull-out trousers, and shoe racks",
      "Toughened tinted glass doors or lacquered glass finishes",
      "Heavy-duty long-term German sliding mechanisms"
    ],
    materials: ["MDF / HDMR boards", "Tinted Profiling Glass", "Soft Touch Laminates", "Walnut Veneer"]
  },
  {
    id: "wooden-cupboards",
    title: "Wooden Cupboards",
    shortDescription: "Elegant, durable wood storage cupboards for living rooms, kitchens, study areas, and hallway showcases.",
    longDescription: "Store with elegance. Our custom wooden cupboards combine heavy-duty stability with exquisite wooden textures. Perfect as dining room sideboards, library bookshelves, or elegant hallway vitrines, they are crafted to elevate your home storage into a design statement.",
    iconName: "Layers",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    features: [
      "Custom depth and adjustable shelving grids",
      "Sturdy framework resistant to heavy loading",
      "Concealed hinge designs and premium designer handles",
      "Glass display panels with built-in spotlights"
    ],
    materials: ["Commercial Blockboard", "Natural Oak Laminates", "Toughened Fluted Glass"]
  },
  {
    id: "tv-units",
    title: "TV Units",
    shortDescription: "Bespoke modern entertainment consoles, wall paneling, and media centers with hidden wire management.",
    longDescription: "Upgrade your entertainment experience. We create focal-point TV consoles featuring stunning wooden wall cladding (including slatted and fluted patterns), floating cabinets, hidden cable routing channels, and ambient LED backlighting that gives your living space a dramatic, luxurious theater feel.",
    iconName: "Tv",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    features: [
      "Sleek floating consoles with handleless press-to-open doors",
      "Elegant fluted panels or marble-finish laminates backdrops",
      "Complete wire integration - no messy visible cables",
      "Integrated shelves for decorative showpieces and speakers"
    ],
    materials: ["Teak Veneer", "Charcoal Louver Panels", "Premium PU Paint Finishes"]
  },
  {
    id: "bedroom-interiors",
    title: "Bedroom Interiors",
    shortDescription: "Unmatched serenity with custom wooden beds, headboards, nightstands, and integrated vanity units.",
    longDescription: "Transform your bedroom into a luxurious sanctuary. We construct custom bed frames (including king and queen size hydraulic storage beds), floor-to-ceiling headboards upholstered in premium fabrics or warm wood grains, suspended nightstands, and matching custom vanities.",
    iconName: "Bed",
    imageUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800",
    features: [
      "Hydraulic lift-up storage frames for heavy bedding",
      "Custom acoustic or slatted wood headboards",
      "Matching bedside drawer tables with soft glide channels",
      "Sophisticated dressing tables with high-reflection silver mirrors"
    ],
    materials: ["Premium Solid Teakwood", "Plush Velveteen Fabric", "Warm Walnut Liners"]
  },
  {
    id: "office-interiors",
    title: "Office Interiors",
    shortDescription: "Professional workspaces featuring executive desks, meeting tables, acoustic partitions, and filing credenzas.",
    longDescription: "Productivity meets professional luxury. We design and manufacture modern ergonomic workspace elements including solid wood executive tables, sleek laminate partition walls, and secure document storage credenzas suitable for both home offices and large corporate settings.",
    iconName: "Briefcase",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    features: [
      "Ergonomic wire grommets and power-strips integration",
      "Filing cabinets with central heavy-duty locking systems",
      "Conference tables with built-in mic & HDMI wire pathways",
      "Modern wooden vertical slats partitions"
    ],
    materials: ["High-Pressure Laminate", "Steel Reinforcements", "Veneered Ply"]
  },
  {
    id: "wooden-partitions",
    title: "Wooden Partitions",
    shortDescription: "Aesthetic slatted dividers, CNC-carved panels, and jali screens to separate foyer, dining, and living rooms.",
    longDescription: "Divide spaces gracefully without blocking light. Our custom partition grids, slatted wooden pillars, and decorative wooden CNC boards add structure, privacy, and architectural richness to foyer entryways, dining halls, and master suites.",
    iconName: "Columns",
    imageUrl: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
    features: [
      "Aesthetic vertical slatted layouts or intricate classic carvings",
      "Includes display cubbies for books, vases, or souvenirs",
      "Sturdy anchor system for ceiling-to-floor security",
      "Integrated planter boxes for indoor greenery"
    ],
    materials: ["Solid Rubberwood", "Premium Teakwood Logs", "PU Matte Finish Clearcoat"]
  },
  {
    id: "custom-furniture",
    title: "Custom Furniture",
    shortDescription: "Bespoke handcrafted chairs, tables, consoles, and dressers made exactly to your dimensions and design taste.",
    longDescription: "Don't settle for mass-market imports. We handcraft unique heirloom-quality furniture pieces based on your reference sketches or Pinterest boards. Every joint is structurally mortised and tenoned by master artisans for lifelong durability.",
    iconName: "Wrench",
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    features: [
      "Lifetime structural guarantee on custom joint frameworks",
      "Selection of premium hardwoods (Teak, Rosewood, Mahogany)",
      "Bespoke staining matching existing home colors",
      "Handcrafted hand-rubbed oil and wax premium finishes"
    ],
    materials: ["Solid Teakwood", "Rosewood", "Premium Walnut Oil Finish"]
  },
  {
    id: "dining-tables",
    title: "Dining Tables",
    shortDescription: "Stunning solid wood family dining tables with artistic bases and matching upholstered high-back chairs.",
    longDescription: "The heart of your home dining area. We fabricate luxurious solid wood dining tables that accommodate 4, 6, 8, or 12 diners. Choose between warm natural live-edge slab designs or modern geometrical bases paired with custom crafted chairs.",
    iconName: "Utensils",
    imageUrl: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=800",
    features: [
      "Durable heat-proof & chemical-proof protective table finishes",
      "Matching dining chairs and upholstered benches",
      "Artistic geometric legs in powder-coated steel or solid teak",
      "Live-edge options displaying natural timber curvature"
    ],
    materials: ["Indian Rosewood (Sheesham)", "Solid White Ash Wood", "Clear Epoxy Resin"]
  },
  {
    id: "beds",
    title: "Beds",
    shortDescription: "Heirloom-grade teakwood beds with premium headboards and smart under-bed hydraulic storage chambers.",
    longDescription: "A healthy sleep starts with a stable bed. Our beds are constructed with solid internal grid structures to ensure squeak-free stability. Featuring comfortable premium fabric cushions on headboards and reliable pneumatic storage lifters.",
    iconName: "BedDouble",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    features: [
      "Hydraulic lifters from world-class brands",
      "Anti-creak joints reinforced with steel brackets",
      "Ergonomic curved back-tilts on headboards for reading",
      "Integrated side ledges with USB charging docks"
    ],
    materials: ["Solid Teakwood Frame", "Laminated Marine Ply Insides", "Anti-Rust steel bracket joints"]
  },
  {
    id: "pooja-units",
    title: "Pooja Units",
    shortDescription: "Sacred home temple shrines exquisitely carved in teakwood with integrated drawers and brass fixtures.",
    longDescription: "Create a peaceful sanctuary for daily prayers. Our customized Pooja Units combine traditional wood carvings with modern aesthetics. They include warm hidden spot illumination, drawers for incense and scriptures, slide-out brass plates, and beautiful CNC carved jali doors.",
    iconName: "Compass",
    imageUrl: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800",
    features: [
      "Exquisite floral or geometric CNC laser-cut wood patterns",
      "Pull-out drawers for holy items and prayer books",
      "Dedicated sliding brass plate for lighting oil diyas",
      "Spacious layouts featuring backlighting for a divine halo effect"
    ],
    materials: ["Solid Burma Teak", "Pure Brass Fittings", "Acrylic Light Diffusers"]
  },
  {
    id: "commercial-interiors",
    title: "Commercial Interiors",
    shortDescription: "Turnkey wooden fixtures for luxury showrooms, fine cafes, dental clinics, and high-end retail spots.",
    longDescription: "Enhance your customer's journey. We build highly durable reception desks, retail display shelves, wood wall panelings, and luxury booths designed to handle heavy commercial traffic while keeping a premium, high-status presentation.",
    iconName: "Building",
    imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
    features: [
      "Ultra-durable, scratch-proof laminates and metals integration",
      "Customized cash billing counters and back-wall showcases",
      "Branded logo engraving into natural wood surfaces",
      "Quick off-site manufacturing and rapid on-site assembly"
    ],
    materials: ["Fire-Retardant Ply", "Stainless Steel", "Industrial Toughened Glass"]
  },
  {
    id: "complete-home-interiors",
    title: "Complete Home Interiors",
    shortDescription: "Coordinated whole-home interior transformations: Foyer, Living, Dining, Kitchen, & Bedroom interiors.",
    longDescription: "Enjoy a stress-free transformation. We take complete charge of your empty villa or apartment, designing a unified wooden color scheme and material flow across all rooms. Includes lighting plans, cabinetry, loose furniture, and custom cladding.",
    iconName: "Home",
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800",
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
    title: "Luxury Quartz Island Kitchen",
    category: "Kitchens",
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
    location: "ECR, Chennai",
    year: "2025",
    description: "An open L-shaped kitchen featuring a spacious central dining island, textured walnut shutters, and an exquisite white marble countertop backdrop."
  },
  {
    id: "proj2",
    title: "Sleek Matte Acrylic Modular Kitchen",
    category: "Kitchens",
    imageUrl: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800",
    location: "Whitefield, Bangalore",
    year: "2026",
    description: "A highly modern kitchen design utilizing premium water-resistant ply with champagne matte acrylic sheets and smart automated lift-up upper cabinet hinges."
  },
  {
    id: "proj3",
    title: "Warm Oak Fitted Sliding Wardrobe",
    category: "Wardrobes",
    imageUrl: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=800",
    location: "RSPuram, Coimbatore",
    year: "2025",
    description: "Floor-to-ceiling wooden closet integrated with space-optimizing sliding doors, custom full-length dressing mirror, and internally illuminated drawers."
  },
  {
    id: "proj4",
    title: "Sophisticated Profile Glass Dressing Area",
    category: "Wardrobes",
    imageUrl: "https://images.unsplash.com/photo-1558882224-cca166733365?auto=format&fit=crop&q=80&w=800",
    location: "Anna Nagar, Chennai",
    year: "2026",
    description: "An elegant master bedroom wardrobe styled with rose gold aluminum frame profile doors, tinted glass panels, and deep velvet felt-lined watch organizers."
  },
  {
    id: "proj5",
    title: "Walnut Fluted Headboard Bedroom",
    category: "Bedrooms",
    imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800",
    location: "Adyar, Chennai",
    year: "2025",
    description: "A gorgeous master bedroom transformation featuring a full-width wall panelling in warm walnut, floating matching side table drawers, and a grand bed frame."
  },
  {
    id: "proj6",
    title: "Teakwood Hydraulic King Storage Bed",
    category: "Bedrooms",
    imageUrl: "https://images.unsplash.com/photo-1617806118233-18e1db207faf?auto=format&fit=crop&q=80&w=800",
    location: "Salem, Tamil Nadu",
    year: "2026",
    description: "A hand-polished Burma teakwood king-size bed equipped with heavy-duty twin pneumatic cylinders for accessible and generous storage underneath."
  },
  {
    id: "proj7",
    title: "Premium Living Floating TV Unit",
    category: "TV Units",
    imageUrl: "https://images.unsplash.com/photo-1593696130897-30e1e26086f2?auto=format&fit=crop&q=80&w=800",
    location: "KK Nagar, Madurai",
    year: "2025",
    description: "A minimalist floating media console in oak and charcoal matte finish, backed with matching vertical wooden slats and warm ambient LED strips."
  },
  {
    id: "proj8",
    title: "Slat-Clad Television Panel & Console",
    category: "TV Units",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    location: "Velachery, Chennai",
    year: "2026",
    description: "High-end television media wall styled with beautiful vertical real-wood slats, integrated quartz-finished console block, and hidden wires system."
  },
  {
    id: "proj9",
    title: "Bespoke Hallway Crockery Cupboard",
    category: "Cupboards",
    imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
    location: "Thillai Nagar, Trichy",
    year: "2025",
    description: "A custom storage and crockery display showcase, boasting warm yellow interior spotlights, adjustable glass shelves, and elegant gold-plated handles."
  },
  {
    id: "proj10",
    title: "Contemporary Mahogany Pantry Cupboard",
    category: "Cupboards",
    imageUrl: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800",
    location: "Nungambakkam, Chennai",
    year: "2026",
    description: "Heavy-duty modular kitchen pantry storage cupboard, styled with dark rich mahogany wood grains and soft-close pull-out metal basket shelves."
  },
  {
    id: "proj11",
    title: "CEO Executive Wooden Table Setup",
    category: "Office Interiors",
    imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
    location: "Indiranagar, Bangalore",
    year: "2025",
    description: "A high-status executive table crafted in rich oak veneer, featuring concealed power sockets, wire routing, leather desk mat, and matching drawer cabinet."
  },
  {
    id: "proj12",
    title: "Bespoke Conference Room Table",
    category: "Office Interiors",
    imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    location: "Anna Salai, Chennai",
    year: "2026",
    description: "A spectacular 14-foot veneer meeting table engineered with geometric support legs, built-in presentation connections, and an oil-rubbed premium surface finish."
  }
];

export const whyChooseUsData: FeatureCard[] = [
  {
    id: "quality",
    title: "Premium Quality Materials",
    description: "We use top-grade BWP Marine Plywood, genuine Burmese Teakwood, Indian Rosewood, and high-pressure durable laminates to guarantee absolute structural integrity.",
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
    description: "Our job isn't finished until you are completely in love with your home space. We offer robust multi-year warranties and swift after-sales support.",
    iconName: "Heart"
  },
  {
    id: "modern",
    title: "Modern Designs",
    description: "We keep up with international design trends. From minimal German modular kitchens to Italian walk-in closets, we bring elite world-class styles to your home.",
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
    title: "3D Design & Manufacturing",
    description: "We create full 3D visual walkthrough renders. Once approved, we manufacture the cabinets in our state-of-the-art facility using precise machinery.",
    details: "Iterate on the 3D interior design till you are fully satisfied. We select the best plywood, carry out structural edge-banding, and execute high-precision cutting.",
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
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "t2",
    name: "Ananya Krishnan",
    location: "Whitefield, Bangalore",
    rating: 5,
    comment: "Ebenezer Wood Works did an outstanding job on our walk-in wardrobe and bedroom interiors. Highly recommended for wardrobes and interior works. The gold profile detailing is exquisite!",
    projectType: "Luxury Bedroom & Wardrobes",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "t3",
    name: "Suresh Subramaniam",
    location: "RSPuram, Coimbatore",
    rating: 5,
    comment: "Professional team with timely delivery. I was worried about wood finishing but their natural teakwood hand-polish on our dining table and pooja unit is incredibly premium. Truly satisfied.",
    projectType: "Pooja Unit & Custom Furniture",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  }
];
