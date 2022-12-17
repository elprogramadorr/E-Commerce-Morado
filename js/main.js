// PRODUCTOS
const productos = [
    // Abrigos
    {
        id: "abrigo-01",
        titulo: "Abrigo 01",
        imagen: "./img/abrigos/01.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "./img/abrigos/02.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "./img/abrigos/03.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "./img/abrigos/04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-05",
        titulo: "Abrigo 05",
        imagen: "./img/abrigos/05.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    // Camisetas
    {
        id: "camiseta-01",
        titulo: "Camiseta 01",
        imagen: "./img/camisetas/01.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta 02",
        imagen: "./img/camisetas/02.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-03",
        titulo: "Camiseta 03",
        imagen: "./img/camisetas/03.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-04",
        titulo: "Camiseta 04",
        imagen: "./img/camisetas/04.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-05",
        titulo: "Camiseta 05",
        imagen: "./img/camisetas/05.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-06",
        titulo: "Camiseta 06",
        imagen: "./img/camisetas/06.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-07",
        titulo: "Camiseta 07",
        imagen: "./img/camisetas/07.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-08",
        titulo: "Camiseta 08",
        imagen: "./img/camisetas/08.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    // Pantalones
    {
        id: "pantalon-01",
        titulo: "Pantalón 01",
        imagen: "./img/pantalones/01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón 02",
        imagen: "./img/pantalones/02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón 03",
        imagen: "./img/pantalones/03.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-04",
        titulo: "Pantalón 04",
        imagen: "./img/pantalones/04.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón 05",
        imagen: "./img/pantalones/05.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    }
];
const contenedorProductos=document.querySelector("#contenedor-productos");
const tituloPrincipal=document.querySelector('#titulo-principal');
function cargarProductos(productList){
    contenedorProductos.innerHTML="";
    productList.forEach(
        producto => {
            const div=document.createElement('div');
            div.classList.add('producto');
            div.innerHTML = `
                <img class = "producto-imagen" src = "${producto.imagen}" alt="">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">${producto.precio} $</button>
                    <button class="producto-agregar" id="${producto.id}">Agregar</button>
                `;
            contenedorProductos.append(div);
        }
    );
    recargarBotones();
}
const productosEnCarrito=[];
function recargarBotones(){
    botones=document.querySelectorAll('.producto-agregar');
    botones.forEach(boton=>{
        boton.addEventListener('click',e=>{
            let producto=productos.find(producto=>producto.id==boton.id);
            //producto es lo que quiero meter

            console.log("encontre");
            console.log(producto);
            //meter al carrito
            if(productosEnCarrito.some(a=>a.id==producto.id)){

            }else{
                productosEnCarrito.push(producto);
            }
        });
    });
}
cargarProductos(productos);
let botonesCategorias =  document.querySelectorAll('.boton-menu');
//console.log(typeof(botonesCategorias));
//const todos=document.querySelector('#todos');
botonesCategorias.forEach(boton =>{
    boton.addEventListener('click',event=>{
        //primero elimino todos
        botonesCategorias.forEach(a=>a.classList.remove('active'));
        boton.classList.add('active');
        if(boton.id=="todos"){
            cargarProductos(productos);
            tituloPrincipal.innerText="Todos los Productos";
        }else{
            const ayuda=productos.find(producto=>producto.categoria.id==boton.id);
            tituloPrincipal.innerText=ayuda.categoria.nombre;
            cargarProductos(productos.filter(producto=>{
                if(producto.categoria.id==boton.id){
                    //console.log("mary on a croosss");
                    return true;
                }else{
                    //console.log(producto.categoria.nombre," vs ",boton.id);
                    //console.log("you go down just like holy mary");
                    return false;
                }
            }));
        }
    });
}
);


