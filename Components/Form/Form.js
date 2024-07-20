const optionsForm = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    // "User-Agent": "insomnia/8.4.5",
  },
  body: {},
};

const submitIcon = "./img/submit-icon.png";

function Form(container) {
  const form = document.createElement("form");
  form.classList.add("form");
  form.innerHTML = `
    <form action="/" class="form container">
      <div class="form__fieldset field">
        <label for="nombre" class="label">Nombre</label>
        <input type="text" class="input" name="nombre" id="nombre" placeholder="John Doe" required>
      </div>
      <div class="form__fieldset field">
        <label for="email" class="label">Email</label>
        <input type="email" name="email" class="input" id="email" placeholder="mail@mail.com" required>
      </div>
      <div class="form__fieldset field">
        <label for="mensaje" class="label">Mensaje</label>
        <textarea name="mensaje" id="mensaje" placeholder="Hola..." required></textarea>
      </div>
      <button type="submit" class="form__submit">Enviar <img src="${submitIcon}" alt="Sumbit icon"></button>
      <p class="send-message"></p>
    </form>
    `;

  container.appendChild(form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const mensaje = document.querySelector("#mensaje").value;

    const body = {
      to: email,
      message: mensaje,
    };

    optionsForm.body = JSON.stringify(body);
    console.log(optionsForm);

    fetch("https://apx-api.vercel.app/api/utils/dwf?=&=", optionsForm)
      .then((response) => response.json())
      .then((response) => {
        const sendMessage = document.querySelector(".send-message");
        sendMessage.classList.add("good");
        sendMessage.textContent = "El mensaje se envio correctamente";
      })
      .catch((err) => {
        const sendMessage = document.querySelector(".send-message");
        sendMessage.classList.add("error");
        sendMessage.textContent =
          "El mensaje no pudo enviarse. Intente nuevamente en unos minutos 📢";
      });
  });
}
