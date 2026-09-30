//Escenario: En tu archivo desafio3.js, implementa la iteración bidimensional del tablero:


//1. Mediante dos bucles for anidados (filas de 8 a 1 y columnas de 'a' a 'h'), genera las 64 coordenadas algebraicas.

const columnas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


for (let fila = 8; fila >= 1; fila--) {
    // columna de 'a' a 'h'
    for (let colIndex = 0; colIndex < columnas.length; colIndex++) {
        let columna = columnas[colIndex];
        let coordenada = `${columna}${fila}`;

        /*2.Utiliza la fórmula de paridad (fila + colIndex) % 2 === 0
        para determinar si la casilla es clara u oscura.*/

        let esClara = (fila + colIndex) % 2 === 0;
        let colorCasilla = esClara ? "Clara" : "Oscura";

        console.log(`Casilla ${coordenada}: ${colorCasilla}`);
    }
}


// 3. Recorrido de Jugadas con for...of (continue y break)


const jugadas = [
    "e4",
    "e5",
    "// El blanco prepara ataque", // Comentario a saltar
    "Nf3",
    "Nc6",
    "Bc4",
    "// Posible jaque mate rápido", // Comentario a saltar
    "Qf3#",                         // Jaque mate (interrumpe)
    "A6",
    "b4"
];

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