/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero1 = 10;
let numero2 = 20;

if (numero1 > numero2) {
  console.log("Il numero più grande è " + numero1);
} else if (numero2 > numero1) {
  console.log("Il numero più grande è " + numero2);
} else {
  console.log("I numeri sono uguali");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 2;
if (x !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let numero = 10;
if (numero % 5 === 0) {
  console.log("divisibile per 5");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero3 = 3;
let numero4 = 5;
let risultato;

if (numero3 + numero4 === 8) {
  risultato = true;
} else {
  risultato = false;
}

console.log(risultato);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 40;
let ammontareTotale;

if (totalShoppingCart > 50) {
  ammontareTotale = totalShoppingCart;
} else {
  ammontareTotale = totalShoppingCart + 10;
}

console.log("Il totale da addebitare è: " + ammontareTotale + " euro.");

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart2 = 40;
let ammontareTotale2;
let promozioneBlackFriday = 0.2; // il 20% di sconto Black Friday

let costoSpedizione;

if (totalShoppingCart2 > 50) {
  costoSpedizione = 0;
} else {
  costoSpedizione = 10;
}
// Applico lo sconto
totalShoppingCart2 = totalShoppingCart2 * (1 - promozioneBlackFriday);

ammontareTotale2 = totalShoppingCart2 + costoSpedizione;

console.log("Il totale da addebitare è: " + ammontareTotale2 + " euro.");

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numeroA = 3;
let numeroB = 7;
let numeroC = 2;

if (numeroA >= numeroB && numeroA >= numeroC) {
  if (numeroB >= numeroC) {
    console.log(numeroA, numeroB, numeroC);
  } else {
    console.log(numeroA, numeroC, numeroB);
  }
} else if (numeroB >= numeroC) {
  if (numeroA >= numeroC) {
    console.log(numeroB, numeroA, numeroC);
  } else {
    console.log(numeroB, numeroC, numeroA);
  }
} else {
  if (numeroA >= numeroB) {
    console.log(numeroC, numeroA, numeroB);
  } else {
    console.log(numeroC, numeroB, numeroA);
  }
}

//Soluzione con array

let numeri = [3, 7, 2];

numeri.sort((a, b) => b - a);

console.log(numeri);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let valore1 = 10; //se lascio vuoto stampa "undefined non è un numero"

if (typeof valore1 === "number") {
  console.log(valore1 + " è un numero.");
} else {
  console.log(valore1 + " non è un numero.");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numeroPariDispari = 3;

if (numeroPariDispari % 2 === 0) {
  console.log(numeroPariDispari + " è un numero pari.");
} else {
  console.log(numeroPariDispari + " è un numero dispari.");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7;

if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;

console.log(me);
