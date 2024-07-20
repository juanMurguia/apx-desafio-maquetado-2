function Card(container, data) {
  const { srcIMG, description, title } = data;
  const card = document.createElement("article");
  card.classList.add("card");
  card.innerHTML = `
    <img class="card__img" src="${srcIMG}" alt="${title}">
    <div class="card__body">
      <h3>${title}</h3>
      <p>${description}</p>
    </div>
    `;
  container.appendChild(card);
}
