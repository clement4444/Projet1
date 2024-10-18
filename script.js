import { data } from "../../commun/js/data.js";
import { setEcouteBoutonAjouter } from "./functionEcoute.js";
import { setEcouteJeuxCrew } from "./functionEcoute.js";
import { setEcouteBoutonProfilAleatoir } from "./functionEcoute.js";
import { spawProfil } from "./genererProfil.js";

//set la base de donner
let donner = data.set(true);


spawProfil();   
//récupéré le bouton jeux craw
const documentBoutonJeuxCrew = document.querySelector(".jeux button");

let documentBoutonAjouter = document.querySelector(".ajouter");

setEcouteBoutonAjouter(documentBoutonAjouter, donner);
setEcouteJeuxCrew(documentBoutonJeuxCrew);
setEcouteBoutonProfilAleatoir();