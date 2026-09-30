//Escenario: En tu archivo desafio2.js, programa el motor de toma de decisiones para validar reglas de juego:


/*1. Evaluación de Enroque (if / else combinados): Declara las booleanas reyMovido, torreMovida y
enJaque. Un enroque solo es legal si el rey no se ha movido (!reyMovido), la torre tampoco (!torreMovida) y
no hay jaque (!enJaque).*/

let reyMovido = false;
let torreMovida = false;
let enJaque = false;

if (!reyMovido && !torreMovida && !enJaque) {
    console.log("enroque legal");
} else {
    console.log("enroque ilegal");
}


/*2. Comportamiento por Pieza (switch): Dado el nombre de una pieza ('torre', 'caballo', 'peon', etc.),
imprime su rango de movimiento. Incluye obligatoriamente la sección default para manejar casillas vacías
o entradas inválidas.*/

let pieza = 'torre'; //probar cambiando por las demas piezas

switch (pieza.toLowerCase()) {
    case 'peon':
        console.log("Peón: Avanza 1 casilla hacia adelante (2 en su primer movimiento). Captura en diagonal.");
        break;
    case 'caballo':
        console.log("Caballo: Se mueve en forma de 'L' y puede saltar sobre otras piezas.");
        break;
    case 'alfil':
        console.log("Alfil: Se mueve en diagonal todas las casillas que quiera.");
        break;
    case 'torre':
        console.log("Torre: Se mueve en horizontal y vertical todas las casillas que quiera.");
        break;
    case 'reina':
        console.log("Dama: Se mueve en horizontal, vertical y diagonal todas las casillas que quiera.");
        break;
    case 'rey':
        console.log("Rey: Se mueve 1 casilla en cualquier dirección.");
        break;
    default:
        console.log("Casilla vacía o entrada inválida.");
        break;
}


/*3. Promoción de Peón (Operador Ternario): Dada la fila de destino de un peón (1 a 8), utiliza un
operador ternario para asignar la figura promocionada: si llega a la fila 8 (o fila 1 en negras) se transforma
en Dama ('♛' / '♕'), en caso contrario sigue siendo Peón.*/

let filaDestino = 8;
let esNegra = false; // true si es negra, false si es blanca

// fila 1 negras / fila 8 blancas
let llegaAlFinal = (esNegra && filaDestino === 1) || (!esNegra && filaDestino === 8);

let figuraPromocionada = llegaAlFinal ? (esNegra ? '♕' : '♛') : 'Peón';

console.log(`Resultado de la promoción: ${figuraPromocionada}`);