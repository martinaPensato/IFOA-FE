// JS DETAIL

const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MmI4MGMwNTgzNTAwMTg1MjJkNmMiLCJpYXQiOjE3MDIzNzQyNzIsImV4cCI6MTcwMzU4Mzg3Mn0.AlETOxIiViRL31iCAQ10esjAAIgJkWHQnGUq0FJvDEA";
const params = new URLSearchParams(location.search);
const productId = params.get("id");

document.addEventListener('DOMContentLoaded', function () {
    const url = "https://striveschool-api.herokuapp.com/api/product";
    const headers = {
        "Authorization": token,
        "Accept": "application/json",
        "Content-Type": "application/json",
    };

    const params = new URLSearchParams(location.search);
    const productId = params.get("id");

    fetch(`${url}/${productId}`, {
        headers: headers,
    })
    .then((response) => response.json())
    .then((product) => {
        const schedaProdotto = document.getElementById("schedaProdotto");

        // Visualizza i dettagli del prodotto
        schedaProdotto.innerHTML = `
            <div class="card">
                <img src="${product.imageUrl}" class="card-img-top" alt="Product Image" />
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.brand}</p>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">${product.price}</p>
                </div>
            </div>
        `;
    })
    .catch((error) => {
        console.error("Ops, c'è un errore...", error);
    });
});
  
  if (productId) {
    fetchAndDisplayProductDetails(productId);
  }
  