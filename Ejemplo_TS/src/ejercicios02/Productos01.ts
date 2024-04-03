interface Producto{
    nombre:string,
    precio:number,
    categoria:string,
    stock:number
}

function Presentar_producto(producto: Producto):void {
    const {nombre, precio, categoria} = producto;
    
    console.log('Nombre:', nombre);
    console.log('Precio:', precio);
    console.log('Categoría:', categoria);
    console.log('Stock:', producto.stock);

    }

const cargar_producto: Producto = {
    nombre: "Pan Suabe",
    precio: 50,
    categoria: "comestible",
    stock: 5
}

Presentar_producto(cargar_producto);

