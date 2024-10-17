import { setEcoutBoutonExit } from "./PageJeuxEcoute.js";


//récuper le boutonExit
const documentBoutonExit = document.querySelector(".exit-button");
//set l'écoute du bouton exite
setEcoutBoutonExit(documentBoutonExit);


let counter = 0;
let firstSelection = "";
let secondSelection = "";
let lives = 6;

const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("clicked");

    if (counter === 0) {
      firstSelection = card.getAttribute("personnage");
      counter++;
    } else {
      secondSelection = card.getAttribute("personnage");
      counter = 0;

      if (firstSelection === secondSelection) {
        const correctCards = document.querySelectorAll(
          ".card[personnage='" + firstSelection + "']"
        );

        correctCards[0].classList.add("checked");
        correctCards[0].classList.remove("clicked");
        correctCards[1].classList.add("checked");
        correctCards[1].classList.remove("clicked");
      } else {
        const incorrectCards = document.querySelectorAll(".card.clicked");

        incorrectCards[0].classList.add("shake");
        incorrectCards[1].classList.add("shake");

        setTimeout(() => {
          incorrectCards[0].classList.remove("shake");
          incorrectCards[0].classList.remove("clicked");
          incorrectCards[1].classList.remove("shake");
          incorrectCards[1].classList.remove("clicked");
        }, 800);

        lives--; // Décrémente les vies
        updateLives(); // Met à jour l'affichage des vies
      }
    }
  });
});

const stars = document.querySelectorAll('.star');

function updateLives() {
    stars[lives].style.color = 'gray'; // Change la couleur de l'étoile pour indiquer une vie perdue
  
    if (lives === 0) {
      setTimeout(() => {
        alert('Game Over');
        resetGame();
      }, 500);
    }
  }
  
  function resetGame() {
    lives = 6;
    stars.forEach(star => star.style.color = 'yellow'); // Réinitialise la couleur des étoiles
    cards.forEach(card => card.classList.remove('clicked', 'checked'));
    shuffle();
  }
  
  function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 16);
      card.style.order = randomPos;
    });
  }
  
  shuffle();

 
