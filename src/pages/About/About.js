import "./About.css";
import { cleanPage } from "../../utils/cleanPage";
import { t } from "../../lang";

export const About = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="about">
      <div class="about-text">
        <p>${t("about.description")}</p>
      </div>
      <div class="cv-preview">
        <a href="/CV-JuanCarlosAlonso.pdf" target="_blank" rel="noopener noreferrer" download>
          <img src="/cv-thumbnail.png" alt="Miniatura del currículum" class="cv-thumbnail" />
          <div class="cv-download-text">${t("about.cv")}</div>
        </a>
      </div>
    </section>
  `;
};