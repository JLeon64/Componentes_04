import "./Main.css";
import data from "../../data/data.js";
import Card from "../Card/Card.js";

const { logo, links } = data;

const template = () => `
<div id="logo">
    <img src=${logo} alt="logo"/>
</div>
<section id="cards">
</section>
`;

const Main = () => {
  document.querySelector("#app").innerHTML = template();
  links.forEach((link, index) => {
    const customCard = document.createElement("article");
    customCard.innerHTML = Card(link.id, link.name, link.where, link.desc);
    // customCard.id = `card${index}`
    document.querySelector("#cards").appendChild(customCard);
  });
};

export default Main;
