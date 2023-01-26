

let producto = [
    {
        id: 1,
        nombre: 'Dije piedra amatista con cadena',
        precio: 'precio: $ ' +1995,
        imagen: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTz6AYPI8nvvSFVvVCzaJF2qxM8mFWmWtKUkr63BYjRuGZiLpu9oT_cqxQq4UyFG1x_pvjuLjwH9Q&usqp=CAc",
        cantidad: 1
    },
    {
        id: 2,
        nombre: 'Dije piedra turmalina negra con cadena',
        precio: 'precio: $ ' +2162,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9hMAgDrPcDve-6yLYYeGlxjfTFuKeEC2Qk_CaW-jkXOrpZ0RpjGg&usqp=CAE&s",
        cantidad: 1
    },
    {
        id: 3,
        nombre: 'Dije piedra rodocrosita forma libre',
        precio: 'precio: $ ' +1750,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_862805-MLA52531487309_112022-V.webp",
        cantidad: 1
    },
    {
        id: 4,
        nombre: 'Dije piedra ágata azul con cadena',
        precio: 'precio: $ ' +2750,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpdyzPjAHyken2cOgJWReLoy4yJLkCH8LdeAk19nFT8GxyvLERK5W8&usqp=CAE&s",
        cantidad: 1
    },
    {
        id: 5,
        nombre: 'Dije piedra cuarzo rosa con cadena',
        precio: 'precio: $ ' +2795,
        imagen: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQUB4CujO47KLdLxQxTZVMkRpn3TMtL8hqzODrztMrwGVieQ_XFRiqhpndbG2MdPmcrPSf5RQ_Blev6&usqp=CAc",
        cantidad: 1
    },
    {
        id: 6,
        nombre: 'Dije ágata cornalina con cadena',
        precio: 'precio: $ ' +2395,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_789650-MLA49832955167_052022-V.webp",
        cantidad: 1
    }

]

let carrito = []

producto.forEach(producto => {
    let productoRenderizado = document.createElement("div")
    productoRenderizado.innerHTML = `
    <div class="card" id="tarjetaProducto" style="width: 16rem;">
        <img src="${producto.imagen}" class="card-img-top imgProducto" alt="card imagen cap">
        <div class="card-body-objeto"> 
            <h4 class="card-title">${producto.nombre}</h4>
            <p class="card-text precio">${producto.precio}</p>
        </div>
        <button id=${producto.id}>Comprar</button>
    </div>`
    
    div.append(productoRenderizado)
    // funcionalidad del boton Comprar
    const boton = document.getElementById(producto.id)
    boton.addEventListener("click", () => comprarProducto(producto))
})

// Actualizar carrito cada vez que se haga clic sobre el boton de un producto
function comprarProducto(producto) {
    // console.log(producto.id)
    let productoExiste = carrito.find(item => item.id === producto.id)
    if (productoExiste !== undefined) {
        productoExiste.precio = productoExiste.precio + producto.precio
        productoExiste.cantidad ++
        console.log(carrito)
    } else {
        carrito.push(producto)
        console.log(carrito)
    }
} 


console.log(carrito)
boton.addEventListener("click", () => console.log(carrito))
