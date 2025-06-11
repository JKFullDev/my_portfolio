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
          <h2>${t("skills.categories.webDevelopment")}</h2>
          <ul class="skill-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div class="skill-category">
          <h2>${t("skills.categories.programming")}</h2>
          <ul class="skill-list">
            <li>Java</li>
            <li>PHP <span class="learning">(${t("skills.categories.learning")})</span></li>
          </ul>
        </div>
        <div class="skill-category">
          <h2>${t("skills.categories.databases")}</h2>
          <ul class="skill-list">
            <li>phpMyAdmin</li>
            <li>MySQL</li>
            <li>MySQLWorkbench</li>
            <li>PostgreSQL</li>
            <li>pgAdmin4</li>
          </ul>
        </div>
        <div class="skill-category">
          <h2>${t("skills.categories.platforms")}</h2>
          <ul class="skill-list">
            <li>GitHub</li>
          </ul>
        </div>
        <div class="skill-category">
          <h2>${t("skills.categories.frameworks")}</h2>
          <ul class="skill-list">
            <li>React <span class="learning">(${t("skills.categories.learning")})</span></li>
          </ul>
        </div>
        <div class="skill-category">
          <h2>${t("skills.categories.tools")}</h2>
          <ul class="skill-list">
            <li>VS Code</li>
            <li>Eclipse</li>
            <li>Xampp</li>
          </ul>
        </div><div class="skill-category">
          <h2>${t("skills.categories.ai")}</h2>
          <ul class="skill-list">
            <li>ChatGPT</li>
            <li>Grok</li>
            <li>DeepSeek</li>
            <li>Copilot</li>
          </ul>
        </div>
        
      </div>
    </section>
  `;
};