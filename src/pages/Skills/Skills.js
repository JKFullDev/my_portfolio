import "./Skills.css";
import { cleanPage } from "../../utils/cleanPage";
import { t } from "../../lang"; // Asegúrate de que sea 'lang'

export const Skills = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  main.innerHTML = `
    <section class="skills">
      <h1>${t("skills.title")}</h1>
      <div class="skills-container">
        <div class="skill-category">
          <h2>${t("skills.categories.programming")}</h2>
          <ul class="skill-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div class="skill-category">
          <h2>${t("skills.categories.platforms")}</h2>
          <ul class="skill-list">
            <li>GitHub</li>
            <li>AWS</li>
          </ul>
        </div>
        <div class="skill-category">
          <h2>${t("skills.categories.frameworks")}</h2>
          <ul class="skill-list">
            <li>React <span class="learning">(Learning)</span></li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div class="skill-category">
          <h2>${t("skills.categories.tools")}</h2>
          <ul class="skill-list">
            <li>VS Code</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div class="skill-category">
          <h2>${t("skills.categories.learning")}</h2>
          <ul class="skill-list">
            <li>React <span class="learning">(Learning)</span></li>
            <li>PHP <span class="learning">(Learning)</span></li>
          </ul>
        </div>
      </div>
    </section>
  `;
};