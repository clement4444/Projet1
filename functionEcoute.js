import { data } from "./commun/js/data.js";

export function setEcoute(id, documentListProfil, donner){
    //récuper la div et le crayon
    let documentDiv = documentListProfil[id]
    let documentCrayon = documentListProfil[id].querySelector(".crayon");

    
    //gestion clik div
    documentDiv.addEventListener('click', function() {
        window.location.href = './page/pageProfil/pageProfil.html';
      });

    //gestion clik crayon
    documentCrayon.addEventListener('click', function(event) {
        donner.profilSelect = id;
        data.push(donner);
        window.location.href = './page/pageCreation/pageCreation.html';
      });
}