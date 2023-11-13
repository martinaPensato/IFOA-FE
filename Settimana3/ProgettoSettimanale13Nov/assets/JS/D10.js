/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = 10 + 20;
console.log("***Esercizio A***");
console.log("Il risultato della somma è:" + sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21);

console.log("***Esercizio B***");
console.log("Il numero casuale compreso tra 0 e 20 è:" + random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Martina",
  surname: "Pensato",
  age: 24,
};

console.log("***Esercizio C***");
console.log(
  "Il mio nome è " + me.name + " " + me.surname + " e ho " + me.age + " anni."
);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

console.log("***Esercizio D***");
console.log("'me' senza la proprietà 'age' è:", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["HTML", "CSS", "Javascript"];
console.log("***Esercizio E***");
console.log("Dopo aver aggiungo le skills, 'me' diventa:", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("studierò React");
console.log("***Esercizio F***");
console.log("Ho aggiunte React:", me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log("***Esercizio G***");
console.log("L'oggetto 'me' dopo aver rimosso l'ultimo elemento è:", me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}

let risultatoDado = dice();

console.log("***Esercizio 1***");
console.log("Risultato del dado:" + risultatoDado);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1;
  } else {
    return numero2;
  }
}

let numeroMaggiore = whoIsBigger(20, 31);

console.log("***Esercizio 2***");
console.log("Il maggiore è:" + numeroMaggiore);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(stringa) {
  return stringa.split(" ");
}

let stringaSeparata = splitMe("Mi piace il tiramisù");

console.log("***Esercizio 3***");
console.log(stringaSeparata);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(stringa, valoreBoolean) {
  if (valoreBoolean) {
    return stringa.slice(1);
  } else {
    return stringa.slice(0, -1);
  }
}

let primoRisultato = deleteOne("Altalena", true);
let secondoRisultato = deleteOne("Altalena", false);

console.log("***Esercizio 4***");
console.log(primoRisultato);
console.log(secondoRisultato);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(stringa) {
  let stringaNoNumeri = "";

  for (let i = 0; i < stringa.length; i++) {
    if (stringa[i] < "0" || stringa[i] > "9") {
      stringaNoNumeri += stringa[i];
    }
  }

  return stringaNoNumeri;
}

let stringaConNumeri = "Ho 100 monete";
let stringaNoNumeri = onlyLetters(stringaConNumeri);

console.log("***Esercizio 5***");
console.log(stringaNoNumeri);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(stringa) {
  const chiocciola = stringa.indexOf("@");
  const punto = stringa.indexOf(".", chiocciola);

  return chiocciola > 0 && punto > chiocciola + 1 && punto < stringa.length - 1;
}

let email1 = "lamailèvalida@esempio.com";
let email2 = "lamailnonèvalida.com";

console.log("***Esercizio 6***");
console.log(isThisAnEmail(email1));
console.log(isThisAnEmail(email2));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  const oggi = new Date();

  const giornoSettimana = oggi.getDay();

  const giorniSettimana = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];

  const oggiNome = giorniSettimana[giornoSettimana];
  return oggiNome;
}

console.log("***Esercizio 7***");
const oggi = whatDayIsIt();
console.log("Oggi è " + oggi);


/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(numeroTiri) {
  let sum = 0;
  const values = [];

  for (let i = 0; i < numeroTiri; i++) {
    const tiroRisultato = dice();
    values.push(tiroRisultato);
    sum += tiroRisultato;
  }

  return {
    sum: sum,
    values: values,
  };
}
console.log("***Esercizio 8***");

const result = rollTheDices(3);
console.log(
  "Il totale di tutti i valori estratti con le invocazioni del dado è:",
  result
);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(dataInizio) {
  const dataAttuale = new Date();
  const differenzaGiorni = Math.floor(
    (dataAttuale - dataInizio) / (1000 * 60 * 60 * 24)
  );
  return differenzaGiorni;
}

const dataInizio = new Date("1999-10-17");
const giorniTrascorsi = howManyDays(dataInizio);
console.log("***Esercizio 9***");
console.log("Giorni trascorsi:", giorniTrascorsi);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday() {
  const oggi = new Date();
  const compleanno = new Date(oggi.getFullYear(), 9, 17);

  return (
    oggi.getDate() === compleanno.getDate() &&
    oggi.getMonth() === compleanno.getMonth()
  );
}

const ilMioCompleanno = isTodayMyBirthday();

console.log("***Esercizio 10***");

