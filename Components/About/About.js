function About(container, srcIMG2, title, description) {
  const sectionBio = document.createElement("section");
  sectionBio.classList.add("bio");
  sectionBio.innerHTML = `
    <div class="container bio__container">
      <img src="${srcIMG2}" alt="Bio picture">
      <div class="bio__content">
        <h2>${title}</h2>
        <p>${description}</p>
      </div>
      </div>
    `;

  container.appendChild(sectionBio);
}
