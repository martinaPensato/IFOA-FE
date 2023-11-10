//BOTTONE

//input taskinput button addtaskbutton lista
let input = document.getElementById("li");
let addButton = document.querySelector(".addButton"); 
const lista = document.getElementById("ul1");

function aggiungiUnaTask() { 
  if (input.value === "") { 
    alert("Cosa stai dimenticando? Di scriverlo!");
  } else {
    const li = document.createElement("li");
    li.innerText = input.value;
    document.getElementById("ul1").appendChild(li);
  }
}

addButton.addEventListener("click", aggiungiUnaTask);
