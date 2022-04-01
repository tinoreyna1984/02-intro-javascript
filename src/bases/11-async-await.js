//const peticion = fetch("https://fakestoreapi.com/products");

const getImagen = async () => {
  try {
    const resp = await fetch("https://fakestoreapi.com/products/1");
    const data = await resp.json();
    const { image } = data;

    //console.log(image)

    const img = document.createElement("img");
    img.src = image;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImagen();
