function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let suma = 0;
  arrayOfNums.forEach((element) => (suma += element));
  return suma;
}

module.exports = agregarNumeros;
