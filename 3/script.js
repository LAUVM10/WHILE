// Crear un arreglo vacío para almacenar los números
const numeros = [];

// Solicitar al usuario los números hasta que ingrese 0
let numero = parseInt(prompt("Ingrese un número (0 para terminar):"));

while (numero !== 0) {
  // Verificar si el usuario ingresó un número válido y agregarlo al arreglo
  if (!isNaN(numero)) {
    numeros.push(numero);
  }

  // Solicitar al usuario el siguiente número
  numero = parseInt(prompt("Ingrese otro número (0 para terminar):"));
}

// Mostrar la lista de números capturados en la consola
console.log("Números capturados:", numeros);
