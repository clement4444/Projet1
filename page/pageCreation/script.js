import { data } from "../../commun/js/data.js";
data.set(true);

//charger les donner
let donner = data.copy();

//récupéré tout les zonne de saisi
const nom = document.querySelector("#nom");
const image = document.querySelector(".fauto");
const prenom = document.querySelector("#prenom");
const age = document.querySelector("#age");
const mail = document.querySelector("#email");
const description = document.querySelector("#description");
const objectiPersonel = document.querySelector("#objectifs");
const instagram = document.querySelector("#insta");
const linkedin = document.querySelector("#linkedin");
const facebook = document.querySelector("#facebook");
const twitter = document.querySelector("#x");
const statut = document.querySelector("#statue");
const couleur = document.querySelector("#couleur");


//crée variable avec id du profil selec
let idProfilSelect;
console.log(donner);
//verifer si il a un profil selectioner
if(donner.profilSelect !== undefined && donner.profilSelect !== null && typeof donner.profilSelect === 'number'){
    //set idprofil
    idProfilSelect = donner.profilSelect;
    //charger le profil
    image.style.backgroundImage = `url("${donner.utilisateurs[idProfilSelect].photo}")`;
    nom.value = donner.utilisateurs[idProfilSelect].nom;
    prenom.value = donner.utilisateurs[idProfilSelect].prenom;
    age.value = donner.utilisateurs[idProfilSelect].age;
    mail.value = donner.utilisateurs[idProfilSelect].mail;
    description.value = donner.utilisateurs[idProfilSelect].description;
    objectiPersonel.value = donner.utilisateurs[idProfilSelect].objectifPersonel;
    instagram.value = donner.utilisateurs[idProfilSelect].instagrame;
    linkedin.value = donner.utilisateurs[idProfilSelect].in;
    facebook.value = donner.utilisateurs[idProfilSelect].facebookin;
    twitter.value = donner.utilisateurs[idProfilSelect].twitter;
    statut.value = donner.utilisateurs[idProfilSelect].statut;
    couleur.value = donner.utilisateurs[idProfilSelect].couleur;

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
prenom.addEventListener('change', function(event) {
    donner.utilisateurs[idProfilSelect].prenom = prenom.value;
    data.push(donner);
});
age.addEventListener('change', function(event) {
    donner.utilisateurs[idProfilSelect].age = age.value;
    data.push(donner);
});
mail.addEventListener('change', function(event) {
    donner.utilisateurs[idProfilSelect].mail = mail.value;
    data.push(donner);
});
description.addEventListener('change', function(event) {
    donner.utilisateurs[idProfilSelect].description = description.value;
    data.push(donner);
});
objectiPersonel.addEventListener('change', function(event) {
    donner.utilisateurs[idProfilSelect].objectiPersonel = objectiPersonel.value;
    data.push(donner);
});
instagram.addEventListener('change', function(event) {
    donner.utilisateurs[idProfilSelect].instagrame = instagram.value;
    data.push(donner);
});
linkedin.addEventListener('change', function(event) {
    donner.utilisateurs[idProfilSelect].in = linkedin.value;
    data.push(donner);
});
facebook.addEventListener('change', function(event) {
    donner.utilisateurs[idProfilSelect].facebookin = facebook.value;
    data.push(donner);
});
twitter.addEventListener('change', function(event) {
    donner.utilisateurs[idProfilSelect].twitter = twitter.value;
    data.push(donner);
});
statut.addEventListener('change', function(event) {
    donner.utilisateurs[idProfilSelect].statut = statut.value;
    data.push(donner);
});
couleur.addEventListener('change', function(event) {
    donner.utilisateurs[idProfilSelect].couleur = couleur.value;
    data.push(donner);
});

//philippe rajouter une ecoute pour chaque saisi de donner (les selectioner sur le document avecx le queryselcor)