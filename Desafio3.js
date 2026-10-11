/* @file desafio3.js
 * @description Generador algorítmico de tablero de ajedrez 8x8 y procesador de historial de jugadas.
 * @author Marco De La Torre Sánchez
 * @coauthor Sara López Shaida
 * @version 1.0.0
 * @date 2026-10-10*/

// Escenario: En tu archivo desafio3.js, implementa la iteración bidimensional del tablero:

// 1. Mediante dos bucles for anidados (filas de 8 a 1 y columnas de 'a' a 'h'), genera las 64 coordenadas algebraicas.

/* Comentario SARA: Define las columnas del tablero con un array. Esto permite usar índices numéricos (0 a 7)
 * Array que contiene las letras representativas de las columnas del tablero.
 * @type {string[]}
 */
// Comentario MARCO: Guardamos las letras de las columnas en una lista para luego combinarlas con las filas
const columnas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// Comentario SARA: Bucle externo: recorre las filas en orden inverso (de 8 a 1)
// Comentario MARCO: Empezamos por la fila 8 (arriba del todo) y bajamos hasta la 1
for (let fila = 8; fila >= 1; fila--) {
    // Comentario MARCO: Bucle interno para ir recorriendo las columnas de la 'a' a la 'h'
    /* Comentario SARA: Bucle interno: recorre los índices numéricos del array las columnas
     Para cada fila, este bucle se ejecutará 8 veces (de la 'a' a la 'h')*/
    for (let colIndex = 0; colIndex < columnas.length; colIndex++) {
        // Comentario SARA: Extraer la letra correspondiente (ej: si colIndex es 0, columna es a)
        // Comentario MARCO: Sacamos la letra del array según el índice en el que estemos
        let columna = columnas[colIndex];

        // Comentario SARA: Concatena la letra y el número para formar la coordenada (ej: 'a8')
        // Comentario MARCO: Juntamos letra y número para sacar la coordenada (ej: 'a8', 'b8'...)
        let coordenada = `${columna}${fila}`;

        /* 2. Utiliza la fórmula de paridad (fila + colIndex) % 2 === 0
         para determinar si la casilla es clara u oscura. */

        /* Comentario SARA: La suma de la fila y el índice numérico crea un patrón que se alterna.
         Usamos el operador módulo (%) para dividir entre 2. Si el resto es 0 (par) es true*/
        // Comentario MARCO: Si la suma de fila e índice es par (resto 0), la casilla es clara
        let esClara = (fila + colIndex) % 2 === 0;

        // Comentario SARA: Operador ternario (condición ? valor_si_true : valor_si_false)
        // forma corta de hacer un if/else
        // Comentario MARCO: Le asignamos la etiqueta "Clara" o "Oscura" según el resultado
        let colorCasilla = esClara ? "Clara" : "Oscura";

        // Comentario MARCO: Imprimimos en consola la casilla con su posición y su color
        console.log(`Casilla ${coordenada}: ${colorCasilla}`);
    }
}


// 3. Recorrido de Jugadas con for...of (continue y break)

// Comentario SARA: Almacenamos el historial de la partida, que mezcla jugadas reales con comentarios de texto explicativos.
/**
 * Registro de movimientos de ajedrez y anotaciones textuales.
 * @type {string[]}
 */

// Comentario MARCO: Lista con la partida en formato PGN, con algunos comentarios colados
const jugadas = [
    "e4",
    "e5",
    "// El blanco prepara ataque", // Comentario MARCO: Texto explicativo a saltar
    "Nf3",
    "Nc6",
    "Bc4",
    "// Posible jaque mate rápido", // Comentario MARCO: Otro comentario a saltar
    "Qf3#",                         // Comentario MARCO: Jaque mate, interrumpe el programa
    "A6",
    "b4"
];

/* Comentario SARA: Este bucle for...of lee cada jugada.
Usa 'continue' para ignorar las líneas de texto y
'break' para detener el programa en seco cuando alguien hace jaque mate*/
// Comentario MARCO: Recorremos el historial elemento a elemento para procesar la partida
for (let jugada of jugadas) {
    // Comentario MARCO: Si la línea empieza por "//", la saltamos con 'continue' porque no es una jugada
    if (jugada.startsWith("//")) {
        continue;
    }

    // Comentario MARCO: Mostramos por pantalla la jugada real que se procesa
    console.log(`Procesando jugada: ${jugada}`);

    // Comentario MARCO: Si encontramos '#', hay jaque mate y cortamos el bucle con 'break'
    if (jugada.includes("#")) {
        console.log("jaque mate, fin de partida.");
        break;
    }
}