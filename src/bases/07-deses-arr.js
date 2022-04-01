/* eslint-disable react-hooks/rules-of-hooks */
/**
 * Desestructuracion de arreglos
 */

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [p1] = personajes;
const [,p2] = personajes;
const [,,p3] = personajes;

console.log(p1, p2, p3);

const retornaArreglo = () => ['ABC', 123];
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// emulacion del useState

const useState = (valor) => {
    return [valor, (valor) => console.log('Hola ' + valor)];
}

const [valor, setValor] = useState('Goku');
console.log(valor);
setValor(valor);
