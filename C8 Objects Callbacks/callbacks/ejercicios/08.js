const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  let elemento = "No se encontró el elemento";
  array.forEach((el) => {
    if (callback(el)) {
      elemento = el;
    }
  });
  return elemento;
};

module.exports = buscarElemento;
