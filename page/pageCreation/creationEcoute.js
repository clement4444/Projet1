import { data } from "../../commun/js/data.js";


export function ecouteBouton(boutonSave, boutonAnuller, id){
    let donner = data.copy();
    boutonSave.addEventListener('click', function(event) {
        //emecher le rafairchissement
        event.preventDefault();
        //revenir a la page principal
        window.location.href = '../../index.html#leCrew';
      });
      boutonAnuller.addEventListener('click', function(event) {
        //emecher le rafairchissement
        event.preventDefault();
        
        if(donner.bakUp === "-1"){
          //sup le profile qui est le profil qui vient étre anuler de crée
          data.delProfil(id);
          //reture page acceil
          window.location.href = '../../index.html#leCrew';
        }else{
          //resaure les ancienne donner
          donner.utilisateurs[id] = donner.bakUp;
          //met a jour la base de donner
          data.push(donner);
          //retourn a la page principal
          window.location.href = '../../index.html#leCrew';
        }
      });
};