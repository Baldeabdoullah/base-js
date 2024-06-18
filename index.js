// alert('salut js');
// console.log('salut');

// console.log("bonjour");

//camel case
let variable = "hello";
// console.log(variable);

// les variables
var untexte = "voici une texte";

untexte = "nouveau texte";
console.log(untexte);
//const  = constante
const prenom = "justine";

// console.log(prenom);

//let la variable peut changer
let unChiffre = 24;

unChiffre = 22;

let chaine = "je suis l'une des chaine de caractere";

//la concatenation
let nouvelleChaine = "Chaine precedente : " + chaine + " voila le contenu";

// console.log(nouvelleChaine);

//concatenation avec guillements
let autreConcatenation = `Chaine precedente :  ${chaine}  voila le contenu`;
// console.log(autreConcatenation);

//les types de donnees
let string = "je suis une chaine de caractere";
let number = 3;
let boolean = true;

//tableau = array
//Tableau: il y'a des crochets []
let array = ["je", "suis", 47, true];

//Objet : accolades {}
let object = {
  prenom: "audrey",
  age: 33,
  ville: "bordeau",
};

let arbre;
arbre = "sapin";

//les operateurs
// console.log(4 + 5);
// console.log(4 - 5);
// console.log(4 / 5);
// console.log(4 * 5);
// console.log(4 ** 5);

//les operateurs d'affectations

let total = 0;
total++;
total += 5;

total *= 2;
// console.log(total);

//les structures de control

let x = 2;
let y = 2;
// if (x > y) {
//   alert("yes x est plus gros que y");
// } else if (y > x) {
//   alert("non y est plus gros");
// } else {
//   alert("les deux sont egaux");
// }

// on test si la variable est true
if (x) {
  //   console.log("x existe");
}

//=== test l'egalite en type et contenu
if (x === y) {
  //   console.log("ils sont egaux");
} else {
  //   console.log("pas egaux");
}

let a = 2;
let b = "2";
// == teste l'egalite de valuere sans prendre en compte le type
// if (a == b) {
//   console.log("ils sont egaux");
// } else {
//   console.log("pas egaux");
// }

// || ou
// $$ et
// soit l'un soit l'autre
if (x < y || x > 1) {
  //   console.log("oui");
}

//&& il faut que toute les conditions soit reunis
if (x < y && x > 1) {
  //   console.log("UI");
}

//Les fonctions

function faireUneChose() {
  console.log("j'ai fais un truc");
  console.log(5 + 6);
  alert("calcul termine");
}

// il faut imperativement appeler la fonction pour quel se joue

// appel de la fonction faireUneChose();

// fonction flechee
const addition = (a, b) => {
  console.log(a + b);
};

addition(2, 3);
addition(74874, 8585);

//La porte des variables

function add2() {
  let num = 4;
  console.log(num + 2);
}