if (ilMioCompleanno) {
  console.log(true, "Buon Compleanno!");
} else {
  console.log(false, "Buon NON Compleanno!");
}

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(oggetto, nomeProprietà) {
  if (oggetto[nomeProprietà] !== undefined) {
    delete oggetto[nomeProprietà];
  }
  return oggetto;
}

let oggettoOriginale = {
  nome: "Martina",
  cognome: "Pensato",
  età: 24,
};
console.log("***Esercizio 11***");
let oggettoModificato = deleteProp(oggettoOriginale, "età");
console.log("Oggetto originale:", oggettoOriginale);
console.log("Oggetto modificato:", oggettoModificato);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

const newestMovie = (array) => {
  let esito = { Year: "0000" };
  array.forEach((movies) => {
    let anno = parseInt(movies.Year);
    if (anno > parseInt(esito.Year)) {
      esito = movies;
    }
  });
  return esito;
};
console.log("***Esercizio 12***");
console.log("Il film più recente è:", newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies() {
  return movies.length;
}
console.log("***Esercizio 13***");
console.log("Il numero dei film è:", countMovies());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = movies.map((el) => `Anno: ${el.Year}`);
console.log("***Esercizio 14***");
console.log("Solo gli anni:", onlyTheYears);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyLastMillennium = (array) => {
  return array.filter((film) => parseInt(film.Year) > 2000);
};
console.log("***Esercizio 15***");
console.log("I film dell'ultimo millennio:", onlyLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = (array) => {
  return array.reduce((valore, element) => valore + parseInt(element.Year), 0);
};
console.log("***Esercizio 16***");
console.log("La somma degli anni è:", sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (array, titolo) => {
  return array.filter((film) =>
    film.Title.toLowerCase().includes(titolo.toLowerCase())
  );
};

console.log("***Esercizio 17***");
const risultatoRicerca = searchByTitle(movies, "Lord");
console.log("Risultato della ricerca per titolo:", risultatoRicerca);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(stringa) {
  const match = [];
  const unmatch = [];

  movies.forEach((film) => {
    if (film.Title.toLowerCase().includes(stringa.toLowerCase())) {
      match.push(film);
    } else {
      unmatch.push(film);
    }
  });

  return { match, unmatch };
}
console.log("***Esercizio 18***");
const titoloConStringa = searchAndDivide("Lord");
console.log("Match:", titoloConStringa.match);
console.log("Unmatch:", titoloConStringa.unmatch);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(indiceDaRimuovere) {
  if (indiceDaRimuovere >= 0 && indiceDaRimuovere < movies.length) {
    const moviesNuovo = movies.filter(
      (_, index) => index !== indiceDaRimuovere
    );

    return moviesNuovo;
  } else {
    console.error("Indice non valido.");
    return movies;
  }
}
console.log("***Esercizio 19***");
const indiceDaRimuovere = 4; // Sostituisci con l'indice desiderato
const moviesSenzaIndice = removeIndex(indiceDaRimuovere);
console.log(
  "Movies senza l'elemento all'indice",
  indiceDaRimuovere,
  ":",
  moviesSenzaIndice
);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("***Esercizio 20***");
function selectContainerElement() {
  const containerElement = document.getElementById("container");

  console.log(containerElement);
}
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function tutteLeCelle() {
  const elementoTd = document.querySelectorAll("td");
  return elementoTd;
}
console.log("***Esercizio 21***");
const elementoTd = tutteLeCelle();
console.log(elementoTd);

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function stampaTestoTd() {
  const elementoTd = tutteLeCelle();

  elementoTd.forEach((td) => {
    console.log(td.textContent);
  });
}
console.log("***Esercizio 22***");
stampaTestoTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.style.backgroundColor = "red";
});


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function aggiungiElemento() {
  const nuovoElementoLi = document.createElement('li');
  nuovoElementoLi.textContent = 'Ho aggiunto questo.';
  
  const lista = document.getElementById('myList');
  lista.appendChild(nuovoElementoLi);
}

aggiungiElemento();


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function svuotaLaLista() {
  const lista = document.getElementById('myList');
  lista.innerHTML = ''; 
}

// svuotaLista(); Scrivo come commento altrimenti non sono visibili le modifiche precedenti alla lista...

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function aggiungiClasse () {
  const elementiTr = document.querySelectorAll('tr');

  elementiTr.forEach((tr) => {
    tr.classList.add('test');
  });
}


aggiungiClasse();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
