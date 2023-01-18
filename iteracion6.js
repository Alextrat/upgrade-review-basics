// Iteración #6: Función swap

// Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array.
// La función deberá intercambiar la posición de los valores de los indices que hayamos
//  enviado como parametro. Retorna el array resultante.

// Sugerencia de array:

const jugadores = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

let cambiar

function swap (array, i, j) {
     cambiar = array[i];
        array[i] = array[j];
         array[j] = cambiar;
         return array
}

console.log(swap(jugadores, 2, 1));