/* @file desafio3.js
 * @description Generador algorítmico de tablero de ajedrez 8x8 y procesador de historial de jugadas.
 * @author Marco De La Torre Sánchez
 * @coauthor Sara López Shaida
 * @version 1.0.0
 * @date 2026-10-10*/

//Escenario: En tu archivo desafio3.js, implementa la iteración bidimensional del tablero:

//1. Mediante dos bucles for anidados (filas de 8 a 1 y columnas de 'a' a 'h'), genera las 64 coordenadas algebraicas.

/*Comentario SARA: Define las columnas del tablero con un array. Esto permite usar índices numéricos (0 a 7)
 * Array que contiene las letras representativas de las columnas del tablero.
 * @type {string[]}
 */
const columnas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// Comentario SARA: Bucle externo: recorre las filas en orden inverso (de 8 a 1)
for (let fila = 8; fila >= 1; fila--) {
    // Primer comentario de MARCO (autor): columna de 'a' a 'h'
    /* Comentario SARA: Bucle interno: recorre los índices numéricos del array las columnas
     Para cada fila, este bucle se ejecutará 8 veces (de la 'a' a la 'h')*/
    for (let colIndex = 0; colIndex < columnas.length; colIndex++) {
        // Comentario SARA: Extraer la letra correspondiente (ej: si colIndex es 0, columna es a)
        let columna = columnas[colIndex];
        // Comentario SARA: Concatena la letra y el número para formar la coordenada (ej: 'a8')
        let coordenada = `${columna}${fila}`;

        /*2.Utiliza la fórmula de paridad (fila + colIndex) % 2 === 0
        para determinar si la casilla es clara u oscura.*/

        /* Comentario SARA: La suma de la fila y el índice numérico crea un patrón que se alterna.
         Usamos el operador módulo (%) para dividir entre 2. Si el resto es 0 (par) es true*/
        let esClara = (fila + colIndex) % 2 === 0;
        // Comentario SARA: Operador ternario (condición ? valor_si_true : valor_si_false)
        // forma corta de hacer un if/else
        let colorCasilla = esClara ? "Clara" : "Oscura";

        console.log(`Casilla ${coordenada}: ${colorCasilla}`);
    }
}


// 3. Recorrido de Jugadas con for...of (continue y break)

// Comentario SARA: Almacenamos el historial de la partida, que mezcla jugadas reales con comentarios de texto explicativos.
/**
 * Registro de movimientos de ajedrez y anotaciones textuales.
 * @type {string[]}
 */

const jugadas = [
    "e4",
    "e5",
    "// El blanco prepara ataque", //Primer comentario de MARCO (autor): Comentario a saltar
    "Nf3",
    "Nc6",
    "Bc4",
    "// Posible jaque mate rápido", //Primer comentario de MARCO (autor):Comentario a saltar
    "Qf3#",                         //Primer comentario de MARCO (autor): Jaque mate (interrumpe)
    "A6",
    "b4"
];
/* Comentario SARA: Este bucle for...of lee cada jugada.
Usa 'continue' para ignorar las líneas de texto y
'break' para detener el programa en seco cuando alguien hace jaque mate*/
for (let jugada of jugadas) {
    if (jugada.startsWith("//")) {
        continue;
    }

    console.log(`Procesando jugada: ${jugada}`);

    if (jugada.includes("#")) {
        console.log("jaque mate, fin de partida.");
        break;
    }
}