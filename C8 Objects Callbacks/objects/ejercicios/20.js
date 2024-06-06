function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  let suma = 0;
  objetoUsuario.posts.forEach((post) => {
    suma += post.likes;
  });
  return suma;
}

module.exports = sumarLikesDeUsuario;
