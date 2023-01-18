// Iteración #4: Métodos findArrayIndex
// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición 
// del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.



let animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']


function findArrayIndex(array, texto){
for (let i = 0; i < array.length; i++) {
     let animal = array[i];
    if(texto === animal){
        return array.indexOf(animal)
    }
    // else{
    //     return console.log('animal no encontrado')
    //  }
}
}
console.log(findArrayIndex(animales, 'perro'))
console.log(findArrayIndex(animales, 'Caracol'))
console.log(findArrayIndex(animales, 'Mosquito'))
console.log(findArrayIndex(animales, 'Salamandra'))
console.log(findArrayIndex(animales, 'Ajolote'))




