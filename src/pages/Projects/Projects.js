import "./Projects.css";
import { cleanPage } from "../../utils/cleanPage";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { Divider } from "../../components/Divider/Divider";
import { t } from "../../lang";

export const Projects = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  // Inserta estructura base
  main.innerHTML = `
    <section class="projects">
      <h2>${t("projects.title")}</h2>
      <div class="projects-container"></div>
    </section>
  `;

  // Inserta Divider justo después del h2 (fuera del innerHTML inicial)
  const h2 = main.querySelector(".projects h2");
  h2.insertAdjacentHTML("afterend", Divider());

  // Pintar las cards
  const container = main.querySelector(".projects-container");
  projects.forEach((project) => {
    const figure = document.createElement("figure");
    figure.innerHTML = ProjectCard(project);
    container.appendChild(figure);
  });
};
