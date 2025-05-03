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
      date: "Summer 2023",
      description: "Taught hands-on science workshops for kids aged 8–12.",
      tags: ["Education", "Public Speaking"],
    },
    {
      title: "Hackathon Winner",
      organization: "Mountain Madness 2024",
      date: "Mar 2024",
      description: "Won 3rd place for a 3D Unity game developed in 48 hours.",
      tags: ["Game Dev", "Teamwork"],
    },
  ];
  