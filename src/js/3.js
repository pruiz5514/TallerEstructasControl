const numero = parseInt(prompt("Ingrese un numero : "));

for (let i = 1; i<=10; i++){
    const resultado = numero*i;
    const resultadoString = resultado.toString()
    console.log(`${numero} * ${i} = ${resultadoString}`);
}