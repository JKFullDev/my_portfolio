import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
    <section class="home">
    <p>Hey, I'm</p>
    <h1>Juan Carlos</h1>
    <p>I'm a Full-Stack Developer based in Madrid. I've just completed my first year of a higher vocational degree in web development, and I'm passionate about building digital experiences—from simple websites to full-fledged applications. Although I'm at the beginning of my professional journey, I'm constantly learning and experimenting, and I'm excited about the projects ahead and everything I have yet to discover in this field.</p>
    <a href="mailto:juancarlosalonsohernando@gmail.com">Say hi →</a>
    </section>`;
};