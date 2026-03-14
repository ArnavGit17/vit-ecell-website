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
    name: "Tejas Pawar",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    linkedin: "https://linkedin.com/in/#",
    bgGradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: "2",
    name: "Arnav Tripathi",
    role: "CFO Head and Marketing Head",
    image: "https://ibb.co/VcN5bNm1",
    linkedin: "www.linkedin.com/in/arnav-tripathi-174150197",
    bgGradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: "3",
    name: "Kedar Sawant",
    role: "CTO(Technical Research)",
    image: "https://ibb.co/mVN0MBw5",
    linkedin: "https://www.linkedin.com/in/kedar-sawant-891968340/?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    bgGradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "4",
    name: "Ved Songire",
    role: "CTO (Documentation)",
    image: "https://ibb.co/mCRHFQQm",
    linkedin: "https://www.linkedin.com/in/ved-songire-768a9a32a/",
    bgGradient: "from-orange-500/20 to-red-500/20",
  },
  {
    id: "5",
    name: "Soham Dugade",
    role: "Networking Head",
    image: "https://ibb.co/4RvdNtsb",
    linkedin: "https://www.linkedin.com/in/soham-dugade-364520332/",
    bgGradient: "from-blue-400/20 to-indigo-500/20",
  },
  {
    id: "6",
    name: "Pakhi Katre",
    role: "CFO(Co-Head)",
    image: "https://ibb.co/S73TmSB3",
    linkedin: "https://www.linkedin.com/in/pakhi-katre-563536284/",
    bgGradient: "from-pink-500/20 to-rose-500/20",
  }
];
