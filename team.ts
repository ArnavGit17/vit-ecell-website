export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
  bgGradient: string;
}

export const teamData: TeamMember[] = [
  {
    id: "1",
    name: "Aarav Sharma",
    role: "President",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com/in/#",
    bgGradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: "2",
    name: "Priya Desai",
    role: "Vice President",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com/in/#",
    bgGradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "3",
    name: "Rohan Gupta",
    role: "Tech Head",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com/in/#",
    bgGradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "4",
    name: "Sneha Patel",
    role: "Marketing Head",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com/in/#",
    bgGradient: "from-orange-500/20 to-red-500/20",
  },
  {
    id: "5",
    name: "Karan Mehta",
    role: "Finance Head",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com/in/#",
    bgGradient: "from-blue-400/20 to-indigo-500/20",
  },
  {
    id: "6",
    name: "Ananya Singh",
    role: "Events Head",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com/in/#",
    bgGradient: "from-pink-500/20 to-rose-500/20",
  }
];
