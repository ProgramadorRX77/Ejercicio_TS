interface Game_Personaje {
    Nombre: string;
    HP: number;
    Habilidades: string[];
    Pueblo_natal: string;
    experiencia_combate: number;
}

interface Personaje_extendido extends Game_Personaje {
    experiencia_combate: number;
}

type Personaje2 = Personaje_extendido;
const Personaje_Jugador2: Personaje2 = {
    Nombre: "Juan Sin Miedo",
    HP: 20000, // Agrega un valor para los puntos de vida (HP) del personaje extendido
    Habilidades: ['Sombra Desgarradora', 'Shadow hands', 'Coraje Destructor'], // Agrega habilidades para el personaje extendido
    Pueblo_natal: "Ilvania", // Agrega un pueblo natal para el personaje extendido
    experiencia_combate: 20000, // Agrega un valor para la experiencia de combate
};

type Personaje = Game_Personaje;

const Personaje_Jugador: Personaje = {
    Nombre: "Exol de Lulucia",
    HP: 5000,
    Habilidades: ['Fuego abrazador', 'Llamas ardientes', 'Azufre destructor'],
    Pueblo_natal: "Lulucia",
    experiencia_combate: 10000,
    
};

console.log("Información del Personaje Exol de Lulucia");
console.log("Nombre: ", Personaje_Jugador.Nombre);
console.log("Puntos de Vida: ", Personaje_Jugador.HP);
console.log("Pueblo natal: ", Personaje_Jugador.Pueblo_natal);
console.log("Experiencia en Combate: ", Personaje_Jugador.experiencia_combate);
console.log("Habilidades de Exol: ", Personaje_Jugador.Habilidades[0],"||", Personaje_Jugador.Habilidades[1], 
"||",Personaje_Jugador.Habilidades[2]);

/*
for (let habilidad of Personaje_Jugador.Habilidades) {
    console.log('Habilidad:', habilidad);
} */

console.log('==========================================================');

console.log("Información del Personaje Juan Sin Miedo de Ilvania");
console.log("Nombre: ", Personaje_Jugador2.Nombre);
console.log("Puntos de Vida: ", Personaje_Jugador2.HP);
console.log("Pueblo natal: ", Personaje_Jugador2.Pueblo_natal);
console.log("Experiencia en Combate: ", Personaje_Jugador2.experiencia_combate);
console.log("Habilidades de Juan Sin Miedo: ", Personaje_Jugador2.Habilidades[0],"||", Personaje_Jugador2.Habilidades[1], 
"||",Personaje_Jugador2.Habilidades[2]);
/*
for (let habilidad2 of Personaje_Jugador2.Habilidades) {
    console.log('Habilidad:', habilidad2);
} */