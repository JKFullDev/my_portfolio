import "./About.css";
import { cleanPage } from "../../utils/cleanPage";
import { t } from "../../lang";

export const About = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="about">
    <p>${t("about.description")}</p>
    </section>`;
};