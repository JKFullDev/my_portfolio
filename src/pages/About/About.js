import "./About.css";
import { cleanPage } from "../../utils/cleanPage";

export const About = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="about">
    <p>----------</p>
    <h1>-----</h1>
    <p>THIS SECTION IS ABOUT SECTION</p>
    </section>`;
};