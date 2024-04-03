// cuerposCelestes.ts
export class CuerpoCeleste {
    constructor(
        public nombre: string,
        public masa: number,
        public posicionActual: { x: number; y: number },
        public velocidadOrbita: number
    ) {}
}

export class Estrella extends CuerpoCeleste {
    constructor(
        nombre: string,
        masa: number,
        posicionActual: { x: number; y: number },
        velocidadOrbita: number
    ) {
        super(nombre, masa, posicionActual, velocidadOrbita);
    }
}

export class SateliteNatural extends CuerpoCeleste {
    constructor(
        nombre: string,
        masa: number,
        posicionActual: { x: number; y: number },
        velocidadOrbita: number,
        public planetaVinculado: Planeta
    ) {
        super(nombre, masa, posicionActual, velocidadOrbita);
    }
}

export class Planeta extends CuerpoCeleste {
    constructor(
        nombre: string,
        masa: number,
        posicionActual: { x: number; y: number },
        velocidadOrbita: number,
        public estrellaVinculada: Estrella
    ) {
        super(nombre, masa, posicionActual, velocidadOrbita);
    }
}
