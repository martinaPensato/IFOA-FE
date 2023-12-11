const url = "https://api.pexels.com/v1/search?query="
const token = "Bearer q4AqnrsDoznEAQcjN7K4Bq8C0SRhrs7GSWeZf4zKp4Fb7mmezqDhAM0X";
const headers = {
    "Authorization": token,
    "Accept": "application/json",
    "Content-Type": "application/json"
};

const searchInput = document.getElementById("searchInput");
const loadImagesBtn = document.getElementById("loadImagesBtn");
const loadSecondaryImagesBtn = document.getElementById("loadSecondaryImagesBtn");

const loadImages = async (query) => {
    try {
        const response = await fetch(url + query, {
            headers: headers
        });
        const data = await response.json();
        
        updateCards(data.photos);
    } catch (error) {
        console.error("Error fetching images:", error);
    }
};

const updateCards = (photos) => {
    const cards = document.querySelectorAll(".card");
    
    photos.forEach((photo, index) => {
        const card = cards[index];
        const image = card.querySelector(".bd-placeholder-img");
        const title = card.querySelector(".card-title");
        const text = card.querySelector(".card-text");
        const viewButton = card.querySelector(".view-btn");
        const hideButton = card.querySelector(".hide-btn");

        image.src = photo.src.medium;
        title.innerText = photo.photographer;
        text.innerText = photo.url;

        viewButton.addEventListener("click", () => viewImage(photo.id));
        hideButton.addEventListener("click", () => hideCard(card));
    });
};

const viewImage = (id) => {
    window.location.href = `detail.html?id=${id}`;
};

//HIDE
const hideCard = (card) => {
    card.style.display = "none";
};

// Load Images
loadImagesBtn.addEventListener("click", () => {
    const query = searchInput.value || "nature"; 
    loadImages(query);
});

// Load Secondary Images
loadSecondaryImagesBtn.addEventListener("click", () => {
    const query = searchInput.value || "technology"; 
    loadImages(query);
});
