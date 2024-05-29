// decidir que ropa llevar dependiendo el clima

const clima = "frio";

if (clima === 'soleado') {
    //console.log('Deberias llevar una camiseta y pantalones cortos.')
} else {
    //console.log('Deberias llevar un sueter y pantalones largos.')
}

// votacion para una pelicula
const votosParaStarWars = 4;
const votosParaHarryPotter = 3;
const horaDeInicioStarWars = 16;
const horaDeInicioDeHarryPotter = 18;
const horaActual = 17;

if (votosParaStarWars > votosParaHarryPotter) {
    if (horaActual < horaDeInicioStarWars) {
        console.log('Vamos a ver Start Wars.')
    } else {
        console.log('Ups, ya pasó la hora de Star Wars.. Volvamos a decidir.')
    }

} else if ((votosParaStarWars < votosParaHarryPotter) && (horaActual < horaDeInicioDeHarryPotter)) {
    console.log('Vamos a ver Hary Potter')
} else {
    console.log('Empate! Lazaremos una moneda para decidir.')
}

