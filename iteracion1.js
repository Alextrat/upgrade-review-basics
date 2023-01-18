// Iteración #1: Mix for e includes

// Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array 
// con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que 
// las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la
//  función .includes()


const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

const arrayCategorias = []
for (const movie of movies) {  // empiezo a recorrer el array
    for(let i = 0; i< movie.categories.length; i++){  // le digo que recorra la propiedad categories, que es otro array
        if(arrayCategorias.includes(movie.categories[i])){
      
        //no hacemos nada
    }else{
      
        arrayCategorias.push(movie.categories[i]) // si no está esa categoría previamente le hacemos el push
     
    }
}
}
console.log(arrayCategorias)
