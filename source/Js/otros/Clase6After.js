const listaProductos = [{
        id: 1,
        nombre: "Miel de Kilo",
        peso: 1000,
        precio: 600,
        stock: 500,
    },    {
        id: 2,
        nombre: "Miel de Medio kg",
        peso: 500,
        precio: 350,
        stock: 500,
    },
    {
        id: 3,
        nombre: "Miel de Cuarto kg",
        peso: 250,
        precio: 200,
        stock: 500,
    },
    {
        id: 4,
        nombre: "Miel de 5 kg",
        peso: 5000,
        precio: 2800,
        stock: 50,
    },
    {
        id: 5,
        nombre: "Miel de 450 gr",
        peso: 450,
        precio: 380,
        stock: 50,
    },
    {
        id: 6,
        nombre: "Propoleo",
        peso: 45,
        precio: 450,
        stock: 50,
    },
    {
        id: 7,
        nombre: "Energizante",
        peso: 100,
        precio: 400,
        stock: 0,
    },
    {
        id: 8,
        nombre: "Cera de Abeja",
        peso: 1000,
        precio: 1400,
        stock: 10,
    },
    {
        id: 9,
        nombre: "Polen",
        peso: 100,
        precio: 500,
        stock: 0,
    }
];


let productoIngresado;
let cantidadIngresada;

function elegirProducto() {
    do {
        productoIngresado = prompt("Elige un producto: Miel de Kilo, Miel de Medio kg, Miel de Cuarto kg, Miel de 5 kg, Miel de 450 gr, Propoleo, Polen, Cera, Energizante")
        cantidadIngresada = parseInt(prompt("Elija la cantidad que desea agregar al carrito"));
    } while (productoIngresado == "" || productoIngresado == null || !isNaN(productoIngresado));
};

let productoSeleccionado;

function verDisponibilidadProducto(nombreProducto, lista, cantidad) {
    productoSeleccionado = lista.find (n => n.nombre === nombreProducto)
    let stock = verificarStock (productoSeleccionado.stock, cantidad)

    if (stock == true) {
        return true;
    } else {
        alert ("Disculpe, no contamos con stock de este producto.");
    }
}

function verificarStock(stockProducto, cantidad) {
    if (stockProducto >= cantidad) {
        return true;
    } else {
        return false;
    }
}

class ProductoAñadido {
    constructor(producto, cantidad) { 
        this.nombre = producto.nombre;
        this.precio = producto.precio;
        this.id = producto.id;
        this.cantidad = cantidad;
        this.subtotal = producto.precio * cantidad;
    }
}

let elegirNuevoProducto;

const carritoCompras = [];

function agregarItem(itemAañadir) {
    carritoCompras.push(itemAañadir);
}


function comprar () {
    elegirProducto();
    let disponibilidad = verDisponibilidadProducto(productoIngresado, listaProductos, cantidadIngresada)

    if(disponibilidad == true) {
        let agregar = prompt("Desea agregar el item " + productoIngresado + " al carrito? SI /NO")
        if(agregar.toUpperCase() === "SI") {
            let item = new ProductoAñadido (productoSeleccionado, cantidadIngresada)
            agregarItem(item)
            elegirNuevoProducto = prompt("¿Quiere elegir un nuevo producto? SI / NO")
        } else {
            elegirNuevoProducto = prompt("¿Quiere elegir un nuevo producto? SI / NO")
        } 
    } else {
        alert("Disculpa, el producto no se encuentra disponible")
        elegirNuevoProducto = prompt("¿Quiere elegir un nuevo producto? SI / NO")
    }
}


comprar() 
while (elegirNuevoProducto.toUpperCase === "SI") {
    comprar();
}

console.log(carritoCompras)
verCarrito()

function verCarrito() {
    carritoCompras.forEach(item => console.log(item.nombre + " cantidad: " + item.cantidad + " subtotal: " + item.subtotal))

    let totalCarrito = carritoCompras.reduce((currentTotal, item) => item.subtotal + currentTotal, 0)
    console.log("El valor total de la compra es de.." + totalCarrito)
}


