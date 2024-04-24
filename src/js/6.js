const numero = parseInt(prompt("Ingrese un numero: "));

const array = [];

for (let i=0; i<=numero; i++){
    array.push(i);
}

const impares = array.filter(numero => (numero%2 !=0));

const suma = impares.reduce((acumulador,actual)=> acumulador + actual, 0)

console.log("La suma de los numeros impares hasta el " + numero + " es: " + suma);