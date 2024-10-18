import { photoDefaut } from "./commun/js/phauto.js";
import { data } from "../../commun/js/data.js";


function caculerPourssantBarre(donner, id){
    let nombreRemplie = 0;
    //ajouter point nom
    if(donner.utilisateurs[id].nom !== ""){
        nombreRemplie+=1;
    }
    //ajouter point de prenom
    if(donner.utilisateurs[id].prenom !== ""){
        nombreRemplie += 1;
    }
    //ajouter point age
    if(donner.utilisateurs[id].age > 0){
        nombreRemplie += 1;
    }
    //ajouter point statut
    if(donner.utilisateurs[id].statut !== "none"){
        nombreRemplie += 1;
    }
    //ajouter point mail
    if(donner.utilisateurs[id].mail !== ""){
        nombreRemplie += 1;
    }
    //ajouter point desciption
    if(donner.utilisateurs[id].desciption !== ""){
        nombreRemplie += 1;
    }
    //ajouter point objectifPersonel
    if(donner.utilisateurs[id].objectifPersonel !== ""){
        nombreRemplie += 1;
    }
    //ajouter point photo
    if(donner.utilisateurs[id].photo !== "" && photoDefaut !== donner.utilisateurs[id].photo){
        nombreRemplie += 1;
    }
    //ajouter point couleur
    // if(donner.utilisateurs[id].couleur !== ""){
    //     nombreRemplie += 1;
    // }
    //ajouter point instagrame
    if(donner.utilisateurs[id].resaux.instagrame !== ""){
        nombreRemplie += 1;
    }
    //ajouter point in
    if(donner.utilisateurs[id].resaux.in !== ""){
        nombreRemplie += 1;
    }
    //ajouter point facebookin
    if(donner.utilisateurs[id].resaux.facebookin !== ""){
        nombreRemplie += 1;
    }
    //ajouter point twitter
    if(donner.utilisateurs[id].resaux.twitter !== ""){
        nombreRemplie += 1;
    }

    let pourssantDeRemplie = ((nombreRemplie/12)*100);
    return pourssantDeRemplie
}


function defcouleurBarre(pourssantDeRemplie){
    const rouge = "255, 0, 0";
    const orange = "255, 166, 0";
    const jaune = "247, 255, 0";
    const vert = "97, 255, 0";
    const vertFoncer = "34, 176, 42";
    if (pourssantDeRemplie < 20){
        return rouge;
    }else if(pourssantDeRemplie < 40){
        return orange;
    }else if(pourssantDeRemplie < 70){
        return jaune;
    }else if(pourssantDeRemplie < 90){
        return vert;
    }else{
        return vertFoncer;
    }
}

export function setBarre(id, documentListProfil, donner){
    //récupéré la barre a mettre
    let documentBarre = documentListProfil[id].querySelector(".profilTypeBarre p");

    //caculer le % de rempliséson du compte et appliquer la longeur
    const pourssantDeRemplie = caculerPourssantBarre(donner, id);
    documentBarre.style.width = `${pourssantDeRemplie}%`

    //définir la couleur et l'appliquer
    const couleurBarre = defcouleurBarre(pourssantDeRemplie);
    documentBarre.style.backgroundColor = `rgb(${couleurBarre})`;
    if(pourssantDeRemplie >= 100){
        donner.utilisateurs[id].badges.profil100 = true;
    }
    data.push(donner);
}


