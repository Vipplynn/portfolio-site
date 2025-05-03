export interface Experience {
  title: string;
  organization: string;
  date: string;
  description: string;
  tags?: string[];
}

export const experience: Experience[] = [
  {
    title: "STEM Instructor",
    organization: "SFU Science Alive",
    date: "Jun. 2024 — Sep. 2024",
    description:
      "Taught and facilitated STEM lessons and hands-on activities for children in grades 1–8. Managed classroom logistics and ensured safety during experiments. Adapted teaching approaches to accommodate diverse learning styles.",
    tags: ["STEM", "Teaching", "Leadership", "Time Management"]
  },
  {
    title: "Warehouse Associate",
    organization: "Tai Beauty Group",
    date: "Jun. 2023 — Aug. 2023",
    description:
      "Created hundreds of kilograms of bath bombs from scratch, bottled lotions, packaged salts, and handled shipping. Maintained quality control and efficient product flow in a high-volume environment.",
    tags: ["Manufacturing", "Teamwork", "Inventory"]
  },
  {
    title: "3rd Place – Mountain Madness Hackathon 2024",
    organization: "CSSS at SFU",
    date: "Mar. 2024",
    description:
      "Built a 3D puzzle game in Unity in a 48-hour hackathon. Designed camera-relative movement, composed music in FL Studio, and contributed to game design and polish.",
    tags: ["Hackathon", "Unity", "Game Dev"]
  },
  {
    title: "1st Place – Bank Hacks Hackathon 2024",
    organization: "DNS Club at SFU",
    date: "Mar. 2024",
    description:
      "Designed and developed a real-time banking system in Python to handle debit and credit transactions with fast, accurate updates. Implemented client onboarding to support account creation and management. Built a packet collection system to retrieve and display user data from a centralized server.",
    tags: ["Hackathon", "Python", "Backend Development"]
  },
  {
    title: "Winner – Fall Hacks Hackathon 2023",
    organization: "CSSS at SFU",
    date: "Oct. 2023",
    description:
      "Created Birge Adventure, a free-falling arcade game. Designed and composed the soundtrack, collaborated on level design, and contributed ideas related to game flow and player progression.",
    tags: ["Hackathon", "Game Audio", "Creative Design"]
  }
];
