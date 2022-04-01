/* eslint-disable react-hooks/rules-of-hooks */

/**
 * Desestructuracion de objetos
 */

const persona = {
    nombre: 'Tony',
    edad : 45,
    clave: 'Ironman'
};

const {edad, nombre, clave} = persona;
console.log(edad, nombre, clave);

// Ejercicio: obtener los valores por desestructuracion que resulta de la funcion:

const useContext = ({clave, nombre, edad, rango = 'Capitan'}) => {
    //console.log(nombre, edad)
    return {
        nombreClave : clave,
        anios: edad.anios,
        latlng : {
            lat: 24.1222,
            lng: 12.1111
        }
    }
}

const avenger = useContext(persona);

console.log(avenger);

const {nombreClave, anios, latlng : {lat, lng}} = useContext(persona);

console.log(nombreClave, anios, lat, lng);



