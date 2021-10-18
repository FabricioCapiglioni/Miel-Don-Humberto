$(() => {


    const listaProductos = [{
            id: 1,
            nombre: "Miel de Kilo",
            peso: 1000,
            precio: 600,
            stock: 500,
            img: "https://i.ibb.co/pQmqMCt/kilo.jpg",
            subtotal: 600,
            cantidad: 1,
        }, {
            id: 2,
            nombre: "Miel de Medio kg",
            peso: 500,
            precio: 350,
            stock: 500,
            img: "https://i.ibb.co/xDWBmPR/medio.jpg",
            subtotal: 350,
            cantidad: 1,
        },
        {
            id: 3,
            nombre: "Miel de Cuarto kg",
            peso: 250,
            precio: 200,
            stock: 500,
            img: "https://i.ibb.co/6Wh0RB5/cuarto.jpg",
            subtotal: 200,
            cantidad: 1,
        },
        {
            id: 4,
            nombre: "Miel de 5 kg",
            peso: 5000,
            precio: 2800,
            stock: 50,
            img: "https://i.ibb.co/kyGS7hJ/cinco.jpg",
            subtotal: 2800,
            cantidad: 1,
        },
        {
            id: 5,
            nombre: "Miel de 450 gr",
            peso: 450,
            precio: 380,
            stock: 50,
            img: "https://i.ibb.co/59SvWpQ/450.jpg",
            subtotal: 380,
            cantidad: 1,
        },
        {
            id: 6,
            nombre: "Propoleo",
            peso: 45,
            precio: 450,
            stock: 50,
            img: "https://i.ibb.co/HD6T2FN/propoleo.jpg",
            subtotal: 450,
            cantidad: 1,
        },
        {
            id: 7,
            nombre: "Energizante",
            peso: 100,
            precio: 400,
            stock: 30,
            img: "https://i.ibb.co/GHRNyzm/energizante.jpg",
            subtotal: 400,
            cantidad: 1,
        },
        {
            id: 8,
            nombre: "Cera de Abeja",
            peso: 1000,
            precio: 1400,
            stock: 10,
            img: "https://i.ibb.co/q9cxSTx/cera.jpg",
            subtotal: 1400,
            cantidad: 1,
        },
        {
            id: 9,
            nombre: "Polen",
            peso: 100,
            precio: 500,
            stock: 20,
            img: "https://i.ibb.co/Kh3TFSn/polen.jpg",
            subtotal: 500,
            cantidad: 1,
        }
    ];


    //-----------------------------------------------------------------------------------------------

    // Genero los productos en el html.


    function cargarProductos(listaProductos) {


        for (const producto of listaProductos) {
            if (producto.stock > 0) {
                $('#cards').append(`
        <div class="card">
            <div class="headerCard row">
                <h3>${producto.nombre}</h3>
            </div>
            <img class="imgCard" src= ${producto.img}>
            <p> Peso Neto: ${producto.peso} gr.</p>
            <p class="cardPrecio"> $${producto.precio}</p> 
            <div class="addToCart">
                <i id="${producto.id}" class="fas fa-cart-plus agregarAlCarrito" title="Agregar al Carrito"></i>
            </div>
        </div>`);
            }
        }

    }

    cargarProductos(listaProductos);

    //-----------------------------------------------------------------------------------------------

    /************************************ Buscar Productos ************************************/

    $('#buscar').keypress(apretarBoton)

    $('#buscar').keyup(busqueda)

    $("#botonBuscar").on('click', busqueda)

    function apretarBoton() {
        if (event.keyCode == 13) {
            busqueda()
        }
    }

    function busqueda() {

        let valorIngresado = $("#buscar").val().toLowerCase();

        if (valorIngresado == "") {

            $("#cards").empty();

            cargarProductos(listaProductos);

        } else {

            $("#cards").empty();

            let productoFiltrado = listaProductos.filter(producto => producto.nombre.toLowerCase().indexOf(valorIngresado) > -1);

            cargarProductos(productoFiltrado);

        }
    }

    /************************************ Agregar Productos Al Carrito ************************************/

    function agregado(e) {

        e.target.parentElement.innerHTML = "Producto agregado";
        e.target.style.display = "none";
    }


    $(".agregarAlCarrito").click((e) => {
        agregarAlCarrito(e);
    });

    let carrito = [];

    function agregarAlCarrito(e) {

        $(e.target).parent().parent().animate({
            opacity: '0.5'
        }, "slow", agregado(e));

        let productoClickeado = listaProductos.find((item) => item.id == e.target.id);

        carrito.push(productoClickeado);

        localStorage.setItem("localCarrito", JSON.stringify(carrito));

    }

    let localCart = JSON.parse(localStorage.getItem("localCarrito"));
    mostrarItemsEnCarrito(localCart);

    let pTotalCarrito = 0;

    totales()

    function totales() {

        pTotalCarrito = 0;
        
        for (let i = 0; localCart.length > i; i++) {
            localCart[i].subtotal = localCart[i].precio*localCart[i].cantidad;
            pTotalCarrito += localCart[i].subtotal;
        }
    
        $('#sumaTotal').replaceWith(`<p id="sumaTotal">$ ${pTotalCarrito}</p>`);
    }
    

    function mostrarItemsEnCarrito(array) {

        $('#nav-home').empty();

        for (const producto of array) {
            $('#nav-home').append(` 
        <div class="prod row">
            <div class="eliminarItem col-sm-1">
                <i id="${producto.id}" class="fas fa-trash eliminarProducto" title="Eliminar del carrito"></i>
            </div>
            <div class="prodDesc row col-sm-4">
                <div class="imgProd col-sm-4">
                    <img src="${producto.img}" alt="" >
                </div>
                <div class="prodType col-sm-8">
                    <p>${producto.nombre}</p>
                </div>
            </div>
            <div class="itemCant row col-sm-4">
                <input id="${producto.id}" class="cantidad" value="${producto.cantidad}" type="number" min="1" >
                <p>Disponibles: ${producto.stock}</p>
                <div></div>
            </div>
            <div class="row price col-sm-2">
                <p class="signo col-sm-8">$</p>
                <p id="${producto.name}" class="precioItem col-sm-4">${producto.subtotal}</p>
            </div> 
        </div>`);

            let eliminado = $(".eliminarProducto");

            for (let i = 0; eliminado.length > i; i++) {
                eliminado[i].addEventListener("click", removerItem);
            }

            let sinStock;

            $('.cantidad').keyup("change", function (e) {
                e.preventDefault();
                
                let productoClickeado = listaProductos.find((item) => item.id == e.target.id);

                sinStock = e.target.parentElement.lastElementChild;

                if (e.target.value > productoClickeado.stock) {

                    $('#continuarCompra').attr('disabled', 'disabled');
                    $('#continuarCompra').addClass('bloquearCompra')

                    
                    if (sinStock.firstChild == null) {
                        sinStock.innerHTML= (`<p style="color:red;">No hay stock suficiente</p>`)
                    } 

                } else if (e.target.value <= 0){

                    $('#continuarCompra').attr('disabled', 'disabled');
                    $('#continuarCompra').addClass('bloquearCompra')

                    if (sinStock.firstChild == null) {
                        sinStock.innerHTML= (`<p style="color:red;">La cantidad debe ser mayor a 0</p>`)
                    } 

                }else {

                    sinStock.innerHTML = "";

                    $('#continuarCompra').removeAttr('disabled')
                    $('#continuarCompra').removeClass('bloquearCompra');

                    let itemRemplazar = localCart.findIndex((item) => item.id == e.target.id)
                    localCart.splice(itemRemplazar, 1);

                    let cantidad = parseInt(e.target.value);

                    productoClickeado['cantidad'] = cantidad;
                    productoClickeado['subtotal'] = productoClickeado.precio*cantidad;

                    localCart.push(productoClickeado);

                    e.target.parentElement.nextElementSibling.lastElementChild.innerText = `${productoClickeado.subtotal}`;
                    
                    totales();
                   
                }
            });
        }

        if (localCart == 0) {
            $('#nav-home').append(`<p>No hay productos en el carrito</p>`);
        }
    }



    function removerItem(e) {

        let indexDelProducto = localCart.findIndex((item) => item.id == e.target.id);

        localCart.splice(indexDelProducto, 1);

        mostrarItemsEnCarrito(localCart);

        localStorage.setItem("localCarrito", JSON.stringify(localCart));

        totales();
    }

    $('#vaciar').on('click', function () {
        
        localCart = [];
        $('#nav-home').empty();
        localStorage.setItem("localCarrito", JSON.stringify(localCart));
        totales();
    });

  
    let dir = {};

    $('#guardarDireccion').on('click', (e) => {

        e.preventDefault();

        let direccion = {
            nombre: $('#inpNombre').val(),
            codigo: $('#inpCodigoPostal').val(),
            provincia: $('#inpProvincia').val(),
            localidad: $('#inpLocalidad').val(),
            calle: $('#inpDireccion').val(),
            numero: $('#inpNumero').val(),
            piso: $('#inpPiso').val(),
            calle1: $('#inpEntreCalles1').val(),
            calle2: $('#inpEntreCalles2').val(),
            comentario: $('#inpComentario').val(),
            telefono: $('#inpTelefono').val()
        };
        
        localStorage.setItem("localDireccion", JSON.stringify(direccion));

    })

    dir = JSON.parse(localStorage.getItem("localDireccion"));
   
    
    $('#continuarCompra').on('click', () => {
        
        let compra = localCart;

        compra.push(dir)

        let totalCompra ={

            precioTotal: pTotalCarrito

        }

        compra.push(totalCompra)

        localStorage.setItem("Compra", JSON.stringify(compra));

    }); 


});