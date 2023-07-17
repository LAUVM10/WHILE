// Solicitar al usuario dos números entre 1 y 50
let numero1 = parseInt(prompt("Ingrese el primer número (entre 1 y 50):"));
let numero2 = parseInt(prompt("Ingrese el segundo número (entre 1 y 50):"));

// Verificar que los números ingresados estén dentro del rango válido
if (numero1 < 1 || numero1 > 50 || numero2 < 1 || numero2 > 50) {
  console.log("Los números ingresados no están dentro del rango válido.");
} else {
  // Mostrar los números del 1 al 50 y añadir "¡Lotería!" para los números indicados
  let i = 1;

  while (i <= 50) {
    if (i === numero1 || i === numero2) {
      console.log(i + " ¡Lotería!");
    } else {
      console.log(i);
    }
    i++;
  }
}
