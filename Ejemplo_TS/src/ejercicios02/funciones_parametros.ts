function crearPerfilDeUsuario(nombre:string, edad:number, pais:string = "Republica Dominicana"):any {

    return {
        nombre: nombre,
        edad: edad,
        pais: pais,
    }
    
}

const datos = crearPerfilDeUsuario('Jose luis', 25);
console.log(datos);

const datos2 = crearPerfilDeUsuario('Jose luis', 25, "puerto rico");
console.log(datos2);

export{};