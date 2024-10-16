
export function setEcoutBoutonExit(BoutonExit){
    BoutonExit.addEventListener('click', function(event) {
        //emecher le rafairchissement
        event.preventDefault();
        window.location.href = '../../index.html';
    });
};