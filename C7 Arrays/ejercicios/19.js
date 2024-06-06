function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (arguments.length === 0) {
    return 0;
  }
  if (arguments.length === 1) {
    return arguments[0];
  }
  let producto = 1;

  for (let i = 0; i < arguments.length; i++) {
    producto *= arguments[i];
  }

  return producto;
}

module.exports = multiplicarArgumentos;
