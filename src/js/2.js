const numero1 = parseFloat(prompt("Ingrese el primero numero : "));
const numero2 = parseFloat(prompt("Ingrese el segundo numero : "));

let continua = true

while (continua){
    alert(`
    1. Suma
    2. Resta
    3. Multiplicacion
    4. Division
    5. Salir del programa`);

    const opcion = parseInt(prompt("Ingrese una opccion"));

    switch(opcion){
        case 1:
            const suma = numero1 + numero2;
            alert(`La suma es ${parseFloat(suma).toFixed(2)}`);

            break;
        case 2:
            const resta = numero1 - numero2;
            alert(`La resta es ${parseFloat(resta).toFixed(2)}`);

            break;
        case 3: 
            const multiplicacion = numero1 * numero2;
            alert(`La multiplicacion es ${parseFloat(multiplicacion).toFixed(2)}`);
            break;
        case 4: 
            const division = numero1 / numero2;
            alert(`La division es ${parseFloat(division).toFixed(2)}`);
            break;
        case 5: 
            continua = false;
            break;
        default:
            console.log("Seleccione una opcion valida");
            break;
        
    }
}