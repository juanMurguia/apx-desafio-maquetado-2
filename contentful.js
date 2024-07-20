import { contentful } from "contentful";
contentful.client.createClient({
  space: "qjujp2873s8u",
  accessToken: "or2dX_Ryg4TzC6eSsuA5pRzEH7mGOro_tD0HjqJy2R0",
});

function obtenerImagenes() {
  return client
    .getAssets()
    .then(function (assets) {
      const imagenes = assets.items.map(function (asset) {
        var imageURL = "https:" + asset.fields.file.url;

        return {
          title: asset.fields.title,
          description: asset.fields.description,
          url: imageURL,
        };
      });

      return imagenes;
    })
    .catch(function (error) {
      console.error("Error al obtener imágenes:", error);
      return [];
    });
}
