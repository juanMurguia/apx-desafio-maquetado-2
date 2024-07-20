function About(container, allData) {
  const sectionBio = document.createElement("section");
  sectionBio.classList.add("bio");
  sectionBio.innerHTML = `
    <div class="container bio__container">
      <img src="${allData.srcIMG2}" alt="Bio picture">
      <div class="bio__content">
        <h2>${allData.title}</h2>
        <p>${allData.description.content[0].content[0].value}</p>
      </div>
      </div>
    `;

  container.appendChild(sectionBio);
}
