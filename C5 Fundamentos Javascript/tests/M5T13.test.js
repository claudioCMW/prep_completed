const menosQueNoventa = require("../ejercicios/13");

test('Debe retornar True si el número es menor a noventa', function () {
  expect(menosQueNoventa(15)).toBe(true);
});

test('Debe retornar False si el número no es menor a noventa', function () {
  expect(menosQueNoventa(90)).toBe(false);
  expect(menosQueNoventa(100)).toBe(false);
});