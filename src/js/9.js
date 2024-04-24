let palabra = prompt("Ingrese una palabra: ")

palabra = palabra.toLowerCase().split("");

console.log(palabra);

for (let i = 0; i< palabra.length; i+=2){

    palabra[i]= (palabra[i].toUpperCase());
}

console.log(palabra.join(""));