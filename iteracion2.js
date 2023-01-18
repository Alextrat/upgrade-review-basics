//**Iteración #2: Mix Fors**

//Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos 
//los sonidos favoritos que tienen los usuarios.

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let sonidosFavoritos 
let volumenes = 0
let contador = 0
let suma = 0
for (const usuario of users) {
    sonidosFavoritos= usuario.favoritesSounds // recojo en mi variable sonidosFavoritos de cada user el objeto favoriteSounds
   // console.log(sonidosFavoritos)
    for (let volume in sonidosFavoritos) { // recorro sonidosFavoritos 
        volumenes =  sonidosFavoritos[volume].volume // recojo en volumenes: sonidosFavoritos[posicion de indice].propiedad
        // console.log(volumenes)
        contador ++ // sumo uno por iteracion para después sacar la media
        suma = suma + volumenes // voy sumando los volúmenes en cada iteración
        }
    }
    console.log('la media de todos los sonidos favoritos de los usuarios es ' +suma/contador +'.' )

    