function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  let faltante = null;
  if (numeros.length === 0) {
    return null;
  }
  numeros.forEach((num, i) => {
    if (numeros[i + 1] - num > 1) {
      faltante = num + 1;
    }
  });
  return faltante;
}

module.exports = encontrarNumeroFaltante;
