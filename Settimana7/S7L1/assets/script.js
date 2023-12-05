class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  comparaEta(nuovoUser) {
    if (this.age === nuovoUser.age) {
      console.log(
        `${this.firstName} è della stessa età di ${nuovoUser.firstName}`
      );
    } else if (this.age > nuovoUser.age) {
      console.log(`${this.firstName} è più grande di ${nuovoUser.firstName}`);
    } else {
      console.log(`${this.firstName} è più piccolo di ${nuovoUser.firstName}`);
    }
  }
}

const User1 = new User("Gigi", "Dalessio", 56, "Napoli");
const User2 = new User("Vincenzo", "Salemme", 66, "Napoli");

User1.comparaEta(User2);

//

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    sameOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

function addPet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    
     const newPet = new Pet(petName, ownerName, species, breed);

     
     displayPet(newPet);

     
     document.getElementById('petForm').reset();
 }

 
function displayPet(pet) {
    const petList = document.getElementById('petList');
    const listItem = document.createElement('li');
    listItem.textContent = `Pet Name: ${pet.petName}, Owner Name: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
    petList.appendChild(listItem);

    
    if (petList.childElementCount > 1) {
        const previousPet = petList.children[petList.childElementCount - 2];
        const previousPetData = previousPet.textContent.split(', ');
        const previousOwnerName = previousPetData[1].split(': ')[1];

        
        const previousPetObject = new Pet('', previousOwnerName, '', '');
    
        if (pet.sameOwner(previousPetObject)) {
            console.log(`Gli animali hanno lo stesso proprietario!`);
        } else {
            console.log(`Gli animali hanno proprietari diversi.`);
        }
    }
}

