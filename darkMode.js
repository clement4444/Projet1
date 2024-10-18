import { data } from "./commun/js/data.js";

let donner = data.copy();

// darkMode.js
document.addEventListener('DOMContentLoaded', () => {
    const darkmodButton = document.getElementById('darkmod');
    const imageDarkmod = document.getElementById('imageDarkmod');

    // Vérifie le mode actuel et applique-le
    if (donner.darkMod) {
        document.body.classList.add('dark-mode');
        imageDarkmod.src = './commun/image/lune.png';
    } else {
        document.body.classList.add('light-mode');
        imageDarkmod.src = './commun/image/soleil.png';
    }

    darkmodButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        // Change l'image du bouton
        if (document.body.classList.contains('dark-mode')) {
            imageDarkmod.src = './commun/image/lune.png';
            donner.darkMod = true;
        } else {
            imageDarkmod.src = './commun/image/soleil.png';
            donner.darkMod=false;
        }
        data.push(donner);
    });
});
