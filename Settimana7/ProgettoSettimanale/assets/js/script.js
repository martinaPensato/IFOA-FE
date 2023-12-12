//JS INDEX HTML
const url = "https://striveschool-api.herokuapp.com/api/product";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MmI4MGMwNTgzNTAwMTg1MjJkNmMiLCJpYXQiOjE3MDIzNzQyNzIsImV4cCI6MTcwMzU4Mzg3Mn0.AlETOxIiViRL31iCAQ10esjAAIgJkWHQnGUq0FJvDEA";
const headers = {
  Authorization: token,
  Accept: "application/json",
  "Content-Type": "application/json",
};

let products = [];

const fetchDataAndRender = () => {
  fetch(url, {
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => {
      products = data;
      createTable(data);
    })
    .catch((error) => {
      console.error("Errore richiesta API:", error);
    });
};

const createTable = (data) => {
  const content = document.getElementById("card-columns");
  content.innerHTML = "";

  data.forEach((product) => {
    content.innerHTML += `<div class="col">
                                <div class="card">
                                  <img src="${product.imageUrl}" class="card-img-top" alt="..." />
                                  <div class="card-body">
                                    <h5 class="card-title">${product.name}</h5>
                                    <p class="card-text">
                                      ${product.description}
                                    </p>
                                    <a class="btn btn-warning me-2 mb-1" href="back.html?id=${product._id}">Modifica</a>
                                    <a class="btn btn-info" href="detail.html?id=${product._id}">Scopri di più</a> 
                                    <button class="btn btn-danger my-1" onclick="deleteProduct('${product._id}')">Cancella</button>
                                    </div>
                                </div>
                              </div>`;
  });
};


const deleteProduct = (productId) => {
    const confirmDelete = confirm("Sei sicuro, cancelliamo questo prodotto?");
    if (confirmDelete) {
      const deleteUrl = `${url}/${productId}`;
  
      fetch(deleteUrl, {
        method: "DELETE",
        headers: headers,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          products = products.filter((product) => product._id !== productId);
          createTable(products);
        })
        .catch((error) => {
          console.error("Ops, c'è un errore...", error);
        });
    }
  };

fetchDataAndRender();


