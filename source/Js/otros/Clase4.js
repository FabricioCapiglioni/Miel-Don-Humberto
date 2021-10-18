function solicitar() {
    estacion = prompt("Ingrese una estación del año que te guste").toUpperCase();
    return estacion;
} 

function lugares(estacionDelAño) {
    switch (estacionDelAño) {
        case "VERANO":
            alert("Te recomiendo visitar Formentera");
            break;
        case "INVIERNO":
            alert("Te vendría bien conocer Los Alpes o esquiar en Andorra.");
            break;
        case "PRIMAVERA":
            alert("Ámsterdam o Hakodate son unas de la ciudades mas lindas en esta época del año.");
            break;
        case "OTOÑO":
            alert("Nueva York o Roma son excelentes opciones para conocer en esta época del año.");
            break;
        default:
            wtf(estacionDelAño); 
            
    }
}

function wtf(otro) {
    alert(`${otro.toUpperCase()} no es una estación del año`);
}

lugares(solicitar()); 