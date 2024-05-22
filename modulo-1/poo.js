
class Auto {
    constructor(modelo, marca) {
        this.marca = marca;
        this.modelo = modelo;
    }

    conducir() {
        console.log(`El auto ${this.marca} - ${this.modelo} está conduciendo.`)
    }

    encender() {

    }

    apagar() {

    }
}

const auto1 = new Auto('Rav4', 'Toyota');
const auto2 = new Auto('Cross', 'Nissan');

// auto1.conducir();
// auto2.conducir();


// Calculadora
// Valor1 + Valor2 + ValorN = resultado

class Calculadora {
    constructor() {
        this.resultado = 0;
    }

    sumar(a, b) {
        this.resultado = a + b
    }

    multiplicar(a, b) {
        this.resultado = a * b;
    }
}

const calculadora = new Calculadora();
calculadora.sumar(3, 5);

console.log(calculadora.resultado);

calculadora.multiplicar(3, 5);

console.log(calculadora.resultado);

