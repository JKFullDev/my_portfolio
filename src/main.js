import './style.css';
import { Navbar, changeTheme } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Divider } from './components/Divider/Divider';
import { linkPage } from './utils/linkPage';
import { Home } from './pages/Home/Home';
import { Projects } from './pages/Projects/Projects';
import { About } from './pages/About/About';
import { currentLang, setLang } from './lang';
import { initParticles } from './utils/particlesConfig';

let currentPage = Home; // valor inicial

// Función para pintar toda la app (para redibujar tras cambiar idioma)
const renderApp = (initialPage) => {
    document.querySelector('header').innerHTML = Navbar();
    document.querySelector('footer').innerHTML = Footer();

    linkPage('#homelink', () => {
        currentPage = Home;
        Home();
    });

    linkPage('#projectslink', () => {
        currentPage = Projects;
        Projects();
    });

    linkPage('#aboutlink', () => {
        currentPage = About;
        About();
    });

    // Usamos la página pasada sin sobreescribirla incorrectamente
    currentPage = initialPage;
    currentPage();

    changeTheme();
    initParticles(); // Inicializar partículas

    // Solo elimina el Divider del footer si ya existe ahí
    const footerDivider = document.querySelector('footer').previousElementSibling;
    if (footerDivider?.classList.contains('divider')) {
        footerDivider.remove();
    }

    // Añade Divider SOLO debajo del footer, sin afectar los de Projects
    document.querySelector('footer').insertAdjacentHTML('beforebegin', Divider());

    const langBtn = document.querySelector("#langBtn");
    langBtn.addEventListener("click", () => {
        const newLang = currentLang === "en" ? "es" : "en";
        setLang(newLang);
        renderApp(currentPage); // Redibujar app
    });

    // Reinicializar partículas al cambiar el tema
    document.querySelector('#theme-toggle').addEventListener('click', () => {
        setTimeout(initParticles, 500); // Espera la transición del tema
    });
};

// Ejecutar app con página por defecto
renderApp(Home);