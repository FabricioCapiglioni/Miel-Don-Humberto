// NOMENCLATURA ID DE PRODUCTOS
/* ID - Producto
    000 - MIEL
    010 - Miel de 1 KG ---------- Producto1
    020 - Miel de 1/2 KG--------- Producto2
    030 - Miel de 1/4 KG--------- Producto3
    040 - Miel de 4 KG----------- Producto4
    050 - Miel de 5 KG----------- Producto5
    060 - Miel de 450 gr.-------- Producto6
    070 - Propóleo 45 cc.-------- Producto7
    080 - Miel con Polen 100 gr.- Producto8
    090 - Polen 100 gr.---------- Producto9
    100 - Cera de Abeja---------- Producto10
*/


class Productos {
    constructor(id, nombre, peso, color, consistencia, envase, precio, origen, floracion, stock) {
        this.id = id;
        this.nombre = nombre;
        this.peso = peso;
        this.color = color;
        this.consistencia = consistencia;
        this.envase = envase;
        this.precio = precio;
        this.origen = origen;
        this.floracion = floracion;
        this.stock = stock;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    descuento(porcentaje) {
        this.precio -= this.precio * porcentaje;
    }
    sinStock() {
        this.stock = "sin stock";
    }
}

const producto1p = new Productos(010, "miel de 1 kg", 1000, "oscuro", "semi líquida", "plástico pet", 600, "Villa Tulumba", "piquillín", "en stock");
const producto1c = new Productos(011, "miel de 1 kg", 1000, "rojo claro", "semi líquida", "plástico pet", 600, "Santiago del Estero", "chañar", "en stock");
const producto1a = new Productos(012, "miel de 1 kg", 1000, "crema", "arenosa", "plástico pet", 600, "Santiago del Estero", "atamisqui", "en stock");
const producto2p = new Productos(020, "miel de 1/2 kg", 500, "oscuro", "semi líquida", "plástico pet", 350, "Villa Tulumba", "piquillín", "en stock");
const producto2c = new Productos(021, "miel de 1/2 kg", 500, "rojo claro", "semi líquida", "plástico pet", 350, "Santiago del Estero", "chañar", "sin stock");
const producto2a = new Productos(022, "miel de 1/2 kg", 500, "crema", "arenosa", "plástico pet", 350, "Santiago del Estero", "atamisqui", "en stock");
const producto3p = new Productos(030, "miel de 1/4 kg", 250, "oscuro", "semi líquida", "plástico pet", 200, "Villa Tulumba", "piquillín", "en stock");
const producto3c = new Productos(031, "miel de 1/4 kg", 250, "rojo claro", "semi líquida", "plástico pet", 200, "Santiago del Estero", "chañar", "sin stock");
const producto3a = new Productos(032, "miel de 1/4 kg", 250, "crema", "arenosa", "plástico pet", 200, "Santiago del Estero", "atamisqui", "en stock");
const producto4p = new Productos(040, "miel de 4 kg", 4000, "oscuro", "semi líquida", "plástico pet", 2300, "Villa Tulumba", "piquillín", "sin stock");
const producto4c = new Productos(041, "miel de 4 kg", 4000, "rojo claro", "semi líquida", "plástico pet", 2300, "Santiago del Estero", "chañar", "sin stock");
const producto4a = new Productos(042, "miel de 4 kg", 4000, "crema", "arenosa", "plástico pet", 2300, "Santiago del Estero", "atamisqui", "sin stock");
const producto5p = new Productos(050, "miel de 5 kg", 5000, "oscuro", "semi líquida", "pvc", 2800, "Villa Tulumba", "piquillín", "sin stock");
const producto5c = new Productos(051, "miel de 5 kg", 5000, "rojo claro", "semi líquida", "pvc", 2800, "Santiago del Estero", "chañar", "sin stock");
const producto5a = new Productos(052, "miel de 5 kg", 5000, "crema", "arenosa", "pvc", 2800, "Santiago del Estero", "atamisqui", "en stock");
const producto6p = new Productos(060, "miel de 450 gr", 450, "oscuro", "semi líquida", "plástico pet", 380, "Villa Tulumba", "piquillín", "sin stock");
const producto6c = new Productos(061, "miel de 450 gr", 450, "rojo claro", "semi líquida", "plástico pet", 380, "Santiago del Estero", "chañar", "sin stock");
const producto6a = new Productos(062, "miel de 450 gr", 450, "crema", "arenosa", "plástico pet", 380, "Santiago del Estero", "atamisqui", "en stock");
const producto7 = new Productos(070, "gotas de proóleo", 45, "oscuro", "líquido", "vidrio", 450, "Córdoba", "otros", "en stock");
const producto8 = new Productos(080, "miel con polen", 100, "marron claro", "cremosa", "vidrio", 400, "Santiago del Estero", "quebracho colorado", "sin stock");
const producto9 = new Productos(090, "polen", 100, "dorado", "pellets", "plástico pet", 500, "Santiago del Estero", "quebracho colorado", "sin stock");
const producto10 = new Productos(100, "cerra de abeja", 1000, "marron claro", "solido", "film", 1400, "Santiago del Estero", "otros", "en stock");


alert("Indique que producto desea comprar de la siguiente lista:");
var cliente1 = prompt("KILO, MEDIO, CUARTO, CUATRO, CINCO, 450, PROPOLEO, ENERGIZANTE, POLEN, CERA");
var cliente1Cant = prompt("Indique la cantidad deseada");
var cliente1Flor = prompt("indique de que floración desea comprar")
var carrito = "";

while (cliente1.toUpperCase() != "NO") {
    switch (cliente1.toUpperCase()) {
        case "KILO":
            switch (cliente1Flor.toLocaleUpperCase()) {
                case "PIQUILLIN":
                    if (producto1p.stock === "en stock") {
                        alert(`Agregó ${cliente1Cant} unidades miel de 1 KG de Piquillín al carrito`);
                        carrito += " " + cliente1Cant + " " + producto1p.nombre + ` de ${producto1p.floracion}` + " $" + producto1p.precio * cliente1Cant + ", ";
                    } else {
                        alert("Disculpe no contamos con stock de este producto")
                    }
                    break;
                case "CHAÑAR":
                    if (producto1c.stock === "en stock") {
                        alert(`Agregó ${cliente1Cant} unidades miel de 1 KG de Chañar al carrito`);
                        carrito += " " + cliente1Cant + " " + producto1c.nombre + ` de ${producto1c.floracion}` + " $" + producto1c.precio * cliente1Cant + ", ";
                    } else {
                        alert("Disculpe no contamos con stock de este producto")
                    }
                    break;
                case "ATAMISQUI":
                    if (producto1a.stock === "en stock") {
                        alert(`Agregó ${cliente1Cant} unidades miel de 1 KG de Atamisqui al carrito`);
                        carrito += " " + cliente1Cant + " " + producto1a.nombre + ` de ${producto1a.floracion}` + " $" + producto1a.precio * cliente1Cant + ", ";
                    } else {
                        alert("Disculpe no contamos con stock de este producto")
                    }

            }
            break;
        case "MEDIO":
            switch (cliente1Flor.toLocaleUpperCase()) {
                case "PIQUILLIN":
                    if (producto2p.stock === "en stock") {
                        alert(`Agregó ${cliente1Cant} unidades miel de 1/2 KG de Piquillín al carrito`);
                        carrito += " " + cliente1Cant + " " + producto2p.nombre + ` de ${producto2p.floracion}` + " $" + producto2p.precio * cliente1Cant + ", ";
                    } else {
                        alert("Disculpe no contamos con stock de este producto")
                    }
                    break;
                case "CHAÑAR":
                    if (producto2c.stock === "en stock") {
                        alert(`Agregó ${cliente1Cant} unidades miel de 1/2 KG de Chañar al carrito`);
                        carrito += " " + cliente1Cant + " " + producto2c.nombre + ` de ${producto2c.floracion}` + " $" + producto2c.precio * cliente1Cant + ", ";
                    } else {
                        alert("Disculpe no contamos con stock de este producto")
                    }
                    break;
                case "ATAMISQUI":
                    if (producto2a.stock === "en stock") {
                        alert(`Agregó ${cliente1Cant} unidades miel de 1/2 KG de Atamisqui al carrito`);
                        carrito += " " + cliente1Cant + " " + producto2a.nombre + ` de ${producto2a.floracion}` + " $" + producto2a.precio * cliente1Cant + ", ";
                    } else {
                        alert("Disculpe no contamos con stock de este producto")
                    }
                    break;
            }
            break;
        case "CUARTO":
            switch (cliente1Flor.toLocaleUpperCase()) {

                case "PIQUILLIN":
                    if (producto3p.stock === "en stock") {
                        alert(`Agregó ${cliente1Cant} unidades miel de 1/4 KG de Piquillín al carrito`);
                        carrito += " " + cliente1Cant + " " + producto3p.nombre + ` de ${producto3p.floracion}` + " $" + producto3p.precio * cliente1Cant + ", ";
                    } else {
                        alert("Disculpe no contamos con stock de este producto")
                    }
                    break;
                case "CHAÑAR":
                    if (producto3c.stock === "en stock") {
                        alert(`Agregó ${cliente1Cant} unidades miel de 1/4 KG de Chañar al carrito`);
                        carrito += " " + cliente1Cant + " " + producto3c.nombre + ` de ${producto3c.floracion}` + " $" + producto3c.precio * cliente1Cant + ", ";
                    } else {
                        alert("Disculpe no contamos con stock de este producto")
                    }
                    break;
                case "ATAMISQUI":
                    if (producto3a.stock === "en stock") {
                        alert(`Agregó ${cliente1Cant} unidades miel de 1/4 KG de Atamisqui al carrito`);
                        carrito += " " + cliente1Cant + " " + producto3a.nombre + ` de ${producto3a.floracion}` + " $" + producto3a.precio * cliente1Cant + ", ";
                    } else {
                        alert("Disculpe no contamos con stock de este producto")
                    }
                    break;
            }
            break;
        case "CUATRO":
            switch (cliente1Flor.toLocaleUpperCase()) {
                case "PIQUILLIN":
                    if (producto4p.stock === "en stock") {
                        alert(`Agregó ${cliente1Cant} unidades miel de 4 KG de Piquillín al carrito`);
                        carrito += " " + cliente1Cant + " " + producto4p.nombre + ` de ${producto4p.floracion}` + " $" + producto4p.precio * cliente1Cant + ", ";
                    } else {
                        alert("Disculpe no contamos con stock de este producto")
                    }
                    break;
                case "CHAÑAR":
                    if (producto4c.stock === "en stock") {
                        alert(`Agregó ${cliente1Cant} unidades miel de 4 KG de Chañar al carrito`);
                        carrito += " " + cliente1Cant + " " + producto4c.nombre + ` de ${producto4c.floracion}` + " $" + producto4c.precio * cliente1Cant + ", ";
                    } else {
                        alert("Disculpe no contamos con stock de este producto")
                    }
                    break;
                case "ATAMISQUI":
                    if (producto4a.stock === "en stock") {
                        alert(`Agregó ${cliente1Cant} unidades miel de 4 KG de Atamisqui al carrito`);
                        carrito += " " + cliente1Cant + " " + producto4a.nombre + ` de ${producto4a.floracion}` + " $" + producto4a.precio * cliente1Cant + ", ";
                    } else {
                        alert("Disculpe no contamos con stock de este producto")
                    }
                    break;
            }
            break;
        case "CINCO":
            switch (cliente1Flor.toLocaleUpperCase()) {
                case "PIQUILLIN":
                    if (producto5p.stock === "en stock") {
                        alert(`Agregó ${cliente1Cant} unidades miel de 5 KG de Piquillín al carrito`);
                        carrito += " " + cliente1Cant + " " + producto5p.nombre + ` de ${producto5p.floracion}` + " $" + producto5p.precio * cliente1Cant + ", ";
                    } else {
                        alert("Disculpe no contamos con stock de este producto")
                    }
                    break;
                case "CHAÑAR":
                    if (producto5c.stock === "en stock") {
                        alert(`Agregó ${cliente1Cant} unidades miel de 5 KG de Chañar al carrito`);
                        carrito += " " + cliente1Cant + " " + producto5c.nombre + ` de ${producto5c.floracion}` + " $" + producto5c.precio * cliente1Cant + ", ";
                    } else {
                        alert("Disculpe no contamos con stock de este producto")
                    }
                    break;
                case "ATAMISQUI":
                    if (producto5a.stock === "en stock") {
                        alert(`Agregó ${cliente1Cant} unidades miel de 5 KG de Atamisqui al carrito`);
                        carrito += " " + cliente1Cant + " " + producto5a.nombre + ` de ${producto5a.floracion}` + " $" + producto5a.precio * cliente1Cant + ", ";
                    } else {
                        alert("Disculpe no contamos con stock de este producto")
                    }
                    break;
            }
            break;
        case "450":
            switch (cliente1Flor.toLocaleUpperCase()) {
                case "PIQUILLIN":
                    if (producto6p.stock === "en stock") {
                        alert(`Agregó ${cliente1Cant} unidades miel de 450gr de Piquillín al carrito`);
                        carrito += " " + cliente1Cant + " " + producto6p.nombre + ` de ${producto6p.floracion}` + " $" + producto6p.precio * cliente1Cant + ", ";
                    } else {
                        alert("Disculpe no contamos con stock de este producto")
                    }
                    break;
                case "CHAÑAR":
                    if (producto6c.stock === "en stock") {
                        alert(`Agregó ${cliente1Cant} unidades miel de 450gr de Chañar al carrito`);
                        carrito += " " + cliente1Cant + " " + producto6c.nombre + ` de ${producto6c.floracion}` + " $" + producto6c.precio * cliente1Cant + ", ";
                    } else {
                        alert("Disculpe no contamos con stock de este producto")
                    }
                    break;
                case "ATAMISQUI":
                    if (producto6a.stock === "en stock") {
                        alert(`Agregó ${cliente1Cant} unidades miel de 450gr de Atamisqui al carrito`);
                        carrito += " " + cliente1Cant + " " + producto6a.nombre + ` de ${producto6a.floracion}` + " $" + producto6a.precio * cliente1Cant + ", ";
                    } else {
                        alert("Disculpe no contamos con stock de este producto")
                    }
                    break;
            }
            break;
        case "PROPOLEO":
            if (producto7.stock === "en stock") {
                alert(`Agregó ${cliente1Cant} unidades Propóleo al carrito`);
                carrito += " " + cliente1Cant + " " + producto7.nombre + " $" + producto7.precio * cliente1Cant + ", ";
            } else {
                alert("Disculpe no contamos con stock de este producto");
            }
            break;
        case "ENERGIZANTE":
            if (producto8.stock === "en stock") {
                alert(`Agregó ${cliente1Cant} unidades Miel con Polen al carrito`);
                carrito += " " + cliente1Cant + " " + producto8.nombre + " $" + producto8.precio * cliente1Cant + ", ";
            } else {
                alert("Disculpe no contamos con stock de este producto");
            }
            break;
        case "POLEN":
            if (producto9.stock === "en stock") {
                alert(`Agregó ${cliente1Cant} unidades de Polen al carrito`);
                carrito += " " + cliente1Cant + " " + producto8.nombre + " $" + producto8.precio * cliente1Cant + ", ";
            } else
                alert("Disculpe no contamos con stock de este producto");

            break;
        case "CERA":
            if (producto10.stock === "en stock") {
                alert(`Agregó ${cliente1Cant} unidades de Polen al carrito`);
                carrito += cliente1Cant + " " + producto10.nombre + " $" + producto10.precio * cliente1Cant + ", ";
            } else {
                alert("Disculpe no contamos con stock de este producto");
            }
            break;
        default:
            alert("no se encontró el producto ingresado");
    }
    cliente1 = prompt("¿Desea agregar otro producto al carrito?");
    if (cliente1.toUpperCase() !== "NO") {
        cliente1Cant = prompt("Indique la cantidad deseada");
        cliente1Flor = prompt("indique de que floración desea comprar");
    } else {
        alert("Gracias por su compra.");
    }

}

for (const prop in producto1p) {
    console.log(producto1p[prop]);
}
console.log(producto1p.nombre);

producto3c.descuento(0.3);
console.log(producto3c.precio);
producto6a.sinStock();
console.log(`${producto6a.nombre} de ${producto6a.floracion} ${producto6a.stock}`);


alert(carrito);