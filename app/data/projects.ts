export interface ProjectData {
  title: string;
  description: string;
  highlights: string[];
  images: string[];
  tags: string[];
  link?: string;
  github?: string;
}

export const featuredProjects: ProjectData[] = [
  {
    title: "Featured Project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    highlights: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam, quis nostrud exercitation",
      "Duis aute irure dolor in reprehenderit in voluptate velit"
    ],
    images: ["", "", ""],
    tags: ["React", "TypeScript", "Node.js", "AWS"],
    link: "#",
    github: "#"
  }
];

export const otherProjects: ProjectData[] = [
  {
    title: "Project Two",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    highlights: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam, quis nostrud exercitation"
    ],
    images: [""],
    tags: ["Python", "AWS", "Docker"],
    github: "#"
  },
  {
    title: "Project Three",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    highlights: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam, quis nostrud exercitation"
    ],
    images: [""],
    tags: ["Ruby on Rails", "PostgreSQL"],
    link: "#",
    github: "#"
  },
  {
    title: "Project Four",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    highlights: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam, quis nostrud exercitation"
    ],
    images: [""],
    tags: ["React Native", "Firebase"],
    link: "#"
  },
  {
    title: "Project Five",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    highlights: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam, quis nostrud exercitation"
    ],
    images: [""],
    tags: [".NET", "Azure", "SQL Server"],
    github: "#"
  }
];
