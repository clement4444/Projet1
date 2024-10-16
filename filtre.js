export function filtre(listeProfil){
    console.log(listeProfil);
    listeProfil.sort((a, b) => {
        if (a!==""){
            if (b!==""){
                if (a.nom.toLowerCase() < b.nom.toLowerCase()) {
                    return -1; // a est avant b
                }
                if (a.nom.toLowerCase() > b.nom.toLowerCase()) {
                    return 1;  // a est après b
                }
                return 0; // a et b sont égaux
            }else{
                return 1
            }
        }else{
            return -1;
        }
    });
    return listeProfil;
};