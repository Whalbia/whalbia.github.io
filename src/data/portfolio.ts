import { PortfolioData } from "@/types";

export const portfolio: PortfolioData = {
  name: "Maximus Young",
  title: "Fullstack Developer",
  tagline: "I build fast, accessible web experiences that people actually use.",

  about: [
    "I like building things that real people actually use — websites for clubs and local organizations, tools for friends and family, interactive experiences that bring people together. If someone has a problem, I want to build the thing that solves it.",
    "I'm finishing up my Computer Science degree at Mississippi State (with a math minor) in May 2026 and looking for frontend, fullstack, or app development roles where I can ship work that matters.",
  ],

  links: {
    github: "https://github.com/Whalbia",
    linkedin: "https://www.linkedin.com/in/maximus-young",
    email: "maxyoung0320@gmail.com",
    phone: "",
    resume: "/resume.pdf",
  },

  experience: [
    {
      date: "May — Aug 2025",
      title: "Software Engineering Intern",
      company: "C&S Wholesale Grocers",
      url: "https://www.cswg.com",
      description:
        "Built a full-stack label-scanning application with AI-powered image recognition and OCR-based delivery scanning to improve product trackability.",
      tags: ["React", "Python", "REST APIs", "AI/ML", "OCR"],
    },
    {
      date: "Nov 2025 — Mar 2026",
      title: "Frontend Developer & Co-Founder",
      company: "Altab.ai",
      url: "https://altab.ai",
      description:
        "Built the company landing page and developed key frontend features for an AI startup. Focused on responsive design and translating product vision into polished interfaces.",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      note: "Landing page designed and developed by me",
    },
    {
      date: "Feb 2024 — Mar 2025",
      title: "Software Developer & Co-Founder",
      company: "Adventurefy",
      url: null,
      description:
        "Co-founded a productivity gamification app. Built cross-platform UIs in React Native with a Supabase backend handling auth, real-time updates, and data storage.",
      tags: ["React Native", "Supabase", "TypeScript"],
      note: "App sunset March 2025 — founding team moved on to new ventures",
    },
  ],

  projects: [
    {
      name: "Conlang Dictionary",
      timeline: "May 2023 — May 2024",
      liveUrl: "https://conlang-site.vercel.app/",
      description:
        "A full-stack web app for managing a constructed language with 1,000+ words. PostgreSQL backend with a RESTful API for searching, filtering, and inserting entries.",
      tags: ["React", "Next.js", "Tailwind CSS", "PostgreSQL", "REST API"],
      caseStudy: {
        problem:
          "My brother built a complete constructed language with over 1,000 words, each with 10+ attributes (part of speech, pronunciation, etymology, grammar rules). He was managing it all in a spreadsheet — filtering was painful, adding entries was error-prone, and there was no way to search intelligently.",
        approach:
          "I built a full-stack app with Next.js on the frontend and PostgreSQL on the backend, designing an optimized relational schema that could handle the complex attribute structure. I wrote a complete RESTful API with endpoints for querying, filtering across multiple attributes, and inserting new words and grammar rules.",
        challenges:
          "Designing the database schema was the hardest part — a constructed language doesn't map neatly to a standard dictionary structure. I had to balance normalization with query performance, especially for the multi-attribute filtering. I also had to make the UI intuitive enough for a non-developer to use daily.",
        results:
          "1,000+ records managed through a clean interface with fast, complex filtering. My brother uses it regularly to expand and maintain his language.",
        wouldChange:
          "I'd add full-text search with PostgreSQL's tsvector for fuzzier matching, and implement optimistic UI updates for a snappier editing experience.",
      },
    },
    {
      name: "Real-Time Multiplayer Web Game",
      timeline: "Jan 2025 — Present",
      liveUrl: "https://penorprompt.com/",
      description:
        "A real-time multiplayer party game with lobbies, WebSocket communication, Redis-powered state management, and reconnection handling.",
      tags: ["React", "Node.js", "Socket.IO", "Redis", "TypeScript", "Zod"],
      caseStudy: {
        problem:
          "I wanted to build a real-time game that handled the hard parts most tutorials skip — disconnections, state consistency, cheating prevention, and graceful degradation under load.",
        approach:
          "I used Socket.IO for WebSocket communication with 18+ validated message types, Redis for ephemeral game state with atomic pipeline operations, and implemented room-based player isolation with session persistence. The entire input layer uses Zod schema validation.",
        challenges:
          "The reconnection system was the toughest part — players needed to rejoin mid-game with full state restoration within a 60-second window, while the server maintained timeout backups so abandoned games wouldn't persist forever. Getting the atomic Redis pipeline operations right to prevent race conditions during state transitions took significant iteration.",
        results:
          "A fully functional multiplayer game with XSS prevention, paste-blocking hooks, per-player rate limiting, and a lobby system that handles room creation, joining, and cleanup cleanly.",
        wouldChange:
          "I'd explore using Redis Streams instead of pub/sub for more reliable event ordering, and add load testing to verify behavior under concurrent connections.",
      },
    },
    {
      name: "CubeSat at MSU",
      timeline: "2025 — Present",
      liveUrl: "https://www.cubesatmsu.com/",
      description:
        "The official website for MSU's student satellite team — mission pages, interactive timelines, and a CMS for non-technical team members to update content.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      caseStudy: {
        problem:
          "MSU's CubeSat team needed a public-facing website that could impress corporate sponsors and university stakeholders while still feeling authentically tied to Mississippi State's identity. On top of that, the team roster rotates every year — future members would need to update the site without knowing how to code.",
        approach:
          "I designed the site to balance professionalism with school spirit. The layout is clean and corporate-friendly for sponsor sections, but incorporates MSU's maroon as an accent color throughout to keep it grounded in the team's identity. I integrated a headless CMS so non-developers could update mission details, team rosters, and news posts through a simple admin interface.",
        challenges:
          "The hardest part was the visual balancing act — too much maroon and it looks like a student club page, too little and it loses the MSU connection. I went through several iterations to find the right ratio of neutral professional tones with strategic maroon accents. The CMS integration was another challenge: I needed a system simple enough for someone with zero coding experience to update content, but flexible enough to handle complex layouts like mission timelines and objectives grids.",
        results:
          "A professional site that sponsors take seriously while still clearly representing MSU. The CMS lets any team member update content through a dashboard — no code, no deployments, no bottlenecks on the one person who built it.",
        wouldChange:
          "I'd add role-based access to the CMS so team leads can approve changes before they go live, and build a preview mode so editors can see exactly how their changes will look on the actual site.",
      },
    },
  ],
};
