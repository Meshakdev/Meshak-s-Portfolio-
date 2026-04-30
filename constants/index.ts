import type { IconType } from "react-icons";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "C++",
    image: null,
    width: 100,
    height: 44,
  },
  {
    skill_name: "Python",
    image: null,
    width: 100,
    height: 44,
  },
] as const;

export const SOCIALS: Array<{
  name: string;
  icon: IconType;
  link: string;
}> = [];

export const FRONTEND_SKILL = [
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Supabase",
    image: null,
    width: 100,
    height: 44,
  },
  {
    skill_name: "Student Projects",
    image: null,
    width: 130,
    height: 44,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "GitHub",
    image: null,
    width: 100,
    height: 44,
  },
  {
    skill_name: "n8n",
    image: null,
    width: 100,
    height: 44,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "AI tools",
    image: null,
    width: 100,
    height: 44,
  },
] as const;

export const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    description:
      "A premium dark portfolio built with Next.js and Tailwind CSS to present my story, skills, and beginner-friendly web projects in a clean, responsive way.",
    image: "/projects/project-1.png",
    link: "#projects",
  },
  {
    title: "Local Business Website Demo",
    description:
      "A modern website concept for a local service business, focused on clear messaging, trust-building sections, strong contact calls to action, and mobile-first design.",
    image: "/projects/project-2.png",
    link: "#projects",
  },
  {
    title: "Restaurant Lead Generation Automation",
    description:
      "An automation idea for restaurants that captures inquiries, organizes leads, and connects simple forms with follow-up workflows using n8n and AI tools.",
    image: "/projects/project-3.png",
    link: "#projects",
  },
  {
    title: "AI Workspace / SaaS Dashboard Concept",
    description:
      "A dashboard concept for managing AI prompts, automations, client tasks, and website ideas in one practical workspace for small businesses.",
    image: "/projects/project-1.png",
    link: "#projects",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Explore",
    data: [
      {
        name: "About Meshak",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Skills",
        icon: null,
        link: "#skills",
      },
      {
        name: "Projects",
        icon: null,
        link: "#projects",
      },
      {
        name: "Contact",
        icon: null,
        link: "#contact",
      },
    ],
  },
  {
    title: "Focus",
    data: [
      {
        name: "Modern Websites",
        icon: null,
        link: "#projects",
      },
      {
        name: "AI Automation",
        icon: null,
        link: "#projects",
      },
      {
        name: "Local Business Tools",
        icon: null,
        link: "#projects",
      },
    ],
  },
  {
    title: "Personal",
    data: [
      {
        name: "BCA Student",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Portugal",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Photography & Guitar",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Bible Study",
        icon: null,
        link: "#about-me",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  contact: "#contact",
};
