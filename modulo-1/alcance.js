// Estamos planeando una fiesta en nuestra casa, necesitamos decidir qué áreas de la casa están disponibles para diferentes actividades.
// Cada área de la casa tiene un alcance específico, al igual que las variables en JavaScript tienen su propio alcance en diferentes 
//  partes del código.

// hoisting

var comida = "pizza"; // alcance de funcion
const coctel = "mojito"; // o "let", tiene alcance de bloque

function areaDeSala() {
    const totalPersonas = 5;
    //  var totalDePlatos = 10;
    console.log('Total personas en la sala: ', totalPersonas)

    if (totalPersonas > 1) {
        const totalDePlatos = 10;
        console.log('Total de Platos en la sala: ', totalDePlatos)
    }
}

function areaTerraza() {
    const totalPersonas = 10;
    console.log('Total personas en la terraza: ', totalPersonas)
}

console.log('Comida: ', comida);
console.log('Coctel: ', coctel);

areaDeSala();
areaTerraza();