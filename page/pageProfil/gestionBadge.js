import { data } from "../../commun/js/data.js";

const donner = data.copy();
console.log(donner);

//badge profil a 100%
const documentBadgeTexte100Profil = document.querySelector("#badgeText100Profil");
const documentBadgeImg100Profil = document.querySelector("#badgeImg100Profil");
if(!donner.utilisateurs[donner.profilSelect].badges.profil100){
    console.log("ok");
    documentBadgeTexte100Profil.classList.add('invisible');
    documentBadgeImg100Profil.src = "./public/point interrogation.png";
}

//badge 10ème compte
const documentBadgeTexte10Compte = document.querySelector("#badgeText10Compte");
const documentBadgeImg10Compte = document.querySelector("#badgeImg10Compte");
if(!donner.utilisateurs[donner.profilSelect].badges.compte10){
    console.log("ok");
    documentBadgeTexte10Compte.classList.add('invisible');
    documentBadgeImg10Compte.src = "./public/point interrogation.png";
}

//badge bouton secret
const documentBadgeTexteBoutonSecret = document.querySelector("#badgeTextBoutonSecret");
const documentBadgeImgBoutonSecret = document.querySelector("#badgeImgBoutonSecret");
if(!donner.utilisateurs[donner.profilSelect].badges.boutonSecrt){
    console.log("ok");
    documentBadgeTexteBoutonSecret.classList.add('invisible');
    documentBadgeImgBoutonSecret.src = "./public/point interrogation.png";
}

//Jeux des Wilders
const documentBadgeTexte100JeuxWilders = document.querySelector("#badgeText100JeuxWilders");
const documentBadgeImg100JeuxWilders = document.querySelector("#badgeImg100JeuxWilders");
if(!donner.utilisateurs[donner.profilSelect].badges.jeux){
    console.log("ok");
    documentBadgeTexte100JeuxWilders.classList.add('invisible');
    documentBadgeImg100JeuxWilders.src = "./public/point interrogation.png";
}