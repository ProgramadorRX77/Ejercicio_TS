interface Titulo_libro{
    Titulo:String;
}

interface Anio_publicacion{
    Anio:string;
}

interface Autor{
    Nombre_autor:string;
    Nacionalidad:string
}

type Objeto_libro = Titulo_libro & Anio_publicacion & Autor;

const libro: Objeto_libro = {
    Titulo: "No permitas que nadie te robe tu sueño",
    Anio:'1990',
    Nombre_autor: "Dexter Yaguer",
    Nacionalidad: "Dominicana",
}
console.log("*****************************************");
console.log("Informacion del libro ", libro.Titulo);
console.log("*****************************************");
console.log("Titulo del libro: ", libro.Titulo);
console.log("Nombre del Autor: ", libro.Nombre_autor);
console.log("Nacionalidad del autor: => " , libro.Nacionalidad);

export{}