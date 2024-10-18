import {data} from "../../commun/js/data.js";

// Get the modal element
const modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
const closeModalBtn = document.querySelector('.close');

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

export function afficherModal(){
    let donner = data.copy();
    modal.style.display = 'block';

    //récupéré les profil HTML
    let documentProfil = document.querySelectorAll(".modalProfilType");
    let nbnProfil;
    if(donner.utilisateurs.length >= 3){
        nbnProfil = 3;
    }else{
        nbnProfil = donner.utilisateurs.length;
    }
    //généré les nombre aléatoir
    let profilChoisi = [];
    let nombreAleatoire;
    for (let i = 0; i < nbnProfil; i++) {
        do {
            nombreAleatoire = Math.floor(Math.random() * (donner.utilisateurs.length - 1 + 1)) + 0; // Génère un nombre entre 0 et 100
        } while(profilChoisi.includes(nombreAleatoire));
        profilChoisi.push(nombreAleatoire);
    }
    
    //injecter le nombre de case qui a
    let html = [];
    for (let i=0; i < nbnProfil; i++){
        html+=profilTypeHTML();
    }
    const documentToutProfil =document.querySelector(".modalDiv3");
    documentToutProfil.innerHTML = html;
    documentProfil = document.querySelectorAll(".modalProfilType");


    for (let i = 0; i < nbnProfil; i++) {
        const documentImage = documentProfil[i].querySelector(".modalImage");
        documentImage.style.backgroundImage = `url(${donner.utilisateurs[profilChoisi[i]].photo})`;
        const documentNom = documentProfil[i].querySelector(".modalNom");
        console.log(documentProfil[i]);
        documentNom.innerHTML = donner.utilisateurs[profilChoisi[i]].nom;
        const documentPrnom = documentProfil[i].querySelector(".modalPrenom");
        documentPrnom.innerHTML = donner.utilisateurs[profilChoisi[i]].prenom;

        //détection de clik + donner badge
        documentProfil[i].addEventListener('click', function() {
            donner.utilisateurs[profilChoisi[i]].badges.jeux = true;
            data.push(donner);
            modal.style.display = 'none';
          });
    }

}


function profilTypeHTML(){
    return `<div class="modalProfilType">
    <div class="modalImage"></div>
    <div>
        <p class="modalPrenom">prenom</p>
        <p class="modalNom">nom</p>
    </div>
</div>`
}