import { data } from "../../commun/js/data.js";
import { htmlProfil } from "./htmlCode.js";
import { htmlPlus } from "./htmlCode.js";
import { setBarre } from "./functionBarre.js";
import { setEcoute } from "./functionEcoute.js";
import { changerCouleurProfil } from "./functionCouleurProfil.js";
import { filtre } from "./filtre.js";


export function spawProfil(){
    //copier la base de donner
    let donner = data.copy();


    //set les élément
    let listeProfil = donner.utilisateurs;

    //mettre le nombre de profil a jour
    const documentNombreProfil = document.querySelector(".filtre > p");
    documentNombreProfil.innerHTML = `${listeProfil.length}👨‍💻`;

    //appliquer les filtre
    // listeProfil = filtre(listeProfil);     a voir ici


    //inisaliser la variable injection de code
    let htmlTousProfil = "";

    //crée les profil prét a injecter en html
    for(let profil of listeProfil){
        htmlTousProfil+= htmlProfil(donner, profil.id);
    }

    //additionner les profil a injecter
    htmlTousProfil += htmlPlus;
    //récupéré le contener des profil
    const documentProfil = document.querySelector(".profil");
    //injecter les profil dans le site
    documentProfil.innerHTML = htmlTousProfil;




    //crée les action du profil
    //récupère tout les profil dans le bonne odre
    let documentListProfil = document.querySelectorAll(".profiltype");
    //pour set tout les fonction des profil
    for(let i = 0; i < documentListProfil.length ;i++){
        //set la barre de profil
        setBarre(i, documentListProfil, donner);
        setEcoute(i, documentListProfil, donner);
        changerCouleurProfil(i, documentListProfil, donner);
    }
}