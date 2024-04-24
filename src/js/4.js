const edad = parseInt(prompt("Ingrese su edad: "));
const sueno = parseFloat(prompt("Ingrese las horas de sueño: "));

if(edad>= 18 && sueno>7){
    console.log(`Usted es mayor de edad y duerme bien, duerme ${Math.round(sueno)} horas`);
}else if(edad>= 18 && sueno<7){
    console.log(`Usted es mayor de edad y duerme mal, duerme ${Math.round(sueno)} horas`);
}else if(edad<18 && sueno<7){
    console.log(`Usted es menor de edad y duerme mal, duerme ${Math.round(sueno)} horas`);
}else if(edad<18 && sueno>7){
    console.log(`Usted es menor de edad y duerme bien, duerme ${Math.round(sueno)} horas`);
}