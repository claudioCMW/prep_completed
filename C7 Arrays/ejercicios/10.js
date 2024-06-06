function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  return array.find((element) => element.length >= 5);
}

module.exports = obtenerPrimerStringLargo;
