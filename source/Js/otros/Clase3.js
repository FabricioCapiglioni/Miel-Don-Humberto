/* let tabla = parseInt (prompt("Ingresá un número para saber la tabla"));

alert(`Usted eligió saber la talba del ${tabla}, en consola se mostrarán los resultados`);

for (i=1 ; i<=10; i++) {
    console.log(`${tabla} x ${i} = ${tabla*i}`);
} 

 */



//Ejemplo de While+Switch


let entrada = prompt("ingrese una profesión, pasa salir escribe 'kill'");

while (entrada.toUpperCase() != "KILL") {
    switch (entrada.toUpperCase()) {
        case "ABOGADO":
            alert("Hola Cuervo");
            break;
        case "MEDICO":
            alert("Hola Doc");
            break;
        case "CONTADOR":
            alert("Hola Conta");
            break;
        case "INGENIERO":
            alert("Hola Ingeniero");
            break;
        case "CHEF":
            alert("Hola chef, conciname algo")
            break;
        default:
            alert("A que te dedicas");
            break
    }
    entrada = prompt("ingrese una profesión");
}