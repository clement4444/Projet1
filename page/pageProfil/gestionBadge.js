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

