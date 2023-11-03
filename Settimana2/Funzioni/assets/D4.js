/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
  let risultato = l1 * l2;
  return risultato;
}

let lunghezza1 = 10;
let lunghezza2 = 5;
let risultato = area(lunghezza1, lunghezza2);

console.log("L'area è:", risultato);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(numero1, numero2) {
  let somma;

  if (numero1 !== numero2) {
    somma = numero1 + numero2;
  } else if (numero1 === numero2) {
    somma = (numero1 + numero2) * 3;
  }

  console.log("Il risultato è:", somma);

  return somma;
}
crazySum(5, 10);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(numero3) {
  let differenza;
  let numero4 = 19;
  if (numero3 < numero4) {
    differenza = numero4 - numero3;
  } else if (numero3 > numero4) {
    differenza = (numero3 - numero4) * 3;
  }

  console.log("Il risultato è:", differenza);

  return differenza;
}
crazyDiff(5);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
  let risposta;

  if ((n >= 20 && n <= 100) || n === 400) {
    risposta = true;
  } else {
    risposta = false;
  }

  return risposta;
}

let risposta = boundary(50);
console.log("Il risultato è:", risposta);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(stringa) {
  if (stringa.startsWith("EPICODE")) {
    return stringa;
  } else {
    return "EPICODE" + stringa;
  }
}

let stringa = epify(" insegna");
console.log(stringa);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n) {
  if (n > 0 && (n % 3 === 0 || n % 7 === 0)) {
    return true;
  } else {
    return false;
  }
}

let multiplo = check3and7(9);
console.log(multiplo);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringa) {
  return stringa.split("").reverse().join("");
}

let parola = reverseString("Camaleonte");
console.log(parola);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(stringa) {
  let parole = stringa.split(" ");
  //Io avevo scritto  return stringa.upperFirst...
  let risultato = parole.map(
    (parola) => parola.charAt(0).toUpperCase() + parola.slice(1)
  );
  return risultato.join(" ");
}
let stringaParole = upperFirst("una stringa con più parole!");
console.log(stringaParole);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/*indexOf()
trova la prima posizione della parte della stringa 

- indicatalastIndexOf()
trova l'ultima posizione della parte della stringa*/

function cutString(stringa) {
  return stringa.slice(1, -1);
}

let frase2 = cutString("Camaleonte");
console.log(frase2);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n) {
  let numeriACaso = []; //array

  for (let i = 0; i < n; i++) {
    let numeroACaso = Math.floor(Math.random() * 11); 
    numeriACaso.push(numeroACaso);
  }

  return numeriACaso;
}


let numeriCasuali = giveMeRandom(10);
console.log(numeriCasuali);
/* SCRIVI QUI LA TUA RISPOSTA */
