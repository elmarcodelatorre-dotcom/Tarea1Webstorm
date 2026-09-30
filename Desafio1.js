//Escenario: En tu archivo desafio1.js, debes desarrollar la lógica para llevar el marcador de una partida de ajedrez:

//1. Declara constantes con los valores de las piezas: PEON=1, CABALLO=3, ALFIL=3, TORRE=5, DAMA=9.
const PEON = 1;
const CABALLO = 3;
const ALFIL = 3;
const TORRE = 5;
const DAMA = 9;

//2. Declara variables para acumular los puntos de las Blancas y de las Negras inicializadas a 0.
let puntosBlancas = 0;
let puntosNegras = 0;
let ventaja = puntosBlancas - puntosNegras;

//3. Simula una secuencia de 4 capturas acumulando los puntos con asignación compuesta (+=).
puntosBlancas += PEON; // 1
puntosBlancas += CABALLO; //3
puntosNegras += TORRE; //5
puntosBlancas += DAMA; //9

//4. Dado un número de jugada actual (ej. let jugada = 15;), calcula con el operador módulo (%) de quién es el turno.
let jugada = 15;
let turnoText = (jugada % 2 !== 0) ? "mueven blancas" : "mueven negras";

/*5. Muestra en la consola el informe completo utilizando exclusivamente Template Literals y comprueba los
tipos de datos con typeof.*/
console.log(`Puntuación Blancas: ${puntosBlancas} pts | Puntuación Negras:${puntosBlancas} pts`);
console.log(`Ventaja Material: ${ventaja} pts`);
console.log(`Estado del Turno: Jugada ${jugada} ${turnoText}`);

// typeof
console.log("\nComprobación de tipos:");
console.log(`Tipo de puntosBlancas: ${typeof puntosBlancas}`); // number
console.log(`Tipo de turnoTexto: ${typeof turnoText}`);       // string