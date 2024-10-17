import { data } from "../../commun/js/data.js";
import { setEcouteCroixFermer } from "./setEcoute.js";

//mettre en place la coix
setEcouteCroixFermer();
let donner = data.copy();
console.log(donner);

//pour le nom
const documentNom = document.querySelector("#profilNom");
documentNom.innerHTML = donner.utilisateurs[donner.profilSelect].nom;