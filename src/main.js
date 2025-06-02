import './style.css';
import { Navbar, changeTheme } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Divider } from './components/Divider/Divider';
import { linkPage } from './utils/linkPage';
import { Home } from './pages/Home/Home';
import { Projects } from './pages/Projects/Projects';
import { About } from './pages/About/About';
import { currentLang, setLang } from './lang';

// Función para pintar toda la app (para redibujar tras cambiar idioma)
const renderApp = (initialPage) => {
    document.querySelector('header').innerHTML = Navbar();
    document.querySelector('footer').innerHTML = Footer();

    // Reasigna eventos después de redibujar
    linkPage('#homelink', Home);
    linkPage('#projectslink', Projects);
    linkPage('#aboutlink', About);

    // Página activa
    initialPage();

    changeTheme();

    // Eliminar Divider anterior y volver a insertar
    document.querySelectorAll('.divider').forEach((el) => el.remove());
    document.querySelector('footer').insertAdjacentHTML('beforebegin', Divider());

    // Activar cambio de idioma
    const langBtn = document.querySelector("#langBtn");
    langBtn.addEventListener("click", () => {
        const newLang = currentLang === "en" ? "es" : "en";
        setLang(newLang);
        renderApp(initialPage); // repinta todo con el idioma nuevo
    });
};

// Ejecutar app con página por defecto
renderApp(Home);
