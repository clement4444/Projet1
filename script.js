import { data } from "../../commun/js/data.js";
import { htmlProfil } from "./htmlCode.js";
import { htmlPlus } from "./htmlCode.js";
import { setBarre } from "./functionBarre.js";
import { setEcoute } from "./functionEcoute.js";
import { setEcouteBoutonAjouter } from "./functionEcoute.js";
import { changerCouleurProfil } from "./functionCouleurProfil.js";
import { setEcouteJeuxCrew } from "./functionEcoute.js";

//set la base de donner
let donner = data.set();



//récupéré les élement du document
const documentProfil = document.querySelector(".profil");

//récupéré le bouton jeux craw
const documentBoutonJeuxCrew = document.querySelector(".jeux");

//set les élément
let listeProfil = donner.utilisateurs;

//inisaliser la variable injection de code
let htmlTousProfil = "";

//crée les profil prét a injecter en html
for(let profil of listeProfil){
    htmlTousProfil+= htmlProfil(donner, profil.id);
}

//injecter les profil
htmlTousProfil += htmlPlus;
documentProfil.innerHTML = htmlTousProfil;

//récupère tout les profil dans le bonne odre
let documentListProfil = document.querySelectorAll(".profiltype");
//pour set tout les fonction des profil
for(let i = 0; i < documentListProfil.length ;i++){
    //set la barre de profil
    setBarre(i, documentListProfil, donner);
    setEcoute(i, documentListProfil, donner);
    changerCouleurProfil(i, documentListProfil, donner);
}
let documentBoutonAjouter = document.querySelector(".ajouter");

setEcouteBoutonAjouter(documentBoutonAjouter, donner);
setEcouteJeuxCrew(documentBoutonJeuxCrew);