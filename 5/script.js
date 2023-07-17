// Solicitar al usuario un día de la semana hasta que sea domingo
let diaSemana = prompt("Ingrese un día de la semana:");

while (diaSemana.toLowerCase() !== "domingo") {
  // Mostrar un mensaje personalizado para cada día de la semana
  switch (diaSemana.toLowerCase()) {
    case "lunes":
      alert("¡Ánimo, es lunes! Comienza la semana con toda la energía.");
      break;
    case "martes":
      alert("¡Buen martes! Sigue adelante con tus metas.");
      break;
    case "miércoles":
    case "miercoles":
      alert("¡Mitad de semana! Ya falta menos para el fin de semana.");
      break;
    case "jueves":
      alert("¡Feliz jueves! Continúa esforzándote hasta el final.");
      break;
    case "viernes":
      alert("¡Viernes al fin! Disfruta del fin de semana que se acerca.");
      break;
    case "sábado":
    case "sabado":
      alert("¡Feliz sábado! Aprovecha para descansar y divertirte.");
      break;
    default:
      alert("Día no reconocido. Ingresa un día de la semana válido.");
  }

  // Solicitar al usuario otro día de la semana
  diaSemana = prompt("Ingrese otro día de la semana:");
}

// Mostrar el mensaje especial para domingo
alert("Ve a descansar");

