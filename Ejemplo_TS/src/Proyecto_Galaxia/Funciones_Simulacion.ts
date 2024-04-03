// funcionesSimulacion.ts
import { CuerpoCeleste, Estrella, Planeta, SateliteNatural } from "./cuerposCelestes";

export function agregarCuerpoCeleste(cuerpoCeleste: CuerpoCeleste, sistema: (Estrella | Planeta)[]): void {
    sistema.push(cuerpoCeleste);
}

export function buscarCuerpoCelestePorNombre(nombre: string, sistema: (Estrella | Planeta)[]): CuerpoCeleste | null {
    return sistema.find(cuerpoCeleste => cuerpoCeleste.nombre === nombre) || null;
}

export function calcularPosicionFutura(cuerpoCeleste: CuerpoCeleste, tiempo: number): { x: number, y: number } {
    const distanciaRecorrida = cuerpoCeleste.velocidadOrbita * tiempo;
    const angulo = (distanciaRecorrida / Math.PI) * 180;
    const posicionX = cuerpoCeleste.posicionActual.x + distanciaRecorrida;
    const posicionY = cuerpoCeleste.posicionActual.y + distanciaRecorrida;
    return { x: posicionX, y: posicionY };
}

export function simularMovimientoOrbital(cuerpoCeleste: CuerpoCeleste, tiempo: number): void {
    const nuevaPosicion = calcularPosicionFutura(cuerpoCeleste, tiempo);
    cuerpoCeleste.posicionActual = nuevaPosicion;
}
