function crearListaDeCompra(...articulos: string[]): {[articulo: string]: boolean} {
    let listaDeCompra: {[articulo: string]: boolean} = {};

    articulos.forEach(articulo => {
        listaDeCompra[articulo] = false;
    });

    return listaDeCompra;
}

// Ejemplo de uso
const lista = crearListaDeCompra("Manzanas", "Pan", "Leche");
console.log(lista); // Output: { Manzanas: false, Pan: false, Leche: false }

export{}