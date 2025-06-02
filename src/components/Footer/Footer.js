import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/icons/github.png", "GitHub", "https://github.com/JKFullDev")}
${Button("/icons/linkedin.png", "LinkedIn", "https://linkedin.com/in/jcah-dev")}
</div>
`;