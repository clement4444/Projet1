import { data } from "./commun/js/data.js";

export function setEcoute(id, documentListProfil, donner){
    //récuper la div et le crayon
    let documentDiv = documentListProfil[id]
    let documentCrayon = documentListProfil[id].querySelector(".crayon");

    
    //gestion clik div
    documentDiv.addEventListener('click', function() {
        //met a jour le profil selec dans la base de donner
        donner.profilSelect = id;
        data.push(donner);
        //changer la page vers la page de profil
        window.location.href = './page/pageProfil/pageProfil.html';
      });

    //gestion clik crayon
    documentCrayon.addEventListener('click', function(event) {
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
  BoutonJeuxCrew.addEventListener('click', function(event) {
    //emecher le rafairchissement
    event.preventDefault();
    window.location.href = './page/pageJeux/PageJeux.html';
  });
};