export interface StartupItem {
  id: string;
  name: string;
  founder: string;
  description: string;
  logo: string;
  website: string;
  industry: string;
}

export const startupsData: StartupItem[] = [
  {
    id: "s1",
    name: "EduConnect",
    founder: "Rahul Verma",
    description: "A platform bridging the gap between rural students and metropolitan tutors through low-bandwidth video tech.",
    logo: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=200&h=200&fit=crop",
    website: "https://example.com",
    industry: "EdTech",
  },
  {
    id: "s2",
    name: "EcoDeliver",
    founder: "Sanya Kapoor",
    description: "Sustainable hyper-local delivery service utilizing a fleet of electric vehicles and optimized routing algorithms.",
    logo: "https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?w=200&h=200&fit=crop",
    website: "https://example.com",
    industry: "Logistics",
  },
  {
    id: "s3",
    name: "FinEase",
    founder: "Kunal Shah",
    description: "Micro-investing platform tailored for college students to begin building their financial portfolio with as little as ₹100.",
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=200&fit=crop",
    website: "https://example.com",
    industry: "FinTech",
  },
  {
    id: "s4",
    name: "HealthSync",
    founder: "Divya Nair",
    description: "AI-driven wellness application that synchronizes diet, exercise, and mental health metrics for holistic well-being tracking.",
    logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200&h=200&fit=crop",
    website: "https://example.com",
    industry: "HealthTech",
  }
];
