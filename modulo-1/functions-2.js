// Adivinar el Numero
// Crear una funcion anónima que genere un número aleatorio y permita al usuario adivinarlo.
// Utiliza un bucle "while" para dar al usuario múltiples intentos y muestra mensajes divertidos para guiarlos.
const getUserInput = require("../utils/user-input")

const jugar = async () => {
    const numeroDelSistema = 5; // @todo: crear funcion que genere numero aleatorio y utilizar aqui.
    let intentos = 3;

    while (intentos > 0) {
        const numeroDelUsuario = await getUserInput("Adivina el número: ")

        if (parseInt(numeroDelUsuario) === numeroDelSistema) {
            console.log('Has acertado!! Gracias por jugar.')
            break;
        } else {
            console.log('Ups... inténtalo de nuevo.')
            intentos--;
        }
    }

    if (intentos <= 0) {
        console.log('Ups, se ha agotado tus intentos. Juega de nuevo.')
    }
}

jugar();