/**
 * Uso de fetch API
 */

const peticion = fetch("https://fakestoreapi.com/products");

peticion
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch(console.error);
