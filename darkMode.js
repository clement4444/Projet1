//ici
console.log("ok");

// darkMode.js
document.addEventListener('DOMContentLoaded', () => {
    const darkmodButton = document.getElementById('darkmod');
    const imageDarkmod = document.getElementById('imageDarkmod');

    // Vérifie le mode actuel et applique-le
    if (localStorage.getItem('theme') === 'dark') {
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
            localStorage.setItem('theme', 'dark');
        } else {
            imageDarkmod.src = './commun/image/soleil.png';
            localStorage.setItem('theme', 'light');
        }
    });
});
