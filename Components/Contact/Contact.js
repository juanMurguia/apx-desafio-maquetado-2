function Contact(container) {
  const sectionContact = document.createElement("section");
  sectionContact.classList.add("contact");
  sectionContact.innerHTML = `
    <div class="container contact__container">
      <h2>Escribime</h2>
      
    </div>
    `;

  container.appendChild(sectionContact);
  Form(document.querySelector(".contact__container"));
}
