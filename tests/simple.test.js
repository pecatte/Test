const {
  createObject,
  additionObject,
  removeEvenNumbers,
  square,
  multipication,
  howLongIsIt,
  givenObject
} = require("../src/simple");

describe("En tant que développeur", () => {
  test("je crée un objet avec deux propriétés (", () => {
    expect(Object.keys(createObject()).length).toEqual(2);
  });
  describe("je crée un objet avec comme propriétés", () => {
    const res = additionObject(2, -9);
    test("val1 correspondant exactement au premier paramètre passé", () => {
      expect(res.val1).toEqual(2);
    });
    test("absV2 correspondant à la valeur absolue du deuxième paramètre passé", () => {
      expect(res.absV2).toEqual(9);
    });
    test("sum correspondantà à la somme de des deux paramètres passés", () => {
      expect(res.sum).toEqual(-7);
    });
  });
  describe("je crée un nouveau tableau", () => {
    const res = removeEvenNumbers([-1, 1, 2, 0, 3, 4, 12, 11]);
    test("ne contenant que des nombres impairs", () => {
      const res = removeEvenNumbers([-1, 1, 2, 0, 3, 4, 12, 11]);
      expect(res).not.toContain(0);
      expect(res).not.toContain(2);
      expect(res).not.toContain(4);
      expect(res).not.toContain(12);
      expect(res).toContain(1);
      expect(res).toContain(3);
      expect(res).toContain(11);
    });
    test("ne contenant que des nombres supérieurs à 0", () => {
      const res = removeEvenNumbers([-1, 1, 2, 0, 3, 4, 12, 11]);
      expect(res).not.toContain(-1);
      expect(res).not.toContain(0);
      expect(res).toContain(11);
    });
    test("vide si rien n'était passé à la fonction", () => {
      expect(removeEvenNumbers(null)).toEqual([]);
    });
  });
  describe("je crée une fonction qui retourne", () => {
    test("le carré du nombre passé en paramètre", () => {
      expect(square(0)).toEqual(0);
      expect(square(2)).toEqual(4);
      expect(square(5)).toEqual(25);
    });
  });
  describe("je crée une fonction qui retourne", () => {
    test("la table de multiplication de 0", () => {
      expect(multipication(0)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
    test("la table de multiplication de 5", () => {
      expect(multipication(5)).toEqual([
        0,
        5,
        10,
        15,
        20,
        25,
        30,
        35,
        40,
        45,
        50
      ]);
    });
  });
});
