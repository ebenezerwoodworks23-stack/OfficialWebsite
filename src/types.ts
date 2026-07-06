export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  imageUrl: string;
  features: string[];
  dimensionsLabel?: string;
  materials?: string[];
}

export interface GalleryProject {
  id: string;
  title: string;
  category: "Kitchens" | "Wardrobes" | "Bedrooms" | "TV Units" | "Cupboards" | "Office Interiors" | "All";
  imageUrl: string;
  location?: string;
  year?: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  projectType: string;
  avatarUrl: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  details: string;
  duration?: string;
}

export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  serviceRequired: string;
  message: string;
}
