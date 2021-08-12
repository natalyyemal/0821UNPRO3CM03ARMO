//Ejercio 1
let numeros = [1, 5, 7, 12, 89, 23];

let numerosDobles = numeros.map(function(numero){
    return numero *2;
});
// console.log(numerosDobles);

//Ejercicio 1 con arrow function
let numerosDoblesArrow = numeros.map( numero => numero*2 )
// console.log(numerosDoblesArrow);

//Ejecricio 2. Números a string
let numerosAString = numeros.map(function(numero){
    return numero.toString();
})
// console.log(numerosAString);


//Ejecrcio 4
let personas = [
	{
        nombre: "Angelina Jolie",
        edad: 80
    },
    {
        nombre: "Eric Jones",
        edad: 2
    },
    {
        nombre: "Paris Hilton",
        edad: 5
    },
    {
        nombre: "Kayne West",
        edad: 16
    },
    {
        nombre: "Bob Ziroll",
        edad: 100
    }
];

let soloNombresArray = personas.map(function(persona){
    return persona.nombre
})
console.log(soloNombresArray);

let soloNombres = personas.map(function(persona){
    return {
        nombre: persona.nombre
    }
})
console.log(soloNombres);