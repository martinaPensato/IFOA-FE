// CHIAMATA
fetch('https://striveschool-api.herokuapp.com/books')
  .then(response => response.json())
  .then(data => {
    
    populateHomePage(data);
  })
  .catch(error => console.error('Errore nella chiamata API:', error));

// GESTIONE DATI
function populateHomePage(libri) {
  const bookListElement = document.getElementById('bookList');

  libri.forEach(libro => {
    const card = `
      <div class="col-md-3 mb-4">
        <div class="card">
          <img src="${libro.img}" class="card-img-top" alt="${libro.title}">
          <div class="card-body">
            <h5 class="card-title">${libro.title}</h5>
            <p class="card-text">Prezzo: $${libro.price.toFixed(2)}</p>
            <button class="btn btn-danger" onclick="scartaLibro()">Scarta</button>
            <button class="btn btn-success" onclick="aggiungiAlCarrello()">Compra ora</button>
          </div>
        </div>
      </div>
    `;

    // AGGIUNGO LIBRO A CARD
    bookListElement.innerHTML += card;
  });
}


function initCarrello() {
    let carrello = JSON.parse(localStorage.getItem('carrello')) || [];
    return carrello;
  }
  
  function salvaCarrello(carrello) {
    localStorage.setItem('carrello', JSON.stringify(carrello));
  }
  
  document.getElementById('bookList').addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-danger')) {
      scartaLibro(event.target);
    } else if (event.target.classList.contains('btn-success')) {
      aggiungiAlCarrello(event.target);
    }
  });
  
  // SCARTO
  function scartaLibro(button) {
    const card = button.closest('.card');
    if (card) {
      card.remove();
    }
  }
  
  // AGGIUNGO LIBRO AL CARRELLO 
  function aggiungiAlCarrello(button) {
    const card = button.closest('.card');
    if (card) {
      const titoloLibro = card.querySelector('.card-title').innerText;
  
     
      let carrello = initCarrello();
  
      
      carrello.push(titoloLibro);
  
      
      salvaCarrello(carrello);
  
      aggiornaListaCarrello(carrello);
    }
  }
  
  // LISTA CARRELLO
  function aggiornaListaCarrello(carrello) {
    const carrelloList = document.getElementById('cartList');
    carrelloList.innerHTML = '';
  
    carrello.forEach(libro => {
      const listItem = document.createElement('li');
      listItem.textContent = libro;
      carrelloList.appendChild(listItem);
    });
  }
  

  