import { data } from "../../commun/js/data.js";
import { setEcouteCroixFermer } from "./setEcoute.js";

//mettre en place la coix
setEcouteCroixFermer();
let donner = data.copy();

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
documentStatut.innerHTML = donner.utilisateurs[donner.profilSelect].statut;

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
const documentInsta = document.querySelector("#profilInsta");

documentInsta.addEventListener('click', function(event) {
    window.open(`https://www.instagram.com/${donner.utilisateurs[donner.profilSelect].resaux.instagrame}/`, "_blank");
});

const documentLinkedin = document.querySelector("#profilLinkedin");

documentLinkedin.addEventListener('click', function(event) {
    window.open(`https://www.linkedin.com/${donner.utilisateurs[donner.profilSelect].resaux.in}/`, "_blank");
});

const documentFacebook = document.querySelector("#profilFacebook");


documentFacebook.addEventListener('click', function(event) {
    window.open(`https://www.facebook.com/${donner.utilisateurs[donner.profilSelect].resaux.facebookin}/`, "_blank");
});


const documentX = document.querySelector("#profilX");

documentX.addEventListener('click', function(event) {
    window.open(`https://x.com/${donner.utilisateurs[donner.profilSelect].resaux.twitter}/`, "_blank");
});