// Créez un objet avec une propriété de votre choix
// Ajoutez dans un second temps une propriété de type booléen
// Retournez l'objet
function createObject() {
  // votre code
}

console.log(createObject());

// Retournez un objet avec trois propriété :
// - val1: le paramètre v1
// - absV2: la valeur absolue du paramètre v2
// - somme de val1 et val2
function additionObject(v1, v2) {
  // votre code
}

console.log(additionObject(2, 6));
console.log(additionObject(-5, -10));

// Retournez un tableau avec uniquement des nombres impairs supérieurs à 0
// Si le tab passé en paramètre est null, retournez un tableau vide
function removeEvenNumbers(tab) {
  // votre code
}

console.log(removeEvenNumbers([]));
console.log(removeEvenNumbers(null));
console.log(removeEvenNumbers([-1, 1, 2, 0, 3, 4, 12, 11]));

// Adapter la fonction "square", qui retourne n²
function square(n) {
  // votre code
}

console.log(square(0));
console.log(square(2));
console.log(square(5));

// retournez un tableau contenant la table de multiplication du nombre passé en paramètre
// ex: n = 5 : [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
function multipication(n) {
  // votre code
}

console.log("Table du 1", multipication(1));
console.log("Table du 5", multipication(5));

// en utilisant une boucle et la fonction précédente
// afficher toutes les tables de multiplications
// la méthode printFullTable ne retournera rien
function printFullTable() {
  // votre code
}

printFullTable();

const givenObject = {
  name: "Marc",
  city: "Strasbourg"
};
// Modifiez la fonction pour qu'elle compte le nombre de caractères
// de chaque string contenu dans l'objet passé en paramètre (exclure les espaces)
// Remplacez cette chaine par sa taille uniquement dans le contexte de la fonction
// Le console.log suivant la fonction doit toujours afficher l'objet de base
// Vous ne devez pas créer d'objet à l'intérieur de la fonction, ni utiliser de variable globale
function howLongIsIt(obj) {
  obj.name = obj.name.length;
  console.log(obj); // doit afficher l'objet suivant :
  /*
  {
    name: 4,
    city: 10
  }
  */
  return obj;
}

// vous devriez avoir à modifier cette ligne...
howLongIsIt(givenObject);

console.log(givenObject);

module.exports = {
  createObject,
  additionObject,
  removeEvenNumbers,
  square,
  multipication,
  howLongIsIt,
  givenObject
};
