import "./Card.css"

const Card = (id, name, where, desc) => `
<div class="custom-card" id="${id}">
  <a href="${where}">
    <p class="card-title">${name}</p>
    <p class="card-description">
      ${desc}
    </p>
    <div class="arrowSlot">
      <div class="arrow">→</div>
    </div>
  </a>
</div>

`;

export default Card;
