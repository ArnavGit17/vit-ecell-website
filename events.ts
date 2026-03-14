export interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  status: "upcoming" | "past";
  registrationLink?: string;
}

export const eventsData: EventItem[] = [
  {
    id: "e1",
    title: "Startup Nexus 2026",
    date: "April 15, 2026",
    description: "Our flagship annual entrepreneurship summit bringing together founders, investors, and students for two days of networking and learning.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    status: "upcoming",
    registrationLink: "https://example.com/register/nexus",
  },
  {
    id: "e2",
    title: "Pitch Perfect Pitching Session",
    date: "May 2, 2026",
    description: "Got an idea? Pitch it in front of our seasoned jury and get a chance to be incubated directly under the VIT E-Cell ecosystem.",
    image: "https://images.unsplash.com/photo-1559223607-a43c980c6928?w=800&q=80",
    status: "upcoming",
    registrationLink: "https://example.com/register/pitch",
  },
  {
    id: "e3",
    title: "Founders Talk: Building from scratch",
    date: "March 10, 2026",
    description: "An interactive session with a prominent alumni entrepreneur who scaled their college startup into a multi-million dollar business.",
    image: "https://images.unsplash.com/photo-1475721025505-117a3a99267e?w=800&q=80",
    status: "past",
  },
  {
    id: "e4",
    title: "Tech Innovation Hackathon",
    date: "February 20, 2026",
    description: "24 hours of non-stop coding, innovating and building MVPs to solve real world problems in FinTech and EdTech sectors.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    status: "past",
  }
];
