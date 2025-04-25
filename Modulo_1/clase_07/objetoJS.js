let persona = {
    nombre: "Lucía",
    apellido: "Pérez",
    altura: 1.68, // en metros
    peso: 65,     // en kilogramos

    imc: function () {
        return this.peso / (this.altura * this.altura);
    },

};
let persona2 = {
    nombre: "Juan",
    apellido: "Galarza",
    altura: 1.68, // en metros
    peso: 65,     // en kilogramos

    imc: function () {
        return this.peso / (this.altura * this.altura);
    },

};

console.log(persona.imc())

console.log(`${persona.nombre} ${persona.apellido} tiene un IMC de ${persona.imc().toFixed(4)}`);

//parseFloat(num.toFixed(2));