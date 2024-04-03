const direccion = { calle: 'Av. Siempre Viva', ciudad: 'Springfield', pais: 'EE.UU.' }; 
// Desestructura y renombra las variables calle y ciudad a nombreCalle y nombreCiudad 
// Imprime nombreCalle y nombreCiudad


const {calle:Nombre_calle, ciudad:Nombre_ciudad} = direccion; 

console.log('calle: ',Nombre_calle, 'Ciudad: ', Nombre_ciudad, 'Pais: ', direccion.pais);