//data V3
import { photoDefaut } from "./phauto.js";

export const data = {
    copy :function(){
        if (varifierdataSet()){
            //récuper les donner
            const donner = localStorage.getItem('datadonner');
            console.log("bien copier");
            //revoie les donner
            return JSON.parse(donner);
        }
    },
    push : function(donner, win=false){
        if (varifierdataSet()){
            //verifier que c'est un objet
            if (typeof donner === "object" && !Array.isArray(donner)){
                //chager les donner actuel
                let donnerActuel = localStorage.getItem('datadonner');
                //caste pour avoir un dico
                donnerActuel = JSON.parse(donnerActuel);
                
                try{
                    //verifie que le tableux est le meme
                    if (donnerActuel.utilisateurs.length+1 >= donner.utilisateurs.length && donnerActuel.utilisateurs.length-1 <= donner.utilisateurs.length){
                        //met dans le bon odre les profil
                        donner = trierIdUtilisateur(donner);
                        //envoie les donner dans la base de donner
                        localStorage.setItem('datadonner', JSON.stringify(donner));
                        console.log("bien envoyer");
                        if (win){
                            return true;
                        }else{
                            return donner;
                        }
                    }else{
                        console.log("eurreur push 01 : la base de donner que tu a envoyer est incomplette il a + de une différence avec la base de donner actuel");
                        throw new Error("push 01");
                    }
                }catch{
                    console.log("eurreur push 02 : tu a envoyer un element qui était pas le meme tableux le programe a crash car il a pas troiver la clé utilisateur");
                    throw new Error("push 02");
                }
            }else{
                console.log("eurreur push 03 : tu esseye d'envoyer autre chose que la base de donner");
                throw new Error("push 03");
            }
        }
    },
    set : function(forcer=false){
        //chager les donner actuel
        let donnerActuel = localStorage.getItem('datadonner');
        //caste pour avoir un dico
        donnerActuel = JSON.parse(donnerActuel);
        //verifier que les donner sont pas nul et pas forcer détre set
        if (donnerActuel == null || forcer){
            const donnerUtilisateur = { utilisateurs : [{nom : "van der eecken", prenom : "philippe", age : 59, statut : "éleve", mail : "", desciption : "je suis philippe", objectifPersonel : "a remplir", photo:photoDefaut, couleur:"", resaux : {instagrame : "", in : "", facebookin : "", twitter : ""}, badges : {profil100:false, compte10:false, jeux:false, boutonSecrt:false}, id : 0},
                {nom : "fiquet", prenom : "clément", age : 17, statut : "éleve", mail : "france@gmail.com", desciption : "je suis clément", objectifPersonel : "a définir", photo:photoDefaut, couleur:"", resaux : {instagrame : "insta2", in : "", facebookin : "", twitter : ""}, badges : {profil100:false, compte10:false, jeux:false, boutonSecrt:false}, id : 1},
                {nom : "yan", prenom : "yan", age : 20, statut : "éleve", mail : "", desciption : "a définir", objectifPersonel : "a définir", photo:photoDefaut, couleur:"", resaux : {instagrame : "insta3", in : "", facebookin : "", twitter : ""}, badges : {profil100:false, compte10:false, jeux:false, boutonSecrt:false}, id : 2},
                {nom : "fabien", prenom : "fabien", age : 19, statut : "éleve", mail : "", desciption : "a définir", objectifPersonel : "a définir", photo:photoDefaut, couleur:"", resaux : {instagrame : "insta4", in : "", facebookin : "", twitter : ""}, badges : {profil100:false, compte10:false, jeux:false, boutonSecrt:false}, id : 3}
            ], profilSelect :0, darkMod : false}
            
            //set les donner
            localStorage.setItem('datadonner', JSON.stringify(donnerUtilisateur));
            console.log("la base a été set");
            return donnerUtilisateur;
        }else{
            console.log("donner exiente garder");
            return donnerActuel
        }
    },
    add : function(donner=false){
        if (varifierdataSet()){
            let addPossible = true;
            //verifier que les donner on pas éte envoyer
            if (!donner){
                //si les donner son pas envoyer on prend la base de donner exitant
                donner = localStorage.getItem('datadonner');
                //caste pour que ce soit un objet
                donner = JSON.parse(donner);
            }else{
                //verifi que le dico est bon pour la suite
                addPossible = data.push(donner, true);
            }
            if (addPossible){
                //ajoute une ligne utilisateur
                let idAdd = donner.utilisateurs.length;
                donner["utilisateurs"].push({nom : "", prenom : "", age : null, statut : "", mail : "", desciption : "", objectifPersonel : "", photo:photoDefaut, couleur:"", resaux : {instagrame : "", in : "", facebookin : "", twitter : ""}, badges : {profil100:false, compte10:false, jeux:false, boutonSecrt:false}, id : idAdd});
                //met dans le bonne orde les profile
                donner = trierIdUtilisateur(donner);
                //met a jour la base de donner
                localStorage.setItem('datadonner', JSON.stringify(donner));
                //confirmation d'envoie
                console.log(`profile crée en indice ${(donner.utilisateurs.length)-1}`);
                return donner;
            }
            console.log("eurreur add 01 : le profile na pas été ajoute les donner fournie ne sont pas bonne");
            throw new Error("add 01");
        }
    },
    delProfil : function(id=false, donner=false){
        if (varifierdataSet()){
            let delPossible = true;
            if (!donner){
                //si les donner son pas envoyer on prend la base de donner exitant
                donner = localStorage.getItem('datadonner');
                //caste pour que ce soit un objet
                donner = JSON.parse(donner);
            }else{
                //verifie que les donner envoyer soit bonne
                delPossible = data.push(donner, true);
            }
            if (delPossible){
                if (id === "end"){
                    //set le dernier id de la liste
                    id = donner.utilisateurs.length-1;
                }
                if (typeof id === 'number' && !isNaN(id)){
                    if (donner.utilisateurs.length > 0){
                        if (id <= donner.utilisateurs.length-1 && id > -1){
                            if (donner.utilisateurs.length > 0){
                                //sup le profil
                                donner.utilisateurs.splice(id, 1);
                                //sauvgarder les donner
                                donner = trierIdUtilisateur(donner);
                                localStorage.setItem('datadonner', JSON.stringify(donner));
                                console.log(`le profil d'indice ${id} a bien été sup`);
                                return donner;
                            }else{
                                console.log("immpossible de suprimer le profile car il a plus de profil");
                            }

                        } else{
                            console.log("eurreur delProfile 01 : id choisi est superieur a la taille de la liste ou infèrieur a 0");
                            throw new Error("delProfile 01");
                        }
                    }else{
                        console.log("il a pas de profile a suprimer :)");
                    }
                }else{
                    console.log("eurreur delProfile 02 : vous n'avez pas rensénier de nombre correct de type nombre");
                    throw new Error("delProfile02");
                }
            }else{
                console.log("eurreur delProfile 03 : les donner envoyer son pas la bonne base de donner");
                throw new Error("delProfile 03");
            }
        }

    },
    boom:function(action="all"){
        // set profil all
        if (action==="all"){
            localStorage.clear();
            console.log("base de donner sup")
        }else if (action==="profil"){
            let donner = localStorage.getItem('datadonner');
            //caste pour que ce soit un objet
            donner = JSON.parse(donner);
            //sup tout les profile
            donner.utilisateurs.splice(0, donner.utilisateurs.length);
            //trie les profil dans le bonne odre
            donner = trierIdUtilisateur(donner);
            localStorage.setItem('datadonner', JSON.stringify(donner));
            console.log("tout les profile on été sup");
            return donner;

        }else if (action === "set"){
            localStorage.clear();
            //set la base de donner apreès l'avoir clear
            let donner = data.set(true);
            console.log("la base de donner a été sup puis re crée a neuf");
            return donner;
        }else{
            console.log("eurreur boom 01 : l'argument rentrer n'est pas valide voici les argumenet valide -> '', 'all','set', 'ptofil'");
            throw new Error("boom 01");
        }
    },
    help:function(){
        console.log(`Documentation du module data :

    data.set() : crée la base de donner sauf si elle exite déja ca garde les donnée existance
                    returne optionel -> la base de donner qui vient détre crée
                    argument optionel -> true -> force la base de donner a ce rénisialiser si elle exite déja

    data.copy() : renvoit une copie de la base de donner
                    returne obligatoir -> copie des donner

    data.push() : met a jour la base de donner
                    argument obligatoir -> la base de donner complète
                    returne optionel -> rien
    
    data.add() : rajoute une ligne a la liste des utilisateur (crée un nouvelle utilisateur quoi)
                    argument optionel -> pour donner la base de donner complet sur la quelle serons enregister les changement en plus de la base de donner local
                    returne optionel -> la base de donner avec le nouveaux profil

    data.delProfil() : suprime un élement de la liste utilisateur de la base de donner (suprime un utilisateur)
                    argument 1 obligatoir -> id qui veut étre sup de la liste utilisateur de la base de donner
                        0 a 9999 -> ca peut étre un nombre de type interger pas de "1" que des 1
                        "end" -> pour sup le dernier élement de la liste
                    argument 2 optionel -> pour donner la base de donner sur la quelle serons enregister la supretion en plus de la base de donner local
                    returne optionel -> renvoi la base de donner avec la supretion du profile

    data.boom() : suprime beucoup de chose a ne pas utiliser sans utilisation spécifique
                    argument 1 optionel :
                        "all" -> suprime la base de donner complete
                        "set" -> suprime la base de donner et la re crée juste après
                        "profil" -> suprime tout les profile
                    returne optionel -> renvoie la base de donner mis a jour pour set et profil mais pas pour all

    data.help() : affiche les commande possible du module data
                    argument optionel -> aucun
                    returne optionel -> rien
    
    data.helpBaseDonner : affciche un descriptif de la base de donner
                    argument optionel -> aucun
                    returne optionel -> rien

si il a un crash du ficher data et que c'est pas un crash volontaire du style eurreur action 0x prevenir clement
            
`);
    },
    helpBaseDonner:function(){
        console.log(`Documentation de la base de donner :
    la base de donner est un objet qui est renvoyer par a peut pré toute les méthode. cette objet a 3 élement :
        utilisateurs : qui contient la liste des profil enregister sur le site (ou crée par defaut)
        darkMode : qui contient un bouléen false ou true (true c'est quand le site est en darkMod sion par défaut c'est en false)
        profilSelect : qui sert a savoir quelle profil afficher d'une page a l'autre par defaut il est pas défini

    pour acceder a ses donner il suffit davoir la base de doner dans une variable (garce a data.copy() et nimporte quelle autre methode qui revoit la base de donner)

    puis faire variable.laMedtodeQueVousVoulez, exemple:
            variable.utilisateurs -> pour accéder a la liste des utilisateur
            variable.darkMode -> pour accéder a la variable du dark mode
            variable.profilSelect -> pour acceder a la variable du profile
    
    pour la liste utilisateur c'est un tableux [] qui content autant de objet qu'il a de profil. si il a 5 profil dans la base de donner on aura donc 5 objet de indic 0 a indic 4
    
    voila de quoi est composer ce fameux tableux:
        {nom : "", prenom : "", age : null, statut : "", mail : "", desciption : "", objectifPersonel : "", photo:undefined, couleur:"", resaux : {instagrame : "insta2", in : "", facebookin : "", twitter : ""}, badges : {profil100:false, compte10:false, jeux:false, boutonSecrt:false}, id : 1},
    
    voyons les différente clé que possède ce tableux:*
            nom -> pour stoker le nom
            prenom -> pour stoker le prenom
            age -> pour stoker age
            statue -> pour stoker si c'est un prof ou éleve
            mail -> pour stoker adresse mail
            description -> pour stoker la decription
            objectifPersonel -> pour stoker les objectif personel
            photo -> pour stoker la photo (sous base 64)
            couleur -> pour stoker la couleur du profil
            id -> pour récupére facilement son id de la liste de la base de donner
            resaux -> c'est un objet qui contient les réseaux:
                resaux.instagrame -> pour stoker instagramme
                resaux.in -> pour stoker in
                resaux.facebookin -> pour stoker facebook
                resaux.twitter -> pour stoker twitter
            badges -> c'est un objet qui contien tout les badge:
                profil100 -> un boolen (true/false) pour savoir si le badge profil remplie a 100% est obtenu
                compte10 -> un boolen (true/false) pour savoir si le badge 10eme compte est obtenu
                jeux -> un boolen (true/false) pour savoir si le badge jeux craw a 100% est obtenu
                boutonSecrt -> un boolen (true/false) pour savoir si le badge bouton secet est obtenu

    exemple pour accéder au donner:
        variable.utilisateurs[2].mail -> pour accéder au mail du 3eme utilisateur de la base de donner
        variable.utilisateurs[2].resaux.instagrame -> pour accéder au instagrame du 3eme utilisateur de la base de donner

            `);
    },
    image:{
        format64: function(image, callback){
            if (!image) {
                console.log("eurreur image.format64 01 : image non fournie");
                throw new Error("image.format64 01");
                return;
            }
        
            let lecteur = new FileReader();
        
            // Quand la lecture du fichier est terminée avec succès
            lecteur.onloadend = function(e) {
                let imageBase64 = e.target.result;  // Image convertie en Base64
                callback(imageBase64);
            };
        
            // Lire le fichier comme Base64
            lecteur.readAsDataURL(image);
        },
    }
};


function varifierdataSet(){
    //si les donner son pas envoyer on prend la base de donner exitant
    let donnerActuel = localStorage.getItem('datadonner');
    //caste pour que ce soit un objet
    donnerActuel = JSON.parse(donnerActuel);
    //verifier que c'est un dico
    if (donnerActuel !== null && donnerActuel !== undefined && typeof donnerActuel === "object" && !Array.isArray(donnerActuel)){
        if (donnerActuel.utilisateurs){
            return true
        }else{
            console.log("eurreur set 01 : la base de donner na pas été set");
            throw new Error("set 01");
            return false
        }
    }else{
        console.log("eurreur set 01 : la base de donner na pas été set");
        throw new Error("set 01");
        return false
    }
}

function trierIdUtilisateur(donner){
    //trie les id du plus petite au plus grand
    donner.utilisateurs = donner.utilisateurs.sort((a, b) => a.id - b.id);
    //remet tout les id port rapport a leur place dans la liste (si il en a de sup)
    for (let i=1;i<donner.utilisateurs.length; i++){
        donner.utilisateurs[i].id = i;
    }
    return donner
}