function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
    // Tu código:
    return numeros.find((num, i) => numeros.indexOf(num) !== i);
}

module.exports = encontrarElementoRepetido;