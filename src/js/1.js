const numero1 = parseFloat(prompt("Ingrese el primero numero : "));
const numero2 = parseFloat(prompt("Ingrese el segundo numero : "));

if(numero1>numero2){
    const resta = numero1-numero2
    if (String(resta).includes("-")){
        console.log(`El resultado es negativo ${resta}`);
    }else{
        console.log(`El resultado es postivo ${resta}`);
    }
}else{
    console.log("El numero 1 es menor o igual al numero 2");
}