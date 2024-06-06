function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  return (
    objetoUsuario.hasOwnProperty("password") &&
    objetoUsuario.password === password
  );
}

module.exports = verificarPassword;
