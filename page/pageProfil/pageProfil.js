import { data } from "../../commun/js/data.js";

data.set();

let donner = data.copy(); 


//récupérer les endoit a afficer

const nom = document.querySelector(".rectangle2");
//idem pour tout les champs




//afficher sur la page les valeur
nom.textContent = donner.utilisateurs[donner.profilSelect].nom;

if(donner.utilisateurs[donner.profilSelect].badges.boutonSecrt){
    //rentre dans la condition si il a le badge bouton secret
}else{
    //rentre dans le sinon si il a pas le badge bouton secret
}


//bouton fermer
nom.addEventListener('change', function(event) {
    //change de page pour revenir a la page index général
    "../../index.html"
})


console.log(donner);
