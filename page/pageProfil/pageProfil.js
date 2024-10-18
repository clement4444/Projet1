import { data } from "../../commun/js/data.js";
import { setEcouteCroixFermer } from "./setEcoute.js";


//mettre en place la coix
setEcouteCroixFermer();
let donner = data.copy();

//ajouter badge 10eme compte
if(donner.profilSelect == 9){
    //variable qui retien les autre 10eme compte
    let autre10compte = false;
    for(const compte of donner.utilisateurs){
        if (compte.badges.compte10){
            autre10compte = true;
        }
    }
    if(!autre10compte){
        donner.utilisateurs[donner.profilSelect].badges.compte10 = true;
        data.push(donner);
    }
}
console.log(donner);

function backgroundColor(documentObjet){
    let couleur;
    if(donner.utilisateurs[donner.profilSelect].couleur === "vert"){
        couleur = "0, 95, 107";
    }else if(donner.utilisateurs[donner.profilSelect].couleur === "vertClaire"){
        couleur = "23, 133, 17";
    }else if(donner.utilisateurs[donner.profilSelect].couleur === "rose"){
        couleur = "95, 14, 80";
    }else if(donner.utilisateurs[donner.profilSelect].couleur === "bleu"){
        couleur = "14, 21, 105";
    }else if(donner.utilisateurs[donner.profilSelect].couleur === "jaunne"){
        couleur = "107, 98, 0";
    }
    documentObjet.style.backgroundColor = `rgb(${couleur})`
}

//set le fond en fonction de la couleur du profil
const documentDivInofo = document.querySelector(".divInofo");
const documentDivDesciption = document.querySelector(".divDesciption");
const documentDivObjectif = document.querySelector(".divObjectif");
const documentH2Badges = document.querySelector(".sectionBage h2");
//les 4 fond de badges
const documentBadges = document.querySelectorAll(".bloxBadge div");
//mettre le fond de couleur pour les section
backgroundColor(documentDivInofo);
backgroundColor(documentDivDesciption);
backgroundColor(documentDivObjectif);
backgroundColor(documentH2Badges);
//mettre le fond pour les badges
for(let i of documentBadges){
    backgroundColor(i);
}



//pour la photo
const documentPhoto = document.querySelector("#profilPhoto");
documentPhoto.src = donner.utilisateurs[donner.profilSelect].photo;

// pour le prénom
const documentPrénom = document.querySelector("#profilPrénom");
documentPrénom.innerHTML = donner.utilisateurs[donner.profilSelect].prenom;

//pour le nom
const documentNom = document.querySelector("#profilNom");
documentNom.innerHTML = donner.utilisateurs[donner.profilSelect].nom;

//pour l'âge
const documentAge = document.querySelector("#profilAge");
documentAge.innerHTML = donner.utilisateurs[donner.profilSelect].age;

//pour le statut
const documentStatut = document.querySelector("#profilStatut");
if(donner.utilisateurs[donner.profilSelect].statut !== "none"){
    documentStatut.innerHTML = donner.utilisateurs[donner.profilSelect].statut;
}else{
    documentStatut.innerHTML ="";
}

//pour l'adresse mail
const documentMail = document.getElementById("profilAdresseMail");
documentMail.innerHTML = donner.utilisateurs[donner.profilSelect].mail;

//pour la description
const documentDesciption = document.getElementById("Desciption");
documentDesciption.innerHTML = donner.utilisateurs[donner.profilSelect].desciption;

//pour les objectif professionnels
const documentobjectifPersonel = document.getElementById("objectifPersonel");
documentobjectifPersonel.innerHTML = donner.utilisateurs[donner.profilSelect].objectifPersonel;


//réseaux
//charger l insta
const documentInsta = document.querySelector("#profilInsta");
//verifier qu'il a un lien
if(donner.utilisateurs[donner.profilSelect].resaux.instagrame !== "" && donner.utilisateurs[donner.profilSelect].resaux.instagrame !== "-1"){
    documentInsta.addEventListener('click', function(event) {
        window.open(`https://www.instagram.com/${donner.utilisateurs[donner.profilSelect].resaux.instagrame}/`, "_blank");
    });
}else{
    //cacher
    documentInsta.style.display = "none";
}

//charger le linkedin du document
const documentLinkedin = document.querySelector("#profilLinkedin");
//verifier qu'il a un lien
if(donner.utilisateurs[donner.profilSelect].resaux.in !== "" && donner.utilisateurs[donner.profilSelect].resaux.in !== "-1"){
    documentLinkedin.addEventListener('click', function(event) {
        window.open(`https://www.linkedin.com/${donner.utilisateurs[donner.profilSelect].resaux.in}/`, "_blank");
    });
}else{
    //cacher
    documentLinkedin.style.display = "none";
}


//charger le facebook du dodcument
const documentFacebook = document.querySelector("#profilFacebook");
//verifier qu'il a un lien
if(donner.utilisateurs[donner.profilSelect].resaux.facebookin !== "" && donner.utilisateurs[donner.profilSelect].resaux.facebookin !== "-1"){
    documentFacebook.addEventListener('click', function(event) {
        window.open(`https://www.facebook.com/${donner.utilisateurs[donner.profilSelect].resaux.facebookin}/`, "_blank");
    });
}else{
    //cacher
    documentFacebook.style.display = "none";
}


//charger le x du comcument
const documentX = document.querySelector("#profilX");
//verifier qu'il a un lien
if(donner.utilisateurs[donner.profilSelect].resaux.twitter !== "" && donner.utilisateurs[donner.profilSelect].resaux.twitter !== "-1"){
    //mettre le lien
    documentX.addEventListener('click', function(event) {
        window.open(`https://x.com/${donner.utilisateurs[donner.profilSelect].resaux.twitter}/`, "_blank");
    });
}else{
    //cacher
    documentX.style.display = "none";
}