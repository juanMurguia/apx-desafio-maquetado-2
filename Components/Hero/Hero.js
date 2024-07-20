function HeroSection(container, title, srcIMG) {
  const heroSection = document.createElement("section");
  heroSection.classList.add("hero");
  heroSection.innerHTML = `
    <div class="container hero__container">
      <h1>${title}</span></h1>
      <img src="${srcIMG}" alt="Image Hero">
    </div>
    `;

  container.appendChild(heroSection);
}
