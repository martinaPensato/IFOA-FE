/* document.addEventListener('DOMContentLoaded', function () {
    const mContainer = document.getElementById('mContainer');
    const numRows = 16;
    const numCols = 24;
  
    function generateRandomLines(lines, length) {
      return Array.from({ length: lines }, () => Array.from({ length: length }, () => ' '));
    }
  
    function animateM() {
      const mPositions = Array.from({ length: numCols }, () => []);
      const fixedColumns = [2, 5, 10]; // Indici delle colonne fisse
      let currentColumn = 0;
  
      function updateContent() {
        // Memorizza le "M" nelle colonne fisse
        fixedColumns.forEach((fixedColumn) => {
          const randomRow = Math.floor(Math.random() * numRows);
          mPositions[fixedColumn] = [randomRow];
        });
  
        // Fai apparire una "M" in modo casuale nelle colonne non fisse
        const randomRow = Math.floor(Math.random() * numRows);
        mPositions[currentColumn] = [randomRow];
  
        // Costruisci la stringa del contenuto con tutte le "M" memorizzate
        let animatedContent = '';
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            if (mPositions[j].includes(i)) {
              animatedContent += 'M';
            } else {
              animatedContent += ' ';
            }
          }
          animatedContent += '\n';
        }
  
        mContainer.textContent = animatedContent.trim();
        currentColumn = (currentColumn + 1) % numCols;
      }
  
      setInterval(updateContent, 100); // Puoi regolare la velocità a tuo piacimento
    }
  
    animateM();
  });*/
 /* SCROLL DELLA NAV */
 const myBottone = document.getElementById('bottone');
const myNav = document.getElementById('navBar');
const scrollHeightThreshold = 300;  // Imposta l'altezza desiderata per il cambio di colore

let lastScrollPosition = window.scrollY;

window.onscroll = function () {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    // SCROLL GIU
    if (currentScrollPosition > scrollHeightThreshold) {
      myBottone.classList.add('scrolled-bottone');
      myNav.classList.add('scrolled-nav');
    } else {
      myBottone.classList.remove('scrolled-bottone');
      myNav.classList.remove('scrolled-nav');
    }
  } else {
    // SCROLL SU
    if (currentScrollPosition <= scrollHeightThreshold) {
      myBottone.classList.remove('scrolled-bottone');
      myNav.classList.remove('scrolled-nav');
    }
  }

  lastScrollPosition = currentScrollPosition;
}