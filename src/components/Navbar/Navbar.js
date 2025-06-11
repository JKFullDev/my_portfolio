import "./Navbar.css";
import { t, currentLang } from "../../lang"; // Asegúrate de que sea 'lang'

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.innerText = themeBtn.innerText === "☀" ? "☾" : "☀";
};

const getNextLangLabel = () => (currentLang === "en" ? "ES" : "EN");

export const Navbar = () => `
<nav>
  <ul>
    <li>
      <a href="#" id="homelink">${t("navbar.home")}</a>
    </li>
    <li>
      <a href="#" id="projectslink">${t("navbar.projects")}</a>
    </li>
    <li>
      <a href="#" id="aboutlink">${t("navbar.about")}</a>
    </li>
    <li>
      <a href="#" id="skillslink">${t("navbar.skills")}</a> <!-- Usamos la traducción -->
    </li>
  </ul>
  <ul>
    <li>
      <button id="themeBtn">☀</button>
    </li>
    <li>
      <button id="langBtn">${getNextLangLabel()}</button>
    </li>
  </ul>
</nav>
`;