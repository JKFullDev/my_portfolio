import './style.css';
import { Navbar, changeTheme } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Divider } from './components/Divider/Divider';
import { linkPage } from './utils/linkPage';
import { Home } from './pages/Home/Home';
import { Projects } from './pages/Projects/Projects';

document.querySelector('header').innerHTML = Navbar();
document.querySelector('footer').innerHTML = Footer();

linkPage('#homelink', Home);
linkPage('#projectslink', Projects);

Home();
changeTheme();

document.querySelector('footer').insertAdjacentHTML('beforebegin', Divider());
