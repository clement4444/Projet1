import { data } from "../../commun/js/data.js";
data.set(true);

//charger les donner
let donner = data.copy();

//récupéré tout les zonne de saisi
const nom = document.querySelector("#nom");
const image = document.querySelector(".photo");

//crée variable avec id du profil selec
let idProfilSelect;

//verifer si il a un profil selectioner
if(donner.profilSelect !== undefined && donner.profilSelect !== null && typeof donner.profilSelect === 'number'){
    //set idprofil
    idProfilSelect = donner.profilSelect;
    //charger le profil
    image.style.backgroundImage = `url("${donner.utilisateurs[idProfilSelect].photo}")`;
    nom.value = donner.utilisateurs[idProfilSelect].nom;

    //philippe rajouter toute les information a remplir
    
}else{
    //définir id du profil au dernier de la liste
    donner = data.add();
    idProfilSelect = donner.utilisateurs.length
}


//ecouter les champs de donner
nom.addEventListener('change', function(event) {
    donner.utilisateurs[idProfilSelect].nom = nom.value;
    data.push(donner);
});

//philippe rajouter une ecoute pour chaque saisi de donner (les selectioner sur le document avecx le queryselcor)