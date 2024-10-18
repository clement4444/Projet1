const documentAllIcon = document.querySelectorAll(".icon");

const allLien = ["./scr/esserEgg/eggSite/index.html", "https://www.terdav.com/", "https://fr.uefa.com/uefachampionsleague/"];
const allImage = ["./scr/esserEgg/egg1.png", "./scr/esserEgg/egg2.png", "./scr/esserEgg/egg3.png"];

for (let i=0; i<3; i++){
    // Quand la souris entre sur l'image (hover)
    documentAllIcon[i].addEventListener("mouseenter", () => {
        documentAllIcon[i].src = allImage[i];  // Change la source de l'image
    });

    // Quand la souris quitte l'image
    documentAllIcon[i].addEventListener("mouseleave", () => {
        documentAllIcon[i].src = "./scr/independant.png";  // Remet l'image d'origine
    });
    //quand est cliker
    documentAllIcon[i].addEventListener("click", () => {
        window.open(allLien[i], "_blank");
    });
}

