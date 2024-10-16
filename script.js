import { data } from "../../commun/js/data.js";
import { setEcouteBoutonAjouter } from "./functionEcoute.js";
import { setEcouteJeuxCrew } from "./functionEcoute.js";
import { setEcouteBoutonProfilAleatoir } from "./functionEcoute.js";
import { spawProfil } from "./genererProfil.js";

//set la base de donner
let donner = data.set();


spawProfil();   
//récupéré le bouton jeux craw
const documentBoutonJeuxCrew = document.querySelector(".jeux");

let documentBoutonAjouter = document.querySelector(".ajouter");

setEcouteBoutonAjouter(documentBoutonAjouter, donner);
setEcouteJeuxCrew(documentBoutonJeuxCrew);
setEcouteBoutonProfilAleatoir();