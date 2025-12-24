export interface Project {
    title: string;
    description: string;
    features: string[];
    contribution: string;
    tech: string[];
    links: {
      repo?: string;
      website?: string;
      video?: string;
    };
    date?: string;
    featured?: boolean;
  }
  
  
  export const projects: Project[] = [
      {
      title:"Optical Wireless Communication System",
      description:
        "An air-gapped file transfer system that establishes a unidirectional optical data link between devices using only a display and a webcam. This project implements a full custom networking stack to modulate binary data into visual signals, enabling secure communication without WiFi, Bluetooth, or physical cables.",
      features:[
        "Designed and built a full-stack air-gapped file transfer system using a computer screen (PHY) and webcam receiver, implementing a custom networking protocol from scratch.",
        "Engineered a reliable Data Link Layer using Stop-and-Wait ARQ, CRC-8 error detection, and custom packet framing to ensure 100% data integrity over a noisy optical medium.",
        "Developed a high-performance C++ receiver using OpenCV for real-time signal processing, implementing a finite state machine to parse binary streams and handle synchronization.",
        "Optimized transmission protocols by analyzing Nyquist sampling limits and implementing robust handshake mechanisms to handle blocking I/O constraints."
      ],
      contribution:
        "Architected and implemented the complete full-stack solution. Developed the JavaScript-based visual transmitter to handle binary file chunking and modulation, and programmed the C++ Computer Vision receiver to handle real-time signal demodulation, error correction, and file reconstruction.",
      tech:["C++", "OpenCV", "JavaScript", "Finite State Machines"],
      links: {
        repo: "https://github.com/Vipplynn/AirGapTransfer",
      },
      date:"Dec. 15, 2025 — Dec. 23, 2025",
      featured: true
    },
    {
      title: "Portfolio Website",
      description:
        "A one-page interactive portfolio to showcase my projects, experience, and background as an aspiring software developer. Designed with scalability and storytelling in mind, and built entirely with modern web tools.",
      features: [
        "Fully responsive one-page layout",
        "Modular and future-proof project and experience system",
        "Smooth navigation and interactive component structure",
      ],
      contribution:
        "Designed and built the site from scratch using React, Vite, and TailwindCSS v4. Integrated a scalable data model for projects and experience. Deployed using Vercel with GitHub CI integration.",
      tech: [
        "React", "TypeScript", "Tailwind CSS v4", "Vite", "Vercel", "GitHub"
      ],
      links: {
        repo: "https://github.com/Vipplynn/portfolio-site",
        website: "https://christian-cho-site.vercel.app/",
      },
      date:"May. 2025",
      featured: false
    },
    {
      title: "CookCompass",
      description:
        "A recipe discovery platform where users enter ingredients they have, and receive recipes they can make — with translation, filtering, and accessibility features.",
      features: [
        "Multilingual ingredient input and recipe translation",
        "Step-by-step recipe simplification",
        "Text-to-speech cooking instructions",
        "Ingredient-based filtering (e.g. vegetarian, no gluten)"
      ],
      contribution:
        "Developed core features including ingredient input with autocomplete, intelligent recipe search, and interactive recipe modals showing images, cook time, nutrition, and instructions. Designed and styled a clean, responsive UI with CSS, and enhanced usability through seamless keyboard and mouse interactions.",
      tech: [
        "React",
        "JavaScript",
        "Spoonacular API",
        "Google Translate API",
        "Google TTS",
        "CSS",
        "Jest",
        "Netlify"
      ],
      links: {
        website: "https://cookcompassapp.netlify.app/",
        video: "https://www.youtube.com/watch?v=tfTF-Vxc0tM"
      },
      date:"Jan. 23, 2025 — Apr. 8, 2025",
      featured: true
    },
    {
      title:"Jake's Journey",
      description:
        "A mind-bending 3D puzzle game built for the Mountain Madness 2024 hackathon. Play as Jake and rotate perspectives to solve hidden puzzles and traverse a challenging mountain path.",
      features:[
        "Directional camera system relative to player orientation",
        "Multi-perspective puzzle design",
        "Custom sound effects, music, and level assets",
        "Interactive puzzles with clues hidden via camera manipulation"
      ],
      contribution:
        "Programmed the relative movement and camera system in Unity, and helped design key puzzle mechanics. Produced original sound design and music using FL Studio.",
      tech:["Unity", "C#", "FL Studio"],
      links: {
        repo: "https://github.com/Masagoro1/PuzzleGame"
      },
      date:"Mar. 24, 2024 — Mar. 25, 2024",
      featured: true
    },
    {
      title:"Birge Adventure",
      description:
        "A fast-paced arcade-style game built for the Fall Hacks 2023 hackathon. Play as Birge, a leaf spirit free-falling through the sky. The longer you fall, the more points you earn — but you'll need to dodge obstacles and adapt with each rebirth.",
      features:[
        "Arcade-style gameplay with infinite free-fall scoring",
        "Obstacle-dodging system with WASD and arrow key controls",
        "Custom sound effects, music, and level assets",
        "Online leaderboard integrated with a Cloudflare-hosted static backend"
      ],
      contribution:
        "Composed the full game soundtrack and created all sound effects using FL Studio. Collaborated on gameplay mechanics and level design concepts.",
      tech:["Unity", "C#", "FL Studio", "Discord API", "GitHub API", "Cloudflare Pages"],
      links: {
        repo: "https://github.com/Masagoro1/FallHacks23",
        website: "https://jakeyee.com/landing",
      },
      date:"Oct. 21, 2023 — Oct. 23, 2023",
      featured: false
    },
  ];
  
  
