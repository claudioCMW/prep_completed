function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  const colores = {
    blue: "This is blue",
    red: "This is red",
    green: "This is green",
    orange: "This is orange",
  };
  return colores[color] || "Color not found";
  // Conceptos de objetos y propiedades se aplico arriba

  //otra forma de hacerlo (Comenta lo de arriba y descomenta el de abajo para probarlo)

  // if (color === "blue") return "This is blue";
  // if (color === "red") return "This is red";
  // if (color === "green") return "This is green";
  // if (color === "orange") return "This is orange";
  // return "Color not found";
}

module.exports = colors;
