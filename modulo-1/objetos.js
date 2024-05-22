const persona = {
    nombre: "Juan",
    edad: 18,
    grado: "Desarrollo de Software",
    totalDeOjos: 2,
    totalDePiernas: 2,

    saludar: function () {
        console.log(`Hola, mi nombre es ${this.nombre}, y tengo ${this.edad} años.`)
        if (this.colorDeCabello) {
            console.log(`Y mi color de cabello es ${this.colorDeCabello}`)
        }
    },

    correr: function () {
        console.log(`Estoy corriendo...`)
    }
}

persona.saludar();

persona.colorDeCabello = "negro";

console.log(persona);

persona.saludar();

