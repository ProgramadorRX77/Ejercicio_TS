// codigoPrincipal.ts
import { Estrella, Planeta, SateliteNatural } from "./cuerposCelestes";
import { agregarCuerpoCeleste, buscarCuerpoCelestePorNombre, calcularPosicionFutura, simularMovimientoOrbital } from "./Funciones_Simulacion";

// Crear instancias de la estrella y los planetas
const sol = new Estrella("Sol", 1989000, { x: 0, y: 0 }, 0);
const tierra = new Planeta("Tierra", 1, { x: 30, y: 0 }, 0.06, sol);

// Arreglo de cuerpos celestes
const sistemaSolar: (Estrella | Planeta)[] = [sol, tierra];

// Agregar un nuevo cuerpo celeste
const marte = new Planeta("Marte", 0.107, { x: 40, y: 0 }, 0.05, sol);
agregarCuerpoCeleste(marte, sistemaSolar);

// Buscar un cuerpo celeste por nombre
const planetaBuscado = buscarCuerpoCelestePorNombre("Tierra", sistemaSolar);
if (planetaBuscado) {
    console.log("Planeta encontrado:", planetaBuscado);
} else {
    console.log("Planeta no encontrado");
}

// Simular movimiento orbital de la Tierra
const tiempoSimulacion = 10; // En años
simularMovimientoOrbital(tierra, tiempoSimulacion);
console.log("Posición futura de la Tierra:", calcularPosicionFutura(tierra, tiempoSimulacion));
