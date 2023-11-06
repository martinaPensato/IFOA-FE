/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const firstPet = pets.shift();
pets.push(firstPet);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  const licensePlate = "ABC100200ABC"; //valore inventato
  cars[i].licensePlate = licensePlate;
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const nuovaMacchina = {
  brand: "Audi",
  model: "TT",
  color: "black",
  trims: ["base", "RS", "Competition"],
  licensePlate: "ABC100200ABC",
};

cars.push(nuovaMacchina); //aggiungo Audi

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop(); //rimuovo l'ultimo elemento in trims ad ogni auto
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]); //utilizzo push per immettere il primo elemento di trim in array
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  const firstLetter = cars[i].color[0];

  if (firstLetter === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let i = 0;

while (i < numericArray.length && numericArray[i] !== 66) {
  console.log(numericArray[i]);
  i++;
} //ho deciso di comprendere il 32 nel console.log

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const numbersArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  const char = charactersArray[i].toLowerCase();
  let position;

  switch (char) {
    case "a":
      position = 1;
      break;
    case "b":
      position = 2;
      break;
    case "c":
      position = 3;
      break;
    case "d":
      position = 4;
      break;
    case "e":
      position = 5;
      break;
    case "f":
      position = 6;
      break;
    case "g":
      position = 7;
      break;
    case "i":
      position = 8;
      break;
    case "l":
      position = 9;
      break;
    case "m":
      position = 10;
      break;
    case "n":
      position = 11;
      break;
    case "o":
      position = 12;
      break;
    case "p":
      position = 13;
      break;
    case "q":
      position = 14;
      break;
    case "r":
      position = 15;
      break;
    case "s":
      position = 16;
      break;
    case "t":
      position = 17;
      break;
    case "u":
      position = 18;
      break;
    case "z":
      position = 19;
      break;
    default:
      position = null;
  }

  numbersArray.push(position);
}

console.log(numbersArray);
