import { data } from "./commun/js/data.js";

export function setEcoute(id, documentListProfil, donner){
    //récuper la div et le crayon
    let documentDiv = documentListProfil[id]
    let documentCrayon = documentListProfil[id].querySelector(".crayon");

    
    //gestion clik div
    documentDiv.addEventListener('click', function() {
        donner = data.copy();
        //met a jour le profil selec dans la base de donner
        donner.profilSelect = id;
        data.push(donner);
        //changer la page vers la page de profil
        window.location.href = './page/pageProfil/pageProfil.html';
      });

    //gestion clik crayon
    documentCrayon.addEventListener('click', function(event) {
      donner = data.copy();
      //empeche le clik de la div en meme temps
      event.stopPropagation();
      //met a jour le profil selec dans la base de donner
      donner.profilSelect = id;
      data.push(donner);
      //changer la page vers la page de création
      window.location.href = './page/pageCreation/pageCreation.html';
      });
}

//pour bouton ajouter profil
export function setEcouteBoutonAjouter(boutonAjouter, donner){
  console.log("profil crée");
  //gestion clik bouton ajouter
  boutonAjouter.addEventListener('click', function(event) {
    //met a jour le profil selec dans la base de donner
    donner.profilSelect = null;
    data.push(donner);
    //changer la page vers la page de profil
    window.location.href = './page/pageCreation/pageCreation.html';
  });
      
  
}


//bouton jeux crew
export function setEcouteJeuxCrew(BoutonJeuxCrew){
  console.log(BoutonJeuxCrew);
  BoutonJeuxCrew.addEventListener('click', function(event) {
    //emecher le rafairchissement
    event.preventDefault();
    window.location.href = './page/pageJeux/PageJeux.html';
  });
};

//bouton profil aléatoir
export function setEcouteBoutonProfilAleatoir(){
  //bouton profil aléatoir
  const documentBoutonAleatoir = document.querySelector("#boutonAleatoir");

  documentBoutonAleatoir.addEventListener('click', function(event) {
    profilAleatoir();
  });
};

export function profilAleatoir(){
  let donner = data.copy();
    if (donner.utilisateurs.length > 0){
      let nbmRandom = Math.floor(Math.random() * (donner.utilisateurs.length-1 - 0 + 1)) + 0;
      donner.profilSelect = nbmRandom;
      data.push(donner);
      window.location.href = './page/pageProfil/pageProfil.html';
    }
}