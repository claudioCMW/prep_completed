function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let suma = 0;
  resultadosTest.forEach((element) => (suma += element));
  return suma / resultadosTest.length;
}

module.exports = promedioResultadosTest;
