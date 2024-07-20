function createData(data) {
  let newData = {};
  const services = [];
  const works = [];
  for (let index = 0; index < data.items.length; index++) {
    const item = data.items[index];
    if (item.sys.contentType.sys.id == "bio") {
      newData = {
        bio: item.fields,
      };
    } else if (item.sys.contentType.sys.id == "services") {
      services.push(item.fields);
    } else {
      works.push(item.fields);
    }
  }
  return (newData = {
    ...newData,
    services: services,
    works: works,
  });
}

function createAssets(data, assets) {
  const imgAbout = assets.items.find(
    (item) => item.sys.id === data.bio.img.sys.id
  );

  const imgHero = assets.items.find(
    (item) => item.sys.id === data.bio.img2.sys.id
  );

  data.bio = {
    ...data.bio,
    srcIMG: imgAbout.fields.file.url,
    srcIMG2: imgHero.fields.file.url,
  };

  console.log(data.bio);

  ///////////////////////////////////////////

  for (let i = 0; i < data.services.length; i++) {
    const img = assets.items.find(
      (item) => item.sys.id == data.services[i].img.sys.id
    );
    if (img) {
      data.services[i] = {
        ...data.services[i],
        srcIMG: img.fields.file.url,
      };
    }
  }

  for (let index = 0; index < data.works.length; index++) {
    const img = assets.items.find(
      (item) => item.sys.id == data.works[index].img.sys.id
    );
    if (img) {
      data.works[index] = {
        ...data.works[index],
        srcIMG: img.fields.file.url,
      };
    }
  }
  return data;
}

async function main() {
  const SPACE_ID = "ng47m8z8pu1i";
  const API_KEY = "3Sm4cjm2bcB35ypoLR3u5M2TjlsKEfOETPgoAtDF1e8";
  const ENVIRONMENT = "master";
  const endpointAll = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries?access_token=${API_KEY}`;
  const endpointAllAssets = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/assets?access_token=${API_KEY}`;

  const responseData = await fetch(endpointAll);
  const data = await responseData.json();
  const responseAssets = await fetch(endpointAllAssets);
  const assets = await responseAssets.json();

  const allData = createAssets(createData(data), assets);
  const index = document.body.classList.contains("index");
  const contact = document.body.classList.contains("contact");
  const showData =
    document.body.classList.contains("portfolio") ||
    document.body.classList.contains("services");

  Navbar(document.body);

  if (index) {
    HeroSection(
      document.body,
      `Full Stack <span>Developer Jr</span>`,
      allData.bio.srcIMG2
    );
    About(
      document.body,
      allData.bio.srcIMG,
      allData.bio.title,
      allData.bio.description.content[0].content[0].value
    );
    Info(document.body, allData);
    Contact(document.body);
  }

  if (showData) {
    ShowInfo(document.body, allData);
  }

  if (contact) {
    Contact(document.body);
  }

  Footer(document.body);
}

main();
