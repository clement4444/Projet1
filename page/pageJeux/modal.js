// Get the modal element
const modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
const closeModalBtn = document.querySelector('.close');

// When the user clicks on <span> (x), close the modal
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

export function afficherModal(){
    modal.style.display = 'block';
}
