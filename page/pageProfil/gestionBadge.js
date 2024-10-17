import { data } from "../../commun/js/data.js";

const donner = data.copy();
console.log(donner);

//badge profil a 100%
const documentBadgeTexte100Profil = document.querySelector("#badgeText100Profil");
const documentBadgeImg100Profil = document.querySelector("#badgeImg100Profil");
if(!donner.utilisateurs[donner.profilSelect].badges.profil100){
    documentBadgeTexte100Profil.classList.add('invisible');
    documentBadgeImg100Profil.src = "./public/point interrogation.png";
}

//badge 10ème compte
const documentBadgeTexte10Compte = document.querySelector("#badgeText10Compte");
const documentBadgeImg10Compte = document.querySelector("#badgeImg10Compte");
if(!donner.utilisateurs[donner.profilSelect].badges.compte10){
    documentBadgeTexte10Compte.classList.add('invisible');
    documentBadgeImg10Compte.src = "./public/point interrogation.png";
}

//badge bouton secret
const documentBadgeTexteBoutonSecret = document.querySelector("#badgeTextBoutonSecret");
const documentBadgeImgBoutonSecret = document.querySelector("#badgeImgBoutonSecret");
if(!donner.utilisateurs[donner.profilSelect].badges.boutonSecrt){
    documentBadgeTexteBoutonSecret.classList.add('invisible');
    documentBadgeImgBoutonSecret.src = "./public/point interrogation.png";
}

//Jeux des Wilders
const documentBadgeTexte100JeuxWilders = document.querySelector("#badgeText100JeuxWilders");
const documentBadgeImg100JeuxWilders = document.querySelector("#badgeImg100JeuxWilders");
if(!donner.utilisateurs[donner.profilSelect].badges.jeux){
    documentBadgeTexte100JeuxWilders.classList.add('invisible');
    documentBadgeImg100JeuxWilders.src = "./public/point interrogation.png";
}


const documentBoutonSecret = document.querySelector("#boutonSecret");

documentBoutonSecret.addEventListener('click', function(event) {
    donner.utilisateurs[donner.profilSelect].badges.boutonSecrt = true;
    data.push(donner);
    //affiche le badge
    documentBadgeTexteBoutonSecret.classList.remove('invisible');
    documentBadgeImgBoutonSecret.src = "./public/bouton secret.png";
});
