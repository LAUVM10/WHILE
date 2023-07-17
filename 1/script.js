// Solicitar al usuario un número
let numero = parseInt(prompt("Introduce un número:"));

// Variable para iterar
let i = 1;

// Mientras i sea menor o igual al número introducido
while (i <= numero) {
  // Verificar si el número es múltiplo de 5
  if (i % 5 === 0) {
    console.log(i); // Mostrar el número en la consola
  }
  
  // Incrementar i en 1
  i++;
}
