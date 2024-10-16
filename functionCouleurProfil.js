export function changerCouleurProfil(id ,documentListProfil, donner){
    //récupérer le div a colorier
    let profil = documentListProfil[id];
    //crér variable couleur
    let couleur;
    //set la variable couleur en fonction de la couleur choisi
    if(donner.utilisateurs[id].couleur === "vert"){
        couleur = "0, 95, 107";
    }else if(donner.utilisateurs[id].couleur === "vertClaire"){
        couleur = "23, 133, 17";
    }else if(donner.utilisateurs[id].couleur === "rose"){
        couleur = "95, 14, 80";
    }else if(donner.utilisateurs[id].couleur === "bleu"){
        couleur = "14, 21, 105";
    }else if(donner.utilisateurs[id].couleur === "jaunne"){
        couleur = "107, 98, 0";
    }
    //appliquer la couleur au profil
    profil.style.backgroundColor = `rgb(${couleur})`;
};