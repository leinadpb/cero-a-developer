// Carrera de Caracoles
/**
 * 1
 * --------------------------------------------
 *                                  c1
 *                              c2
 * --------------------------------------------
 *           10
 */
let ca1 = 0;
let ca2 = 0;
const meta = 10;

while (ca1 < meta && ca2 < meta) {
    ca1 += Math.floor(Math.random() * 3) + 1
    ca2 += Math.floor(Math.random() * 3) + 1
}

// Math.random() - Numero aleatorio [0, 1). Ejemplos: 0.99999, 0.003, 0.8798, 0
// * 3 - Aumenta el rango de [0, 1) a [0, 3). ejemplo: 0, 0.9999, 1.98677, 2.675859, 2.9999
// Math.floor() - Asegura redondear al entero mas cercano hacia abajo. Ejemplo: 1.98 => 1
// +1 - Asegunra que la posicion del caracol incremente de 1 a 3

if (ca1 >= meta && ca2 >= meta) {
    console.log('Empate!')
} else if (ca1 >= meta) {
    console.log('Caracol #1 ha ganado!!!')
} else {
    console.log('El caracol #2 ha ganado!!!')
}