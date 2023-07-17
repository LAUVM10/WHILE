// Crear una variable para almacenar la concatenación de las palabras
let resultado = "";

// Solicitar al usuario letras o palabras hasta que no ingrese nada
let entrada = prompt("Ingrese una letra o palabra (deje vacío para terminar):");

while (entrada !== "") {
  // Concatenar la entrada del usuario al resultado
  resultado += entrada;

  // Solicitar al usuario la siguiente entrada
  entrada = prompt("Ingrese otra letra o palabra (deje vacío para terminar):");
}

// Mostrar la concatenación de todas las palabras capturadas en pantalla
console.log("Resultado:", resultado);
