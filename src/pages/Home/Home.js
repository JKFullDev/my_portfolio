import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
import { t } from "../../lang";

export const Home = () => {
    const main = document.querySelector("main");
    cleanPage(main);

    main.innerHTML = `
    <section class="home">
      <p>${t("home.greeting")}</p>
      <h1>Juan Carlos</h1>
      <p>${t("home.description")}</p>
      <a href="mailto:juancarlosalonsohernando@gmail.com">${t("home.sayHi")}</a>
    </section>
  `;
};
