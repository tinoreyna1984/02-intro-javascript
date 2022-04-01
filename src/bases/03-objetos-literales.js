/**
 * Objetos literales
 */

 const persona = {
    nombre: "Tino",
    email : "tinoreyna1984@gmail.com"
  };
  
  const persona2 = {
    ...persona // spread operator
  };
  
  persona2.email = "trc@trc.com";
  persona.nombre = "Pepe";
  
  console.log(persona);
  console.log(persona2);
  