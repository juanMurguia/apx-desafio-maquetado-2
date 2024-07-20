function Info(container, allData) {
  const index = document.body.classList.contains("index");

  const showInfo = document.createElement("section");
  showInfo.classList.add("show-info");
  if (index) {
    showInfo.innerHTML = `
      <div class=" show-info__container">
        <h2>Mis <span>Servicios</span></h2>
        <div class="show-info__card-list">
        </div>
        <a href="servicios.html" class="show-info__more"><img src="./img/more-icon.png"> Ver más</a href="show-info">
      </div>
      `;
  } else {
    let showType = "Servicios";
    if (document.body.classList.contains("portfolio")) showType = "Proyectos";
    showInfo.innerHTML = `
      <div class="container show-info__container">
        <h2>Mis <span>${showType}</span></h2>
        <div class="show-info__card-list">
        </div>
      </div>
      `;
  }

  container.appendChild(showInfo);

  if (index) {
    allData.services.map((service) => {
      Card(document.querySelector(".show-info__card-list"), service);
    });
  }

  if (document.body.classList.contains("portfolio")) {
    console.log(allData);
    allData.works.map((work) => {
      Card(document.querySelector(".show-info__card-list"), work);
    });
  }
  if (document.body.classList.contains("services")) {
    console.log(allData);
    allData.services.map((service) => {
      Card(document.querySelector(".show-info__card-list"), service);
    });
  }
}

// ShowInfo(document.body);
// Card(document.querySelector(".show-info__card-list"));
// Card(document.querySelector(".show-info__card-list"));
