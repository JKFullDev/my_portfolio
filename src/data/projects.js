import { t } from "../lang";

export const getProjects = () => [
  {
    title: t("projects.project1.title"),
    description: t("projects.project1.description"),
    image: "/proyecto1.png",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/JKFullDev/motoHelmet",
    link: "https://motohelmet.netlify.app/",
  },
  {
    title: t("projects.project2.title"),
    description: t("projects.project2.description"),
    image: "/proyecto2.png",
    tech: ["HTML5", "CSS3", "JavaScript", "API"],
    github: "https://github.com/JKFullDev/pentirist.git",
    link: "https://pentirist.vercel.app/",
  },
  {
    title: t("projects.project3.title"),
    description: t("projects.project3.description"),
    image: "/proyecto3.png",
    tech: ["HTML5", "CSS3", "JavaScript", "API"],
    github: "https://golden-giggle.vercel.app/",
    link: "https://golden-giggle.vercel.app/#home",
  },
];
