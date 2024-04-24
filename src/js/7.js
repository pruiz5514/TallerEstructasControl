const numero = parseFloat(prompt("Ingrese un numero decimal: "));

if(!Number.isInteger(numero)){
    const numeroRedondeado = parseInt(Math.floor(numero));
    console.log(`Numero original es: ${numero}`);
    console.log(`Numero redondeado es: ${numeroRedondeado}`);
}else{
    console.log("El numero ya es entero");
}