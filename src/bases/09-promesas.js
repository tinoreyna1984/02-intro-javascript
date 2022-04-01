/**
 * Uso de promesas (promise)
 */

import { getHeroeById } from "./bases/08-imp-exp";

/* const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(2);
    if (heroe) resolve(heroe);
    else reject("Hubo un problema al tratar de obtener el heroe");
  }, 2000);
});

promesa
  .then((heroe) => console.log("Heroe: ", heroe))
  .catch((e) => console.error(e)); */

const getHeroeByIdAsync = (id) => {

   return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) resolve(`Heroe: ${JSON.stringify(heroe)}`);
      else reject("Hubo un problema al tratar de obtener el heroe");
    }, 2000);
  });
};

getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.error);

