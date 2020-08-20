//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const inputsTiempoDeClases = document.querySelectorAll("input");
const botonCalcular = document.querySelector("button");

let minutosEnXSegundos;
let segundosRestantes;
let minutosTotales;
let horasEnXMinutos;
let calculoHoras;

const calcularTiempoTotal = function (horas, minutos, segundos) {
  minutosEnXSegundos = Math.floor(segundos / 60);
  segundosRestantes = segundos % 60;
  minutosTotales = (minutosEnXSegundos + minutos) % 60;
  horasEnXMinutos = Math.floor((minutosEnXSegundos + minutos) / 60);
  calculoHoras = horas + horasEnXMinutos;
};

botonCalcular.onclick = function () {
  const calculo = document.querySelector(".calculo");

  let horasDeClase = 0;
  let minutosDeClase = 0;
  let segundosDeClase = 0;

  for (let i = 0; i < inputsTiempoDeClases.length; i++) {
    if (inputsTiempoDeClases[i].name === "horas") {
      horasDeClase = horasDeClase + Number(inputsTiempoDeClases[i].value);
    } else if (inputsTiempoDeClases[i].name === "minutos") {
      minutosDeClase = minutosDeClase + Number(inputsTiempoDeClases[i].value);
    } else if (inputsTiempoDeClases[i].name === "segundos") {
      segundosDeClase = segundosDeClase + Number(inputsTiempoDeClases[i].value);
    }
  }

  calcularTiempoTotal(horasDeClase, minutosDeClase, segundosDeClase);

  calculo.innerText = `Los videos tienen una cantidad total de ${calculoHoras} horas, ${minutosTotales} minutos y ${segundosRestantes} segundos.`;
  return false;
};
