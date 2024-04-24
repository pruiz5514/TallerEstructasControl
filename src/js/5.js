const dia = prompt("Ingrese un dia de la semana :").toLocaleLowerCase();

const diaNoLaboral = "No es un dia laboral"
const diaLaboral = diaNoLaboral.substring(3);

switch (dia){
    case "lunes":
        console.log(diaLaboral);
        break;
    case "martes":
        console.log(diaLaboral);
        break;
    case "miercoles":
        console.log(diaLaboral);
        break;
    case "jueves":
        console.log(diaLaboral);
        break;
    case "viernes":
        console.log(diaLaboral);
        break;
    case "sabado":
        console.log(diaNoLaboral);
        break;
    case "domingo":
        console.log(diaNoLaboral);
        break;
    default:
        console.log("Ingrese un dia valido");
        break;
}