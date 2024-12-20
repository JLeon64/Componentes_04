import "./Header.css";
import data from "../../data/data.js";
const { title, theme, links } = data;

const template = () => `
  <header>
        <h1>${title}</h1>
        <nav>
         
        </nav>
        <button id="theme"><img src=${theme}></button>
    </header>
`;

const Header = () => {
  document.getElementById("app").insertAdjacentHTML("beforebegin", template());
  document.querySelector("#theme").addEventListener("click", () => {
    document.querySelector("body").classList.toggle("dark");
  });
};

export default Header;
