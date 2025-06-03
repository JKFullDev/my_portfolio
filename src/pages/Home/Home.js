import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
import { t } from "../../lang";
import { Typewriter } from '../../utils/typeWriter.js';

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  main.innerHTML = `
    <section class="home">
      <h1>Juan Carlos <br> Alonso Hernando</h1>
      <h2>
      ${Typewriter({ text: t("home.position"), speed: 50, pause: 4000 })}</h2>
      <a href="mailto:juancarlosalonsohernando@gmail.com">${t("home.sayHi")}</a>
    </section>
  `;
};
