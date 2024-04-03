interface Empleado {
    nombre: string;
    id: number;
    departamento: string;
}

let empleados: Empleado[] = [
    { nombre: "Juan", id: 1, departamento: "Ventas" },
    { nombre: "Maria", id: 2, departamento: "Marketing" },
    { nombre: "Pedro", id: 3, departamento: "Tecnología" }
];

// Mostrar información de los empleados
empleados.forEach(empleado => {
    console.log(`Nombre: ${empleado.nombre}, ID: ${empleado.id}, Departamento: ${empleado.departamento}`);
});

export{}