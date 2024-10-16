import { data } from "../../commun/js/data.js";
import { ecouteBouton } from "./creationEcoute.js";

//charger les donner
let donner = data.copy();

//récupéré tout les zonne de saisi
const nom = document.querySelector("#nom");
const image = document.querySelector("#fauto");
const prenom = document.querySelector("#prenom");
const age = document.querySelector("#age");
const mail = document.querySelector("#email");
const description = document.querySelector("#description");
const objectiPersonel = document.querySelector("#objectifs");
const instagram = document.querySelector("#insta");
const caseinstagram = document.querySelector("#caseInsta");
const linkedin = document.querySelector("#linkedin");
const caseLinkedin = document.querySelector("#caseIn");
const facebook = document.querySelector("#facebook");
const caseFacebook = document.querySelector("#casefacebook");
const twitter = document.querySelector("#x");
const caseTwitter = document.querySelector("#caseX");
const statut = document.querySelector("#statue");
const couleur = document.querySelector("#couleur");

//bouton sup
const boutonSup = document.querySelector("#boutonSup");

//crée variable avec id du profil selec
let idProfilSelect;
console.log(donner.profilSelect);
//verifer si il a un profil selectioner
if(donner.profilSelect !== undefined && donner.profilSelect !== null && typeof donner.profilSelect === 'number' || donner.profilSelect === "-1"){
    if (donner.profilSelect===-1){
        //set id profil select au dernier
        idProfilSelect = donner.utilisateurs.length-1
    }else{
        //set idprofil
        idProfilSelect = donner.profilSelect;
    }
    //charger le profil
    image.style.backgroundImage = `url("${donner.utilisateurs[idProfilSelect].photo}")`;
    nom.value = donner.utilisateurs[idProfilSelect].nom;
    prenom.value = donner.utilisateurs[idProfilSelect].prenom;
    //set age
    if(donner.utilisateurs[idProfilSelect].age===null){
        age.value = "";
    }else{
        age.value = donner.utilisateurs[idProfilSelect].age;
    }
    mail.value = donner.utilisateurs[idProfilSelect].mail;
    description.value = donner.utilisateurs[idProfilSelect].desciption;
    objectiPersonel.value = donner.utilisateurs[idProfilSelect].objectifPersonel;
    //insta
    if(donner.utilisateurs[idProfilSelect].resaux.instagrame !== "-1"){
        instagram.value = donner.utilisateurs[idProfilSelect].resaux.instagrame;
    }else{
        instagram.value = "";
        caseinstagram.checked = true;

    }
    //linkedin
    if(donner.utilisateurs[idProfilSelect].resaux.in !== "-1"){
        linkedin.value = donner.utilisateurs[idProfilSelect].resaux.in;
    }else{
        linkedin.value = "";
        caseLinkedin.checked = true;
    }
    //facekook
    if(donner.utilisateurs[idProfilSelect].resaux.facebookin !== "-1"){
        facebook.value = donner.utilisateurs[idProfilSelect].resaux.facebookin;
    }else{
        facebook.value = "";
        caseFacebook.checked = true;

    }
    //twitter
    if(donner.utilisateurs[idProfilSelect].resaux.twitter !== "-1"){
        twitter.value = donner.utilisateurs[idProfilSelect].resaux.twitter;
    }else{
        twitter.value = "";
        caseTwitter.checked = true;

    }
    statut.value = donner.utilisateurs[idProfilSelect].statut;
    couleur.value = donner.utilisateurs[idProfilSelect].couleur;

    //pour dire que c'est quelle profil
    donner.bakUp = donner.utilisateurs[idProfilSelect];
    data.push(donner);
    
}else{
    //définir id du profil au dernier de la liste
    donner = data.add();
    //pour dire que c'est le dernier (nouveux profil)
    donner.profilSelect = -1;
    //dire a la bakup que c'est un compte vide
    donner.bakUp = "-1";
    data.push(donner);
    idProfilSelect = donner.utilisateurs.length-1
    //mettre image de profil par defaut
    image.style.backgroundImage = `url("${donner.utilisateurs[idProfilSelect].photo}")`;
}

//récupérer les modification du profil selec
donner = data.copy();


//ecouter les champs de donner
image.addEventListener('change', function(event) {
    //récupéré image
    let inputImage = event.target.files[0];
    //function transphor en base 64
    data.image.format64(inputImage, function(imageBase64){
        //meta jour les donner et envoie
        donner.utilisateurs[idProfilSelect].photo = imageBase64;
        data.push(donner);
        image.style.backgroundImage = `url("${donner.utilisateurs[idProfilSelect].photo}")`;

    });
});
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
    donner.utilisateurs[idProfilSelect].desciption = description.value;
    data.push(donner);
});
objectiPersonel.addEventListener('change', function(event) {
    donner.utilisateurs[idProfilSelect].objectifPersonel = objectiPersonel.value;
    data.push(donner);
});
instagram.addEventListener('change', function(event) {
    donner.utilisateurs[idProfilSelect].resaux.instagrame = instagram.value;
    caseinstagram.checked = false;
    data.push(donner);
});
caseinstagram.addEventListener('change', function(event) {
    //verifie que la case n' a pas été docher pour addapter les donner
    if (caseinstagram.checked){
        donner.utilisateurs[idProfilSelect].resaux.instagrame = "-1";
    }else{
        donner.utilisateurs[idProfilSelect].resaux.instagrame = "";
    }
    instagram.value = "";
    data.push(donner);
});
linkedin.addEventListener('change', function(event) {
    donner.utilisateurs[idProfilSelect].resaux.in = linkedin.value;
    caseLinkedin.checked = false;
    data.push(donner);
});
caseLinkedin.addEventListener('change', function(event) {
    //verifie que la case n' a pas été docher pour addapter les donner
    if (caseLinkedin.checked){
        donner.utilisateurs[idProfilSelect].resaux.in = "-1";
    }else{
        donner.utilisateurs[idProfilSelect].resaux.in = "";
    }
    linkedin.value = "";
    data.push(donner);
});
facebook.addEventListener('change', function(event) {
    donner.utilisateurs[idProfilSelect].resaux.facebookin = facebook.value;
    caseFacebook.checked = false;
    data.push(donner);
});
caseFacebook.addEventListener('change', function(event) {
    //verifie que la case n' a pas été docher pour addapter les donner
    if (caseFacebook.checked){
        donner.utilisateurs[idProfilSelect].resaux.facebookin = "-1";
    }else{
        donner.utilisateurs[idProfilSelect].resaux.facebookin = "";
    }
    facebook.value = "";
    data.push(donner);
});
twitter.addEventListener('change', function(event) {
    donner.utilisateurs[idProfilSelect].resaux.twitter = twitter.value;
    caseTwitter.checked = false;
    data.push(donner);
});
caseTwitter.addEventListener('change', function(event) {
    //verifie que la case n' a pas été docher pour addapter les donner
    if (caseTwitter.checked){
        donner.utilisateurs[idProfilSelect].resaux.twitter = "-1";
    }else{
        donner.utilisateurs[idProfilSelect].resaux.twitter = "";
    }
    twitter.value = "";
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

//bouton sup
boutonSup.addEventListener('click', function(event) {
    //sup le profil
    data.delProfil(idProfilSelect);
    //reture page acceil
    window.location.href = '../../index.html#leCrew';
});

//récupérer les bouton save et annuler
let documentboutonSave = document.querySelector(".boutonSave");
let documentboutonAnuller = document.querySelector(".boutonAnnuler");

//crée les ecoute
ecouteBouton(documentboutonSave, documentboutonAnuller, idProfilSelect);
