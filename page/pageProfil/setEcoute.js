export function setEcouteCroixFermer(){
    const documentBoutonCroix = document.querySelector("main > button");

    documentBoutonCroix.addEventListener('click', function() {
        //changer la page vers la page de profil
        window.location.href = '../../index.html';
      });
}