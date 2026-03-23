import { PortfolioData } from "@/types";

export const portfolio: PortfolioData = {
  name: "Maximus Young",
  title: "Fullstack Developer",
  tagline: "I build fast, accessible web experiences that people actually use.",

  about: [
    "I'm a full-stack developer who builds things for the people around me. Over the past few years I've co-founded two startups with friends (one hit 1,400 users), built websites for my university's two student space teams, made a dictionary app for my brother's constructed language, and shipped a real-time party game for my friend group. I also interned at C&S Wholesale Grocers, where I built a mobile prototype with AI-powered OCR that hit 95%+ accuracy.",
    "I work mostly with React, Next.js, Node.js, TypeScript, and PostgreSQL. Finishing up my CS degree and math minor at Mississippi State in May 2026.",
    "Outside of code I play trombone (was a squad leader in MSU's marching band), speedsolve Rubik's cubes, and like to play tennis and soccer.",
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
      title: "IT Transportation Intern",
      company: "C&S Wholesale Grocers",
      url: "https://www.cswg.com",
      description:
        "Internship where I built a mobile prototype that scans package labels for delivery drivers — built to handle damaged labels, bad lighting, and different carrier formats.",
      tags: ["React", "Python", "REST APIs", "AI/ML", "OCR"],
    },
    {
      date: "Nov 2025 — Mar 2026",
      title: "Frontend Developer & Co-Founder",
      company: "Altab.ai",
      url: "https://altab.ai",
      description:
        "An AI coding platform where developers hand off tasks to autonomous agents. I co-founded it and worked on the app frontend and landing page.",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      date: "Feb 2024 — Mar 2025",
      title: "Software Developer & Co-Founder",
      company: "Adventurefy",
      url: null,
      description:
        "A productivity app that turns your to-do list into a game. Co-founded it with friends, hit 1,400 users in two months.",
      tags: ["React Native", "Supabase", "TypeScript"],
      note: "App sunset March 2025 — founding team moved on to new ventures",
    },
  ],

  projects: [
    {
      name: "Real-Time Multiplayer Web Game",
      timeline: "Jan 2025 — Present",
      liveUrl: "https://penorprompt.com/",
      description:
        "A party game where players write answers to prompts and everyone votes on which responses were written by AI or by humans.",
      tags: ["React", "Node.js", "Socket.IO", "Redis", "TypeScript", "Zod"],
    },
    {
      name: "CubeSat at MSU",
      timeline: "2025 — Present",
      liveUrl: "https://www.cubesatmsu.com/",
      description:
        "The official website for MSU's student satellite team, built with a headless CMS so future members can update content without a developer.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Conlang Dictionary",
      timeline: "May 2023 — May 2024",
      liveUrl: "https://conlang-site.vercel.app/",
      description:
        "My brother built an entire language and was managing it in a Google Doc. I built him a proper dictionary site for searching, filtering, and editing entries.",
      tags: ["React", "Next.js", "Tailwind CSS", "PostgreSQL", "REST API"],
    },
    {
      name: "Space Cowboys Club Website",
      timeline: "2024",
      liveUrl: "https://www.spacecowboysmsu.com/",
      description:
        "The official website for MSU's competitive rocketry team.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
  ],
};
