import './style.css'
import { setupCounter } from './counter.ts'
import './Proyecto_Galaxia/Codigo_Principal.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hola Mundo </h1>
  <hr> 
`

//console.log("hola mundo");
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!) 
