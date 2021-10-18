let antiguedad = parseInt(prompt("Ingrese su antiguedad para saber cuántos días de vacaciones al año le corresponden."))

if ((antiguedad > 0) && (antiguedad <= 5)) {
    console.log (`Su antiguedad es de ${antiguedad} años y le corresponden 14 días de corrido`);


} else if  ((antiguedad > 5) && (antiguedad <= 10)) {
    console.log (`Su antiguedad es de ${antiguedad} años y le corresponden 21 días de corrido`);


} else if ((antiguedad > 10) && (antiguedad <= 20)) {
    console.log (`Su antiguedad es de ${antiguedad} años y le corresponden 28 días de corrido`);


} else if (antiguedad > 20) {
    console.log (`Su antiguedad es de ${antiguedad} años y le corresponden 35 días de corrido`);

    
} else {
    alert ("El valor ingresado no es correcto");
}
