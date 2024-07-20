const imagen = "./img/logo.svg";

function Footer(element) {
  const footer = document.createElement("div");

  footer.innerHTML = `
  <footer class="footer is-vcentered">
    <div class="logo column">
        <img src="${imagen}">
    </div>
    <nav class="column links mt-5">
      <a href="./index.html"><img src="./img/home-icon.png" alt="Inicio">Inicio</a>
      <a href="./servicios.html"><img src="./img/user-icon.png" alt="Servicios">Servicios</a>
      <a href="./portfolio.html"><img src="./img/user-icon.png" alt="Portfolio">Portfolio</a>
      <a href="./contacto.html"><img src="./img/contact-icon.png" alt="Contacto">Contacto</a> 
    </nav>
    <ul class="column redes">
      <a href="https://www.linkedin.com/in/juan-cruz-murguia" target="_blank"><img src="./img/linkedin.png"
          alt="Linkedin link"></a>
      <a href="https://twitter.com/elonmusk" target="_blank"><img src="./img/twitter.png"
          alt="Twitter link"></a>
      <a href="https://github.com/juanMurguia" target="_blank"><img src="./img/github.png"
          alt="Github link"></a>   
    </ul>
    <p class="mt-5">©2024 - <a>  https://apx.school</a></p>

</footer>
  
    `;

  element.appendChild(footer);
}
