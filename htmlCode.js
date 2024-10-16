export function htmlProfil(donner, id){
    return `<div class="profiltype">
    <button type="button" class="crayon">✏️</button>
    <div class="imageTypeCadre">
        <img src="${donner.utilisateurs[id].photo}" alt="photo utilisateur"/>
    </div>
    <div class="profilTypeInfo">
        <p>${donner.utilisateurs[id].prenom}</p>
        <p>${donner.utilisateurs[id].nom}</p>
    </div>
    <div class="profilTypeBarre">
        <p></p>
    </div>
</div>`}


export const htmlPlus = `<button class="ajouter" type="button">
    <p class="plusVertical"></p>
    <p class="plusHaurisontal"></p>
    <p class="plusTexte">AJOUTER</p>
</button>`;