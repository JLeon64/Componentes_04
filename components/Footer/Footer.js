import "./Footer.css";
import data from "../../data/data.js";
const { footerInfo } = data;

const template = () => `
<footer>
    <p>${footerInfo}</p>
</footer>
`;

const Footer = () => {
    document.getElementById("app").insertAdjacentHTML("afterend", template());
};

export default Footer;