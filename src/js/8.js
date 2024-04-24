const continua = true;
const mensaje  = prompt("")

while(continua){
    alert(`
        1. Convertir en mayuscula.
        2. Reemplazar espacios por guiones
        3. Salir del programa
    `)
    const opcion = parseInt(prompt("Ingrese una opcion: "));

    switch(opcion){
        case 1:
             const mensajeMayuscula = mensaje.toLocaleUpperCase();
             alert(mensajeMayuscula);
             break;
        case 2:
            const mensajeEspacio = mensaje.replaceAll(" ","-");
            alert(mensajeEspacio);
            break;
        case 3:
            continua = false;
            break;
        default: 
            alert("Ingrese algo valido");
            break;
    }
}