//JS BACK HTML
const url = "https://striveschool-api.herokuapp.com/api/product";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MmI4MGMwNTgzNTAwMTg1MjJkNmMiLCJpYXQiOjE3MDIzNzQyNzIsImV4cCI6MTcwMzU4Mzg3Mn0.AlETOxIiViRL31iCAQ10esjAAIgJkWHQnGUq0FJvDEA";
const headers = {
  Authorization: token,
  Accept: "application/json",
  "Content-Type": "application/json",
};
const params = new URLSearchParams(location.search);
const productId = params.get("id");


  function onClickFunction() {
    const name = document.getElementById("name").value.trim();
    const brand = document.getElementById("brand").value.trim();
    const price = document.getElementById("price").value.trim();
    const imageUrl = document.getElementById("imageUrl").value.trim();
    const description = document.getElementById("description").value.trim();
  
    if (!name  || !brand ||  !price  || !imageUrl  || !description) {
      alert("Ti sei dimenticato di compilare qualcosa?");
      return;
    }
  
    const userConfirmed = confirm("Sei sicuro, lo salviamo?");
    if (!userConfirmed) {
      return;
    }
  
    const newProduct = {
      name,
      brand,
      price,
      imageUrl,
      description,
    };
  
    const createProduct = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(newProduct),
        });
  
        if (!response.ok) {
          throw new Error("Ops, c'è un errore...");
        }
  
        fetchDataAndRender();
  
        document.querySelector("form").reset();
      } catch (error) {
        console.error("Ops, c'è un errore...", error);
      }
    };
  
    createProduct();
  }