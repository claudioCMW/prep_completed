function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  const idiomas = {
    aleman: "Guten Tag!",
    mandarin: "Ni Hao!",
    ingles: "Hello!",
  };
  return idiomas[idioma] || "Hola!";
  // Conceptos de objetos y propiedades se aplico arriba

  //otra forma de hacerlo (Comenta lo de arriba y descomenta el de abajo para probarlo)
  // if (idioma === "aleman") {
  //   return "Guten Tag!";
  // }
  // if (idioma === "mandarin") {
  //   return "Ni Hao!";
  // }
  // if (idioma === "ingles") {
  //   return "Hello!";
  // }
  // return "Hola!";
}

module.exports = saludo;
